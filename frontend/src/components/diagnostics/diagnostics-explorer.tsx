"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  LayoutGrid,
  Image as ImageIcon,
  Heart,
  Activity,
  Stethoscope,
  Droplet,
  Brain,
  HeartPulse,
  Bone,
} from "lucide-react";
import {
  diagnostics,
  diagnosticCategories,
  type DiagnosticCategory,
} from "@/lib/data/diagnostics";

/* Structural, rather than lucide's LucideIcon alias: all these components need
   to accept is a className, and this cannot drift if the library retypes. */
type IconComponent = React.ComponentType<{ className?: string }>;

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const UPLOADS = "/assets/uploads/services";
const img = (file: string) => encodeURI(`${BP}${UPLOADS}/${file}`);

/* "All Diagnostics" is represented by null rather than by a category value, so
   the filter cannot collide with a real category name. */
type Filter = DiagnosticCategory | null;

const CATEGORY_ICONS: Record<DiagnosticCategory, IconComponent> = {
  Imaging: ImageIcon,
  "Women & Child": Heart,
  Interventional: Activity,
  Dental: Stethoscope,
  "Liver Care": Droplet,
  Neuro: Brain,
  Cardiac: HeartPulse,
  Musculoskeletal: Bone,
};

export function DiagnosticsExplorer() {
  const [filter, setFilter] = useState<Filter>(null);

  const visible = filter
    ? diagnostics.filter((item) => item.categories.includes(filter))
    : diagnostics;

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Filter rail. Scrolls sideways on a phone rather than wrapping into
          several rows, which is what the design shows. */}
      <div className="-mx-4 overflow-x-auto px-4 pb-1 sm:mx-0 sm:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max items-center gap-2 rounded-full bg-white p-2 shadow-[0_10px_30px_-18px_rgb(20_47_134/0.35)] ring-1 ring-[#142F86]/10 lg:w-full">
          <FilterPill
            icon={LayoutGrid}
            label="All Diagnostics"
            active={filter === null}
            onClick={() => setFilter(null)}
          />
          {diagnosticCategories.map((category) => (
            <FilterPill
              key={category}
              icon={CATEGORY_ICONS[category]}
              label={category}
              active={filter === category}
              onClick={() => setFilter(category)}
            />
          ))}
        </div>
      </div>

      {/* One column on a phone, two at md, three from lg — the desktop mockup is
          a 3x3 grid, the phone mockup a single stack of wide rows. */}
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:mt-8 lg:grid-cols-3">
        {visible.map((item) => (
          <Link
            key={item.slug}
            href={`/diagnostics/${item.slug}`}
            className="group relative flex items-stretch gap-4 overflow-hidden rounded-2xl bg-white p-3 shadow-[0_10px_30px_-20px_rgb(20_47_134/0.4)] ring-1 ring-[#142F86]/10 transition hover:shadow-[0_18px_40px_-20px_rgb(20_47_134/0.45)] hover:ring-[#31B4F4]/45"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img(item.image)}
              alt={item.name}
              loading="lazy"
              decoding="async"
              className="h-28 w-28 flex-none rounded-xl object-cover sm:h-32 sm:w-32 lg:h-28 lg:w-24"
            />
            <div className="flex min-w-0 flex-1 flex-col py-1 pr-10">
              <h3 className="text-base font-bold leading-tight text-[#142F86] sm:text-lg">
                {item.name}
              </h3>
              <p className="mt-1.5 text-xs leading-snug text-[#142F86]/65 sm:text-sm">
                {item.summary}
              </p>
              <span className="mt-auto pt-2 text-xs font-bold text-[#142F86] underline-offset-4 group-hover:underline sm:text-sm">
                Learn more
              </span>
            </div>
            {/* Decorative: the whole card is the link, so this must not be a
                second focusable target. */}
            <span
              aria-hidden="true"
              className="absolute bottom-4 right-4 grid size-9 place-items-center rounded-full bg-[#31B4F4]/12 text-[#142F86] transition group-hover:bg-[#142F86] group-hover:text-white"
            >
              <ArrowRight className="size-4" />
            </span>
          </Link>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="mt-10 text-center text-sm text-[#142F86]/60">
          No tests in this category yet.
        </p>
      )}
    </div>
  );
}

function FilterPill({
  icon: Icon,
  label,
  active,
  onClick,
}: {
  icon: IconComponent;
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex flex-none items-center gap-2 whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-bold transition sm:text-sm ${
        active
          ? "bg-[#142F86] text-white"
          : "text-[#142F86]/75 hover:bg-[#31B4F4]/12 hover:text-[#142F86]"
      }`}
    >
      <Icon className="size-4 flex-none" />
      {label}
    </button>
  );
}

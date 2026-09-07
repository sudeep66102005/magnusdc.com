import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Clock,
  Dna,
  FlaskConical,
  Home,
  Microscope,
  Pipette,
  ShieldCheck,
  TestTube,
  Users,
  ClipboardList,
} from "lucide-react";
import { siteConfig } from "@/lib/constants/site-config";
import { labCategories } from "@/lib/data/laboratory";

export const metadata: Metadata = {
  title: "Laboratory",
  description:
    "Laboratory testing covering routine pathology, biochemistry, microbiology, hormonal, molecular and preventive panels, with home sample collection.",
};

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
/* Asset URLs take the base path by hand; route hrefs must not, because
   next/link applies it and doing both doubles it. */
const img = (file: string) => encodeURI(`${BP}/assets/uploads/laboratory/${file}`);

const HERO_IMAGE = "landing paGE OF LABORATORY IMAGE.jpeg";

type IconComponent = React.ComponentType<{ className?: string }>;

const CARD_ICONS: Record<string, IconComponent> = {
  flask: FlaskConical,
  pipette: Pipette,
  microscope: Microscope,
  vial: TestTube,
  dna: Dna,
  shield: ShieldCheck,
  home: Home,
};

/* Wording taken from the supplied design. "NABL Accredited" is an accreditation
   claim rather than a description — the page this replaced said the softer
   "NABL-standard" — so it is worth confirming the certificate is current before
   this stays live. */
const TRUST = [
  { icon: ShieldCheck, line1: "Accurate", line2: "Results" },
  { icon: Users, line1: "NABL", line2: "Accredited" },
  { icon: Clock, line1: "Quick", line2: "Turnaround" },
];

export default function LaboratoryPage() {
  return (
    <>
      {/* ---- HERO -----------------------------------------------------------
          Photo bleeds off the right, script line above it, copy over a
          left-weighted scrim so it stays legible at every width. */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#EFF6FF] via-[#F7FBFF] to-white">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full sm:w-[66%] lg:w-[56%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={img(HERO_IMAGE)} alt="" className="size-full object-cover object-left" />
          <span className="absolute inset-0 bg-gradient-to-r from-[#EFF6FF] via-[#EFF6FF]/72 to-transparent sm:via-[#EFF6FF]/35 lg:via-transparent" />
        </div>

        <div className="relative mx-auto w-full px-4 pb-10 pt-8 sm:px-6 lg:px-10 lg:pb-14 lg:pt-10">
          <nav aria-label="Breadcrumb" className="hidden sm:block">
            <ol className="flex items-center gap-1.5 text-xs text-[#142F86]/60">
              <li>
                <Link href="/" className="hover:text-[#142F86]">Home</Link>
              </li>
              <ChevronRight className="size-3" aria-hidden="true" />
              <li aria-current="page" className="font-semibold text-[#142F86]">Laboratory</li>
            </ol>
          </nav>

          <p className="mt-5 text-[0.7rem] font-black uppercase tracking-[0.22em] text-[#31B4F4] sm:mt-6">
            Precision in every result
          </p>
          <h1 className="mt-2 max-w-xl text-3xl font-black leading-[1.05] tracking-[-0.03em] text-[#142F86] sm:text-4xl lg:text-5xl">
            Advanced Laboratory
            <span className="block">
              Testing for a <span className="text-[#31B4F4]">Healthier You</span>
            </span>
          </h1>
          <p className="mt-3 max-w-md text-sm text-[#142F86]/65 sm:text-base">
            Comprehensive, accurate and timely lab testing to support your health
            at every stage.
          </p>

          {/* Script line, desktop only — there is no room beside the heading on
              a phone. */}
          <p
            aria-hidden="true"
            className="absolute right-10 top-16 hidden text-2xl italic leading-tight text-[#2C6FB8] lg:block"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Better
            <span className="block pl-5">Insights</span>
            <span className="block pl-9">Brighter</span>
            <span className="block pl-14">Tomorrows</span>
          </p>

          <ul className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-x-7 lg:mt-8">
            {TRUST.map(({ icon: Icon, line1, line2 }, i) => (
              <li
                key={line1}
                className={`flex items-center gap-2.5 ${i > 0 ? "sm:border-l sm:border-[#142F86]/15 sm:pl-5 lg:pl-7" : ""}`}
              >
                <span className="grid size-9 flex-none place-items-center rounded-full bg-[#31B4F4]/16 text-[#142F86] sm:size-10">
                  <Icon className="size-4 sm:size-5" />
                </span>
                <span className="text-[0.7rem] font-semibold leading-tight text-[#142F86] sm:text-xs">
                  {line1}
                  <span className="block font-normal text-[#142F86]/70">{line2}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- CATEGORY CARDS -------------------------------------------------
          Icon tile and copy on the left, photograph on the right — the mirror of
          the diagnostics cards, per the design. Card and thumbnail sizes match
          /diagnostics so the two pages feel like one site on a phone. */}
      <section className="relative z-10 bg-white py-10 lg:py-14">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-10">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {labCategories.map((item) => {
              const Icon = CARD_ICONS[item.icon] ?? FlaskConical;
              return (
                <Link
                  key={item.slug}
                  href={`/laboratory/${item.slug}`}
                  className="group relative flex items-stretch gap-4 overflow-hidden rounded-3xl bg-white p-4 shadow-[0_12px_34px_-20px_rgb(20_47_134/0.4)] ring-1 ring-[#142F86]/10 transition hover:shadow-[0_20px_46px_-22px_rgb(20_47_134/0.5)] hover:ring-[#31B4F4]/45 sm:p-5"
                >
                  <div className="flex min-w-0 flex-1 flex-col py-1">
                    <span className="grid size-11 place-items-center rounded-2xl bg-[#31B4F4]/14 text-[#142F86] sm:size-12">
                      <Icon className="size-5 sm:size-6" />
                    </span>
                    <h2 className="mt-3 text-lg font-bold leading-tight text-[#142F86] sm:text-xl">
                      {item.name}
                    </h2>
                    <p className="mt-2 text-sm leading-snug text-[#142F86]/65">
                      {item.summary}
                    </p>
                    <span className="mt-auto flex items-center gap-2 pt-3 text-sm font-bold text-[#142F86]">
                      <span className="underline-offset-4 group-hover:underline">Learn more</span>
                      <span
                        aria-hidden="true"
                        className="grid size-8 place-items-center rounded-full bg-[#31B4F4]/12 text-[#142F86] transition group-hover:bg-[#142F86] group-hover:text-white"
                      >
                        <ArrowRight className="size-4" />
                      </span>
                    </span>
                  </div>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={img(item.image)}
                    alt={item.name}
                    loading="lazy"
                    decoding="async"
                    className="h-36 w-32 flex-none self-stretch rounded-2xl object-cover sm:h-auto sm:w-40 lg:w-44"
                  />
                </Link>
              );
            })}

            {/* Help banner. Sits beside the last card and takes the remaining two
                columns on a wide screen, as drawn. */}
            <div className="relative flex items-center gap-4 overflow-hidden rounded-3xl bg-gradient-to-r from-[#EAF3FF] to-[#F6FAFF] p-5 ring-1 ring-[#142F86]/10 md:col-span-1 xl:col-span-2 sm:p-6">
              <span className="grid size-11 flex-none place-items-center rounded-2xl bg-white text-[#142F86] ring-1 ring-[#142F86]/10 sm:size-12">
                <ClipboardList className="size-5 sm:size-6" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-base font-bold text-[#142F86] sm:text-lg">
                  Need help choosing the right test?
                </p>
                <p className="mt-1 text-sm text-[#142F86]/65">
                  Our team is here to guide you.
                </p>
              </div>
              <Link
                href="/contact"
                className="hidden flex-none items-center gap-2 rounded-full bg-[#142F86] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#31B4F4] hover:text-[#142F86] sm:inline-flex"
              >
                Talk to Our Experts
                <ArrowRight className="size-4" />
              </Link>
              {/* Phone: the button becomes a full-width row beneath, so the copy
                  is never squeezed to two words a line. */}
              <Link
                href="/contact"
                className="absolute inset-0 sm:hidden"
                aria-label="Talk to our experts"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ---- FOOTNOTE ---- */}
      <section className="mx-auto mb-14 w-full px-4 sm:px-6 lg:mb-20 lg:px-10">
        <p className="text-xs leading-relaxed text-[#142F86]/55">
          {siteConfig.services.homeCollection.replace("*", "")} — conditions apply
          by area and test type, and our team will confirm when you book.
          Collection hours are {siteConfig.hours.laboratory.replace("Lab: ", "")}.
        </p>
      </section>
    </>
  );
}

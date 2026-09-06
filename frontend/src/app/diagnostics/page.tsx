import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Users,
  Clock,
  ClipboardList,
  Phone,
  CalendarDays,
  Home,
} from "lucide-react";
import { DiagnosticsExplorer } from "@/components/diagnostics/diagnostics-explorer";
import { siteConfig } from "@/lib/constants/site-config";

export const metadata: Metadata = {
  title: "Diagnostics",
  description:
    "Advanced diagnostic imaging services including 3T MRI, CT scan, ultrasound, Doppler, X-ray, and more.",
};

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const heroImage = encodeURI(
  `${BP}/assets/uploads/services/landing image of the imaging page.jpeg`,
);

const TRUST = [
  { icon: ShieldCheck, line1: "World-class", line2: "Technology" },
  { icon: Users, line1: "Expert", line2: "Radiologists" },
  { icon: Clock, line1: "Quick & Accurate", line2: "Reports" },
];

/* App-style tab bar from the phone mockup. Phone only, and scoped to this page
   rather than the root layout. */
const TABS = [
  { icon: Home, label: "Home", href: "/" },
  { icon: ClipboardList, label: "Diagnostics", href: "/diagnostics", active: true },
  { icon: CalendarDays, label: "Appointments", href: "/patient-info/appointment-booking" },
  { icon: ChevronRight, label: "More", href: "/services" },
];

export default function DiagnosticsPage() {
  return (
    <>
      {/* ---- HERO ------------------------------------------------------------
          The photo bleeds off the right on desktop and sits behind the copy on a
          phone, as in the two mockups. A left-weighted scrim keeps the heading
          legible over it at every width. */}
      <section className="relative isolate overflow-hidden bg-gradient-to-b from-[#EFF6FF] via-[#F7FBFF] to-white">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full sm:w-[68%] lg:w-[58%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={heroImage}
            alt=""
            className="size-full object-cover object-left"
          />
          <span className="absolute inset-0 bg-gradient-to-r from-[#EFF6FF] via-[#EFF6FF]/72 to-transparent sm:via-[#EFF6FF]/35 lg:via-transparent" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-10 pt-8 sm:px-6 lg:px-8 lg:pb-14 lg:pt-10">
          <nav aria-label="Breadcrumb" className="hidden sm:block">
            <ol className="flex items-center gap-1.5 text-xs text-[#142F86]/60">
              <li>
                <Link href="/" className="hover:text-[#142F86]">Home</Link>
              </li>
              <ChevronRight className="size-3" aria-hidden="true" />
              <li aria-current="page" className="font-semibold text-[#142F86]">Diagnostics</li>
            </ol>
          </nav>

          <p className="mt-5 text-[0.7rem] font-black uppercase tracking-[0.22em] text-[#142F86]/70 sm:mt-6">
            Diagnostics
          </p>
          <h1 className="mt-2 max-w-xl text-3xl font-black leading-[1.05] tracking-[-0.03em] text-[#142F86] sm:text-4xl lg:text-5xl">
            Advanced Diagnostics
            <span className="block">for a Healthier Tomorrow</span>
          </h1>
          <p className="mt-3 text-sm text-[#142F86]/65 sm:text-base">
            Accurate. Advanced. Always by your side.
          </p>

          {/* Script line, top right on desktop only — there is no room for it
              beside the heading on a phone. */}
          <p
            aria-hidden="true"
            className="absolute right-8 top-16 hidden text-2xl italic leading-tight text-[#2C6FB8] lg:block"
            style={{ fontFamily: "var(--font-playfair), Georgia, serif" }}
          >
            Seeing
            <span className="block pl-6">Health</span>
            <span className="block pl-10">More Clearly</span>
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

      {/* ---- FILTERS + CARDS ------------------------------------------------ */}
      <section className="relative z-10 -mt-4 bg-white pb-12 lg:pb-16">
        <DiagnosticsExplorer />
      </section>

      {/* ---- HELP BAR ------------------------------------------------------- */}
      <section className="mx-auto mb-14 max-w-7xl px-4 sm:px-6 lg:mb-20 lg:px-8">
        <div className="flex flex-col gap-5 rounded-2xl bg-white p-5 shadow-[0_12px_36px_-24px_rgb(20_47_134/0.45)] ring-1 ring-[#142F86]/10 lg:flex-row lg:items-center lg:justify-between lg:gap-8 lg:p-6">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:gap-6 lg:flex-1 lg:gap-8">
            <HelpItem
              icon={ClipboardList}
              title="Need Help Choosing a Test?"
              sub="Our team is here to guide you."
            />
            {/* The mockup shows a placeholder number; this uses the real one
                from siteConfig, which is a { display, href } pair. */}
            <HelpItem
              icon={Phone}
              title="Call Us"
              sub={siteConfig.phone.display}
              href={siteConfig.phone.href}
              divided
            />
            <HelpItem
              icon={CalendarDays}
              title="Book an Appointment"
              sub="Quick, easy and hassle-free."
              href="/patient-info/appointment-booking"
              divided
            />
          </div>
          <Link
            href="/patient-info/appointment-booking"
            className="inline-flex flex-none items-center justify-center gap-2 rounded-full bg-[#142F86] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#31B4F4] hover:text-[#142F86]"
          >
            Book Now
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>

      {/* ---- PHONE TAB BAR --------------------------------------------------
          Fixed, phone only. The floating call and WhatsApp widgets already sit
          bottom right, so the bar is given a matching height allowance below in
          the spacer to keep the help bar clear of it. */}
      <div className="h-16 md:hidden" aria-hidden="true" />
      {/* env() goes through an inline style rather than an arbitrary Tailwind
          value, so it cannot depend on how the JIT parses the parentheses. */}
      <nav
        aria-label="Quick navigation"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
        className="fixed inset-x-0 bottom-0 z-50 border-t border-[#142F86]/10 bg-white/95 backdrop-blur md:hidden"
      >
        <ul className="mx-auto flex max-w-md items-stretch justify-between px-2">
          {TABS.map(({ icon: Icon, label, href, active }) => (
            <li key={label} className="flex-1">
              <Link
                href={href}
                aria-current={active ? "page" : undefined}
                className={`flex flex-col items-center gap-1 py-2.5 text-[0.62rem] font-semibold ${
                  active ? "text-[#142F86]" : "text-[#142F86]/55"
                }`}
              >
                <Icon className="size-5" />
                {label}
                <span
                  className={`h-0.5 w-6 rounded-full ${active ? "bg-[#142F86]" : "bg-transparent"}`}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

function HelpItem({
  icon: Icon,
  title,
  sub,
  href,
  divided,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  sub: string;
  href?: string;
  divided?: boolean;
}) {
  const body = (
    <span className="flex items-center gap-3">
      <span className="grid size-10 flex-none place-items-center rounded-xl bg-[#31B4F4]/14 text-[#142F86]">
        <Icon className="size-5" />
      </span>
      <span className="text-sm">
        <span className="block font-bold text-[#142F86]">{title}</span>
        <span className="block text-xs text-[#142F86]/65">{sub}</span>
      </span>
    </span>
  );

  return (
    <div
      className={`min-w-0 ${divided ? "sm:border-l sm:border-[#142F86]/12 sm:pl-6 lg:pl-8" : ""}`}
    >
      {href ? (
        <Link href={href} className="block transition hover:opacity-80">
          {body}
        </Link>
      ) : (
        body
      )}
    </div>
  );
}

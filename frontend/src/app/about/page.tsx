import type { Metadata } from "next";
import Link from "next/link";
/* Every icon here is one this codebase already imports elsewhere. lucide-react
   is pinned at 1.23.0 and node_modules is not available to introspect, so
   sticking to names with a proven import avoids a build failure on an icon that
   may have been renamed in the 1.x line. The play triangle is drawn inline
   below for the same reason. */
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  ClipboardCheck,
  HeartHandshake,
  HeartPulse,
  Microscope,
  ScanLine,
  ShieldCheck,
} from "lucide-react";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the 18+ year legacy, radiologist-led vision and patient-first values behind Clarus Magnus Health & Diagnostics in Koramangala.",
};

/* Asset URLs are built by hand so the base path is applied — unlike the hrefs
   below, which go through next/link and must not carry it. encodeURI because
   every one of these file names contains spaces. */
const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (path: string) => encodeURI(`${BP}/assets/uploads/${path}`);

/** The building, as asked, in the hero. Also the first slide of the home loop. */
const BUILDING = asset("events/magnus clinic front view of the building.jpeg");
/** The laboratory landing photograph, as asked, in the middle section. */
const LABORATORY = asset("laboratory/landing paGE OF LABORATORY IMAGE.jpeg");
/** Backs the closing promise band. The design shows a soft interior there and
    this is the closest photograph on hand; swapping it is a one-line change. */
const PROMISE = asset("events/lobby for desktop.jpeg");

const hallmarks = [
  { icon: HeartPulse, title: "Patient-first care", note: "Your health, our priority" },
  { icon: Microscope, title: "Radiologist-led", note: "Expertise you can trust" },
  { icon: ScanLine, title: "Advanced technology", note: "Precise. Reliable. Future-ready." },
  { icon: HeartHandshake, title: "Compassionate approach", note: "Care beyond diagnosis" },
];

const difference = [
  {
    icon: ShieldCheck,
    title: "18+ years of trust",
    description:
      "Built on a strong foundation of community trust, clinical reliability and dependable service.",
  },
  {
    icon: Microscope,
    title: "Radiologist-led excellence",
    description:
      "Quality, precision and clinical relevance guide every diagnostic experience and report.",
  },
  {
    icon: ScanLine,
    title: "Advanced technology",
    description:
      "3 Tesla MRI, Multislice CT, advanced ultrasound, digital X-ray and comprehensive laboratory services.",
  },
  {
    icon: ClipboardCheck,
    title: "Clarity with care",
    description:
      "Transparent communication, compassionate service and a patient-first approach at every step.",
  },
];

const promiseStats = [
  { value: "18+", label: "Years of Trust" },
  { value: "100K+", label: "Lives Touched" },
  { value: "One", label: "Clear Purpose" },
];

/** Inline rather than imported, so no icon-name assumption can break the build. */
function PlayGlyph() {
  return (
    <svg viewBox="0 0 10 10" className="size-2.5" aria-hidden="true" focusable="false">
      <path d="M3 2.2 8 5 3 7.8Z" fill="currentColor" />
    </svg>
  );
}

/** Concentric arcs, bottom-right, as drawn on the vision and mission cards. */
function CardWatermark({ tone }: { tone: "navy" | "white" }) {
  const ring = tone === "navy" ? "border-[#142F86]/10" : "border-white/15";
  return (
    <span aria-hidden="true" className="pointer-events-none absolute -bottom-24 -right-20 block">
      {[0, 1, 2].map((i) => (
        <span
          key={i}
          className={`absolute rounded-full border ${ring}`}
          style={{
            width: `${11 + i * 5}rem`,
            height: `${11 + i * 5}rem`,
            right: `${i * -2}rem`,
            bottom: `${i * -2}rem`,
          }}
        />
      ))}
    </span>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* ---- HERO ------------------------------------------------------- */}
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 pb-12 pt-10 sm:px-8 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:pb-16 lg:pt-14">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#142F86]/55">
              About us
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-[1.05] tracking-[-0.035em] sm:text-5xl lg:text-[3.4rem]">
              <span className="block text-[#142F86]">A legacy of trust.</span>
              <span className="block text-[#31B4F4]">Reimagined for the future.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#142F86]/70">
              Clarus Magnus is the evolution of a trusted Bengaluru healthcare
              institution—now led by radiologists and built around accurate answers,
              clinical confidence and compassionate care.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-4">
              <Link
                href="#who-we-are"
                className="inline-flex items-center gap-2 rounded-full bg-[#142F86] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0f2569]"
              >
                Our Journey
                <ArrowRight className="size-4" />
              </Link>
              <Link
                href="#difference"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#142F86] underline-offset-4 hover:underline"
              >
                Why Patients Trust Us
                <ChevronDown className="size-4 text-[#31B4F4]" />
              </Link>
            </div>

            <dl className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-5">
              <div>
                <dd className="text-2xl font-bold leading-none text-[#142F86]">18+</dd>
                <dt className="mt-1.5 text-xs leading-4 text-[#142F86]/60">
                  Years of trusted care
                </dt>
              </div>
              {[
                { icon: ScanLine, label: "Advanced Technology" },
                { icon: HeartPulse, label: "Patient-first Approach" },
              ].map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-center gap-2.5">
                  <span className="flex size-8 flex-none items-center justify-center rounded-full bg-[#31B4F4]/12 text-[#142F86]">
                    <Icon className="size-4" />
                  </span>
                  <dt className="max-w-[7rem] text-xs font-medium leading-4 text-[#142F86]/70">
                    {label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={BUILDING}
            alt="The Clarus Magnus building in Koramangala, Bengaluru"
            className="aspect-[16/11] w-full rounded-[2rem] object-cover shadow-[0_26px_60px_-34px_rgba(20,47,134,0.45)]"
          />
        </div>
      </section>

      {/* ---- HALLMARKS BAR --------------------------------------------- */}
      <section className="bg-white pb-14 lg:pb-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <ul className="grid gap-8 rounded-[1.75rem] bg-[#31B4F4]/8 px-6 py-9 sm:grid-cols-2 sm:px-10 lg:grid-cols-4">
            {hallmarks.map(({ icon: Icon, title, note }) => (
              <li key={title} className="flex flex-col items-center text-center">
                <span className="flex size-11 items-center justify-center rounded-full bg-white text-[#142F86] shadow-[0_8px_20px_-14px_rgba(20,47,134,0.6)]">
                  <Icon className="size-5" />
                </span>
                <h2 className="mt-4 text-base font-bold text-[#142F86]">{title}</h2>
                <p className="mt-1.5 text-xs leading-5 text-[#142F86]/60">{note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- WHO WE ARE ------------------------------------------------ */}
      <section id="who-we-are" className="scroll-mt-28 bg-white pb-14 lg:pb-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14">
          <div className="relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={LABORATORY}
              alt="The Clarus Magnus laboratory in Koramangala"
              className="aspect-[16/11] w-full rounded-[1.75rem] object-cover"
            />
            {/* Not a control: there is no story video to point it at yet, so this
                is a label rather than a button that would do nothing when
                pressed. It becomes a link the moment a URL exists. */}
            <span className="pointer-events-none absolute left-5 top-5 inline-flex items-center gap-2 rounded-full bg-white/92 px-3.5 py-2 text-xs font-bold text-[#142F86] shadow-[0_10px_24px_-16px_rgba(20,47,134,0.8)]">
              <span className="flex size-5 items-center justify-center rounded-full bg-[#142F86] text-white">
                <PlayGlyph />
              </span>
              Watch our story
            </span>
          </div>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#DA1C29]">
              Who we are
            </p>
            <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-[#142F86] sm:text-4xl">
              Modern diagnostics with a deeply human centre.
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-6 text-[#142F86]/70 sm:text-base sm:leading-7">
              <p>
                Located in the heart of Koramangala, Clarus Magnus brings together
                advanced diagnostics, laboratory services and multispecialty
                consultations under one roof.
              </p>
              <p>
                Every investigation is supported by experienced radiologists and
                healthcare professionals committed to clinically meaningful insights.
                For us, diagnostics are not merely tests—they are the foundation of
                better healthcare.
              </p>
              <p>
                By combining technology with expert interpretation and personalised
                attention, we help patients and doctors move forward with greater
                clarity, confidence and peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ---- THE DIFFERENCE -------------------------------------------- */}
      <section id="difference" className="scroll-mt-28 bg-[#31B4F4]/8 py-14 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#142F86]/55">
                The Clarus Magnus difference
              </p>
              <h2 className="mt-4 text-3xl font-bold leading-[1.12] tracking-[-0.03em] text-[#142F86] sm:text-4xl">
                A more thoughtful standard of diagnostic and specialty care.
              </h2>
            </div>
            <Link
              href="/diagnostics"
              className="inline-flex flex-none items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#142F86] shadow-[0_12px_30px_-22px_rgba(20,47,134,0.8)] transition hover:text-[#31B4F4]"
            >
              Explore Our Services
              <ArrowRight className="size-4" />
            </Link>
          </div>

          <div className="mt-9 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {difference.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="rounded-[1.5rem] bg-white p-6 shadow-[0_18px_48px_-38px_rgba(20,47,134,0.8)]"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-[#31B4F4]/12 text-[#142F86]">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-base font-bold text-[#142F86]">{title}</h3>
                <p className="mt-2.5 text-xs leading-5 text-[#142F86]/65">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- VISION / MISSION ------------------------------------------ */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-5 px-5 sm:px-8 md:grid-cols-2">
          <div className="relative flex flex-col overflow-hidden rounded-[1.75rem] border border-[#142F86]/15 bg-white p-8 sm:p-9">
            <CardWatermark tone="navy" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#DA1C29]">
                Our vision
              </p>
              <h2 className="mt-4 text-2xl font-bold leading-[1.18] tracking-[-0.03em] text-[#142F86] sm:text-[1.7rem]">
                Bengaluru&rsquo;s most trusted destination for diagnostics and
                specialty healthcare.
              </h2>
              <span aria-hidden="true" className="mt-6 block h-0.5 w-10 rounded-full bg-[#31B4F4]" />
              <p className="mt-5 text-sm leading-6 text-[#142F86]/65">
                A place where advanced technology, clinical excellence and
                compassionate care come together to improve lives.
              </p>
            </div>
            <Link
              href="/specialties"
              aria-label="Explore our specialties"
              className="relative mt-8 inline-flex size-10 items-center justify-center rounded-full border border-[#142F86]/25 text-[#142F86] transition hover:border-[#31B4F4] hover:text-[#31B4F4]"
            >
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="relative flex flex-col overflow-hidden rounded-[1.75rem] bg-[#142F86] p-8 text-white sm:p-9">
            <CardWatermark tone="white" />
            <div className="relative">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#31B4F4]">
                Our mission
              </p>
              <h2 className="mt-4 text-2xl font-bold leading-[1.18] tracking-[-0.03em] sm:text-[1.7rem]">
                Accurate diagnostics. Expert support. Exceptional experiences.
              </h2>
              <span aria-hidden="true" className="mt-6 block h-0.5 w-10 rounded-full bg-[#31B4F4]" />
              <p className="mt-5 text-sm leading-6 text-white/70">
                Delivered through innovation, integrity and a relentless focus on
                quality and patient confidence.
              </p>
            </div>
            <Link
              href="/contact"
              aria-label="Contact Clarus Magnus"
              className="relative mt-8 inline-flex size-10 items-center justify-center rounded-full bg-white text-[#142F86] transition hover:bg-[#31B4F4] hover:text-white"
            >
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ---- OUR PROMISE ----------------------------------------------- */}
      <section className="relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={PROMISE}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 size-full object-cover"
        />
        {/* The navy type below sits on a photograph, so it needs a wash to stay
            readable. 88% keeps the interior visible while holding the text well
            clear of the contrast floor. */}
        <div aria-hidden="true" className="absolute inset-0 bg-white/[0.88]" />

        <div className="relative mx-auto max-w-3xl px-10 py-16 text-center sm:px-14 lg:py-20">
          <span
            aria-hidden="true"
            className="absolute left-1 top-12 font-serif text-6xl leading-none text-[#31B4F4]/45 sm:left-3 sm:text-7xl"
          >
            &ldquo;
          </span>
          <span
            aria-hidden="true"
            className="absolute bottom-16 right-1 font-serif text-6xl leading-none text-[#31B4F4]/45 sm:right-3 sm:text-7xl"
          >
            &rdquo;
          </span>

          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#DA1C29]">
            Our promise
          </p>
          <h2 className="mt-4 text-2xl font-bold leading-[1.18] tracking-[-0.03em] text-[#142F86] sm:text-3xl">
            Better answers for a healthier tomorrow.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-[#142F86]/70">
            We continue to evolve with the same commitment that has defined us for
            years—to bring together people, technology and care in a way that truly
            makes a difference.
          </p>

          <dl className="mx-auto mt-10 flex max-w-lg items-stretch justify-center">
            {promiseStats.map(({ value, label }, i) => (
              <div
                key={label}
                className={`flex-1 px-3 ${i > 0 ? "border-l border-[#142F86]/15" : ""}`}
              >
                <dd className="text-2xl font-bold leading-none text-[#142F86] sm:text-3xl">
                  {value}
                </dd>
                <dt className="mt-2 text-xs leading-4 text-[#142F86]/60">{label}</dt>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}

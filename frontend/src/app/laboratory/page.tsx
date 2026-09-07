import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, Clock, Home, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/lib/constants/site-config";
import { labCategories } from "@/lib/data/laboratory";

export const metadata: Metadata = {
  title: "Laboratory",
  description:
    "Laboratory services covering routine pathology, biochemistry, microbiology, hormonal, molecular and preventive testing, with free home sample collection.",
};

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
/* Asset URLs take the base path by hand; route hrefs must not, since next/link
   applies it. */
const img = (file: string) => encodeURI(`${BP}/assets/uploads/laboratory/${file}`);

const HERO_IMAGE = "landing paGE OF LABORATORY IMAGE.jpeg";

const TRUST = [
  { icon: Clock, line1: siteConfig.hours.laboratory.replace("Lab: ", ""), line2: "Collection hours" },
  { icon: Home, line1: "Free home collection", line2: "On request*" },
  { icon: ShieldCheck, line1: "One laboratory", line2: "Walk-in and home samples" },
];

export default function LaboratoryPage() {
  return (
    <>
      {/* ---- HERO ---- */}
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

          <p className="mt-5 text-[0.7rem] font-black uppercase tracking-[0.22em] text-[#142F86]/70 sm:mt-6">
            Laboratory
          </p>
          <h1 className="mt-2 max-w-xl text-3xl font-black leading-[1.05] tracking-[-0.03em] text-[#142F86] sm:text-4xl lg:text-5xl">
            Accurate results,
            <span className="block">reported on time</span>
          </h1>
          <p className="mt-3 max-w-lg text-sm text-[#142F86]/65 sm:text-base">
            Routine pathology through molecular diagnostics — processed in our own
            laboratory, alongside imaging in the same building.
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

      {/* ---- CATEGORY CARDS ---- */}
      <section className="relative z-10 bg-white py-12 lg:py-16">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-10">
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {labCategories.map((item) => (
              <Link
                key={item.slug}
                href={`/laboratory/${item.slug}`}
                className="group relative flex items-stretch gap-5 overflow-hidden rounded-3xl bg-white p-4 shadow-[0_12px_34px_-20px_rgb(20_47_134/0.4)] ring-1 ring-[#142F86]/10 transition hover:shadow-[0_20px_46px_-22px_rgb(20_47_134/0.5)] hover:ring-[#31B4F4]/45 sm:p-5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img(item.image)}
                  alt={item.name}
                  loading="lazy"
                  decoding="async"
                  className="h-36 w-32 flex-none rounded-2xl object-cover sm:h-44 sm:w-40 lg:h-48 lg:w-44"
                />
                <div className="flex min-w-0 flex-1 flex-col py-1 pr-12 sm:pr-14">
                  <h2 className="text-lg font-bold leading-tight text-[#142F86] sm:text-xl lg:text-2xl">
                    {item.name}
                  </h2>
                  <p className="mt-2 text-sm leading-snug text-[#142F86]/65 sm:mt-2.5 sm:text-base">
                    {item.summary}
                  </p>
                  <span className="mt-auto pt-3 text-sm font-bold text-[#142F86] underline-offset-4 group-hover:underline sm:text-base">
                    Learn more
                  </span>
                </div>
                <span
                  aria-hidden="true"
                  className="absolute bottom-5 right-5 grid size-11 place-items-center rounded-full bg-[#31B4F4]/12 text-[#142F86] transition group-hover:bg-[#142F86] group-hover:text-white sm:size-12"
                >
                  <ArrowRight className="size-5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ---- FOOTNOTE ---- */}
      <section className="mx-auto mb-14 w-full px-4 sm:px-6 lg:mb-20 lg:px-10">
        <p className="text-xs leading-relaxed text-[#142F86]/55">
          *{siteConfig.services.homeCollection.replace("*", "")} — conditions apply
          by area and test type; our team will confirm when you book. Collection
          hours are {siteConfig.hours.laboratory.replace("Lab: ", "")}.
        </p>
      </section>
    </>
  );
}

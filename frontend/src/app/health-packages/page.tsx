import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, HeartPulse, Info, TestTube2 } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { PackageCard } from "@/components/shared/package-card";
import {
  healthPackageGuideDate,
  healthPackages,
  packageCategoryDetails,
  type HealthPackageCategory,
} from "@/lib/data/health-packages";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const categoryOrder = Object.keys(packageCategoryDetails) as HealthPackageCategory[];

export const metadata: Metadata = {
  title: "Health Packages",
  description: "Current routine, diabetic, cardiac, women’s, reproductive, specialised and corporate health packages from Clarus Magnus in Koramangala.",
};

export default function HealthPackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Preventive health"
        title="The right health check, made clearer."
        description="Explore transparent, thoughtfully structured health packages—from routine prevention to focused cardiac, diabetic, hormonal and specialised profiles."
      />
      <Section>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categoryOrder.map((category) => {
            const details = packageCategoryDetails[category];
            const count = healthPackages.filter((pkg) => pkg.category === category).length;
            return (
              <Link key={category} href={`/health-packages/${category}`} className="group rounded-[1.5rem] border border-[#dce5f1] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#31B4F4]/60 hover:shadow-[0_20px_50px_-32px_rgba(20,47,134,0.65)]">
                <span className="flex size-10 items-center justify-center rounded-xl bg-[#EAF7FE] text-[#142F86]"><HeartPulse className="size-4" /></span>
                <p className="mt-5 text-lg font-black text-[#142F86]">{details.label}</p>
                <p className="mt-2 text-sm leading-6 text-[#68778e]">{details.description}</p>
                <span className="mt-5 flex items-center justify-between text-xs font-black text-[#DA1C29]">{count} packages <ArrowRight className="size-4 transition group-hover:translate-x-1" /></span>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 grid gap-4 rounded-[2rem] bg-[#102A75] p-6 text-white md:grid-cols-[1fr_auto] md:items-center md:p-8">
          <div className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#8ed7fa]"><TestTube2 className="size-5" /></span>
            <div>
              <p className="font-black">Before your health check</p>
              <p className="mt-2 max-w-3xl text-sm leading-6 text-white/68">Most fasting profiles require 10–12 hours without food; water is permitted. Do not stop regular medicines unless your doctor advises it. Some ultrasound examinations require a full bladder—confirm preparation with our team when booking.</p>
            </div>
          </div>
          <a href={`${basePath}/assets/logo/Clarus%20Magnus%20Packages%2015.12.2025.pdf`} target="_blank" rel="noreferrer" className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-black text-[#142F86] transition hover:bg-[#EAF7FE]">
            <Download className="size-4" /> Download complete guide
          </a>
        </div>

        <div className="mt-16 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.18em] text-[#DA1C29]">Routine &amp; diabetic profiles</p>
            <h2 className="mt-3 text-3xl font-black tracking-[-0.035em] text-[#142F86] sm:text-4xl">Start with a trusted baseline.</h2>
          </div>
          <p className="flex items-center gap-2 text-xs font-bold text-[#6c788d]"><Info className="size-4 text-[#31B4F4]" /> Guide updated {healthPackageGuideDate}</p>
        </div>
        <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {healthPackages.slice(0, 12).map((pkg) => <PackageCard key={pkg.slug} pkg={pkg} />)}
        </div>
        <p className="mt-8 text-sm leading-6 text-[#6c788d]">Package inclusions and prices follow the Clarus Magnus package guide dated {healthPackageGuideDate} and may change. Please confirm availability, clinical suitability and preparation requirements when booking.</p>
      </Section>
    </>
  );
}

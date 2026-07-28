import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { PackageCard } from "@/components/shared/package-card";
import { healthPackages } from "@/lib/data/health-packages";

export const metadata: Metadata = {
  title: "Health Packages",
  description: "Preventive, women’s and corporate health packages from Clarus Magnus in Koramangala.",
};

export default function HealthPackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Preventive health"
        title="Health checks designed around real lives."
        description="Choose from thoughtfully structured packages for routine prevention, women’s health and workplace wellness—with clear inclusions and transparent pricing."
      />
      <Section>
        <div className="mb-10 flex flex-wrap gap-2">
          {["All packages", "Preventive health", "Women’s health", "Corporate health"].map((label, index) => (
            <span key={label} className={`rounded-full px-4 py-2 text-sm font-bold ${index === 0 ? "bg-[#142F86] text-white" : "bg-[#EAF7FE] text-[#142F86]"}`}>{label}</span>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {healthPackages.map((pkg) => <PackageCard key={pkg.slug} pkg={pkg} />)}
        </div>
        <p className="mt-8 text-sm leading-6 text-[#6c788d]">Package inclusions and prices are based on the current Clarus Magnus health package guide and may change. Please confirm availability and preparation requirements when booking.</p>
      </Section>
    </>
  );
}

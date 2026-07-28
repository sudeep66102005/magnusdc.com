import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { PackageCard } from "@/components/shared/package-card";
import { getHealthPackagesByCategory } from "@/lib/data/health-packages";
import type { HealthPackageContent } from "@/lib/data/health-packages";

const categoryMeta: Record<
  HealthPackageContent["category"],
  { title: string; description: string; eyebrow: string }
> = {
  checkup: {
    eyebrow: "Preventive health",
    title: "Health checkup packages",
    description: "From practical baseline screening to comprehensive preventive assessments for individuals and families.",
  },
  "womens-health": {
    eyebrow: "Women’s health",
    title: "Care designed around every life stage",
    description: "Thoughtful screening for preventive wellness, hormonal health, PCOD and pregnancy care.",
  },
  "corporate-health": {
    eyebrow: "Workplace wellness",
    title: "Corporate health packages",
    description: "Structured pre-employment and executive assessments designed to support healthier organisations.",
  },
};

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return Object.keys(categoryMeta).map((category) => ({ category }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const meta = categoryMeta[category as HealthPackageContent["category"]];
  if (!meta) return {};
  return { title: meta.title, description: meta.description };
}

export default async function HealthPackageCategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const meta = categoryMeta[category as HealthPackageContent["category"]];
  if (!meta) notFound();

  const packages = getHealthPackagesByCategory(category as HealthPackageContent["category"]);

  return (
    <>
      <PageHero eyebrow={meta.eyebrow} title={meta.title} description={meta.description} />
      <Section>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg) => <PackageCard key={pkg.slug} pkg={pkg} />)}
        </div>
      </Section>
    </>
  );
}

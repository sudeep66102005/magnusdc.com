import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { PackageCard } from "@/components/shared/package-card";
import {
  getHealthPackagesByCategory,
  packageCategoryDetails,
  type HealthPackageCategory,
} from "@/lib/data/health-packages";

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

function isPackageCategory(value: string): value is HealthPackageCategory {
  return value in packageCategoryDetails;
}

export function generateStaticParams() {
  return Object.keys(packageCategoryDetails).map((category) => ({ category }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  if (!isPackageCategory(category)) return {};
  const meta = packageCategoryDetails[category];
  return { title: meta.title, description: meta.description };
}

export default async function HealthPackageCategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  if (!isPackageCategory(category)) notFound();

  const meta = packageCategoryDetails[category];
  const packages = getHealthPackagesByCategory(category);

  return (
    <>
      <PageHero eyebrow={meta.eyebrow} title={meta.title} description={meta.description} />
      <Section>
        <div className="mb-8 flex flex-col gap-3 rounded-2xl border border-[#142F86]/18 bg-[#31B4F4]/8 p-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm font-bold text-[#142F86]/70">Showing {packages.length} packages from the current Clarus Magnus guide.</p>
          <Link href="/health-packages" className="inline-flex items-center gap-2 text-sm font-black text-[#142F86]">
            <ArrowLeft className="size-4" /> All package categories
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg) => <PackageCard key={pkg.slug} pkg={pkg} />)}
        </div>
      </Section>
    </>
  );
}

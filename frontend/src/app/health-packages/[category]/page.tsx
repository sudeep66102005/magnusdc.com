import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { getHealthPackagesByCategory } from "@/lib/data/health-packages";
import type { HealthPackageContent } from "@/lib/data/health-packages";

const categoryMeta: Record<
  HealthPackageContent["category"],
  { title: string; description: string }
> = {
  checkup: {
    title: "Health Checkup Packages",
    description: "General wellness checkup packages for individuals and families.",
  },
  "womens-health": {
    title: "Women's Health Packages",
    description: "Screening packages tailored to women's reproductive and hormonal health.",
  },
  "corporate-health": {
    title: "Corporate Health Packages",
    description: "Employee wellness packages designed for organizations of any size.",
  },
};

interface CategoryPageProps {
  params: Promise<{ category: string }>;
}

export function generateStaticParams() {
  return Object.keys(categoryMeta).map((category) => ({ category }));
}

export async function generateMetadata({
  params,
}: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const meta = categoryMeta[category as HealthPackageContent["category"]];
  if (!meta) return {};
  return { title: meta.title, description: meta.description };
}

export default async function HealthPackageCategoryPage({
  params,
}: CategoryPageProps) {
  const { category } = await params;
  const meta = categoryMeta[category as HealthPackageContent["category"]];

  if (!meta) {
    notFound();
  }

  const packages = getHealthPackagesByCategory(
    category as HealthPackageContent["category"]
  );

  return (
    <>
      <PageHero eyebrow="Health Packages" title={meta.title} description={meta.description} />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg) => (
            <Card key={pkg.slug} className="flex flex-col">
              <CardHeader>
                <CardTitle>{pkg.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4">
                <p className="text-sm text-slate-600">{pkg.summary}</p>
                <ul className="list-inside list-disc text-sm text-slate-600">
                  {pkg.testsIncluded.map((test) => (
                    <li key={test}>{test}</li>
                  ))}
                </ul>
                <div className="mt-auto flex items-center justify-between pt-4">
                  <span className="text-lg font-bold text-slate-900">
                    ₹{pkg.price.toLocaleString("en-IN")}
                  </span>
                  <Button size="sm" render={<Link href="/patient-info/appointment-booking" />}>
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

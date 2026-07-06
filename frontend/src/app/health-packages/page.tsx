import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { healthPackages } from "@/lib/data/health-packages";

export const metadata: Metadata = {
  title: "Health Packages",
  description:
    "Curated health checkup packages for general wellness, women's health, and corporate employees.",
};

const categoryLabels: Record<string, string> = {
  checkup: "Health Checkup",
  "womens-health": "Women's Health",
  "corporate-health": "Corporate Health",
};

export default function HealthPackagesPage() {
  return (
    <>
      <PageHero
        eyebrow="Health Packages"
        title="Preventive Care Made Simple"
        description="Choose from curated health checkup packages designed for individuals, women, and corporate teams."
      />
      <Section>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {healthPackages.map((pkg) => (
            <Card key={pkg.slug} className="flex flex-col">
              <CardHeader>
                <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                  {categoryLabels[pkg.category]}
                </p>
                <CardTitle>{pkg.name}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-1 flex-col gap-4">
                <p className="text-sm text-slate-600">{pkg.summary}</p>
                <ul className="list-inside list-disc text-sm text-slate-600">
                  {pkg.testsIncluded.slice(0, 4).map((test) => (
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

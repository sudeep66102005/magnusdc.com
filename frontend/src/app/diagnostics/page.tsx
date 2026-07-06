import type { Metadata } from "next";
import { ScanLine } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { LinkCard } from "@/components/shared/link-card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { diagnostics } from "@/lib/data/diagnostics";

export const metadata: Metadata = {
  title: "Diagnostics",
  description:
    "Advanced diagnostic imaging services including 3T MRI, CT scan, ultrasound, Doppler, X-ray, and more.",
};

export default function DiagnosticsPage() {
  return (
    <>
      <PageHero
        eyebrow="Diagnostics"
        title="Advanced Imaging for Precise Diagnosis"
        description="From 3T MRI to fetal medicine scans, our diagnostic imaging suite supports every stage of your care journey."
      >
        <div className="mt-8">
          <Button size="lg" render={<Link href="/patient-info/appointment-booking" />}>
            Book Appointment
          </Button>
        </div>
      </PageHero>
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {diagnostics.map((item) => (
            <LinkCard
              key={item.slug}
              href={`/diagnostics/${item.slug}`}
              title={item.name}
              description={item.summary}
              icon={ScanLine}
            />
          ))}
        </div>
      </Section>
    </>
  );
}

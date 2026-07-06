import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { getAllSpecialtySlugs, getSpecialtyBySlug } from "@/lib/data/specialties";

interface SpecialtyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSpecialtySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: SpecialtyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const specialty = getSpecialtyBySlug(slug);
  if (!specialty) return {};
  return {
    title: specialty.name,
    description: specialty.summary,
  };
}

export default async function SpecialtyDetailPage({ params }: SpecialtyPageProps) {
  const { slug } = await params;
  const specialty = getSpecialtyBySlug(slug);

  if (!specialty) {
    notFound();
  }

  return (
    <>
      <PageHero
        eyebrow="Specialty"
        title={specialty.name}
        description={specialty.summary}
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-6 text-slate-700">
          <p>
            Our {specialty.name.toLowerCase()} team combines experienced
            clinicians with advanced diagnostic support to deliver accurate,
            timely, and compassionate care.
          </p>
          <Button size="lg" render={<Link href="/patient-info/appointment-booking" />}>
            Book an Appointment
          </Button>
        </div>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import { Stethoscope } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { LinkCard } from "@/components/shared/link-card";
import { specialtyList } from "@/lib/data/specialties";

export const metadata: Metadata = {
  title: "All Specialties",
  description:
    "Explore our 19 clinical specialties, from primary care to advanced surgical disciplines.",
};

export default function SpecialtiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Specialties"
        title="19 Clinical Specialties, One Trusted Care Team"
        description="From primary care to advanced surgical disciplines, our specialists deliver comprehensive, coordinated care."
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {specialtyList.map((specialty) => (
            <LinkCard
              key={specialty.slug}
              href={`/specialties/${specialty.slug}`}
              title={specialty.name}
              description={specialty.summary}
              icon={Stethoscope}
            />
          ))}
        </div>
      </Section>
    </>
  );
}

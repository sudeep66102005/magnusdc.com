import type { Metadata } from "next";
import Link from "next/link";
import { Stethoscope } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { LinkCard } from "@/components/shared/link-card";
import { specialtyList } from "@/lib/data/specialties";
import { doctors } from "@/lib/data/doctors";

const specialtyCount = specialtyList.length;

export const metadata: Metadata = {
  title: "All Specialties",
  description: `Explore our ${specialtyCount} clinical specialties, from primary care to advanced surgical disciplines.`,
};

export default function SpecialtiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Specialties"
        title={`${specialtyCount} Clinical Specialties, One Trusted Care Team`}
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
        <div className="mt-10 flex justify-center">
          <Link
            href="/doctors"
            className="inline-flex min-h-12 items-center rounded-full bg-[#142F86] px-8 text-[0.9375rem] font-bold text-white transition-colors hover:bg-[#31B4F4] hover:text-[#142F86]"
          >
            Meet our {doctors.length} consultants
          </Link>
        </div>
      </Section>
    </>
  );
}

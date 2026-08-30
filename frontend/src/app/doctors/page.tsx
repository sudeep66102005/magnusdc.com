import type { Metadata } from "next";
import { DoctorsSection } from "@/components/home/doctors-section";
import { doctors } from "@/lib/data/doctors";

const specialtyCount = new Set(doctors.map((d) => d.specialty)).size;

export const metadata: Metadata = {
  title: "Our Doctors",
  description: `Meet the ${doctors.length} consultants at Clarus Magnus Health & Diagnostics across ${specialtyCount} specialties, and filter by the speciality you need.`,
};

/**
 * Deliberately has no page hero. The roster is the point of this page, so the
 * heading and filter are the first thing on it — `firstOnPage` supplies the top
 * spacing the hero would otherwise have provided.
 */
export default function DoctorsPage() {
  return (
    <DoctorsSection
      eyebrow="Our Doctors"
      title="Meet our consultants"
      showFilter
      firstOnPage
    />
  );
}

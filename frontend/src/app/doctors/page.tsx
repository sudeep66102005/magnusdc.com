import type { Metadata } from "next";
import { DoctorsSection } from "@/components/home/doctors-section";
import { doctors } from "@/lib/data/doctors";

const specialtyCount = new Set(doctors.map((d) => d.specialty)).size;

export const metadata: Metadata = {
  title: "Our Doctors",
  description: `Meet the ${doctors.length} consultants at Clarus Magnus Health & Diagnostics across ${specialtyCount} specialties, and filter by the speciality you need.`,
};

/**
 * Deliberately has no page hero and no section heading — the filter rail is
 * the first thing on the page, directly followed by the cards. `firstOnPage`
 * supplies the top spacing a hero would otherwise have provided, since the
 * site header is fixed and would otherwise sit over the filter.
 */
export default function DoctorsPage() {
  return <DoctorsSection showFilter firstOnPage />;
}

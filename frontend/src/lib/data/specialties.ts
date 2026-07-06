import { specialties } from "@/lib/constants/navigation";

export interface SpecialtyContent {
  slug: string;
  name: string;
  summary: string;
}

function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\//g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const specialtyList: SpecialtyContent[] = specialties.map((name) => ({
  slug: toSlug(name),
  name,
  summary: `Expert ${name.toLowerCase()} care from experienced specialists using evidence-based, patient-centered protocols.`,
}));

export function getSpecialtyBySlug(slug: string): SpecialtyContent | undefined {
  return specialtyList.find((item) => item.slug === slug);
}

export function getAllSpecialtySlugs(): string[] {
  return specialtyList.map((item) => item.slug);
}

export interface LabContent {
  slug: string;
  name: string;
  summary: string;
  details: string;
}

export const labCategories: LabContent[] = [
  {
    slug: "routine-pathology",
    name: "Routine Pathology",
    summary: "Complete blood counts, urine, and stool analysis for everyday health checks.",
    details:
      "Our pathology lab performs high-volume routine testing with fast, accurate turnaround for common diagnostic panels.",
  },
  {
    slug: "biochemistry",
    name: "Biochemistry",
    summary: "Blood chemistry panels including liver, kidney, lipid, and glucose profiles.",
    details:
      "Automated biochemistry analyzers ensure precise measurement of metabolic and organ function markers.",
  },
  {
    slug: "microbiology",
    name: "Microbiology",
    summary: "Culture and sensitivity testing to identify infections and guide treatment.",
    details:
      "Our microbiology unit isolates and identifies pathogens, supporting targeted antibiotic therapy decisions.",
  },
  {
    slug: "hormonal-testing",
    name: "Hormonal Testing",
    summary: "Thyroid, reproductive, and metabolic hormone panels.",
    details:
      "Comprehensive endocrine testing helps diagnose thyroid disorders, fertility issues, and hormonal imbalances.",
  },
  {
    slug: "genetic-molecular-diagnostics",
    name: "Genetic & Molecular Diagnostics",
    summary: "PCR-based and genetic screening for infectious and hereditary conditions.",
    details:
      "Molecular diagnostics support precise detection of genetic markers and infectious agents at the DNA/RNA level.",
  },
  {
    slug: "preventive-testing",
    name: "Preventive Testing",
    summary: "Screening panels designed for early detection and risk assessment.",
    details:
      "Preventive test panels are curated to catch early warning signs across cardiac, metabolic, and cancer risk categories.",
  },
  {
    slug: "home-sample-collection",
    name: "Home Sample Collection",
    summary: "Convenient at-home phlebotomy service with reports delivered digitally.",
    details:
      "Trained phlebotomists visit your home to collect samples, with reports available online shortly after processing.",
  },
];

export function getLabCategoryBySlug(slug: string): LabContent | undefined {
  return labCategories.find((item) => item.slug === slug);
}

export function getAllLabSlugs(): string[] {
  return labCategories.map((item) => item.slug);
}

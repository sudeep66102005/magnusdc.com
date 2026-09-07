export interface LabContent {
  slug: string;
  name: string;
  summary: string;
  details: string;
  /** File name only, inside /assets/uploads/laboratory. Base path and URI
      encoding are applied at the point of use. */
  image: string;
  /**
   * What the category covers — panels for a testing department, service steps
   * for home collection. Descriptive of what we offer, not advice about which
   * test a reader needs.
   */
  includes: string[];
}

export const labCategories: LabContent[] = [
  {
    slug: "routine-pathology",
    image: "Routine Pathology.jpeg",
    includes: [
      "Complete blood count (CBC) and ESR",
      "Peripheral smear examination",
      "Urine routine and microscopy",
      "Stool routine examination",
      "Blood grouping and cross-matching",
    ],
    name: "Routine Pathology",
    summary: "Complete blood counts, urine, and stool analysis for everyday health checks.",
    details:
      "Our pathology lab performs high-volume routine testing with fast, accurate turnaround for common diagnostic panels.",
  },
  {
    slug: "biochemistry",
    image: "Biochemistry.jpeg",
    includes: [
      "Liver function tests (LFT)",
      "Kidney function tests (RFT) and electrolytes",
      "Lipid profile",
      "Blood glucose and HbA1c",
      "Cardiac and pancreatic enzymes",
    ],
    name: "Biochemistry",
    summary: "Blood chemistry panels including liver, kidney, lipid, and glucose profiles.",
    details:
      "Automated biochemistry analyzers ensure precise measurement of metabolic and organ function markers.",
  },
  {
    slug: "microbiology",
    image: "microbiology.jpeg",
    includes: [
      "Urine, blood and stool cultures",
      "Wound, throat and sputum cultures",
      "Antibiotic sensitivity testing",
      "Fungal studies (KOH mount and culture)",
      "Tuberculosis testing",
    ],
    name: "Microbiology",
    summary: "Culture and sensitivity testing to identify infections and guide treatment.",
    details:
      "Our microbiology unit isolates and identifies pathogens, supporting targeted antibiotic therapy decisions.",
  },
  {
    slug: "hormonal-testing",
    image: "Hormonal Testing.jpeg",
    includes: [
      "Thyroid profile (TSH, T3, T4)",
      "Reproductive hormones (FSH, LH, prolactin, oestradiol, testosterone)",
      "Fertility and PCOS panels",
      "Cortisol and adrenal studies",
      "Vitamin D, B12 and bone metabolism markers",
    ],
    name: "Hormonal Testing",
    summary: "Thyroid, reproductive, and metabolic hormone panels.",
    details:
      "Comprehensive endocrine testing helps diagnose thyroid disorders, fertility issues, and hormonal imbalances.",
  },
  {
    slug: "genetic-molecular-diagnostics",
    image: "Genetic & Molecular Diagnostics.jpeg",
    includes: [
      "PCR testing for infectious agents",
      "Viral load quantification",
      "HPV and other molecular screening",
      "Hereditary condition screening",
      "Molecular markers supporting oncology care",
    ],
    name: "Genetic & Molecular Diagnostics",
    summary: "PCR-based and genetic screening for infectious and hereditary conditions.",
    details:
      "Molecular diagnostics support precise detection of genetic markers and infectious agents at the DNA/RNA level.",
  },
  {
    slug: "preventive-testing",
    image: "preventive testing.jpeg",
    includes: [
      "Whole-body and annual health check panels",
      "Diabetes and metabolic risk screening",
      "Cardiac risk assessment",
      "Thyroid and anaemia screening",
      "Age- and gender-specific screening panels",
    ],
    name: "Preventive Testing",
    summary: "Screening panels designed for early detection and risk assessment.",
    details:
      "Preventive test panels are curated to catch early warning signs across cardiac, metabolic, and cancer risk categories.",
  },
  {
    slug: "home-sample-collection",
    image: "home collection.jpeg",
    includes: [
      "Book by phone or WhatsApp and choose a slot",
      "A trained phlebotomist visits your home",
      "Samples transported under controlled conditions",
      "Processed in the same laboratory as walk-in samples",
      "Reports shared digitally once released",
    ],
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

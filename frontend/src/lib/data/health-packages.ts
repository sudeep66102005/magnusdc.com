export interface HealthPackageContent {
  slug: string;
  name: string;
  category: "checkup" | "womens-health" | "corporate-health";
  price: number;
  mrp?: number;
  testsIncluded: string[];
  summary: string;
}

export const healthPackages: HealthPackageContent[] = [
  {
    slug: "basic-health-profile",
    name: "Basic Health Profile",
    category: "checkup",
    price: 1650,
    mrp: 3260,
    summary: "A practical baseline health assessment with consultation.",
    testsIncluded: ["Complete Blood Count", "Liver Function Test", "Kidney markers", "Lipid Profile", "Fasting Blood Sugar", "Thyroid Profile", "Urine Routine"],
  },
  {
    slug: "full-body-blood-test",
    name: "Full Body Blood Test",
    category: "checkup",
    price: 2500,
    mrp: 4650,
    summary: "A comprehensive blood panel covering metabolic health and key vitamin levels.",
    testsIncluded: ["CBC with ESR", "HbA1c", "Lipid Profile", "Liver & Renal Function", "Thyroid Profile", "Iron Profile", "Vitamin D & B12"],
  },
  {
    slug: "comprehensive-health-check",
    name: "Comprehensive Health Check",
    category: "checkup",
    price: 3850,
    mrp: 5940,
    summary: "Blood work, imaging and cardiac screening for a broad preventive review.",
    testsIncluded: ["CBC with ESR", "Blood Sugar", "Lipid & Liver Profile", "Kidney markers", "Chest X-ray", "ECG", "Ultrasound Abdomen & Pelvis", "Consultation"],
  },
  {
    slug: "master-health-checkup",
    name: "Essential / Master Health Checkup",
    category: "checkup",
    price: 5100,
    mrp: 9380,
    summary: "An in-depth preventive assessment with imaging, cardiac evaluation and consultation.",
    testsIncluded: ["CBC with ESR", "Metabolic & Organ Profiles", "Vitamin D3", "Chest X-ray", "ECG", "Ultrasound Abdomen & Pelvis", "TMT or ECHO", "Consultation"],
  },
  {
    slug: "womens-wellness-package",
    name: "Women Wellness Package",
    category: "womens-health",
    price: 5790,
    mrp: 9630,
    summary: "A comprehensive preventive package designed around women’s health needs.",
    testsIncluded: ["Blood & Metabolic Profiles", "Vitamin D3", "Thyroid Profile", "Chest X-ray", "ECG", "Ultrasound Abdomen & Pelvis", "Bilateral Sonomammography", "PAP Smear", "Consultation"],
  },
  {
    slug: "pcod-mini",
    name: "PCOD Package — Mini",
    category: "womens-health",
    price: 1500,
    mrp: 5170,
    summary: "Focused hormonal and metabolic screening for PCOD assessment.",
    testsIncluded: ["Complete Blood Count", "HbA1c", "FSH & LH", "Prolactin", "Estradiol", "Total Testosterone", "Lipid Profile", "TSH"],
  },
  {
    slug: "antenatal-package",
    name: "Antenatal Package",
    category: "womens-health",
    price: 2500,
    mrp: 3230,
    summary: "Essential early pregnancy investigations for informed antenatal care.",
    testsIncluded: ["Complete Hemogram with ESR", "Blood Group & Rh", "Blood Sugar", "HBsAg", "VDRL", "Urine Examination", "Hepatitis C Antibody", "HIV Antibody", "TSH"],
  },
  {
    slug: "pre-employment-checkup",
    name: "Pre-employment Check-up",
    category: "corporate-health",
    price: 1850,
    mrp: 3560,
    summary: "A structured medical fitness assessment for new employees.",
    testsIncluded: ["Hemogram with ESR", "Blood Group & Rh", "Blood Sugar", "Mantoux Test", "Urine Analysis", "HIV & HBsAg", "ECG", "Chest X-ray", "Consultation"],
  },
  {
    slug: "executive-silver",
    name: "Executive Health Check-up — Silver",
    category: "corporate-health",
    price: 6250,
    mrp: 10710,
    summary: "An extensive executive health assessment combining diagnostics and consultation.",
    testsIncluded: ["CBC with ESR", "Metabolic & Organ Profiles", "Vitamin D3", "Chest X-ray", "ECG", "Ultrasound Abdomen & Pelvis", "TMT or ECHO", "Gender-specific Screening", "Consultation"],
  },
];

export function getHealthPackagesByCategory(
  category?: HealthPackageContent["category"]
): HealthPackageContent[] {
  if (!category) return healthPackages;
  return healthPackages.filter((pkg) => pkg.category === category);
}

export function getHealthPackageBySlug(slug: string): HealthPackageContent | undefined {
  return healthPackages.find((pkg) => pkg.slug === slug);
}

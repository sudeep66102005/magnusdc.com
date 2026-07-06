export interface HealthPackageContent {
  slug: string;
  name: string;
  category: "checkup" | "womens-health" | "corporate-health";
  price: number;
  testsIncluded: string[];
  summary: string;
}

export const healthPackages: HealthPackageContent[] = [
  {
    slug: "essential-health-checkup",
    name: "Essential Health Checkup",
    category: "checkup",
    price: 1499,
    summary: "A foundational screening covering vital blood parameters and general wellness.",
    testsIncluded: ["CBC", "Lipid Profile", "Blood Sugar (Fasting)", "Liver Function", "Kidney Function"],
  },
  {
    slug: "comprehensive-health-checkup",
    name: "Comprehensive Health Checkup",
    category: "checkup",
    price: 3499,
    summary: "An extensive panel for a full-body wellness assessment.",
    testsIncluded: ["CBC", "Lipid Profile", "Thyroid Panel", "HbA1c", "Vitamin D & B12", "Chest X-ray", "ECG"],
  },
  {
    slug: "womens-wellness-package",
    name: "Women's Wellness Package",
    category: "womens-health",
    price: 2999,
    summary: "Curated screening for women's reproductive and hormonal health.",
    testsIncluded: ["CBC", "Thyroid Panel", "Pap Smear", "Pelvic Ultrasound", "Iron Studies", "Vitamin D"],
  },
  {
    slug: "prenatal-care-package",
    name: "Prenatal Care Package",
    category: "womens-health",
    price: 4499,
    summary: "Essential testing across trimesters for expecting mothers.",
    testsIncluded: ["Double Marker", "Anomaly Scan", "OGTT", "CBC", "Blood Group & Rh"],
  },
  {
    slug: "corporate-basic-package",
    name: "Corporate Basic Package",
    category: "corporate-health",
    price: 999,
    summary: "Cost-effective annual screening for employee wellness programs.",
    testsIncluded: ["CBC", "Blood Sugar", "BP Check", "BMI Assessment"],
  },
  {
    slug: "corporate-executive-package",
    name: "Corporate Executive Package",
    category: "corporate-health",
    price: 4999,
    summary: "Premium screening designed for leadership and high-risk profiles.",
    testsIncluded: ["Full Body Checkup", "Cardiac Risk Markers", "Stress ECG", "Executive Health Consultation"],
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

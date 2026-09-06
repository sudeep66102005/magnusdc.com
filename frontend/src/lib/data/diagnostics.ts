/* The filter rail on /diagnostics is driven by this list, in this order. "All
   Diagnostics" is not a member: it is the absence of a filter. */
export type DiagnosticCategory =
  | "Imaging"
  | "Women & Child"
  | "Interventional"
  | "Dental"
  | "Liver Care"
  | "Neuro"
  | "Cardiac"
  | "Musculoskeletal";

export const diagnosticCategories: DiagnosticCategory[] = [
  "Imaging",
  "Women & Child",
  "Interventional",
  "Dental",
  "Liver Care",
  "Neuro",
  "Cardiac",
  "Musculoskeletal",
];

export interface DiagnosticContent {
  slug: string;
  name: string;
  summary: string;
  details: string;
  preparation?: string;
  /** File name only, inside /assets/uploads/services. The base path and URI
      encoding are applied at the point of use, as elsewhere in the app. */
  image: string;
  categories: DiagnosticCategory[];
}

export const diagnostics: DiagnosticContent[] = [
  {
    slug: "mri",
    name: "MRI (3T MRI)",
    image: "mri image.webp",
    categories: ["Imaging", "Neuro", "Musculoskeletal"],
    summary:
      "High-resolution 3-Tesla magnetic resonance imaging for detailed soft-tissue diagnostics.",
    details:
      "Our 3T MRI suite delivers sharper images in less time, aiding early and accurate diagnosis of neurological, musculoskeletal, and abdominal conditions.",
    preparation:
      "Remove metallic objects. Inform staff of implants or pacemakers before the scan.",
  },
  {
    slug: "ct-scan",
    name: "CT Scan",
    image: "ct scan ].jpg",
    categories: ["Imaging", "Neuro"],
    summary:
      "Fast, detailed cross-sectional imaging for trauma, cancer, and internal organ evaluation.",
    details:
      "Multi-slice CT technology provides rapid, high-quality imaging used across emergency and outpatient diagnostics.",
    preparation:
      "Fasting may be required for contrast studies; please follow instructions given at booking.",
  },
  {
    slug: "ultrasound",
    name: "Ultrasound",
    image: "ultrasound.jpeg",
    categories: ["Imaging", "Women & Child"],
    summary:
      "Real-time imaging for abdominal, pelvic, obstetric, and soft-tissue assessment.",
    details:
      "Safe, radiation-free ultrasound imaging supports diagnosis across general medicine, obstetrics, and vascular care.",
  },
  {
    slug: "doppler",
    name: "Doppler",
    image: "doppler final.jpeg",
    categories: ["Imaging", "Cardiac"],
    summary:
      "Vascular flow studies to assess blood circulation and detect clots or blockages.",
    details:
      "Doppler studies evaluate arterial and venous blood flow, essential for cardiovascular and peripheral vascular assessment.",
  },
  {
    slug: "x-ray",
    name: "X-ray",
    image: "x ray image.webp",
    categories: ["Imaging", "Musculoskeletal"],
    summary:
      "Quick digital radiography for bones, chest, and general diagnostic screening.",
    details:
      "Digital X-ray systems provide immediate, high-clarity images with minimal radiation exposure.",
  },
  {
    slug: "fetal-medicine-pregnancy-scans",
    name: "Fetal Medicine & Pregnancy Scans",
    /* The upload set had no fetal image, so this reuses the one already in the
       repo for the homepage service card. */
    image: "desktop image of Women's & Fetal Medicine.jpeg",
    categories: ["Women & Child", "Imaging"],
    summary: "Comprehensive prenatal imaging including anomaly and growth scans.",
    details:
      "Specialized obstetric ultrasound and fetal medicine services support safe pregnancy monitoring at every trimester.",
  },
  {
    slug: "fibroscan",
    name: "Fibroscan",
    image: "fibroscan.jpeg",
    categories: ["Liver Care"],
    summary:
      "Non-invasive liver stiffness and fat assessment for liver health screening.",
    details:
      "Fibroscan technology measures liver elasticity to detect fibrosis and fatty liver disease without a biopsy.",
  },
  {
    slug: "opg-cbct",
    name: "Dental Imaging — OPG & CBCT",
    image: "dental image.jpeg",
    categories: ["Dental", "Imaging"],
    summary:
      "Digital panoramic and three-dimensional dental imaging for precise diagnosis and treatment planning.",
    details:
      "Our OPG and cone beam CT services support implant planning, orthodontics, impacted-tooth assessment, jaw evaluation, endodontics and oral surgery with detailed digital images.",
    preparation:
      "Remove spectacles, earrings, dentures, removable orthodontic appliances and other metallic objects around the head and neck. Please inform the team if you are pregnant.",
  },
  {
    slug: "advanced-procedures",
    name: "Advanced Procedures (EEG, ENMG, etc.)",
    image: "advanced procedures eeg enmg etc.jpeg",
    categories: ["Neuro", "Interventional"],
    summary:
      "Specialized neuro-diagnostic testing including EEG and nerve conduction studies.",
    details:
      "Advanced diagnostic procedures such as EEG and ENMG support neurology teams in diagnosing complex conditions.",
  },
];

export function getDiagnosticBySlug(slug: string): DiagnosticContent | undefined {
  return diagnostics.find((item) => item.slug === slug);
}

export function getAllDiagnosticSlugs(): string[] {
  return diagnostics.map((item) => item.slug);
}

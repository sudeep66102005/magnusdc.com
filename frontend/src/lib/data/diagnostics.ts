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
  /** A bare file name resolves inside /assets/uploads/services. A value
      containing a slash is taken as relative to /assets/uploads instead, so an
      image can be shared with another section rather than copied into this
      folder. The base path and URI encoding are applied at the point of use, as
      elsewhere in the app. */
  image: string;
  /**
   * Optional wide crop for the detail page hero, which is a landscape box
   * (about 544x288) while the listing card is near-square (176x192). One file
   * cannot serve both without losing about half of it to the crop, so an entry
   * that has a separate wide version names it here. Falls back to `image`.
   */
  imageWide?: string;
  categories: DiagnosticCategory[];
  /**
   * What the test is commonly ordered for. Deliberately descriptive of the
   * service rather than advisory — the detail page is general information, not
   * a recommendation that a reader needs this test.
   */
  usedFor: string[];
}

export const diagnostics: DiagnosticContent[] = [
  {
    slug: "mri",
    name: "MRI (3T MRI)",
    /* The uploaded "default mri" pair, shared with the homepage loop rather than
       duplicated into uploads/services. The square file goes to the near-square
       listing card and the 16:9 one to the wide detail hero, which is what the
       two files were delivered for. */
    image: "events/default mri images for mobile view.jpeg",
    imageWide: "events/default mri images for desktop view.jpeg",
    categories: ["Imaging", "Neuro", "Musculoskeletal"],
    usedFor: [
      "Brain and spine imaging, including stroke and seizure workup",
      "Joints, ligaments and sports injuries",
      "Abdominal and pelvic organ assessment",
      "Tumour detection, staging and follow-up",
      "Problems not resolved by X-ray or ultrasound",
    ],
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
    usedFor: [
      "Trauma and acute injury assessment",
      "Chest and abdominal evaluation",
      "Kidney and urinary tract stones",
      "Cancer detection and staging",
      "CT angiography of blood vessels",
    ],
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
    usedFor: [
      "Abdominal and pelvic organ assessment",
      "Obstetric and gynaecological scans",
      "Thyroid, neck and breast evaluation",
      "Soft-tissue lumps and swellings",
      "Guidance for biopsies and injections",
    ],
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
    usedFor: [
      "Suspected deep vein thrombosis",
      "Varicose veins and venous insufficiency",
      "Peripheral arterial disease and leg pain on walking",
      "Carotid assessment after stroke or TIA",
      "Dialysis access and graft surveillance",
    ],
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
    usedFor: [
      "Suspected fractures and bone injury",
      "Chest imaging for cough, fever and breathlessness",
      "Spine and joint assessment",
      "Abdominal X-ray for obstruction or stones",
      "Pre-operative and pre-employment screening",
    ],
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
    usedFor: [
      "Early pregnancy confirmation and dating",
      "NT/NB scan in the first trimester",
      "Anomaly scan in the second trimester",
      "Growth scans and Doppler studies",
      "Fetal echocardiography",
    ],
    summary: "Comprehensive prenatal imaging including anomaly and growth scans.",
    details:
      "Specialized obstetric ultrasound and fetal medicine services support safe pregnancy monitoring at every trimester.",
  },
  {
    slug: "fibroscan",
    name: "Fibroscan",
    image: "fibroscan.jpeg",
    categories: ["Liver Care"],
    usedFor: [
      "Fatty liver detection and grading",
      "Staging liver fibrosis without a biopsy",
      "Monitoring hepatitis B and C",
      "Alcohol-related liver disease assessment",
      "Tracking response to treatment over time",
    ],
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
    usedFor: [
      "Dental implant planning",
      "Impacted and wisdom teeth assessment",
      "Orthodontic evaluation",
      "Jaw joint and jaw pathology",
      "Root canal and oral surgery planning",
    ],
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
    usedFor: [
      "Seizures and blackouts (EEG)",
      "Numbness, tingling and suspected neuropathy (ENMG)",
      "Carpal tunnel and nerve entrapment",
      "Muscle weakness and wasting",
      "Assessment after nerve injury",
    ],
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

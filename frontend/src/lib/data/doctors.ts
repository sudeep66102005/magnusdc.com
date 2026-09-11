import { specialties } from "@/lib/constants/navigation";

export type Doctor = {
  /** Full name, including the "Dr." prefix. Shown as the main focus of the card. */
  name: string;
  /**
   * Professional designation, e.g. "Senior Consultant Cardiologist". Shown in
   * the small line directly under the name.
   */
  title: string;
  /** Must match a specialty in `navigation.ts` — this drives the filter. */
  specialty: (typeof specialties)[number];
  /**
   * The full qualifications line, e.g. "MBBS, MS (ENT), MRCS (Edinburgh)".
   * Kept for a future detail page but not rendered on the card itself — the
   * card shows only `keyQualification`, one credential rather than the list.
   */
  degrees?: string;
  /**
   * The single most senior credential, drawn verbatim from `degrees`, e.g.
   * "DM (Cardiology)". This is what the card actually renders. Left unset
   * only when no qualification has been confirmed (see Dr. Jasmeet Sunil).
   */
  keyQualification?: string;
  /** Experience line, e.g. "20+ years experience". Optional. */
  experience?: string;
  /**
   * Path under `/assets/` — for a doctor photo that is
   * `"uploads/doctors/<file>"`. Leave it out and the card shows a monogram
   * tile, so a doctor can be listed before the photograph exists.
   */
  image?: string;
  /**
   * CSS object-position for the photo crop. Only needed when the source is not
   * a portrait that the default 50% 15% handles correctly — e.g. a landscape
   * photo where the default would clip the subject horizontally.
   * Default applied in components: "50% 15%"
   */
  imagePosition?: string;
  /**
   * Optional per-doctor link. Currently unused by the card: the corner arrow
   * goes to Contact Us and the button to appointment booking. Kept for a
   * future per-doctor profile page.
   */
  href?: string;
};

/**
 * The Clarus Magnus consultant roster, grouped by department in the order the
 * profiles were supplied. Entries without an `image` render a monogram tile, so
 * a consultant can be listed before their photograph exists.
 *
 * This is the source-of-truth order. For display order see `doctorsPhotoFirst`,
 * which floats the photographed consultants to the top.
 */
/**
 * URL slug for a consultant, e.g. "Dr. Chaathurya R." -> "dr-chaathurya-r".
 * Derived from the name so no hand-maintained id can drift out of sync with the
 * roster.
 */
export function doctorSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

export const doctors: Doctor[] = [
  // Radiology
  {
    name: "Dr. Chaathurya R.",
    title: "Consultant Radiologist",
    specialty: "Radiology",
    /* Path is relative to /assets/ — the `photo()` helpers in the card and the
       profile page prepend the base path and URI-encode the space. */
    image: "uploads/doctors/dr chaaturya.jpeg",
    // All seven of her credentials on the card by request. The ACFRG acronym is
    // left unexpanded here purely for width — spelled out in `degrees` below.
    keyQualification:
      "MBBS, MD (Radiodiagnosis), CCFRG, ACFRG, Fellowship in Fetal Medicine, ISUOG Certified in Fetal Echocardiography, Advanced Fellowship in Musculoskeletal Imaging",
    degrees:
      "MBBS — Bangalore Medical College and Research Institute, Bengaluru; MD Radiodiagnosis — Kempegowda Institute of Medical Sciences, Bengaluru; CCFRG; ACFRG (Advanced Certificate in Fetal Radiology & Genetics); Fellowship in Fetal Medicine; ISUOG Certified in Fetal Echocardiography; Advanced Fellowship in Musculoskeletal Imaging",
    experience: "9 years experience",
  },

  // Physician / Internal Medicine
  {
    name: "Dr. Ravishankar N.",
    image: "uploads/doctors/dr ravishankar physician magnus updaed.jpeg",
    title: "Senior Consultant Physician",
    specialty: "Physician / Internal Medicine",
    keyQualification: "MBBS, DPH",
    degrees: "MBBS, DPH, MBA (Hospital Administration)",
    experience: "35+ years experience",
  },
  {
    name: "Dr. Prabhu Subramani",
    title: "Consultant General Physician & Internal Medicine Specialist",
    specialty: "Physician / Internal Medicine",
    keyQualification: "MD (General Medicine)",
    degrees: "MBBS, MD (General Medicine), MRCP (General Medicine)",
    experience: "25+ years experience, 20+ as a specialist",
  },

  // Diabetology
  {
    name: "Dr. Shruthika Desai",
    title: "Consultant Physician & Diabetologist",
    specialty: "Diabetology",
    keyQualification: "Diploma in Diabetology",
    degrees: "MBBS, Diploma in Diabetology (Lilavati Hospital)",
    experience: "12+ years experience",
  },

  // Cardiology
  {
    name: "Dr. Satish Karur",
    title: "Consultant Cardiologist",
    specialty: "Cardiology",
    keyQualification: "DM (Cardiology)",
    degrees: "MBBS, MD (General Medicine), DM (Cardiology)",
    experience: "20+ years experience",
  },
  {
    name: "Dr. S. Venkatesh",
    title: "Senior Consultant Cardiologist & Interventional Cardiologist",
    specialty: "Cardiology",
    keyQualification: "DM (Cardiology)",
    degrees: "MBBS, MD (Internal Medicine) PGIMER, DM (Cardiology) PGIMER",
    experience: "25+ years in cardiology, 35+ in internal medicine",
  },
  {
    name: "Dr. M. Sudhakar Rao",
    image: "uploads/doctors/dr sudhakar rao cardiologist magnus.jpg",
    imagePosition: "50% 50%",
    title: "Senior Consultant Cardiologist & Interventional Cardiologist",
    specialty: "Cardiology",
    keyQualification: "DM (Cardiology), FACC",
    degrees: "MD (Internal Medicine), DM (Cardiology), FACC, FESC, FSCAI",
    experience: "5,000+ coronary angiograms, 1,500+ angioplasties",
  },

  // Orthopedics
  {
    name: "Dr. Hassan Askary",
    title: "Senior Consultant Orthopaedic Surgeon",
    specialty: "Orthopedics",
    keyQualification: "MS (Orthopaedics)",
    degrees: "MBBS, D.Ortho, MS (Orthopaedics)",
    experience: "36+ years experience",
  },
  {
    name: "Dr. Rajaram K. G.",
    image: "uploads/doctors/dr rajaram orthopedic magnus.jpeg",
    // Landscape source (1536x1024): the face already sits centred, so the
    // default upward bias would crop the top of the head.
    imagePosition: "50% 50%",
    title: "Senior Consultant Orthopaedic Surgeon",
    specialty: "Orthopedics",
    keyQualification: "MS (Orthopaedics)",
    degrees: "MBBS, MS (Orthopaedics)",
    experience: "41+ years experience",
  },
  {
    name: "Dr. Nischay Kenjige",
    image: "uploads/doctors/dr nischay k k orthopedic magnus.jpg",
    title: "Consultant Orthopaedic Surgeon",
    specialty: "Orthopedics",
    keyQualification: "FRCS (Trauma & Orthopaedics)",
    degrees: "MBBS, MS (Orthopaedics), MCh, MRCS (Edinburgh), FRCS (Trauma & Orthopaedics)",
    experience: "9+ years experience, UK fellowship trained",
  },

  // Gynecology & Obstetrics
  {
    name: "Dr. Soumya Mahesh Koregol",
    image: "uploads/doctors/dr sowmya obstetrician magnus.jpeg",
    title: "Consultant Obstetrician, Gynaecologist & Infertility Specialist",
    specialty: "Gynecology & Obstetrics",
    keyQualification: "MS (Obstetrics & Gynaecology)",
    degrees:
      "MBBS, MS (Obstetrics & Gynaecology), Clinical Embryology (Manipal), Diploma in Reproductive Medicine & IVF",
    experience: "15+ years experience",
  },
  {
    name: "Dr. Kavita Rao",
    title: "Senior Consultant Obstetrician & Gynaecologist",
    specialty: "Gynecology & Obstetrics",
    keyQualification: "DGO (Diploma in Gynaecology & Obstetrics)",
    degrees: "MBBS, DGO (Diploma in Gynaecology & Obstetrics)",
    experience: "18+ years experience",
  },

  // ENT
  {
    name: "Dr. Prashanth R. Reddy",
    title: "Senior Consultant ENT, Head & Neck and Skull Base Surgeon",
    specialty: "ENT",
    keyQualification: "MS (ENT)",
    degrees: "MBBS, MS (ENT) — Bangalore Medical College & Research Institute",
    experience: "20+ years experience, 15+ as an ENT specialist",
  },
  {
    name: "Dr. Smitha Chandra",
    image: "uploads/doctors/dr smitha ENT magnus.jpeg",
    title: "Senior ENT, Head & Neck Surgeon",
    specialty: "ENT",
    keyQualification: "MS (ENT)",
    degrees: "MBBS, MS (ENT), AASC, AMVD, PGDFAC",
    experience: "17+ years experience",
  },
  {
    name: "Dr. Joshi Anto Tommi J",
    image: "uploads/doctors/dr joshi ENT magnus.JPG",
    title: "Consultant ENT Surgeon",
    specialty: "ENT",
    keyQualification: "MS (ENT)",
    degrees: "MBBS, MS (ENT)",
    experience: "2+ years experience",
  },

  // Pulmonology
  {
    name: "Dr. Rakesh Bilagi",
    title: "Consultant Pulmonologist & Respiratory Medicine Specialist",
    specialty: "Pulmonology",
    keyQualification: "MD (Respiratory Medicine)",
    degrees: "MBBS, MD (Respiratory Medicine)",
    experience: "14+ years experience",
  },

  // General Surgery
  {
    name: "Dr. Shiva Kumar",
    title: "Senior Consultant General & Laparoscopic Surgeon",
    specialty: "General Surgery",
    keyQualification: "DNB (General Surgery)",
    degrees: "MBBS, DNB (General Surgery), FMAS (Fellowship in Minimal Access Surgery)",
    experience: "25+ years experience, 15+ as a specialist",
  },
  {
    name: "Dr. Sai Shruthi Rai",
    title: "Senior Consultant General & Laparoscopic Surgeon",
    specialty: "General Surgery",
    keyQualification: "MS (General Surgery)",
    degrees: "MBBS, MS (General Surgery), FMAS (Fellowship in Minimal Access Surgery)",
    experience: "16+ years experience",
  },
  {
    name: "Dr. Mir Zeeshan Ali",
    image: "uploads/doctors/dr zeeshan ali surgeon magnus.jpeg",
    title: "Senior Consultant General Surgeon & Proctologist",
    specialty: "General Surgery",
    keyQualification: "MS (General Surgery)",
    degrees: "MBBS, MS (General Surgery), MBA (International Healthcare Management)",
    experience: "10+ years experience",
  },

  // Medical Gastroenterology
  {
    name: "Dr. Chaarithra Ravishankar",
    title: "Consultant Gastroenterologist",
    specialty: "Medical Gastroenterology",
    keyQualification: "DNB (Gastroenterology)",
    degrees: "MBBS, MD (Internal Medicine), DNB (Gastroenterology)",
    experience: "13+ years experience",
  },

  // Surgical Gastroenterology
  {
    name: "Dr. Govind Nandakumar",
    image: "uploads/doctors/dr govind nandkumar gastrosurgeon magnus.jpg",
    imagePosition: "50% 50%",
    title: "Senior Consultant Surgical Gastroenterologist",
    specialty: "Surgical Gastroenterology",
    keyQualification: "FACS",
    degrees: "MD, FACS, FASCRS, FSSO",
    experience: "International training in GI, colorectal & HPB surgery",
  },

  // Vascular Surgery
  {
    name: "Dr. Vaibhav Lende",
    title: "Consultant Vascular & Endovascular Surgeon",
    specialty: "Vascular Surgery",
    keyQualification: "DNB (Vascular Surgery)",
    degrees:
      "MBBS, DNB (General Surgery), DNB (Vascular Surgery), Fellowship in Vascular Surgery — St. James Hospital, Dublin",
    experience: "Advanced fellowship trained, ECFMG certified",
  },

  // Neurosurgery
  {
    name: "Dr. Ajay Hegde",
    image: "uploads/doctors/dr ajay hedge.jpeg",
    /* Landscape 921x659. Height fits the square frame exactly — no vertical crop.
       Horizontal: 131px clipped each side, face centred at 50%. */
    imagePosition: "50% 50%",
    title: "Senior Consultant Neurosurgeon & Neuro-Spine Surgeon",
    specialty: "Neurosurgery",
    keyQualification: "MCh (Neurosurgery)",
    degrees:
      "MBBS, MS (General Surgery), MCh (Neurosurgery), DNB (Neurosurgery), FRCS (Neurosurgery) Edinburgh",
    experience: "3,000+ complex neurosurgical procedures",
  },
  {
    name: "Dr. Veeresha U. Mathad",
    image: "uploads/doctors/dr veeresha u mathad neurosurgeon magnus.jpg",
    imagePosition: "50% 50%",
    title: "Senior Consultant Neuro & Spine Surgeon",
    specialty: "Neurosurgery",
    keyQualification: "MCh (Neurosurgery)",
    degrees:
      "MBBS, MS (General Surgery), MCh (Neurosurgery), Fellowship in Interventional Neuroradiology",
    experience: "13+ years experience",
  },

  // Nephrology
  {
    name: "Dr. Ravindra Mukkunda",
    image: "uploads/doctors/dr ravindra mukkunda nephrologist magnus.jpg",
    imagePosition: "50% 50%",
    title: "Senior Consultant Nephrologist & Renal Transplant Physician",
    specialty: "Nephrology",
    keyQualification: "MRCP (UK) Nephrology",
    degrees:
      "MBBS, MD (General Medicine), MRCP (UK) Nephrology, CCT (UK), MSc Kidney Transplantation Science — University of Liverpool",
    experience: "Extensive experience in the United Kingdom and India",
  },
  {
    name: "Dr. Krishna Kumar K",
    image: "uploads/doctors/dr krishna kumar k nephrologist magnus.jpg",
    imagePosition: "50% 50%",
    title: "Consultant Nephrologist & Renal Transplant Physician",
    specialty: "Nephrology",
    keyQualification: "DrNB (Nephrology)",
    degrees: "MBBS, MD (Internal Medicine), DrNB (Nephrology)",
  },
  {
    name: "Dr. Mitesh Makwana",
    image: "uploads/doctors/dr mithesh makwana nephologist magnus.jpg",
    imagePosition: "50% 50%",
    title: "Consultant Nephrologist & Critical Care Nephrologist",
    specialty: "Nephrology",
    keyQualification: "DrNB (Nephrology)",
    degrees: "MBBS, MD (Internal Medicine), DrNB (Nephrology)",
  },

  // Homoeopathy
  {
    name: "Dr. Munnavvar Sultana Shaikh",
    title: "Senior Consultant Homoeopathic Physician",
    specialty: "Homoeopathy",
    keyQualification: "BHMS",
    degrees: "BHMS (Bachelor of Homoeopathic Medicine & Surgery), BFT (UK)",
    experience: "25+ years experience",
  },

  // Physiotherapy
  {
    // Qualifications were marked "to be added once provided" in the source
    // profile, so `degrees`/`keyQualification` are deliberately left unset
    // rather than guessed.
    name: "Dr. Jasmeet Sunil",
    image: "uploads/doctors/dr jasmeet physiotherapist magnus.jpeg",
    title: "Consultant Physiotherapist",
    specialty: "Physiotherapy",
    experience: "Clinical experience since 2002",
  },
];

/**
 * The roster as it is *displayed*: consultants whose photograph has arrived come
 * first, the monogram placeholders trail behind.
 *
 * The `doctors` array above stays grouped by department, because that is what
 * makes it maintainable — a new profile gets filed under its heading. The
 * display order is derived from it instead, so adding an `image` is all it takes
 * to move someone up; nobody has to hand-shuffle records to keep photos on top.
 *
 * The sort is stable (guaranteed since ES2019), so within each of the two groups
 * the original department grouping is preserved.
 */
export const doctorsPhotoFirst: Doctor[] = [...doctors].sort(
  (a, b) => Number(Boolean(b.image)) - Number(Boolean(a.image)),
);

/**
 * Filter chips, in the order they appear. Only specialties that actually have a
 * doctor are listed, so the rail never offers a filter that returns nothing.
 * Ordered by `navigation.ts` so the site stays consistent.
 */
export const doctorFilters: string[] = [
  "All",
  ...specialties.filter((s) => doctors.some((d) => d.specialty === s)),
];


/** Lookup for the /doctors/[slug] route. */
export function getDoctorBySlug(slug: string): Doctor | undefined {
  return doctors.find((doctor) => doctorSlug(doctor.name) === slug);
}

/** Feeds generateStaticParams, so every consultant gets a page at build time. */
export function getAllDoctorSlugs(): string[] {
  return doctors.map((doctor) => doctorSlug(doctor.name));
}

/**
 * Consultants in one department. Used by a doctor's profile to offer colleagues
 * in the same specialty, and by the specialty pages to list their team — which
 * is what turns the specialty pages from boilerplate into something specific.
 *
 * Drawn from `doctorsPhotoFirst`, so these lists lead with photographed
 * consultants just like the main listing does.
 */
export function getDoctorsBySpecialty(specialty: string): Doctor[] {
  return doctorsPhotoFirst.filter((doctor) => doctor.specialty === specialty);
}

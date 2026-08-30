import { specialties } from "@/lib/constants/navigation";

export type Doctor = {
  /** Full name, including the "Dr." prefix. Shown in bold on the card. */
  name: string;
  /**
   * Professional designation, e.g. "Senior Consultant Cardiologist". Shown in
   * the small line above the name.
   */
  title: string;
  /** Must match a specialty in `navigation.ts` — this drives the filter. */
  specialty: (typeof specialties)[number];
  /** Qualifications line, e.g. "MBBS, MS (ENT)". Omit if not yet confirmed. */
  degrees?: string;
  /** Experience line, e.g. "20+ years experience". Optional. */
  experience?: string;
  /**
   * Path under `/assets/` — for a doctor photo that is
   * `"uploads/doctors/<file>"`. Leave it out and the card shows a monogram
   * tile, so a doctor can be listed before the photograph exists.
   */
  image?: string;
  /** Where the card links to. Defaults to the doctor's specialty page. */
  href?: string;
};

/**
 * The Clarus Magnus consultant roster, grouped by department in the order the
 * profiles were supplied. Photographs are pending for everyone, so no entry
 * carries an `image` yet — each card renders a monogram tile until one is added.
 */
export const doctors: Doctor[] = [
  // Radiology
  {
    name: "Dr. Chaathurya R.",
    title: "Consultant Radiologist",
    specialty: "Radiology",
    degrees:
      "MBBS, MD (Radiodiagnosis), CCFRG, ACFRG, Fellowship in Fetal Medicine, ISUOG Certified in Fetal Echocardiography, Advanced Fellowship in Musculoskeletal Imaging",
    experience: "9 years experience",
  },

  // Physician / Internal Medicine
  {
    name: "Dr. Ravishankar N.",
    title: "Senior Consultant Physician",
    specialty: "Physician / Internal Medicine",
    degrees: "MBBS, DPH, MBA (Hospital Administration)",
    experience: "35+ years experience",
  },
  {
    name: "Dr. Prabhu Subramani",
    title: "Consultant General Physician & Internal Medicine Specialist",
    specialty: "Physician / Internal Medicine",
    degrees: "MBBS, MD (General Medicine), MRCP (General Medicine)",
    experience: "25+ years experience, 20+ as a specialist",
  },

  // Diabetology
  {
    name: "Dr. Shruthika Desai",
    title: "Consultant Physician & Diabetologist",
    specialty: "Diabetology",
    degrees: "MBBS, Diploma in Diabetology (Lilavati Hospital)",
    experience: "12+ years experience",
  },

  // Cardiology
  {
    name: "Dr. Satish Karur",
    title: "Consultant Cardiologist",
    specialty: "Cardiology",
    degrees: "MBBS, MD (General Medicine), DM (Cardiology)",
    experience: "20+ years experience",
  },
  {
    name: "Dr. S. Venkatesh",
    title: "Senior Consultant Cardiologist & Interventional Cardiologist",
    specialty: "Cardiology",
    degrees: "MBBS, MD (Internal Medicine) PGIMER, DM (Cardiology) PGIMER",
    experience: "25+ years in cardiology, 35+ in internal medicine",
  },
  {
    name: "Dr. M. Sudhakar Rao",
    title: "Senior Consultant Cardiologist & Interventional Cardiologist",
    specialty: "Cardiology",
    degrees: "MD (Internal Medicine), DM (Cardiology), FACC, FESC, FSCAI",
    experience: "5,000+ coronary angiograms, 1,500+ angioplasties",
  },

  // Orthopedics
  {
    name: "Dr. Hassan Askary",
    title: "Senior Consultant Orthopaedic Surgeon",
    specialty: "Orthopedics",
    degrees: "MBBS, D.Ortho, MS (Orthopaedics)",
    experience: "36+ years experience",
  },
  {
    name: "Dr. Rajaram K. G.",
    title: "Senior Consultant Orthopaedic Surgeon",
    specialty: "Orthopedics",
    degrees: "MBBS, MS (Orthopaedics)",
    experience: "41+ years experience",
  },
  {
    name: "Dr. Nischay Kenjige",
    title: "Consultant Orthopaedic Surgeon",
    specialty: "Orthopedics",
    degrees: "MBBS, MS (Orthopaedics), MCh, MRCS (Edinburgh), FRCS (Trauma & Orthopaedics)",
    experience: "9+ years experience, UK fellowship trained",
  },

  // Gynecology & Obstetrics
  {
    name: "Dr. Soumya Mahesh Koregol",
    title: "Consultant Obstetrician, Gynaecologist & Infertility Specialist",
    specialty: "Gynecology & Obstetrics",
    degrees:
      "MBBS, MS (Obstetrics & Gynaecology), Clinical Embryology (Manipal), Diploma in Reproductive Medicine & IVF",
    experience: "15+ years experience",
  },
  {
    name: "Dr. Kavita Rao",
    title: "Senior Consultant Obstetrician & Gynaecologist",
    specialty: "Gynecology & Obstetrics",
    degrees: "MBBS, DGO (Diploma in Gynaecology & Obstetrics)",
    experience: "18+ years experience",
  },

  // ENT
  {
    name: "Dr. Prashanth R. Reddy",
    title: "Senior Consultant ENT, Head & Neck and Skull Base Surgeon",
    specialty: "ENT",
    degrees: "MBBS, MS (ENT) — Bangalore Medical College & Research Institute",
    experience: "20+ years experience, 15+ as an ENT specialist",
  },
  {
    name: "Dr. Smitha Chandra",
    title: "Senior ENT, Head & Neck Surgeon",
    specialty: "ENT",
    degrees: "MBBS, MS (ENT), AASC, AMVD, PGDFAC",
    experience: "17+ years experience",
  },
  {
    name: "Dr. Joshi Anto Tommi J",
    title: "Consultant ENT Surgeon",
    specialty: "ENT",
    degrees: "MBBS, MS (ENT)",
    experience: "2+ years experience",
  },

  // Pulmonology
  {
    name: "Dr. Rakesh Bilagi",
    title: "Consultant Pulmonologist & Respiratory Medicine Specialist",
    specialty: "Pulmonology",
    degrees: "MBBS, MD (Respiratory Medicine)",
    experience: "14+ years experience",
  },

  // General Surgery
  {
    name: "Dr. Shiva Kumar",
    title: "Senior Consultant General & Laparoscopic Surgeon",
    specialty: "General Surgery",
    degrees: "MBBS, DNB (General Surgery), FMAS (Fellowship in Minimal Access Surgery)",
    experience: "25+ years experience, 15+ as a specialist",
  },
  {
    name: "Dr. Sai Shruthi Rai",
    title: "Senior Consultant General & Laparoscopic Surgeon",
    specialty: "General Surgery",
    degrees: "MBBS, MS (General Surgery), FMAS (Fellowship in Minimal Access Surgery)",
    experience: "16+ years experience",
  },
  {
    name: "Dr. Mir Zeeshan Ali",
    title: "Senior Consultant General Surgeon & Proctologist",
    specialty: "General Surgery",
    degrees: "MBBS, MS (General Surgery), MBA (International Healthcare Management)",
    experience: "10+ years experience",
  },

  // Medical Gastroenterology
  {
    name: "Dr. Chaarithra Ravishankar",
    title: "Consultant Gastroenterologist",
    specialty: "Medical Gastroenterology",
    degrees: "MBBS, MD (Internal Medicine), DNB (Gastroenterology)",
    experience: "13+ years experience",
  },

  // Surgical Gastroenterology
  {
    name: "Dr. Govind Nandakumar",
    title: "Senior Consultant Surgical Gastroenterologist",
    specialty: "Surgical Gastroenterology",
    degrees: "MD, FACS, FASCRS, FSSO",
    experience: "International training in GI, colorectal & HPB surgery",
  },

  // Vascular Surgery
  {
    name: "Dr. Vaibhav Lende",
    title: "Consultant Vascular & Endovascular Surgeon",
    specialty: "Vascular Surgery",
    degrees:
      "MBBS, DNB (General Surgery), DNB (Vascular Surgery), Fellowship in Vascular Surgery — St. James Hospital, Dublin",
    experience: "Advanced fellowship trained, ECFMG certified",
  },

  // Neurosurgery
  {
    name: "Dr. Ajay Hegde",
    title: "Senior Consultant Neurosurgeon & Neuro-Spine Surgeon",
    specialty: "Neurosurgery",
    degrees:
      "MBBS, MS (General Surgery), MCh (Neurosurgery), DNB (Neurosurgery), FRCS (Neurosurgery) Edinburgh",
    experience: "3,000+ complex neurosurgical procedures",
  },
  {
    name: "Dr. Veeresha U. Mathad",
    title: "Senior Consultant Neuro & Spine Surgeon",
    specialty: "Neurosurgery",
    degrees:
      "MBBS, MS (General Surgery), MCh (Neurosurgery), Fellowship in Interventional Neuroradiology",
    experience: "13+ years experience",
  },

  // Nephrology
  {
    name: "Dr. Ravindra Mukkunda",
    title: "Senior Consultant Nephrologist & Renal Transplant Physician",
    specialty: "Nephrology",
    degrees:
      "MBBS, MD (General Medicine), MRCP (UK) Nephrology, CCT (UK), MSc Kidney Transplantation Science — University of Liverpool",
    experience: "Extensive experience in the United Kingdom and India",
  },
  {
    name: "Dr. Krishna Kumar K",
    title: "Consultant Nephrologist & Renal Transplant Physician",
    specialty: "Nephrology",
    degrees: "MBBS, MD (Internal Medicine), DrNB (Nephrology)",
  },
  {
    name: "Dr. Mitesh Makwana",
    title: "Consultant Nephrologist & Critical Care Nephrologist",
    specialty: "Nephrology",
    degrees: "MBBS, MD (Internal Medicine), DrNB (Nephrology)",
  },

  // Homoeopathy
  {
    name: "Dr. Munnavvar Sultana Shaikh",
    title: "Senior Consultant Homoeopathic Physician",
    specialty: "Homoeopathy",
    degrees: "BHMS (Bachelor of Homoeopathic Medicine & Surgery), BFT (UK)",
    experience: "25+ years experience",
  },

  // Physiotherapy
  {
    // Qualifications were marked "to be added once provided" in the source
    // profile, so `degrees` is deliberately omitted rather than guessed.
    name: "Dr. Jasmeet Sunil",
    title: "Consultant Physiotherapist",
    specialty: "Physiotherapy",
    experience: "Clinical experience since 2002",
  },
];

/**
 * Filter chips, in the order they appear. Only specialties that actually have a
 * doctor are listed, so the rail never offers a filter that returns nothing.
 * Ordered by `navigation.ts` so the site stays consistent.
 */
export const doctorFilters: string[] = [
  "All",
  ...specialties.filter((s) => doctors.some((d) => d.specialty === s)),
];

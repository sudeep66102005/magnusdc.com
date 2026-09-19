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
  /**
   * List of conditions / services the doctor treats. Shown on the individual
   * profile page as a tag cloud so visitors can quickly scan relevance.
   */
  conditionsTreated?: string[];
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
    image: "uploads/doctors/dr chaaturya.jpeg",
    keyQualification:
      "MBBS, MD (Radiodiagnosis), CCFRG, ACFRG, Fellowship in Fetal Medicine, ISUOG Certified in Fetal Echocardiography, Advanced Fellowship in Musculoskeletal Imaging",
    degrees:
      "MBBS — Bangalore Medical College and Research Institute, Bengaluru; MD Radiodiagnosis — Kempegowda Institute of Medical Sciences, Bengaluru; CCFRG; ACFRG (Advanced Certificate in Fetal Radiology & Genetics); Fellowship in Fetal Medicine; ISUOG Certified in Fetal Echocardiography; Advanced Fellowship in Musculoskeletal Imaging",
    experience: "9 years experience",
    conditionsTreated: [
      "Fetal Medicine",
      "Pregnancy Ultrasound",
      "High-Risk Pregnancy Imaging",
      "Early Pregnancy Assessment",
      "Fetal Echocardiography",
      "Detailed Fetal Anomaly Assessment / TIFFA Scan",
      "Fetal Growth & Doppler Studies",
      "Women's Imaging",
      "Musculoskeletal MRI",
      "MRI & CT Reporting",
      "General Ultrasound",
      "Pelvic Ultrasound",
      "Transvaginal Ultrasound (TVS)",
      "Breast Ultrasound",
      "MRI of Joints",
      "Soft Tissue Ultrasound",
      "Image-Guided FNAC",
      "Image-Guided Biopsy",
      "Image-Guided Fluid Aspiration",
    ],
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
    conditionsTreated: [
      "Multisystem Disorders",
      "Acute & Chronic Disease Management",
      "Fever Evaluation",
      "Respiratory Infections",
      "Urinary Tract Infections",
      "Gastrointestinal Infections",
      "Type 2 Diabetes",
      "Hypertension",
      "Dyslipidaemia",
      "Thyroid Disorders",
      "Chronic Lung Diseases",
      "Pneumonia",
      "Acid Reflux / GERD",
      "Irritable Bowel Syndrome (IBS)",
      "Generalized Myalgia",
      "Low Back Pain",
      "Neck Pain",
      "Chronic Knee Pain",
      "Medical Management of Osteoarthritis",
      "Pre-operative Medical Clearance",
      "Wound Care & Wound Management",
      "Incision & Drainage of Abscesses",
    ],
  },
  {
    name: "Dr. Prabhu Subramani",
    title: "Consultant General Physician & Internal Medicine Specialist",
    specialty: "Physician / Internal Medicine",
    keyQualification: "MD (General Medicine)",
    degrees: "MBBS, MD (General Medicine), MRCP (General Medicine)",
    experience: "25+ years experience, 20+ as a specialist",
    conditionsTreated: [
      "Hypertension",
      "Heart Disorders",
      "Diabetes Mellitus",
      "Asthma",
      "Chronic Obstructive Pulmonary Disease (COPD)",
      "Lung Infections",
      "Kidney Disorders",
      "Urinary Tract Infections (UTIs)",
      "Stroke",
      "Thyroid Disorders",
      "Fever",
      "Diarrhoea",
      "Acid Peptic Disorders",
    ],
  },

  // Diabetology
  {
    name: "Dr. Shruthika Desai",
    title: "Consultant Physician & Diabetologist",
    specialty: "Diabetology",
    keyQualification: "Diploma in Diabetology",
    degrees: "MBBS, Diploma in Diabetology (Lilavati Hospital)",
    experience: "12+ years experience",
    conditionsTreated: [
      "Type 1 Diabetes",
      "Type 2 Diabetes",
      "Prediabetes",
      "Diabetes Risk Assessment",
      "Blood Sugar Management",
      "Hypertension",
      "High Cholesterol (Dyslipidaemia)",
      "Obesity & Weight Management",
      "Metabolic Syndrome",
      "Lifestyle Modification & Preventive Care",
      "Fever",
      "Viral Fever",
      "Cold & Cough",
      "Sore Throat (Pharyngitis)",
      "Seasonal Infections",
      "Dog Bite Management",
      "Annual Health Check-ups",
      "Preventive Health Screening",
    ],
  },

  // Cardiology
  {
    name: "Dr. Satish Karur",
    title: "Consultant Cardiologist",
    specialty: "Cardiology",
    keyQualification: "DM (Cardiology)",
    degrees: "MBBS, MD (General Medicine), DM (Cardiology)",
    experience: "20+ years experience",
    conditionsTreated: [
      "Cardiovascular Risk Assessment",
      "Hypertension Management",
      "Evaluation & Management of Heart Disease",
      "Preventive Cardiology",
      "Long-term Cardiac Care",
      "Diagnosis & Management of Cardiovascular Conditions",
    ],
  },
  {
    name: "Dr. S. Venkatesh",
    title: "Senior Consultant Cardiologist & Interventional Cardiologist",
    specialty: "Cardiology",
    keyQualification: "DM (Cardiology)",
    degrees: "MBBS, MD (Internal Medicine) PGIMER, DM (Cardiology) PGIMER",
    experience: "25+ years in cardiology, 35+ in internal medicine",
    conditionsTreated: [
      "Coronary Artery Disease",
      "Ischaemic Heart Disease",
      "Heart Attack (Myocardial Infarction)",
      "Angina",
      "Congestive Heart Failure",
      "Hypertension",
      "Cardiac Arrhythmias",
      "Atrial Fibrillation",
      "Bradycardia & Tachycardia",
      "Valvular Heart Disease",
      "Aortic Aneurysms",
      "Aortic Dissections",
      "High Cholesterol",
      "Cardiomyopathy",
      "Peripheral Vascular Disease",
      "Lipid Disorders",
    ],
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
    conditionsTreated: [
      "Coronary Artery Disease",
      "Heart Attack (Myocardial Infarction)",
      "Angina",
      "Complex Coronary Artery Disease",
      "Bifurcation Lesion",
      "Chronic Total Occlusion (CTO)",
      "Left Main Coronary Artery Disease",
      "Heart Failure",
      "Hypertension",
      "High Cholesterol",
      "Cardiovascular Risk Assessment",
      "Atrial Septal Defect (ASD)",
      "Patent Ductus Arteriosus (PDA)",
      "Congenital Heart Disease",
      "Peripheral Arterial Disease",
      "Carotid Artery Disease",
      "Renal Artery Disease",
    ],
  },

  // Orthopedics
  {
    name: "Dr. Hassan Askary",
    title: "Senior Consultant Orthopaedic Surgeon",
    specialty: "Orthopedics",
    keyQualification: "MS (Orthopaedics)",
    degrees: "MBBS, D.Ortho, MS (Orthopaedics)",
    experience: "36+ years experience",
    conditionsTreated: [
      "Knee Injuries",
      "Hip Disorders",
      "Sports Injuries",
      "Ligament Injuries",
      "Soft Tissue Injuries",
      "Joint Pain",
      "Neck Pain",
      "Back Pain",
      "Slip Disc",
      "Sciatica",
      "Cervical & Lumbar Spondylosis",
      "Simple & Complex Fractures",
      "Polytrauma",
      "Paediatric Bone & Joint Disorders",
      "Congenital Orthopaedic Conditions",
      "Growth-related Bone Disorders",
    ],
  },
  {
    name: "Dr. Rajaram K. G.",
    image: "uploads/doctors/dr rajaram orthopedic magnus.jpeg",
    imagePosition: "50% 50%",
    title: "Senior Consultant Orthopaedic Surgeon",
    specialty: "Orthopedics",
    keyQualification: "MS (Orthopaedics)",
    degrees: "MBBS, MS (Orthopaedics)",
    experience: "41+ years experience",
    conditionsTreated: [
      "Knee Pain",
      "Hip Pain",
      "Shoulder Pain",
      "Arthritis",
      "Osteoarthritis",
      "Rheumatoid Arthritis",
      "Joint Degeneration",
      "Ligament Injuries",
      "Meniscus Tears",
      "Cartilage Injuries",
      "Sports Injuries",
      "Simple & Complex Fractures",
      "Post-traumatic Reconstruction",
      "Bone and Joint Infections",
      "Slip Disc (Disc Prolapse)",
      "Cervical & Lumbar Spondylosis",
      "Sciatica",
      "Congenital Bone & Joint Disorders",
      "Limb Deformities",
    ],
  },
  {
    name: "Dr. Nischay Kenjige",
    image: "uploads/doctors/dr nischay k k orthopedic magnus.jpg",
    title: "Consultant Orthopaedic Surgeon",
    specialty: "Orthopedics",
    keyQualification: "FRCS (Trauma & Orthopaedics)",
    degrees:
      "MBBS, MS (Orthopaedics), MCh, MRCS (Edinburgh), FRCS (Trauma & Orthopaedics)",
    experience: "9+ years experience, UK fellowship trained",
    conditionsTreated: [
      "Shoulder Pain",
      "Shoulder Arthritis",
      "Frozen Shoulder",
      "Rotator Cuff Tears",
      "Shoulder Instability & Recurrent Dislocation",
      "Shoulder Fractures",
      "Knee Pain",
      "Osteoarthritis of the Knee",
      "ACL Injuries",
      "PCL & Multi-ligament Injuries",
      "Meniscal Tears",
      "Cartilage Injuries",
      "Sports Injuries",
      "Patellar Instability",
      "Recurrent Kneecap Dislocation",
      "Tennis Elbow",
      "Golfer's Elbow",
      "Carpal Tunnel Syndrome",
      "Trigger Finger",
      "De Quervain's Disease",
      "Peripheral Nerve Compression",
      "Hand & Wrist Disorders",
    ],
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
    conditionsTreated: [
      "Routine Antenatal Care",
      "High-Risk Pregnancy Management",
      "Normal Delivery",
      "Caesarean Section (LSCS)",
      "Postnatal Care",
      "Female Infertility",
      "Ovulation Disorders",
      "IVF / Assisted Reproductive Technology (ART)",
      "PCOS / PCOM Management",
      "Menstrual Disorders",
      "Family Planning",
      "Copper-T (IUCD) Insertion",
      "HPV Vaccination",
      "Laparoscopic Gynaecological Surgery",
      "Hysteroscopy",
      "Hysterectomy",
      "Tubectomy",
    ],
  },
  {
    name: "Dr. Kavita Rao",
    title: "Senior Consultant Obstetrician & Gynaecologist",
    specialty: "Gynecology & Obstetrics",
    keyQualification: "DGO (Diploma in Gynaecology & Obstetrics)",
    degrees: "MBBS, DGO (Diploma in Gynaecology & Obstetrics)",
    experience: "18+ years experience",
    conditionsTreated: [
      "High-Risk Pregnancy Management",
      "Antenatal Care",
      "Recurrent Pregnancy Loss",
      "Postnatal Care",
      "Irregular Menstrual Cycles",
      "Menstrual Disorders",
      "Painful Periods (Dysmenorrhoea)",
      "Heavy Menstrual Bleeding",
      "Pelvic Pain",
      "Vaginal Infections",
      "HPV Infection Evaluation & Management",
      "Cervical Cancer Screening",
      "Menopause Counselling",
      "Family Planning & Contraceptive Counselling",
      "Fertility Counselling",
      "Pre-Pregnancy Planning",
    ],
  },

  // ENT
  {
    name: "Dr. Prashanth R. Reddy",
    title: "Senior Consultant ENT, Head & Neck and Skull Base Surgeon",
    specialty: "ENT",
    keyQualification: "MS (ENT)",
    degrees: "MBBS, MS (ENT) — Bangalore Medical College & Research Institute",
    experience: "20+ years experience, 15+ as an ENT specialist",
    conditionsTreated: [
      "Chronic Sinusitis",
      "Recurrent Sinus Infections",
      "Allergic Rhinitis",
      "Nasal Allergy",
      "Nasal Polyps",
      "Deviated Nasal Septum (DNS)",
      "Nasal Obstruction",
      "Skull Base Disorders",
      "Sinonasal Tumours",
      "Ear Infections",
      "Hearing Loss",
      "Tinnitus",
      "Vertigo",
      "Chronic Ear Disease",
      "Adenoid Enlargement",
      "Tonsillitis",
      "Paediatric Airway Disorders",
      "Hoarseness",
      "Voice Disorders",
      "Swallowing Disorders",
    ],
  },
  {
    name: "Dr. Smitha Chandra",
    image: "uploads/doctors/dr smitha ENT magnus.jpeg",
    title: "Senior ENT, Head & Neck Surgeon",
    specialty: "ENT",
    keyQualification: "MS (ENT)",
    degrees: "MBBS, MS (ENT), AASC, AMVD, PGDFAC",
    experience: "17+ years experience",
    conditionsTreated: [
      "Ear Infections",
      "Hearing Loss",
      "Ear Discharge",
      "Tinnitus",
      "Vertigo",
      "Balance Disorders",
      "Perforated Eardrum",
      "Chronic Ear Disease",
      "Deviated Nasal Septum (DNS)",
      "Sinusitis",
      "Nasal Polyps",
      "Allergic Rhinitis",
      "Nasal Obstruction",
      "Tonsillitis",
      "Adenoid Enlargement",
      "Snoring",
      "Obstructive Sleep Apnoea",
      "Voice Disorders",
      "Hoarseness",
      "Thyroid Disorders",
      "Salivary Gland Disorders",
      "Neck Swellings",
      "Head & Neck Tumours",
      "Facial Trauma",
      "Rhinoplasty",
    ],
  },
  {
    name: "Dr. Joshi Anto Tommi J",
    image: "uploads/doctors/dr joshi ENT magnus.JPG",
    title: "Consultant ENT Surgeon",
    specialty: "ENT",
    keyQualification: "MS (ENT)",
    degrees: "MBBS, MS (ENT)",
    experience: "2+ years experience",
    conditionsTreated: [
      "Ear Infections",
      "Acute Otitis Media (AOM)",
      "Acute Suppurative Otitis Media (ASOM)",
      "Chronic Suppurative Otitis Media (CSOM)",
      "Ear Discharge",
      "Hearing Problems",
      "Allergic Rhinitis",
      "Deviated Nasal Septum (DNS)",
      "Chronic Sinusitis",
      "Nasal Obstruction",
      "Tonsillitis",
      "Adenoid Enlargement",
      "Upper Respiratory Tract Infections (URTI)",
      "Tongue Tie (Ankyloglossia)",
    ],
  },

  // Pulmonology
  {
    name: "Dr. Rakesh Bilagi",
    title: "Consultant Pulmonologist & Respiratory Medicine Specialist",
    specialty: "Pulmonology",
    keyQualification: "MD (Respiratory Medicine)",
    degrees: "MBBS, MD (Respiratory Medicine)",
    experience: "14+ years experience",
    conditionsTreated: [
      "Bronchial Asthma",
      "Chronic Obstructive Pulmonary Disease (COPD)",
      "Acute & Chronic Bronchitis",
      "Pneumonia",
      "Respiratory Tract Infections",
      "Tuberculosis (TB)",
      "Bronchiectasis",
      "Interstitial Lung Disease",
      "Pleural Diseases",
      "Persistent & Chronic Cough",
      "Emphysema",
      "Pulmonary Nodules",
      "Sleep Apnea",
      "Obesity-Related Lung Disease",
      "Aspergillosis & Respiratory Fungal Infections",
      "Silicosis",
      "Pleurisy",
    ],
  },

  // General Surgery
  {
    name: "Dr. Shiva Kumar",
    title: "Senior Consultant General & Laparoscopic Surgeon",
    specialty: "General Surgery",
    keyQualification: "DNB (General Surgery)",
    degrees:
      "MBBS, DNB (General Surgery), FMAS (Fellowship in Minimal Access Surgery)",
    experience: "25+ years experience, 15+ as a specialist",
    conditionsTreated: [
      "Hernia",
      "Gallbladder Disease (Cholecystectomy)",
      "Appendicitis (Appendicectomy)",
      "Soft Tissue Lumps & Swellings",
      "Lipomas",
      "Sebaceous Cysts",
      "Abscesses",
      "Piles (Haemorrhoids)",
      "Fissure-in-Ano",
      "Fistula-in-Ano",
      "Perianal Abscess",
      "Obesity (Bariatric Surgery)",
      "Metabolic Surgery",
      "Liver Disease",
      "Hepato-Biliary-Pancreatic (HBP) Disorders",
      "Irritable Bowel Syndrome (IBS)",
      "Splenectomy",
    ],
  },
  {
    name: "Dr. Sai Shruthi Rai",
    title: "Senior Consultant General & Laparoscopic Surgeon",
    specialty: "General Surgery",
    keyQualification: "MS (General Surgery)",
    degrees:
      "MBBS, MS (General Surgery), FMAS (Fellowship in Minimal Access Surgery)",
    experience: "16+ years experience",
    conditionsTreated: [
      "Breast Lump Evaluation",
      "Benign Breast Diseases",
      "Breast Infections & Abscess",
      "Breast Pain",
      "Breast Cysts",
      "Breast Cancer Screening & Surgical Consultation",
      "Diabetic Foot Ulcers",
      "Chronic Non-Healing Wounds",
      "Limb Salvage Management",
      "Varicose Veins",
      "Chronic Venous Insufficiency",
      "Venous Leg Ulcers",
      "Hernia",
      "Gallbladder Disorders",
      "Appendicitis",
      "Lipomas",
      "Sebaceous Cysts",
      "Abscesses",
    ],
  },
  {
    name: "Dr. Mir Zeeshan Ali",
    image: "uploads/doctors/dr zeeshan ali surgeon magnus.jpeg",
    title: "Senior Consultant General Surgeon & Proctologist",
    specialty: "General Surgery",
    keyQualification: "MS (General Surgery)",
    degrees:
      "MBBS, MS (General Surgery), MBA (International Healthcare Management)",
    experience: "10+ years experience",
    conditionsTreated: [
      "Piles (Haemorrhoids)",
      "Anal Fissure",
      "Anal Fistula",
      "Pilonidal Sinus",
      "Anorectal Disorders",
      "Hydrocele",
      "Cysts & Abscesses",
      "Lipomas & Soft-tissue Swellings",
      "Diabetic Wounds",
      "Breast Lumps & Benign Breast Conditions",
      "General Surgical Conditions",
    ],
  },

  // Medical Gastroenterology
  {
    name: "Dr. Chaarithra Ravishankar",
    title: "Consultant Gastroenterologist",
    specialty: "Medical Gastroenterology",
    keyQualification: "DNB (Gastroenterology)",
    degrees: "MBBS, MD (Internal Medicine), DNB (Gastroenterology)",
    experience: "13+ years experience",
    conditionsTreated: [
      "Acidity & Heartburn (GERD)",
      "Gastritis",
      "Peptic Ulcer Disease",
      "Irritable Bowel Syndrome (IBS)",
      "Inflammatory Bowel Disease (Crohn's & Ulcerative Colitis)",
      "Constipation",
      "Chronic Diarrhoea",
      "Abdominal Pain",
      "Bloating & Indigestion",
      "Gastrointestinal Bleeding",
      "Fatty Liver Disease",
      "Hepatitis",
      "Liver Cirrhosis",
      "Jaundice",
      "Pancreatitis",
      "Pancreatic Disorders",
      "Gallbladder & Bile Duct Disorders",
      "Colon Cancer Screening",
    ],
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
    conditionsTreated: [
      "Gallbladder Diseases",
      "Hernias",
      "Appendicular Disorders",
      "Gastrointestinal Bleeding",
      "Colorectal Cancer",
      "Colon Disorders",
      "Rectal Disorders",
      "Inflammatory Bowel Disease",
      "Crohn's Disease",
      "Ulcerative Colitis",
      "Liver Tumours & Cysts",
      "Bile Duct Disorders",
      "Pancreatic Disorders",
      "Pancreatic Cancer",
      "Oesophageal Disorders",
      "Gastric Cancer",
      "GI Cancer Surgery",
      "Liver Cancer",
      "Surgical Oncology",
    ],
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
    conditionsTreated: [
      "Peripheral Arterial Disease (PAD)",
      "Critical Limb Ischaemia",
      "Leg Pain While Walking (Claudication)",
      "Lower Limb Gangrene",
      "Diabetic Foot Ulcers",
      "Non-Healing Foot Wounds",
      "Foot Infections",
      "Varicose Veins",
      "Deep Vein Thrombosis (DVT)",
      "Chronic Venous Insufficiency",
      "Venous Leg Ulcers",
      "Leg Swelling",
      "Aortic Aneurysms",
      "Peripheral Aneurysms",
      "Carotid Artery Disease",
      "Vascular Trauma",
    ],
  },

  // Neurosurgery
  {
    name: "Dr. Ajay Hegde",
    image: "uploads/doctors/dr ajay hedge.jpeg",
    imagePosition: "50% 50%",
    title: "Senior Consultant Neurosurgeon & Neuro-Spine Surgeon",
    specialty: "Neurosurgery",
    keyQualification: "MCh (Neurosurgery)",
    degrees:
      "MBBS, MS (General Surgery), MCh (Neurosurgery), DNB (Neurosurgery), FRCS (Neurosurgery) Edinburgh",
    experience: "3,000+ complex neurosurgical procedures",
    conditionsTreated: [
      "Brain Tumours",
      "Skull Base Tumours",
      "Neuro-oncology",
      "Traumatic Brain Injury",
      "Stroke Surgery",
      "Brain Haemorrhage",
      "Hydrocephalus",
      "Parkinson's Disease Surgery",
      "Tremor Surgery",
      "Dystonia Surgery",
      "Epilepsy Surgery",
      "Cervical Spine Disorders",
      "Lumbar Disc Prolapse",
      "Sciatica",
      "Spine Trauma",
      "Degenerative Spine Disease",
      "Minimally Invasive Spine Surgery",
      "Endoscopic Pituitary Surgery",
    ],
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
    conditionsTreated: [
      "Acute Stroke",
      "Brain Aneurysms",
      "Arteriovenous Malformations (AVMs)",
      "Neurovascular Disorders",
      "Brain Tumours",
      "Skull Base Tumours",
      "Brain Trauma",
      "Intracranial Bleeding",
      "Hydrocephalus",
      "Epilepsy Surgery",
      "Parkinson's Disease Surgery",
      "Cervical Spine Disorders",
      "Lumbar Disc Prolapse",
      "Sciatica",
      "Spinal Stenosis",
      "Degenerative Spine Disease",
      "Spine Trauma",
      "Paediatric Brain Tumours",
      "Paediatric Spine Disorders",
      "Head Injury in Children",
    ],
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
    conditionsTreated: [
      "Chronic Kidney Disease (CKD)",
      "Acute Kidney Injury (AKI)",
      "Hypertension-related Kidney Disease",
      "Diabetic Kidney Disease",
      "Polycystic Kidney Disease",
      "Glomerular Disorders",
      "Vasculitis affecting the Kidneys",
      "Electrolyte & Acid-Base Disorders",
      "Haemodialysis",
      "Peritoneal Dialysis",
      "Kidney Transplantation",
      "Living & Deceased Donor Transplant",
      "Post-Transplant Care",
      "Immunosuppressive Therapy Management",
    ],
  },
  {
    name: "Dr. Krishna Kumar K",
    image: "uploads/doctors/dr krishna kumar k nephrologist magnus.jpg",
    imagePosition: "50% 50%",
    title: "Consultant Nephrologist & Renal Transplant Physician",
    specialty: "Nephrology",
    keyQualification: "DrNB (Nephrology)",
    degrees: "MBBS, MD (Internal Medicine), DrNB (Nephrology)",
    conditionsTreated: [
      "Chronic Kidney Disease (CKD)",
      "Acute Kidney Injury (AKI)",
      "Glomerular Diseases",
      "Nephrotic Syndrome",
      "Kidney Failure",
      "Electrolyte Disorders",
      "Resistant Hypertension",
      "Diabetic Kidney Disease",
      "Haemodialysis",
      "Peritoneal Dialysis",
      "Continuous Renal Replacement Therapy (CRRT)",
      "Plasma Exchange (PLEX)",
      "Living Donor Kidney Transplant",
      "ABO-Incompatible Kidney Transplant",
      "Highly Sensitised Kidney Transplant Cases",
      "ICU Kidney Support",
    ],
  },
  {
    name: "Dr. Mitesh Makwana",
    image: "uploads/doctors/dr mithesh makwana nephologist magnus.jpg",
    imagePosition: "50% 50%",
    title: "Consultant Nephrologist & Critical Care Nephrologist",
    specialty: "Nephrology",
    keyQualification: "DrNB (Nephrology)",
    degrees: "MBBS, MD (Internal Medicine), DrNB (Nephrology)",
    conditionsTreated: [
      "Chronic Kidney Disease (CKD)",
      "Acute Kidney Injury (AKI)",
      "Glomerular Diseases",
      "Proteinuria",
      "Kidney Failure",
      "Electrolyte Disorders",
      "Diabetic Kidney Disease",
      "Hypertension-related Kidney Disease",
      "Haemodialysis",
      "Peritoneal Dialysis",
      "Continuous Renal Replacement Therapy (CRRT)",
      "ECMO-associated Kidney Care",
      "Glomerulonephritis",
      "Thrombotic Microangiopathy (TMA)",
      "Autoimmune Kidney Diseases",
      "Multi-Organ Failure with Renal Involvement",
    ],
  },

  // Homoeopathy
  {
    name: "Dr. Munnavvar Sultana Shaikh",
    title: "Senior Consultant Homoeopathic Physician",
    specialty: "Homoeopathy",
    keyQualification: "BHMS",
    degrees: "BHMS (Bachelor of Homoeopathic Medicine & Surgery), BFT (UK)",
    experience: "25+ years experience",
    conditionsTreated: [
      "Polycystic Ovary Syndrome (PCOS)",
      "Female Infertility",
      "Male Infertility",
      "Menstrual Disorders",
      "Hormonal Imbalances",
      "Allergic Rhinitis",
      "Sinusitis",
      "Bronchitis",
      "Psoriasis",
      "Eczema",
      "Vitiligo",
      "Acne",
      "Alopecia Areata & Hair Fall",
      "GERD & Acid Reflux",
      "Malabsorption Syndrome",
      "Obesity",
      "Fatty Liver",
      "Thyroid Disorders",
      "Gout",
      "Renal Calculi (Kidney Stones)",
      "Arthritis & Joint Pain",
      "Carpal Tunnel Syndrome",
      "Facial Palsy",
      "Anxiety",
      "Stress-related Disorders",
      "Depression",
      "Delayed Developmental Milestones (Children)",
    ],
  },

  // Physiotherapy
  {
    name: "Dr. Jasmeet Sunil",
    image: "uploads/doctors/dr jasmeet physiotherapist magnus.jpeg",
    title: "Consultant Physiotherapist",
    specialty: "Physiotherapy",
    experience: "Clinical experience since 2002",
    conditionsTreated: [
      "Neck & Back Pain",
      "Shoulder Pain & Frozen Shoulder",
      "Knee & Joint Pain",
      "Postural Problems",
      "Work-related Musculoskeletal Disorders",
      "Sports & Soft-tissue Injuries",
      "Repetitive Strain Injuries",
      "Pregnancy-related Musculoskeletal Problems",
      "Post-surgical Rehabilitation",
      "Muscle Strains & Sprains",
      "Ergonomic & Workplace-related Conditions",
      "Geriatric Mobility Rehabilitation",
    ],
  },
];

/**
 * The roster as it is *displayed*: consultants whose photograph has arrived come
 * first, the monogram placeholders trail behind.
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
 * in the same specialty, and by the specialty pages to list their team.
 */
export function getDoctorsBySpecialty(specialty: string): Doctor[] {
  return doctorsPhotoFirst.filter((doctor) => doctor.specialty === specialty);
}

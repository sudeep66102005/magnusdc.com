import { specialties } from "@/lib/constants/navigation";

export interface SpecialtyContent {
  slug: string;
  name: string;
  /** One-line summary, used on the listing card and as the meta description. */
  summary: string;
  /** Two or three sentences of real description for the page body. */
  overview: string;
  /** Conditions the department actually sees. */
  conditions: string[];
  /** Tests, procedures and services the department offers here. */
  services: string[];
}

export function toSlug(name: string): string {
  return name
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\//g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/** Slug for a specialty name, so doctor profiles can link to their department. */
export function specialtySlugFor(name: string): string {
  return toSlug(name);
}

/**
 * Real content per department, replacing the generated one-line template that
 * previously produced ~20 near-identical pages ("Expert <name> care from
 * experienced specialists…"). Keyed by the specialty names in navigation.ts;
 * `buildSpecialty` falls back to a generic entry if a name is added there
 * without content, so the build cannot break — but the fallback is deliberately
 * obvious in review rather than silently shipping boilerplate again.
 */
const CONTENT: Record<
  string,
  { summary: string; overview: string; conditions: string[]; services: string[] }
> = {
  "Physician / Internal Medicine": {
    summary:
      "First-line adult medicine — fever, infections, blood pressure, thyroid and long-term condition reviews.",
    overview:
      "Internal medicine is usually the first stop when a symptom does not obviously belong to one organ. Our physicians assess the whole picture, order the imaging or laboratory work needed to narrow it down, and either treat it themselves or bring in the right specialist. Because the lab and scanners are in the same building, most investigations can be completed during the same visit.",
    conditions: [
      "Fever of unknown origin and recurrent infections",
      "Hypertension and lipid disorders",
      "Thyroid and other endocrine imbalances",
      "Anaemia and vitamin deficiencies",
      "Long-term condition reviews, including diabetes and asthma",
    ],
    services: [
      "Adult consultation and second opinion",
      "Pre-employment and pre-operative fitness assessment",
      "Annual health check interpretation",
      "Same-visit laboratory and imaging workup",
    ],
  },
  Orthopedics: {
    summary:
      "Bone, joint and spine care — from sports injuries and fractures to arthritis and back pain.",
    overview:
      "Our orthopaedic team treats injuries and wear-and-tear conditions of the bones, joints, ligaments and spine. Assessment is supported by digital X-ray and 3T MRI on site, including advanced musculoskeletal imaging, so a suspected ligament tear or disc problem can be imaged and reviewed without a second appointment elsewhere.",
    conditions: [
      "Fractures, sprains and sports injuries",
      "Knee and hip osteoarthritis",
      "Frozen shoulder and rotator cuff problems",
      "Low back pain, sciatica and disc disease",
      "Heel pain, tendinitis and repetitive strain",
    ],
    services: [
      "Orthopaedic consultation and injury assessment",
      "Digital X-ray and 3T MRI, including musculoskeletal protocols",
      "Ultrasound-guided joint and soft-tissue injections",
      "Fracture management, casting and follow-up",
      "Post-operative and post-injury physiotherapy referral",
    ],
  },
  Cardiology: {
    summary:
      "Heart assessment and follow-up — chest pain, blood pressure, rhythm problems and risk screening.",
    overview:
      "Cardiology here focuses on assessment and ongoing care: working out whether symptoms such as chest pain, breathlessness or palpitations are cardiac, quantifying risk, and managing established heart disease. ECG, echocardiography and vascular Doppler are available on site, and cases needing intervention are referred onward with the imaging already done.",
    conditions: [
      "Chest pain and breathlessness on exertion",
      "Hypertension and high cholesterol",
      "Palpitations and rhythm disturbance",
      "Heart failure follow-up",
      "Peripheral arterial and venous disease",
    ],
    services: [
      "Cardiology consultation and cardiac risk assessment",
      "ECG and echocardiography",
      "Vascular and carotid Doppler studies",
      "Pre-operative cardiac clearance",
      "Post-angioplasty and post-surgical review",
    ],
  },
  Radiology: {
    summary:
      "The radiologist-led core of the centre — 3T MRI, CT, ultrasound, Doppler and X-ray, reported in-house.",
    overview:
      "Radiology is where this centre began, and it remains the department the others depend on. Studies are performed and reported by our own consultant radiologists rather than sent out, which is what makes same-day reporting and a direct conversation about a difficult finding possible. MRI and CT run 24/7.",
    conditions: [
      "Suspected stroke, headache and seizure workup",
      "Cancer staging and follow-up imaging",
      "Trauma and acute abdominal pain",
      "Joint, spine and soft-tissue injury",
      "Pregnancy and fetal assessment",
    ],
    services: [
      "3T MRI, including neuro, musculoskeletal and abdominal protocols",
      "Multi-slice CT, with and without contrast",
      "Ultrasound, Doppler and fetal echocardiography",
      "Digital X-ray, OPG and dental CBCT",
      "Second-opinion reporting on outside studies",
    ],
  },
  Physiotherapy: {
    summary:
      "Rehabilitation after injury and surgery, and treatment for ongoing pain and mobility problems.",
    overview:
      "Physiotherapy covers recovery after an injury or operation and the day-to-day management of pain and stiffness. Programmes are built around what the imaging and the orthopaedic or neurology team have found, then adjusted as strength and range of movement return.",
    conditions: [
      "Post-operative recovery, including joint replacement",
      "Neck and low back pain",
      "Sports injuries and muscle strain",
      "Stroke and neurological rehabilitation",
      "Balance problems and post-fracture stiffness",
    ],
    services: [
      "Assessment and individual exercise prescription",
      "Manual therapy and mobilisation",
      "Electrotherapy and pain-relief modalities",
      "Gait, posture and ergonomic advice",
      "Home exercise programmes with review",
    ],
  },
  "Gynecology & Obstetrics": {
    summary:
      "Women's health across every stage — periods, fertility, pregnancy care and menopause.",
    overview:
      "Our gynaecology and obstetrics team looks after routine and high-risk pregnancy alongside general women's health. The department works closely with fetal medicine: anomaly, growth and Doppler scans, and fetal echocardiography, are all done in-house by radiologists sub-specialised in fetal imaging.",
    conditions: [
      "Irregular, heavy or painful periods",
      "PCOS and hormonal imbalance",
      "Difficulty conceiving and early pregnancy concerns",
      "High-risk pregnancy, including diabetes and hypertension in pregnancy",
      "Fibroids, ovarian cysts and menopausal symptoms",
    ],
    services: [
      "Antenatal consultation and pregnancy monitoring",
      "Early pregnancy, NT/NB, anomaly and growth scans",
      "Fetal echocardiography and Doppler studies",
      "Infertility evaluation and cycle tracking",
      "Cervical screening and well-woman checks",
    ],
  },
  Neurology: {
    summary:
      "Brain, spine and nerve conditions — headache, seizures, stroke, weakness and numbness.",
    overview:
      "Neurology assesses problems of the brain, spinal cord, nerves and muscles. Diagnosis often depends on imaging and electrophysiology, and both are available here: 3T MRI with neuro protocols, plus EEG and nerve conduction studies, so an evaluation can usually be completed in one or two visits.",
    conditions: [
      "Migraine and other chronic headache",
      "Epilepsy and blackouts",
      "Stroke and TIA, including secondary prevention",
      "Numbness, tingling and nerve entrapment",
      "Tremor, Parkinson's disease and memory problems",
    ],
    services: [
      "Neurology consultation and second opinion",
      "3T MRI brain and spine, with MR angiography",
      "EEG and nerve conduction studies (ENMG)",
      "Stroke risk assessment with carotid Doppler",
      "Long-term medication review",
    ],
  },
  "General Surgery": {
    summary:
      "Assessment and surgical management of hernia, gallstones, appendicitis and soft-tissue problems.",
    overview:
      "General surgery covers the common abdominal and soft-tissue conditions that need an operation, along with the assessment that decides whether one is necessary. Ultrasound and CT on site mean a painful abdomen can be imaged the same day and a decision reached quickly.",
    conditions: [
      "Hernia — inguinal, umbilical and incisional",
      "Gallstones and gallbladder disease",
      "Appendicitis and acute abdominal pain",
      "Piles, fissure and fistula",
      "Lumps, cysts and abscesses",
    ],
    services: [
      "Surgical consultation and operative planning",
      "Pre-operative assessment and fitness workup",
      "Same-day ultrasound and CT for acute presentations",
      "Wound care and post-operative review",
      "Biopsy and minor procedures",
    ],
  },
  Neurosurgery: {
    summary:
      "Surgical opinion on brain, spine and nerve conditions, with the imaging done in-house.",
    overview:
      "Neurosurgery provides an operative opinion on conditions of the brain and spine — often after a scan has found something that needs a surgeon's view. Detailed 3T MRI and CT are performed here and reported by our radiologists, so a referral arrives with the imaging already complete.",
    conditions: [
      "Disc prolapse and lumbar canal stenosis",
      "Cervical spine disease with nerve compression",
      "Brain and spinal tumours",
      "Head injury and its late effects",
      "Hydrocephalus and congenital spinal anomalies",
    ],
    services: [
      "Neurosurgical consultation and second opinion",
      "Pre-operative MRI, CT and CT angiography",
      "Spinal imaging with dynamic views",
      "Post-operative imaging and follow-up",
      "Referral coordination for surgery",
    ],
  },
  "Vascular Surgery": {
    summary:
      "Arteries and veins — varicose veins, leg ulcers, DVT and diabetic foot problems.",
    overview:
      "Vascular surgery deals with circulation: blocked arteries, failing veins and the wounds that follow. Duplex Doppler studies are performed here by our own team, which is the single most useful test in this field and usually the one that determines treatment.",
    conditions: [
      "Varicose veins and venous insufficiency",
      "Deep vein thrombosis",
      "Peripheral arterial disease and claudication",
      "Diabetic foot and non-healing ulcers",
      "Dialysis access assessment",
    ],
    services: [
      "Vascular consultation and risk assessment",
      "Arterial and venous duplex Doppler",
      "Ulcer and wound assessment",
      "Pre- and post-intervention imaging",
      "Compression and conservative management advice",
    ],
  },
  "Medical Gastroenterology": {
    summary:
      "Digestive and liver conditions — acidity, IBS, liver disease and abdominal pain.",
    overview:
      "Medical gastroenterology manages conditions of the gut, liver and pancreas without surgery. Liver assessment is supported by Fibroscan and ultrasound on site, so fatty liver and fibrosis can be quantified and tracked over time rather than guessed at.",
    conditions: [
      "Acidity, reflux and gastritis",
      "Irritable bowel syndrome and chronic constipation",
      "Fatty liver, hepatitis and cirrhosis",
      "Jaundice and abnormal liver function tests",
      "Chronic diarrhoea and malabsorption",
    ],
    services: [
      "Gastroenterology consultation",
      "Fibroscan for liver stiffness and fat quantification",
      "Abdominal ultrasound and CT",
      "Liver and pancreatic laboratory panels",
      "Hepatitis screening and follow-up",
    ],
  },
  "Surgical Gastroenterology": {
    summary:
      "Surgical treatment of the digestive tract, liver, pancreas and biliary system.",
    overview:
      "Surgical gastroenterology handles the conditions of the digestive system that need an operation, from gallbladder and hernia work to more complex hepatobiliary and pancreatic disease. Cross-sectional imaging is done and reported here as part of planning.",
    conditions: [
      "Gallstone disease and bile duct stones",
      "Pancreatitis and pancreatic masses",
      "Liver lesions and portal hypertension",
      "Complex and recurrent hernia",
      "Colorectal conditions needing surgery",
    ],
    services: [
      "Surgical gastroenterology consultation",
      "Contrast CT and MRI for operative planning",
      "Pre-operative assessment",
      "Post-operative imaging and review",
      "Multidisciplinary discussion with medical gastroenterology",
    ],
  },
  ENT: {
    summary:
      "Ear, nose and throat care — hearing loss, sinus problems, vertigo, snoring and voice change.",
    overview:
      "Our ENT team treats the ear, nose, throat, head and neck. CT of the sinuses and temporal bone, and ultrasound of the neck and thyroid, are available in-house, which covers most of the imaging this specialty relies on.",
    conditions: [
      "Ear discharge, infection and hearing loss",
      "Chronic sinusitis and nasal blockage",
      "Vertigo and imbalance",
      "Tonsillitis, snoring and sleep-disordered breathing",
      "Hoarseness and neck or thyroid swellings",
    ],
    services: [
      "ENT consultation and endoscopic examination",
      "CT of the sinuses and temporal bone",
      "Neck and thyroid ultrasound, with guided biopsy",
      "Hearing assessment referral",
      "Pre-operative workup for ENT surgery",
    ],
  },
  Diabetology: {
    summary:
      "Diabetes diagnosis, control and complication screening in one place.",
    overview:
      "Diabetes care is as much about the complications as the sugar readings. Alongside consultation and control, this department screens for the eye, kidney, nerve and foot problems that develop quietly — with the laboratory panels and Doppler studies needed for that done on site.",
    conditions: [
      "Newly diagnosed type 2 diabetes",
      "Poorly controlled or fluctuating blood sugar",
      "Prediabetes and insulin resistance",
      "Diabetic neuropathy and foot problems",
      "Gestational diabetes",
    ],
    services: [
      "Diabetology consultation and treatment adjustment",
      "HbA1c and complete metabolic panels",
      "Diabetic foot and peripheral circulation assessment",
      "Kidney function monitoring",
      "Diet, exercise and insulin counselling",
    ],
  },
  Dermatology: {
    summary: "Skin, hair and nail conditions — acne, eczema, hair loss and pigmentation.",
    overview:
      "Dermatology covers medical skin disease as well as hair and nail problems. Many chronic skin conditions have an internal cause, and having laboratory testing in the same building makes it straightforward to check for the thyroid, iron or hormonal issues behind them.",
    conditions: [
      "Acne and acne scarring",
      "Eczema, psoriasis and chronic itch",
      "Fungal infections of skin and nails",
      "Hair loss and dandruff",
      "Pigmentation, melasma and vitiligo",
    ],
    services: [
      "Dermatology consultation",
      "Allergy panel and relevant blood testing",
      "Fungal and bacterial skin testing",
      "Hair and scalp assessment",
      "Treatment planning for chronic skin disease",
    ],
  },
  Urology: {
    summary:
      "Kidney, bladder and prostate care — stones, urinary infections and prostate enlargement.",
    overview:
      "Urology treats the urinary tract in both sexes and the male reproductive system. Stone disease and prostate assessment are the commonest reasons for referral, and both rely on ultrasound and CT that are performed and reported here.",
    conditions: [
      "Kidney and ureteric stones",
      "Recurrent urinary infection",
      "Prostate enlargement and difficulty passing urine",
      "Blood in the urine",
      "Scrotal swelling and male infertility",
    ],
    services: [
      "Urology consultation",
      "Ultrasound KUB and CT urography",
      "Uroflowmetry and post-void assessment",
      "PSA and stone-risk laboratory panels",
      "Pre- and post-operative review",
    ],
  },
  Nephrology: {
    summary: "Kidney disease — from abnormal reports to dialysis planning.",
    overview:
      "Nephrology manages kidney function: investigating an abnormal creatinine, slowing the progression of chronic kidney disease, and planning dialysis when it becomes necessary. Blood pressure and diabetes control are handled alongside, as they are the usual drivers.",
    conditions: [
      "Chronic kidney disease",
      "Protein or blood in the urine",
      "Kidney disease from diabetes or hypertension",
      "Recurrent kidney stones with impaired function",
      "Electrolyte disturbance",
    ],
    services: [
      "Nephrology consultation",
      "Complete renal profile and urine studies",
      "Renal ultrasound and Doppler",
      "Dialysis access assessment",
      "Long-term monitoring for at-risk patients",
    ],
  },
  Oncology: {
    summary:
      "Cancer diagnosis, staging and follow-up, with imaging and molecular testing in-house.",
    overview:
      "In oncology, the speed and accuracy of diagnosis shapes everything that follows. This centre supports that end: imaging for detection and staging, tissue and molecular testing, and the follow-up scans that track response to treatment — reported by our own radiologists and laboratory.",
    conditions: [
      "Suspicious lump or lesion needing evaluation",
      "Staging of a newly diagnosed cancer",
      "Response assessment during treatment",
      "Post-treatment surveillance",
      "Family history and cancer risk concerns",
    ],
    services: [
      "Oncology consultation and second opinion",
      "CT and MRI for staging and response assessment",
      "Image-guided biopsy",
      "Tumour markers, genetic and molecular testing",
      "Coordination with treating surgical and medical teams",
    ],
  },
  Pulmonology: {
    summary: "Lungs and breathing — asthma, COPD, chronic cough, TB and sleep apnoea.",
    overview:
      "Pulmonology deals with the airways and lungs. Chest X-ray and CT, and the laboratory work needed for infection and allergy, are all available here, which matters when a persistent cough needs a cause rather than another course of antibiotics.",
    conditions: [
      "Asthma and allergic airway disease",
      "COPD and smoking-related lung disease",
      "Persistent cough and recurrent chest infection",
      "Tuberculosis, including follow-up",
      "Snoring and suspected sleep apnoea",
    ],
    services: [
      "Pulmonology consultation",
      "Chest X-ray and high-resolution CT",
      "Pulmonary function testing referral",
      "TB and infection workup",
      "Inhaler technique and treatment review",
    ],
  },
  Pediatrics: {
    summary:
      "Children's health — growth, immunisation, infections and developmental concerns.",
    overview:
      "Paediatrics covers children from birth through adolescence: routine growth and immunisation, the frequent infections of early childhood, and concerns about development. Child-appropriate imaging and gentle sample collection are handled by staff used to working with children.",
    conditions: [
      "Fever and recurrent infection in children",
      "Growth and nutrition concerns",
      "Asthma and allergy in childhood",
      "Developmental and speech delay",
      "Abdominal pain and digestive complaints",
    ],
    services: [
      "Paediatric consultation and well-child review",
      "Immunisation guidance",
      "Growth and development assessment",
      "Paediatric ultrasound and X-ray",
      "Child-friendly sample collection",
    ],
  },
  Endocrinology: {
    summary:
      "Hormone conditions — thyroid, PCOS, obesity, calcium and pituitary disorders.",
    overview:
      "Endocrinology treats the hormone-producing glands. Diagnosis rests heavily on laboratory work and targeted imaging, and both are in-house — including the thyroid ultrasound and guided biopsy that thyroid nodules usually need.",
    conditions: [
      "Hypothyroidism, hyperthyroidism and thyroid nodules",
      "PCOS and menstrual irregularity from hormonal causes",
      "Obesity and metabolic syndrome",
      "Calcium, vitamin D and bone metabolism disorders",
      "Pituitary and adrenal conditions",
    ],
    services: [
      "Endocrinology consultation",
      "Complete hormone assays",
      "Thyroid ultrasound and guided FNAC",
      "Bone health and osteoporosis assessment",
      "Long-term hormone therapy monitoring",
    ],
  },
  Homoeopathy: {
    summary:
      "Homoeopathic consultation for chronic complaints, alongside conventional diagnosis.",
    overview:
      "Homoeopathy is offered here as a complementary option for long-standing complaints, most often after a conventional diagnosis has been established. Patients are not asked to choose between the two: diagnostic testing continues as usual, and any condition needing conventional or emergency treatment is referred to the appropriate specialist.",
    conditions: [
      "Recurrent colds, allergy and sinus complaints",
      "Chronic skin problems",
      "Digestive complaints and acidity",
      "Joint pain and stiffness",
      "Stress-related and sleep complaints",
    ],
    services: [
      "Detailed homoeopathic case taking",
      "Individualised prescription and review",
      "Coordination with conventional specialists where needed",
      "Diagnostic testing to establish a baseline",
    ],
  },
};

function buildSpecialty(name: string): SpecialtyContent {
  const content = CONTENT[name];
  if (content) {
    return { slug: toSlug(name), name, ...content };
  }
  /* A specialty added to navigation.ts without content lands here. The page
     still builds, but it says only what is verifiably true rather than dressing
     up a template as a description. */
  return {
    slug: toSlug(name),
    name,
    summary: `${name} consultation at Clarus Magnus Health & Diagnostics, Koramangala.`,
    overview: `Our ${name.toLowerCase()} consultants see patients at our Koramangala centre, with imaging and laboratory services in the same building. Call us to ask what this department covers and to find the next available appointment.`,
    conditions: [],
    services: [],
  };
}

export const specialtyList: SpecialtyContent[] = specialties.map(buildSpecialty);

export function getSpecialtyBySlug(slug: string): SpecialtyContent | undefined {
  return specialtyList.find((item) => item.slug === slug);
}

export function getAllSpecialtySlugs(): string[] {
  return specialtyList.map((item) => item.slug);
}

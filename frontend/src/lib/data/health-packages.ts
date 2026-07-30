export type HealthPackageCategory =
  | "checkup"
  | "diabetic"
  | "cardiac"
  | "womens-health"
  | "reproductive-health"
  | "specialised"
  | "corporate-health";

export interface HealthPackageContent {
  slug: string;
  name: string;
  category: HealthPackageCategory;
  price: number;
  mrp?: number;
  testsIncluded: string[];
  summary: string;
}

export const packageCategoryDetails: Record<
  HealthPackageCategory,
  { label: string; title: string; eyebrow: string; description: string }
> = {
  checkup: {
    label: "Routine health",
    eyebrow: "Preventive health",
    title: "Routine health checkup packages",
    description: "From practical baseline screening to comprehensive preventive assessments for children, adults and senior citizens.",
  },
  diabetic: {
    label: "Diabetic care",
    eyebrow: "Metabolic health",
    title: "Diabetic health profiles",
    description: "Focused monitoring and comprehensive risk assessment for diabetes and its common complications.",
  },
  cardiac: {
    label: "Cardiac health",
    eyebrow: "Heart health",
    title: "Cardiac screening packages",
    description: "Preventive heart checks, cardiac markers and advanced vascular risk assessment with transparent inclusions.",
  },
  "womens-health": {
    label: "Women’s health",
    eyebrow: "Women’s health",
    title: "Women’s wellness and hormonal profiles",
    description: "Thoughtful screening for preventive wellness, PCOD, menopause and hormonal health needs.",
  },
  "reproductive-health": {
    label: "Reproductive health",
    eyebrow: "Reproductive health",
    title: "Fertility and antenatal profiles",
    description: "Structured male and female fertility assessments plus essential antenatal investigations.",
  },
  specialised: {
    label: "Specialised profiles",
    eyebrow: "Focused screening",
    title: "Specialised health packages",
    description: "Targeted laboratory and imaging profiles for fever, anaemia, bone health, pre-operative care, cancer risk and more.",
  },
  "corporate-health": {
    label: "Corporate health",
    eyebrow: "Workplace wellness",
    title: "Corporate and executive health packages",
    description: "Pre-employment and executive assessments designed to support healthier organisations and leadership teams.",
  },
};

const packageItem = (
  slug: string,
  name: string,
  category: HealthPackageCategory,
  price: number,
  mrp: number,
  summary: string,
  testsIncluded: string[]
): HealthPackageContent => ({ slug, name, category, price, mrp, summary, testsIncluded });

export const healthPackages: HealthPackageContent[] = [
  packageItem("basic-health-profile", "Basic Health Profile", "checkup", 1650, 3260, "A practical baseline health assessment with physician consultation.", ["Complete Blood Count", "Liver Function Test", "Serum Creatinine & Blood Urea", "Lipid Profile", "Fasting Blood Sugar", "Thyroid Profile", "Urine Routine", "Consultation"]),
  packageItem("full-body-blood-test", "Full Body Blood Test", "checkup", 2500, 4650, "A broad blood panel covering metabolic health, organ function and key vitamins.", ["CBC with ESR", "Fasting Blood Sugar & HbA1c", "Lipid Profile", "Liver Function Test", "Renal Function Test", "Thyroid Profile", "Iron Profile", "Vitamin D & B12"]),
  packageItem("comprehensive-health-check", "Comprehensive Health Check", "checkup", 3850, 5940, "Blood work, imaging and cardiac screening for a broad preventive review.", ["CBC with ESR", "Fasting & Postprandial Blood Sugar", "Kidney, Lipid & Liver Profiles", "TSH & Urine Analysis", "Chest X-ray", "ECG", "Ultrasound Abdomen & Pelvis", "Consultation"]),
  packageItem("master-health-checkup", "Essential / Master Health Checkup", "checkup", 5100, 9380, "An in-depth preventive assessment with imaging, cardiac evaluation and consultation.", ["CBC with ESR", "Blood Sugar Profile", "Kidney & Liver Profiles", "Vitamin D3 & Calcium", "Lipid Profile & TSH", "Chest X-ray & ECG", "Ultrasound Abdomen & Pelvis", "TMT or ECHO", "Consultation"]),
  packageItem("senior-citizen-male", "Senior Citizen’s Health Checkup — Male", "checkup", 5850, 12070, "A comprehensive preventive assessment designed for senior men.", ["CBC with ESR & HbA1c", "Kidney, Liver & Lipid Profiles", "Electrolytes, Calcium & Uric Acid", "TSH & Vitamin D3", "Chest X-ray, ECG & PFT", "Ultrasound Abdomen & Pelvis", "TMT or ECHO", "PSA", "Consultation"]),
  packageItem("senior-citizen-female", "Senior Citizen’s Health Checkup — Female", "checkup", 7450, 13740, "A comprehensive preventive assessment designed for senior women.", ["CBC with ESR & HbA1c", "Kidney, Liver & Lipid Profiles", "Electrolytes, Calcium & Uric Acid", "TSH & Vitamin D3", "Chest X-ray, ECG & PFT", "Ultrasound Abdomen & Pelvis", "Bilateral Sonomammogram", "TMT or ECHO", "PAP Smear", "Consultation"]),
  packageItem("child-health-checkup", "Child Health Checkup", "checkup", 800, 1810, "Essential baseline screening for a child’s general health.", ["Complete Hemogram", "Random Blood Sugar", "Blood Group & Rh Type", "Mantoux Test", "Complete Urine Analysis", "Consultation"]),

  packageItem("quarterly-diabetic-profile", "Quarterly Diabetic Profile", "diabetic", 760, 1240, "Essential quarterly markers for monitoring glycaemic control and kidney risk.", ["HbA1c", "Fasting Blood Sugar", "Postprandial Blood Sugar", "Urine Microalbumin"]),
  packageItem("diabetic-profile-simple", "Diabetic Profile — Simple", "diabetic", 1350, 2390, "Core diabetes monitoring with kidney, lipid and urine assessment.", ["Hemogram with ESR", "Fasting & Postprandial Blood Sugar", "HbA1c", "Blood Urea & Creatinine", "Lipid Profile", "Complete Urine Analysis"]),
  packageItem("diabetic-profile-basic", "Diabetic Profile — Basic", "diabetic", 2500, 6020, "Broader diabetes review with cardiac and abdominal screening.", ["Hemogram with ESR", "Blood Sugar Profile & HbA1c", "Kidney & Lipid Profiles", "Urine Microalbumin", "Electrolytes & TSH", "Ultrasound Abdomen & Pelvis", "ECG", "Consultation"]),
  packageItem("advanced-diabetic-profile", "Advanced Diabetic Profile", "diabetic", 7200, 12430, "Advanced metabolic, vascular and cardiac assessment for diabetes risk.", ["Hemogram with ESR", "Blood Sugar, Insulin & HbA1c", "Kidney, Lipid & Liver Profiles", "Urine Microalbumin & Electrolytes", "TSH", "Ultrasound Abdomen & Pelvis", "Carotid Doppler", "Chest X-ray & ECG", "ECHO or TMT", "Consultation"]),
  packageItem("comprehensive-diabetic-profile", "Comprehensive Diabetic Profile", "diabetic", 13850, 19790, "An extensive diabetes complication and vascular risk assessment.", ["Hemogram with ESR", "Blood Sugar, Insulin, HbA1c & C-peptide", "Kidney, Lipid & Liver Profiles", "Urine Microalbumin & Protein/Creatinine Ratio", "Electrolytes & Thyroid Profile", "Ultrasound Abdomen & Pelvis", "Carotid & Lower-limb Arterial Doppler", "Chest X-ray, ECG & ECHO/TMT", "Consultation"]),

  packageItem("hypertension-profile", "Hypertension Profile", "cardiac", 1500, 2120, "Focused laboratory screening for blood-pressure-related metabolic risk.", ["Fasting & Postprandial Blood Sugar", "Lipid Profile", "Blood Urea & Creatinine", "Electrolytes", "Complete Blood Count", "Urine Analysis", "Uric Acid"]),
  packageItem("heartbeat-basic", "Heartbeat Basic", "cardiac", 999, 1700, "Preventive screening for general heart health and early risk detection.", ["ECG", "Blood Pressure", "Lipid Profile", "Random Blood Sugar", "HbA1c", "BMI"]),
  packageItem("cardiac-markers", "Cardiac Markers", "cardiac", 2500, 4700, "Advanced blood markers for cardiovascular risk assessment.", ["Hs-CRP", "Apolipoprotein A1", "Homocysteine", "Apolipoprotein B", "Lipoprotein (a)"]),
  packageItem("strong-heart-check", "Strong Heart Check", "cardiac", 3999, 7380, "A standard package for people with diabetes, obesity or family history of heart disease.", ["Blood Pressure & BMI", "Lipid Profile", "Blood Sugar & HbA1c", "Complete Blood Count", "Kidney Function Test", "ECG", "2D ECHO", "TMT", "Chest X-ray"]),
  packageItem("advanced-cardiac-health", "Advanced Cardiac Health Package", "cardiac", 4500, 7630, "Cardiac imaging and enzyme assessment for a detailed heart review.", ["CBC with ESR", "Blood Sugar Profile", "Kidney & Lipid Profiles", "SGOT, SGPT & LDH", "CPK-MB & Hs-CRP", "ECG", "2D ECHO", "TMT", "Chest X-ray"]),
  packageItem("total-heart-care", "Total Heart Care", "cardiac", 5999, 11950, "Holistic cardiac risk assessment with a specialist opinion.", ["ECG, Blood Pressure & BMI", "Lipid Profile & HbA1c", "2D ECHO & TMT", "Chest X-ray & CBC", "Kidney & Liver Profiles", "Troponin I & T", "Thyroid Profile & Hs-CRP", "Cardiologist Consultation"]),
  packageItem("heart-vascular-shield", "Advanced Heart & Vascular Shield", "cardiac", 9999, 21930, "Comprehensive heart and vascular screening for higher-risk patients.", ["ECG, Blood Pressure & BMI", "Lipid Profile & HbA1c", "2D ECHO, TMT & Chest X-ray", "Kidney & Liver Profiles", "Cardiac Enzymes, Hs-CRP & NT-proBNP", "Carotid Doppler", "Lower-limb Arterial Doppler", "Cardiologist Consultation"]),
  packageItem("cardiac-profile", "Cardiac Profile", "cardiac", 2500, 4810, "A focused combination of cardiac enzymes and ECG.", ["SGOT", "CPK-MB", "CPK", "Homocysteine", "LDH", "Troponin I", "ECG"]),
  packageItem("cardiac-blood-profile", "Cardiac Blood Profile", "cardiac", 3500, 5560, "A laboratory-only cardiac enzyme profile.", ["Troponin I", "Troponin T", "CPK", "CK-MB", "LDH", "SGOT"]),

  packageItem("womens-wellness-package", "Women Wellness Package", "womens-health", 5790, 9630, "Comprehensive preventive screening designed around women’s health needs.", ["Complete Blood Count", "Blood Sugar Profile", "Kidney & Lipid Profiles", "SGOT, SGPT, Calcium & Vitamin D3", "Thyroid Profile & Urine Analysis", "Chest X-ray & ECG", "Ultrasound Abdomen & Pelvis", "Bilateral Sonomammography", "PAP Smear", "Consultation"]),
  packageItem("pcod-mini", "PCOD Package — Mini", "womens-health", 1500, 5170, "Focused hormonal and metabolic screening for PCOD assessment.", ["Complete Blood Count", "HbA1c", "FSH & LH", "Prolactin", "Estradiol", "Total Testosterone", "Lipid Profile", "TSH"]),
  packageItem("pcod-basic", "PCOD Package — Basic", "womens-health", 2500, 4254, "Expanded hormonal and metabolic screening for PCOD.", ["Complete Blood Count", "HbA1c & Fasting Blood Sugar", "FSH, LH & Prolactin", "Estradiol & Progesterone", "Total Testosterone", "Lipid & Thyroid Profiles", "Liver Function Test"]),
  packageItem("pcod-advanced", "PCOD Package — Advanced", "womens-health", 4000, 11190, "A comprehensive hormone profile for complex PCOD assessment.", ["Complete Blood Count", "HbA1c & Fasting Blood Sugar", "FSH, LH & Prolactin", "Estradiol & Progesterone", "Total Testosterone", "Lipid, Thyroid & Liver Profiles", "DHEA-S", "AMH"]),
  packageItem("pcod-with-ultrasound", "PCOD Profile with Ultrasound", "womens-health", 5000, 7630, "Hormonal and metabolic evaluation combined with pelvic ultrasound.", ["Hemogram with ESR", "Blood Sugar, HbA1c & Insulin", "Lipid & Thyroid Profiles", "FSH, LH & Prolactin", "Total Testosterone & Estradiol", "Ultrasound Pelvis", "Optional Follicular Study at 25% discount"]),
  packageItem("menopausal-profile", "Menopausal Profile", "womens-health", 1800, 2600, "Essential hormonal, bone and metabolic markers for menopause care.", ["Complete Blood Count", "Calcium", "Vitamin D", "TSH", "Random Blood Sugar", "FSH", "LH", "Estradiol"]),
  packageItem("amenorrhea-profile", "Amenorrhea Assessment Profile", "womens-health", 3000, 4210, "A focused hormone profile supporting amenorrhea assessment.", ["TSH", "FSH", "LH", "Prolactin", "Estradiol"]),

  packageItem("male-infertility-basic", "Basic Male Infertility Profile", "reproductive-health", 3500, 4820, "Essential hormone and semen assessment for male fertility evaluation.", ["Fasting Blood Sugar", "Total & Free Testosterone", "FSH & LH", "TSH", "Semen Analysis", "Optional Prolactin"]),
  packageItem("male-infertility-comprehensive", "Comprehensive Male Infertility Profile", "reproductive-health", 7500, 10470, "Expanded hormone, semen and ultrasound assessment for male fertility.", ["Fasting Blood Sugar", "Total & Free Testosterone", "FSH, LH & Prolactin", "TSH", "Sex Hormone-binding Globulin", "Semen Analysis", "Ultrasound Scrotum"]),
  packageItem("female-infertility-basic", "Basic Female Infertility Profile", "reproductive-health", 3000, 6940, "Core hormonal and ovarian reserve assessment for female fertility.", ["Complete Blood Count", "FSH & LH", "Estradiol", "Progesterone", "Prolactin", "TSH", "AMH"]),
  packageItem("female-infertility-comprehensive", "Comprehensive Female Infertility Profile", "reproductive-health", 6500, 13610, "A broad fertility and recurrent-loss laboratory profile.", ["Complete Blood Count", "FSH, LH, Estradiol & Progesterone", "Prolactin & Thyroid Profile", "AMH & Total Testosterone", "Fasting Blood Sugar", "Anticardiolipin Antibodies", "Anti-beta-2-glycoprotein & Lupus Antibodies", "Optional Ultrasound Pelvis at 25% discount"]),
  packageItem("antenatal-package", "Antenatal Package", "reproductive-health", 2500, 3230, "Essential early-pregnancy investigations for informed antenatal care.", ["Complete Hemogram with ESR", "Blood Group & Rh Type", "Random Blood Sugar", "HBsAg", "VDRL", "Complete Urine Examination", "Hepatitis C Antibody", "HIV Antibody", "TSH"]),

  packageItem("pre-employment-checkup", "Pre-employment Check-up", "corporate-health", 1850, 3560, "A structured medical fitness assessment for new employees.", ["Hemogram with ESR", "Blood Group & Rh", "Random Blood Sugar", "Mantoux Test", "Urine Analysis", "HIV & HBsAg", "ECG", "Chest X-ray", "Consultation"]),
  packageItem("executive-silver", "Executive Health Check-up — Silver", "corporate-health", 6250, 10710, "An extensive executive health assessment combining diagnostics and consultation.", ["CBC with ESR", "Blood Sugar Profile", "Kidney, Liver & Lipid Profiles", "Electrolytes, Calcium, Uric Acid & Vitamin D3", "TSH, HBsAg & Urine Analysis", "Chest X-ray, ECG & Ultrasound", "TMT or ECHO", "PAP Smear or PSA", "Consultation"]),
  packageItem("executive-gold-male", "Executive Health Check-up — Gold Male", "corporate-health", 7850, 14720, "Advanced executive screening with cardiac and male-specific assessment.", ["CBC with ESR & HbA1c", "Kidney, Liver, Lipid & Thyroid Profiles", "Electrolytes, Calcium, Uric Acid & Vitamin D3", "Chest X-ray, ECG & PFT", "Ultrasound Abdomen & Pelvis", "TMT & ECHO", "PSA", "Consultation"]),
  packageItem("executive-gold-female", "Executive Health Check-up — Gold Female", "corporate-health", 8250, 16300, "Advanced executive screening with cardiac and women-specific assessment.", ["CBC with ESR & HbA1c", "Kidney, Liver, Lipid & Thyroid Profiles", "Electrolytes, Calcium, Uric Acid & Vitamin D3", "Chest X-ray, ECG & PFT", "Ultrasound Abdomen & Pelvis", "Sonomammogram, TMT & ECHO", "PAP Smear", "Consultation"]),
  packageItem("executive-platinum-male", "Executive Health Check-up — Platinum Male", "corporate-health", 10000, 15860, "Comprehensive executive screening with vitamins, cardiac tests and PSA.", ["CBC with ESR & HbA1c", "Kidney, Liver, Lipid & Thyroid Profiles", "Ferritin, Vitamin D3 & B12", "Chest X-ray, ECG & PFT", "Ultrasound Abdomen & Pelvis", "TMT & ECHO", "PSA", "Consultation"]),
  packageItem("executive-platinum-female", "Executive Health Check-up — Platinum Female", "corporate-health", 11000, 16860, "Comprehensive executive screening with vitamins and women-specific imaging.", ["CBC with ESR & HbA1c", "Kidney, Liver, Lipid & Thyroid Profiles", "Ferritin, Vitamin D3 & B12", "Chest X-ray, ECG & PFT", "Ultrasound Abdomen & Pelvis", "TMT & ECHO", "Bilateral Sonomammogram & PAP Smear", "Consultation"]),

  packageItem("acute-fever-profile", "Acute Fever Profile", "specialised", 1500, 2160, "Focused tests supporting evaluation of an acute fever.", ["Hemogram with ESR", "Malaria Smear", "Typhidot", "Dengue Profile", "Complete Urine Analysis", "Chest X-ray"]),
  packageItem("chronic-fever-profile", "Chronic Fever Profile", "specialised", 3000, 4680, "Expanded infectious screening for persistent fever.", ["Hemogram with ESR", "Malaria Parasite", "Dengue IgG & IgM", "Chikungunya IgM", "Leptospira IgM", "Urine Analysis", "Widal Test", "Chest X-ray"]),
  packageItem("premarital-male", "Pre-marital Check-up — Male", "specialised", 2500, 3590, "Baseline metabolic, reproductive and infection screening for men.", ["Complete Blood Count", "Blood Group & Rh", "Blood Sugar & HbA1c", "Urine Routine", "Thyroid Profile", "Semen Analysis", "HIV I & II", "HBsAg & VDRL"]),
  packageItem("premarital-female", "Pre-marital Check-up — Female", "specialised", 3500, 4860, "Baseline metabolic, immunity and infection screening for women.", ["Complete Blood Count", "Blood Group & Rh", "Blood Sugar & HbA1c", "Urine Routine", "Thyroid Profile", "Rubella IgG & IgM", "HIV I & II", "HBsAg & VDRL"]),
  packageItem("iron-profile", "Iron Profile", "specialised", 1500, 2620, "Focused laboratory assessment of iron status.", ["Iron", "TIBC", "Transferrin Saturation", "Ferritin"]),
  packageItem("anemia-profile", "Anaemia Profile", "specialised", 2600, 4340, "Comprehensive assessment of common nutritional causes of anaemia.", ["Complete Blood Count", "Iron & TIBC", "Transferrin Saturation", "Ferritin", "Folic Acid", "Vitamin B12", "Optional Stool Occult Blood"]),
  packageItem("thalassemia-profile", "Thalassemia Profile", "specialised", 3500, 5750, "Blood and haemoglobin studies supporting thalassemia assessment.", ["Complete Hemogram", "Serum Iron", "TIBC", "Transferrin Saturation", "Serum Ferritin", "Hb Electrophoresis"]),
  packageItem("arthritis-profile", "Arthritis Profile", "specialised", 3500, 4630, "Inflammatory, autoimmune and bone markers for arthritis assessment.", ["ESR", "Uric Acid", "ANA", "RA Factor", "ASLO", "CRP", "Vitamin D3", "Calcium"]),
  packageItem("rheumatoid-profile", "Rheumatoid Profile", "specialised", 4000, 5100, "Focused autoimmune and inflammatory markers for rheumatoid disease.", ["Complete Blood Count", "RA Factor", "ASLO", "CRP", "Anti-CCP", "ESR"]),
  packageItem("healthy-bone-panel", "Healthy Bone Panel", "specialised", 3230, 5050, "Key mineral, hormone and protein markers for bone health.", ["Alkaline Phosphatase", "Calcium", "Phosphorous", "Parathyroid Hormone", "Vitamin D3", "Serum Protein Electrophoresis"]),
  packageItem("preoperative-profile", "Pre-operative Profile", "specialised", 4500, 6560, "A structured laboratory, cardiac and chest assessment before surgery.", ["Hemogram with ESR & Blood Group", "Bleeding, Clotting, PT/INR & APTT", "Blood Sugar, Urea & Creatinine", "TSH & Liver Function", "HIV, HBsAg, HCV & VDRL", "Urine Analysis", "ECG", "Chest X-ray"]),
  packageItem("std-panel", "STD Panel", "specialised", 3200, 5750, "A confidential blood panel for common sexually transmitted infections.", ["HIV I & II", "HBsAg", "Anti-HCV", "HSV 1 IgM & IgG", "HSV 2 IgM & IgG", "VDRL"]),
  packageItem("blood-screening-profile", "Blood Screening Profile", "specialised", 3600, 6000, "Broad blood-group, infection and TORCH-related antibody screening.", ["Hemogram with ESR", "Blood Group & Rh", "HIV 1 & 2", "Toxoplasma IgM", "Rubella IgM", "CMV IgM", "HSV 1 & 2 IgM", "HBsAg & VDRL"]),
  packageItem("hepatitis-profile", "Hepatitis Profile", "specialised", 3200, 4000, "Viral hepatitis antigen and antibody screening.", ["HBsAg", "Anti-HCV", "HAV IgM", "HEV IgM"]),
  packageItem("hepatitis-b-profile", "Hepatitis B Profile", "specialised", 3840, 4800, "Focused hepatitis B antigen and antibody evaluation.", ["HBsAg", "HBeAg", "Anti-HBe Antibody", "Anti-HBc Antibody"]),
  packageItem("coagulation-profile", "Coagulation Screening Profile", "specialised", 1680, 2100, "Core clotting-time and platelet assessment.", ["Prothrombin Time & INR", "PTT / APTT", "Bleeding & Clotting Time", "Platelet Count"]),
  packageItem("obesity-profile", "Obesity Profile", "specialised", 4000, 7320, "Metabolic, nutritional and organ-function assessment for weight-management care.", ["Complete Blood Count", "Fasting Sugar, Insulin & HbA1c", "Lipid Profile", "Liver & Renal Function", "Thyroid Function", "Vitamin D & B12", "Height, Weight, BMI & Blood Pressure"]),
  packageItem("cancer-screening-male", "Cancer Screening Package — Male", "specialised", 4550, 7580, "Blood markers, imaging and stool screening for male cancer risk assessment.", ["Hemogram with ESR", "PSA", "CEA, CA 19.9 & AFP", "Stool Occult Blood", "Chest X-ray", "Ultrasound Abdomen & Pelvis"]),
  packageItem("cancer-screening-female", "Cancer Screening Package — Female", "specialised", 6100, 10180, "Blood markers, imaging and women-specific screening for cancer risk assessment.", ["Hemogram with ESR", "CA-125, CA 15.3, CEA & AFP", "Stool Occult Blood", "Chest X-ray", "PAP Smear", "Bilateral Sonomammography", "Ultrasound Abdomen & Pelvis"]),
  packageItem("advanced-fitness", "Advanced Fitness Package", "specialised", 4400, 7010, "Metabolic, vitamin and organ-function screening for active adults.", ["Complete Blood Count", "Blood Sugar & HbA1c", "Lipid Profile", "Liver & Renal Function", "Vitamin D & B12", "TSH for Women", "Testosterone for Men"]),
];

export const healthPackageGuideDate = "15 December 2025";

export function getHealthPackagesByCategory(category?: HealthPackageCategory): HealthPackageContent[] {
  if (!category) return healthPackages;
  return healthPackages.filter((pkg) => pkg.category === category);
}

export function getHealthPackageBySlug(slug: string): HealthPackageContent | undefined {
  return healthPackages.find((pkg) => pkg.slug === slug);
}

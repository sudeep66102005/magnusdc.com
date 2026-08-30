export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export const specialties = [
  "Physician / Internal Medicine",
  "Orthopedics",
  "Cardiology",
  "Radiology",
  "Physiotherapy",
  "Gynecology & Obstetrics",
  "Neurology",
  "General Surgery",
  "Neurosurgery",
  "Vascular Surgery",
  "Medical Gastroenterology",
  "Surgical Gastroenterology",
  "ENT",
  "Diabetology",
  "Dermatology",
  "Urology",
  "Nephrology",
  "Oncology",
  "Pulmonology",
  "Pediatrics",
  "Endocrinology",
  "Homoeopathy",
] as const;

export const mainNav: NavItem[] = [
  {
    label: "About Us",
    href: "/about",
  },
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "All Services", href: "/services" },
      { label: "Imaging", href: "/diagnostics" },
      { label: "Laboratory", href: "/laboratory" },
      { label: "Specialist Care", href: "/specialties" },
      { label: "Health Packages", href: "/health-packages" },
    ],
  },
  {
    label: "Doctors",
    href: "/specialties",
    children: [
      { label: "All Specialties", href: "/specialties" },
      ...specialties.map((name) => ({
        label: name,
        href: `/specialties/${slugify(name)}`,
      })),
    ],
  },
  {
    label: "Diagnostics",
    href: "/diagnostics",
    children: [
      { label: "Overview", href: "/diagnostics" },
      { label: "MRI (3T MRI)", href: "/diagnostics/mri" },
      { label: "CT Scan", href: "/diagnostics/ct-scan" },
      { label: "Ultrasound", href: "/diagnostics/ultrasound" },
      { label: "Doppler", href: "/diagnostics/doppler" },
      { label: "X-ray", href: "/diagnostics/x-ray" },
      {
        label: "Fetal Medicine & Pregnancy Scans",
        href: "/diagnostics/fetal-medicine-pregnancy-scans",
      },
      { label: "Fibroscan", href: "/diagnostics/fibroscan" },
      {
        label: "Advanced Procedures (EEG, ENMG, etc.)",
        href: "/diagnostics/advanced-procedures",
      },
    ],
  },
  {
    label: "Laboratory",
    href: "/laboratory",
    children: [
      { label: "Overview", href: "/laboratory" },
      { label: "Routine Pathology", href: "/laboratory/routine-pathology" },
      { label: "Biochemistry", href: "/laboratory/biochemistry" },
      { label: "Microbiology", href: "/laboratory/microbiology" },
      { label: "Hormonal Testing", href: "/laboratory/hormonal-testing" },
      {
        label: "Genetic & Molecular Diagnostics",
        href: "/laboratory/genetic-molecular-diagnostics",
      },
      { label: "Preventive Testing", href: "/laboratory/preventive-testing" },
      {
        label: "Home Sample Collection",
        href: "/laboratory/home-sample-collection",
      },
    ],
  },
  {
    label: "Health Packages",
    href: "/health-packages",
    children: [
      { label: "Routine Health Packages", href: "/health-packages/checkup" },
      { label: "Diabetic Profiles", href: "/health-packages/diabetic" },
      { label: "Cardiac Packages", href: "/health-packages/cardiac" },
      { label: "Women’s Health Packages", href: "/health-packages/womens-health" },
      { label: "Reproductive Health", href: "/health-packages/reproductive-health" },
      { label: "Specialised Profiles", href: "/health-packages/specialised" },
      { label: "Corporate Health Packages", href: "/health-packages/corporate-health" },
      { label: "View All Packages", href: "/health-packages" },
    ],
  },
  {
    label: "For Corporates",
    href: "/for-corporates",
    children: [
      { label: "Employee Health Checkups", href: "/for-corporates/employee-health-checkups" },
      { label: "Diagnostic Partnerships", href: "/for-corporates/diagnostic-partnerships" },
    ],
  },
  {
    label: "Patient Info",
    href: "/patient-info",
    children: [
      { label: "Appointment Booking", href: "/patient-info/appointment-booking" },
      { label: "Patient Support", href: "/patient-info/patient-support" },
    ],
  },
  {
    label: "Contact Us",
    href: "/contact",
  },
];

export const footerNav = {
  columns: [
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Specialties", href: "/specialties" },
        { label: "Diagnostics", href: "/diagnostics" },
        { label: "Laboratory", href: "/laboratory" },
      ],
    },
    {
      title: "Patients",
      links: [
        { label: "Health Packages", href: "/health-packages" },
        { label: "Appointment Booking", href: "/patient-info/appointment-booking" },
        { label: "Patient Support", href: "/patient-info/patient-support" },
        { label: "Contact Us", href: "/contact" },
      ],
    },
    {
      title: "Corporates",
      links: [
        { label: "Employee Health Checkups", href: "/for-corporates/employee-health-checkups" },
        { label: "Diagnostic Partnerships", href: "/for-corporates/diagnostic-partnerships" },
      ],
    },
  ],
  bottomLinks: [
    { label: "About Us", href: "/about" },
    { label: "Services", href: "/diagnostics" },
    { label: "Locations", href: "/contact" },
    { label: "Patient Info", href: "/patient-info" },
    { label: "Contact Us", href: "/contact" },
    { label: "Privacy Policy", href: "/privacy-policy" },
    { label: "Terms & Conditions", href: "/terms-and-conditions" },
  ],
};

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/\//g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

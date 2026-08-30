import { specialties } from "@/lib/constants/navigation";

export type Doctor = {
  /** Shown in bold. Real doctors should include the "Dr." prefix. */
  name: string;
  /** Must match one of the specialties in `navigation.ts` — this drives the filter. */
  specialty: (typeof specialties)[number];
  /** Qualifications line, e.g. "MBBS, MS, FRCS (Glasgow)". Optional. */
  degrees?: string;
  /** Optional experience line, e.g. "18 years experience". */
  experience?: string;
  /**
   * Path under `/assets/` — for a real doctor that is
   * `"uploads/doctors/<file>"`. Leave it out and the card shows a monogram tile
   * instead, so a doctor can be listed before the photo exists.
   */
  image?: string;
  /** Where the card links to. Defaults to the doctor's specialty page. */
  href?: string;
};

/**
 * PLACEHOLDER CONTENT.
 *
 * These are the departments that were already on the homepage, kept so the
 * section is not empty. They are not real people, which is why none of them
 * carry a "Dr." prefix or qualifications.
 *
 * Replace this array with the real doctor list — name, specialty and
 * qualifications per doctor. Photos can follow later: drop them into
 * `frontend/public/assets/uploads/doctors/` and add the file name as `image`.
 */
export const doctors: Doctor[] = [
  { name: "Radiology", specialty: "Physician / Internal Medicine", image: "dantora/team/01.png" },
  { name: "Internal Medicine", specialty: "Physician / Internal Medicine", image: "dantora/team/02.png" },
  { name: "Cardiology", specialty: "Cardiology", image: "dantora/team/03.png" },
  { name: "Orthopaedics", specialty: "Orthopedics", image: "dantora/team/04.png" },
  { name: "Women’s Health", specialty: "Gynecology & Obstetrics", image: "dantora/team/05.png" },
  { name: "ENT", specialty: "ENT", image: "dantora/team/01.png" },
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

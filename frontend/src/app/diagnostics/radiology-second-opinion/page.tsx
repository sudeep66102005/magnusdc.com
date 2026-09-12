import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CalendarCheck,
  CheckIcon,
  ClipboardCheck,
  Microscope,
  Phone,
  ScanLine,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { siteConfig } from "@/lib/constants/site-config";

export const metadata: Metadata = {
  /* `absolute` because the root layout appends "| Clarus Magnus" to every title
     via its template — a plain string would have produced the suffix twice. */
  title: { absolute: "Radiology Second Opinion | Clarus Magnus" },
  description:
    "Expert review of your MRI, CT, ultrasound and X-ray by experienced radiologists at Clarus Magnus, Koramangala.",
};

const SUBHEAD = "Expert Review of Your MRI, CT, Ultrasound & X-Ray";

const whenToConsider = [
  "You have been advised to undergo surgery",
  "Your symptoms do not match the imaging report",
  "You have persistent pain despite treatment",
  "The diagnosis is uncertain or complex",
  "You want confirmation before an important treatment decision",
  "Your doctor recommends an expert review",
  "You are seeking consultation with another specialist",
  "The scan was performed at another diagnostic centre",
  "A sports injury requires detailed assessment",
  "A neurological disorder requires specialized interpretation",
  "A complex cancer diagnosis requires multidisciplinary care",
];

const studiesReviewed = [
  {
    icon: ScanLine,
    modality: "MRI",
    studies: [
      "Brain",
      "Spine",
      "Knee",
      "Shoulder",
      "Hip",
      "Ankle",
      "Wrist",
      "Abdomen",
      "Pelvis",
      "Prostate",
      "Whole Body MRI",
    ],
  },
  {
    icon: ScanLine,
    modality: "CT Scan",
    studies: [
      "Brain",
      "Chest",
      "Abdomen",
      "Spine",
      "CT Angiography",
      "Trauma Imaging",
      "HRCT Chest",
    ],
  },
  {
    icon: Stethoscope,
    modality: "Ultrasound",
    studies: [
      "Abdomen",
      "Pelvis",
      "Thyroid",
      "Breast",
      "Scrotum",
      "Soft Tissue",
      "Pregnancy Ultrasound",
      "Fetal Medicine Studies",
    ],
  },
  {
    icon: ScanLine,
    modality: "X-Ray",
    studies: ["Chest", "Bones & Joints", "Spine", "Trauma Imaging"],
  },
];

const expertise = [
  "Musculoskeletal Imaging",
  "Neuroimaging",
  "Body Imaging",
  "Women’s Imaging",
  "Fetal Medicine",
  "Emergency Radiology",
  "Oncologic Imaging",
  "Chest Imaging",
  "Abdominal Imaging",
];

const whySeek = [
  "Confirm the original diagnosis",
  "Identify additional imaging findings",
  "Clarify uncertain or complex reports",
  "Improve confidence before surgery or invasive procedures",
  "Assist the treating doctor with treatment planning",
  "Provide reassurance for patients and families",
];

const whyChooseUs = [
  {
    icon: Microscope,
    title: "Radiologist-Led Excellence",
    body: "Clarus Magnus is led by radiologists, so imaging interpretation is the discipline the centre is built around rather than a service attached to it.",
  },
  {
    icon: ScanLine,
    title: "Comprehensive Image Review",
    body: "We evaluate every available image, not just the original report. The review begins with the study itself, which is what allows additional findings to come to light.",
  },
  {
    icon: ClipboardCheck,
    title: "Clinically Relevant Reporting",
    body: "Reports are written to be useful to the doctor treating you — correlated with your clinical history and framed around the decision at hand.",
  },
  {
    icon: ShieldCheck,
    title: "Subspecialty Expertise",
    body: "Musculoskeletal imaging, neuroimaging, body imaging, fetal medicine, women’s imaging and emergency radiology are each covered by radiologists working in that area.",
  },
  {
    icon: Stethoscope,
    title: "Advanced Diagnostic Centre",
    body: "3 Tesla MRI, Multislice CT, Digital X-Ray, Ultrasound, Doppler, laboratory services and fetal medicine are all under one roof, should follow-up imaging be needed.",
  },
  {
    icon: CalendarCheck,
    title: "18+ Years of Trusted Healthcare",
    body: "A trusted Bengaluru institution of more than eighteen years, re-established under radiologist-led leadership.",
  },
];

const whatToProvide = [
  "Imaging films or CD / DVD / USB (or DICOM files)",
  "The original radiology report, if available",
  "Relevant medical records",
  "Previous imaging studies for comparison, if available",
  "Your treating doctor’s clinical notes, if available",
];

/* Answers are composed from the brief for this page and stay strictly within
   it — no turnaround times, statistics or pricing are stated anywhere, because
   none were supplied. Replace with the wording from
   website_content_revised.docx when it is to hand; the structure will not need
   to change. */
const faqs = [
  {
    q: "Do I need to repeat my scan?",
    a: "No. A second opinion is prepared from the images you already have, so there is no need to undergo the scan again. Bring the films or the CD, DVD or USB containing the DICOM files, along with the original report if you have it, and the radiologist works directly from those. If your treating doctor does ask for further imaging after reading the second opinion, it can be carried out here — 3 Tesla MRI, Multislice CT, digital X-ray, ultrasound and Doppler are all on site.",
  },
  {
    q: "Will you contact my treating doctor?",
    a: "The second opinion report is prepared for you, and it is written to be clinically useful to the doctor treating you — correlated with your history and framed around the decision you are facing. You are welcome to share it with them, and if you would prefer it sent to them directly, let our team know when you submit your images.",
  },
  {
    q: "Is a second opinion only for serious illnesses?",
    a: "Not at all. A second opinion is just as reasonable when you simply want reassurance. Patients ask for one because a diagnosis is new, because symptoms have persisted despite treatment, because surgery has been suggested, or because they would like an independent perspective before making a decision. Asking for one does not mean the original report was wrong — it adds a further expert view.",
  },
  {
    q: "Can I get a second opinion if my scan was performed at another hospital?",
    a: "Yes. Reviewing imaging performed elsewhere is exactly what this service is for, and it makes no difference which hospital or diagnostic centre carried out the study. We review MRI, CT, ultrasound, X-ray, mammography, PET-CT and other imaging from outside centres. Bring the images and, where you have them, the original report, any relevant records and earlier studies for comparison.",
  },
];

const relatedTests = [
  { name: "MRI (3T MRI)", href: "/diagnostics/mri" },
  { name: "CT Scan", href: "/diagnostics/ct-scan" },
  { name: "Ultrasound", href: "/diagnostics/ultrasound" },
];

/** Section heading, sized once so every block below matches. */
function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-2xl font-bold leading-tight tracking-[-0.03em] text-[#142F86] sm:text-3xl">
      {children}
    </h2>
  );
}

/** Bulleted item with the site's sky-blue tick. */
function Tick({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex size-5 flex-none items-center justify-center rounded-full bg-[#31B4F4]/15 text-[#142F86]">
        <CheckIcon className="size-3" />
      </span>
      <span className="text-sm leading-6 text-[#142F86]/75 sm:text-base sm:leading-7">
        {children}
      </span>
    </li>
  );
}

export default function RadiologySecondOpinionPage() {
  return (
    <>
      <PageHero eyebrow="Diagnostics" title="Radiology Second Opinion" description={SUBHEAD} />

      {/* ---- INTRO ------------------------------------------------------ */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="space-y-5 text-base leading-7 text-[#142F86]/75 sm:text-lg sm:leading-8">
            <p>
              Important medical decisions often rest on how accurately an imaging
              study has been interpreted. A scan is rarely just a picture — it is
              the basis for deciding whether to operate, which treatment to begin,
              and whether a diagnosis is settled.
            </p>
            <p>
              Clarus Magnus offers an independent expert review of imaging performed
              elsewhere, including MRI, CT, ultrasound, X-ray, mammography, PET-CT
              and other studies. Patients most often come to us with a new
              diagnosis, with symptoms that have persisted despite treatment, while
              considering surgery, or simply wanting reassurance before they commit
              to a course of action.
            </p>
            <p>
              Reviews are carried out with subspecialty coverage across
              musculoskeletal imaging, neuroimaging, body imaging, fetal medicine,
              women’s imaging and emergency radiology.
            </p>
          </div>
        </div>
      </section>

      {/* ---- WHAT IS IT ------------------------------------------------- */}
      <section className="bg-[#31B4F4]/8 py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <H2>What is a Radiology Second Opinion?</H2>
          <p className="mt-5 text-base leading-7 text-[#142F86]/75 sm:text-lg sm:leading-8">
            It is an independent review of your imaging by an experienced
            radiologist. That review includes:
          </p>
          <ul className="mt-6 space-y-3.5">
            <Tick>A reassessment of all the images, not only the conclusions drawn from them</Tick>
            <Tick>A review of the original report, where one is available</Tick>
            <Tick>Correlation with your clinical history</Tick>
            <Tick>
              Identification of additional or overlooked findings, where applicable
            </Tick>
            <Tick>Preparation of a comprehensive second opinion report</Tick>
          </ul>
          <p className="mt-7 rounded-2xl bg-white p-5 text-sm leading-6 text-[#142F86]/75 ring-1 ring-[#142F86]/10 sm:p-6 sm:text-base sm:leading-7">
            A second opinion does not necessarily mean the original report was
            wrong. In most cases it provides an additional expert perspective —
            another qualified reading of the same study, which is often exactly what
            is needed before an important decision.
          </p>
        </div>
      </section>

      {/* ---- WHEN TO CONSIDER ------------------------------------------- */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <H2>When Should You Consider a Second Opinion?</H2>
          <ul className="mt-6 grid gap-3.5 sm:grid-cols-2">
            {whenToConsider.map((item) => (
              <Tick key={item}>{item}</Tick>
            ))}
          </ul>
        </div>
      </section>

      {/* ---- STUDIES WE REVIEW ------------------------------------------ */}
      <section className="bg-[#31B4F4]/8 py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <H2>Imaging Studies We Review</H2>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {studiesReviewed.map(({ icon: Icon, modality, studies }) => (
              <div
                key={modality}
                className="rounded-[1.5rem] bg-white p-6 shadow-[0_18px_48px_-38px_rgba(20,47,134,0.8)] sm:p-7"
              >
                <div className="flex items-center gap-3">
                  <span className="flex size-10 flex-none items-center justify-center rounded-full bg-[#31B4F4]/12 text-[#142F86]">
                    <Icon className="size-5" />
                  </span>
                  <h3 className="text-lg font-bold text-[#142F86]">{modality}</h3>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {studies.map((s) => (
                    <li
                      key={s}
                      className="rounded-full bg-[#31B4F4]/10 px-3 py-1.5 text-xs font-medium text-[#142F86]"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- EXPERTISE + WHY SEEK --------------------------------------- */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-14">
          <div>
            <H2>Our Areas of Expertise</H2>
            <ul className="mt-6 space-y-3.5">
              {expertise.map((item) => (
                <Tick key={item}>{item}</Tick>
              ))}
            </ul>
          </div>
          <div>
            <H2>Why Seek a Second Opinion?</H2>
            <ul className="mt-6 space-y-3.5">
              {whySeek.map((item) => (
                <Tick key={item}>{item}</Tick>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* ---- WHY CHOOSE US --------------------------------------------- */}
      <section className="bg-[#31B4F4]/8 py-14 lg:py-20">
        <div className="mx-auto max-w-6xl px-5 sm:px-8">
          <H2>Why Choose Clarus Magnus?</H2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {whyChooseUs.map(({ icon: Icon, title, body }) => (
              <div
                key={title}
                className="rounded-[1.5rem] bg-white p-6 shadow-[0_18px_48px_-38px_rgba(20,47,134,0.8)]"
              >
                <span className="flex size-11 items-center justify-center rounded-full bg-[#31B4F4]/12 text-[#142F86]">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 text-base font-bold text-[#142F86]">{title}</h3>
                <p className="mt-2.5 text-sm leading-6 text-[#142F86]/70">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- HOW TO REQUEST -------------------------------------------- */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <H2>How to Request a Second Opinion</H2>
          <p className="mt-5 text-base leading-7 text-[#142F86]/75 sm:text-lg sm:leading-8">
            Please bring, or send, the following:
          </p>
          <ul className="mt-6 space-y-3.5">
            {whatToProvide.map((item) => (
              <Tick key={item}>{item}</Tick>
            ))}
          </ul>
          <p className="mt-7 rounded-2xl bg-[#31B4F4]/8 p-5 text-sm leading-6 text-[#142F86]/75 sm:p-6 sm:text-base sm:leading-7">
            Our team will review the information you provide and advise you on the
            expected turnaround time.
          </p>
        </div>
      </section>

      {/* ---- FAQ ------------------------------------------------------- */}
      <section className="bg-[#31B4F4]/8 py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <H2>Frequently asked questions</H2>
          {/* Native details/summary rather than the ui/accordion component: that
              component has no "use client" directive and is used nowhere in the
              site, so pulling it into this server page risked the build. A
              disclosure element needs no JavaScript, keeps every answer in the
              server-rendered HTML where search engines can read it, and is
              keyboard accessible on its own. */}
          <div className="mt-7 divide-y divide-[#142F86]/12 overflow-hidden rounded-[1.5rem] bg-white ring-1 ring-[#142F86]/10">
            {faqs.map(({ q, a }) => (
              <details key={q} className="group px-6 py-5 sm:px-7">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4 text-left text-base font-bold text-[#142F86] [&::-webkit-details-marker]:hidden">
                  {q}
                  <span
                    aria-hidden="true"
                    className="mt-0.5 flex size-6 flex-none items-center justify-center rounded-full bg-[#31B4F4]/12 text-[#142F86] transition group-open:rotate-45"
                  >
                    <span className="text-lg leading-none">+</span>
                  </span>
                </summary>
                <p className="mt-3.5 max-w-3xl text-sm leading-6 text-[#142F86]/75 sm:text-base sm:leading-7">
                  {a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---- CTA + RELATED --------------------------------------------- */}
      <section className="bg-white py-14 lg:py-20">
        <div className="mx-auto max-w-4xl px-5 sm:px-8">
          <div className="rounded-[1.75rem] bg-[#142F86] p-8 text-white sm:p-10">
            <h2 className="text-2xl font-bold leading-tight tracking-[-0.03em] sm:text-3xl">
              Book Your Second Opinion
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-white/75 sm:text-base sm:leading-7">
              An expert, unbiased review of your imaging — so you can move forward
              with clarity and confidence about what comes next.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/patient-info/appointment-booking"
                className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold text-[#142F86] transition hover:bg-[#31B4F4] hover:text-white"
              >
                Book Now
                <ArrowRight className="size-4" />
              </Link>
              <a
                href={siteConfig.phone.href}
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white ring-1 ring-white/35 transition hover:ring-white"
              >
                <Phone className="size-4" />
                {siteConfig.phone.display}
              </a>
            </div>
          </div>

          <div className="mt-10">
            <h2 className="text-xl font-bold text-[#142F86]">Related tests</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-3">
              {relatedTests.map((test) => (
                <Link
                  key={test.href}
                  href={test.href}
                  className="group flex items-start justify-between gap-3 rounded-xl bg-white p-4 ring-1 ring-[#142F86]/10 transition hover:ring-[#31B4F4]"
                >
                  <span className="text-sm font-bold text-[#142F86] group-hover:underline">
                    {test.name}
                  </span>
                  <ArrowRight className="mt-0.5 size-4 flex-none text-[#142F86]/40 transition group-hover:text-[#142F86]" />
                </Link>
              ))}
            </div>
          </div>

          <p className="mt-10 text-xs leading-relaxed text-[#142F86]/55">
            This page describes a service we offer. It is general information, not
            medical advice, and it is not a recommendation that you need this test —
            your doctor decides which investigation is appropriate for your
            symptoms.
          </p>
        </div>
      </section>
    </>
  );
}

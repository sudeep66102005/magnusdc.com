import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, ClipboardCheck, HeartPulse, ScanLine, ShieldCheck, TestTube2 } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "Medical Library",
  description: "Patient-friendly guides to MRI, CT, laboratory preparation, preventive health checks and diagnostic safety from Clarus Magnus.",
};

const guides = [
  {
    title: "Preparing for an MRI",
    description: "Understand metallic-object screening, implants, contrast, fasting and what to bring for your examination.",
    href: "/diagnostics/mri",
    icon: ScanLine,
  },
  {
    title: "Preparing for a CT scan",
    description: "Learn when fasting, kidney-function reports or contrast precautions may be required.",
    href: "/diagnostics/ct-scan",
    icon: ShieldCheck,
  },
  {
    title: "Before a health check",
    description: "A clear guide to fasting, regular medicines, comfortable clothing and ultrasound preparation.",
    href: "/health-packages",
    icon: ClipboardCheck,
  },
  {
    title: "Understanding diagnostic services",
    description: "Explore 3T MRI, multislice CT, ultrasound, Doppler, X-ray, Fibroscan, OPG and CBCT.",
    href: "/diagnostics",
    icon: BookOpen,
  },
  {
    title: "Laboratory testing",
    description: "Explore routine pathology, biochemistry, microbiology, hormonal and preventive testing.",
    href: "/laboratory",
    icon: TestTube2,
  },
  {
    title: "Preventive health packages",
    description: "Compare routine, diabetic, cardiac, women’s, reproductive, specialised and corporate profiles.",
    href: "/health-packages",
    icon: HeartPulse,
  },
];

export default function MedicalLibraryPage() {
  return (
    <>
      <PageHero
        eyebrow="Medical library"
        title="Clear information before every health decision."
        description="Patient-friendly guidance drawn from Clarus Magnus service and package information, designed to help you arrive informed and prepared."
      />
      <Section>
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {guides.map((guide) => {
            const Icon = guide.icon;
            return (
              <Link key={guide.title} href={guide.href} className="group rounded-[1.75rem] border border-[#dce5f1] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#31B4F4]/60 hover:shadow-[0_24px_60px_-36px_rgba(20,47,134,0.65)]">
                <span className="flex size-11 items-center justify-center rounded-2xl bg-[#EAF7FE] text-[#142F86]"><Icon className="size-5" /></span>
                <h2 className="mt-6 text-xl font-black text-[#142F86]">{guide.title}</h2>
                <p className="mt-3 text-sm leading-7 text-[#65738a]">{guide.description}</p>
                <span className="mt-6 flex items-center gap-2 text-sm font-black text-[#DA1C29]">Read guide <ArrowRight className="size-4 transition group-hover:translate-x-1" /></span>
              </Link>
            );
          })}
        </div>
        <div className="mt-10 rounded-2xl border border-[#dbe5f2] bg-[#f5f9ff] p-5 text-sm leading-7 text-[#607089]">
          <strong className="text-[#142F86]">Important:</strong> These guides provide general preparation information and do not replace advice from your doctor or the Clarus Magnus clinical team. Preparation varies by examination; always follow the instructions provided when booking.
        </div>
      </Section>
    </>
  );
}

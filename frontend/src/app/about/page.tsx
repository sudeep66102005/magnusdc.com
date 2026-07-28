import type { Metadata } from "next";
import { Eye, HeartHandshake, Microscope, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the 18+ year legacy, radiologist-led vision and patient-first values behind Clarus Magnus Health & Diagnostics in Koramangala.",
};

const difference = [
  {
    icon: ShieldCheck,
    title: "18+ years of trust",
    description: "Built on a strong foundation of community trust, clinical reliability and dependable service.",
  },
  {
    icon: Microscope,
    title: "Radiologist-led excellence",
    description: "Quality, precision and clinical relevance guide every diagnostic experience and report.",
  },
  {
    icon: Eye,
    title: "Advanced technology",
    description: "3 Tesla MRI, Multislice CT, advanced ultrasound, digital X-ray and comprehensive laboratory services.",
  },
  {
    icon: HeartHandshake,
    title: "Clarity with care",
    description: "Transparent communication, compassionate service and a patient-first approach at every step.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our story"
        title="A legacy of trust. Reimagined for the future."
        description="Clarus Magnus is the evolution of a trusted Bengaluru healthcare institution—now led by radiologists and built around accurate answers, clinical confidence and compassionate care."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:items-start">
          <div className="rounded-[2rem] bg-[#142F86] p-8 text-white sm:p-10">
            <p className="text-8xl font-black leading-none tracking-[-0.08em]">18<span className="text-[#31B4F4]">+</span></p>
            <p className="mt-5 text-xl font-bold leading-8 text-white/80">years serving Bengaluru with trust, reliability and patient-centred care.</p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#DA1C29]">Who we are</p>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-[-0.035em] text-[#142F86] sm:text-4xl">Modern diagnostics with a deeply human centre.</h2>
            <div className="mt-6 space-y-5 text-lg leading-8 text-[#607089]">
              <p>Located in the heart of Koramangala, Clarus Magnus has been thoughtfully transformed into a modern healthcare destination offering advanced diagnostics, laboratory services and multispecialty consultations under one roof.</p>
              <p>Every investigation is supported by experienced radiologists and healthcare professionals committed to clinically meaningful insights. For us, diagnostics are not merely tests—they are the foundation of better healthcare.</p>
              <p>By combining technology with expert interpretation and personalised attention, we help patients and doctors move forward with greater clarity, confidence and peace of mind.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-[#f4f8ff]" title="The Clarus Magnus difference" description="A more thoughtful standard of diagnostic and specialty care.">
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {difference.map(({ icon: Icon, title, description }) => (
            <div key={title} className="rounded-[1.75rem] border border-white bg-white p-7 shadow-[0_18px_48px_-36px_rgba(20,47,134,0.7)]">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-[#EAF7FE] text-[#142F86]">
                <Icon className="size-5" />
              </span>
              <h3 className="mt-6 text-xl font-black text-[#142F86]">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-[#65738a]">{description}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-5 md:grid-cols-2">
          <div className="rounded-[2rem] border border-[#dce5f1] p-8 sm:p-10">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#DA1C29]">Our vision</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.03em] text-[#142F86]">Bengaluru’s most trusted destination for diagnostics and specialty healthcare.</h2>
            <p className="mt-5 leading-8 text-[#607089]">A place where advanced technology, clinical excellence and compassionate care come together to improve lives.</p>
          </div>
          <div className="rounded-[2rem] bg-[#102A75] p-8 text-white sm:p-10">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8ed7fa]">Our mission</p>
            <h2 className="mt-4 text-3xl font-black tracking-[-0.03em]">Accurate diagnostics. Expert support. Exceptional experiences.</h2>
            <p className="mt-5 leading-8 text-white/70">Delivered through innovation, integrity and a relentless focus on quality and patient confidence.</p>
          </div>
        </div>
      </Section>
    </>
  );
}

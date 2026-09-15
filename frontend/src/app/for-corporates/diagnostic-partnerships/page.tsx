import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  FileText,
  HandshakeIcon,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import { siteConfig } from "@/lib/constants/site-config";
import { CorporateInquiryForm } from "@/components/forms/corporate-inquiry-form";

export const metadata: Metadata = {
  title: "Diagnostic Partnerships | For Corporates",
  description:
    "Long-term diagnostic service partnerships for hospitals, clinics and insurers. Priority scheduling, dedicated account management and consolidated billing.",
};

const BENEFITS = [
  { icon: Clock,       title: "Priority Scheduling",      desc: "Jump the queue \u2014 your patients and employees get fast-tracked appointments." },
  { icon: Users,       title: "Dedicated Account Manager", desc: "One point of contact for bookings, reports and billing queries." },
  { icon: FileText,    title: "Consolidated Billing",      desc: "Monthly invoices, MIS reports and GST-ready statements in one package." },
  { icon: ShieldCheck, title: "Preferential Rates",        desc: "Volume-based pricing with transparent rate cards \u2014 no hidden charges." },
];

const WHO = [
  "Hospitals & multi-speciality clinics",
  "Insurance companies & TPAs",
  "Diagnostic chains seeking overflow capacity",
  "Corporate employers with large workforces",
  "Government & PSU health programmes",
];

const HOW = [
  { step: "01", title: "Initial Consultation",   desc: "Tell us your volume, specialties and turnaround expectations." },
  { step: "02", title: "Custom Rate Card",        desc: "We prepare a bespoke pricing proposal within 48 hours." },
  { step: "03", title: "Agreement & Onboarding", desc: "Sign the MoU and get your dedicated account manager assigned." },
  { step: "04", title: "Go Live",                desc: "Start referring \u2014 reports delivered to your preferred channel." },
];

export default function DiagnosticPartnershipsPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#EEF4FF] via-white to-[#E8F6FE] pt-28 pb-0 lg:pt-36">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0" style={{ backgroundImage: "linear-gradient(rgb(20 47 134 / 4%) 1px, transparent 1px), linear-gradient(90deg, rgb(20 47 134 / 4%) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div className="pb-12 lg:pb-24">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#142F86]/8 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#142F86]">For Corporates</p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-[#142F86] sm:text-5xl lg:text-[3.25rem]">Diagnostic<span className="block text-[#31B4F4]">Partnerships</span></h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#142F86]/70">Establish a long-term partnership for reliable, preferential-rate diagnostic services \u2014 backed by radiologist-led precision and a dedicated account team.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#inquiry" className="inline-flex items-center gap-2.5 rounded-full bg-[#142F86] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#1a3da0] hover:shadow-lg">
                <HandshakeIcon className="size-4" />Become a Partner
              </a>
              <a href={siteConfig.phone.href} className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#142F86] px-7 py-3.5 text-sm font-bold text-[#142F86] transition hover:bg-[#142F86] hover:text-white">
                <Phone className="size-4" />Call Us
              </a>
            </div>
          </div>
          <div className="relative hidden lg:flex lg:items-end lg:justify-center">
            <div className="relative h-[500px] w-[440px]">
              <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="https://images.unsplash.com/photo-1579154204601-01588f351e67?w=880&q=85" alt="Lab technician handling diagnostic samples in a modern laboratory" className="h-full w-full object-cover object-center" />
              </div>
              <div className="absolute -left-8 bottom-16 rounded-2xl bg-white p-4 shadow-xl">
                <div className="flex items-center gap-3">
                  <span className="grid size-10 shrink-0 place-items-center rounded-full bg-[#31B4F4]/15"><ShieldCheck className="size-5 text-[#31B4F4]" /></span>
                  <div>
                    <p className="text-sm font-black text-[#142F86]">Trusted Partner</p>
                    <p className="text-[0.65rem] text-[#142F86]/60">Priority reports &amp; rates</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAFF] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#31B4F4]">What You Get</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#142F86] sm:text-4xl">Built for Long-Term<span className="block">Healthcare Partnerships</span></h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {BENEFITS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex flex-col gap-4 rounded-2xl border border-[#142F86]/8 bg-white p-6 shadow-sm">
                <span className="grid size-11 place-items-center rounded-2xl bg-[#31B4F4]/12"><Icon className="size-5 text-[#31B4F4]" /></span>
                <h3 className="font-bold text-[#142F86]">{title}</h3>
                <p className="text-sm leading-relaxed text-[#142F86]/65">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-start gap-16 px-5 sm:px-8 lg:grid-cols-2">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#31B4F4]">Who We Partner With</p>
            <h2 className="mt-2 text-2xl font-bold text-[#142F86] sm:text-3xl">Trusted by Organisations<span className="block">Across Healthcare</span></h2>
            <ul className="mt-7 space-y-3">
              {WHO.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#142F86]/80"><CheckCircle2 className="size-5 shrink-0 text-[#31B4F4]" />{item}</li>
              ))}
            </ul>
            <div className="mt-10 overflow-hidden rounded-2xl shadow-lg">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://images.unsplash.com/photo-1631815588090-d1bcbe9a8561?w=800&q=80" alt="Healthcare professionals in a meeting discussing diagnostic partnership" className="h-56 w-full object-cover" />
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#31B4F4]">How It Works</p>
            <h2 className="mt-2 text-2xl font-bold text-[#142F86] sm:text-3xl">From Enquiry to<span className="block">First Referral in Days</span></h2>
            <ol className="mt-7 space-y-6">
              {HOW.map(({ step, title, desc }) => (
                <li key={step} className="flex gap-5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#142F86] text-sm font-black text-white">{step}</span>
                  <div><h3 className="font-bold text-[#142F86]">{title}</h3><p className="mt-1 text-sm leading-relaxed text-[#142F86]/65">{desc}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section id="inquiry" className="bg-gradient-to-br from-[#142F86] to-[#1a4ab0] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#31B4F4]">Get in Touch</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Start Your Partnership</h2>
            <p className="mt-4 text-white/70">Fill in the form and our corporate team will reach out within one business day with a custom proposal.</p>
          </div>
          <div className="mx-auto mt-12 max-w-xl rounded-3xl bg-white p-8 shadow-2xl sm:p-10">
            <CorporateInquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}

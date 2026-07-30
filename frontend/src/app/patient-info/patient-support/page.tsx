import type { Metadata } from "next";
import { FileText, FlaskConical, Mail, Phone } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/constants/site-config";

export const metadata: Metadata = {
  title: "Patient Support & Reports",
  description: "Get help accessing lab and imaging reports, arranging home collection, billing, or general patient support.",
};

export default function PatientSupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient support"
        title="Reports and care support, made simpler."
        description={`Reach us at ${siteConfig.phone.display} for help with digital reports, home sample collection, billing or your visit.`}
      />
      <Section>
        <div id="reports" className="scroll-mt-52 rounded-[2rem] bg-[#102A75] p-6 text-white sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="flex items-start gap-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#8ed7fa]"><FileText className="size-5" /></span>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.18em] text-[#8ed7fa]">Access lab & imaging reports</p>
                <h2 className="mt-3 text-2xl font-black sm:text-3xl">Need help receiving your report?</h2>
                <p className="mt-3 max-w-2xl text-sm leading-7 text-white/68">Keep your patient ID or payment receipt ready. Our support team can verify your details and guide you to the appropriate digital laboratory or imaging report.</p>
              </div>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a href={siteConfig.phone.href} className="inline-flex h-11 items-center justify-center gap-2 rounded-full bg-white px-5 text-sm font-black text-[#142F86]"><Phone className="size-4" /> Call report desk</a>
              <a href={`mailto:${siteConfig.email}?subject=Report%20access%20support`} className="inline-flex h-11 items-center justify-center gap-2 rounded-full border border-white/20 px-5 text-sm font-black text-white"><Mail className="size-4" /> Email support</a>
            </div>
          </div>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="rounded-[1.75rem] border border-[#dce5f1] bg-[#f7faff] p-7">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-[#EAF7FE] text-[#142F86]"><FlaskConical className="size-5" /></span>
            <h2 className="mt-5 text-xl font-black text-[#142F86]">Home sample collection</h2>
            <p className="mt-3 text-sm leading-7 text-[#64738a]">Free home collection is available for eligible fasting samples and most blood tests, subject to area and slot availability. Call the care team to confirm preparation and schedule collection.</p>
            <a href={siteConfig.phone.href} className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#DA1C29]"><Phone className="size-4" /> {siteConfig.phone.display}</a>
          </div>
          <div className="rounded-[1.75rem] border border-[#dce5f1] bg-white p-6 sm:p-8">
            <h2 className="text-2xl font-black text-[#142F86]">Send a support request</h2>
            <p className="mt-2 text-sm leading-6 text-[#68778e]">Do not include sensitive medical information in the message. Our team will contact you to verify details securely.</p>
            <div className="mt-6"><ContactForm /></div>
          </div>
        </div>
      </Section>
    </>
  );
}

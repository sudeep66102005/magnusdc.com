import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/constants/site-config";

export const metadata: Metadata = {
  title: "Patient Support",
  description: "Get help with reports, billing, or general inquiries.",
};

export default function PatientSupportPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Info"
        title="We're Here to Help"
        description={`Reach us at ${siteConfig.phone.display} or send a message below and our support team will respond promptly.`}
      />
      <Section>
        <div className="mx-auto max-w-xl">
          <ContactForm />
        </div>
      </Section>
    </>
  );
}

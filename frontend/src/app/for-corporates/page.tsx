import type { Metadata } from "next";
import { Building2, HeartHandshake } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { LinkCard } from "@/components/shared/link-card";
import { CorporateInquiryForm } from "@/components/forms/corporate-inquiry-form";

export const metadata: Metadata = {
  title: "For Corporates",
  description:
    "Employee health checkups and diagnostic partnerships for organizations.",
};

export default function ForCorporatesPage() {
  return (
    <>
      <PageHero
        eyebrow="For Corporates"
        title="Workplace Health Programs That Scale"
        description="Partner with us for employee health checkups and long-term diagnostic partnerships."
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2">
          <LinkCard
            href="/for-corporates/employee-health-checkups"
            title="Employee Health Checkups"
            description="On-site and in-clinic checkup programs for your workforce."
            icon={Building2}
          />
          <LinkCard
            href="/for-corporates/diagnostic-partnerships"
            title="Diagnostic Partnerships"
            description="Long-term partnerships for diagnostic service coverage."
            icon={HeartHandshake}
          />
        </div>
      </Section>
      <Section
        title="Request a Corporate Consultation"
        description="Tell us about your organization and our team will get in touch."
        className="bg-slate-50"
      >
        <div className="mx-auto max-w-xl">
          <CorporateInquiryForm />
        </div>
      </Section>
    </>
  );
}

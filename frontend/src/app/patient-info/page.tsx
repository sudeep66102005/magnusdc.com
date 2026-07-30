import type { Metadata } from "next";
import { CalendarCheck, FileText, LifeBuoy } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { LinkCard } from "@/components/shared/link-card";

export const metadata: Metadata = {
  title: "Patient Info",
  description: "Book appointments and get support throughout your visit.",
};

export default function PatientInfoPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Info"
        title="Everything You Need for Your Visit"
        description="Book appointments online and reach our patient support team whenever you need help."
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <LinkCard
            href="/patient-info/appointment-booking"
            title="Appointment Booking"
            description="Schedule a visit with a specialist or diagnostic service."
            icon={CalendarCheck}
          />
          <LinkCard
            href="/patient-info/patient-support#reports"
            title="Access Lab Reports"
            description="Get verified support receiving laboratory and imaging reports."
            icon={FileText}
          />
          <LinkCard
            href="/patient-info/patient-support"
            title="Patient Support"
            description="Get help with home collection, billing, or general inquiries."
            icon={LifeBuoy}
          />
        </div>
      </Section>
    </>
  );
}

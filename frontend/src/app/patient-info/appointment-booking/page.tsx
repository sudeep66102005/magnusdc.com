import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { AppointmentForm } from "@/components/forms/appointment-form";

export const metadata: Metadata = {
  title: "Appointment Booking",
  description: "Book an appointment with our specialists or diagnostic services.",
};

export default function AppointmentBookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Patient Info"
        title="Book Your Appointment"
        description="Fill in your details and our team will confirm your appointment shortly."
      />
      <Section>
        <div className="mx-auto max-w-xl">
          <AppointmentForm />
        </div>
      </Section>
    </>
  );
}

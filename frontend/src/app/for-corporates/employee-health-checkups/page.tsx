import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "Employee Health Checkups",
  description: "On-site and in-clinic health checkup programs for your workforce.",
};

export default function EmployeeHealthCheckupsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Corporates"
        title="Employee Health Checkups"
        description="Flexible, scalable checkup programs designed to fit your organization's schedule and budget."
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-4 text-[#142F86]/82">
          <p>
            We offer on-site camps and in-clinic checkup slots for
            organizations of any size, with digital reporting and HR-friendly
            summaries.
          </p>
          <p>
            Packages can be customized by role, risk profile, or department,
            and scheduled around your teams&apos; working hours.
          </p>
        </div>
      </Section>
    </>
  );
}

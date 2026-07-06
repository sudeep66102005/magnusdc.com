import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "Diagnostic Partnerships",
  description: "Long-term diagnostic service partnerships for organizations.",
};

export default function DiagnosticPartnershipsPage() {
  return (
    <>
      <PageHero
        eyebrow="For Corporates"
        title="Diagnostic Partnerships"
        description="Establish a long-term partnership for reliable, preferential-rate diagnostic services."
      />
      <Section>
        <div className="mx-auto max-w-3xl space-y-4 text-slate-700">
          <p>
            We work with hospitals, clinics, and insurers to provide
            dependable diagnostic imaging and laboratory coverage under
            partnership agreements.
          </p>
          <p>
            Our partnerships include priority scheduling, dedicated account
            management, and consolidated billing.
          </p>
        </div>
      </Section>
    </>
  );
}

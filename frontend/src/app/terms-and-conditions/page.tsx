import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "Terms & Conditions",
};

export default function TermsAndConditionsPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Terms & Conditions" />
      <Section>
        <div className="mx-auto max-w-3xl space-y-4 text-[#142F86]/82">
          <p>
            These Terms &amp; Conditions govern the use of Clarus Magnus
            Health &amp; Diagnostics services and website. Full terms content
            to be provided by legal/compliance team.
          </p>
        </div>
      </Section>
    </>
  );
}

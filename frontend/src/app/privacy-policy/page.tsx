import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero eyebrow="Legal" title="Privacy Policy" />
      <Section>
        <div className="mx-auto max-w-3xl space-y-4 text-slate-700">
          <p>
            This Privacy Policy explains how Clarus Magnus Health &amp;
            Diagnostics collects, uses, and safeguards patient information.
            Full policy content to be provided by legal/compliance team.
          </p>
        </div>
      </Section>
    </>
  );
}

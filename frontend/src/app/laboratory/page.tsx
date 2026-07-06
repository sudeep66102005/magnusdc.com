import type { Metadata } from "next";
import { FlaskConical } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { LinkCard } from "@/components/shared/link-card";
import { labCategories } from "@/lib/data/laboratory";

export const metadata: Metadata = {
  title: "Laboratory",
  description:
    "NABL-standard laboratory services covering pathology, biochemistry, microbiology, hormonal, and genetic testing.",
};

export default function LaboratoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Laboratory"
        title="Accurate, Timely Lab Diagnostics"
        description="Our laboratory offers comprehensive testing across every major diagnostic category, backed by rigorous quality standards."
      />
      <Section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {labCategories.map((item) => (
            <LinkCard
              key={item.slug}
              href={`/laboratory/${item.slug}`}
              title={item.name}
              description={item.summary}
              icon={FlaskConical}
            />
          ))}
        </div>
      </Section>
    </>
  );
}

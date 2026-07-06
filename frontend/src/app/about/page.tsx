import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Clarus Magnus Health & Diagnostics — our mission, values, and commitment to patient-centered care.",
};

const values = [
  {
    title: "Clinical Excellence",
    description:
      "Our specialists and diagnostic teams follow evidence-based protocols to ensure accurate, timely results.",
  },
  {
    title: "Patient-First Care",
    description:
      "Every interaction is designed around patient comfort, clarity, and convenience.",
  },
  {
    title: "Advanced Technology",
    description:
      "From 3T MRI to genetic diagnostics, we invest in equipment that improves diagnostic accuracy.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Us"
        title="Committed to Accurate Diagnostics and Compassionate Care"
        description="Clarus Magnus Health & Diagnostics brings together 19 clinical specialties, advanced imaging, and a full-service laboratory under one roof."
      />
      <Section title="Our Values">
        <div className="grid gap-6 sm:grid-cols-3">
          {values.map((value) => (
            <Card key={value.title}>
              <CardHeader>
                <CardTitle>{value.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-slate-600">
                {value.description}
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}

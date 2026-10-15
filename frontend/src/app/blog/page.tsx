import type { Metadata } from "next";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { BlogCards } from "@/components/shared/blog-cards";
import { blogArticles } from "@/lib/data/blog";
import { siteConfig } from "@/lib/constants/site-config";

export const metadata: Metadata = {
  title: "MRI, CT, Ultrasound & X-Ray Patient Guides",
  description: "Practical guides to MRI, CT scans, ultrasound and X-rays: preparation, what to expect and questions to ask before your appointment in Koramangala.",
  alternates: { canonical: `${siteConfig.url}/blog` },
};

export default function BlogPage() {
  return <>
    <PageHero eyebrow="Patient guides" title="Understand your scan. Arrive prepared." description="Clear answers about MRI, CT, ultrasound and X-rays, with links to medical references and our diagnostic services." />
    {(["MRI", "CT", "Ultrasound", "X-ray"] as const).map((category) => (
      <Section key={category} title={`${category} guides`} className="py-10 lg:py-12">
        <BlogCards articles={blogArticles.filter((article) => article.category === category)} />
      </Section>
    ))}
    <div className="mx-auto mb-12 max-w-4xl px-5 text-sm leading-7 text-[#142F86]/75">These articles provide general patient information. Follow the instructions given for your individual examination and discuss medical questions with your clinician.</div>
  </>;
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { getAllLabSlugs, getLabCategoryBySlug } from "@/lib/data/laboratory";

interface LabPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllLabSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: LabPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getLabCategoryBySlug(slug);
  if (!item) return {};
  return { title: item.name, description: item.summary };
}

export default async function LabDetailPage({ params }: LabPageProps) {
  const { slug } = await params;
  const item = getLabCategoryBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow="Laboratory" title={item.name} description={item.summary} />
      <Section>
        <div className="mx-auto max-w-3xl space-y-6 text-[#142F86]/82">
          <p>{item.details}</p>
          <Button size="lg" render={<Link href="/patient-info/appointment-booking" />}>
            Book a Test
          </Button>
        </div>
      </Section>
    </>
  );
}

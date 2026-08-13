import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { getAllDiagnosticSlugs, getDiagnosticBySlug } from "@/lib/data/diagnostics";

interface DiagnosticPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllDiagnosticSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: DiagnosticPageProps): Promise<Metadata> {
  const { slug } = await params;
  const item = getDiagnosticBySlug(slug);
  if (!item) return {};
  return { title: item.name, description: item.summary };
}

export default async function DiagnosticDetailPage({ params }: DiagnosticPageProps) {
  const { slug } = await params;
  const item = getDiagnosticBySlug(slug);

  if (!item) {
    notFound();
  }

  return (
    <>
      <PageHero eyebrow="Diagnostics" title={item.name} description={item.summary} />
      <Section>
        <div className="mx-auto max-w-3xl space-y-6 text-[#142F86]/82">
          <p>{item.details}</p>
          {item.preparation && (
            <div className="rounded-lg border bg-[#31B4F4]/8 p-4">
              <p className="font-semibold text-[#142F86]">Preparation Instructions</p>
              <p className="mt-1 text-sm">{item.preparation}</p>
            </div>
          )}
          <Button size="lg" render={<Link href="/patient-info/appointment-booking" />}>
            Book This Test
          </Button>
        </div>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Check, Info } from "lucide-react";
import { Section } from "@/components/shared/section";
import { siteConfig } from "@/lib/constants/site-config";
import { diagnostics, getAllDiagnosticSlugs, getDiagnosticBySlug } from "@/lib/data/diagnostics";

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
/* Asset URL, so the base path is applied by hand. Route hrefs below must not
   carry it — next/link adds it. */
const img = (file: string) => encodeURI(`${BP}/assets/uploads/services/${file}`);

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

  /* Tests sharing a category, so a visitor who landed on the wrong one has a
     route sideways instead of only back. */
  const related = diagnostics
    .filter(
      (other) =>
        other.slug !== item.slug &&
        other.categories.some((category) => item.categories.includes(category)),
    )
    .slice(0, 3);

  return (
    <>
      <section className="border-b border-[#142F86]/12 bg-[#31B4F4]/8 pb-10 pt-28 lg:pb-14 lg:pt-36">
        <div className="mx-auto w-full px-4 sm:px-6 lg:px-10">
          <Link
            href="/diagnostics"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#142F86]/70 transition hover:text-[#142F86]"
          >
            <ArrowLeft className="size-3.5" />
            All diagnostics
          </Link>

          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-10">
            <div className="min-w-0 flex-1">
              <p className="text-[0.7rem] font-black uppercase tracking-[0.2em] text-[#DA1C29]">
                Diagnostics
              </p>
              <h1 className="mt-2 text-3xl font-black leading-[1.06] tracking-[-0.03em] text-[#142F86] sm:text-4xl lg:text-5xl">
                {item.name}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#142F86]/70 sm:text-lg">
                {item.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {item.categories.map((category) => (
                  <span
                    key={category}
                    className="rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-[#142F86] ring-1 ring-[#142F86]/12"
                  >
                    {category}
                  </span>
                ))}
              </div>
            </div>

            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img(item.image)}
              alt={item.name}
              className="h-56 w-full flex-none rounded-3xl object-cover shadow-[0_18px_44px_-24px_rgb(20_47_134/0.5)] sm:h-64 lg:h-72 lg:w-[34rem]"
            />
          </div>
        </div>
      </section>

      <Section className="py-12 lg:py-16">
        <div className="mx-auto w-full max-w-6xl space-y-10">
          <p className="text-lg leading-8 text-[#142F86]/80">{item.details}</p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-5 ring-1 ring-[#142F86]/10 sm:p-6">
              <h2 className="text-lg font-bold text-[#142F86]">Commonly used for</h2>
              <ul className="mt-4 space-y-2.5">
                {item.usedFor.map((use) => (
                  <li
                    key={use}
                    className="flex gap-2.5 text-sm leading-relaxed text-[#142F86]/80"
                  >
                    <Check className="mt-0.5 size-4 flex-none text-[#31B4F4]" aria-hidden="true" />
                    {use}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-2xl bg-[#31B4F4]/8 p-5 sm:p-6">
              <h2 className="flex items-center gap-2 text-lg font-bold text-[#142F86]">
                <Info className="size-5" />
                Before you come
              </h2>
              {item.preparation ? (
                <p className="mt-3 text-sm leading-relaxed text-[#142F86]/80">
                  {item.preparation}
                </p>
              ) : (
                /* Only three tests carry documented preparation. Rather than
                   assert "no preparation needed" for the rest — which is not
                   safe to claim for every scan — this defers to the team. */
                <p className="mt-3 text-sm leading-relaxed text-[#142F86]/80">
                  Preparation depends on the exact study requested. Our team will
                  tell you at booking whether you need to fast, stop a medication,
                  or bring anything with you.
                </p>
              )}
              <p className="mt-3 text-sm leading-relaxed text-[#142F86]/80">
                Please bring a photo ID, your referral letter if you have one, and
                any earlier reports or images of the same area.
              </p>
            </div>
          </div>

          {related.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-[#142F86]">Related tests</h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {related.map((other) => (
                  <Link
                    key={other.slug}
                    href={`/diagnostics/${other.slug}`}
                    className="group flex items-start justify-between gap-3 rounded-xl bg-white p-4 ring-1 ring-[#142F86]/10 transition hover:ring-[#31B4F4]"
                  >
                    <span className="text-sm font-bold text-[#142F86] group-hover:underline">
                      {other.name}
                    </span>
                    <ArrowRight
                      className="mt-0.5 size-4 flex-none text-[#142F86]/40 transition group-hover:text-[#142F86]"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-4 rounded-2xl bg-[#142F86] p-6 text-white sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-bold">Book {item.name}</p>
              <p className="mt-1 text-sm text-white/75">
                MRI and CT run 24/7. Our team will confirm the slot and any
                preparation you need.
              </p>
            </div>
            <div className="flex flex-none flex-wrap gap-2">
              <Link
                href="/patient-info/appointment-booking"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#142F86] transition hover:bg-[#31B4F4]"
              >
                <CalendarDays className="size-4" />
                Book this test
              </Link>
              <a
                href={siteConfig.phone.href}
                className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-bold text-white ring-1 ring-white/35 transition hover:ring-white"
              >
                {siteConfig.phone.display}
              </a>
            </div>
          </div>

          <p className="text-xs leading-relaxed text-[#142F86]/55">
            This page describes a service we offer. It is general information, not
            medical advice, and it is not a recommendation that you need this
            test — your doctor decides which investigation is appropriate for your
            symptoms.
          </p>
        </div>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, CalendarDays, Check, Stethoscope } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { siteConfig } from "@/lib/constants/site-config";
import { getAllSpecialtySlugs, getSpecialtyBySlug } from "@/lib/data/specialties";
import { doctorSlug, getDoctorsBySpecialty } from "@/lib/data/doctors";

interface SpecialtyPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllSpecialtySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: SpecialtyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const specialty = getSpecialtyBySlug(slug);
  if (!specialty) return {};
  return {
    title: specialty.name,
    description: specialty.summary,
  };
}

export default async function SpecialtyDetailPage({ params }: SpecialtyPageProps) {
  const { slug } = await params;
  const specialty = getSpecialtyBySlug(slug);

  if (!specialty) {
    notFound();
  }

  /* The department's own consultants, from the doctor roster. This is what makes
     each page specific — and it gives the doctor entries somewhere to be found
     from besides the single long listing page. */
  const team = getDoctorsBySpecialty(specialty.name);

  return (
    <>
      <PageHero
        eyebrow="Specialty"
        title={specialty.name}
        description={specialty.summary}
      />
      <Section>
        <div className="mx-auto max-w-4xl space-y-12">
          <p className="text-lg leading-8 text-[#142F86]/80">{specialty.overview}</p>

          {(specialty.conditions.length > 0 || specialty.services.length > 0) && (
            <div className="grid gap-6 md:grid-cols-2">
              {specialty.conditions.length > 0 && (
                <div className="rounded-2xl bg-white p-5 ring-1 ring-[#142F86]/10 sm:p-6">
                  <h2 className="text-lg font-bold text-[#142F86]">Conditions we see</h2>
                  <ul className="mt-4 space-y-2.5">
                    {specialty.conditions.map((condition) => (
                      <li key={condition} className="flex gap-2.5 text-sm leading-relaxed text-[#142F86]/80">
                        <Check className="mt-0.5 size-4 flex-none text-[#31B4F4]" aria-hidden="true" />
                        {condition}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {specialty.services.length > 0 && (
                <div className="rounded-2xl bg-[#31B4F4]/8 p-5 sm:p-6">
                  <h2 className="text-lg font-bold text-[#142F86]">What we offer</h2>
                  <ul className="mt-4 space-y-2.5">
                    {specialty.services.map((service) => (
                      <li key={service} className="flex gap-2.5 text-sm leading-relaxed text-[#142F86]/80">
                        <Stethoscope className="mt-0.5 size-4 flex-none text-[#142F86]" aria-hidden="true" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          {team.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-[#142F86]">
                {specialty.name} consultants
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {team.map((doctor) => (
                  <Link
                    key={doctor.name}
                    href={`/doctors/${doctorSlug(doctor.name)}`}
                    className="group flex items-start justify-between gap-4 rounded-xl bg-white p-4 ring-1 ring-[#142F86]/10 transition hover:ring-[#31B4F4]"
                  >
                    <span className="min-w-0">
                      <span className="block text-sm font-bold text-[#142F86] group-hover:underline">
                        {doctor.name}
                      </span>
                      <span className="mt-1 block text-xs text-[#142F86]/65">{doctor.title}</span>
                      {doctor.experience && (
                        <span className="mt-1.5 block text-xs font-semibold text-[#142F86]/55">
                          {doctor.experience}
                        </span>
                      )}
                    </span>
                    <ArrowRight
                      className="mt-1 size-4 flex-none text-[#142F86]/40 transition group-hover:text-[#142F86]"
                      aria-hidden="true"
                    />
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col gap-4 rounded-2xl bg-[#142F86] p-6 text-white sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-lg font-bold">Book a {specialty.name.toLowerCase()} consultation</p>
              <p className="mt-1 text-sm text-white/75">
                Our team will confirm the next available slot, and tell you if any
                preparation is needed.
              </p>
            </div>
            <div className="flex flex-none flex-wrap gap-2">
              <Link
                href="/patient-info/appointment-booking"
                className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#142F86] transition hover:bg-[#31B4F4]"
              >
                <CalendarDays className="size-4" />
                Book an appointment
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
            The information on this page describes the services this department
            offers. It is general information, not medical advice, and it is not a
            substitute for consulting a clinician about your own symptoms.
          </p>
        </div>
      </Section>
    </>
  );
}

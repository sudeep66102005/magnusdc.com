import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, GraduationCap, Stethoscope } from "lucide-react";
import { Section } from "@/components/shared/section";
import { siteConfig } from "@/lib/constants/site-config";
import {
  doctorSlug,
  getAllDoctorSlugs,
  getDoctorBySlug,
  getDoctorsBySpecialty,
} from "@/lib/data/doctors";
import { specialtySlugFor } from "@/lib/data/specialties";

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
/* Only asset URLs take the base path by hand. Anything passed to next/link must
   not, because Link prepends basePath itself — doing both produced the doubled
   /magnusdc.com/magnusdc.com/... links this audit round fixed. */
const photo = (p: string) => encodeURI(`${BP}/assets/${p}`);

interface DoctorPageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllDoctorSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: DoctorPageProps): Promise<Metadata> {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);
  if (!doctor) return {};
  const credentials = doctor.keyQualification ? ` ${doctor.keyQualification}.` : "";
  return {
    title: doctor.name,
    description: `${doctor.name}, ${doctor.title} at ${siteConfig.shortName}, Koramangala.${credentials} Book an appointment.`,
  };
}

function monogram(name: string): string {
  return name
    .replace(/^Dr\.?\s*/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] ?? "")
    .join("")
    .toUpperCase();
}

export default async function DoctorProfilePage({ params }: DoctorPageProps) {
  const { slug } = await params;
  const doctor = getDoctorBySlug(slug);

  if (!doctor) {
    notFound();
  }

  const colleagues = getDoctorsBySpecialty(doctor.specialty).filter(
    (item) => item.name !== doctor.name,
  );
  const specialtyHref = `/specialties/${specialtySlugFor(doctor.specialty)}`;

  return (
    <>
      <section className="border-b border-[#142F86]/12 bg-[#31B4F4]/8 pb-12 pt-28 lg:pb-16 lg:pt-36">
        <div className="mx-auto max-w-5xl px-5 sm:px-8">
          <Link
            href="/doctors"
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#142F86]/70 transition hover:text-[#142F86]"
          >
            <ArrowLeft className="size-3.5" />
            All doctors
          </Link>

          <div className="mt-6 flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-8">
            <div className="size-28 flex-none overflow-hidden rounded-2xl bg-white ring-1 ring-[#142F86]/12 sm:size-36">
              {doctor.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                /* Portraits are taller than wide (hers is 1045x1505) and this
                   frame is square, so the crop is biased upward — the same
                   50% 15% the listing card uses. Centre-cropping would push the
                   face high in the frame. The imagePosition override lets a
                   landscape photo (e.g. Dr. Ajay Hegde 921x659) use 50% 50%. */
                <img
                  src={photo(doctor.image)}
                  alt={doctor.name}
                  className="size-full object-cover"
                  style={{ objectPosition: doctor.imagePosition ?? "50% 15%" }}
                />
              ) : (
                <span className="grid size-full place-items-center text-3xl font-black text-[#142F86]/35">
                  {monogram(doctor.name)}
                </span>
              )}
            </div>

            <div className="min-w-0 flex-1">
              <Link
                href={specialtyHref}
                className="text-xs font-black uppercase tracking-[0.18em] text-[#DA1C29] hover:underline"
              >
                {doctor.specialty}
              </Link>
              <h1 className="mt-2 text-3xl font-black leading-tight tracking-[-0.03em] text-[#142F86] sm:text-4xl">
                {doctor.name}
              </h1>
              <p className="mt-2 text-base text-[#142F86]/75">{doctor.title}</p>
              {doctor.experience && (
                <p className="mt-3 inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-xs font-bold text-[#142F86] ring-1 ring-[#142F86]/12">
                  <Stethoscope className="size-3.5" />
                  {doctor.experience}
                </p>
              )}

              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href="/patient-info/appointment-booking"
                  className="inline-flex items-center gap-2 rounded-full bg-[#142F86] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#31B4F4] hover:text-[#142F86]"
                >
                  <CalendarDays className="size-4" />
                  Book an appointment
                </Link>
                <a
                  href={siteConfig.phone.href}
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#142F86] ring-1 ring-[#142F86]/15 transition hover:ring-[#31B4F4]"
                >
                  Call {siteConfig.phone.display}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Section className="py-12 lg:py-16">
        <div className="mx-auto max-w-5xl space-y-10">
          {doctor.degrees && (
            <div>
              <h2 className="flex items-center gap-2 text-lg font-bold text-[#142F86]">
                <GraduationCap className="size-5" />
                Qualifications
              </h2>
              {/* Semicolon-separated in the source data, one credential per line
                  here so a long list stays readable. */}
              <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[#142F86]/80">
                {doctor.degrees.split(";").map((credential) => (
                  <li key={credential} className="flex gap-2.5">
                    <span aria-hidden="true" className="mt-2 size-1.5 flex-none rounded-full bg-[#31B4F4]" />
                    {credential.trim()}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="rounded-2xl bg-[#31B4F4]/8 p-5 sm:p-6">
            <h2 className="text-lg font-bold text-[#142F86]">
              Consulting at {siteConfig.shortName}
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-[#142F86]/78">
              {doctor.name} consults at our {siteConfig.address.line2.replace("#534/A, ", "")}{" "}
              centre, where imaging, laboratory and consulting rooms sit together
              — so a scan or test ordered during your consultation can usually be
              done the same visit, and the report reaches your consultant
              directly. Appointment times vary by department; our team will
              confirm the next available slot when you request one.
            </p>
            <Link
              href={specialtyHref}
              className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-[#142F86] hover:underline"
            >
              More about {doctor.specialty}
              <ArrowRight className="size-4" />
            </Link>
          </div>

          {colleagues.length > 0 && (
            <div>
              <h2 className="text-lg font-bold text-[#142F86]">
                Other consultants in {doctor.specialty}
              </h2>
              <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {colleagues.map((colleague) => (
                  <Link
                    key={colleague.name}
                    href={`/doctors/${doctorSlug(colleague.name)}`}
                    className="group rounded-xl bg-white p-4 ring-1 ring-[#142F86]/10 transition hover:ring-[#31B4F4]"
                  >
                    <p className="text-sm font-bold text-[#142F86] group-hover:underline">
                      {colleague.name}
                    </p>
                    <p className="mt-1 text-xs text-[#142F86]/65">{colleague.title}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </Section>
    </>
  );
}

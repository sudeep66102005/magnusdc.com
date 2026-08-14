import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Advanced imaging, laboratory medicine, specialist care and women's health — radiologist-led services under one roof in Koramangala.",
};

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const UPLOADS = "/assets/uploads/services";
const img = (file: string) => encodeURI(`${BP}${UPLOADS}/${file}`);

const services = [
  {
    title: "Imaging",
    tagline: "3T MRI, CT and ultrasound. Read by radiologists, same day.",
    href: "/diagnostics",
    desktop: "desktop imaging image.jpeg",
    mobile: "mobile imaging image.jpeg",
  },
  {
    title: "Laboratory",
    tagline: "Full pathology and molecular testing, with reports you can trust.",
    href: "/laboratory",
    desktop: "desktop image of Laboratory.jpeg",
    mobile: "mobile image of laboratory.jpeg",
  },
  {
    title: "Specialist Care",
    tagline: "Consultants across every major specialty, in one place.",
    href: "/specialties",
    desktop: "desktop image of Specialist Care.jpeg",
    mobile: "mobile image of Specialist Care.jpeg",
  },
  {
    title: "Women's & Fetal Medicine",
    tagline: "Care for every life stage, from fertility to fetal wellbeing.",
    href: "/specialties",
    desktop: "desktop image of Women's & Fetal Medicine.jpeg",
    mobile: "mobile image of Women's & Fetal Medicine.jpeg",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Services"
        title="Everything your diagnosis needs, under one roof"
        description="From advanced imaging and laboratory medicine to specialist and women's health care — explore what we offer."
      />

      <section className="px-5 pb-16 sm:px-8">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative flex min-h-[26rem] flex-col justify-between overflow-hidden rounded-2xl bg-[#142F86] sm:min-h-[32rem]"
            >
              <picture>
                <source media="(min-width: 768px)" srcSet={img(s.desktop)} />
                <img
                  src={img(s.mobile)}
                  alt={s.title}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 size-full object-cover transition duration-700 group-hover:scale-105"
                />
              </picture>

              <span
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-black/65"
              />

              <header className="relative z-10 p-6 sm:p-8">
                <h2 className="text-3xl font-black tracking-[-0.035em] text-white sm:text-4xl">
                  {s.title}
                </h2>
                <p className="mt-3 max-w-sm text-sm font-bold leading-6 text-white/90 sm:text-base">
                  {s.tagline}
                </p>
              </header>

              <footer className="relative z-10 flex flex-col gap-3 p-6 sm:flex-row sm:p-8">
                <Link
                  href={s.href}
                  className="inline-flex h-12 flex-1 items-center justify-center gap-2 rounded-full bg-[#142F86] px-6 text-sm font-black text-white transition hover:bg-[#31B4F4] hover:text-[#142F86]"
                >
                  Explore More
                  <ArrowUpRight className="size-4" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-12 flex-1 items-center justify-center rounded-full bg-white px-6 text-sm font-black text-[#142F86] transition hover:bg-[#31B4F4] hover:text-white"
                >
                  Contact Us
                </Link>
              </footer>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

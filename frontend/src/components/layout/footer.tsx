import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Users,
} from "lucide-react";
import { siteConfig } from "@/lib/constants/site-config";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const serviceLinks = [
  { label: "3T MRI", href: "/diagnostics/mri" },
  { label: "CT Scan", href: "/diagnostics/ct-scan" },
  { label: "Ultrasound & Doppler", href: "/diagnostics/ultrasound" },
  { label: "Laboratory", href: "/laboratory" },
  { label: "Health Packages", href: "/health-packages" },
];

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Specialties", href: "/specialties" },
  { label: "For corporates", href: "/for-corporates" },
  { label: "Patient information", href: "/patient-info" },
  { label: "Medical library", href: "/medical-library" },
  { label: "Contact", href: "/contact" },
];

/* Three reassurance items on the right of the call-to-action band. */
const TRUST = [
  { icon: ShieldCheck, line1: "Trusted", line2: "by Thousands" },
  { icon: Users, line1: "Expert", line2: "Radiologists" },
  { icon: Clock, line1: "Quick & Accurate", line2: "Reports" },
];

/**
 * Social marks as inline SVG rather than lucide imports. lucide has moved its
 * brand icons between releases, and a name that disappears is a failed build —
 * these paths cannot break. YouTube is absent because `siteConfig.social` has no
 * URL for it; inventing one would ship a link to the wrong channel.
 */
const SOCIALS = [
  {
    label: "Facebook",
    href: siteConfig.social.facebook,
    path: "M13.5 9H15V6.5h-1.5c-1.7 0-3 1.3-3 3V11H9v2.5h1.5V19h2.5v-5.5H15L15.5 11h-2.5V9.5c0-.3.2-.5.5-.5Z",
  },
  {
    label: "Instagram",
    href: siteConfig.social.instagram,
    path: "M8.5 4.5h7A4 4 0 0 1 19.5 8.5v7a4 4 0 0 1-4 4h-7a4 4 0 0 1-4-4v-7a4 4 0 0 1 4-4Zm3.5 4.2a3.3 3.3 0 1 0 0 6.6 3.3 3.3 0 0 0 0-6.6Zm4.3-1.1a.9.9 0 1 0 0 1.8.9.9 0 0 0 0-1.8Z",
  },
  {
    label: "LinkedIn",
    href: siteConfig.social.linkedin,
    path: "M7.2 9.6h2.2V18H7.2V9.6Zm1.1-3.4a1.3 1.3 0 1 1 0 2.6 1.3 1.3 0 0 1 0-2.6ZM11.2 9.6h2.1v1.1a2.7 2.7 0 0 1 2.3-1.2c1.8 0 2.6 1.1 2.6 3.1V18h-2.2v-4.9c0-1-.4-1.6-1.3-1.6-.8 0-1.3.6-1.3 1.6V18h-2.2V9.6Z",
  },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto text-white">
      {/* ---- CALL TO ACTION BAND ---------------------------------------------
          Lighter than the columns below it, as in the design. The two soft
          highlights stand in for the watermark logo mark on the right: the repo
          only has the full wordmark, and stretching that behind the copy would
          read as stray text. */}
      <div className="relative isolate overflow-hidden bg-[linear-gradient(100deg,#0C3178_0%,#14459B_38%,#1257B0_62%,#0C3178_100%)]">
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -right-24 -top-32 size-[28rem] rounded-full bg-white/[0.07] blur-2xl"
        />
        <span
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 right-24 size-[22rem] rounded-full bg-[#31B4F4]/10 blur-2xl"
        />

        <div className="relative mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-8">
          <div>
            <p className="text-[0.7rem] font-black uppercase tracking-[0.22em] text-[#31B4F4]">
              Clarity starts here
            </p>
            {/* Two lines, second in sky blue. */}
            <h2 className="mt-3 max-w-xl text-3xl font-bold leading-[1.15] tracking-[-0.025em] text-white sm:text-[2.1rem]">
              Need help choosing the right
              <span className="block text-[#31B4F4]">scan, test or health package?</span>
            </h2>
            <p className="mt-4 flex items-start gap-2.5 text-sm text-white/75">
              <span aria-hidden="true" className="mt-2.5 h-px w-4 flex-none bg-white/60" />
              Our team is here to guide you with the right diagnostics for your needs.
            </p>
          </div>

          <div className="lg:pt-1">
            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href="/patient-info/appointment-booking"
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full bg-white px-6 text-sm font-bold text-[#142F86] transition hover:bg-[#31B4F4] hover:text-[#0C3178]"
              >
                <CalendarDays className="size-4" />
                Book Appointment
                <ArrowRight className="size-4" />
              </Link>
              <a
                href={siteConfig.phone.href}
                className="inline-flex h-12 items-center justify-center gap-2.5 rounded-full border border-white/35 px-6 text-sm font-bold text-white transition hover:bg-white/10"
              >
                <Phone className="size-4" />
                Call Us
              </a>
            </div>

            <ul className="mt-7 flex flex-wrap gap-x-7 gap-y-4 lg:justify-end">
              {TRUST.map(({ icon: Icon, line1, line2 }) => (
                <li key={line1} className="flex items-center gap-2.5">
                  <span className="grid size-8 flex-none place-items-center rounded-full bg-white/12 text-[#8FD3FA]">
                    <Icon className="size-4" />
                  </span>
                  <span className="text-[0.7rem] font-semibold leading-tight text-white">
                    {line1}
                    <span className="block font-normal text-white/70">{line2}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* ---- COLUMNS ---- */}
      <div className="bg-[#0A2662]">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.25fr_0.7fr_0.7fr_1fr]">
          <div>
            {/* No white plate behind the logo. The source PNG is navy on
                transparent, which would all but vanish on this navy, so it is
                rendered as a white mono mark: brightness-0 makes every opaque
                pixel black, invert turns it white, transparency is preserved.
                Drop a reversed/white logo file into /assets/logo and this can
                use it directly, with the red dot and sky tagline intact. */}
            <div className="relative h-[58px] w-[210px]">
              <Image
                src={`${basePath}/assets/logo/clarus-magnus-logo.png`}
                alt="Clarus Magnus Health and Diagnostics"
                fill
                sizes="210px"
                className="object-contain object-left brightness-0 invert"
              />
            </div>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/70">
              Radiologist-led advanced diagnostics, laboratory services and
              multispecialty care—delivered with precision and compassion in
              Koramangala.
            </p>
            <div className="mt-7 space-y-3 text-sm text-white/80">
              <a
                href={siteConfig.address.mapsHref}
                target="_blank"
                rel="noreferrer"
                className="flex items-start gap-3 transition hover:text-white"
              >
                <MapPin className="mt-0.5 size-4 shrink-0 text-[#31B4F4]" />
                <span>
                  {siteConfig.address.line2}, {siteConfig.address.city}{" "}
                  {siteConfig.address.zip}
                </span>
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 transition hover:text-white"
              >
                <Mail className="size-4 text-[#31B4F4]" />
                {siteConfig.email}
              </a>
            </div>

            {/* Social row, as in the design. */}
            <ul className="mt-7 flex gap-3">
              {SOCIALS.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={social.label}
                    className="grid size-9 place-items-center rounded-full bg-white/10 text-white/85 transition hover:bg-[#31B4F4] hover:text-[#0A2662]"
                  >
                    <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
                      <path d={social.path} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.7rem] font-black uppercase tracking-[0.18em] text-[#31B4F4]">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/75 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.7rem] font-black uppercase tracking-[0.18em] text-[#31B4F4]">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-white/75 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[0.7rem] font-black uppercase tracking-[0.18em] text-[#31B4F4]">
              Hours &amp; contact
            </h3>
            <div className="mt-5 text-sm text-white/75">
              <p className="flex gap-3">
                <Clock3 className="mt-0.5 size-4 shrink-0 text-[#31B4F4]" />
                <span className="leading-7">
                  {siteConfig.hours.imaging}
                  <br />
                  {siteConfig.hours.laboratory}
                  <br />
                  {siteConfig.hours.ultrasound}
                  <br />
                  {siteConfig.hours.xray}
                </span>
              </p>
              {/* Rule between the hours and the two service notes, as drawn. */}
              <hr className="my-4 border-white/15" />
              <p className="text-xs font-semibold leading-6 text-[#31B4F4]">
                {siteConfig.services.homeCollection}
                <br />
                {siteConfig.services.ambulance}
              </p>
              <a
                href={siteConfig.phone.href}
                className="mt-5 flex items-center gap-3 text-lg font-bold text-white transition hover:text-[#31B4F4]"
              >
                <Phone className="size-4 text-[#31B4F4]" />
                {siteConfig.phone.display}
              </a>
              <p
                aria-hidden="true"
                className="mt-8 text-right text-xl italic leading-tight text-[#4FA3E3]"
              >
                Seeing
                <span className="block pl-4">Health</span>
                <span className="block pl-8">More Clearly</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---- BOTTOM BAR ---- */}
      <div className="bg-[#09204F]">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          {/* Pipe separated, and Sitemap now resolves — app/sitemap.ts generates
              /sitemap.xml at build time. */}
          <nav className="flex items-center gap-3">
            <Link href="/privacy-policy" className="transition hover:text-white">
              Privacy
            </Link>
            <span aria-hidden="true" className="text-white/25">|</span>
            <Link href="/terms-and-conditions" className="transition hover:text-white">
              Terms
            </Link>
            <span aria-hidden="true" className="text-white/25">|</span>
            <a href={`${basePath}/sitemap.xml`} className="transition hover:text-white">
              Sitemap
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}

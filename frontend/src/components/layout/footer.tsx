import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Clock3, Mail, MapPin, Phone } from "lucide-react";
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

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto bg-[#091a4d] text-white">
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8ed7fa]">Clarity starts here</p>
            <h2 className="mt-3 max-w-2xl text-3xl font-black tracking-[-0.035em] sm:text-4xl">Need help choosing the right scan, test or health package?</h2>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              href="/patient-info/appointment-booking"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-6 text-sm font-black text-[#142F86] transition hover:bg-[#EAF7FE]"
            >
              Book appointment
              <ArrowUpRight className="size-4" />
            </Link>
            <a
              href={siteConfig.phone.href}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/20 px-6 text-sm font-black transition hover:bg-white/10"
            >
              <Phone className="size-4" />
              Call us
            </a>
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.25fr_0.7fr_0.7fr_1fr]">
        <div>
          <div className="relative h-[66px] w-[235px] overflow-hidden rounded-xl bg-white px-3">
            <Image
              src={`${basePath}/assets/logo/clarus-magnus-logo.png`}
              alt="Clarus Magnus Health and Diagnostics"
              fill
              sizes="235px"
              className="object-contain p-2"
            />
          </div>
          <p className="mt-6 max-w-sm text-sm leading-7 text-white/64">Radiologist-led advanced diagnostics, laboratory services and multispecialty care—delivered with precision and compassion in Koramangala.</p>
          <div className="mt-7 space-y-3 text-sm text-white/72">
            <a href={siteConfig.address.mapsHref} target="_blank" rel="noreferrer" className="flex items-start gap-3 transition hover:text-white">
              <MapPin className="mt-0.5 size-4 shrink-0 text-[#31B4F4]" />
              <span>{siteConfig.address.line2}, {siteConfig.address.city} {siteConfig.address.zip}</span>
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 transition hover:text-white">
              <Mail className="size-4 text-[#31B4F4]" />
              {siteConfig.email}
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.18em] text-[#8ed7fa]">Services</h3>
          <ul className="mt-5 space-y-3">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/65 transition hover:text-white">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.18em] text-[#8ed7fa]">Explore</h3>
          <ul className="mt-5 space-y-3">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="text-sm text-white/65 transition hover:text-white">{link.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-black uppercase tracking-[0.18em] text-[#8ed7fa]">Hours &amp; contact</h3>
          <div className="mt-5 space-y-4 text-sm text-white/65">
            <p className="flex gap-3"><Clock3 className="mt-0.5 size-4 shrink-0 text-[#31B4F4]" /><span>{siteConfig.hours.imaging}<br />{siteConfig.hours.laboratory}<br />{siteConfig.hours.ultrasound}<br />{siteConfig.hours.xray}</span></p>
            <p className="text-xs font-bold leading-5 text-[#8ed7fa]">{siteConfig.services.homeCollection}<br />{siteConfig.services.ambulance}</p>
            <a href={siteConfig.phone.href} className="flex items-center gap-3 text-base font-black text-white transition hover:text-[#8ed7fa]">
              <Phone className="size-4 text-[#31B4F4]" />
              {siteConfig.phone.display}
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>© {year} {siteConfig.name}. All rights reserved.</p>
          <nav className="flex gap-5">
            <Link href="/privacy-policy" className="transition hover:text-white">Privacy</Link>
            <Link href="/terms-and-conditions" className="transition hover:text-white">Terms</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}

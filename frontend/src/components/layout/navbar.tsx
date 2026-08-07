"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import {
  Ambulance,
  CalendarDays,
  ChevronDown,
  FileText,
  Globe2,
  HeartPulse,
  Menu,
  Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { siteConfig } from "@/lib/constants/site-config";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

type HeaderLink = {
  label: string;
  href: string;
};

type HeaderGroup = HeaderLink & {
  links?: HeaderLink[];
};

type QuickAction = HeaderLink & {
  shortLabel: string;
  icon: typeof FileText;
  className: string;
};

const quickActions: QuickAction[] = [
  {
    label: "Access Lab Reports",
    shortLabel: "Lab Reports",
    href: "/patient-info/patient-support#reports",
    icon: FileText,
    className:
      "border border-[#16a8bb] bg-white text-[#142F86] hover:bg-[#edfafd]",
  },
  {
    label: "Appointment",
    shortLabel: "Appointment",
    href: "/patient-info/appointment-booking",
    icon: CalendarDays,
    className: "bg-[#08a7b4] text-white hover:bg-[#078f9b]",
  },
  {
    label: "Emergency",
    shortLabel: "Emergency",
    href: siteConfig.phone.href,
    icon: Ambulance,
    className: "bg-[#DA1C29] text-white hover:bg-[#bf1723]",
  },
  {
    label: "Book Appointments & Health Checkup Packages",
    shortLabel: "Health Packages",
    href: "/health-packages",
    icon: HeartPulse,
    className: "bg-[#087f98] text-white hover:bg-[#066b81]",
  },
];

const navigation: HeaderGroup[] = [
  {
    label: "Medical Library",
    href: "/medical-library",
  },
  {
    label: "Centres of Excellence",
    href: "/diagnostics",
    links: [
      { label: "3 Tesla MRI", href: "/diagnostics/mri" },
      { label: "Multislice CT", href: "/diagnostics/ct-scan" },
      {
        label: "Fetal Medicine",
        href: "/diagnostics/fetal-medicine-pregnancy-scans",
      },
      { label: "Laboratory Medicine", href: "/laboratory" },
    ],
  },
  {
    label: "Doctors",
    href: "/specialties",
    links: [
      { label: "All Specialties", href: "/specialties" },
      {
        label: "Internal Medicine",
        href: "/specialties/physician-internal-medicine",
      },
      { label: "Cardiology", href: "/specialties/cardiology" },
      { label: "Orthopedics", href: "/specialties/orthopedics" },
      {
        label: "Gynecology & Obstetrics",
        href: "/specialties/gynecology-and-obstetrics",
      },
      { label: "Neurology", href: "/specialties/neurology" },
      { label: "Pediatrics", href: "/specialties/pediatrics" },
    ],
  },
  {
    label: "Diagnostics",
    href: "/diagnostics",
    links: [
      { label: "All Diagnostics", href: "/diagnostics" },
      { label: "MRI", href: "/diagnostics/mri" },
      { label: "CT Scan", href: "/diagnostics/ct-scan" },
      { label: "Ultrasound", href: "/diagnostics/ultrasound" },
      { label: "Doppler", href: "/diagnostics/doppler" },
      { label: "Digital X-ray", href: "/diagnostics/x-ray" },
      { label: "Fibroscan", href: "/diagnostics/fibroscan" },
      { label: "OPG & CBCT", href: "/diagnostics/opg-cbct" },
      {
        label: "Advanced Procedures",
        href: "/diagnostics/advanced-procedures",
      },
    ],
  },
  {
    label: "Laboratory",
    href: "/laboratory",
    links: [
      { label: "Laboratory Overview", href: "/laboratory" },
      { label: "Routine Pathology", href: "/laboratory/routine-pathology" },
      { label: "Biochemistry", href: "/laboratory/biochemistry" },
      { label: "Microbiology", href: "/laboratory/microbiology" },
      { label: "Hormonal Testing", href: "/laboratory/hormonal-testing" },
      {
        label: "Genetic & Molecular Diagnostics",
        href: "/laboratory/genetic-molecular-diagnostics",
      },
      {
        label: "Home Sample Collection",
        href: "/laboratory/home-sample-collection",
      },
    ],
  },
  {
    label: "Health Packages",
    href: "/health-packages",
    links: [
      { label: "View All Packages", href: "/health-packages" },
      { label: "Routine Health", href: "/health-packages/checkup" },
      { label: "Diabetic Profiles", href: "/health-packages/diabetic" },
      { label: "Cardiac Profiles", href: "/health-packages/cardiac" },
      {
        label: "Women’s Health",
        href: "/health-packages/womens-health",
      },
      {
        label: "Reproductive Health",
        href: "/health-packages/reproductive-health",
      },
      { label: "Specialised Profiles", href: "/health-packages/specialised" },
      {
        label: "Corporate Health",
        href: "/health-packages/corporate-health",
      },
    ],
  },
  {
    label: "For Corporates",
    href: "/for-corporates",
    links: [
      {
        label: "Employee Health Checkups",
        href: "/for-corporates/employee-health-checkups",
      },
      {
        label: "Diagnostic Partnerships",
        href: "/for-corporates/diagnostic-partnerships",
      },
    ],
  },
  {
    label: "Patient Info",
    href: "/patient-info",
    links: [
      {
        label: "Appointment Booking",
        href: "/patient-info/appointment-booking",
      },
      {
        label: "Patient Support & Reports",
        href: "/patient-info/patient-support",
      },
      { label: "Contact & Directions", href: "/contact" },
    ],
  },
];

function QuickActionLink({ action, mobile = false }: { action: QuickAction; mobile?: boolean }) {
  const Icon = action.icon;
  const className = mobile
    ? `flex min-h-16 flex-col items-center justify-center gap-1 rounded-md px-2 text-center text-[11px] font-black ${action.className}`
    : `flex h-11 items-center justify-center gap-2 rounded-[4px] px-3 text-xs font-black transition-colors 2xl:px-4 ${action.className}`;
  const content = (
    <>
      <Icon className={mobile ? "size-4" : "size-4 shrink-0"} aria-hidden="true" />
      <span className={mobile ? "" : "hidden 2xl:inline"}>{mobile ? action.shortLabel : action.label}</span>
      {!mobile && <span className="2xl:hidden">{action.shortLabel}</span>}
    </>
  );

  if (action.href.startsWith("tel:")) {
    return (
      <a href={action.href} className={className}>
        {content}
      </a>
    );
  }

  return (
    <Link href={action.href} className={className}>
      {content}
    </Link>
  );
}

function DesktopMenuItem({ item }: { item: HeaderGroup }) {
  if (!item.links) {
    return (
      <Link
        href={item.href}
        className="flex h-full items-center whitespace-nowrap px-2.5 text-[12px] font-bold text-white transition-colors hover:bg-white/15 focus-visible:bg-white/15 focus-visible:outline-none 2xl:px-3.5 2xl:text-[13px]"
      >
        {item.label}
      </Link>
    );
  }

  return (
    <div className="group relative flex h-full items-stretch">
      <Link
        href={item.href}
        aria-haspopup="true"
        className="flex h-full items-center gap-1 whitespace-nowrap px-2.5 text-[12px] font-bold text-white transition-colors hover:bg-white/15 focus-visible:bg-white/15 focus-visible:outline-none 2xl:px-3.5 2xl:text-[13px]"
      >
        {item.label}
        <ChevronDown
          className="size-3 transition-transform duration-150 group-hover:rotate-180 group-focus-within:rotate-180"
          aria-hidden="true"
        />
      </Link>

      <div className="invisible absolute left-0 top-full z-[80] min-w-64 translate-y-1 pt-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
        <ul className="max-h-[65vh] overflow-y-auto border-t-[3px] border-[#0aaeb1] bg-white py-1.5 shadow-[0_12px_28px_rgba(15,47,86,0.28)]">
          {item.links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="flex items-center justify-between gap-6 border-b border-slate-100 px-4 py-2.5 text-sm font-semibold text-slate-700 transition-colors last:border-0 hover:bg-[#eaf9fb] hover:text-[#087f98] focus-visible:bg-[#eaf9fb] focus-visible:text-[#087f98] focus-visible:outline-none"
              >
                {link.label}
                <span className="text-[#0aaeb1]" aria-hidden="true">
                  ›
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_3px_12px_rgba(15,47,86,0.18)]">
      <div className="border-b border-slate-100 bg-white">
        <div className="mx-auto flex h-[70px] max-w-[1440px] items-center justify-between gap-5 px-4 sm:px-8">
          <Link
            href="/"
            className="relative block h-[48px] w-[170px] shrink-0 sm:h-[52px] sm:w-[190px]"
            aria-label="Clarus Magnus home"
          >
            <Image
              src={`${basePath}/assets/logo/clarus-magnus-logo.png`}
              alt="Clarus Magnus Health and Diagnostics"
              fill
              priority
              sizes="(max-width: 639px) 170px, 190px"
              className="object-contain object-left"
            />
          </Link>

          <div className="hidden items-center gap-2 xl:flex">
            {quickActions.map((action) => (
              <QuickActionLink key={action.label} action={action} />
            ))}
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <a
              href={siteConfig.phone.href}
              className="hidden size-10 items-center justify-center rounded-full bg-[#eaf8fc] text-[#142F86] sm:flex"
              aria-label={`Call ${siteConfig.phone.display}`}
            >
              <Phone className="size-4" />
            </a>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-md border-[#142F86]/20 text-[#142F86]"
                    aria-label="Open navigation menu"
                  />
                }
              >
                <Menu className="size-5" />
              </SheetTrigger>

              <SheetContent
                side="right"
                className="w-[min(390px,92vw)] gap-0 overflow-y-auto border-l-[#dbe5f2] bg-white p-0"
              >
                <SheetHeader className="border-b border-[#dbe5f2] px-5 py-4">
                  <SheetTitle className="pr-10 text-left font-black text-[#142F86]">
                    Explore Clarus Magnus
                  </SheetTitle>
                </SheetHeader>

                <div className="grid grid-cols-2 gap-2 border-b border-[#dbe5f2] bg-[#f6fbfd] p-3">
                  {quickActions.map((action) => (
                    <div key={action.label} onClick={() => setMobileOpen(false)}>
                      <QuickActionLink action={action} mobile />
                    </div>
                  ))}
                </div>

                <nav className="px-5 py-3" aria-label="Mobile navigation">
                  {navigation.map((item) =>
                    item.links ? (
                      <details key={item.label} className="group border-b border-slate-100">
                        <summary className="flex cursor-pointer list-none items-center justify-between py-3.5 text-sm font-black text-[#263858] marker:content-none">
                          {item.label}
                          <ChevronDown className="size-4 text-[#08a7b4] transition-transform group-open:rotate-180" />
                        </summary>
                        <div className="mb-3 border-l-2 border-[#08a7b4]/30 pl-3">
                          <Link
                            href={item.href}
                            onClick={() => setMobileOpen(false)}
                            className="block py-2 text-xs font-black text-[#142F86]"
                          >
                            View {item.label}
                          </Link>
                          {item.links.map((link) => (
                            <Link
                              key={link.href}
                              href={link.href}
                              onClick={() => setMobileOpen(false)}
                              className="block py-2 text-sm font-semibold text-slate-600 hover:text-[#087f98]"
                            >
                              {link.label}
                            </Link>
                          ))}
                        </div>
                      </details>
                    ) : (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="block border-b border-slate-100 py-3.5 text-sm font-black text-[#263858]"
                      >
                        {item.label}
                      </Link>
                    ),
                  )}

                  <div className="mt-4 rounded-md bg-gradient-to-r from-[#0b5ba8] to-[#08a7a7] p-4 text-white">
                    <p className="text-xs font-black uppercase tracking-[0.14em] text-white/70">
                      Need help?
                    </p>
                    <a
                      href={siteConfig.phone.href}
                      className="mt-2 flex items-center gap-2 text-sm font-black"
                    >
                      <Phone className="size-4" />
                      {siteConfig.phone.display}
                    </a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>

      <div className="hidden h-11 bg-gradient-to-r from-[#075aa8] via-[#087fa5] to-[#08aaa6] xl:block">
        <div className="mx-auto flex h-full max-w-[1440px] items-stretch justify-between px-8">
          <nav className="flex h-full items-stretch" aria-label="Primary navigation">
            {navigation.map((item) => (
              <DesktopMenuItem key={item.label} item={item} />
            ))}
          </nav>

          <div className="flex h-full shrink-0 items-center border-l border-white/20">
            <span className="flex h-full items-center gap-1.5 px-3 text-xs font-bold text-white">
              <Globe2 className="size-4" aria-hidden="true" />
              EN
            </span>
            <a
              href={siteConfig.phone.href}
              className="flex h-full items-center gap-1.5 border-l border-white/20 px-3 text-xs font-bold text-white transition-colors hover:bg-white/15"
            >
              <Phone className="size-4" aria-hidden="true" />
              Call
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

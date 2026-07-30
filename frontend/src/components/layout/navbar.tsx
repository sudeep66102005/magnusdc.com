"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Ambulance,
  ArrowRight,
  CalendarDays,
  ChevronDown,
  Clock3,
  FileText,
  Globe2,
  HeartPulse,
  MapPin,
  Menu,
  Microscope,
  Phone,
  ScanLine,
  Search,
  ShieldCheck,
  Stethoscope,
  X,
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
  description?: string;
};

type HeaderGroup = {
  label: string;
  href: string;
  eyebrow: string;
  description: string;
  icon: typeof ScanLine;
  links: HeaderLink[];
};

const headerGroups: HeaderGroup[] = [
  {
    label: "Centres of Excellence",
    href: "/diagnostics",
    eyebrow: "Integrated expertise",
    description: "Advanced technology and specialist interpretation, connected under one roof.",
    icon: ShieldCheck,
    links: [
      { label: "3 Tesla MRI", href: "/diagnostics/mri", description: "High-resolution neurological, body and joint imaging" },
      { label: "Multislice CT", href: "/diagnostics/ct-scan", description: "Fast cross-sectional and angiographic imaging" },
      { label: "Fetal Medicine", href: "/diagnostics/fetal-medicine-pregnancy-scans", description: "Specialist pregnancy imaging and fetal assessment" },
      { label: "Laboratory Medicine", href: "/laboratory", description: "Routine, specialised and molecular diagnostics" },
    ],
  },
  {
    label: "Diagnostics",
    href: "/diagnostics",
    eyebrow: "Precision imaging",
    description: "Explore the centre’s complete radiology and diagnostic capabilities.",
    icon: ScanLine,
    links: [
      { label: "MRI", href: "/diagnostics/mri" },
      { label: "CT Scan", href: "/diagnostics/ct-scan" },
      { label: "Ultrasound", href: "/diagnostics/ultrasound" },
      { label: "Doppler", href: "/diagnostics/doppler" },
      { label: "Digital X-ray", href: "/diagnostics/x-ray" },
      { label: "Fibroscan", href: "/diagnostics/fibroscan" },
      { label: "OPG & CBCT", href: "/diagnostics/opg-cbct" },
      { label: "Advanced Procedures", href: "/diagnostics/advanced-procedures" },
    ],
  },
  {
    label: "Doctors",
    href: "/specialties",
    eyebrow: "Multispecialty care",
    description: "Find the right specialty and coordinate consultation with diagnostics.",
    icon: Stethoscope,
    links: [
      { label: "Internal Medicine", href: "/specialties/physician-internal-medicine" },
      { label: "Cardiology", href: "/specialties/cardiology" },
      { label: "Orthopedics", href: "/specialties/orthopedics" },
      { label: "Gynecology & Obstetrics", href: "/specialties/gynecology-and-obstetrics" },
      { label: "Neurology", href: "/specialties/neurology" },
      { label: "Pediatrics", href: "/specialties/pediatrics" },
      { label: "Gastroenterology", href: "/specialties/medical-gastroenterology" },
      { label: "View all specialties", href: "/specialties" },
    ],
  },
  {
    label: "Health Packages",
    href: "/health-packages",
    eyebrow: "Preventive health",
    description: "Transparent packages from routine screening to focused risk assessment.",
    icon: HeartPulse,
    links: [
      { label: "Routine Health", href: "/health-packages/checkup" },
      { label: "Diabetic Profiles", href: "/health-packages/diabetic" },
      { label: "Cardiac Profiles", href: "/health-packages/cardiac" },
      { label: "Women’s Health", href: "/health-packages/womens-health" },
      { label: "Reproductive Health", href: "/health-packages/reproductive-health" },
      { label: "Specialised Profiles", href: "/health-packages/specialised" },
      { label: "Corporate Health", href: "/health-packages/corporate-health" },
      { label: "View every package", href: "/health-packages" },
    ],
  },
];

const directNav: HeaderLink[] = [
  { label: "Medical Library", href: "/medical-library" },
  { label: "For Corporates", href: "/for-corporates" },
  { label: "About", href: "/about" },
];

const nearbyAreas = [
  "Koramangala",
  "HSR Layout",
  "BTM Layout",
  "Ejipura",
  "Adugodi",
  "Sarjapur Road",
  "Indiranagar",
  "Bellandur",
  "Electronic City",
];

const searchItems: HeaderLink[] = [
  ...headerGroups.flatMap((group) => [{ label: group.label, href: group.href }, ...group.links]),
  ...directNav,
  { label: "Access Lab Reports", href: "/patient-info/patient-support#reports" },
  { label: "Book Appointment", href: "/patient-info/appointment-booking" },
  { label: "Contact & Directions", href: "/contact" },
];

function DesktopDropdown({ group }: { group: HeaderGroup }) {
  const Icon = group.icon;
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group relative flex h-full items-center"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <Link
        href={group.href}
        aria-expanded={open}
        className="flex h-full items-center gap-1.5 border-b-2 border-transparent px-3 text-[13px] font-black text-[#32415b] transition hover:border-[#31B4F4] hover:text-[#142F86] focus-visible:border-[#31B4F4] focus-visible:text-[#142F86] focus-visible:outline-none"
      >
        {group.label}
        <ChevronDown className={`size-3.5 transition duration-300 ${open ? "rotate-180" : ""}`} />
      </Link>
      <div className={`absolute left-0 top-full z-[70] w-[620px] pt-3 transition duration-300 ease-out ${open ? "visible translate-y-0 opacity-100" : "invisible translate-y-3 opacity-0"}`}>
        <div className="grid grid-cols-[0.8fr_1.2fr] overflow-hidden rounded-3xl border border-[#d8e3f0] bg-white shadow-[0_28px_80px_-28px_rgba(10,31,87,0.42)]">
          <div className="bg-[#102A75] p-7 text-white">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-white/10 text-[#8ed7fa]">
              <Icon className="size-5" />
            </span>
            <p className="mt-6 text-[11px] font-black uppercase tracking-[0.18em] text-[#8ed7fa]">{group.eyebrow}</p>
            <p className="mt-3 text-lg font-black leading-snug">{group.label}</p>
            <p className="mt-3 text-sm leading-6 text-white/68">{group.description}</p>
            <Link href={group.href} className="mt-6 inline-flex items-center gap-2 text-sm font-black text-white">
              Explore overview <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-1 p-4">
            {group.links.map((link) => (
              <Link
                key={`${group.label}-${link.label}`}
                href={link.href}
                className="group/link rounded-2xl px-4 py-3 transition hover:bg-[#eef8fe] focus-visible:bg-[#eef8fe] focus-visible:outline-none"
              >
                <span className="flex items-center justify-between gap-2 text-sm font-black text-[#20345b] group-hover/link:text-[#142F86]">
                  {link.label}
                  <ArrowRight className="size-3.5 shrink-0 text-[#31B4F4] opacity-0 transition group-hover/link:translate-x-0.5 group-hover/link:opacity-100" />
                </span>
                {link.description && <span className="mt-1 block text-xs leading-5 text-[#718097]">{link.description}</span>}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function LocationMenu() {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="group relative h-full"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
      onFocus={() => setOpen(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpen(false);
      }}
    >
      <button
        type="button"
        onClick={() => setOpen((current) => !current)}
        className="flex h-full items-center gap-2 text-left text-white/82 transition hover:text-white focus-visible:text-white focus-visible:outline-none"
        aria-label="View centre location and nearby areas"
        aria-expanded={open}
      >
        <span className="flex size-7 items-center justify-center rounded-full bg-white/10 text-[#8ed7fa]">
          <MapPin className="size-3.5" />
        </span>
        <span>
          <span className="block text-[9px] font-black uppercase tracking-[0.16em] text-white/50">Our location</span>
          <span className="flex items-center gap-1 text-xs font-black">Koramangala, Bengaluru <ChevronDown className="size-3" /></span>
        </span>
      </button>
      <div className={`absolute left-0 top-full z-[80] w-[440px] pt-3 transition duration-300 ${open ? "visible translate-y-0 opacity-100" : "invisible translate-y-3 opacity-0"}`}>
        <div className="rounded-3xl border border-[#d7e3f1] bg-white p-6 text-[#263858] shadow-[0_28px_80px_-28px_rgba(10,31,87,0.48)]">
          <div className="flex items-start gap-4">
            <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#EAF7FE] text-[#142F86]">
              <MapPin className="size-5" />
            </span>
            <div>
              <p className="font-black text-[#142F86]">Clarus Magnus, Koramangala</p>
              <p className="mt-1 text-sm leading-6 text-[#68778e]">{siteConfig.address.line2}, {siteConfig.address.city} {siteConfig.address.zip}</p>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-2 gap-2 rounded-2xl bg-[#f5f9ff] p-4 text-xs font-bold text-[#56667e]">
            <span className="flex items-center gap-2"><Clock3 className="size-3.5 text-[#31B4F4]" /> MRI / CT: 24/7</span>
            <span className="flex items-center gap-2"><Microscope className="size-3.5 text-[#31B4F4]" /> Lab: 7:00–20:30</span>
          </div>
          <p className="mt-5 text-[10px] font-black uppercase tracking-[0.17em] text-[#DA1C29]">Conveniently serving</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {nearbyAreas.map((area) => <span key={area} className="rounded-full border border-[#dce5f1] px-2.5 py-1 text-[11px] font-bold text-[#596980]">{area}</span>)}
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <a href={siteConfig.address.mapsHref} target="_blank" rel="noreferrer" className="inline-flex h-10 items-center justify-center rounded-full bg-[#142F86] px-4 text-xs font-black text-white transition hover:bg-[#0f266f]">Get directions</a>
            <Link href="/contact" className="inline-flex h-10 items-center justify-center rounded-full border border-[#142F86]/15 px-4 text-xs font-black text-[#142F86] transition hover:bg-[#EAF7FE]">Centre details</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function UtilityAction({ href, label, detail, icon: Icon, urgent = false }: HeaderLink & { detail: string; icon: typeof FileText; urgent?: boolean }) {
  return (
    <Link href={href} className={`group flex items-center gap-2.5 border-l px-4 py-1 transition ${urgent ? "border-white/15 bg-[#DA1C29] hover:bg-[#c81724]" : "border-white/10 hover:bg-white/[0.07]"}`}>
      <Icon className="size-4 text-white" />
      <span>
        <span className="block text-[9px] font-bold uppercase tracking-[0.14em] text-white/55">{detail}</span>
        <span className="block text-xs font-black text-white group-hover:text-white">{label}</span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");

  const searchResults = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return searchItems.slice(0, 8);
    return searchItems.filter((item) => item.label.toLowerCase().includes(normalized)).slice(0, 10);
  }, [query]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      <div className="hidden h-11 bg-[#102A75] text-white xl:block">
        <div className="mx-auto flex h-full max-w-[1440px] items-stretch justify-between px-8">
          <LocationMenu />
          <div className="flex items-stretch">
            <UtilityAction href="/patient-info/patient-support#reports" label="Access Lab Reports" detail="Reports & support" icon={FileText} />
            <UtilityAction href="/patient-info/appointment-booking" label="Appointment" detail="Book a visit" icon={CalendarDays} />
            <UtilityAction href={siteConfig.phone.href} label="Emergency" detail="24/7 assistance" icon={Ambulance} urgent />
          </div>
        </div>
      </div>

      <div className="border-b border-[#dbe5f2] bg-white shadow-[0_12px_36px_-30px_rgba(20,47,134,0.9)]">
        <div className="mx-auto flex h-[72px] max-w-[1440px] items-center justify-between gap-3 px-4 sm:h-[78px] sm:px-8 xl:h-[82px]">
          <Link href="/" className="relative block h-[48px] w-[160px] shrink-0 sm:h-[56px] sm:w-[205px] xl:w-[220px]" aria-label="Clarus Magnus home">
            <Image
              src={`${basePath}/assets/logo/clarus-magnus-logo.png`}
              alt="Clarus Magnus Health and Diagnostics"
              fill
              priority
              sizes="(max-width: 639px) 160px, (max-width: 1279px) 205px, 220px"
              className="object-contain object-left"
            />
          </Link>

          <div className="hidden items-center gap-3 xl:flex">
            <div className="mr-2 text-right">
              <p className="text-[10px] font-black uppercase tracking-[0.17em] text-[#DA1C29]">18+ years of trusted care</p>
              <p className="mt-1 text-sm font-bold text-[#53627a]">Radiologist-led diagnostics in Koramangala</p>
            </div>
            <Link href="/health-packages" className="group flex h-13 items-center gap-3 rounded-2xl border border-[#cfe2f2] bg-[#f4faff] px-4 text-[#142F86] transition hover:-translate-y-0.5 hover:border-[#31B4F4] hover:shadow-lg">
              <span className="flex size-8 items-center justify-center rounded-xl bg-[#EAF7FE]"><HeartPulse className="size-4" /></span>
              <span className="text-xs font-black leading-4">Book Health<br />Checkup Packages</span>
            </Link>
            <Button className="h-13 rounded-2xl bg-[#142F86] px-5 font-black shadow-[0_14px_30px_-18px_rgba(20,47,134,0.9)] hover:bg-[#0f266f]" render={<Link href="/patient-info/appointment-booking" />}>
              <CalendarDays className="size-4" />
              Book appointment
            </Button>
          </div>

          <div className="flex items-center gap-2 xl:hidden">
            <a href={siteConfig.phone.href} className="hidden size-10 items-center justify-center rounded-full bg-[#EAF7FE] text-[#142F86] sm:flex" aria-label={`Call ${siteConfig.phone.display}`}><Phone className="size-4" /></a>
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger render={<Button variant="outline" size="icon" className="rounded-full border-[#142F86]/15 text-[#142F86]" aria-label="Open navigation menu" />}>
                <Menu className="size-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[360px] max-w-full gap-0 overflow-y-auto border-l-[#dbe5f2] bg-white p-0 sm:w-[420px]">
                <SheetHeader className="border-b border-[#dbe5f2] px-6 py-5">
                  <SheetTitle className="pr-10 text-left text-[#142F86]">Explore Clarus Magnus</SheetTitle>
                </SheetHeader>
                <div className="grid grid-cols-3 border-b border-[#dbe5f2] bg-[#f5f9ff] p-3">
                  <Link href="/patient-info/patient-support#reports" onClick={() => setMobileOpen(false)} className="flex flex-col items-center gap-2 rounded-xl px-2 py-3 text-center text-[10px] font-black text-[#142F86]"><FileText className="size-4 text-[#31B4F4]" />Reports</Link>
                  <Link href="/patient-info/appointment-booking" onClick={() => setMobileOpen(false)} className="flex flex-col items-center gap-2 rounded-xl px-2 py-3 text-center text-[10px] font-black text-[#142F86]"><CalendarDays className="size-4 text-[#31B4F4]" />Appointment</Link>
                  <a href={siteConfig.phone.href} className="flex flex-col items-center gap-2 rounded-xl bg-[#DA1C29] px-2 py-3 text-center text-[10px] font-black text-white"><Ambulance className="size-4" />Emergency</a>
                </div>
                <nav className="px-5 py-4" aria-label="Mobile navigation">
                  {headerGroups.map((group) => (
                    <details key={group.label} className="group border-b border-[#e4eaf2]">
                      <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-sm font-black text-[#263858] marker:content-none">
                        {group.label}<ChevronDown className="size-4 text-[#31B4F4] transition group-open:rotate-180" />
                      </summary>
                      <div className="grid grid-cols-2 gap-1 pb-4">
                        {group.links.map((link) => <Link key={link.label} href={link.href} onClick={() => setMobileOpen(false)} className="rounded-xl bg-[#f5f9ff] px-3 py-2.5 text-xs font-bold leading-5 text-[#52627a]">{link.label}</Link>)}
                      </div>
                    </details>
                  ))}
                  {directNav.map((item) => <Link key={item.href} href={item.href} onClick={() => setMobileOpen(false)} className="flex items-center justify-between border-b border-[#e4eaf2] py-4 text-sm font-black text-[#263858]">{item.label}<ArrowRight className="size-4 text-[#31B4F4]" /></Link>)}
                  <div className="mt-5 rounded-2xl bg-[#102A75] p-5 text-white">
                    <p className="flex items-center gap-2 text-sm font-black"><MapPin className="size-4 text-[#8ed7fa]" /> Koramangala centre</p>
                    <p className="mt-2 text-xs leading-5 text-white/65">{siteConfig.address.line2}, {siteConfig.address.city}</p>
                    <a href={siteConfig.address.mapsHref} target="_blank" rel="noreferrer" className="mt-4 inline-flex items-center gap-2 text-xs font-black text-[#8ed7fa]">Get directions <ArrowRight className="size-3.5" /></a>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        <div className="hidden h-12 border-t border-[#e2e9f2] xl:block">
          <div className="mx-auto flex h-full max-w-[1440px] items-center justify-between px-8">
            <nav className="flex h-full items-center" aria-label="Primary navigation">
              {headerGroups.map((group) => <DesktopDropdown key={group.label} group={group} />)}
              {directNav.map((item) => <Link key={item.href} href={item.href} className="flex h-full items-center border-b-2 border-transparent px-3 text-[13px] font-black text-[#32415b] transition hover:border-[#31B4F4] hover:text-[#142F86]">{item.label}</Link>)}
            </nav>
            <div className="flex h-full items-center border-l border-[#e2e9f2]">
              <div className="group relative flex h-full items-center">
                <button type="button" className="flex h-full items-center gap-1.5 px-4 text-xs font-black text-[#52627a] hover:text-[#142F86]"><Globe2 className="size-4 text-[#31B4F4]" /> English <ChevronDown className="size-3" /></button>
                <div className="invisible absolute right-0 top-full z-[70] w-52 translate-y-2 pt-2 opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <div className="rounded-2xl border border-[#dce5f1] bg-white p-4 shadow-xl"><p className="text-xs font-black text-[#142F86]">English</p><p className="mt-1 text-[11px] leading-5 text-[#718097]">Current website language</p></div>
                </div>
              </div>
              <button type="button" onClick={() => setSearchOpen((open) => !open)} className="flex h-full items-center gap-2 border-l border-[#e2e9f2] px-4 text-xs font-black text-[#142F86] transition hover:bg-[#EAF7FE]" aria-expanded={searchOpen} aria-controls="site-search-panel">
                {searchOpen ? <X className="size-4" /> : <Search className="size-4" />} Search
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="site-search-panel" className={`absolute inset-x-0 top-full z-40 hidden border-b border-[#dbe5f2] bg-white shadow-[0_24px_60px_-30px_rgba(20,47,134,0.5)] transition duration-300 xl:block ${searchOpen ? "visible translate-y-0 opacity-100" : "invisible -translate-y-2 opacity-0"}`}>
        <div className="mx-auto max-w-5xl px-8 py-7">
          <label htmlFor="site-search" className="text-[11px] font-black uppercase tracking-[0.18em] text-[#DA1C29]">Search Clarus Magnus</label>
          <div className="mt-3 flex items-center gap-3 rounded-2xl border border-[#cad8e8] bg-[#f8fbff] px-4 focus-within:border-[#31B4F4] focus-within:ring-4 focus-within:ring-[#31B4F4]/10">
            <Search className="size-5 text-[#31B4F4]" />
            <input id="site-search" value={query} onChange={(event) => setQuery(event.target.value)} className="h-13 w-full bg-transparent text-base font-bold text-[#243758] outline-none placeholder:text-[#8b97a9]" placeholder="Search scans, specialties, packages or patient support" autoComplete="off" />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 lg:grid-cols-4">
            {searchResults.length > 0 ? searchResults.map((item) => (
              <Link key={`${item.label}-${item.href}`} href={item.href} onClick={() => setSearchOpen(false)} className="flex items-center justify-between rounded-xl border border-[#e1e8f1] px-3 py-2.5 text-xs font-black text-[#445570] transition hover:border-[#31B4F4] hover:bg-[#EAF7FE] hover:text-[#142F86]">{item.label}<ArrowRight className="size-3.5 text-[#31B4F4]" /></Link>
            )) : <p className="col-span-full py-3 text-sm text-[#6a788d]">No matching service found. Call {siteConfig.phone.display} and our care team will help.</p>}
          </div>
        </div>
      </div>
    </header>
  );
}

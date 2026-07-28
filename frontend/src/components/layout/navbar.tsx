"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ArrowUpRight, MapPin, Menu, Phone } from "lucide-react";
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

const headerNav = [
  { label: "Diagnostics", href: "/diagnostics" },
  { label: "Specialties", href: "/specialties" },
  { label: "Laboratory", href: "/laboratory" },
  { label: "Health Packages", href: "/health-packages" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full">
      <div className="hidden bg-[#102A75] text-white lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-2 text-xs font-bold tracking-wide">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5 text-white/75">
              <MapPin className="size-3.5 text-[#31B4F4]" />
              Koramangala, Bengaluru
            </span>
            <span className="h-3 w-px bg-white/20" />
            <span className="text-white/75">MRI &amp; CT available 24/7</span>
          </div>
          <a href={siteConfig.phone.href} className="flex items-center gap-2 transition hover:text-[#8ed7fa]">
            <Phone className="size-3.5" />
            {siteConfig.phone.display}
          </a>
        </div>
      </div>

      <div className="border-b border-[#dbe5f2] bg-white/95 shadow-[0_10px_30px_-24px_rgba(20,47,134,0.7)] backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:h-[76px] sm:gap-6 sm:px-8">
          <Link href="/" className="relative block h-[48px] w-[160px] min-w-0 shrink-0 sm:h-[54px] sm:w-[190px]" aria-label="Clarus Magnus home">
            <Image
              src={`${basePath}/assets/logo/clarus-magnus-logo.png`}
              alt="Clarus Magnus Health and Diagnostics"
              fill
              priority
              sizes="(max-width: 639px) 160px, 190px"
              className="object-contain object-left"
            />
          </Link>

          <nav className="hidden items-center gap-1 xl:flex" aria-label="Primary navigation">
            {headerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3.5 py-2 text-sm font-bold text-[#364660] transition hover:bg-[#EAF7FE] hover:text-[#142F86]"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              className="hidden h-11 rounded-full bg-[#142F86] px-5 font-bold shadow-[0_12px_28px_-16px_rgba(20,47,134,0.8)] hover:bg-[#0f266f] sm:inline-flex"
              render={<Link href="/patient-info/appointment-booking" />}
            >
              Book appointment
              <ArrowUpRight className="size-4" />
            </Button>

            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger
                render={
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-[#142F86]/15 text-[#142F86] xl:hidden"
                    aria-label="Open navigation menu"
                  />
                }
              >
                <Menu className="size-5" />
              </SheetTrigger>
              <SheetContent side="right" className="w-[320px] max-w-full border-l-[#dbe5f2] bg-white p-0 sm:w-[380px]">
                <SheetHeader className="border-b border-[#dbe5f2] px-6 py-5">
                  <SheetTitle className="text-left text-[#142F86]">Explore Clarus Magnus</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col px-5 py-5" aria-label="Mobile navigation">
                  {headerNav.map((item, index) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="flex items-center justify-between border-b border-[#e5ebf3] px-1 py-4 text-base font-bold text-[#263858]"
                    >
                      <span>{item.label}</span>
                      <span className="text-xs font-black text-[#31B4F4]">0{index + 1}</span>
                    </Link>
                  ))}
                  <Link
                    href="/for-corporates"
                    onClick={() => setMobileOpen(false)}
                    className="border-b border-[#e5ebf3] px-1 py-4 text-base font-bold text-[#263858]"
                  >
                    For corporates
                  </Link>
                  <Link
                    href="/patient-info"
                    onClick={() => setMobileOpen(false)}
                    className="border-b border-[#e5ebf3] px-1 py-4 text-base font-bold text-[#263858]"
                  >
                    Patient information
                  </Link>
                  <Button
                    className="mt-7 h-12 rounded-full bg-[#142F86]"
                    render={
                      <Link
                        href="/patient-info/appointment-booking"
                        onClick={() => setMobileOpen(false)}
                      />
                    }
                  >
                    Book appointment
                    <ArrowUpRight className="size-4" />
                  </Button>
                  <a
                    href={siteConfig.phone.href}
                    className="mt-5 flex items-center justify-center gap-2 text-sm font-bold text-[#142F86]"
                  >
                    <Phone className="size-4" />
                    {siteConfig.phone.display}
                  </a>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}

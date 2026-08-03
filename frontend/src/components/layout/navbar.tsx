"use client";

import Link from "next/link";
import { useState } from "react";
import {
  CalendarDays,
  ChevronDown,
  ClipboardList,
  HeartPulse,
  Menu,
  Phone,
  Siren,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { mainNav } from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site-config";

const quickActions = [
  {
    label: "Access Lab Reports",
    shortLabel: "Lab Reports",
    href: "/patient-info/patient-support",
    icon: ClipboardList,
    className:
      "border border-[#18a8c4] bg-white text-[#142f86] hover:bg-[#eefbfe]",
  },
  {
    label: "Appointment",
    shortLabel: "Appointment",
    href: "/patient-info/appointment-booking",
    icon: CalendarDays,
    className: "bg-[#00a7b5] text-white hover:bg-[#008f9c]",
  },
  {
    label: "Emergency",
    shortLabel: "Emergency",
    href: siteConfig.phone.href,
    icon: Siren,
    className: "bg-[#da1c29] text-white hover:bg-[#bd1420]",
  },
  {
    label: "Book Health Packages",
    shortLabel: "Health Packages",
    href: "/health-packages",
    icon: HeartPulse,
    className: "bg-[#087b98] text-white hover:bg-[#06677f]",
  },
] as const;

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-[0_3px_12px_rgba(15,47,86,0.18)]">
      <div className="mx-auto flex h-[76px] max-w-7xl items-center justify-between gap-5 px-4 lg:px-8">
        <Link
          href="/"
          aria-label="Clarus Magnus home"
          className="flex shrink-0 items-center gap-2.5"
        >
          <span className="relative flex size-11 items-center justify-center rounded-full bg-[#142f86] text-white">
            <span className="absolute h-6 w-2 rounded-sm bg-white" />
            <span className="absolute h-2 w-6 rounded-sm bg-white" />
          </span>
          <span className="leading-none">
            <span className="block whitespace-nowrap text-[21px] font-bold tracking-[-0.04em] text-[#142f86] sm:text-[25px]">
              clarus<span className="text-[#00aeb4]">magnus</span>
            </span>
            <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-500 sm:text-[10px]">
              Health &amp; Diagnostics
            </span>
          </span>
        </Link>

        <div className="hidden items-stretch gap-2 lg:flex">
          {quickActions.map((action) => {
            const Icon = action.icon;
            const isExternal = action.href.startsWith("tel:");

            return (
              <Link
                key={action.label}
                href={action.href}
                className={`flex min-h-11 items-center justify-center gap-2 rounded-[4px] px-3 text-xs font-bold transition-colors xl:px-4 ${action.className}`}
                {...(isExternal ? { prefetch: false } : {})}
              >
                <Icon className="size-4 shrink-0" aria-hidden="true" />
                <span className="hidden xl:inline">{action.label}</span>
                <span className="xl:hidden">{action.shortLabel}</span>
              </Link>
            );
          })}
        </div>

        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger
            render={
              <Button
                variant="outline"
                size="icon"
                className="border-[#142f86] text-[#142f86] lg:hidden"
                aria-label="Open navigation menu"
              />
            }
          >
            <Menu className="size-5" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[min(360px,90vw)]">
            <SheetHeader className="border-b">
              <SheetTitle className="text-[#142f86]">Clarus Magnus</SheetTitle>
            </SheetHeader>

            <div className="grid grid-cols-2 gap-2 px-4">
              {quickActions.map((action) => {
                const Icon = action.icon;
                return (
                  <Link
                    key={action.label}
                    href={action.href}
                    onClick={() => setMobileOpen(false)}
                    className={`flex min-h-14 flex-col items-center justify-center gap-1 rounded-md px-2 text-center text-[11px] font-bold ${action.className}`}
                  >
                    <Icon className="size-4" aria-hidden="true" />
                    {action.shortLabel}
                  </Link>
                );
              })}
            </div>

            <nav className="overflow-y-auto px-4 pb-6" aria-label="Mobile navigation">
              {mainNav.map((item) => (
                <div key={item.href} className="border-b border-slate-100 py-2">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block py-2 text-sm font-bold text-[#142f86]"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-2 border-l-2 border-[#00aeb4]/30 pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block py-1.5 text-sm text-slate-600 hover:text-[#087b98]"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      <div className="hidden bg-gradient-to-r from-[#0f5ca8] via-[#087f9e] to-[#00aaa8] lg:block">
        <nav
          className="mx-auto flex h-[45px] max-w-7xl items-stretch justify-center px-4 lg:px-8"
          aria-label="Main navigation"
        >
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative flex items-stretch">
                <Link
                  href={item.href}
                  className="flex items-center gap-1.5 whitespace-nowrap px-3 text-[12px] font-bold text-white transition-colors hover:bg-white/15 focus-visible:bg-white/15 focus-visible:outline-none xl:px-4 xl:text-[13px]"
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown
                    className="size-3.5 transition-transform duration-200 group-hover:rotate-180 group-focus-within:rotate-180"
                    aria-hidden="true"
                  />
                </Link>

                <div className="invisible absolute left-0 top-full z-50 min-w-64 translate-y-1 pt-1 opacity-0 transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">
                  <ul className="max-h-[65vh] overflow-y-auto border-t-4 border-[#00aeb4] bg-white py-2 shadow-[0_12px_30px_rgba(15,47,86,0.25)]">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="flex items-center justify-between gap-5 border-b border-slate-100 px-4 py-2.5 text-sm font-medium text-slate-700 transition-colors last:border-0 hover:bg-[#edf9fb] hover:text-[#087b98] focus-visible:bg-[#edf9fb] focus-visible:text-[#087b98] focus-visible:outline-none"
                        >
                          {child.label}
                          <span className="text-[#00aeb4]" aria-hidden="true">
                            ›
                          </span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center whitespace-nowrap px-3 text-[12px] font-bold text-white transition-colors hover:bg-white/15 focus-visible:bg-white/15 focus-visible:outline-none xl:px-4 xl:text-[13px]"
              >
                {item.label}
              </Link>
            )
          )}

          <a
            href={siteConfig.phone.href}
            className="ml-auto hidden items-center gap-1.5 border-l border-white/20 px-3 text-[12px] font-bold text-white hover:bg-white/15 xl:flex"
          >
            <Phone className="size-3.5" aria-hidden="true" />
            Call Us
          </a>
        </nav>
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone, Calendar, Stethoscope, ChevronDown } from "lucide-react";
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
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-md">
      {/* Top Bar */}
      <div className="border-b bg-slate-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-2 lg:px-8">
          <div className="flex items-center gap-4">
            <a
              href={siteConfig.phone.href}
              className="flex items-center gap-2 text-sm font-medium text-slate-700 hover:text-primary"
            >
              <Phone className="size-4" />
              <span className="hidden sm:inline">{siteConfig.phone.display}</span>
            </a>
          </div>
          <div className="flex items-center gap-3">
            <Button
              size="sm"
              variant="outline"
              className="hidden border-primary text-primary hover:bg-primary hover:text-white sm:inline-flex"
              render={<Link href="/patient-info/appointment-booking" />}
            >
              <Calendar className="mr-2 size-4" />
              Book Appointment
            </Button>
            <Button
              size="sm"
              className="hidden bg-red-600 hover:bg-red-700 sm:inline-flex"
              render={<Link href="/contact" />}
            >
              Emergency
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 shrink-0">
          <div className="flex size-12 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 shadow-lg">
            <Stethoscope className="size-7 text-white" />
          </div>
          <div className="hidden sm:block">
            <h1 className="text-xl font-bold leading-tight text-slate-900">
              Clarus <span className="text-primary">Magnus</span>
            </h1>
            <p className="text-xs text-slate-500">Health &amp; Diagnostics</p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center gap-1">
            {mainNav.map((item) =>
              item.children ? (
                <li key={item.href} className="group relative">
                  <button className="flex items-center gap-1 rounded-md px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-primary hover:text-white">
                    {item.label}
                    <ChevronDown className="size-4" />
                  </button>
                  {/* Dropdown Menu */}
                  <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
                    <div className="w-64 rounded-lg border bg-white shadow-xl">
                      <ul className="max-h-96 overflow-y-auto py-2">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="flex items-center gap-3 px-4 py-2.5 text-sm text-slate-700 transition-colors hover:bg-primary/10 hover:text-primary"
                            >
                              <span className="size-1.5 rounded-full bg-primary/60" />
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </li>
              ) : (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block rounded-md px-4 py-2 text-sm font-medium text-slate-700 transition-colors hover:bg-primary hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>

        {/* Mobile Menu */}
        <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <Menu className="size-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[360px]">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-1 overflow-y-auto px-4 pb-6 pt-4">
              {mainNav.map((item) => (
                <div key={item.href} className="py-1">
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-2 py-2 text-sm font-semibold text-slate-900 hover:bg-primary/10"
                  >
                    {item.label}
                  </Link>
                  {item.children && (
                    <div className="ml-2 mt-1 flex flex-col border-l pl-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className={cn(
                            "rounded-md px-2 py-1.5 text-sm text-slate-600 hover:text-primary"
                          )}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <Button
                className="mt-4"
                render={
                  <Link
                    href="/patient-info/appointment-booking"
                    onClick={() => setMobileOpen(false)}
                  />
                }
              >
                <Calendar className="mr-2 size-4" />
                Book Appointment
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

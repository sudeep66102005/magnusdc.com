"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { mainNav } from "@/lib/constants/navigation";
import { siteConfig } from "@/lib/constants/site-config";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 lg:px-8">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <span className="flex size-9 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
            CM
          </span>
          <span className="hidden text-base font-semibold leading-tight text-slate-900 sm:block">
            Clarus Magnus
            <span className="block text-xs font-normal text-slate-500">
              Health &amp; Diagnostics
            </span>
          </span>
        </Link>

        <nav className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              {mainNav.map((item) =>
                item.children ? (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid w-[280px] max-h-[70vh] gap-1 overflow-y-auto p-3 md:w-[340px]">
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <NavigationMenuLink
                              render={
                                <Link
                                  href={child.href}
                                  className="block rounded-md px-3 py-2 text-sm text-slate-700 hover:bg-slate-100"
                                />
                              }
                            >
                              {child.label}
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ) : (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      render={
                        <Link
                          href={item.href}
                          className="px-3 py-2 text-sm font-medium text-slate-700 hover:text-primary"
                        />
                      }
                    >
                      {item.label}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )
              )}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={siteConfig.phone.href}
            className="hidden items-center gap-2 text-sm font-semibold text-primary md:flex"
          >
            <Phone className="size-4" />
            {siteConfig.phone.display}
          </a>
          <Button
            size="sm"
            className="hidden sm:inline-flex"
            render={<Link href="/patient-info/appointment-booking" />}
          >
            Book Appointment
          </Button>

          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger
              render={<Button variant="outline" size="icon" className="lg:hidden" />}
            >
              <Menu className="size-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[360px]">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 overflow-y-auto px-4 pb-6">
                {mainNav.map((item) => (
                  <div key={item.href} className="py-1">
                    <Link
                      href={item.href}
                      onClick={() => setMobileOpen(false)}
                      className="block rounded-md px-2 py-2 text-sm font-semibold text-slate-900"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-2 flex flex-col border-l pl-3">
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
                  Book Appointment
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

import Link from "next/link";
import { MapPin, MessageCircle, Phone, Star } from "lucide-react";
import { siteConfig } from "@/lib/constants/site-config";

/**
 * Global elements that appear across all pages, per site architecture:
 * Call Now, Appointment CTA, WhatsApp Chat, Google Reviews widget, Address & Location.
 * Rendered as a fixed floating stack, always accessible regardless of scroll position.
 */
export function GlobalWidgets() {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col items-end gap-3">
      <a
        href={siteConfig.googleReviews.href}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-lg ring-1 ring-slate-200 hover:ring-slate-300"
        aria-label="Google Reviews"
      >
        <Star className="size-3.5 fill-amber-400 text-amber-400" />
        {siteConfig.googleReviews.rating} Google Reviews
      </a>

      <a
        href={siteConfig.address.mapsHref}
        target="_blank"
        rel="noopener noreferrer"
        className="hidden items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-xs font-medium text-slate-700 shadow-lg ring-1 ring-slate-200 hover:ring-slate-300 sm:flex"
        aria-label="Address & Location"
      >
        <MapPin className="size-3.5 text-primary" />
        {siteConfig.address.city}, {siteConfig.address.state}
      </a>

      <div className="flex items-center gap-3">
        <a
          href={siteConfig.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex size-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg transition-transform hover:scale-105"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="size-6" />
        </a>

        <a
          href={siteConfig.phone.href}
          className="flex size-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105"
          aria-label="Call Now"
        >
          <Phone className="size-6" />
        </a>
      </div>

      <Link
        href="/patient-info/appointment-booking"
        className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white shadow-lg transition-transform hover:scale-105"
      >
        Book Appointment
      </Link>
    </div>
  );
}

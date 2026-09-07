import { Phone, MessageCircle, Mail } from "lucide-react";
import { siteConfig } from "@/lib/constants/site-config";

/**
 * Shown instead of — or alongside — a submit button when the form cannot
 * deliver. Two cases use it:
 *
 * - No delivery destination is configured, so the form must not imply that
 *   pressing a button sends anything.
 * - A submission failed, and the visitor needs a route that works right now
 *   rather than being asked to try again.
 *
 * `mailto` carries the typed answers when the caller passes one, so nothing the
 * visitor wrote is lost.
 */
export function DirectContactFallback({
  heading,
  mailto,
  tone = "notice",
}: {
  heading: string;
  mailto?: string;
  tone?: "notice" | "error";
}) {
  const border = tone === "error" ? "border-[#DA1C29]/35" : "border-[#142F86]/15";
  const bg = tone === "error" ? "bg-[#DA1C29]/6" : "bg-[#31B4F4]/8";

  return (
    <div className={`rounded-xl border ${border} ${bg} p-4`}>
      <p className="text-sm font-semibold text-[#142F86]">{heading}</p>
      <p className="mt-1 text-xs text-[#142F86]/70">
        Reach the care team directly — these are answered during working hours,
        and MRI and CT are available 24/7.
      </p>
      <div className="mt-3 flex flex-wrap gap-2">
        <a
          href={siteConfig.phone.href}
          className="inline-flex items-center gap-2 rounded-full bg-[#142F86] px-4 py-2.5 text-xs font-bold text-white transition hover:bg-[#31B4F4] hover:text-[#142F86]"
        >
          <Phone className="size-3.5" />
          {siteConfig.phone.display}
        </a>
        <a
          href={siteConfig.whatsapp.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-bold text-[#142F86] ring-1 ring-[#142F86]/15 transition hover:ring-[#31B4F4]"
        >
          <MessageCircle className="size-3.5" />
          WhatsApp
        </a>
        <a
          href={mailto ?? `mailto:${siteConfig.email}`}
          className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-bold text-[#142F86] ring-1 ring-[#142F86]/15 transition hover:ring-[#31B4F4]"
        >
          <Mail className="size-3.5" />
          {mailto ? "Email these details" : siteConfig.email}
        </a>
      </div>
    </div>
  );
}

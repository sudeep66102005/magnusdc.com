import { apiClient, API_BASE_URL } from "@/lib/api/client";
import { siteConfig } from "@/lib/constants/site-config";

/**
 * Where form submissions actually go.
 *
 * The site is a static export on GitHub Pages, which cannot process a form on
 * its own. The NestJS backend in /backend is not deployed, and the build
 * workflow falls back to `http://localhost:4000/api` when no API URL is
 * configured — so every submission was being POSTed to the visitor's own
 * machine and lost. Nothing told the visitor their enquiry had not arrived
 * beyond a generic "something went wrong".
 *
 * Two things fix that here:
 *
 * 1. `isLeadBackendConfigured` reports whether a real endpoint exists. When it
 *    does not, forms must not pretend to submit — they show the direct contact
 *    routes instead. No enquiry is silently dropped.
 * 2. `NEXT_PUBLIC_FORM_ENDPOINT` lets a static form handler (Formspree, Basin,
 *    a Cloudflare Worker, anything accepting a JSON POST) be switched on by
 *    setting one repository variable, with no code change.
 *
 * Precedence: the static handler wins if set, otherwise the API, otherwise the
 * form falls back to telephone, WhatsApp and email.
 */

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";

/** An API URL pointing at localhost is a default, not a deployment. */
function isRealApiUrl(url: string): boolean {
  if (!url) return false;
  return !/^https?:\/\/(localhost|127\.0\.0\.1|\[::1\])(:\d+)?/i.test(url);
}

export const leadBackend: "form-endpoint" | "api" | "none" = FORM_ENDPOINT
  ? "form-endpoint"
  : isRealApiUrl(API_BASE_URL)
    ? "api"
    : "none";

export const isLeadBackendConfigured = leadBackend !== "none";

/** Identifies which form a submission came from, for the receiving inbox. */
export type LeadKind = "contact" | "appointment" | "corporate-inquiry";

/**
 * Sends a lead to whichever destination is configured.
 *
 * Throws when nothing is configured. Callers must check
 * `isLeadBackendConfigured` first and render the fallback contact routes
 * instead of a submit button, so this throw is a guard, not a code path a
 * visitor can reach.
 */
export async function submitLead(
  kind: LeadKind,
  apiPath: string,
  payload: Record<string, unknown>,
): Promise<void> {
  if (leadBackend === "form-endpoint") {
    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        ...payload,
        _form: kind,
        _submittedAt: new Date().toISOString(),
        _page: typeof window === "undefined" ? "" : window.location.href,
      }),
    });
    if (!response.ok) {
      throw new Error(`Form endpoint responded ${response.status}`);
    }
    return;
  }

  if (leadBackend === "api") {
    await apiClient.post(apiPath, payload);
    return;
  }

  throw new Error(
    "No form destination is configured. Set NEXT_PUBLIC_FORM_ENDPOINT or NEXT_PUBLIC_API_URL.",
  );
}

/** Prefilled mailto so a visitor's typing is never wasted on a failure. */
export function mailtoFor(kind: LeadKind, payload: Record<string, unknown>): string {
  const subjects: Record<LeadKind, string> = {
    contact: "Website enquiry",
    appointment: "Appointment request",
    "corporate-inquiry": "Corporate health enquiry",
  };
  const body = Object.entries(payload)
    .filter(([, value]) => value !== undefined && value !== "")
    .map(([key, value]) => `${key}: ${String(value)}`)
    .join("\n");
  return `mailto:${siteConfig.email}?subject=${encodeURIComponent(
    subjects[kind],
  )}&body=${encodeURIComponent(body)}`;
}

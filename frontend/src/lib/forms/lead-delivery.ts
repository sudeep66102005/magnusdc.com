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
 * Precedence: Supabase wins when configured, then the static handler, then the
 * API. Without any destination, the form falls back to direct contact options.
 */

const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "";
const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ??
  "https://ekawbkomvkjrvyyabign.supabase.co";
const SUPABASE_ANON_KEY =
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVrYXdia29tdmtqcnZ5eWFiaWduIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTAwODgzNDgsImV4cCI6MjEwNTY2NDM0OH0.bRKVG_DXlmvwV3yYlKIHuywJhAXKGA-OmGZVucVA9q8";

/** An API URL pointing at localhost is a default, not a deployment. */
function isRealApiUrl(url: string): boolean {
  if (!url) return false;
  return !/^https?:\/\/(localhost|127\.0\.0\.1|\[::1\])(:\d+)?/i.test(url);
}

export const leadBackend: "supabase" | "form-endpoint" | "api" | "none" =
  SUPABASE_URL && SUPABASE_ANON_KEY
    ? "supabase"
    : FORM_ENDPOINT
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
  if (leadBackend === "supabase") {
    const fullName =
      payload.patientName ?? payload.name ?? payload.contactPerson ?? "";
    const notes = payload.notes ?? payload.message ?? null;
    const response = await fetch(`${SUPABASE_URL}/rest/v1/lead_submissions`, {
      method: "POST",
      headers: {
        apikey: SUPABASE_ANON_KEY,
        Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
        "Content-Type": "application/json",
        Prefer: "return=minimal",
      },
      body: JSON.stringify({
        form_type: kind,
        full_name: String(fullName),
        phone: String(payload.phone ?? ""),
        email: payload.email || null,
        department: payload.department || null,
        preferred_date: payload.preferredDate || null,
        preferred_time: payload.preferredTime || null,
        notes: notes || null,
        company_name: payload.companyName || null,
        employee_count: payload.employeeCount || null,
        page_url: typeof window === "undefined" ? null : window.location.href,
      }),
    });
    if (!response.ok) {
      throw new Error(`Supabase responded ${response.status}`);
    }
    return;
  }

  if (leadBackend === "form-endpoint") {
    const response = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
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
    "No form destination is configured. Set Supabase, NEXT_PUBLIC_FORM_ENDPOINT or NEXT_PUBLIC_API_URL.",
  );
}

/** Prefilled mailto so a visitor's typing is never wasted on a failure. */
export function mailtoFor(
  kind: LeadKind,
  payload: Record<string, unknown>,
): string {
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

/** Prefilled WhatsApp message so fallback submissions keep the visitor's details. */
export function whatsappFor(
  kind: LeadKind,
  payload: Record<string, unknown>,
): string {
  const subjects: Record<LeadKind, string> = {
    contact: "Website enquiry",
    appointment: "Appointment request",
    "corporate-inquiry": "Corporate health enquiry",
  };
  const body = Object.entries(payload)
    .filter(([, value]) => value !== undefined && value !== "")
    .map(([key, value]) => `${key}: ${String(value)}`)
    .join("\n");
  const text = [subjects[kind], body].filter(Boolean).join("\n\n");
  return `${siteConfig.whatsapp.href}?text=${encodeURIComponent(text)}`;
}


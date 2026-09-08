import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants/site-config";
import { getAllDiagnosticSlugs } from "@/lib/data/diagnostics";
import { getAllLabSlugs } from "@/lib/data/laboratory";
import { getAllSpecialtySlugs } from "@/lib/data/specialties";
import { getAllDoctorSlugs } from "@/lib/data/doctors";

/**
 * Generates /sitemap.xml at build time.
 *
 * Added because the footer design links "Sitemap" and no such route existed —
 * the link would have 404ed. Works under `output: "export"`: Next writes the
 * file into `out/` during the build.
 *
 * Routes come from the same data the pages are generated from, so a new
 * diagnostic, doctor or specialty appears here without anyone remembering to
 * add it.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url.replace(/\/$/, "");
  const now = new Date();

  const staticPaths = [
    "",
    "/about",
    "/contact",
    "/doctors",
    "/diagnostics",
    "/laboratory",
    "/specialties",
    "/health-packages",
    "/services",
    "/medical-library",
    "/patient-info",
    "/patient-info/appointment-booking",
    "/patient-info/patient-support",
    "/for-corporates",
    "/for-corporates/employee-health-checkups",
    "/for-corporates/diagnostic-partnerships",
    "/privacy-policy",
    "/terms-and-conditions",
  ];

  const dynamicPaths = [
    ...getAllDiagnosticSlugs().map((slug) => `/diagnostics/${slug}`),
    ...getAllLabSlugs().map((slug) => `/laboratory/${slug}`),
    ...getAllSpecialtySlugs().map((slug) => `/specialties/${slug}`),
    ...getAllDoctorSlugs().map((slug) => `/doctors/${slug}`),
  ];

  return [...staticPaths, ...dynamicPaths].map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: path === "" ? "weekly" : "monthly",
    priority: path === "" ? 1 : 0.7,
  }));
}

"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Forces every navigation (including client-side route changes handled by
 * Next.js's router, not just hard page reloads) to start from the top of the
 * page instead of preserving the previous page's scroll position.
 */
export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

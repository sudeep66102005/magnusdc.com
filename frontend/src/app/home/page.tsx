import type { Metadata } from "next";
import Link from "next/link";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const metadata: Metadata = {
  title: "Redirecting to Clarus Magnus",
  robots: { index: false, follow: true },
  alternates: { canonical: "/" },
};

export default function LegacyHomePage() {
  return (
    <section className="mx-auto flex min-h-[50vh] max-w-3xl flex-col items-center justify-center px-6 py-20 text-center">
      <h1 className="text-3xl font-black text-[#142F86]">Clarus Magnus has a new homepage</h1>
      <p className="mt-4 text-[#142F86]/70">
        This old address has moved to the main Clarus Magnus Health &amp; Diagnostics website.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-full bg-[#142F86] px-6 py-3 font-bold text-white"
      >
        Continue to the homepage
      </Link>
      <script
        dangerouslySetInnerHTML={{
          __html: `window.location.replace(${JSON.stringify(`${basePath}/`)});`,
        }}
      />
    </section>
  );
}

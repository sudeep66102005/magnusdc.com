import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/providers/query-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { GlobalWidgets } from "@/components/layout/global-widgets";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { siteConfig } from "@/lib/constants/site-config";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  /* 700 and 500 are here because the card headings ask for Inter Bold 700 and
     their supporting line for Medium 500. Without the file, a browser fakes the
     weight from the nearest one it has — which is exactly the "not quite Inter
     Bold" look the spec warns against. */
  weight: ["300", "400", "500", "600", "700", "800"],
  /* italic too: the decorative accents ("Clarity", the script lines) are
     italic, and without the file the browser would slant Inter itself. */
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} | Advanced Diagnostics in Koramangala`,
    template: `%s | ${siteConfig.shortName}`,
  },
  description: siteConfig.description,
  metadataBase: new URL(siteConfig.url),
};

/* Must be its own export: Next ignores `viewport` and `themeColor` when they
   are nested in `metadata`. Without an explicit initial scale, Android Chrome
   is free to lay the page out at its own width and boost the type, which is
   what made the phone builds diverge. Zoom stays enabled — pinning
   maximum-scale locks out anyone who needs to magnify. */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
    { media: "(prefers-color-scheme: dark)", color: "#142F86" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{if('scrollRestoration' in window.history){window.history.scrollRestoration='manual';}window.scrollTo(0,0);}catch(e){}",
          }}
        />
      </head>
      <body className="flex min-h-full flex-col bg-background text-foreground">
        <QueryProvider>
          <ScrollToTop />
          <SiteHeader />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
          <GlobalWidgets />
        </QueryProvider>
      </body>
    </html>
  );
}

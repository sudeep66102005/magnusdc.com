import type { Metadata } from "next";
import { Lato, Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/providers/query-provider";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { GlobalWidgets } from "@/components/layout/global-widgets";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { siteConfig } from "@/lib/constants/site-config";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "600", "800"],
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["600", "700"],
  style: ["italic"],
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${lato.variable} ${playfairDisplay.variable} ${inter.variable} h-full antialiased`}>
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

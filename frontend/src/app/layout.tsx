import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { QueryProvider } from "@/components/providers/query-provider";
import { Navbar } from "@/components/layout/navbar";
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
    <html lang="en" className={`${lato.variable} h-full antialiased`}>
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
          <Navbar />
          <main className="flex flex-1 flex-col">{children}</main>
          <Footer />
          <GlobalWidgets />
        </QueryProvider>
      </body>
    </html>
  );
}

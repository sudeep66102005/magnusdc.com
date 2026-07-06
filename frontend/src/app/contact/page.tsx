import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import { PageHero } from "@/components/shared/page-hero";
import { Section } from "@/components/shared/section";
import { ContactForm } from "@/components/forms/contact-form";
import { siteConfig } from "@/lib/constants/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Clarus Magnus Health & Diagnostics.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get in Touch"
        description="Have a question about our services? Reach out and our team will respond promptly."
      />
      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-start gap-3">
              <Phone className="mt-1 size-5 text-primary" />
              <div>
                <p className="font-semibold text-slate-900">Phone</p>
                <a href={siteConfig.phone.href} className="text-slate-600 hover:text-primary">
                  {siteConfig.phone.display}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="mt-1 size-5 text-primary" />
              <div>
                <p className="font-semibold text-slate-900">Email</p>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-slate-600 hover:text-primary"
                >
                  {siteConfig.email}
                </a>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 size-5 text-primary" />
              <div>
                <p className="font-semibold text-slate-900">Address</p>
                <p className="text-slate-600">
                  {siteConfig.address.line1}
                  <br />
                  {siteConfig.address.line2}
                  <br />
                  {siteConfig.address.city}, {siteConfig.address.state}{" "}
                  {siteConfig.address.zip}
                </p>
              </div>
            </div>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}

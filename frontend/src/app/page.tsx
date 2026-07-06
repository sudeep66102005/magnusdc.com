import Link from "next/link";
import {
  Activity,
  Building2,
  FlaskConical,
  HeartPulse,
  ScanLine,
  ShieldCheck,
  Stethoscope,
  UserRound,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/shared/section";
import { LinkCard } from "@/components/shared/link-card";
import { diagnostics } from "@/lib/data/diagnostics";
import { labCategories } from "@/lib/data/laboratory";
import { healthPackages } from "@/lib/data/health-packages";
import { siteConfig } from "@/lib/constants/site-config";

export default function HomePage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary/10 via-primary/5 to-white">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-primary">
              Trusted Multi-Specialty Diagnostics
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {siteConfig.name}
            </h1>
            <p className="mt-4 max-w-xl text-lg text-slate-600">
              {siteConfig.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button size="lg" render={<Link href="/patient-info/appointment-booking" />}>
                Book Appointment
              </Button>
              <Button variant="outline" size="lg" render={<Link href="/diagnostics" />}>
                Explore Diagnostics
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: "19 Clinical Specialties", icon: Stethoscope },
              { label: "Advanced 3T MRI & CT", icon: ScanLine },
              { label: "NABL-standard Lab", icon: FlaskConical },
              { label: "Corporate Health Plans", icon: Building2 },
            ].map(({ label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-start gap-3 rounded-xl border bg-white p-5 shadow-sm"
              >
                <span className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-5" />
                </span>
                <p className="text-sm font-medium text-slate-700">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Section
        title="Explore Our Specialties"
        description="19 clinical specialties covering everything from primary care to advanced surgical disciplines."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <LinkCard
            href="/specialties"
            title="All Specialties"
            description="Browse the complete list of clinical departments."
            icon={Stethoscope}
          />
          <LinkCard
            href="/specialties/cardiology"
            title="Cardiology"
            description="Heart health screening, diagnostics, and treatment."
            icon={HeartPulse}
          />
          <LinkCard
            href="/specialties/orthopedics"
            title="Orthopedics"
            description="Bone, joint, and musculoskeletal care."
            icon={Activity}
          />
        </div>
      </Section>

      <Section
        title="Diagnostic Imaging"
        description="Advanced imaging technology for fast, accurate results."
        className="bg-slate-50"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {diagnostics.slice(0, 4).map((item) => (
            <LinkCard
              key={item.slug}
              href={`/diagnostics/${item.slug}`}
              title={item.name}
              description={item.summary}
              icon={ScanLine}
            />
          ))}
        </div>
        <div className="mt-6">
          <Button variant="outline" render={<Link href="/diagnostics" />}>
            View All Diagnostics
          </Button>
        </div>
      </Section>

      <Section
        title="Laboratory Services"
        description="Accurate, timely lab testing across every major diagnostic category."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {labCategories.slice(0, 4).map((item) => (
            <LinkCard
              key={item.slug}
              href={`/laboratory/${item.slug}`}
              title={item.name}
              description={item.summary}
              icon={FlaskConical}
            />
          ))}
        </div>
        <div className="mt-6">
          <Button variant="outline" render={<Link href="/laboratory" />}>
            View All Lab Services
          </Button>
        </div>
      </Section>

      <Section
        title="Health Checkup Packages"
        description="Curated packages for preventive care, women's health, and corporate wellness."
        className="bg-slate-50"
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {healthPackages.slice(0, 3).map((pkg) => (
            <LinkCard
              key={pkg.slug}
              href={`/health-packages/${pkg.category}`}
              title={pkg.name}
              description={pkg.summary}
              icon={ShieldCheck}
            />
          ))}
        </div>
        <div className="mt-6">
          <Button variant="outline" render={<Link href="/health-packages" />}>
            View All Packages
          </Button>
        </div>
      </Section>

      <Section title="For Every Patient and Partner">
        <div className="grid gap-4 sm:grid-cols-2">
          <LinkCard
            href="/for-corporates"
            title="For Corporates"
            description="Employee health checkups and diagnostic partnerships for organizations."
            icon={Building2}
          />
          <LinkCard
            href="/patient-info"
            title="Patient Info"
            description="Book appointments and get support throughout your visit."
            icon={UserRound}
          />
        </div>
      </Section>
    </>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  ShieldCheck,
  TrendingUp,
  CalendarCheck,
  FlaskConical,
  HeartPulse,
  Stethoscope,
  Phone,
  CheckCircle2,
} from "lucide-react";
import { CorporateInquiryForm } from "@/components/forms/corporate-inquiry-form";
import { siteConfig } from "@/lib/constants/site-config";

export const metadata: Metadata = {
  title: "For Corporates | Workplace Health Programs",
  description:
    "Partner with Clarus Magnus for employee health checkups, diagnostic partnerships, on-site health camps and wellness programs tailored for your organisation.",
};

const SERVICES = [
  {
    title: "Employee Health Checkups",
    description: "Customised health checkup programs for your team \u2014 in-clinic or on-site, designed around your schedule.",
    href: "/for-corporates/employee-health-checkups",
    icon: Stethoscope,
    img: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=600&q=80",
    imgAlt: "Stethoscope on a desk representing employee health checkups",
  },
  {
    title: "Diagnostic Partnerships",
    description: "Reliable testing and reporting for organisations \u2014 priority turnaround, dedicated account manager.",
    href: "/for-corporates/diagnostic-partnerships",
    icon: FlaskConical,
    img: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80",
    imgAlt: "Lab technician handling diagnostic samples in a modern laboratory",
  },
  {
    title: "On-site Health Camps",
    description: "Convenient and hassle-free workplace screenings \u2014 we bring the clinic to your office.",
    href: "/for-corporates/employee-health-checkups",
    icon: CalendarCheck,
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
    imgAlt: "Doctor conducting an on-site health screening",
  },
  {
    title: "Wellness Programs",
    description: "Preventive care for a healthier workforce \u2014 lifestyle counselling, nutrition guidance and more.",
    href: "/for-corporates/employee-health-checkups",
    icon: HeartPulse,
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
    imgAlt: "Group wellness and fitness session",
  },
];

const FEATURES = [
  { icon: Users, label: "Healthier Teams" },
  { icon: TrendingUp, label: "Greater Productivity" },
  { icon: ShieldCheck, label: "A Stronger Tomorrow" },
];

const WHY = [
  "Radiologist-led diagnostics with same-day reports",
  "Dedicated corporate account manager",
  "Flexible on-site or in-clinic options",
  "Comprehensive billing and MIS reports",
  "Free home sample collection for select tests",
  "Ambulance and emergency support",
];

export default function ForCorporatesPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-[#EEF4FF] via-white to-[#E8F6FE] pt-28 pb-0 lg:pt-36">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgb(20 47 134 / 4%) 1px, transparent 1px), linear-gradient(90deg, rgb(20 47 134 / 4%) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
          <div className="pb-12 lg:pb-24">
            <p className="inline-flex items-center gap-2 rounded-full bg-[#142F86]/8 px-4 py-1.5 text-xs font-black uppercase tracking-[0.2em] text-[#142F86]">
              For Corporates
            </p>
            <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-[-0.03em] text-[#142F86] sm:text-5xl lg:text-[3.25rem]">
              Workplace Health
              <span className="block">
                Programs That{" "}
                <span className="text-[#31B4F4]">Scale</span>
              </span>
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-[#142F86]/70">
              Partner with us for employee health checkups and long-term
              diagnostic partnerships \u2014 backed by radiologist-led precision and
              compassionate care.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {FEATURES.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 rounded-full border border-[#142F86]/12 bg-white px-4 py-2 text-sm font-semibold text-[#142F86] shadow-sm"
                >
                  <Icon className="size-4 text-[#31B4F4]" />
                  {label}
                </span>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#inquiry"
                className="inline-flex items-center gap-2.5 rounded-full bg-[#142F86] px-7 py-3.5 text-sm font-bold text-white transition hover:bg-[#1a3da0] hover:shadow-lg"
              >
                Partner With Us
                <ArrowRight className="size-4" />
              </a>
              <a
                href={siteConfig.phone.href}
                className="inline-flex items-center gap-2.5 rounded-full border-2 border-[#142F86] px-7 py-3.5 text-sm font-bold text-[#142F86] transition hover:bg-[#142F86] hover:text-white"
              >
                <Phone className="size-4" />
                Talk to Our Team
              </a>
            </div>
          </div>
          <div className="relative hidden lg:flex lg:items-end lg:justify-center lg:pb-0">
            <div className="relative h-[520px] w-[460px]">
              <div className="absolute inset-0 overflow-hidden rounded-[2.5rem] shadow-2xl">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=920&q=85"
                  alt="Doctor and corporate professional reviewing health data on a tablet"
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="absolute -right-8 top-10 w-52 rounded-2xl bg-white p-4 shadow-xl">
                <div className="flex items-start gap-3">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-[#31B4F4]/15">
                    <HeartPulse className="size-4 text-[#31B4F4]" />
                  </span>
                  <div>
                    <p className="text-xs font-bold text-[#142F86] leading-tight">Invest in Employee Wellbeing</p>
                    <p className="mt-0.5 text-[0.65rem] leading-snug text-[#142F86]/60">
                      Because healthy teams build brighter tomorrows.
                    </p>
                  </div>
                </div>
              </div>
              <p
                aria-hidden="true"
                className="absolute -bottom-2 -right-4 text-right text-lg italic leading-tight text-[#4FA3E3]"
                style={{ fontFamily: "Georgia, serif" }}
              >
                Care Today
                <span className="block pl-4">for a Healthier</span>
                <span className="block pl-8">Tomorrow</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F7FAFF] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#31B4F4]">Our Corporate Services</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-[#142F86] sm:text-4xl">
                Comprehensive Workplace
                <span className="block">Health Solutions</span>
              </h2>
              <p className="mt-3 max-w-xl text-[#142F86]/65">
                End-to-end diagnostic and preventive care designed for your
                organisation&apos;s well-being.
              </p>
            </div>
            <Link
              href="/for-corporates/employee-health-checkups"
              className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#31B4F4] hover:underline"
            >
              View All Services <ArrowRight className="size-4" />
            </Link>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(({ title, description, href, icon: Icon, img, imgAlt }) => (
              <Link
                key={title}
                href={href}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#142F86]/8 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-44 w-full overflow-hidden bg-[#EEF4FF]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={img} alt={imgAlt} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#142F86]/30 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-5">
                  <span className="grid size-9 place-items-center rounded-full bg-[#31B4F4]/12">
                    <Icon className="size-4 text-[#31B4F4]" />
                  </span>
                  <h3 className="font-bold text-[#142F86]">{title}</h3>
                  <p className="flex-1 text-sm leading-relaxed text-[#142F86]/65">{description}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-bold text-[#31B4F4] group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="size-3" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-16 px-5 sm:px-8 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl shadow-2xl">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=900&q=85"
              alt="Medical team in a modern diagnostic centre"
              className="h-[420px] w-full object-cover"
            />
            <div className="absolute bottom-6 left-6 rounded-2xl bg-white/95 px-5 py-4 shadow-lg backdrop-blur-sm">
              <p className="text-2xl font-black text-[#142F86]">24/7</p>
              <p className="text-xs font-semibold text-[#142F86]/65">MRI &amp; CT Available</p>
            </div>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#31B4F4]">Why Choose Us</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-[#142F86] sm:text-4xl">
              Diagnostics Built for
              <span className="block text-[#31B4F4]">Modern Workplaces</span>
            </h2>
            <p className="mt-4 text-[#142F86]/65 leading-relaxed">
              We combine radiologist-led precision with the flexibility and scale that growing organisations need.
            </p>
            <ul className="mt-7 space-y-3">
              {WHY.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#142F86]/80">
                  <CheckCircle2 className="size-5 shrink-0 text-[#31B4F4]" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#inquiry" className="inline-flex items-center gap-2 rounded-full bg-[#142F86] px-6 py-3 text-sm font-bold text-white hover:bg-[#1a3da0] transition">
                Get a Custom Quote <ArrowRight className="size-4" />
              </a>
              <Link href="/for-corporates/employee-health-checkups" className="inline-flex items-center gap-2 rounded-full border-2 border-[#142F86]/20 px-6 py-3 text-sm font-bold text-[#142F86] hover:border-[#142F86] transition">
                Explore Checkup Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="inquiry" className="bg-gradient-to-br from-[#142F86] to-[#1a4ab0] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#31B4F4]">Get in Touch</p>
            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">Request a Corporate Consultation</h2>
            <p className="mt-4 text-white/70">Tell us about your organisation and our team will get in touch within one business day.</p>
          </div>
          <div className="mx-auto mt-12 max-w-xl rounded-3xl bg-white p-8 shadow-2xl sm:p-10">
            <CorporateInquiryForm />
          </div>
        </div>
      </section>
    </main>
  );
}

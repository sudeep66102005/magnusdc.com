import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Baby,
  Building2,
  Check,
  CircleCheck,
  FlaskConical,
  HeartPulse,
  Microscope,
  ScanLine,
  ShieldCheck,
  Sparkles,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const services = [
  {
    title: "Advanced imaging",
    description: "3 Tesla MRI, Multislice CT, ultrasound, Doppler, digital X-ray, OPG and CBCT.",
    href: "/diagnostics",
    icon: ScanLine,
    accent: "from-[#142F86] to-[#284DA9]",
  },
  {
    title: "Laboratory medicine",
    description: "Routine, specialised, molecular and preventive testing supported by modern infrastructure.",
    href: "/laboratory",
    icon: FlaskConical,
    accent: "from-[#1C8FD0] to-[#31B4F4]",
  },
  {
    title: "Specialist consultations",
    description: "Experienced physicians and specialists working alongside diagnostics for coordinated care.",
    href: "/specialties",
    icon: Stethoscope,
    accent: "from-[#334B98] to-[#596DB2]",
  },
  {
    title: "Preventive health",
    description: "Thoughtfully designed health checks for individuals, families, women and organisations.",
    href: "/health-packages",
    icon: HeartPulse,
    accent: "from-[#C51E2D] to-[#EA3D48]",
  },
];

const promises = [
  ["Accuracy", "Advanced technology with expert interpretation."],
  ["Accessibility", "Convenient appointments and patient-friendly service."],
  ["Transparency", "Clear communication and ethical healthcare practices."],
  ["Compassion", "Every patient is treated with dignity and care."],
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#f7faff]">
        <div className="brand-grid absolute inset-0 opacity-60" />
        <div className="absolute -left-40 top-24 size-96 rounded-full bg-[#31B4F4]/10 blur-3xl" />
        <div className="relative mx-auto grid w-full min-w-0 max-w-[1440px] items-center gap-10 px-4 py-10 sm:gap-12 sm:px-8 sm:py-14 lg:grid-cols-[0.9fr_1.1fr] lg:px-12 lg:py-20 xl:px-20">
          <div className="relative z-10 min-w-0 max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#142F86]/10 bg-white/80 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.16em] text-[#142F86] shadow-sm backdrop-blur">
              <span className="size-2 rounded-full bg-[#DA1C29]" />
              Radiologist-led excellence
            </div>
            <h1 className="mt-6 text-[clamp(2.55rem,12vw,6.25rem)] font-black leading-[0.98] tracking-[-0.05em] text-[#102A75] sm:mt-7 sm:leading-[0.94]">
              Clarity for every health decision.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#4f5f78] sm:text-xl">
              Advanced diagnostics, laboratory services and multispecialty care—brought together with precision, transparency and genuine compassion.
            </p>
            <div className="mt-8 grid w-full gap-3 sm:mt-9 sm:flex sm:flex-row">
              <Button
                size="lg"
                className="h-13 w-full rounded-full bg-[#142F86] px-5 text-base shadow-[0_14px_34px_-16px_rgba(20,47,134,0.85)] hover:bg-[#0f266f] sm:w-auto sm:px-7"
                render={<Link href="/patient-info/appointment-booking" />}
              >
                Book an appointment
                <ArrowRight className="size-4" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="h-13 w-full rounded-full border-[#142F86]/20 bg-white/70 px-5 text-base text-[#142F86] hover:bg-white sm:w-auto sm:px-7"
                render={<Link href="/diagnostics" />}
              >
                Explore diagnostics
              </Button>
            </div>
            <div className="mt-8 grid min-w-0 grid-cols-2 gap-x-3 gap-y-3 text-xs font-semibold text-[#41516b] min-[420px]:text-sm sm:mt-9 sm:flex sm:flex-wrap sm:gap-x-6">
              {["Same-day slots", "Timely reporting", "Patient-first care"].map((item, index) => (
                <span
                  key={item}
                  className={`flex min-w-0 items-center gap-2 ${index === 2 ? "col-span-2" : ""}`}
                >
                  <CircleCheck className="size-4 shrink-0 text-[#31B4F4]" />
                  <span className="min-w-0 leading-5">{item}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="relative w-full min-w-0 lg:pl-4">
            <div className="premium-shadow relative h-[500px] w-full min-w-0 overflow-hidden rounded-[1.75rem] border-4 border-white bg-[#142F86] sm:h-auto sm:min-h-[510px] sm:aspect-[4/3.65] sm:rounded-[2.5rem] sm:border-[6px] lg:aspect-[4/4.6] xl:aspect-[4/3.9]">
              <Image
                src={`${basePath}/assets/images/mri-suite.webp`}
                alt="Advanced MRI suite at Clarus Magnus Health and Diagnostics"
                fill
                priority
                sizes="(max-width: 1024px) calc(100vw - 32px), 55vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#091a4d]/95 via-[#091a4d]/5 to-transparent" />

              <div className="absolute left-3 top-3 max-w-[calc(100%_-_1.5rem)] rounded-2xl border border-white/70 bg-white/95 p-3 shadow-xl backdrop-blur sm:left-5 sm:top-5 sm:p-5">
                <div className="flex items-center gap-2.5 sm:gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[#EAF7FE] text-[#142F86] sm:size-11">
                    <ShieldCheck className="size-4 sm:size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-base font-black text-[#142F86] sm:text-lg">18+ years</p>
                    <p className="text-[11px] font-semibold leading-4 text-[#65728a] sm:text-xs">of trusted healthcare</p>
                  </div>
                </div>
              </div>

              <div className="absolute inset-x-0 bottom-0 min-w-0 p-5 text-white sm:p-9">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#DA1C29] px-3 py-1.5 text-xs font-black shadow-lg sm:px-4 sm:py-2">
                  <span className="rounded-full bg-white/20 px-1.5 py-0.5">24/7</span>
                  MRI &amp; CT available
                </div>
                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#8ed7fa] sm:text-xs sm:tracking-[0.2em]">Precision imaging</p>
                <p className="mt-2 max-w-md text-xl font-bold leading-[1.2] sm:text-3xl sm:leading-tight">Advanced 3 Tesla MRI for exceptional diagnostic confidence.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#dbe5f2] bg-white">
        <div className="mx-auto grid min-w-0 max-w-7xl grid-cols-2 divide-x divide-y divide-[#dbe5f2] sm:px-8 lg:grid-cols-4 lg:divide-y-0">
          {[
            ["18+", "Years of trusted care"],
            ["3T", "Advanced MRI technology"],
            ["24/7", "MRI and CT services"],
            ["One roof", "Diagnostics and specialists"],
          ].map(([value, label]) => (
            <div key={label} className="min-w-0 px-3 py-6 text-center sm:px-8 sm:py-7">
              <p className="break-words text-2xl font-black tracking-tight text-[#142F86] sm:text-3xl">{value}</p>
              <p className="mt-1 break-words text-[11px] font-bold uppercase leading-5 tracking-[0.08em] text-[#6c788d] sm:text-sm sm:tracking-[0.12em]">{label}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid items-end gap-6 lg:grid-cols-[1fr_0.75fr]">
            <div>
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#DA1C29]">Care, connected</p>
              <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[1.03] tracking-[-0.04em] text-[#142F86] sm:text-5xl lg:text-6xl">
                Everything you need to move from uncertainty to clarity.
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-8 text-[#607089] lg:justify-self-end">
              One thoughtful destination for advanced imaging, accurate testing and expert clinical guidance—without a fragmented patient journey.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group relative overflow-hidden rounded-[1.75rem] border border-[#dce5f1] bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:border-[#31B4F4]/60 hover:shadow-[0_24px_60px_-32px_rgba(20,47,134,0.55)]"
                >
                  <div className={`flex size-13 items-center justify-center rounded-2xl bg-gradient-to-br ${service.accent} text-white shadow-lg`}>
                    <Icon className="size-6" />
                  </div>
                  <p className="absolute right-6 top-6 text-sm font-black text-[#142F86]/15">0{index + 1}</p>
                  <h3 className="mt-8 text-2xl font-black tracking-[-0.025em] text-[#172950]">{service.title}</h3>
                  <p className="mt-3 leading-7 text-[#66738a]">{service.description}</p>
                  <span className="mt-7 flex items-center gap-2 text-sm font-black text-[#142F86]">
                    Explore service
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      <section className="overflow-hidden bg-[#102A75] py-20 text-white sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div className="relative">
            <div className="absolute -left-20 -top-20 size-72 rounded-full bg-[#31B4F4]/15 blur-3xl" />
            <p className="relative text-[clamp(7rem,18vw,13rem)] font-black leading-none tracking-[-0.08em] text-white">18<span className="text-[#31B4F4]">+</span></p>
            <p className="relative mt-2 max-w-xs text-lg font-bold leading-7 text-white/80">years of community trust, clinical reliability and patient-centred care.</p>
          </div>
          <div>
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8ed7fa]">Our story</p>
            <h2 className="mt-4 text-4xl font-black leading-[1.05] tracking-[-0.04em] sm:text-5xl">A legacy of trust. Reimagined for the future.</h2>
            <p className="mt-6 text-lg leading-8 text-white/72">
              Clarus Magnus is the evolution of a trusted Bengaluru healthcare institution—now re-established under radiologist-led leadership with advanced technology, clinical expertise and a renewed commitment to patient-centred care.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                [Microscope, "Radiologist-led", "Quality and clinical relevance at every step."],
                [Sparkles, "Modern by design", "Technology and care working seamlessly together."],
                [Baby, "Specialised expertise", "Including fetal medicine and women’s imaging."],
                [Building2, "Koramangala", "Conveniently located in the heart of Bengaluru."],
              ].map(([Icon, title, copy]) => {
                const ItemIcon = Icon as typeof Microscope;
                return (
                  <div key={String(title)} className="rounded-2xl border border-white/12 bg-white/[0.06] p-5">
                    <ItemIcon className="size-5 text-[#31B4F4]" />
                    <h3 className="mt-4 font-black">{String(title)}</h3>
                    <p className="mt-1 text-sm leading-6 text-white/65">{String(copy)}</p>
                  </div>
                );
              })}
            </div>
            <Button
              variant="outline"
              className="mt-9 rounded-full border-white/25 bg-white/5 px-6 text-white hover:bg-white hover:text-[#142F86]"
              render={<Link href="/about" />}
            >
              Discover our story
              <ArrowRight className="size-4" />
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-[#f4f8ff] py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#DA1C29]">The Clarus Magnus difference</p>
            <h2 className="mt-4 text-4xl font-black tracking-[-0.04em] text-[#142F86] sm:text-5xl">Clarity with care.</h2>
            <p className="mt-5 text-lg leading-8 text-[#607089]">Because exceptional healthcare is not only about what we find. It is about how supported you feel while finding it.</p>
          </div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {promises.map(([title, description]) => (
              <div key={title} className="rounded-3xl border border-white bg-white p-7 shadow-[0_16px_45px_-34px_rgba(20,47,134,0.65)]">
                <Check className="size-5 text-[#31B4F4]" strokeWidth={3} />
                <h3 className="mt-6 text-xl font-black text-[#142F86]">{title}</h3>
                <p className="mt-2 leading-7 text-[#65738a]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="grid gap-5 lg:grid-cols-3">
            {[
              ["01", "Choose your service", "Explore diagnostics, laboratory tests, specialist consultations or preventive packages."],
              ["02", "Book with ease", "Request an appointment online or speak with our care team for the right slot."],
              ["03", "Arrive with confidence", "Receive clear preparation guidance, compassionate support and timely reporting."],
            ].map(([number, title, description]) => (
              <div key={number} className="relative rounded-[1.75rem] border border-[#dce5f1] p-8">
                <span className="text-sm font-black tracking-[0.18em] text-[#DA1C29]">{number}</span>
                <h3 className="mt-7 text-2xl font-black tracking-[-0.025em] text-[#142F86]">{title}</h3>
                <p className="mt-3 leading-7 text-[#65738a]">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 sm:px-8 sm:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.25rem] bg-[#142F86] px-6 py-12 text-white sm:px-12 sm:py-16 lg:flex lg:items-center lg:justify-between lg:gap-14">
          <div className="absolute -right-16 -top-28 size-80 rounded-full border-[60px] border-[#31B4F4]/15" />
          <div className="relative max-w-2xl">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#8ed7fa]">Your health, made clearer</p>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-[-0.04em] sm:text-5xl">Ready to take the next step?</h2>
            <p className="mt-4 text-lg leading-8 text-white/72">Tell us what you need. Our team will help you choose the right service and appointment.</p>
          </div>
          <div className="relative mt-8 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
            <Button
              size="lg"
              className="h-13 rounded-full bg-white px-7 text-[#142F86] hover:bg-[#EAF7FE]"
              render={<Link href="/patient-info/appointment-booking" />}
            >
              Book appointment
              <ArrowRight className="size-4" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-13 rounded-full border-white/25 bg-transparent px-7 text-white hover:bg-white/10"
              render={<Link href="/contact" />}
            >
              Contact us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

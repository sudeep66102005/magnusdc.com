import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { siteConfig } from "@/lib/constants/site-config";
import { mainNav } from "@/lib/constants/navigation";

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (p: string) => `${BP}${p}`;

/* ---- Content (Clarus Magnus business details, Dantora structure) ---- */

const HEADER_NAV = mainNav.map((item) => {
  const sourceChildren = item.children?.length
    ? [...item.children]
    : [{ label: item.label, href: item.href }];
  const children = sourceChildren.some((child) => child.href === item.href)
    ? sourceChildren
    : [{ label: `${item.label} Overview`, href: item.href }, ...sourceChildren];

  if (item.label === "Doctors") {
    children.push({ label: "Book Appointment", href: "/patient-info/appointment-booking" });
  }
  if (item.label === "Diagnostics") {
    children.push({ label: "Book Appointment", href: "/patient-info/appointment-booking" });
  }
  if (item.label === "Laboratory") {
    children.push({ label: "Book Test", href: "/patient-info/appointment-booking" });
  }

  return { ...item, children };
});

const HERO = {
  titleAccent: "Clarity",
  title: "in every diagnosis",
  description: "Advanced diagnostics. Expert specialists. Care that understands you.",
  actions: [
    { label: "Book a visit", href: `${BP}/patient-info/appointment-booking`, primary: true },
    { label: "Our services", href: "#services", primary: false },
  ],
  trustLine: "Radiologist-led care in Koramangala, Bengaluru",
  chips: ["Diagnostic Imaging", "Laboratory", "Health Check-ups", "Specialist Care", "Women's Imaging"],
};

const WHY = {
  eyebrow: "Why Clarus Magnus",
  title: "18 years of trust. A new era of healthcare.",
  description:
    "Built on 18 years of healthcare experience, Clarus Magnus Health & Diagnostics represents a new chapter—bringing together advanced diagnostics, specialist-led care and a modern patient experience.",
  stats: [
    { value: "18+", label: "Years of experience", icon: "shield" as const },
    { value: "3T", label: "Advanced MRI", icon: "scan" as const },
    { value: "20+", label: "Specialist consultants", icon: "team" as const },
  ],
  actions: [
    { label: "Our team", href: "#team", primary: true },
    { label: "How we work", href: "#about", primary: false },
  ],
  trail: Array.from({ length: 8 }, (_, i) => asset(`/assets/dantora/why/0${i + 1}.png`)),
};

const SERVICES_INTRO = {
  eyebrow: "Our Services",
  title: "Everything your diagnosis needs, under one roof",
  description:
    "From a routine health check to advanced imaging and molecular testing — five directions covering prevention, diagnosis and long-term care.",
};

const svcImg = (f: string) => encodeURI(`${BP}/assets/uploads/services/${f}`);

const SERVICE_CARDS = [
  {
    title: "Imaging",
    href: `${BP}/diagnostics`,
    desktop: svcImg("desktop imaging image.jpeg"),
    mobile: svcImg("mobile imaging image.jpeg"),
    items: [
      { label: "MRI", icon: "mri" },
      { label: "CT", icon: "ct" },
      { label: "Ultrasound", icon: "ultrasound" },
      { label: "Doppler", icon: "doppler" },
      { label: "X-Ray", icon: "xray" },
      { label: "CBCT & OPG", icon: "dental" },
    ],
  },
  {
    title: "Women\u2019s & Fetal Medicine",
    href: `${BP}/specialties`,
    pos: "82% 45%",
    desktop: svcImg("updated desktop image of womens and fetal.jpeg"),
    mobile: svcImg("updated mobile image of womens and fetal.jpeg"),
    items: [
      { label: "Early Pregnancy", icon: "baby" },
      { label: "NT/NB", icon: "ruler" },
      { label: "Anomaly Scan", icon: "search" },
      { label: "Growth Scan", icon: "growth" },
      { label: "Fetal Echo", icon: "heart" },
      { label: "Doppler", icon: "doppler" },
    ],
  },
  {
    title: "Laboratory",
    href: `${BP}/laboratory`,
    desktop: svcImg("desktop image of Laboratory.jpeg"),
    mobile: svcImg("mobile image of laboratory.jpeg"),
    items: [
      { label: "Routine Diagnostics", icon: "tube" },
      { label: "Cancer Testing", icon: "microscope" },
      { label: "Genetic & Molecular Testing", icon: "dna" },
      { label: "Allergy Panels", icon: "allergy" },
    ],
  },
  {
    title: "Specialist Care",
    href: `${BP}/specialties`,
    desktop: svcImg("desktop image of Specialist Care.jpeg"),
    mobile: svcImg("mobile image of Specialist Care.jpeg"),
    items: [
      { label: "Cardiology", icon: "heart" },
      { label: "Neurology", icon: "brain" },
      { label: "Orthopaedics", icon: "bone" },
      { label: "Gastroenterology", icon: "stomach" },
      { label: "Nephrology", icon: "kidney" },
      { label: "ENT", icon: "ear" },
      { label: "General Medicine", icon: "stetho" },
      { label: "and more", icon: "more" },
    ],
  },
];

const ABOUT = {
  eyebrow: "About the clinic",
  banner: asset("/assets/dantora/about/banner.png"),
  stats: [
    { value: "18+", label: "Years of trusted care" },
    { value: "3T", label: "Advanced MRI" },
    { value: "24/7", label: "MRI & CT access" },
    { value: "4.8", label: "Google patient rating" },
  ],
  paragraph: [
    { text: "Clarus Magnus is a radiologist-led destination in ", muted: true },
    { text: "Koramangala", muted: true, accent: true },
    { text: " where diagnosis and care are never separated. ", muted: false },
    { text: "Imaging, laboratory", muted: true, accent: true },
    { text: " and consulting rooms sit together, ", muted: true },
    { text: "and your reports reach the ", muted: false },
    { text: "right specialist", muted: false, accent: true },
    { text: " the same day.", muted: false },
  ],
  actions: [
    { label: "Book a consultation", href: "#contact", primary: true },
    { label: "Health packages", href: `${BP}/health-packages`, primary: false },
  ],
};

const TEAM = {
  eyebrow: "Our Team",
  title: "The specialists you\u2019ll actually see, every visit.",
  members: [
    { name: "Radiology", specialty: "Imaging", degree: "", experience: "", image: asset("/assets/dantora/team/01.png"), href: `${BP}/specialties` },
    { name: "Internal Medicine", specialty: "General Medicine", degree: "", experience: "", image: asset("/assets/dantora/team/02.png"), href: `${BP}/specialties` },
    { name: "Cardiology", specialty: "Heart Care", degree: "", experience: "", image: asset("/assets/dantora/team/03.png"), href: `${BP}/specialties` },
    { name: "Orthopaedics", specialty: "Bone & Joint", degree: "", experience: "", image: asset("/assets/dantora/team/04.png"), href: `${BP}/specialties` },
    { name: "Women\u2019s Health", specialty: "Obstetrics & Gynaecology", degree: "", experience: "", image: asset("/assets/dantora/team/05.png"), href: `${BP}/specialties` },
    { name: "ENT", specialty: "Ear, Nose & Throat", degree: "", experience: "", image: asset("/assets/dantora/team/01.png"), href: `${BP}/specialties` },
  ],
  more: { title: "A wider multispecialty team", cta: "View More Doctors", href: `${BP}/specialties` },
};

const CONTACT = {
  eyebrow: "Get in touch",
  title: "Not sure which scan or specialist you need? Ask us.",
  description:
    "Leave your details and our care team will call you back to help you choose the right scan, package or doctor — and a time that suits you.",
  formTitle: "Request a call back",
  submit: "Send Request",
};

const DNA_MARK =
  "M15.0223 1.46977C15.3152 1.17693 15.791 1.17689 16.0838 1.46977C16.3763 1.76259 16.3763 2.23751 16.0838 2.53031C14.5974 4.01669 14.5974 6.42675 16.0838 7.91312C17.5702 9.39907 19.9795 9.39914 21.4657 7.91312C21.7585 7.62034 22.2333 7.62044 22.5262 7.91312C22.8189 8.20592 22.8198 8.68078 22.5272 8.97367C21.1685 10.3325 19.2557 10.7992 17.5155 10.376C17.6669 10.8911 17.7499 11.4359 17.7499 12C17.7498 15.1756 15.1754 17.7499 11.9999 17.75C11.4358 17.75 10.8909 17.6671 10.3758 17.5157C10.8003 19.2564 10.3329 21.1707 8.9735 22.5303C8.6808 22.8228 8.20584 22.8235 7.91295 22.5313C7.62011 22.2385 7.62022 21.7627 7.91295 21.4698C9.39891 19.9835 9.39867 17.5743 7.91295 16.0879C6.42657 14.6015 4.01651 14.6015 2.53014 16.0879C2.2374 16.3802 1.7624 16.3801 1.46959 16.0879C1.17675 15.7951 1.17686 15.3193 1.46959 15.0264C2.82903 13.6671 4.7426 13.1988 6.48326 13.6231C6.33203 13.1083 6.24987 12.5638 6.24986 12C6.24986 8.8244 8.82423 6.25004 11.9999 6.25004C12.5622 6.25005 13.1053 6.33195 13.619 6.48246C13.1952 4.74209 13.6633 2.82892 15.0223 1.46977ZM11.9999 7.75004C9.65265 7.75004 7.74986 9.65283 7.74986 12C7.74989 14.3472 9.65267 16.25 11.9999 16.25C14.347 16.25 16.2498 14.3472 16.2499 12C16.2499 9.65288 14.347 7.75013 11.9999 7.75004Z";

const css = String.raw`
body:has(.cm-root) > header.sticky{display:none!important}
html:has(.cm-root){scroll-behavior:smooth}

.cm-root{--green:#142F86;--green-deep:#DA1C29;--lime:#31B4F4;--lime-b:rgb(49 180 244 / .82);--mint:#FFFFFF;--mint-deep:#FFFFFF;--ink:#142F86;--muted:rgb(20 47 134 / .55);--subtle:rgb(20 47 134 / .72);--line:rgb(20 47 134 / .16);--glass:#FFFFFF;--glass-s:#FFFFFF;--glass-strong:#FFFFFF;
  position:relative;isolation:isolate;background:#FFFFFF;color:var(--ink);font-family:var(--font-lato),Arial,Helvetica,system-ui,sans-serif;font-weight:400;line-height:1.2;-webkit-font-smoothing:antialiased;overflow-x:clip}
.cm-root *{box-sizing:border-box}
.cm-root a:not(.cm-btn):not(.cm-nav__contact):not(.cm-svc__btn){color:inherit;text-decoration:none}
.cm-root button,.cm-root input,.cm-root textarea{font:inherit;color:inherit}
.cm-root ::selection{background:rgb(49 180 244 / .22);color:var(--green)}
.cm-shell{width:min(100% - 5rem,90rem);margin-inline:auto}
@media(max-width:1023px){.cm-shell{width:100%}}
.cm-eyebrow{font-size:.875rem;font-weight:700;letter-spacing:.02em;text-transform:uppercase;color:var(--green);margin:0}
.cm-lead{font-size:clamp(2.25rem,5.4vw,3.75rem);line-height:1.05;font-weight:700;letter-spacing:-.01em;margin:0}
.cm-lead__accent{display:block;font-size:1.25em;font-family:var(--font-playfair),Georgia,serif;font-style:italic;font-weight:700;background:linear-gradient(120deg,var(--green),var(--lime));-webkit-background-clip:text;background-clip:text;color:transparent}
.cm-lead__rest{display:block}
.cm-body{font-size:1rem;line-height:1.35;font-weight:400;margin:0}

/* buttons */
.cm-btn{display:inline-flex;align-items:center;justify-content:center;height:3rem;padding:0 2rem;border-radius:46px;border:1px solid transparent;font-size:1.25rem;font-weight:700;white-space:nowrap;transition:background .15s,color .15s,transform .3s}
.cm-btn:hover{transform:translateY(-2px)}
.cm-btn--pill{gap:.6rem}
.cm-btn--pill .cm-arrow{width:1.1rem;height:1.1rem}
.cm-hero__button{position:relative;isolation:isolate;overflow:hidden;border-color:transparent;transition:color .9s ease,transform .3s}
.cm-hero__button::before{content:"";position:absolute;inset:0;z-index:0;transform:translateX(-105%);transition:transform 1s cubic-bezier(.22,1,.36,1)}
.cm-hero__button>span,.cm-hero__button>.cm-arrow{position:relative;z-index:1}
.cm-hero__button:hover::before,.cm-hero__button:focus-visible::before{transform:translateX(0)}
.cm-hero__button--primary{background:#142F86;color:#FFFFFF}
.cm-hero__button--primary::before{background:linear-gradient(110deg,#142F86 0%,#31B4F4 52%,#142F86 100%)}
.cm-hero__button--secondary{background:#31B4F4;color:#142F86}
.cm-hero__button--secondary::before{background:linear-gradient(110deg,#31B4F4 0%,#142F86 52%,#31B4F4 100%)}
.cm-hero__button--secondary:hover,.cm-hero__button--secondary:focus-visible{color:#FFFFFF}
.cm-btn--primary{background:var(--green);border-color:var(--green-deep);color:#FFFFFF}
.cm-btn--primary:hover{background:var(--green-deep)}
.cm-btn--secondary{background:var(--lime);border-color:var(--lime-b);color:#142F86}
.cm-btn--secondary:hover{background:var(--lime-b)}
.cm-btn--arrow{height:3.375rem;gap:.625rem;padding-right:.125rem;padding-left:2rem}
.cm-disc{display:grid;place-items:center;width:3rem;height:3rem;flex:none;border-radius:999px;background:var(--lime);color:#142F86}
.cm-arrow{width:1rem;height:1rem;display:block}

/* generic section */
.cm-section{position:relative}
.cm-panel{background:var(--mint)}
.cm-round-b{border-radius:0 0 48px 48px}
.cm-round-t{border-radius:48px 48px 0 0}

/* HERO */
.cm-hero{position:relative;min-height:100lvh;overflow:hidden;padding:9rem 1.25rem 4rem}
@media(min-width:768px){.cm-hero{padding-inline:2.5rem}}
.cm-hero__inner{position:relative;min-height:calc(100lvh - 13rem);display:flex;flex-direction:column}
.cm-hero__copy{position:relative;z-index:3;display:flex;flex-direction:column;gap:0;max-width:44.75rem;padding-top:2.5rem}
.cm-hero__head{display:flex;flex-direction:column;gap:0}
.cm-hero__desc{max-width:18rem;margin-top:4.25rem;color:var(--subtle);border-left:2px solid var(--lime);padding-left:1rem}
.cm-hero__actions{display:flex;flex-direction:row;flex-wrap:nowrap;gap:.75rem;position:relative;z-index:3;margin-top:4rem}
.cm-hero__actions .cm-btn{flex:0 1 10.5rem;width:auto;height:2.875rem;padding:0 .85rem;font-size:.95rem}
.cm-hero__scene{position:absolute;top:1.5rem;right:0;left:auto;width:52%;height:30rem;z-index:1;margin:0;pointer-events:none}
.cm-dna{display:block;width:100%;height:100%}
.cm-hero__meta{display:flex;flex-direction:column;gap:1.5rem}
.cm-hero__rule{border:0;border-top:1px solid var(--line);margin:3rem 0 0}
.cm-hero__trust{display:flex;align-items:center;gap:.75rem;font-size:1rem;color:var(--green);margin:1.25rem 0 0}
.cm-hero__trust span{height:1px;width:3.125rem;background:var(--green)}
.cm-chips{display:flex;flex-wrap:wrap;gap:.25rem;margin:1.25rem 0 0;padding:0;list-style:none}
.cm-chips li{border:1px solid var(--line);background:var(--glass-s);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);border-radius:37px;padding:.75rem 1.25rem;font-size:.875rem;font-weight:400}
@media(max-width:1023px){
  .cm-hero__inner{width:100%}
  .cm-hero__rule,.cm-hero__trust,.cm-chips{display:none}
  .cm-hero__scene{top:-9rem;right:-1.25rem;bottom:-4rem;left:-1.25rem;width:auto;height:auto}
}
@media(min-width:768px) and (max-width:1023px){
  .cm-hero__scene{right:-2.5rem;left:-2.5rem}
}
@media(min-width:1024px){
  .cm-hero{padding:0;height:100lvh;min-height:0}
  .cm-hero__inner{display:block;height:100%;min-height:0}
  .cm-hero__copy{position:absolute;top:50%;left:2.5rem;transform:translateY(-50%);gap:0}
  .cm-hero__head{gap:0}
  .cm-hero__copy .cm-body{width:30.875rem}
  .cm-hero__desc{max-width:none;margin-top:2.5rem}
  .cm-hero__scene{position:absolute;inset-block:0;right:auto;left:22.5rem;width:71.25rem;height:auto;margin:0}
  .cm-hero__actions{position:relative;top:auto;left:auto;flex-direction:row;margin-top:2rem}
  .cm-hero__actions .cm-btn{flex:0 0 10.5rem;width:10.5rem}
  .cm-hero__rule{position:absolute;top:78.625%;right:2.5rem;left:2.5625rem;margin:0}
  .cm-hero__trust{position:absolute;top:83.625%;left:2.5rem;margin:0}
  .cm-chips{position:absolute;top:83.625%;left:55.5625rem;width:31.9375rem;justify-content:flex-end;gap:.25rem;margin:0}
  .cm-chips li{padding:1rem 2rem;font-size:1rem}
  .cm-lead{font-size:3.75rem}
}

/* WHY */
.cm-why{min-height:100lvh;display:grid;place-items:center;overflow:hidden;background:#FFFFFF;text-align:center;padding:6rem 1.25rem}
.cm-why__inner{position:relative;z-index:2;display:flex;flex-direction:column;align-items:center;gap:2rem;width:min(100% - 2.5rem,44.75rem)}
.cm-why .cm-lead{width:100%}
@media(min-width:1024px){.cm-why .cm-lead{width:39.25rem}.cm-why .cm-body{width:27.625rem}}
.cm-why__desc{max-width:44rem;color:var(--subtle);margin:0}
.cm-why__stats{display:flex;flex-wrap:wrap;justify-content:center;align-items:center;gap:1.5rem 2.5rem;margin:0}
.cm-why__stat{display:flex;align-items:center;gap:.9rem;text-align:left}
.cm-why__stat-icon{display:grid;place-items:center;width:3.75rem;height:3.75rem;flex:none;border-radius:999px;background:rgb(49 180 244 / .12);color:var(--green)}
.cm-why__stat-icon svg{width:1.9rem;height:1.9rem}
.cm-why__stat-text{display:flex;flex-direction:column;gap:.15rem}
.cm-why__stat dd{font-size:2rem;line-height:1;font-weight:700;margin:0;color:var(--green)}
.cm-why__stat dt{font-size:.9rem;font-weight:400;color:var(--subtle);margin:0;max-width:7rem}
@media(min-width:1024px){.cm-why__stats{gap:1.5rem 3.5rem}.cm-why__stat dd{font-size:2.5rem}}
@media(max-width:1023px){
  .cm-why__stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1rem .5rem;width:100%}
  .cm-why__stat{flex-direction:column;align-items:center;text-align:center;gap:.55rem}
  .cm-why__stat-icon{width:3rem;height:3rem}
  .cm-why__stat-icon svg{width:1.5rem;height:1.5rem}
  .cm-why__stat-text{align-items:center;text-align:center}
  .cm-why__stat dd{font-size:1.6rem}
  .cm-why__stat dt{font-size:.78rem;max-width:6.5rem}
  .cm-why__actions{width:100%;gap:.75rem}
  .cm-why__actions .cm-btn{flex:1 1 0;width:auto;min-width:0;height:2.875rem;padding:0 .75rem;font-size:.95rem}
}
.cm-why__actions{display:flex;gap:1rem}
.cm-why__actions .cm-btn{width:11.25rem}
.cm-trail{position:absolute;inset:0;z-index:1;overflow:hidden;pointer-events:none}
.cm-trail__card{position:absolute;top:0;left:0;width:13.5rem;height:17rem;border-radius:24px;background-size:cover;background-position:center;will-change:transform,opacity;opacity:0}

/* SERVICES */
.cm-services{position:relative;background:#FFFFFF;padding:5rem 1.25rem 4rem}
@media(min-width:768px){.cm-services{padding-inline:2.5rem}}
.cm-services__intro{display:flex;flex-direction:column;gap:1rem;max-width:56rem;margin:0 auto 2.5rem;text-align:center;align-items:center}
.cm-svc-grid{display:grid;grid-template-columns:1fr;gap:1.25rem;width:min(100%,84rem);margin-inline:auto}
@media(min-width:768px){.cm-svc-grid{grid-template-columns:1fr 1fr}}
.cm-svc{position:relative;display:flex;flex-direction:column;justify-content:space-between;min-height:26rem;overflow:hidden;border-radius:20px;background:#142F86}
@media(min-width:768px){.cm-svc{min-height:32rem}}
.cm-svc__img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .7s cubic-bezier(.2,0,0,1)}
.cm-svc:hover .cm-svc__img{transform:scale(1.05)}
.cm-svc--wf{justify-content:space-between}
.cm-svc--wf .cm-svc__head{order:initial;width:52%;max-width:20rem;padding-right:0}
.cm-svc--wf .cm-svc__actions{order:initial}
.cm-svc--wf .cm-svc__scrim{background:linear-gradient(90deg,rgb(0 0 0 / .66) 0%,rgb(0 0 0 / .46) 30%,rgb(0 0 0 / .12) 52%,rgb(0 0 0 / 0) 72%),linear-gradient(0deg,rgb(0 0 0 / .7) 0%,rgb(0 0 0 / .14) 30%,rgb(0 0 0 / 0) 52%)}
@media(max-width:1023px){
  .cm-svc--wf .cm-svc__title{font-size:1.7rem;line-height:1.02}
}
@media(max-width:767px){
  .cm-svc--wf .cm-svc__img{left:0;right:auto;width:125%;object-position:50% 40%!important}
  .cm-svc--wf .cm-svc__head{width:45%;max-width:none;padding-right:0}
  .cm-svc--wf .cm-svc__list{gap:.4rem}
  .cm-svc--wf .cm-svc__list li{font-size:.82rem}
  .cm-svc--wf .cm-svc__scrim{background:linear-gradient(90deg,rgb(0 0 0 / .7) 0%,rgb(0 0 0 / .48) 34%,rgb(0 0 0 / .1) 52%,rgb(0 0 0 / 0) 66%),linear-gradient(0deg,rgb(0 0 0 / .72) 0%,rgb(0 0 0 / .15) 32%,rgb(0 0 0 / 0) 52%)}
}
.cm-svc__scrim{position:absolute;inset:0;background:linear-gradient(180deg,rgb(0 0 0 / .55),rgb(0 0 0 / .18) 45%,rgb(0 0 0 / .68))}
.cm-svc__head{position:relative;z-index:2;padding:1.75rem}
@media(min-width:768px){.cm-svc__head{padding:2rem}}
.cm-svc__title{margin:0;font-size:2rem;line-height:1.05;font-weight:700;letter-spacing:-.02em;color:#FFFFFF}
@media(min-width:768px){.cm-svc__title{font-size:2.5rem}}
.cm-svc__title{font-family:var(--font-inter),var(--font-lato),system-ui,sans-serif;font-weight:800;letter-spacing:-.03em}
.cm-svc__list{display:flex;flex-direction:column;align-items:flex-start;gap:.5rem;margin:1.1rem 0 0;padding:0;list-style:none;max-width:26rem}
.cm-svc__list li{display:flex;align-items:center;gap:.5rem;font-family:var(--font-inter),var(--font-lato),system-ui,sans-serif;font-size:.9rem;font-weight:400;line-height:1.18;color:rgb(255 255 255 / .95)}
.cm-svc__ico{display:grid;place-items:center;width:1.55rem;height:1.55rem;flex:none;border-radius:999px;background:rgb(255 255 255 / .18);color:#FFFFFF}
.cm-svc__ico svg{width:.95rem;height:.95rem}
@media(min-width:768px){.cm-svc__list li{font-size:.95rem}.cm-svc__ico{width:1.7rem;height:1.7rem}.cm-svc__ico svg{width:1.05rem;height:1.05rem}}
.cm-svc__actions{position:relative;z-index:2;display:flex;flex-direction:column;gap:.75rem;padding:1.75rem}
@media(min-width:520px){.cm-svc__actions{flex-direction:row}}
@media(min-width:768px){.cm-svc__actions{padding:2rem}}
.cm-svc__btn{display:inline-flex;flex:1 1 0;min-width:0;align-items:center;justify-content:center;gap:.5rem;height:3rem;padding:0 1.25rem;border-radius:999px;font-size:.95rem;font-weight:700;white-space:nowrap;transition:background .2s,color .2s}
.cm-svc__btn--primary{background:#000000;color:#FFFFFF!important}
.cm-svc__btn--primary:hover{background:#142F86;color:#FFFFFF!important}
.cm-svc__btn--light{background:#FFFFFF;color:#111111}
.cm-svc__btn--light:hover{background:#F0F0F0;color:#000000}
.cm-svc__btn .cm-arrow{width:1rem;height:1rem}
.cm-card__cta{position:relative;z-index:2;display:flex;align-items:flex-end;justify-content:space-between}
.cm-card__cta p{margin:0;font-size:1rem}
.cm-card__ring{display:grid;place-items:center;width:3.5rem;height:3.5rem;border-radius:999px;border:1px solid #142F86;color:#142F86}
@media(min-width:1024px){.cm-card__cta p{font-size:1.25rem}.cm-card__ring{width:4.5rem;height:4.5rem}}


/* ABOUT */
.cm-about{position:relative;z-index:10;margin-top:0;background:#FFFFFF;padding:4rem 1.25rem}
@media(min-width:768px){.cm-about{padding-inline:2.5rem}}
.cm-about__banner{position:relative;overflow:hidden;border-radius:24px;height:16rem}
.cm-about__banner img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:center}
.cm-about__content{margin-top:2.5rem;display:flex;flex-direction:column;gap:2.5rem}
.cm-about__stats{display:grid;grid-template-columns:1fr 1fr;gap:2.5rem .625rem}
.cm-stat{display:flex;flex-direction:column;gap:1rem;border-left:1px solid var(--green);padding-left:1rem}
.cm-stat dd{font-size:2.5rem;line-height:1.05;font-weight:700;margin:0}
.cm-stat dt{font-size:.875rem;font-weight:400}
.cm-about__para{font-size:1.375rem;line-height:1.2;font-weight:400;margin:0}
.cm-about__para .muted{color:var(--muted)}
.cm-about__para .accent{font-family:var(--font-playfair),Georgia,serif;font-style:italic;font-weight:700}
.cm-about__actions{display:flex;flex-wrap:wrap;gap:1rem}
@media(min-width:768px){.cm-about__banner{height:24rem}.cm-about__para{font-size:1.75rem}}
@media(min-width:1024px){
  .cm-about{height:71.5rem;padding:0}
  .cm-about__banner{position:absolute;top:2.5rem;left:2.5rem;width:85rem;height:31.25rem}
  .cm-about__content{position:absolute;top:37.75rem;left:2.375rem;width:85.125rem;margin:0;flex-direction:row;align-items:center;justify-content:space-between;gap:0}
  .cm-about__left{display:flex;flex-direction:column;gap:5.5rem;width:28rem}
  .cm-about__stats{gap:5.625rem .625rem}
  .cm-stat{gap:2.375rem;padding-left:1.5rem}
  .cm-stat dd{font-size:3.75rem}
  .cm-stat dt{font-size:1rem}
  .cm-about__right{display:flex;flex-direction:column;gap:8.375rem;width:49.3125rem}
  .cm-about__para{font-size:2.25rem}
  .cm-about__actions .cm-btn:first-child{width:15rem}
  .cm-about__actions .cm-btn:last-child{width:11.25rem}
}
.cm-about__actions .cm-btn--primary{color:#FFFFFF;border-color:var(--green)}
.cm-about__actions .cm-btn--primary:hover{background:var(--green);color:#FFFFFF}

/* TEAM */
.cm-team{position:relative;z-index:10;background:#FFFFFF;padding:5rem 1.25rem}
@media(min-width:768px){.cm-team{padding-inline:2.5rem}}
.cm-team__head{display:flex;flex-direction:column;align-items:center;gap:1rem;max-width:56rem;margin:0 auto 2.5rem;text-align:center}
.cm-docs{display:grid;grid-template-columns:1fr;gap:1rem;width:min(100%,84rem);margin-inline:auto}
@media(min-width:640px){.cm-docs{grid-template-columns:1fr 1fr}}
@media(min-width:1024px){.cm-docs{grid-template-columns:repeat(3,1fr)}}
.cm-doc{position:relative;display:flex;align-items:stretch;overflow:hidden;border-radius:8px;background:#EFF1EA;aspect-ratio:299/197;min-height:11.5rem}
.cm-doc__photo{position:relative;flex:0 0 43%;align-self:stretch;background:#E4E8DC}
.cm-doc__photo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 18%}
.cm-doc__body{position:relative;flex:1 1 auto;min-width:0;display:flex;flex-direction:column;align-items:flex-start;padding:1.6rem .95rem .9rem}
.cm-doc__go{position:absolute;top:.6rem;right:.8rem;display:grid;place-items:center;width:1.45rem;height:1.45rem;border-radius:999px;background:#1B1B1B;color:#FFFFFF!important}
.cm-doc__go .cm-arrow{width:.75rem;height:.75rem}
.cm-doc__spec{margin:0 1.9rem .28rem 0;font-family:var(--font-inter),var(--font-lato),system-ui,sans-serif;font-size:.7rem;font-weight:400;line-height:1.25;color:rgb(20 47 134 / .6)}
.cm-doc__name{margin:0 0 .28rem;font-family:var(--font-inter),var(--font-lato),system-ui,sans-serif;font-size:.95rem;line-height:1.2;font-weight:800;letter-spacing:-.015em;color:#142F86}
.cm-doc__deg,.cm-doc__exp{margin:0;font-family:var(--font-inter),var(--font-lato),system-ui,sans-serif;font-size:.7rem;font-weight:400;line-height:1.3;color:rgb(20 47 134 / .55)}
.cm-doc__btn{display:inline-flex;align-items:center;justify-content:center;gap:.35rem;margin-top:auto;width:82%;height:2.1rem;border-radius:4px;background:var(--green);color:#FFFFFF!important;font-family:var(--font-inter),var(--font-lato),system-ui,sans-serif;font-size:.75rem;font-weight:700;transition:background .2s}
.cm-doc__btn:hover{background:#31B4F4;color:#142F86!important}
@media(max-width:639px){.cm-doc{aspect-ratio:auto;min-height:10.5rem}.cm-doc__photo{flex:0 0 38%}.cm-doc__btn{width:100%}}
.cm-team__more-wrap{display:flex;justify-content:center;margin-top:2rem}
.cm-doc__btn--more{width:auto;padding:0 1.75rem;height:3rem}
.cm-doc__btn--more .cm-arrow{width:1rem;height:1rem}

/* CONTACT */
.cm-contact{position:relative;z-index:20;min-height:100lvh;overflow:hidden;background:#FFFFFF;padding:7rem 1.25rem 5rem}
@media(min-width:768px){.cm-contact{padding-inline:2.5rem}}
.cm-contact__scene{display:none}
.cm-contact__head{display:flex;flex-direction:column;gap:1.5rem}
.cm-contact__title{font-size:clamp(2.25rem,5.4vw,3.75rem);line-height:1.05;font-weight:700;margin:0}
.cm-contact__details{font-size:1rem;line-height:1.7;margin:0}
.cm-contact__details a{color:var(--green);text-decoration:underline;text-underline-offset:3px}
.cm-contact__details strong{font-weight:700}
.cm-form{margin-top:2rem;display:flex;flex-direction:column;gap:2rem;border:1px solid var(--line);border-radius:24px;background:#FFFFFF;padding:1.5rem}
.cm-form__mark{display:grid;place-items:center;width:2.625rem;height:2.625rem;border-radius:4px;background:var(--green);color:var(--lime)}
.cm-form__mark svg{width:1.5rem;height:1.5rem}
.cm-form h3{font-size:1.75rem;line-height:1.1;font-weight:700;margin:0}
.cm-form form{display:flex;flex-direction:column;gap:1.5rem}
.cm-field{display:flex;flex-direction:column;gap:1rem}
.cm-field label{font-size:.875rem;font-weight:700;text-transform:uppercase;color:var(--green)}
.cm-field input,.cm-field textarea{width:100%;border:1px solid var(--line);background:#FFFFFF;border-radius:8px;padding:1.25rem 2rem;font-weight:400;outline:none}
.cm-field input::placeholder,.cm-field textarea::placeholder{color:var(--subtle)}
.cm-field input:focus,.cm-field textarea:focus{border-color:var(--green)}
.cm-field textarea{resize:none;min-height:5.5rem}
.cm-form__consent{font-size:1rem;font-weight:400;color:var(--subtle);margin:0}
.cm-form__consent a{color:var(--ink);text-decoration:underline}
.cm-form__submit{display:flex;align-items:center;justify-content:space-between;height:3.375rem;border:1px solid var(--green-deep);background:var(--green);color:#FFFFFF;border-radius:46px;padding:0 .125rem 0 2rem;font-size:1.25rem;font-weight:700;cursor:pointer;transition:background .15s}
.cm-form__submit:hover{background:var(--green-deep)}
@media(min-width:768px){.cm-form{padding:2rem}}
@media(min-width:1024px){
  .cm-contact{height:100lvh;min-height:0;padding:0}
  .cm-contact__scene{display:block;position:absolute;inset-block:0;left:7.0625rem;width:71.125rem;pointer-events:none}
  .cm-contact__head{position:absolute;top:35.25%;left:2.5625rem;width:42.75rem;gap:3rem}
  .cm-contact__title{font-size:3.75rem}
  .cm-contact__details{width:27.6875rem}
  .cm-form{position:absolute;top:1rem;right:2.5rem;bottom:2.5rem;width:35.0625rem;margin:0;gap:3rem}
  .cm-form form{flex:1}
  .cm-form__submit{margin-top:auto}
}

/* reveals */
.cm-root .cm-reveal .cm-word{display:inline-block;overflow:hidden;vertical-align:top}
.cm-root .cm-reveal .cm-word>span{display:inline-block;transform:translateY(110%);transition:transform .8s cubic-bezier(.2,0,0,1);transition-delay:calc(var(--w,0)*40ms)}
.cm-root.is-ready .cm-reveal.in .cm-word>span{transform:translateY(0)}
.cm-root [data-rise]{opacity:0;transform:translateY(28px);transition:opacity .8s ease,transform .8s cubic-bezier(.2,0,0,1)}
.cm-root.is-ready [data-rise].in{opacity:1;transform:none}

/* preloader */
.cm-pre{position:fixed;inset:0;z-index:90;display:grid;place-items:center;background:#FFFFFF;color:#142F86;transition:transform .9s cubic-bezier(.76,0,.24,1),visibility 0s .9s;animation:cmPreFail .01s 1.25s forwards}
.cm-root.is-ready .cm-pre{transform:translateY(-100%);visibility:hidden}
.cm-pre__mark{width:3.5rem;height:3.5rem;animation:cmSpin 1.4s linear infinite}
@keyframes cmSpin{to{transform:rotate(360deg)}}
@keyframes cmPreFail{to{visibility:hidden;pointer-events:none;transform:translateY(-100%)}}

@media(prefers-reduced-motion:reduce){
  html:has(.cm-root){scroll-behavior:auto}
  .cm-root .cm-reveal .cm-word>span,.cm-root [data-rise]{transition:none!important;transform:none!important;opacity:1!important}
  .cm-pre{display:none}
  .cm-svc__img{transition:none}
  .cm-about{margin-top:0}
  .cm-hero__scene,.cm-contact__scene,.cm-trail{display:none}
}
`;

/* ---- DNA ink shaders (verbatim from Dantora source) + config ---- */

const SNOISE = String.raw`
  vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
  vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
  float snoise(vec3 v){
    const vec2 C = vec2(1.0/6.0, 1.0/3.0); const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i = floor(v + dot(v, C.yyy)); vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz); vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy); vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + 1.0 * C.xxx; vec3 x2 = x0 - i2 + 2.0 * C.xxx; vec3 x3 = x0 - 1.0 + 3.0 * C.xxx;
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(i.z + vec4(0.0, i1.z, i2.z, 1.0)) + i.y + vec4(0.0, i1.y, i2.y, 1.0)) + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0/7.0; vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z *ns.z);
    vec4 x_ = floor(j * ns.z); vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ *ns.x + ns.yyyy; vec4 y = y_ *ns.x + ns.yyyy; vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy); vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0)*2.0 + 1.0; vec4 s1 = floor(b1)*2.0 + 1.0; vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy; vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww;
    vec3 p0 = vec3(a0.xy,h.x); vec3 p1 = vec3(a0.zw,h.y); vec3 p2 = vec3(a1.xy,h.z); vec3 p3 = vec3(a1.zw,h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0); m = m * m;
    return 42.0 * dot(m*m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }
  float random(vec3 p) { return fract(sin(dot(p, vec3(12.9898, 78.233, 45.164))) * 43758.5453); }
  vec3 helixPoint(float rnd1, float rnd2, float rnd3, float rnd4, float twist, float radius, float height, float thick, float wave, float time) {
    float y = (rnd2 * 2.0 - 1.0) * height;
    vec3 core;
    if (rnd1 < 0.62) {
      float strand = step(0.31, rnd1) * 3.14159265;
      float a = y * twist + strand;
      core = vec3(radius * cos(a), y, radius * sin(a));
      core += (vec3(rnd2, rnd3, rnd4) - 0.5) * thick;
    } else {
      float rungT = rnd3;
      float dy = floor(y * 2.6) / 2.6;
      float a = dy * twist;
      vec3 p1 = vec3(radius * cos(a), dy, radius * sin(a));
      vec3 p2 = vec3(radius * cos(a + 3.14159265), dy, radius * sin(a + 3.14159265));
      core = mix(p1, p2, rungT) + (vec3(rnd2, rnd4, rnd3) - 0.5) * 0.045;
    }
    core.x += sin(time * 0.5 + y * 0.6) * wave;
    core.z += cos(time * 0.4 + y * 0.6) * wave;
    return core;
  }`;

const HELIX_V = String.raw`
  uniform float uTime, uHelixSize, uTwist, uRadius, uHeight, uThick, uWave;
  uniform float uPixelScale;
  uniform vec3 uHelixA, uHelixB;
  uniform vec3 uCursor; uniform float uRepelRadius, uRepelStrength, uActivity;
  varying vec3 vColor; varying float vFade;
  ${SNOISE}
  void main() {
    vec3 s = position;
    float rnd1 = random(s), rnd2 = random(s + 1.7), rnd3 = random(s + 3.3), rnd4 = random(s + 5.9);
    vec3 p = helixPoint(rnd1, rnd2, rnd3, rnd4, uTwist, uRadius, uHeight, uThick, uWave, uTime);
    vec3 wp = (modelMatrix * vec4(p, 1.0)).xyz;
    vec3 toP = wp - uCursor;
    float fall = smoothstep(uRepelRadius, 0.0, length(toP));
    wp += normalize(toP + vec3(1e-4)) * fall * uRepelStrength * uActivity;
    vec4 mv = viewMatrix * vec4(wp, 1.0);
    vec4 clip = projectionMatrix * mv;
    vec2 ndc = clip.xy / max(clip.w, 1e-4);
    float gx = clamp((ndc.x + 1.0) * 0.5, 0.0, 1.0);
    float gy = clamp((1.0 - ndc.y) * 0.5, 0.0, 1.0);
    float grad = clamp(gx * 0.62 + gy * 0.38, 0.0, 1.0);
    float shade = pow(grad, 1.15);
    vColor = mix(uHelixB, uHelixA, clamp(shade * 1.2, 0.0, 1.0));
    vFade = (0.78 + 0.22 * rnd2) * smoothstep(0.06, 0.58, grad);
    gl_PointSize = uHelixSize * uPixelScale * (12.0 / -mv.z);
    gl_PointSize = max(gl_PointSize, 1.7);
    gl_Position = clip;
  }`;

const HELIX_F = String.raw`
  uniform float uBrightness, uHelixOpacity, uAppear;
  varying vec3 vColor; varying float vFade;
  void main() {
    vec2 xy = gl_PointCoord - 0.5;
    float ll = length(xy);
    if (ll > 0.5) discard;
    float soft = smoothstep(0.5, 0.05, ll);
    float cov = clamp(soft * vFade * uHelixOpacity * uAppear * uBrightness, 0.0, 1.0);
    gl_FragColor = vec4(mix(vec3(1.0), vColor, cov), 1.0);
  }`;

const INK_V = String.raw`
  uniform float uTime, uInkSize, uTwist, uRadius, uHeight, uThick, uWave;
  uniform float uEmitRate, uSpread, uRise, uTurb, uNoiseFreq, uNoiseEvolve, uInkGrow;
  uniform float uPixelScale;
  uniform vec3 uInkCore, uInkMid, uInkEdge;
  uniform vec3 uCursor; uniform float uRepelRadius, uRepelStrength, uActivity;
  varying vec3 vColor; varying float vAlpha;
  ${SNOISE}
  void main() {
    vec3 s = position;
    float rnd1 = random(s), rnd2 = random(s + 1.7), rnd3 = random(s + 3.3), rnd4 = random(s + 5.9);
    float seed = random(s + 9.1);
    float life = fract(seed + uTime * uEmitRate);
    float birthTime = uTime - life / max(uEmitRate, 1e-4);
    vec3 birth = helixPoint(rnd1, rnd2, rnd3, rnd4, uTwist, uRadius, uHeight, uThick, uWave, birthTime);
    vec3 outward = normalize(vec3(birth.x, 0.0, birth.z) + vec3(1e-4));
    float e = uTime * uNoiseEvolve;
    vec3 np = birth * uNoiseFreq;
    vec3 flow = vec3(
      snoise(np + vec3(e, 0.0, 0.0)),
      snoise(np + vec3(0.0, e, 0.0) + 11.0),
      snoise(np + vec3(0.0, 0.0, e) + 23.0)
    );
    vec3 disp = outward * life * uSpread
              + flow * pow(life, 1.4) * uTurb
              + vec3(0.0, life * uRise, 0.0);
    vec3 p = birth + disp;
    vec3 wp = (modelMatrix * vec4(p, 1.0)).xyz;
    vec3 toP = wp - uCursor;
    float fall = smoothstep(uRepelRadius, 0.0, length(toP));
    wp += normalize(toP + vec3(1e-4)) * fall * uRepelStrength * uActivity;
    vec4 mv = viewMatrix * vec4(wp, 1.0);
    vec4 clip = projectionMatrix * mv;
    vec2 ndc = clip.xy / max(clip.w, 1e-4);
    float gx = clamp((ndc.x + 1.0) * 0.5, 0.0, 1.0);
    float gy = clamp((1.0 - ndc.y) * 0.5, 0.0, 1.0);
    float grad = clamp(gx * 0.62 + gy * 0.38, 0.0, 1.0);
    vec3 c = mix(uInkCore, uInkMid, smoothstep(0.0, 0.4, life));
    c = mix(c, uInkEdge, smoothstep(0.35, 1.0, life));
    vColor = mix(uInkMid, c, clamp(pow(grad, 1.15) * 1.2, 0.0, 1.0));
    vAlpha = smoothstep(0.0, 0.06, life) * (1.0 - smoothstep(0.4, 1.0, life)) * smoothstep(0.06, 0.58, grad);
    float grow = 0.35 + life * uInkGrow;
    gl_PointSize = uInkSize * grow * uPixelScale * (12.0 / -mv.z);
    gl_PointSize = max(gl_PointSize, 1.0);
    gl_Position = clip;
  }`;

const INK_F = String.raw`
  uniform float uBrightness, uInkOpacity, uAppear;
  varying vec3 vColor; varying float vAlpha;
  void main() {
    vec2 xy = gl_PointCoord - 0.5;
    float ll = length(xy);
    if (ll > 0.5) discard;
    float soft = exp(-ll * ll * 7.0);
    float cov = clamp(soft * vAlpha * uInkOpacity * uAppear * uBrightness, 0.0, 1.0);
    gl_FragColor = vec4(mix(vec3(1.0), vColor, cov), 1.0);
  }`;

const dnaScript = String.raw`
const CFG={bgColor:'#FFFFFF',helixColorA:'#142F86',helixColorB:'#31B4F4',inkCore:'#142F86',inkMid:'#31B4F4',inkEdge:'#1E6FA8',camDist:12,helixSize:1.3,inkSize:6,brightness:0.92,helixOpacity:2.15,inkOpacity:0.62,inkGrow:1.8,radius:1.75,height:6.8,twist:0.65,strandThick:0.39,wave:0.5,spin:0,tilt:-0.34,emitRate:0.19,spread:0.6,rise:-0.2,turbulence:1.6,noiseFreq:1.05,noiseEvolve:0.1,parallax:3,pointerRadius:5,pointerStrength:1.55,maxPixelRatio:1.5};
const REF_H=1600, MAXD=0.05, EASE_P=0.05, EASE_C=0.15, EASE_A=0.08, IDLE=3, A_DELAY=0.2, A_DUR=1.6;
const HELIX_V=${JSON.stringify(HELIX_V)};
const HELIX_F=${JSON.stringify(HELIX_F)};
const INK_V=${JSON.stringify(INK_V)};
const INK_F=${JSON.stringify(INK_F)};

function initClarus(root){
  if(root.dataset.cm==='1')return; root.dataset.cm='1';
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // shared ticker
  const subs=new Set(); let last=performance.now(), rafId=0; const cleaners=[];
  const tick=now=>{ if(!root.isConnected){cleaners.forEach(f=>f());subs.clear();window.__cmBoot&&window.__cmBoot.watch&&window.__cmBoot.watch();return;} const dt=Math.min(.05,Math.max(0,(now-last)/1000)); last=now; if(!document.hidden) subs.forEach(f=>f(now,dt)); rafId=requestAnimationFrame(tick); };
  rafId=requestAnimationFrame(tick); cleaners.push(()=>cancelAnimationFrame(rafId));
  const sub=f=>{subs.add(f);return()=>subs.delete(f);};
  function spring(v){return {v:v,t:v,vel:0,step(dt,k,d){const a=(this.t-this.v)*k-this.vel*d;this.vel+=a*dt;this.v+=this.vel*dt;return this.v;}};}

  // reveals: split words
  const reveals=[...root.querySelectorAll('.cm-reveal')];
  if(!reduce) reveals.forEach(el=>{ let wi=0; const walk=document.createTreeWalker(el,NodeFilter.SHOW_TEXT); const nodes=[]; while(walk.nextNode())nodes.push(walk.currentNode); nodes.forEach(n=>{ if(!(n.nodeValue||'').trim())return; const frag=document.createDocumentFragment(); (n.nodeValue||'').split(/(\s+)/).forEach(w=>{ if(/^\s+$/.test(w)){frag.appendChild(document.createTextNode(w));return;} const o=document.createElement('span'); o.className='cm-word'; o.style.setProperty('--w',String(wi++)); const inner=document.createElement('span'); inner.textContent=w; o.appendChild(inner); frag.appendChild(o); }); n.replaceWith(frag); }); });
  const io=new IntersectionObserver(es=>es.forEach(e=>{ if(e.isIntersecting) e.target.classList.add('in'); }),{threshold:.18});
  reveals.forEach(el=>io.observe(el)); root.querySelectorAll('[data-rise]').forEach(el=>io.observe(el)); cleaners.push(()=>io.disconnect());

  // mobile menu
  const burger=root.querySelector('.cm-burger'); const menu=root.querySelector('.cm-mobile');
  if(burger&&menu){
    const toggle=v=>{ const open=v!==undefined?v:menu.dataset.open!=='true'; menu.dataset.open=open?'true':'false'; burger.setAttribute('aria-expanded',open?'true':'false'); burger.setAttribute('aria-label',open?'Close menu':'Open menu'); if(!open)menu.querySelectorAll('details[open]').forEach(d=>d.removeAttribute('open')); };
    const onBurger=()=>toggle(); const onKey=e=>{ if(e.key==='Escape'&&menu.dataset.open==='true'){toggle(false);burger.focus();} };
    burger.addEventListener('click',onBurger); document.addEventListener('keydown',onKey); menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>toggle(false)));
    cleaners.push(()=>{burger.removeEventListener('click',onBurger);document.removeEventListener('keydown',onKey);});
  }

  // desktop dropdown keyboard behavior
  const desktopItems=[...root.querySelectorAll('.cm-nav__item')];
  if(desktopItems.length){
    const resetters=[];
    desktopItems.forEach(item=>{
      const reset=()=>{delete item.dataset.escapeClosed;};
      const onFocusOut=e=>{if(!item.contains(e.relatedTarget))reset();};
      item.addEventListener('pointerenter',reset); item.addEventListener('focusout',onFocusOut); resetters.push(()=>{item.removeEventListener('pointerenter',reset);item.removeEventListener('focusout',onFocusOut);});
    });
    const onDesktopKey=e=>{
      const active=document.activeElement; const item=active&&active.closest?active.closest('.cm-nav__item'):null;
      if(!item||!root.contains(item))return;
      if(e.key==='Escape'){e.preventDefault();item.dataset.escapeClosed='true';item.querySelector('.cm-nav__link')?.focus();}
      if(e.key==='ArrowDown'&&active.classList.contains('cm-nav__link')){e.preventDefault();delete item.dataset.escapeClosed;item.querySelector('.cm-nav__dropdown a')?.focus();}
    };
    document.addEventListener('keydown',onDesktopKey); cleaners.push(()=>{document.removeEventListener('keydown',onDesktopKey);resetters.forEach(fn=>fn());});
  }

  // cursor trail (why)
  const trail=root.querySelector('.cm-trail'); const why=root.querySelector('.cm-why');
  if(!reduce&&trail&&why){
    const imgs=JSON.parse(trail.dataset.imgs||'[]'); const MAX_CARDS=5,MAX_PENDING=2; const pending=new Map(); let lastP=null,id=0;
    const finish=card=>{ const timer=pending.get(card); if(timer!==undefined)clearTimeout(timer); pending.delete(card); card.remove(); };
    const enforcePending=()=>{ while(pending.size>MAX_PENDING){ const oldest=pending.keys().next().value; if(!oldest)break; finish(oldest); } };
    const fade=card=>{ if(pending.has(card))return; card.dataset.removing='true'; card.style.transition='transform .3s ease,opacity .18s'; card.style.opacity='0'; card.style.transform=card.style.transform.replace('scale(1)','scale(.4)'); pending.set(card,setTimeout(()=>finish(card),320)); enforcePending(); };
    why.addEventListener('pointermove',ev=>{ if(ev.pointerType!=='mouse'||!imgs.length)return; const b=why.getBoundingClientRect(); const x=ev.clientX-b.left,y=ev.clientY-b.top; if(lastP&&Math.hypot(x-lastP.x,y-lastP.y)<90)return; lastP={x,y}; const i=id++; const card=document.createElement('span'); card.className='cm-trail__card'; card.style.backgroundImage='url('+imgs[i%imgs.length]+')'; const tilt=(Math.random()-0.5)*24; card.style.transform='translate3d('+x+'px,'+y+'px,0) translate(-50%,-50%) rotate('+tilt+'deg) scale(.4)'; card.style.opacity='0'; trail.appendChild(card); requestAnimationFrame(()=>{ if(!card.isConnected||pending.has(card))return; card.style.transition='transform .5s cubic-bezier(.2,0,0,1),opacity .18s'; card.style.transform='translate3d('+x+'px,'+y+'px,0) translate(-50%,-50%) rotate('+tilt+'deg) scale(1)'; card.style.opacity='1'; }); const active=[...trail.children].filter(c=>!pending.has(c)); if(active.length>MAX_CARDS)fade(active[0]); });
    why.addEventListener('pointerleave',()=>{ lastP=null; [...trail.children].forEach(fade); });
    cleaners.push(()=>{ [...pending.keys()].forEach(finish); });
  }

  // about banner parallax
  const banner=root.querySelector('.cm-about__banner img'); const frame=root.querySelector('.cm-about__banner');
  if(banner&&frame&&!reduce){ banner.style.top='-25%'; banner.style.height='150%'; const sp2=spring(0); sub((now,dt)=>{ const r=frame.getBoundingClientRect(); const span=window.innerHeight+r.height; if(span<=0)return; const prog=Math.min(1,Math.max(0,(window.innerHeight-r.top)/span)); sp2.t=prog-0.5; const s=sp2.step(dt,180,40); banner.style.transform='translate3d(0,'+(s*25)+'%,0)'; }); }

  // stat counters
  root.querySelectorAll('[data-count]').forEach(el=>{ const full=el.dataset.count||''; const m=/^(\D*)(\d+)(\D*)$/.exec(full); if(!m||reduce){el.textContent=full;return;} const pre=m[1],target=+m[2],suf=m[3]; let done=false; const o=new IntersectionObserver(([e])=>{ if(!e.isIntersecting){done=false;el.textContent=pre+'0'+suf;return;} if(done)return; done=true; const start=performance.now(); const run=now=>{ const p=Math.min(1,(now-start)/1400); el.textContent=pre+Math.round(target*(1-Math.pow(1-p,3)))+suf; if(p<1)requestAnimationFrame(run); }; requestAnimationFrame(run); },{threshold:.3}); o.observe(el); cleaners.push(()=>o.disconnect()); });

  // team drag rail removed with the doctor card grid

  // contact form -> WhatsApp
  const form=root.querySelector('.cm-form form');
  if(form){ form.addEventListener('submit',e=>{ e.preventDefault(); const fd=new FormData(form); const name=(fd.get('name')||'').toString().trim(); const phone=(fd.get('phone')||'').toString().trim(); const msg=(fd.get('message')||'').toString().trim(); const text='Callback request from the Clarus Magnus website.'+(name?'\nName: '+name:'')+(phone?'\nPhone: '+phone:'')+(msg?'\nMessage: '+msg:''); const url=${JSON.stringify(siteConfig.whatsapp.href)}+'?text='+encodeURIComponent(text); window.open(url,'_blank','noopener'); }); }

  // preloader: visual minimum only; never wait on page, font, import, or WebGL readiness
  const reveal=()=>root.classList.add('is-ready');
  const revealTimer=setTimeout(reveal,450); const revealFallback=setTimeout(reveal,1100);
  cleaners.push(()=>{clearTimeout(revealTimer);clearTimeout(revealFallback);});

  // DNA scenes
  if(reduce)return;
  (async()=>{
    let THREE;
    try{ THREE=await import('https://unpkg.com/three@0.185.1/build/three.module.js'); }
    catch(err){ console.warn('three unavailable',err); return; }
    if(!root.isConnected)return;
    const hx=v=>{const n=parseInt(v.slice(1),16);return [((n>>16)&255)/255,((n>>8)&255)/255,(n&255)/255];};
    function makeScene(canvas){
      const isMobileHero=window.innerWidth<1024&&canvas.closest('[data-scene="hero"]');
      const renderer=new THREE.WebGLRenderer({canvas,antialias:true});
      const bg=new THREE.Color(); bg.setRGB.apply(bg,hx(CFG.bgColor));
      renderer.setClearColor(bg,1);
      const scene=new THREE.Scene(); scene.background=bg; scene.fog=new THREE.Fog(bg,0,22);
      const cam=new THREE.PerspectiveCamera(45,1,0.1,200); cam.position.set(0,0,CFG.camDist); scene.add(cam);
      const tilt=new THREE.Group(); const spin=new THREE.Group(); tilt.add(spin); scene.add(tilt); tilt.rotation.z=CFG.tilt; tilt.scale.setScalar(isMobileHero ? 0.92 : 1);
      const compact=window.innerWidth<1024||(navigator.hardwareConcurrency&&navigator.hardwareConcurrency<=4);
      const hCount=compact?4500:14000, iCount=compact?14000:44000;
      const U={uTime:{value:0},uAppear:{value:0},uHelixA:{value:new THREE.Vector3().fromArray(hx(CFG.helixColorA))},uHelixB:{value:new THREE.Vector3().fromArray(hx(CFG.helixColorB))},uInkCore:{value:new THREE.Vector3().fromArray(hx(CFG.inkCore))},uInkMid:{value:new THREE.Vector3().fromArray(hx(CFG.inkMid))},uInkEdge:{value:new THREE.Vector3().fromArray(hx(CFG.inkEdge))},uHelixSize:{value:CFG.helixSize},uInkSize:{value:CFG.inkSize},uBrightness:{value:CFG.brightness},uHelixOpacity:{value:CFG.helixOpacity},uInkOpacity:{value:CFG.inkOpacity},uInkGrow:{value:CFG.inkGrow},uRadius:{value:CFG.radius},uHeight:{value:CFG.height},uTwist:{value:CFG.twist},uThick:{value:CFG.strandThick},uWave:{value:CFG.wave},uEmitRate:{value:CFG.emitRate},uSpread:{value:CFG.spread},uRise:{value:CFG.rise},uTurb:{value:CFG.turbulence},uNoiseFreq:{value:CFG.noiseFreq},uNoiseEvolve:{value:CFG.noiseEvolve},uCursor:{value:new THREE.Vector3()},uRepelRadius:{value:CFG.pointerRadius},uRepelStrength:{value:CFG.pointerStrength},uActivity:{value:0},uPixelScale:{value:1}};
      function seedGeo(count){ const g=new THREE.BufferGeometry(); const a=new Float32Array(count*3); for(let i=0;i<a.length;i++)a[i]=Math.random()*64; g.setAttribute('position',new THREE.BufferAttribute(a,3)); return g; }
      function mat(vs,fs){ return new THREE.ShaderMaterial({uniforms:U,vertexShader:vs,fragmentShader:fs,transparent:true,depthWrite:false,depthTest:false,blending:THREE.MultiplyBlending,premultipliedAlpha:true}); }
      const helix=new THREE.Points(seedGeo(hCount),mat(HELIX_V,HELIX_F)); helix.frustumCulled=false;
      const ink=new THREE.Points(seedGeo(iCount),mat(INK_V,INK_F)); ink.frustumCulled=false;
      spin.add(ink,helix);
      let W=0,H=0,elapsed=0; const started=performance.now(); let lastF=performance.now()/1000;
      const pT={x:0,y:0},pE={x:0,y:0}; let active=false,lastMove=performance.now(),activity=0;
      const cursorWorld=new THREE.Vector3(),cursorTarget=new THREE.Vector3(),ndc=new THREE.Vector3(),ray=new THREE.Vector3();
      function setSize(w,h){ if(w<=0||h<=0)return; W=w;H=h; const pr=Math.min(window.devicePixelRatio,CFG.maxPixelRatio); renderer.setPixelRatio(pr); renderer.setSize(w,h,false); cam.aspect=w/h; cam.updateProjectionMatrix(); U.uPixelScale.value=(h*pr)/REF_H; }
      const onMove=e=>{ if(!isVisible())return; const r=canvas.getBoundingClientRect(); if(!r.width||!r.height)return; pT.x=Math.max(-1,Math.min(1,((e.clientX-r.left)/r.width)*2-1)); pT.y=Math.max(-1,Math.min(1,-(((e.clientY-r.top)/r.height)*2-1))); active=true; lastMove=performance.now(); };
      const onLeave=()=>{active=false;};
      const fine=window.matchMedia('(pointer: fine)').matches;
      if(fine){ window.addEventListener('pointermove',onMove,{passive:true}); document.documentElement.addEventListener('mouseleave',onLeave); }
      let lastW=0,lastH=0;
      function syncSize(){ const r=canvas.getBoundingClientRect(); const w=Math.round(r.width),h=Math.round(r.height); if(w===lastW&&h===lastH)return; lastW=w;lastH=h; setSize(w,h); }
      const ro=new ResizeObserver(syncSize); ro.observe(canvas); syncSize();
      function isVisible(){ const r=canvas.getBoundingClientRect(); return r.width>0&&r.height>0&&r.bottom>0&&r.top<window.innerHeight; }
      function reset(){ elapsed=0; lastF=performance.now()/1000; pT.x=pT.y=pE.x=pE.y=0; cursorWorld.set(0,0,0); activity=0; active=false; }
      let wasVisible=true,lastRender=0; const FRAME_MS=32;
      function render(now){ const wc=now/1000; const dt=Math.min(MAXD,wc-lastF); lastF=wc; elapsed+=dt; const pAlpha=1-Math.pow(1-EASE_P,dt*60); pE.x+=(pT.x-pE.x)*pAlpha; pE.y+=(pT.y-pE.y)*pAlpha; U.uTime.value=elapsed; spin.rotation.y=0; cam.position.x=pE.x*CFG.parallax; cam.position.y=pE.y*CFG.parallax; cam.position.z=CFG.camDist; cam.lookAt(0,0,0); cursorTarget.set(0,0,0); if(active){ ndc.set(pE.x,pE.y,0.5).unproject(cam); ray.copy(ndc).sub(cam.position).normalize(); const dz=ray.z; if(Math.abs(dz)>1e-4){ const d=-cam.position.z/dz; if(d>0&&isFinite(d)) cursorTarget.copy(cam.position).addScaledVector(ray,d); } } cursorWorld.lerp(cursorTarget,1-Math.pow(1-EASE_C,dt*60)); const idle=(now-lastMove)/1000; const want=(active&&idle<IDLE)?1:0; activity+=(want-activity)*(1-Math.pow(1-EASE_A,dt*60)); U.uCursor.value.copy(cursorWorld); U.uActivity.value=activity; const sm=(now-started)/1000; U.uAppear.value=Math.max(0,Math.min(1,(sm-A_DELAY)/A_DUR)); renderer.render(scene,cam); }
      const unsub=sub(now=>{ if(now-lastRender<FRAME_MS)return; lastRender=now; if(!isVisible()){ if(wasVisible){wasVisible=false;reset();} return; } wasVisible=true; render(now); });
      cleaners.push(()=>{ unsub(); ro.disconnect(); window.removeEventListener('pointermove',onMove); document.documentElement.removeEventListener('mouseleave',onLeave); helix.geometry.dispose(); helix.material.dispose(); ink.geometry.dispose(); ink.material.dispose(); renderer.dispose(); });
      return true;
    }
    const safeMakeScene=canvas=>{ try{return makeScene(canvas);}catch(err){console.warn('DNA scene unavailable',err);return false;} };
    const heroC=root.querySelector('[data-scene="hero"] canvas');
    if(heroC)safeMakeScene(heroC);

    const contactSection=root.querySelector('#contact'); const contactC=root.querySelector('[data-scene="contact"] canvas');
    if(contactSection&&contactC){
      const desktop=window.matchMedia('(min-width: 1024px)'); let near=false,started=false;
      const startContact=()=>{ if(started||!near||!desktop.matches)return; started=true; contactObserver.disconnect(); desktop.removeEventListener('change',startContact); safeMakeScene(contactC); };
      const contactObserver=new IntersectionObserver(([entry])=>{ near=entry.isIntersecting; startContact(); },{rootMargin:'600px 0px'});
      contactObserver.observe(contactSection); desktop.addEventListener('change',startContact);
      cleaners.push(()=>{ contactObserver.disconnect(); desktop.removeEventListener('change',startContact); });
    }
  })();
}
if(!window.__cmBoot){
  const state={boot:null,watch:null,mo:null};
  const boot=()=>{ const r=document.querySelector('.cm-root'); if(!r)return false; if(state.mo){state.mo.disconnect();state.mo=null;} initClarus(r); return true; };
  const watch=()=>{ if(boot()||state.mo)return; state.mo=new MutationObserver(boot); state.mo.observe(document.documentElement,{childList:true,subtree:true}); };
  state.boot=boot; state.watch=watch; window.__cmBoot=state; watch();
} else { window.__cmBoot.boot(); }
`;

function DnaMark() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path fillRule="evenodd" clipRule="evenodd" d={DNA_MARK} fill="currentColor" />
    </svg>
  );
}

function Arrow() {
  return (
    <svg className="cm-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SvcIcon({ name }: { name: string }) {
  const paths: Record<string, React.ReactNode> = {
    mri: <><rect x="3" y="6" width="18" height="12" rx="4"/><path d="M9 6v12M15 6v12"/></>,
    ct: <><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/></>,
    ultrasound: <><path d="M4 14c3-6 13-6 16 0"/><path d="M8 17c2-3 6-3 8 0"/><circle cx="12" cy="6" r="1.4"/></>,
    doppler: <><path d="M3 12h3l2-5 3 10 3-7 2 2h5"/></>,
    xray: <><rect x="4" y="3" width="16" height="18" rx="3"/><path d="M12 7v10M9 10h6M9 14h6"/></>,
    dental: <><path d="M8 3c-2 0-3 2-3 5 0 5 1 13 3 13s2-5 4-5 2 5 4 5 3-8 3-13c0-3-1-5-3-5-2 0-2 1-4 1s-2-1-4-1Z"/></>,
    baby: <><circle cx="12" cy="12" r="9"/><path d="M9 10h.01M15 10h.01"/><path d="M9 15c1.5 1.5 4.5 1.5 6 0"/></>,
    ruler: <><rect x="2" y="8" width="20" height="8" rx="2"/><path d="M7 8v3M12 8v4M17 8v3"/></>,
    search: <><circle cx="11" cy="11" r="7"/><path d="M20 20l-4-4"/></>,
    growth: <><path d="M3 17l6-6 4 4 8-8"/><path d="M15 7h6v6"/></>,
    heart: <><path d="M12 20s-7-4.6-7-9.4A4 4 0 0 1 12 8a4 4 0 0 1 7 2.6C19 15.4 12 20 12 20Z"/></>,
    tube: <><path d="M9 3h6M10 3v13a2 2 0 0 0 4 0V3"/><path d="M10 11h4"/></>,
    microscope: <><path d="M9 4h4l1 8h-6l1-8Z"/><path d="M6 20h12M9 16c-2 1-3 2.5-3 4"/><path d="M15 12c3 1 4 4 3 8"/></>,
    dna: <><path d="M7 3c0 6 10 6 10 12M17 3c0 6-10 6-10 12"/><path d="M8 8h8M8 15h8"/></>,
    allergy: <><circle cx="12" cy="12" r="3"/><path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"/></>,
    brain: <><path d="M9 5a3 3 0 0 0-3 3 3 3 0 0 0-1 5 3 3 0 0 0 2 5h2V5Z"/><path d="M15 5a3 3 0 0 1 3 3 3 3 0 0 1 1 5 3 3 0 0 1-2 5h-2V5Z"/></>,
    bone: <><path d="M8 5a2.5 2.5 0 1 0-2 4l7 7a2.5 2.5 0 1 0 4 2 2.5 2.5 0 1 0-2-4l-7-7a2.5 2.5 0 1 0-0-2Z"/></>,
    stomach: <><path d="M9 4v5c0 4 3 3 5 5s1 6-3 6-6-3-6-7"/><path d="M9 4h4"/></>,
    kidney: <><path d="M10 4c4 0 7 3 7 8s-3 8-6 8-4-2-4-4 2-3 2-5-2-2-2-4 1-3 3-3Z"/></>,
    ear: <><path d="M7 9a5 5 0 1 1 10 0c0 3-3 3-3 6a3 3 0 0 1-5 2"/></>,
    stetho: <><path d="M6 4v5a4 4 0 0 0 8 0V4"/><path d="M10 13v3a4 4 0 0 0 8 0v-2"/><circle cx="18" cy="12" r="1.6"/></>,
    more: <><circle cx="6" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="18" cy="12" r="1.6"/></>,
  };
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {paths[name] ?? paths.more}
    </svg>
  );
}

function StatIcon({ name }: { name: "shield" | "scan" | "team" }) {
  if (name === "shield") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (name === "scan") {
    return (
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="9" r="4.5" stroke="currentColor" strokeWidth="1.5" />
        <path d="M6 20c0-3 2.5-5 6-5s6 2 6 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M4 20h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8.5" cy="8" r="2.75" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="9" r="2.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3.5 19c0-2.9 2.3-5 5-5s5 2.1 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M14.5 14.5c2.4.3 4 2.1 4 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="cm-root">
      <style>{css}</style>

      <div className="cm-pre" aria-hidden="true">
        <svg className="cm-pre__mark" viewBox="0 0 24 24" fill="none">
          <path fillRule="evenodd" clipRule="evenodd" d={DNA_MARK} fill="currentColor" />
        </svg>
      </div>


      {/* HERO */}
      <section id="hero" className="cm-section cm-panel cm-round-b cm-hero">
        <div className="cm-hero__inner cm-shell">
          <div className="cm-hero__copy">
            <div className="cm-hero__head">
              <h1 className="cm-lead">
                <span className="cm-lead__accent" data-rise>{HERO.titleAccent}</span>
                <span className="cm-lead__rest cm-reveal">{HERO.title}</span>
              </h1>
            </div>
            <p className="cm-body cm-hero__desc cm-reveal">{HERO.description}</p>
            <div className="cm-hero__actions" data-rise>
              {HERO.actions.map((a) => (
                <Link key={a.href} href={a.href} className={`cm-btn cm-btn--pill cm-hero__button ${a.primary ? "cm-hero__button--primary" : "cm-hero__button--secondary"}`}>
                  <span>{a.label}</span>
                  <Arrow />
                </Link>
              ))}
            </div>
          </div>

          <div className="cm-hero__scene" data-scene="hero" aria-hidden="true">
            <canvas className="cm-dna" />
          </div>

          <hr className="cm-hero__rule" data-rise />
          <p className="cm-hero__trust" data-rise>{HERO.trustLine}<span aria-hidden="true" /></p>
          <ul className="cm-chips" data-rise>
            {HERO.chips.map((c) => <li key={c}>{c}</li>)}
          </ul>
        </div>
      </section>

      {/* WHY */}
      <section id="why" className="cm-section cm-why">
        <div className="cm-trail" aria-hidden="true" data-imgs={JSON.stringify(WHY.trail)} />
        <div className="cm-why__inner cm-shell">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", width: "100%" }}>
            <p className="cm-eyebrow" data-rise>{WHY.eyebrow}</p>
            <h2 className="cm-lead cm-reveal">{WHY.title}</h2>
          </div>
          <p className="cm-body cm-why__desc cm-reveal">{WHY.description}</p>
          <dl className="cm-why__stats" data-rise>
            {WHY.stats.map((s) => (
              <div className="cm-why__stat" key={s.label}>
                <span className="cm-why__stat-icon" aria-hidden="true"><StatIcon name={s.icon} /></span>
                <div className="cm-why__stat-text">
                  <dd data-count={s.value}>{s.value}</dd>
                  <dt>{s.label}</dt>
                </div>
              </div>
            ))}
          </dl>
          <div className="cm-why__actions">
            {WHY.actions.map((a) => (
              <Link key={a.href} href={a.href} className={`cm-btn ${a.primary ? "cm-btn--primary" : "cm-btn--secondary"}`}>
                {a.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="cm-services">
        <div className="cm-services__intro">
          <p className="cm-eyebrow" data-rise>{SERVICES_INTRO.eyebrow}</p>
          <h2 className="cm-lead cm-services__title cm-reveal">{SERVICES_INTRO.title}</h2>
        </div>
        <div className="cm-svc-grid">
          {SERVICE_CARDS.map((card) => (
            <article key={card.title} className={`cm-svc${card.title.includes("Fetal") ? " cm-svc--wf" : ""}`}>
              <picture>
                <source media="(min-width: 768px)" srcSet={card.desktop} />
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="cm-svc__img" src={card.mobile} alt={card.title} loading="lazy" decoding="async" style={{ objectPosition: (card as { pos?: string }).pos ?? "50% 50%" }} />
              </picture>
              <span className="cm-svc__scrim" aria-hidden="true" />
              <div className="cm-svc__head">
                <h3 className="cm-svc__title">{card.title}</h3>
                <ul className="cm-svc__list">
                  {card.items.map((it) => (
                    <li key={it.label}>
                      <span className="cm-svc__ico" aria-hidden="true"><SvcIcon name={it.icon} /></span>
                      <span>{it.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cm-svc__actions">
                <Link href={card.href} className="cm-svc__btn cm-svc__btn--primary">
                  <span>Explore More</span><Arrow />
                </Link>
                <Link href="#contact" className="cm-svc__btn cm-svc__btn--light">
                  <span>Contact Us</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="cm-about">
        <div className="cm-shell" style={{ height: "100%", position: "relative" }}>
          <div className="cm-about__banner">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={ABOUT.banner} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="cm-about__content">
            <div className="cm-about__left">
              <p className="cm-eyebrow" data-rise>{ABOUT.eyebrow}</p>
              <dl className="cm-about__stats">
                {ABOUT.stats.map((s) => (
                  <div className="cm-stat" key={s.label}>
                    <dd data-count={s.value}>{s.value}</dd>
                    <dt>{s.label}</dt>
                  </div>
                ))}
              </dl>
            </div>
            <div className="cm-about__right">
              <p className="cm-about__para cm-reveal">
                {ABOUT.paragraph.map((f) => (
                  <span key={f.text} className={`${f.muted ? "muted" : ""}${f.accent ? " accent" : ""}`}>{f.text}</span>
                ))}
              </p>
              <div className="cm-about__actions">
                {ABOUT.actions.map((a) => (
                  <Link key={a.href} href={a.href} className={`cm-btn ${a.primary ? "cm-btn--primary" : "cm-btn--secondary"}`}>
                    {a.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section id="team" className="cm-team">
        <div className="cm-team__head">
          <p className="cm-eyebrow" data-rise>{TEAM.eyebrow}</p>
          <h2 className="cm-lead cm-reveal">{TEAM.title}</h2>
        </div>
        <div className="cm-docs">
          {TEAM.members.map((m) => (
            <article className="cm-doc" key={m.name}>
              <div className="cm-doc__photo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={m.image} alt={m.name} loading="lazy" decoding="async" />
              </div>
              <div className="cm-doc__body">
                <Link href={m.href} className="cm-doc__go" aria-label={`View ${m.name} profile`}><Arrow /></Link>
                <p className="cm-doc__spec">{m.specialty}</p>
                <h3 className="cm-doc__name">{m.name}</h3>
                {m.degree ? <p className="cm-doc__deg">{m.degree}</p> : null}
                {m.experience ? <p className="cm-doc__exp">{m.experience}</p> : null}
                <Link href={m.href} className="cm-doc__btn">View Profile</Link>
              </div>
            </article>
          ))}
        </div>
        <div className="cm-team__more-wrap">
          <Link href={TEAM.more.href} className="cm-doc__btn cm-doc__btn--more">
            <span>{TEAM.more.cta}</span><Arrow />
          </Link>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="cm-contact">
        <div className="cm-contact__scene" data-scene="contact" aria-hidden="true">
          <canvas className="cm-dna" />
        </div>
        <div className="cm-shell" style={{ height: "100%", position: "relative" }}>
          <div className="cm-contact__head">
            <p className="cm-eyebrow" data-rise>{CONTACT.eyebrow}</p>
            <h2 className="cm-contact__title cm-reveal">{CONTACT.title}</h2>
            <p className="cm-contact__details" data-rise>
              <strong>{siteConfig.address.line1}</strong><br />
              Call <a href={siteConfig.phone.href}>{siteConfig.phone.display}</a> · <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a><br />
              {siteConfig.address.line2}, {siteConfig.address.city}, {siteConfig.address.state} {siteConfig.address.zip}<br />
              {siteConfig.hours.imaging} · <a href={siteConfig.address.mapsHref} target="_blank" rel="noopener noreferrer">Open in Maps</a>
            </p>
          </div>
          <div className="cm-form">
            <span className="cm-form__mark"><DnaMark /></span>
            <h3>{CONTACT.formTitle}</h3>
            <form>
              <div className="cm-field">
                <label htmlFor="cm-name">Your name</label>
                <input id="cm-name" name="name" type="text" placeholder="Name" />
              </div>
              <div className="cm-field">
                <label htmlFor="cm-phone">Your phone</label>
                <input id="cm-phone" name="phone" type="tel" placeholder="Phone" />
              </div>
              <div className="cm-field">
                <label htmlFor="cm-message">Your message</label>
                <textarea id="cm-message" name="message" rows={1} placeholder="Message" />
              </div>
              <p className="cm-form__consent">
                By submitting, you agree to our{" "}
                <Link href={`${BP}/privacy-policy`}>Privacy Policy</Link> and the processing of your personal data.
              </p>
              <button type="submit" className="cm-form__submit">
                <span>{CONTACT.submit}</span>
                <span className="cm-disc"><Arrow /></span>
              </button>
            </form>
          </div>
        </div>
      </section>

      <Script id="cm-interactions" type="module" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: dnaScript }} />
    </div>
  );
}

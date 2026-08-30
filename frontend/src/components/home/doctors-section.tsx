"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { doctorFilters, doctors, type Doctor } from "@/lib/data/doctors";
// Reused rather than reimplemented: this is what builds the /specialties/[slug]
// routes, and it maps "&" to "and", which a naive slug would drop and 404 on.
import { slugify } from "@/lib/constants/navigation";

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** `image` is a path under /assets/, e.g. "uploads/doctors/dr-anita-rao.jpg". */
const photo = (path: string) => encodeURI(`${BP}/assets/${path}`);

/**
 * The section carries its own stylesheet because it renders on the homepage and
 * on /specialties, and those pages share no CSS: the cm-* rules live inside the
 * homepage's own style block. So everything here is self-sufficient — no
 * dependency on .cm-root or its custom properties.
 *
 * Two rules for editing this string:
 *  - never use a backtick, it is a template literal and a backtick ends it
 *  - use descendant selectors, not "greater than" child selectors: this is a
 *    text child of <style>, where that character is HTML-escaped and would
 *    silently kill the rule
 */
const css = String.raw`
.cm-team{position:relative;z-index:10;background:#FFFFFF;padding:4.5rem 1.25rem}
@media(min-width:768px){.cm-team{padding:5rem 2.5rem}}
/* When this section is the first thing on a page there is no hero to push it
   clear of the site header, which is fixed: 1rem from the top plus a 4.25rem
   bar on small screens and 6.5rem from 1024px up. */
.cm-team--page{padding-top:6.75rem}
@media(min-width:1024px){.cm-team--page{padding-top:9.5rem}}
.cm-team__head{display:flex;flex-direction:column;align-items:center;gap:.85rem;max-width:56rem;margin:0 auto 2rem;text-align:center}
.cm-team__eyebrow{margin:0;font-size:.875rem;font-weight:700;letter-spacing:.02em;text-transform:uppercase;color:#142F86}
.cm-team__title{margin:0;font-size:clamp(2rem,5vw,3.25rem);line-height:1.06;font-weight:700;letter-spacing:-.01em;color:#142F86}

/* Filter rail. It scrolls horizontally and the chevrons nudge it; each chevron
   hides itself once the rail reaches that edge. */
.cm-docfilter{position:relative;display:flex;align-items:center;gap:.5rem;width:min(100%,84rem);margin:0 auto 1.5rem}
.cm-docfilter__rail{display:flex;gap:.5rem;overflow-x:auto;scroll-behavior:smooth;padding:.25rem;scrollbar-width:none;-ms-overflow-style:none}
.cm-docfilter__rail::-webkit-scrollbar{display:none}
.cm-docfilter__nav{flex:none;display:grid;place-items:center;width:2.25rem;height:2.25rem;padding:0;border:1px solid rgb(20 47 134 / .18);border-radius:999px;background:#FFFFFF;color:#142F86;cursor:pointer}
.cm-docfilter__nav:hover{background:#142F86;color:#FFFFFF}
.cm-docfilter__nav svg{width:1.15rem;height:1.15rem}
.cm-docfilter__nav[hidden]{display:none}
.cm-docchip{flex:none;display:inline-flex;align-items:center;height:2.5rem;padding:0 1.125rem;border:1px solid rgb(20 47 134 / .18);border-radius:999px;background:#FFFFFF;color:#142F86;font-family:inherit;font-size:.875rem;font-weight:500;white-space:nowrap;cursor:pointer;transition:background .18s,color .18s,border-color .18s}
.cm-docchip:hover{border-color:#31B4F4}
.cm-docchip.is-on{background:#142F86;border-color:#142F86;color:#FFFFFF}

.cm-docs{display:grid;grid-template-columns:1fr;gap:1rem;width:min(100%,84rem);margin-inline:auto}
.cm-doc{position:relative;display:flex;align-items:stretch;overflow:hidden;border-radius:10px;background:#F4F6F1;min-height:11rem}
.cm-doc__photo{position:relative;flex:0 0 38%;align-self:stretch;background:#E4E8DC}
.cm-doc__photo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 18%}
/* Shown until a photograph is uploaded. Brand tint rather than the template
   green, so an empty tile reads as deliberate. */
.cm-doc__photo--empty{background:linear-gradient(160deg,rgb(49 180 244 / .16),rgb(20 47 134 / .10))}
.cm-doc__monogram{position:absolute;inset:0;display:grid;place-items:center;font-size:1.75rem;font-weight:700;letter-spacing:.02em;color:rgb(20 47 134 / .38)}
.cm-doc__body{position:relative;flex:1 1 auto;min-width:0;display:flex;flex-direction:column;align-items:flex-start;gap:.2rem;padding:1.5rem 1rem 1rem}
.cm-doc__go{position:absolute;top:.7rem;right:.8rem;display:grid;place-items:center;width:1.85rem;height:1.85rem;border-radius:999px;background:#1B1B1B;color:#FFFFFF!important}
.cm-doc__go svg{width:.9rem;height:.9rem}
.cm-doc__spec{margin:0 2.2rem .1rem 0;font-size:.8125rem;font-weight:400;line-height:1.3;color:rgb(20 47 134 / .62)}
.cm-doc__name{margin:0;font-size:1.125rem;line-height:1.2;font-weight:700;letter-spacing:-.015em;color:#142F86}
.cm-doc__deg,.cm-doc__exp{margin:0;font-size:.8125rem;font-weight:400;line-height:1.35;color:rgb(20 47 134 / .58)}
.cm-doc__btn{display:inline-flex;align-items:center;justify-content:center;margin-top:auto;width:100%;height:2.4rem;border-radius:6px;background:#142F86;color:#FFFFFF!important;font-size:.8125rem;font-weight:700;text-decoration:none!important;transition:background .2s}
.cm-doc__btn:hover{background:#31B4F4;color:#142F86!important}

@media(min-width:640px){
  .cm-docs{grid-template-columns:1fr 1fr;gap:1.25rem}
  .cm-doc{min-height:15rem}
  .cm-doc__photo{flex:0 0 40%}
  .cm-doc__body{padding:1.9rem 1.35rem 1.25rem}
  .cm-doc__monogram{font-size:2.25rem}
  .cm-doc__spec{font-size:.875rem}
  .cm-doc__name{font-size:1.375rem}
  .cm-doc__deg,.cm-doc__exp{font-size:.875rem}
  .cm-doc__btn{width:min(100%,14rem);height:2.6rem;font-size:.875rem}
}
/* The cards get wide on a desktop, so the type has to grow with them or it
   reads as undersized against all that space. */
@media(min-width:1024px){
  .cm-doc{min-height:17rem}
  .cm-doc__body{padding:2.1rem 1.6rem 1.4rem}
  .cm-doc__go{top:.9rem;right:1rem;width:2.1rem;height:2.1rem}
  .cm-doc__go svg{width:1rem;height:1rem}
  .cm-doc__spec{font-size:.9375rem}
  .cm-doc__name{font-size:1.625rem}
  .cm-doc__deg,.cm-doc__exp{font-size:.9375rem}
  .cm-doc__btn{height:2.75rem;font-size:.9375rem}
}
@media(min-width:1440px){
  .cm-doc{min-height:18rem}
  .cm-doc__spec{font-size:1rem}
  .cm-doc__name{font-size:1.875rem}
  .cm-doc__deg,.cm-doc__exp{font-size:1rem}
}

.cm-team__more-wrap{display:flex;justify-content:center;margin-top:2rem}
.cm-team__more{display:inline-flex;align-items:center;gap:.5rem;min-height:3rem;padding:0 1.9rem;border-radius:999px;background:#142F86;color:#FFFFFF!important;font-size:.9375rem;font-weight:700;text-decoration:none!important;transition:background .2s}
.cm-team__more:hover{background:#31B4F4;color:#142F86!important}
.cm-team__more svg{width:1rem;height:1rem}
`;

/** Initials for a card with no photo yet, e.g. "Dr. Anita Rao" -> "AR". */
function monogram(name: string) {
  return name
    .replace(/^Dr\.?\s+/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0] ?? "")
    .join("")
    .toUpperCase();
}

function Arrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 17 17 7M9 7h8v8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Chevron({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d={dir === "prev" ? "M14 6l-6 6 6 6" : "M10 6l6 6-6 6"}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DoctorCard({ doctor }: { doctor: Doctor }) {
  const href = doctor.href ?? `${BP}/specialties/${slugify(doctor.specialty)}`;

  return (
    <article className="cm-doc">
      <div className={`cm-doc__photo${doctor.image ? "" : " cm-doc__photo--empty"}`}>
        {doctor.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photo(doctor.image)} alt={doctor.name} loading="lazy" decoding="async" />
        ) : (
          <span className="cm-doc__monogram" aria-hidden="true">
            {monogram(doctor.name)}
          </span>
        )}
      </div>
      <div className="cm-doc__body">
        <Link href={href} className="cm-doc__go" aria-label={`View ${doctor.name}`}>
          <Arrow />
        </Link>
        <p className="cm-doc__spec">{doctor.title}</p>
        <h3 className="cm-doc__name">{doctor.name}</h3>
        {doctor.degrees ? <p className="cm-doc__deg">{doctor.degrees}</p> : null}
        {doctor.experience ? <p className="cm-doc__exp">{doctor.experience}</p> : null}
        <Link href={`${BP}/patient-info/appointment-booking`} className="cm-doc__btn">
          Book Now
        </Link>
      </div>
    </article>
  );
}

type DoctorsSectionProps = {
  eyebrow: string;
  title: string;
  /** Cap the number of cards. Omit to show the whole roster. */
  limit?: number;
  /** Specialty filter rail. Pointless over a capped subset, so it defaults off. */
  showFilter?: boolean;
  /** Renders a "view more" link when set and the list is capped. */
  moreHref?: string;
  moreLabel?: string;
  /**
   * Set when this section is the first thing on a page, so it clears the fixed
   * site header that a page hero would otherwise push it past.
   */
  firstOnPage?: boolean;
};

export function DoctorsSection({
  eyebrow,
  title,
  limit,
  showFilter = false,
  moreHref,
  moreLabel = "View All Doctors",
  firstOnPage = false,
}: DoctorsSectionProps) {
  const [active, setActive] = useState("All");
  const railRef = useRef<HTMLDivElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  // The chevrons are only useful while the rail overflows, so track both edges
  // and hide each one once there is nothing left to reveal that way.
  const syncEdges = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const max = rail.scrollWidth - rail.clientWidth;
    setAtStart(rail.scrollLeft <= 1);
    setAtEnd(rail.scrollLeft >= max - 1);
  }, []);

  useEffect(() => {
    if (!showFilter) return;
    syncEdges();
    window.addEventListener("resize", syncEdges);
    return () => window.removeEventListener("resize", syncEdges);
  }, [syncEdges, showFilter]);

  const nudge = (dir: "prev" | "next") => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: (dir === "prev" ? -1 : 1) * rail.clientWidth * 0.8, behavior: "smooth" });
  };

  const matching = active === "All" ? doctors : doctors.filter((d) => d.specialty === active);
  const shown = limit ? matching.slice(0, limit) : matching;
  const showMore = Boolean(moreHref) && matching.length > shown.length;

  return (
    <section id="team" className={`cm-team${firstOnPage ? " cm-team--page" : ""}`}>
      <style>{css}</style>

      <div className="cm-team__head">
        <p className="cm-team__eyebrow">{eyebrow}</p>
        <h2 className="cm-team__title">{title}</h2>
      </div>

      {showFilter ? (
        <div className="cm-docfilter">
          <button
            type="button"
            className="cm-docfilter__nav"
            onClick={() => nudge("prev")}
            hidden={atStart}
            aria-label="Scroll filters left"
          >
            <Chevron dir="prev" />
          </button>

          {/* A group of toggles, not a tablist: there are no tabpanels here, the
              chips filter one shared grid. aria-pressed conveys the state. */}
          <div
            className="cm-docfilter__rail"
            ref={railRef}
            onScroll={syncEdges}
            role="group"
            aria-label="Filter doctors by specialty"
          >
            {doctorFilters.map((label) => (
              <button
                key={label}
                type="button"
                aria-pressed={label === active}
                className={`cm-docchip${label === active ? " is-on" : ""}`}
                onClick={() => setActive(label)}
              >
                {label}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="cm-docfilter__nav"
            onClick={() => nudge("next")}
            hidden={atEnd}
            aria-label="Scroll filters right"
          >
            <Chevron dir="next" />
          </button>
        </div>
      ) : null}

      <div className="cm-docs">
        {shown.map((doctor) => (
          <DoctorCard key={`${doctor.name}-${doctor.specialty}`} doctor={doctor} />
        ))}
      </div>

      {showMore && moreHref ? (
        <div className="cm-team__more-wrap">
          <Link href={moreHref} className="cm-team__more">
            <span>{moreLabel}</span>
            <Arrow />
          </Link>
        </div>
      ) : null}
    </section>
  );
}

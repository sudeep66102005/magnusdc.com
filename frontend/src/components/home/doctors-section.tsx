"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Link from "next/link";
import { doctorFilters, doctors, type Doctor } from "@/lib/data/doctors";

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

/** `image` is a path under /assets/, e.g. "uploads/doctors/dr-anita-rao.jpg". */
const photo = (path: string) => encodeURI(`${BP}/assets/${path}`);

/**
 * The section carries its own stylesheet because it renders on the homepage and
 * on /doctors, and those pages share no CSS: the cm-* rules live inside the
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
.cm-team{position:relative;z-index:10;background:#FFFFFF;padding:4rem 1.25rem}
@media(min-width:768px){.cm-team{padding:4.5rem 2.5rem}}
/* Clearing the fixed site header is NOT this section's job — site-header.tsx
   already does it globally with
     body:not(:has(.cm-root)){padding-top:5.75rem}  (8rem from 1024px up)
   which applies to every page except the homepage. Adding header-sized padding
   here as well stacked the two and left a large empty band under the header.
   So this is only a small breathing space above the filter. */
.cm-team--page{padding-top:1rem}
.cm-team__head{display:flex;flex-direction:column;align-items:center;gap:.85rem;max-width:56rem;margin:0 auto 2.5rem;text-align:center}
.cm-team__title{margin:0;font-size:clamp(2rem,5vw,3.25rem);line-height:1.06;font-weight:700;letter-spacing:-.01em;color:#142F86}

/* Filter rail. It scrolls horizontally and the chevrons nudge it; each chevron
   hides itself once the rail reaches that edge. */
.cm-docfilter{position:relative;display:flex;align-items:center;gap:.5rem;width:min(100%,84rem);margin:0 auto 1.75rem}
.cm-docfilter__rail{display:flex;gap:.5rem;overflow-x:auto;scroll-behavior:smooth;padding:.25rem;scrollbar-width:none;-ms-overflow-style:none}
.cm-docfilter__rail::-webkit-scrollbar{display:none}
.cm-docfilter__nav{flex:none;display:grid;place-items:center;width:2.25rem;height:2.25rem;padding:0;border:1px solid rgb(20 47 134 / .14);border-radius:999px;background:#FFFFFF;color:#142F86;cursor:pointer}
.cm-docfilter__nav:hover{background:#142F86;color:#FFFFFF}
.cm-docfilter__nav svg{width:1.15rem;height:1.15rem}
.cm-docfilter__nav[hidden]{display:none}
.cm-docchip{flex:none;display:inline-flex;align-items:center;height:2.5rem;padding:0 1.125rem;border:1px solid rgb(20 47 134 / .14);border-radius:999px;background:#FFFFFF;color:#142F86;font-family:inherit;font-size:.875rem;font-weight:500;white-space:nowrap;cursor:pointer;transition:background .18s,color .18s,border-color .18s}
.cm-docchip:hover{border-color:#31B4F4}
.cm-docchip.is-on{background:#142F86;border-color:#142F86;color:#FFFFFF}

/* Two cards per row on desktop, matched heights. */
.cm-docs{display:grid;grid-template-columns:1fr;gap:1.5rem;width:min(100%,84rem);margin-inline:auto}
@media(min-width:720px){.cm-docs{grid-template-columns:1fr 1fr;gap:1.75rem}}

/* The card: image panel on the left, details on the right. */
.cm-doc{position:relative;display:flex;align-items:stretch;overflow:hidden;height:100%;min-height:14rem;border-radius:14px;background:#F5F6F3;transition:box-shadow .25s ease,transform .25s ease}
.cm-doc:hover{transform:translateY(-2px);box-shadow:0 18px 44px -22px rgb(20 47 134 / .28)}

/* Left image panel. Fixed share of the card so every row lines up, and ready
   for a real portrait: the img fills it edge to edge with no layout change. */
.cm-doc__photo{position:relative;flex:0 0 38%;align-self:stretch;overflow:hidden;background:linear-gradient(160deg,rgb(49 180 244 / .16),rgb(20 47 134 / .09))}
.cm-doc__photo img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover;object-position:50% 15%;transition:transform .4s ease}
.cm-doc:hover .cm-doc__photo img{transform:scale(1.04)}
.cm-doc__monogram{position:absolute;inset:0;display:grid;place-items:center;font-size:2rem;font-weight:700;letter-spacing:.02em;color:rgb(20 47 134 / .4)}

/* Right details column. */
.cm-doc__body{position:relative;flex:1 1 auto;min-width:0;display:flex;flex-direction:column;align-items:flex-start;padding:1.5rem 1.25rem 1.25rem}
/* Specialty and qualification lines: Lato Light at a dark navy. Lato 300 is
   loaded in layout.tsx, so this is a real light weight rather than a browser
   synthesising one. Darker than before too — these were washed out at 60%
   opacity. */
.cm-doc__spec{margin:0 2.5rem .35rem 0;font-size:.8125rem;font-weight:300;line-height:1.35;color:#0F2461}
.cm-doc__name{margin:0 0 .35rem;font-size:1.25rem;line-height:1.22;font-weight:700;letter-spacing:-.01em;color:#142F86}
/* Clamped to four lines so a long credential list cannot stretch the card and
   drag its whole grid row taller with it — card size has to stay fixed. */
.cm-doc__qual{margin:0;font-size:.8125rem;font-weight:300;line-height:1.45;color:#0F2461;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical;overflow:hidden}

/* Small round arrow in the corner. White surface with a navy glyph, so it
   reads as a quiet control against the tinted card rather than a heavy dark
   dot. It links to Contact Us. */
.cm-doc__go{position:absolute;top:.9rem;right:.9rem;display:grid;place-items:center;width:2.1rem;height:2.1rem;border-radius:999px;background:#FFFFFF;color:#142F86;box-shadow:0 2px 8px rgb(20 47 134 / .16);transition:background .2s ease,color .2s ease}
.cm-doc__go svg{width:.95rem;height:.95rem;transition:transform .2s ease}
.cm-doc:hover .cm-doc__go{background:#142F86;color:#FFFFFF}
.cm-doc:hover .cm-doc__go svg{transform:translate(2px,-2px)}

/* Years-of-experience badge. The tint is chosen from the specialty name, so
   every doctor in a specialty gets the same accent and the page stays
   cohesive rather than looking randomly coloured. */
.cm-doc__badge{display:inline-flex;align-items:center;gap:.4rem;margin:.75rem 0 0;padding:.4rem .7rem;border-radius:999px;font-size:.75rem;font-weight:600;line-height:1.1}
.cm-doc__badge svg{width:.95rem;height:.95rem;flex:none}
.cm-doc__badge--sky{background:rgb(49 180 244 / .15);color:#0E4C7A}
.cm-doc__badge--green{background:rgb(34 160 96 / .14);color:#166B49}
.cm-doc__badge--violet{background:rgb(124 92 214 / .14);color:#4A3990}
.cm-doc__badge--amber{background:rgb(214 158 46 / .18);color:#78581A}

/* Book Now: solid, high-contrast, and pushed to the bottom of the card so it
   is unmistakably visible — the previous version had lost it entirely. */
.cm-doc__btn{display:inline-flex;align-items:center;justify-content:center;margin-top:auto;width:min(100%,13rem);height:2.6rem;border-radius:8px;background:#142F86;color:#FFFFFF!important;font-size:.875rem;font-weight:700;text-decoration:none!important;transition:background .2s ease}
.cm-doc__btn:hover{background:#31B4F4;color:#142F86!important}

@media(min-width:1024px){
  .cm-doc{min-height:17rem;border-radius:16px}
  .cm-doc__body{padding:2rem 1.75rem 1.75rem}
  .cm-doc__monogram{font-size:2.5rem}
  .cm-doc__spec{font-size:.9375rem;margin-right:3rem}
  .cm-doc__name{font-size:1.625rem;margin-bottom:.45rem}
  .cm-doc__qual{font-size:.9375rem}
  .cm-doc__go{top:1.15rem;right:1.15rem;width:2.5rem;height:2.5rem}
  .cm-doc__go svg{width:1.05rem;height:1.05rem}
  .cm-doc__badge{font-size:.8125rem;padding:.45rem .8rem;margin-top:.9rem}
  .cm-doc__btn{height:2.9rem;font-size:.9375rem}
}
@media(min-width:1440px){
  .cm-doc{min-height:18.5rem}
  .cm-doc__name{font-size:1.875rem}
  .cm-doc__spec,.cm-doc__qual{font-size:1rem}
}

.cm-team__more-wrap{display:flex;justify-content:center;margin-top:2.5rem}
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

/** Small medal glyph for the experience badge. */
function MedalIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="9.5" r="5.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M12 7.6l.85 1.72 1.9.28-1.37 1.34.32 1.9L12 11.94l-1.7.9.32-1.9-1.37-1.34 1.9-.28L12 7.6Z" fill="currentColor" />
      <path d="M9 15.2 7.5 21l4.5-2.3L16.5 21 15 15.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Subtle accent tints for the badge, kept few so the grid stays cohesive. */
const BADGE_TINTS = ["sky", "green", "violet", "amber"] as const;

/**
 * Picks a tint from the specialty name, so every doctor within a specialty
 * shares one accent and the colours look deliberate rather than arbitrary.
 */
function badgeTint(specialty: string): (typeof BADGE_TINTS)[number] {
  let sum = 0;
  for (let i = 0; i < specialty.length; i += 1) sum += specialty.charCodeAt(i);
  return BADGE_TINTS[sum % BADGE_TINTS.length];
}

/**
 * Turns the free-text experience field into a short badge label, e.g.
 * "25+ years experience, 20+ as a specialist" -> "25+ years experience".
 * Entries that carry no year figure (procedure counts, fellowship notes) fall
 * back to their first clause, and are dropped if that is still too long for a
 * pill — better no badge than a badge that wraps across the card.
 */
function experienceLabel(experience: string): string | null {
  // Split on comma-then-space only. A bare comma also appears inside numbers
  // like "5,000+", and splitting on that yielded a badge reading just "5".
  const first = experience.split(/,\s+/)[0].trim();
  const years = first.match(/^([\d,]+\+?)\s*years?/i);
  if (years) return `${years[1]} years experience`;
  return first.length <= 32 ? first : null;
}

function DoctorCard({ doctor }: { doctor: Doctor }) {
  const badge = doctor.experience ? experienceLabel(doctor.experience) : null;

  return (
    <article className="cm-doc">
      <div className="cm-doc__photo">
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
        <Link
          href={`${BP}/contact`}
          className="cm-doc__go"
          aria-label={`Contact us about ${doctor.name}`}
        >
          <Arrow />
        </Link>
        <p className="cm-doc__spec">{doctor.specialty}</p>
        <h3 className="cm-doc__name">{doctor.name}</h3>
        {doctor.keyQualification ? <p className="cm-doc__qual">{doctor.keyQualification}</p> : null}
        {badge ? (
          <span className={`cm-doc__badge cm-doc__badge--${badgeTint(doctor.specialty)}`}>
            <MedalIcon />
            {badge}
          </span>
        ) : null}
        <Link href={`${BP}/patient-info/appointment-booking`} className="cm-doc__btn">
          Book Now
        </Link>
      </div>
    </article>
  );
}

type DoctorsSectionProps = {
  /** Omit entirely to render no heading — just the filter (if shown) and the cards. */
  title?: string;
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
  title,
  limit,
  showFilter = false,
  moreHref,
  moreLabel = "View All Specialists",
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

      {title ? (
        <div className="cm-team__head">
          <h2 className="cm-team__title">{title}</h2>
        </div>
      ) : null}

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

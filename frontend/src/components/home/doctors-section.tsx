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
.cm-team{position:relative;z-index:10;background:#F7F9FC;padding:4.5rem 1.25rem}
@media(min-width:768px){.cm-team{padding:5rem 2.5rem}}
/* When this section is the first thing on a page there is no hero to push it
   clear of the site header, which is fixed: 1rem from the top plus a 4.25rem
   bar on small screens and 6.5rem from 1024px up. */
.cm-team--page{padding-top:6.75rem}
@media(min-width:1024px){.cm-team--page{padding-top:9.5rem}}
.cm-team__head{display:flex;flex-direction:column;align-items:center;gap:.85rem;max-width:56rem;margin:0 auto 2.5rem;text-align:center}
.cm-team__title{margin:0;font-size:clamp(2rem,5vw,3.25rem);line-height:1.06;font-weight:700;letter-spacing:-.01em;color:#142F86}

/* Filter rail. It scrolls horizontally and the chevrons nudge it; each chevron
   hides itself once the rail reaches that edge. */
.cm-docfilter{position:relative;display:flex;align-items:center;gap:.5rem;width:min(100%,72rem);margin:0 auto 2rem}
.cm-docfilter__rail{display:flex;gap:.5rem;overflow-x:auto;scroll-behavior:smooth;padding:.25rem;scrollbar-width:none;-ms-overflow-style:none}
.cm-docfilter__rail::-webkit-scrollbar{display:none}
.cm-docfilter__nav{flex:none;display:grid;place-items:center;width:2.25rem;height:2.25rem;padding:0;border:1px solid rgb(20 47 134 / .14);border-radius:999px;background:#FFFFFF;color:#142F86;cursor:pointer}
.cm-docfilter__nav:hover{background:#142F86;color:#FFFFFF}
.cm-docfilter__nav svg{width:1.15rem;height:1.15rem}
.cm-docfilter__nav[hidden]{display:none}
.cm-docchip{flex:none;display:inline-flex;align-items:center;height:2.5rem;padding:0 1.125rem;border:1px solid rgb(20 47 134 / .14);border-radius:999px;background:#FFFFFF;color:#142F86;font-family:inherit;font-size:.875rem;font-weight:500;white-space:nowrap;cursor:pointer;transition:background .18s,color .18s,border-color .18s}
.cm-docchip:hover{border-color:#31B4F4}
.cm-docchip.is-on{background:#142F86;border-color:#142F86;color:#FFFFFF}

/* Card grid: two columns, generous gutters, matched row heights. */
.cm-docs{display:grid;grid-template-columns:1fr;gap:1.5rem;width:min(100%,72rem);margin-inline:auto}
@media(min-width:720px){.cm-docs{grid-template-columns:1fr 1fr;gap:1.75rem}}

/* The card. A quiet white/glass surface — a hairline border plus a soft, wide
   shadow reads as premium; a heavy border or a dark card would not. */
.cm-doc{position:relative;display:flex;flex-direction:column;height:100%;border-radius:20px;border:1px solid rgb(20 47 134 / .08);background:#FFFFFF;box-shadow:0 1px 2px rgb(20 47 134 / .04),0 16px 40px -24px rgb(20 47 134 / .16);padding:1.75rem;gap:1.25rem;transition:box-shadow .25s ease,transform .25s ease,border-color .25s ease}
.cm-doc:hover{box-shadow:0 4px 10px rgb(20 47 134 / .06),0 28px 56px -24px rgb(20 47 134 / .22);transform:translateY(-3px);border-color:rgb(20 47 134 / .14)}

.cm-doc__top{display:flex;align-items:flex-start;gap:1.1rem}

/* Left-side visual slot — deliberately compact, a placeholder for a future
   photo rather than the card's focal point. A perfect circle so a portrait
   crop will sit correctly without any layout change later. */
.cm-doc__avatar{position:relative;flex:none;width:3.75rem;height:3.75rem;border-radius:999px;overflow:hidden;background:linear-gradient(160deg,rgb(49 180 244 / .16),rgb(20 47 134 / .08));transition:transform .25s ease}
.cm-doc:hover .cm-doc__avatar{transform:scale(1.04)}
.cm-doc__avatar img{position:absolute;inset:0;width:100%;height:100%;object-fit:cover}
.cm-doc__monogram{position:absolute;inset:0;display:grid;place-items:center;font-size:1.0625rem;font-weight:700;letter-spacing:.02em;color:rgb(20 47 134 / .45)}

.cm-doc__id{flex:1 1 auto;min-width:0}
/* The name is the focal point of the card: largest, boldest, first thing read. */
.cm-doc__name{margin:0 0 .3rem;font-size:1.1875rem;line-height:1.25;font-weight:700;letter-spacing:-.01em;color:#142F86}
.cm-doc__spec{margin:0;font-size:.8125rem;font-weight:500;line-height:1.4;color:rgb(20 47 134 / .55)}
.cm-doc__qual{margin:.2rem 0 0;font-size:.8125rem;font-weight:400;line-height:1.4;color:rgb(20 47 134 / .58)}

.cm-doc__foot{display:flex;align-items:center;justify-content:space-between;gap:.75rem;margin-top:auto}

/* Experience badge — a small pill with a professional icon, not a paragraph. */
.cm-doc__badge{display:inline-flex;align-items:center;gap:.4rem;padding:.4rem .7rem;border-radius:999px;background:rgb(49 180 244 / .12);color:#142F86;font-size:.75rem;font-weight:600;line-height:1}
.cm-doc__badge svg{width:.9rem;height:.9rem;flex:none}

/* The action is a small round arrow, not a full-width button — the badge
   already carries the supporting information. */
.cm-doc__go{flex:none;display:grid;place-items:center;width:2.5rem;height:2.5rem;border-radius:999px;background:#142F86;color:#FFFFFF;transition:background .2s ease,transform .2s ease}
.cm-doc__go svg{width:1rem;height:1rem;transition:transform .2s ease}
.cm-doc:hover .cm-doc__go{background:#31B4F4}
.cm-doc:hover .cm-doc__go svg{transform:translate(2px,-2px)}

@media(min-width:1024px){
  .cm-doc{padding:2rem;gap:1.5rem}
  .cm-doc__avatar{width:4.25rem;height:4.25rem}
  .cm-doc__name{font-size:1.375rem}
  .cm-doc__spec,.cm-doc__qual{font-size:.875rem}
  .cm-doc__badge{font-size:.8125rem;padding:.45rem .8rem}
  .cm-doc__go{width:2.75rem;height:2.75rem}
}

.cm-team__more-wrap{display:flex;justify-content:center;margin-top:3rem}
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

/** A simple briefcase glyph for the experience badge — professional, not decorative. */
function BadgeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="7.5" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="M8 7.5V6a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1.5" stroke="currentColor" strokeWidth="1.7" />
      <path d="M3 12.5h18" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

/**
 * Pulls a short badge label out of the full experience string, e.g.
 * "25+ years experience, 20+ as a specialist" -> "25+ yrs". Falls back to the
 * full string trimmed to a sane length if it doesn't match that shape, so an
 * unusual entry still renders rather than disappearing.
 */
function experienceBadge(experience: string): string {
  const match = experience.match(/^([\d,]+\+?)\s*years?/i);
  if (match) return `${match[1]} yrs`;
  return experience.length > 22 ? `${experience.slice(0, 21)}…` : experience;
}

function DoctorCard({ doctor }: { doctor: Doctor }) {
  const href = doctor.href ?? `${BP}/specialties/${slugify(doctor.specialty)}`;

  return (
    <Link href={href} className="cm-doc" aria-label={`View ${doctor.name}, ${doctor.title}`}>
      <div className="cm-doc__top">
        <div className={`cm-doc__avatar${doctor.image ? "" : " cm-doc__avatar--empty"}`}>
          {doctor.image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img src={photo(doctor.image)} alt={doctor.name} loading="lazy" decoding="async" />
          ) : (
            <span className="cm-doc__monogram" aria-hidden="true">
              {monogram(doctor.name)}
            </span>
          )}
        </div>
        <div className="cm-doc__id">
          <h3 className="cm-doc__name">{doctor.name}</h3>
          <p className="cm-doc__spec">{doctor.specialty}</p>
          {doctor.keyQualification ? <p className="cm-doc__qual">{doctor.keyQualification}</p> : null}
        </div>
      </div>

      <div className="cm-doc__foot">
        {doctor.experience ? (
          <span className="cm-doc__badge">
            <BadgeIcon />
            {experienceBadge(doctor.experience)}
          </span>
        ) : (
          <span />
        )}
        <span className="cm-doc__go" aria-hidden="true">
          <Arrow />
        </span>
      </div>
    </Link>
  );
}

type DoctorsSectionProps = {
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

      <div className="cm-team__head">
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

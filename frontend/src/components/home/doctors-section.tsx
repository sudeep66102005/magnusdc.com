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
    <svg className="cm-arrow" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
        <Link href={href} className="cm-doc__go" aria-label={`View ${doctor.name}`}>
          <Arrow />
        </Link>
        <p className="cm-doc__spec">{doctor.specialty}</p>
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

export function DoctorsSection({ eyebrow, title }: { eyebrow: string; title: string }) {
  const [active, setActive] = useState("All");
  const railRef = useRef<HTMLDivElement | null>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(true);

  // The arrows are only useful while the rail actually overflows, so track both
  // edges and hide each arrow once there is nothing left to reveal that way.
  const syncEdges = useCallback(() => {
    const rail = railRef.current;
    if (!rail) return;
    const max = rail.scrollWidth - rail.clientWidth;
    setAtStart(rail.scrollLeft <= 1);
    setAtEnd(rail.scrollLeft >= max - 1);
  }, []);

  useEffect(() => {
    syncEdges();
    const rail = railRef.current;
    if (!rail) return;
    window.addEventListener("resize", syncEdges);
    return () => window.removeEventListener("resize", syncEdges);
  }, [syncEdges]);

  const nudge = (dir: "prev" | "next") => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: (dir === "prev" ? -1 : 1) * rail.clientWidth * 0.8, behavior: "smooth" });
  };

  const shown = active === "All" ? doctors : doctors.filter((d) => d.specialty === active);

  return (
    <section id="team" className="cm-team">
      <div className="cm-team__head">
        <p className="cm-eyebrow" data-rise>{eyebrow}</p>
        <h2 className="cm-lead cm-reveal">{title}</h2>
      </div>

      <div className="cm-docfilter">
        <button
          type="button"
          className="cm-docfilter__nav cm-docfilter__nav--prev"
          onClick={() => nudge("prev")}
          hidden={atStart}
          aria-label="Scroll filters left"
        >
          <Chevron dir="prev" />
        </button>

        {/* A group of toggles, not a tablist: there are no tabpanels here, the
            chips filter one shared grid. aria-pressed conveys the state. */}
        <div className="cm-docfilter__rail" ref={railRef} onScroll={syncEdges} role="group" aria-label="Filter doctors by specialty">
          {doctorFilters.map((label) => (
            <button
              key={label}
              type="button"
              aria-pressed={label === active}
              className={`cm-chip${label === active ? " is-on" : ""}`}
              onClick={() => setActive(label)}
            >
              {label}
            </button>
          ))}
        </div>

        <button
          type="button"
          className="cm-docfilter__nav cm-docfilter__nav--next"
          onClick={() => nudge("next")}
          hidden={atEnd}
          aria-label="Scroll filters right"
        >
          <Chevron dir="next" />
        </button>
      </div>

      <div className="cm-docs">
        {shown.map((doctor) => (
          <DoctorCard key={`${doctor.name}-${doctor.specialty}`} doctor={doctor} />
        ))}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const hospImg = (f: string) => encodeURI(`${BP}/assets/uploads/hospital/${f}`);

const SLIDE_MS = 5200;

const slides = [
  {
    tab: "Our Lobby",
    image: hospImg("lobby 2.jpeg"),
    headline: "A calm, open lobby — not a crowded corridor.",
    features: ["Wide, uncluttered waiting area", "Comfortable seating for families", "Front desk in the same room"],
  },
  {
    tab: "Reception",
    image: hospImg("lobby 1.jpeg"),
    headline: "One desk that guides your whole visit.",
    features: ["Single point for billing and reports", "Consulting rooms a few steps away", "Warm, softly lit interiors"],
  },
  {
    tab: "OPD",
    image: hospImg("opd 2.jpeg"),
    headline: "Consulting rooms built for unhurried conversations.",
    features: ["Doctor's desk and exam couch together", "Scan equipment in the same room", "Privacy curtain at every bed"],
  },
  {
    tab: "Scan Room",
    image: hospImg("opd 1.jpeg"),
    headline: "Scans done right where your doctor sits.",
    features: ["Ultrasound and Doppler on site", "Clean, air-conditioned rooms", "Reports reach your specialist the same day"],
  },
] as const;

export function WhyMagnusSlideshow() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Pause the loop while the section is off-screen or the tab is hidden.
  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === "undefined") return;
    const observer = new IntersectionObserver(([entry]) => setPlaying(entry.isIntersecting), {
      threshold: 0.25,
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!playing) return;
    if (typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setTimeout(() => setActive((i) => (i + 1) % slides.length), SLIDE_MS);
    return () => window.clearTimeout(timer);
  }, [active, playing]);

  return (
    <section id="why-magnus" className="cm-why-mag" aria-label="Why Magnus" ref={sectionRef}>
      <div className="cm-why-mag__frame">
        {slides.map((slide, index) => (
          <div
            key={slide.tab}
            className={`cm-why-mag__shot${index === active ? " is-on" : ""}`}
            style={{ backgroundImage: `url("${slide.image}")` }}
            aria-hidden="true"
          />
        ))}
        <span className="cm-why-mag__scrim" aria-hidden="true" />

        <div className="cm-why-mag__body">
          <div className="cm-why-mag__copy" role="group" aria-live="polite">
            <p className="cm-why-mag__eyebrow">Why Magnus</p>
            {slides.map((slide, index) => (
              <div
                key={slide.tab}
                className={`cm-why-mag__pane${index === active ? " is-on" : ""}`}
                hidden={index !== active}
              >
                <h2 className="cm-why-mag__title">{slide.headline}</h2>
                <ul className="cm-why-mag__list">
                  {slide.features.map((f) => (
                    <li key={f}>
                      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path d="m5 13 4 4L19 7" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="cm-why-mag__foot">
            <div className="cm-why-mag__tabs" role="tablist" aria-label="Inside Magnus">
              {slides.map((slide, index) => (
                <button
                  key={slide.tab}
                  type="button"
                  role="tab"
                  id={`cm-why-mag-tab-${index}`}
                  className={`cm-why-mag__tab${index === active ? " is-on" : ""}`}
                  aria-selected={index === active}
                  onClick={() => setActive(index)}
                >
                  <span className="cm-why-mag__tab-label">{slide.tab}</span>
                  <span className="cm-why-mag__rail" aria-hidden="true">
                    <span
                      key={`${index}-${active}`}
                      className="cm-why-mag__fill"
                      style={
                        index === active
                          ? { animationDuration: `${SLIDE_MS}ms`, animationPlayState: playing ? "running" : "paused" }
                          : undefined
                      }
                    />
                  </span>
                </button>
              ))}
            </div>

            <Link href={`${BP}/patient-info/appointment-booking`} className="cm-why-mag__cta">
              Book a visit
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

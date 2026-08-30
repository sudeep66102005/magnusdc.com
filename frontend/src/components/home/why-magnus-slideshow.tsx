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
    lines: ["Zero queues.", "Instant digital flows.", "Comfortable lounge.", "Naturally lit open space."],
  },
  {
    tab: "OPD",
    image: hospImg("opd 2.jpeg"),
    lines: ["Easy access on single floor.", "Smart navigation built for you.", "State of the art electric beds."],
  },
] as const;

export function WhyMagnusSlideshow() {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement | null>(null);

  // Pause the loop while the section is off-screen.
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
    <section id="why-magnus" className="cm-why-mag" aria-label="Inside Magnus" ref={sectionRef}>
      <div className="cm-why-mag__frame">
        {slides.map((slide, index) => (
          <div
            key={slide.tab}
            className={`cm-why-mag__shot${index === active ? " is-on" : ""}`}
            style={{ backgroundImage: `url("${slide.image}")` }}
            aria-hidden="true"
          />
        ))}

        <div className="cm-why-mag__body">
          <div className="cm-why-mag__copy" aria-live="polite">
            {slides.map((slide, index) => (
              <div
                key={slide.tab}
                className={`cm-why-mag__pane${index === active ? " is-on" : ""}`}
                hidden={index !== active}
              >
                <h2 className="cm-why-mag__title">{slide.tab}</h2>
                <ul className="cm-why-mag__list">
                  {slide.lines.map((line) => (
                    <li key={line}>{line}</li>
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
              Consult our Doctor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

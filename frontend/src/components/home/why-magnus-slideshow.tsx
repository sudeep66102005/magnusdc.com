"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const hospImg = (f: string) => encodeURI(`${BP}/assets/uploads/hospital/${f}`);

/** Time each individual photo stays on screen. */
const SUB_MS = 3600;
/** How far the photo drifts as the section moves through the viewport. */
const PARALLAX_PX = 46;

const groups = [
  {
    tab: "Our Lobby",
    images: [hospImg("lobby 1.jpeg"), hospImg("lobby 2.jpeg")],
    lines: ["Zero queues.", "Instant digital flows.", "Comfortable lounge.", "Naturally lit open space."],
  },
  {
    tab: "OPD",
    images: [hospImg("opd 1.jpeg"), hospImg("opd 2.jpeg")],
    lines: ["Easy access on single floor.", "Smart navigation built for you.", "State of the art electric beds."],
  },
] as const;

/** Flattened running order: lobby 1, lobby 2, opd 1, opd 2, then loop. */
const reel = groups.flatMap((group, groupIndex) =>
  group.images.map((src) => ({ src, groupIndex })),
);

const firstStepOfGroup = groups.map((_, groupIndex) => reel.findIndex((s) => s.groupIndex === groupIndex));

export function WhyMagnusSlideshow() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);

  const activeGroup = reel[step].groupIndex;

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
    const timer = window.setTimeout(() => setStep((s) => (s + 1) % reel.length), SUB_MS);
    return () => window.clearTimeout(timer);
  }, [step, playing]);

  // Drift the photo with the scroll position. Writes a CSS variable straight to
  // the node so scrolling never triggers a React re-render.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const frame = frameRef.current;
    if (!frame) return;

    let raf = 0;
    const update = () => {
      raf = 0;
      const rect = frame.getBoundingClientRect();
      const viewport = window.innerHeight || 1;
      const span = (viewport + rect.height) / 2 || 1;
      const centre = rect.top + rect.height / 2;
      const progress = Math.max(-1, Math.min(1, (viewport / 2 - centre) / span));
      frame.style.setProperty("--cm-par", `${(progress * PARALLAX_PX).toFixed(2)}px`);
    };
    const onScroll = () => {
      if (raf) return;
      raf = window.requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) window.cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <section id="why-magnus" className="cm-why-mag" aria-label="Inside Magnus" ref={sectionRef}>
      <div className="cm-why-mag__frame" ref={frameRef}>
        <div className="cm-why-mag__shots" aria-hidden="true">
          {reel.map((shot, index) => (
            <div
              key={shot.src}
              className={`cm-why-mag__shot${index === step ? " is-on" : ""}`}
              style={{ backgroundImage: `url("${shot.src}")` }}
            />
          ))}
        </div>

        <div className="cm-why-mag__body">
          <div className="cm-why-mag__copy" aria-live="polite">
            {groups.map((group, groupIndex) => (
              <div
                key={group.tab}
                className={`cm-why-mag__pane${groupIndex === activeGroup ? " is-on" : ""}`}
                hidden={groupIndex !== activeGroup}
              >
                <h2 className="cm-why-mag__title">{group.tab}</h2>
                <ul className="cm-why-mag__list">
                  {group.lines.map((line) => (
                    <li key={line}>{line}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="cm-why-mag__foot">
            <div className="cm-why-mag__tabs" role="tablist" aria-label="Inside Magnus">
              {groups.map((group, groupIndex) => (
                <button
                  key={group.tab}
                  type="button"
                  role="tab"
                  className={`cm-why-mag__tab${groupIndex === activeGroup ? " is-on" : ""}`}
                  aria-selected={groupIndex === activeGroup}
                  onClick={() => setStep(firstStepOfGroup[groupIndex])}
                >
                  <span className="cm-why-mag__tab-label">{group.tab}</span>
                  <span className="cm-why-mag__rail" aria-hidden="true">
                    {/* Keyed on the group so the bar spans both of its photos
                        and only restarts when the tab itself changes. */}
                    <span
                      key={groupIndex === activeGroup ? `on-${groupIndex}` : `off-${groupIndex}`}
                      className="cm-why-mag__fill"
                      style={
                        groupIndex === activeGroup
                          ? {
                              animationDuration: `${SUB_MS * group.images.length}ms`,
                              animationPlayState: playing ? "running" : "paused",
                            }
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

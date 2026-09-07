"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
/* Photos now come from uploads/events, which is where the shoot was delivered.
   The four earlier uploads/hospital files are no longer referenced anywhere. */
const eventImg = (f: string) => encodeURI(`${BP}/assets/uploads/events/${f}`);

/** Time each individual photo stays on screen. */
const SUB_MS = 3600;
/** How far the photo drifts as the section moves through the viewport. */
const PARALLAX_PX = 46;

/**
 * A photo may carry a mobile-specific file. `desktop` is used from 768px up and
 * `mobile` below it, the same <picture> split the service cards use. Omit
 * `mobile` and the desktop file is used at every width.
 *
 * To give a slide its own mobile photo: drop the file into
 * `frontend/public/assets/uploads/events/` and name it here, e.g.
 *   { desktop: "lobby for desktop.jpeg", mobile: "lobby for mobiel view.jpeg" }
 * Portrait crops work best — these slides are full-screen, so a 16:9 photo
 * loses most of its width on a tall phone.
 */
type Photo = { desktop: string; mobile?: string };
type Group = { tab: string; images: Photo[]; lines: string[] };

/**
 * Every photo here has a desktop and a mobile file, shot for the crop each one
 * needs — the exception is the building, delivered as a single file named for
 * use at both sizes. File names are reproduced exactly as uploaded, including
 * the double spaces in two of them, because that is what is on disk.
 */
const groups: Group[] = [
  {
    tab: "Our Centre",
    images: [
      { desktop: "font face building for landing page bith desktop and mobiel.jpeg" },
    ],
    lines: [
      "Koramangala, 4th Block.",
      "Imaging, lab and consulting under one roof.",
      "Parking and step-free entry.",
    ],
  },
  {
    tab: "Our Lobby",
    images: [
      { desktop: "lobby for desktop.jpeg", mobile: "lobby for mobiel view.jpeg" },
      { desktop: "lobby2 for desktop.jpeg", mobile: "lobby2  for mobiel view.jpeg" },
    ],
    lines: [
      "Zero queues.",
      "Instant digital flows.",
      "Comfortable lounge.",
      "Naturally lit open space.",
    ],
  },
  {
    tab: "OPD",
    images: [
      { desktop: "opd 1 for desktop view.jpeg", mobile: "opd 1 for mobiel view.jpeg" },
      { desktop: "opd 2 for desktop view.jpeg", mobile: "opd 2 for mobiel view.jpeg" },
    ],
    lines: [
      "Easy access on single floor.",
      "Smart navigation built for you.",
      "State of the art electric beds.",
    ],
  },
  {
    tab: "Imaging",
    images: [
      {
        desktop: "mri for landing page desktop view.jpeg",
        mobile: "mri for landing page  mobile view.jpeg",
      },
      {
        desktop: "machine operating human destop view.jpeg",
        mobile: "machine operating human mobile view.jpeg",
      },
    ],
    lines: [
      "3T MRI and multi-slice CT.",
      "Run by trained radiographers.",
      "MRI and CT available 24/7.",
    ],
  },
  {
    tab: "Laboratory",
    images: [
      { desktop: "laboratory destop view.jpeg", mobile: "laboratory mobile view.jpeg" },
    ],
    lines: [
      "Samples processed in-house.",
      "Routine panels to molecular testing.",
      "Reports released digitally.",
    ],
  },
];

/**
 * Two running orders, because the phone must never be shown a desktop crop.
 *
 * The mobile files are 1254x1254 and the desktop files 1600x900. Only a photo
 * with its own mobile file enters the mobile reel — falling back to the desktop
 * file would put a 16:9 image on a phone, which is exactly what this avoids.
 * The building photo is currently the only one without a 1:1 version (it was
 * delivered at 1600x900 despite its name), so it plays on desktop only until a
 * square crop exists.
 */
const desktopReel = groups.flatMap((group, groupIndex) =>
  group.images.map((photo) => ({
    desktop: eventImg(photo.desktop),
    mobile: eventImg(photo.mobile ?? photo.desktop),
    groupIndex,
  })),
);

const mobileReel = groups.flatMap((group, groupIndex) =>
  group.images
    .filter((photo) => Boolean(photo.mobile))
    .map((photo) => ({
      desktop: eventImg(photo.desktop),
      mobile: eventImg(photo.mobile as string),
      groupIndex,
    })),
);

export function WhyMagnusSlideshow() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(true);
  /* Which reel is on screen. Starts false so the server renders the desktop
     order; the effect below corrects it before the first photo is swapped. */
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef<HTMLElement | null>(null);
  const frameRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(max-width: 767px)");
    const sync = () => setIsMobile(query.matches);
    sync();
    query.addEventListener("change", sync);
    return () => query.removeEventListener("change", sync);
  }, []);

  const reel = isMobile ? mobileReel : desktopReel;
  /* Modulo, not a raw index: the two reels differ in length, so a step that was
     valid before a resize must stay in range after it. */
  const index = reel.length ? step % reel.length : 0;
  const activeGroup = reel.length ? reel[index].groupIndex : 0;
  /* Tabs follow the reel, so a group with no photo at this width — the building
     on a phone — does not offer a tab that can never light up. */
  const visibleGroups = groups
    .map((group, groupIndex) => ({ group, groupIndex }))
    .filter(({ groupIndex }) => reel.some((shot) => shot.groupIndex === groupIndex));

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
  }, [step, playing, reel.length]);

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
          {reel.map((shot, shotIndex) => (
            <picture
              key={`${shot.groupIndex}-${shotIndex}-${shot.desktop}`}
              className={`cm-why-mag__shot${shotIndex === index ? " is-on" : ""}`}
            >
              <source media="(min-width: 768px)" srcSet={shot.desktop} />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={shot.mobile} alt="" loading={shotIndex === 0 ? "eager" : "lazy"} decoding="async" />
            </picture>
          ))}
        </div>

        <div className="cm-why-mag__body">
          <div className="cm-why-mag__copy" aria-live="polite">
            {visibleGroups.map(({ group, groupIndex }) => (
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
              {visibleGroups.map(({ group, groupIndex }) => (
                <button
                  key={group.tab}
                  type="button"
                  role="tab"
                  className={`cm-why-mag__tab${groupIndex === activeGroup ? " is-on" : ""}`}
                  aria-selected={groupIndex === activeGroup}
                  onClick={() => setStep(reel.findIndex((shot) => shot.groupIndex === groupIndex))}
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

            <Link href="/patient-info/appointment-booking" className="cm-why-mag__cta">
              Consult our Doctor
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

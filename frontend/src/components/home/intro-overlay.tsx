"use client";

import { useEffect, useState } from "react";

interface IntroOverlayProps {
  assetSrc: string;
}

/** Controls the homepage intro after hydration without rewriting React content. */
export function IntroOverlay({ assetSrc }: IntroOverlayProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const root = document.querySelector<HTMLElement>(".cm-root");
    const dismiss = () => {
      root?.classList.add("is-ready");
      setVisible(false);
    };
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const revealTimer = window.setTimeout(dismiss, reduce ? 0 : 1450);
    const revealFallback = window.setTimeout(dismiss, 2200);

    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(revealFallback);
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="cm-pre" aria-hidden="true">
      <div className="cm-pre__frame">
        <span className="cm-pre__corner cm-pre__corner--tl" />
        <span className="cm-pre__corner cm-pre__corner--tr" />
        <span className="cm-pre__corner cm-pre__corner--bl" />
        <span className="cm-pre__corner cm-pre__corner--br" />

        <div className="cm-pre__brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="cm-pre__mark"
            data-preloader-layer="ghost"
            src={assetSrc}
            alt=""
          />

          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="cm-pre__mark cm-pre__color" src={assetSrc} alt="" />

          <span className="cm-pre__scan" />
        </div>

        <p className="cm-pre__caption">Precision. Clarity. Care.</p>
      </div>
    </div>
  );
}

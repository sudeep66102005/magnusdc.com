"use client";

import { useState } from "react";

const reviews = [
  {
    name: "Ananya R.",
    time: "3 months ago",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=32",
    quote:
      "The scan was booked the same day and the report came through faster than I expected. Staff explained every step before starting, which made the whole visit a lot less stressful than I thought it'd be.",
  },
  {
    name: "Vikram S.",
    time: "5 months ago",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=12",
    quote:
      "Clean facility, on-time appointment, and the radiologist actually walked me through the results instead of just handing over a printout. Would recommend to anyone nearby.",
  },
  {
    name: "Priya M.",
    time: "2 months ago",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=45",
    quote:
      "Went in for a routine ultrasound and the team was patient with all my questions. Waiting area was comfortable and the whole thing took less time than my last hospital visit.",
  },
  {
    name: "Rohit K.",
    time: "a month ago",
    rating: 4,
    avatar: "https://i.pravatar.cc/80?img=51",
    quote:
      "Good experience overall — booking on WhatsApp was quick and the front desk kept me updated when there was a short delay. Only reason it's not five stars is parking was a bit tight.",
  },
  {
    name: "Divya N.",
    time: "6 months ago",
    rating: 5,
    avatar: "https://i.pravatar.cc/80?img=28",
    quote:
      "Brought my mother in for an ECHO and the technician was incredibly gentle and reassuring the whole time. They also compared it against her older reports, which we really appreciated.",
  },
] as const;

function StarRating({ rating, className }: { rating: number; className?: string }) {
  return (
    <span className={className} aria-hidden="true">
      {Array.from({ length: 5 }, (_, index) => (
        <svg
          key={index}
          className={index < rating ? "is-filled" : ""}
          viewBox="0 0 24 24"
          focusable="false"
        >
          <path d="m12 2.7 2.82 5.72 6.31.92-4.56 4.44 1.08 6.29L12 17.1l-5.65 2.97 1.08-6.29-4.56-4.44 6.31-.92L12 2.7Z" />
        </svg>
      ))}
    </span>
  );
}

function GoogleMark() {
  return (
    <svg className="cm-review__google" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">
      <path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.9c1.7-1.57 2.7-3.88 2.7-6.62z" />
      <path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.9-2.26c-.8.54-1.83.86-3.06.86-2.35 0-4.34-1.59-5.05-3.72H.98v2.33A9 9 0 0 0 9 18z" />
      <path fill="#FBBC05" d="M3.95 10.7A5.4 5.4 0 0 1 3.67 9c0-.59.1-1.17.28-1.7V4.97H.98A9 9 0 0 0 0 9c0 1.45.35 2.83.98 4.03l2.97-2.33z" />
      <path fill="#EA4335" d="M9 3.58c1.32 0 2.51.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .98 4.97l2.97 2.33C4.66 5.17 6.65 3.58 9 3.58z" />
    </svg>
  );
}

function ReviewCard({ review, duplicate }: { review: (typeof reviews)[number]; duplicate: boolean }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li className="cm-review-card" aria-hidden={duplicate || undefined}>
      <div className="cm-review-card__top">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="cm-review__avatar" src={review.avatar} alt="" loading="lazy" />
        <div className="cm-review__who">
          <p className="cm-review__name">{review.name}</p>
          <p className="cm-review__meta">
            <StarRating rating={review.rating} className="cm-review__stars" />
            <span className="sr-only">{review.rating} out of 5 stars</span>
            {review.time}
          </p>
        </div>
        <GoogleMark />
      </div>
      <p className={`cm-review__quote${expanded ? "" : " is-clamped"}`}>{review.quote}</p>
      <button
        className="cm-review__more"
        type="button"
        aria-expanded={expanded}
        tabIndex={duplicate ? -1 : undefined}
        onClick={() => setExpanded((value) => !value)}
      >
        {expanded ? "Show less" : "Read more"}
      </button>
    </li>
  );
}

export function TestimonialsSection() {
  return (
    <section className="cm-testimonials" aria-label="Patient testimonials">
      <div className="cm-testimonials__inner">
        <div className="cm-testimonials__head">
          <span className="cm-testimonials__eyebrow">
            <StarRating rating={5} className="cm-testimonials__eyebrow-stars" />
            <span>Based on 4,000+ reviews</span>
          </span>
          <h2 className="cm-testimonials__title">What patients say about their care</h2>
          <p>Real stories from the people we&apos;ve supported, pulled straight from Google Reviews.</p>
        </div>

        <div className="cm-testimonials__marquee">
          <ul className="cm-testimonials__track">
            {[...reviews, ...reviews].map((review, index) => (
              <ReviewCard
                key={`${review.name}-${index}`}
                review={review}
                duplicate={index >= reviews.length}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

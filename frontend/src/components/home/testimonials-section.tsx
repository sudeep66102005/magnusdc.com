"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/constants/site-config";

const reviews = [
  {
    name: "RAJDEEP",
    initials: "R",
    avatarTone: "blue",
    profile: "6 reviews",
    time: "7 months ago",
    rating: 5,
    quote:
      "Magnus Diagnostic Centre provides excellent service with polite staff, clean facilities, and accurate reports delivered on time. The process is smooth and professional, making patients feel comfortable and well cared for. Highly recommended for reliable diagnostic services.",
  },
  {
    name: "Muthu RM",
    initials: "M",
    avatarTone: "green",
    profile: "2 reviews",
    time: "a month ago",
    rating: 4,
    quote:
      "Dr. Chattbhurya conducted USG Doppler/scrotum. I am so happy that she conducted with an interactive manner comparing with old reports and the improvement thereof. Enlightened well. Best regards, Muthu.",
  },
  {
    name: "BHARAT BHUSHAN",
    initials: "BB",
    avatarTone: "slate",
    profile: "Local Guide · 45 reviews",
    time: "3 months ago",
    rating: 5,
    quote:
      "I accompanied my wife for her MRI brain scan, and the entire experience was remarkably smooth. The staff was incredibly gentle, and we encountered no issues whatsoever. The MRI process was completed swiftly, within just 20–25 minutes. We received the report within 1.5 hours, which is impressively fast compared to other centers. Highly recommended! 🌟",
  },
  {
    name: "Javeed Khan",
    initials: "J",
    avatarTone: "sky",
    profile: "5 reviews",
    time: "3 months ago",
    rating: 5,
    quote:
      "recently visited Magnus Diagnostic Centre for an arterial Doppler test. The centre is located on the 1st floor of a new building, and the place is clean and well-maintained.\n\nThe experience was very good. Dr. Chaathuraya is a young Radiologist was very friendly and helpful. She explained the procedure clearly and made me feel comfortable during the test.\n\nOverall, I had a smooth and positive experience. I would recommend this centre for diagnostic tests.",
  },
  {
    name: "Yamuna S",
    initials: "Y",
    avatarTone: "rose",
    profile: "4 reviews",
    time: "3 months ago",
    rating: 5,
    quote:
      "I'm grateful that Koramangala Diagnostic Centre referred me to Magnus. I came here for my growth scan and had a great experience. The place is clean and has a really calm atmosphere. The soft music helped me relax. The receptionist was polite and friendly, and helper Mangalamma was very supportive. The doctor was excellent too. Highly recommend, Thank you.",
  },
  {
    name: "shobith G P",
    initials: "SG",
    avatarTone: "violet",
    profile: "3 reviews",
    time: "4 months ago",
    rating: 5,
    quote:
      "I recently visited Magnus Diagnostic Centre for my scan, and overall it was a good experience. The staff were polite and cooperative, and the process was handled smoothly without much waiting time. The centre was clean and well-maintained, which made me feel comfortable during the visit. The technicians explained the procedure clearly, which helped reduce anxiety. Reports were provided on time, and the overall service felt professional and reliable. Would recommend Magnus Diagnostic Centre to anyone looking for quality diagnostic services.",
  },
  {
    name: "Nishanth Amberkar",
    initials: "N",
    avatarTone: "orange",
    profile: "1 review",
    time: "4 months ago",
    rating: 5,
    quote:
      "For past six years, I’ve visited Magnus Diagnostic Centre every six months for checkups. The facility is consistently clean and professional. Dr. Satish Karur is exceptionally approachable, providing invaluable advice and personalized care. Combined with the polite staff and timely, accurate reports, it remains my most trusted choice for reliable diagnostic services in Koramangala. Highly recommended!",
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
        <span className={`cm-review__avatar cm-review__avatar--${review.avatarTone}`} aria-hidden="true">
          {review.initials}
        </span>
        <div className="cm-review__who">
          <p className="cm-review__name">{review.name}</p>
          <p className="cm-review__profile">{review.profile}</p>
          <p className="cm-review__meta">
            <StarRating rating={review.rating} className="cm-review__stars" />
            <span className="sr-only">{review.rating} out of 5 stars</span>
            {review.time}
          </p>
        </div>
        <GoogleMark />
      </div>
      <p className={`cm-review__quote${expanded ? "" : " is-clamped"}`}>{review.quote}</p>
      <div className="cm-review__actions">
        <button
          className="cm-review__more"
          type="button"
          aria-expanded={expanded}
          tabIndex={duplicate ? -1 : undefined}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? "Show less" : "Read more"}
        </button>
        <a
          className="cm-review__google-link"
          href={siteConfig.googleReviews.href}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={duplicate ? -1 : undefined}
          aria-label={`Read ${review.name}'s full review on Google`}
        >
          Read full review on Google
        </a>
      </div>
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
            <span>Google patient reviews</span>
          </span>
          <h2 className="cm-testimonials__title">What patients say about their care</h2>
          <p>Real experiences shared by Magnus patients on Google Reviews.</p>
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

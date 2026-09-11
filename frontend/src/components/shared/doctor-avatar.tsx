import type { Doctor } from "@/lib/data/doctors";

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
/* Asset URL, so the base path is applied by hand and the spaces in the file
   names are encoded. Route hrefs must never do this — next/link adds it. */
const photo = (path: string) => encodeURI(`${BP}/assets/${path}`);

function monogram(name: string): string {
  return name
    .replace(/^Dr\.?\s*/i, "")
    .split(/\s+/)
    .slice(0, 2)
    .map((part) => part[0] ?? "")
    .join("")
    .toUpperCase();
}

/**
 * A consultant's photograph, or their initials when there is no photograph yet.
 *
 * Extracted because this same fallback now appears in four places — the listing
 * card, a doctor's own page, the specialty team lists and the "other
 * consultants" lists. The crop rule in particular is worth keeping in one place:
 * `imagePosition` defaults to `50% 15%`, an upward bias that suits portrait
 * sources, and landscape sources override it to `50% 50%`. Duplicating that
 * default is how one copy silently drifts and starts cropping faces.
 */
export function DoctorAvatar({
  doctor,
  className = "size-12",
}: {
  doctor: Doctor;
  className?: string;
}) {
  if (!doctor.image) {
    return (
      <span
        aria-hidden="true"
        className={`grid flex-none place-items-center rounded-full bg-[#31B4F4]/14 text-xs font-bold text-[#142F86]/55 ${className}`}
      >
        {monogram(doctor.name)}
      </span>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={photo(doctor.image)}
      alt=""
      loading="lazy"
      decoding="async"
      className={`flex-none rounded-full object-cover ${className}`}
      style={{ objectPosition: doctor.imagePosition ?? "50% 15%" }}
    />
  );
}

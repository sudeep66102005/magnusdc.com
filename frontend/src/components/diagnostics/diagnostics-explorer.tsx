import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { diagnostics } from "@/lib/data/diagnostics";

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const UPLOADS = "/assets/uploads/services";
/* Asset URL, so the base path is applied by hand here — unlike the hrefs below,
   which go through next/link and must not carry it. */
const img = (file: string) => encodeURI(`${BP}${UPLOADS}/${file}`);

/**
 * The nine diagnostic services.
 *
 * The category filter rail was removed by request. With it went the only reason
 * this needed to be a client component — no state, no interactivity, so it now
 * renders on the server. The `categories` field is left on the data because it
 * still describes each test accurately and costs nothing to keep.
 */
export function DiagnosticsExplorer() {
  return (
    <div className="mx-auto w-full px-4 sm:px-6 lg:px-10">
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {diagnostics.map((item) => (
          <Link
            key={item.slug}
            href={`/diagnostics/${item.slug}`}
            className="group relative flex items-stretch gap-5 overflow-hidden rounded-3xl bg-white p-4 shadow-[0_12px_34px_-20px_rgb(20_47_134/0.4)] ring-1 ring-[#142F86]/10 transition hover:shadow-[0_20px_46px_-22px_rgb(20_47_134/0.5)] hover:ring-[#31B4F4]/45 sm:p-5"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img(item.image)}
              alt={item.name}
              loading="lazy"
              decoding="async"
              className="h-36 w-32 flex-none rounded-2xl object-cover sm:h-44 sm:w-40 lg:h-48 lg:w-44"
            />
            <div className="flex min-w-0 flex-1 flex-col py-1 pr-12 sm:pr-14">
              <h3 className="text-lg font-bold leading-tight text-[#142F86] sm:text-xl lg:text-2xl">
                {item.name}
              </h3>
              <p className="mt-2 text-sm leading-snug text-[#142F86]/65 sm:mt-2.5 sm:text-base">
                {item.summary}
              </p>
              <span className="mt-auto pt-3 text-sm font-bold text-[#142F86] underline-offset-4 group-hover:underline sm:text-base">
                Learn more
              </span>
            </div>
            {/* Decorative: the whole card is the link, so this must not become a
                second focusable target. */}
            <span
              aria-hidden="true"
              className="absolute bottom-5 right-5 grid size-11 place-items-center rounded-full bg-[#31B4F4]/12 text-[#142F86] transition group-hover:bg-[#142F86] group-hover:text-white sm:size-12"
            >
              <ArrowRight className="size-5" />
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

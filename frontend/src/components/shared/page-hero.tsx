import Image from "next/image";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
  /** Optional hero image shown on the right side — only used on inner pages */
  image?: {
    src: string;
    alt: string;
  };
}

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  children,
  image,
}: PageHeroProps) {
  return (
    <section className={cn("brand-grid relative overflow-hidden border-b border-[#142F86]/18 bg-[#31B4F4]/8 py-20 lg:py-28", className)}>
      <div className="absolute -left-24 top-0 size-72 rounded-full bg-[#31B4F4]/10 blur-3xl" />

      {image ? (
        /* Two-column layout when an image is provided (inner pages only) */
        <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-10 px-5 sm:px-8 lg:flex-row lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            {eyebrow && (
              <p className="text-xs font-black uppercase tracking-[0.2em] text-[#DA1C29]">{eyebrow}</p>
            )}
            <h1 className="mt-4 text-4xl font-black leading-[1.03] tracking-[-0.045em] text-[#142F86] sm:text-5xl lg:text-6xl">{title}</h1>
            {description && (
              <p className="mt-6 max-w-2xl text-lg leading-8 text-[#142F86]/70">{description}</p>
            )}
            {children}
          </div>
          <div className="relative w-full max-w-sm flex-none lg:max-w-md">
            <div className="overflow-hidden rounded-3xl shadow-[0_32px_80px_-24px_rgba(20,47,134,0.25)]">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={440}
                className="h-[260px] w-full object-cover lg:h-[340px]"
                priority
              />
            </div>
          </div>
        </div>
      ) : (
        /* Original centred layout — unchanged (used by home page and pages without images) */
        <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
          {eyebrow && (
            <p className="text-xs font-black uppercase tracking-[0.2em] text-[#DA1C29]">{eyebrow}</p>
          )}
          <h1 className="mt-4 text-4xl font-black leading-[1.03] tracking-[-0.045em] text-[#142F86] sm:text-5xl lg:text-6xl">{title}</h1>
          {description && (
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#142F86]/70">{description}</p>
          )}
          {children}
        </div>
      )}
    </section>
  );
}

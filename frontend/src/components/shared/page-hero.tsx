import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export function PageHero({
  eyebrow,
  title,
  description,
  className,
  children,
}: PageHeroProps) {
  return (
    <section className={cn("brand-grid relative overflow-hidden border-b border-[#dce5f1] bg-[#f4f8ff] py-20 lg:py-28", className)}>
      <div className="absolute -left-24 top-0 size-72 rounded-full bg-[#31B4F4]/10 blur-3xl" />
      <div className="relative mx-auto max-w-5xl px-5 text-center sm:px-8">
        {eyebrow && (
          <p className="text-xs font-black uppercase tracking-[0.2em] text-[#DA1C29]">{eyebrow}</p>
        )}
        <h1 className="mt-4 text-4xl font-black leading-[1.03] tracking-[-0.045em] text-[#142F86] sm:text-5xl lg:text-6xl">{title}</h1>
        {description && (
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#607089]">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}

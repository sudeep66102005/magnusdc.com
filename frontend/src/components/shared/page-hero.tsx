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
    <section
      className={cn(
        "bg-gradient-to-b from-primary/5 to-white py-16 lg:py-20",
        className
      )}
    >
      <div className="mx-auto max-w-4xl px-4 text-center lg:px-8">
        {eyebrow && (
          <p className="text-sm font-semibold uppercase tracking-wide text-primary">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 text-lg text-slate-600">{description}</p>
        )}
        {children}
      </div>
    </section>
  );
}

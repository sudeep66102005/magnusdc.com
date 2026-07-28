import { cn } from "@/lib/utils";

interface SectionProps {
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ title, description, className, children }: SectionProps) {
  return (
    <section className={cn("py-16 lg:py-24", className)}>
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        {(title || description) && (
          <div className="mb-10 max-w-3xl">
            {title && (
              <h2 className="text-3xl font-black leading-tight tracking-[-0.035em] text-[#142F86] sm:text-4xl">{title}</h2>
            )}
            {description && (
              <p className="mt-4 text-lg leading-8 text-[#607089]">{description}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

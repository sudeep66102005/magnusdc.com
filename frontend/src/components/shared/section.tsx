import { cn } from "@/lib/utils";

interface SectionProps {
  title?: string;
  description?: string;
  className?: string;
  children: React.ReactNode;
}

export function Section({ title, description, className, children }: SectionProps) {
  return (
    <section className={cn("mx-auto max-w-7xl px-4 py-12 lg:px-8", className)}>
      {(title || description) && (
        <div className="mb-8 max-w-2xl">
          {title && (
            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              {title}
            </h2>
          )}
          {description && (
            <p className="mt-2 text-slate-600">{description}</p>
          )}
        </div>
      )}
      {children}
    </section>
  );
}

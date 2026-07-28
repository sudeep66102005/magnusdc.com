import Link from "next/link";
import { ArrowUpRight, type LucideIcon } from "lucide-react";

interface LinkCardProps {
  href: string;
  title: string;
  description?: string;
  icon?: LucideIcon;
}

export function LinkCard({ href, title, description, icon: Icon }: LinkCardProps) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-[1.5rem] border border-[#dce5f1] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#31B4F4]/55 hover:shadow-[0_22px_55px_-34px_rgba(20,47,134,0.6)]"
    >
      <div className="flex items-start justify-between gap-4">
        {Icon && (
          <span className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#EAF7FE] text-[#142F86] transition group-hover:bg-[#142F86] group-hover:text-white">
            <Icon className="size-5" />
          </span>
        )}
        <ArrowUpRight className="size-5 text-[#9aabc2] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#142F86]" />
      </div>
      <h3 className="mt-6 text-xl font-black leading-snug tracking-[-0.02em] text-[#172950]">{title}</h3>
      {description && (
        <p className="mt-3 flex-1 text-sm leading-6 text-[#65738a]">{description}</p>
      )}
      <span className="mt-6 text-sm font-black text-[#142F86]">Learn more</span>
    </Link>
  );
}

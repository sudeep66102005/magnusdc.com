import Link from "next/link";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { HealthPackageContent } from "@/lib/data/health-packages";
import { packageCategoryDetails } from "@/lib/data/health-packages";

export function PackageCard({ pkg }: { pkg: HealthPackageContent }) {
  return (
    <article className="flex h-full flex-col rounded-[1.75rem] border border-[#dce5f1] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#31B4F4]/55 hover:shadow-[0_24px_60px_-36px_rgba(20,47,134,0.65)]">
      <p className="text-xs font-black uppercase tracking-[0.17em] text-[#DA1C29]">{packageCategoryDetails[pkg.category].label}</p>
      <h2 className="mt-3 text-2xl font-black leading-tight tracking-[-0.025em] text-[#142F86]">{pkg.name}</h2>
      <p className="mt-3 text-sm leading-6 text-[#65738a]">{pkg.summary}</p>
      <ul className="mt-6 space-y-2.5">
        {pkg.testsIncluded.slice(0, 6).map((test) => (
          <li key={test} className="flex items-start gap-2.5 text-sm leading-5 text-[#4d5d76]">
            <Check className="mt-0.5 size-4 shrink-0 text-[#31B4F4]" strokeWidth={3} />
            {test}
          </li>
        ))}
      </ul>
      {pkg.testsIncluded.length > 6 && (
        <p className="mt-3 text-xs font-bold text-[#142F86]">+ {pkg.testsIncluded.length - 6} more inclusions</p>
      )}
      <div className="mt-auto flex items-end justify-between gap-4 border-t border-[#e4eaf2] pt-6">
        <div>
          {pkg.mrp && <p className="text-xs font-bold text-[#8a95a8] line-through">MRP ₹{pkg.mrp.toLocaleString("en-IN")}</p>}
          <p className="mt-1 text-2xl font-black tracking-tight text-[#142F86]">₹{pkg.price.toLocaleString("en-IN")}</p>
        </div>
        <Button
          size="sm"
          className="rounded-full bg-[#142F86] px-5"
          render={<Link href="/patient-info/appointment-booking" />}
        >
          Book now
        </Button>
      </div>
    </article>
  );
}

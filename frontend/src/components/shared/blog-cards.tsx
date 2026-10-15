import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { BlogArticle } from "@/lib/data/blog";

export function BlogCards({ articles }: { articles: BlogArticle[] }) {
  return (
    <div className="grid gap-5 md:grid-cols-2">
      {articles.map((article) => (
        <Link key={article.slug} href={`/blog/${article.slug}`} className="group flex flex-col rounded-3xl border border-[#142F86]/15 bg-white p-6 transition hover:border-[#31B4F4] hover:shadow-lg sm:p-8">
          <span className="text-xs font-bold uppercase tracking-widest text-[#DA1C29]">{article.category} · Patient guide</span>
          <h3 className="mt-4 text-xl font-bold leading-snug text-[#142F86]">{article.title}</h3>
          <p className="mb-6 mt-3 text-sm leading-7 text-[#142F86]/75">{article.description}</p>
          <span className="mt-auto inline-flex items-center gap-2 text-sm font-bold text-[#142F86]">Read article <ArrowRight className="size-4 transition group-hover:translate-x-1" aria-hidden="true" /></span>
        </Link>
      ))}
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleText } from "@/components/shared/article-text";
import { BlogCards } from "@/components/shared/blog-cards";
import { blogArticles, getBlogArticle } from "@/lib/data/blog";
import { siteConfig } from "@/lib/constants/site-config";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() {
  return blogArticles.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) return {};
  const url = `${siteConfig.url}/blog/${slug}`;
  return {
    title: article.title,
    description: article.description,
    alternates: { canonical: url },
    openGraph: { type: "article", title: article.title, description: article.description, url, publishedTime: article.published, siteName: siteConfig.name },
    twitter: { card: "summary", title: article.title, description: article.description },
  };
}
export default async function BlogArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) notFound();
  const url = `${siteConfig.url}/blog/${slug}`;
  const related = blogArticles.filter((other) => other.category === article.category && other.slug !== slug);
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Article", headline: article.title, description: article.description, datePublished: article.published, mainEntityOfPage: url, url, author: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url }, publisher: { "@id": `${siteConfig.url}/#organization` }, citation: article.references.map((reference) => reference.url), articleSection: article.category, inLanguage: "en-IN" },
      { "@type": "BreadcrumbList", itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: siteConfig.url },
        { "@type": "ListItem", position: 2, name: "Patient guides", item: `${siteConfig.url}/blog` },
        { "@type": "ListItem", position: 3, name: article.title, item: url },
      ] },
    ],
  };
  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }} />
    <article className="mx-auto w-full max-w-4xl px-5 py-12 text-[#142F86] sm:px-8 lg:py-16">
      <nav aria-label="Breadcrumb" className="mb-8 flex flex-wrap gap-2 text-sm">
        <Link href="/" className="underline underline-offset-4">Home</Link><span aria-hidden="true">/</span><Link href="/blog" className="underline underline-offset-4">Patient guides</Link><span aria-hidden="true">/</span><span aria-current="page">{article.category}</span>
      </nav>
      <header className="border-b border-[#142F86]/15 pb-8">
        <p className="text-xs font-bold uppercase tracking-widest text-[#DA1C29]">{article.category} · Patient guide</p>
        <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight sm:text-5xl">{article.title}</h1>
        <p className="mt-5 text-sm leading-6 text-[#142F86]/70">By {siteConfig.name} · Published <time dateTime={article.published}>15 October 2026</time></p>
      </header>
      <p className="mt-8 text-lg leading-8 text-[#142F86]/85"><ArticleText text={article.introduction} /></p>
      {article.sections.map((section) => <section key={section.heading} className="mt-10">
        <h2 className="text-2xl font-bold leading-snug">{section.heading}</h2>
        {section.paragraphs.map((paragraph, index) => <p key={index} className="mt-4 text-base leading-8 text-[#142F86]/85"><ArticleText text={paragraph} /></p>)}
      </section>)}
      <section className="mt-10 rounded-2xl bg-[#31B4F4]/8 p-6">
        <h2 className="text-xl font-bold">References and further reading</h2>
        <ul className="mt-4 space-y-3">{article.references.map((reference) => <li key={reference.url}><a href={reference.url} className="break-words font-semibold underline underline-offset-4">{reference.title}</a></li>)}</ul>
        <p className="mt-4 text-sm leading-7 text-[#142F86]/75">General patient information. Your clinician and imaging team will advise you about your individual examination.</p>
      </section>
      <div className="mt-8 flex flex-wrap gap-4">
        <Link href={`/diagnostics/${article.serviceSlug}`} className="rounded-full bg-[#142F86] px-6 py-3 font-semibold text-white">Explore {article.category} services</Link>
        <Link href="/patient-info/appointment-booking" className="rounded-full border border-[#142F86]/25 px-6 py-3 font-semibold">Enquire about an appointment</Link>
      </div>
      <section className="mt-12"><h2 className="mb-5 text-2xl font-bold">More {article.category} guidance</h2><BlogCards articles={related} /></section>
    </article>
  </>;
}

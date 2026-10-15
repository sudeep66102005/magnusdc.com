import Link from "next/link";

/** Render the small, trusted subset of Markdown used by our article data.
 * React escapes text; internal links use Next routing so previews retain basePath. */
export function ArticleText({ text }: { text: string }) {
  const tokens = text.split(/(\[[^\]]+\]\([^)]+\))/g);
  return tokens.map((token, index) => {
    const link = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(token);
    if (!link) return <span key={index}>{token}</span>;
    const [, label, href] = link;
    const className = "font-semibold text-[#142F86] underline decoration-[#31B4F4] underline-offset-4 hover:decoration-[#142F86]";
    if (href.startsWith("/") && !href.startsWith("//")) {
      return <Link key={index} href={href} className={className}>{label}</Link>;
    }
    if (href.startsWith("https://")) {
      return <a key={index} href={href} className={className}>{label}</a>;
    }
    return <span key={index}>{label}</span>;
  });
}

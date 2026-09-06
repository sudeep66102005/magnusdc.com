"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { mainNav } from "@/lib/constants/navigation";

const BP = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const asset = (p: string) => `${BP}${p}`;

const HEADER_NAV = mainNav.map((item) => {
  const src = item.children?.length ? [...item.children] : [{ label: item.label, href: item.href }];
  const children = src.some((c) => c.href === item.href)
    ? src
    : [{ label: `${item.label} Overview`, href: item.href }, ...src];
  if (item.label === "Doctors" || item.label === "Diagnostics") {
    children.push({ label: "Book Appointment", href: "/patient-info/appointment-booking" });
  }
  if (item.label === "Laboratory") {
    children.push({ label: "Book Test", href: "/patient-info/appointment-booking" });
  }
  return { ...item, children };
});

function Arrow() {
  return (
    <svg className="cm-arrow" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M4 12L12 4M12 4H5M12 4V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const headerCss = String.raw`/* header */
.cm-header{position:fixed;inset-inline:0;top:1rem;z-index:60;padding-inline:1rem;pointer-events:none}
@media(min-width:768px){.cm-header{padding-inline:2.5rem}}
/* Left only, matching .cm-hero__inner's 5rem so the logo lines up with the copy
   below it. The right stays at 2.5rem — raising it would pull Contact Us left,
   which is the opposite of shifting the page right. */
@media(min-width:1024px){.cm-header{padding-left:5rem}}
.cm-header__row{display:flex;align-items:center;justify-content:space-between;gap:.75rem}
.cm-header__left{display:flex;min-width:0;align-items:center;gap:.75rem}
.cm-glass{pointer-events:auto;border-radius:12px;background:var(--glass);-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px)}
.cm-logo{display:flex;align-items:center;justify-content:flex-start;width:clamp(14rem,22vw,20rem);height:6.5rem;padding:.3rem 1.25rem}
.cm-logo__image{display:block;width:auto;height:6rem;max-width:100%;object-fit:contain;object-position:left center}
.cm-nav{display:none;align-items:stretch;height:6.5rem;padding:0 .5rem;overflow:visible}
.cm-nav>ul{display:flex;align-items:stretch;gap:0;margin:0;padding:0;list-style:none}
.cm-nav__item{position:relative;display:flex;align-items:stretch}
.cm-nav__item--has-children::after{content:"";position:absolute;top:100%;right:0;left:0;height:.5rem}
.cm-nav__link{display:flex;align-items:center;gap:.4rem;height:100%;padding:0 .65rem;border-radius:8px;color:#142F86;font-size:1rem;font-weight:700;white-space:nowrap;transition:background .15s,color .15s}
.cm-nav__link:hover,.cm-nav__item:focus-within>.cm-nav__link{background:rgb(49 180 244 / .12);color:#142F86}
.cm-nav__link:focus-visible,.cm-nav__dropdown a:focus-visible{outline:2px solid #31B4F4;outline-offset:-2px}
.cm-nav__chevron{width:1rem;height:1rem;flex:none;transition:transform .15s}
.cm-nav__item:hover .cm-nav__chevron,.cm-nav__item:focus-within .cm-nav__chevron{transform:rotate(180deg)}
.cm-nav__dropdown{position:absolute;top:calc(100% + .55rem);left:0;z-index:100;width:24rem;max-width:calc(100vw - 5rem);max-height:min(65vh,36rem);overflow-y:auto;border:1px solid var(--line);border-top:4px solid #31B4F4;border-radius:0 0 14px 14px;background:#FFFFFF;box-shadow:0 22px 55px rgb(20 47 134 / .2);opacity:0;visibility:hidden;pointer-events:none;transform:translateY(.55rem);transition:opacity .15s,transform .15s,visibility .15s}
.cm-nav__item:nth-last-child(-n+3) .cm-nav__dropdown{right:0;left:auto}
.cm-nav__item:hover .cm-nav__dropdown,.cm-nav__item:focus-within .cm-nav__dropdown{opacity:1;visibility:visible;pointer-events:auto;transform:none}
.cm-nav__item[data-escape-closed="true"] .cm-nav__dropdown{opacity:0;visibility:hidden;pointer-events:none;transform:translateY(.4rem)}
.cm-nav__item[data-escape-closed="true"] .cm-nav__chevron{transform:none}
.cm-nav__dropdown ul{display:block;margin:0;padding:.45rem 0;list-style:none}
.cm-nav__dropdown a{display:flex;align-items:center;justify-content:space-between;gap:1.25rem;min-height:3.5rem;padding:.85rem 1.25rem;border-bottom:1px solid rgb(20 47 134 / .08);color:#142F86;font-size:1rem;font-weight:700;line-height:1.35;transition:background .15s,color .15s}
.cm-nav__dropdown li:last-child a{border-bottom:0}
.cm-nav__dropdown a:hover,.cm-nav__dropdown a:focus-visible{background:rgb(49 180 244 / .1);color:#DA1C29}
.cm-nav__dropdown-arrow{color:#31B4F4;font-size:1.25rem}
.cm-nav__item--contact{align-items:center;margin-left:.5rem;padding:.5rem 0}
.cm-nav__contact{display:flex;align-items:center;gap:.75rem;height:100%;padding:0 .35rem 0 1.25rem;border-radius:999px;background:linear-gradient(135deg,#142F86,#142F86);background-size:180% 180%;background-position:0% 50%;color:#FFFFFF!important;font-size:1rem;font-weight:700;white-space:nowrap;transition:background-position .5s ease,transform .15s}
.cm-nav__contact:hover,.cm-nav__contact:focus-visible{background-image:linear-gradient(135deg,#142F86,#31B4F4,#142F86);background-position:100% 50%;transform:translateY(-1px)}
.cm-nav__contact:focus-visible{outline:2px solid #31B4F4;outline-offset:2px}
.cm-nav__contact .cm-disc{width:2.75rem;height:2.75rem;background:var(--lime);color:#142F86}
.cm-nav__contact .cm-arrow{width:1rem;height:1rem}
.cm-burger{pointer-events:auto;display:grid;place-items:center;width:6.5rem;height:6.5rem}
.cm-burger span{display:block;width:2rem;height:2px;background:#142F86;transition:transform .25s,opacity .15s}
.cm-burger span+span{margin-top:.5rem}
.cm-burger[aria-expanded="true"] span:nth-child(1){transform:translateY(.625rem) rotate(45deg)}
.cm-burger[aria-expanded="true"] span:nth-child(2){opacity:0}
.cm-burger[aria-expanded="true"] span:nth-child(3){transform:translateY(-.625rem) rotate(-45deg)}
.cm-mobile{position:absolute;top:7.25rem;right:1rem;width:min(30rem,calc(100vw - 2rem));max-height:calc(100vh - 8.5rem);overflow-y:auto;display:flex;flex-direction:column;gap:1rem;padding:1.25rem 1.5rem;transform-origin:top right;transform:scale(.94);opacity:0;visibility:hidden;transition:opacity .2s,transform .2s,visibility .2s}
.cm-mobile[data-open="true"]{opacity:1;transform:scale(1);visibility:visible}
.cm-mobile__list,.cm-mobile__children{list-style:none;margin:0;padding:0}
.cm-mobile__item{border-bottom:1px solid rgb(20 47 134 / .1)}
.cm-mobile__item summary{display:flex;cursor:pointer;align-items:center;justify-content:space-between;gap:1rem;min-height:4.25rem;color:#142F86;font-size:1.25rem;font-weight:700;list-style:none}
.cm-mobile__item summary::-webkit-details-marker{display:none}
.cm-mobile__item details[open] summary .cm-nav__chevron{transform:rotate(180deg)}
.cm-mobile__children{margin:0 0 .6rem;padding-left:.75rem;border-left:2px solid rgb(49 180 244 / .35)}
.cm-mobile__children a{display:flex;align-items:center;justify-content:space-between;gap:1rem;padding:.8rem .65rem;color:rgb(20 47 134 / .78);font-size:1.05rem;font-weight:700;line-height:1.35}
.cm-mobile__children a:hover{color:#DA1C29}
.cm-mobile .cm-btn{width:100%;height:4.5rem;justify-content:space-between;font-size:1.35rem}
.cm-mobile .cm-disc{width:4rem;height:4rem}
.cm-mobile__item--contact{border-bottom:0}
.cm-mobile .cm-nav__contact{width:100%;height:4.5rem;justify-content:space-between;padding:0 .35rem 0 1.5rem;font-size:1.25rem}
.cm-mobile .cm-nav__contact .cm-disc{width:3.5rem;height:3.5rem}
@media(min-width:1280px){.cm-nav{display:flex}.cm-burger{display:none}.cm-mobile{display:none}.cm-logo{width:14rem}.cm-nav__link{padding-inline:.5rem;font-size:.9rem}}
@media(min-width:1536px){.cm-logo{width:15rem}.cm-nav{padding-inline:.55rem}.cm-nav__link{padding-inline:.55rem;font-size:1rem}}
@media(min-width:1920px){.cm-logo{width:20rem}.cm-nav{padding-inline:.5rem}.cm-nav__link{padding-inline:.5rem;font-size:1.4rem}.cm-nav__contact{font-size:1.25rem;padding:0 .5rem 0 1.75rem}.cm-nav__contact .cm-disc{width:3.5rem;height:3.5rem}.cm-nav__contact .cm-arrow{width:1.25rem;height:1.25rem}}
@media(max-width:1023px){
  .cm-logo{width:clamp(10.5rem,42vw,13rem);height:4.25rem;padding:.25rem .85rem}
  .cm-logo__image{height:3.6rem}
  /* A white disc, per the hero design, rather than a square glass plate. */
  .cm-burger{width:3.5rem;height:3.5rem;border-radius:999px;background:#FFFFFF;box-shadow:0 8px 22px -12px rgb(20 47 134 / .45)}
  .cm-burger span{width:1.5rem}
  .cm-burger span+span{margin-top:.375rem}
  .cm-burger[aria-expanded="true"] span:nth-child(1){transform:translateY(.4375rem) rotate(45deg)}
  .cm-burger[aria-expanded="true"] span:nth-child(3){transform:translateY(-.4375rem) rotate(-45deg)}
  .cm-mobile{top:5.1rem;max-height:calc(100vh - 6.4rem)}
}
@media(max-width:359px){.cm-logo{width:9.5rem;height:3.8rem;padding-inline:.7rem}.cm-logo__image{height:3.2rem}.cm-burger{width:3.8rem;height:3.8rem}.cm-mobile{top:4.6rem;max-height:calc(100vh - 5.9rem)}}
@media(prefers-reduced-motion:reduce){.cm-nav__dropdown,.cm-nav__chevron,.cm-mobile{transition:none}}
.cm-header,.cm-header *{box-sizing:border-box}
.cm-header a{text-decoration:none}
body:not(:has(.cm-root)){padding-top:5.75rem}
@media(min-width:1024px){body:not(:has(.cm-root)){padding-top:8rem}}
body:has(.cm-root) > header.sticky,body > header.sticky{display:none!important}
`;

export function SiteHeader() {
  useEffect(() => {
    const burger = document.querySelector<HTMLButtonElement>(".cm-burger");
    const menu = document.querySelector<HTMLElement>(".cm-mobile");
    if (!burger || !menu) return;
    const toggle = (v?: boolean) => {
      const open = v !== undefined ? v : menu.dataset.open !== "true";
      menu.dataset.open = open ? "true" : "false";
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Close menu" : "Open menu");
      if (!open) menu.querySelectorAll("details[open]").forEach((d) => d.removeAttribute("open"));
    };
    const onBurger = () => toggle();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && menu.dataset.open === "true") { toggle(false); burger.focus(); }
    };
    const links = Array.from(menu.querySelectorAll("a"));
    const close = () => toggle(false);
    burger.addEventListener("click", onBurger);
    document.addEventListener("keydown", onKey);
    links.forEach((a) => a.addEventListener("click", close));
    return () => {
      burger.removeEventListener("click", onBurger);
      document.removeEventListener("keydown", onKey);
      links.forEach((a) => a.removeEventListener("click", close));
    };
  }, []);

  return (
    <>
      <style>{headerCss}</style>
  <header className="cm-header">
    <div className="cm-header__row">
      <div className="cm-header__left">
        <a href="#hero" className="cm-glass cm-logo" aria-label="Clarus Magnus Health and Diagnostics home">
          <Image
            src={asset("/assets/logo/clarus-magnus-logo.png")}
            alt="Clarus Magnus Health and Diagnostics"
            width={1126}
            height={459}
            priority
            className="cm-logo__image"
          />
        </a>
        <nav aria-label="Primary navigation" className="cm-glass cm-nav">
          <ul>
            {HEADER_NAV.map((item) => (
              item.label === "Contact Us" ? (
                <li className="cm-nav__item cm-nav__item--contact" key={item.href}>
                  <Link href={item.href} className="cm-nav__contact">
                    <span>Contact Us</span>
                    <span className="cm-disc"><Arrow /></span>
                  </Link>
                </li>
              ) : (
                <li className="cm-nav__item cm-nav__item--has-children" key={item.href}>
                  <Link href={item.href} className="cm-nav__link">
                    <span>{item.label}</span>
                    <svg className="cm-nav__chevron" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                  <div className="cm-nav__dropdown">
                    <ul>
                      {item.children.map((child) => (
                        <li key={`${item.label}-${child.href}-${child.label}`}>
                          <Link href={child.href}>
                            <span>{child.label}</span>
                            <span className="cm-nav__dropdown-arrow" aria-hidden="true">›</span>
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              )
            ))}
          </ul>
        </nav>
      </div>
      <button type="button" className="cm-glass cm-burger" aria-expanded="false" aria-controls="cm-mobile-menu" aria-label="Open menu">
        <span /><span /><span />
      </button>
      <nav id="cm-mobile-menu" aria-label="Mobile navigation" className="cm-glass cm-mobile" data-open="false">
        <ul className="cm-mobile__list">
          {HEADER_NAV.map((item) => (
            item.label === "Contact Us" ? (
              <li className="cm-mobile__item cm-mobile__item--contact" key={item.href}>
                <Link href={item.href} className="cm-nav__contact">
                  <span>Contact Us</span>
                  <span className="cm-disc"><Arrow /></span>
                </Link>
              </li>
            ) : (
              <li className="cm-mobile__item" key={item.href}>
                <details>
                  <summary>
                    <span>{item.label}</span>
                    <svg className="cm-nav__chevron" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                      <path d="M2.5 4.5 6 8l3.5-3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </summary>
                  <ul className="cm-mobile__children">
                    {item.children.map((child) => (
                      <li key={`${item.label}-${child.href}-${child.label}`}>
                        <Link href={child.href}>
                          <span>{child.label}</span>
                          <span className="cm-nav__dropdown-arrow" aria-hidden="true">›</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </details>
              </li>
            )
          ))}
        </ul>
      </nav>
    </div>
  </header>
    </>
  );
}

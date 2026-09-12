#!/usr/bin/env python3
"""Fail the build if any internal link points at a route that does not exist.

Written after two link bugs reached production: a doubled base path on the
homepage's "View All Specialists", and the /services page being deleted while
four things still linked to it. Both were the same shape of mistake — a link
and a route drifting apart — and neither was caught by anything.

Routes are derived the same way the pages themselves are: static routes from the
app directory, dynamic ones from the data files that feed generateStaticParams.
So adding a diagnostic, doctor or specialty needs no change here.

Deliberately conservative. A link that cannot be resolved statically — a
template literal built at runtime — is skipped rather than guessed at, because a
false failure that blocks a deploy is worse than a missed link.
"""

import pathlib
import re
import sys

SRC = pathlib.Path(__file__).resolve().parent.parent / "src"


def slugify(value: str) -> str:
    """Mirrors slugify() in lib/constants/navigation.ts."""
    value = value.lower().replace("&", "and").replace("/", "-")
    value = re.sub(r"[^a-z0-9]+", "-", value)
    return re.sub(r"(^-|-$)", "", value)


def read(rel: str) -> str:
    return (SRC / rel).read_text()


def existing_routes() -> set[str]:
    routes = set()
    for page in (SRC / "app").rglob("page.tsx"):
        rel = page.parent.relative_to(SRC / "app").as_posix()
        route = "/" if rel == "." else "/" + rel
        if "[" not in route:
            routes.add(route)

    routes |= {f"/diagnostics/{s}" for s in re.findall(r'slug: "([^"]+)"', read("lib/data/diagnostics.ts"))}
    routes |= {f"/laboratory/{s}" for s in re.findall(r'slug: "([^"]+)"', read("lib/data/laboratory.ts"))}

    nav = read("lib/constants/navigation.ts")
    spec_block = nav[nav.index("export const specialties"):nav.index("] as const")]
    routes |= {f"/specialties/{slugify(s)}" for s in re.findall(r'^  "([^"]+)"', spec_block, re.M)}

    doctors = read("lib/data/doctors.ts")
    routes |= {f"/doctors/{slugify(n)}" for n in re.findall(r'name: "(Dr\.[^"]+)"', doctors)}

    # The category routes come from the keys of packageCategoryDetails, which is
    # what generateStaticParams iterates. The categories are positional
    # arguments to packageItem(), never a `category: "..."` property, so do not
    # try to match that key — it finds nothing.
    hp = read("lib/data/health-packages.ts")
    details = hp[hp.index("packageCategoryDetails"):]
    routes |= {f"/health-packages/{c}" for c in re.findall(r'^  "?([a-z-]+)"?: \{', details, re.M)}

    return routes


def collected_links() -> dict[str, set[str]]:
    links: dict[str, set[str]] = {}
    patterns = (
        r'href=(?:"([^"]+)"|\{`([^`]+)`\})',
        r'href: "([^"]+)"',
        r'moreHref="([^"]+)"',
    )
    for path in list(SRC.rglob("*.tsx")) + list(SRC.rglob("*.ts")):
        text = path.read_text()
        for pattern in patterns:
            for match in re.finditer(pattern, text):
                raw = next(g for g in match.groups() if g)
                links.setdefault(raw, set()).add(path.relative_to(SRC).as_posix())
    return links


def is_internal_route(href: str) -> bool:
    if not href.startswith("/") or href.startswith("/assets"):
        return False
    return not re.search(r"\.(xml|pdf|png|jpe?g|svg|webp|ico|txt|json)$", href)


def main() -> int:
    routes = existing_routes()
    broken = []
    checked = 0

    for href, where in sorted(collected_links().items()):
        if not is_internal_route(href):
            continue
        path = href.split("#")[0].split("?")[0].rstrip("/") or "/"
        if "{" in path or "$" in path:
            continue  # built at runtime; resolved from the data above
        checked += 1
        if path not in routes:
            broken.append((href, sorted(where)))

    print(f"routes that exist      : {len(routes)}")
    print(f"internal links checked : {checked}")
    print(f"broken                 : {len(broken)}")

    if broken:
        print()
        for href, where in broken:
            print(f"  {href}")
            for w in where:
                print(f"      <- src/{w}")
        return 1
    return 0


if __name__ == "__main__":
    sys.exit(main())

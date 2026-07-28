# Assets

Static assets for the site (logo, images, etc.). Anything placed here is served
directly from the site root by Next.js — no import needed.

## Structure

- `logo/` — site/brand logo files (e.g. `logo.svg`, `logo.png`, favicon variants)
- `images/` — general images used across pages (hero images, photos, icons, etc.)

## How to reference these files in code

Files in `public/` are served from `/`, so `public/assets/logo/logo.png` is
available at the URL path `/assets/logo/logo.png` (or
`/magnusdc.com/assets/logo/logo.png` when served under the GitHub Pages
base path — the app's `NEXT_PUBLIC_BASE_PATH` is applied automatically).

Example with Next.js `<Image>`:

```tsx
import Image from "next/image";

<Image src="/assets/logo/logo.png" alt="Clarus Magnus logo" width={160} height={40} />
```

## Uploading files

Just add your logo/image files into `logo/` or `images/` (subfolders are fine
too, e.g. `images/specialties/`). Keep filenames lowercase with hyphens
(e.g. `hero-banner.jpg`) for consistency. Delete the `.gitkeep` placeholder
files once real assets exist in a folder — they only exist so Git tracks the
otherwise-empty directories.

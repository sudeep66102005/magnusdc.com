import type { NextConfig } from "next";

// When building in GitHub Actions for GitHub Pages, the site is served from
// https://<user>.github.io/<repo>/ instead of the domain root, so we need a
// basePath/assetPrefix matching the repo name. Set via env var from the
// workflow so local `next dev`/`next build` are unaffected.
const repoBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath: repoBasePath,
  assetPrefix: repoBasePath ? `${repoBasePath}/` : undefined,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;

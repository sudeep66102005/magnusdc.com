# Frontend security controls

Vercel headers deny framing and plugins, prevent MIME sniffing, restrict referrers/browser permissions and limit resource destinations. CSP permits inline scripts/styles because this static Next export includes hydration and existing inline homepage code. This is a compatibility baseline, not a strict nonce/hash CSP or proof against XSS. A future strict CSP rollout should first externalize remaining inline code and test per-build script hashes. Custom form/API endpoints must also be explicitly added to connect-src when configured; do not widen it to arbitrary HTTPS origins.

The animation module is copied from the locked three package into same-origin build assets by prebuild/predev; no executable CDN import is required. The original shadcn CSS and MIT notice are retained locally without shipping its vulnerable CLI dependency tree. React/hooks/TypeScript ESLint rules remain active using direct plugins; Next build handles framework/type validation.

Public form destination database controls are separate from this static deployment. Client validation is only usability protection. Supabase grants/RLS, server validation, rate limits and downstream staff access require administrator verification. GitHub Pages does not apply vercel.json response headers: use the primary Vercel site for production; the GitHub Pages output remains a preview.

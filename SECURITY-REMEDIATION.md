# Security remediation — 16 October 2026

This change addresses the 12 findings from the 15 October audit. It changes source and the frontend deployment configuration; it does not claim to have changed or certified Supabase account settings or a separate backend deployment.

| Finding | Change | Verification and status |
|---|---|---|
| F01 Unauthorized appointment reads | JWT + explicit staff guard on list/detail; bounded pagination | Synthetic anonymous reads return 401; staff reads work; patient role denied; pagination validated. Fixed in backend source. |
| F02 Demo administrator | Removed demo store; optional configured account with salted scrypt hash; no configuration means no administrator | Unknown/demo account denied; configured hash login passes; login throttled. Fixed in source. Staff MFA/access gateway still requires operator configuration. |
| F03 JWT fallback | Startup rejects absent/invalid secret; async centralized config; HS256, issuer/audience and 15-minute expiry | Invalid configuration rejected; wrong signature/issuer/audience, expiry and unknown user denied. Fixed in source. Existing deployed keys/sessions were not rotated. |
| F04 Dependency alerts | Updated runtime/tooling; removed shadcn CLI, vulnerable Next ESLint dependency chain and obsolete Jest chain; preserved CSS under its license; use direct ESLint plugins and native Node tests | Both complete npm audits report zero known vulnerabilities, including development dependencies. Builds/lint/tests pass. No forced downgrade or advisory exclusion. |
| F05 Missing browser headers | Vercel CSP, frame denial, nosniff, referrer and permissions headers; Helmet/no-store for API | Configuration tests pass. CSP intentionally permits existing inline Next/homepage scripts/styles; this is a restrictive-origin baseline, not a strict hash/nonce CSP. GitHub Pages cannot apply these Vercel headers. |
| F06 Abuse / unbounded accumulation | 30 requests/minute per route/IP, 5 logins/minute, 16 KiB bodies, field maxima, durable total-record cap of 10,000 | Local throttling, forwarded-header spoof resistance, body limit and capacity rejection tests pass. Live Supabase/edge abuse rules remain unverified. |
| F07 Input rules | Supported-department allowlist, real calendar date/time checks, phone digit counts and string maxima; preserve callback forms with optional scheduling fields | Invalid/oversized/extra fields rejected; normal callback requests accepted. Database-side checks at Supabase remain unverified. |
| F08 Volatile records | Transactional SQLite in private DATA_DIR; production startup requires storage path and CORS; bounded staff pagination | Private file mode and restart persistence verified. Backend deployment requires a private encrypted persistent volume, single instance, monitoring, backups/restore and approved retention. No live data was migrated. |
| F09 Queue access | Staff authentication during connection, bounded payloads, known department rooms, one room/client, join-rate limit and token-expiry disconnect | Network WebSocket tests reject anonymous clients/unknown departments and allow staff subscription. Fixed in source; hosting integration remains to be tested. |
| F10 Complete URL collection | Send only pathname in lead metadata | Dummy query token and fragment excluded in regression test. Fixed in frontend source. |
| F11 Executable CDN module | Locked three.js copied into same-origin build assets | Build and source regression test pass; CDN import removed. Fixed in frontend source. |
| F12 Security checks / CI | Native Node security tests; frontend tests; both audits/lints/build; SHA-pinned actions and job-scoped publishing rights | 23 backend subtests (24 Node test entries including parent), 4 frontend tests; backend lint clean, frontend lint passes with 6 existing warnings. Branch protection/required checks need administrator access. |

## Validation

- Frontend production build and TypeScript: passed.
- Backend production build: passed.
- Backend tests: 24 passed, 0 failed (23 subtests plus parent suite).
- Frontend security tests: 4 passed, 0 failed.
- Both dependency audits: 0 known vulnerabilities at verification time.
- Backend lint: passed without warnings. Frontend lint: no errors, 6 warnings (unused values and hook/compiler warnings).
- Internal-link checker: 102 routes, 43 internal links, 0 broken.
- Git diff whitespace checks: passed.
- Only synthetic local data and generated test credentials used. No live patient data read/written.

## Remaining access-dependent work

1. **Supabase:** inspect live grants, RLS policies, schema constraints, RPCs/views, rate/bot controls, staff access, retention and backups using administrator access. A public anon key and a 401 read probe do not prove full data security. No Supabase admin connector is available in this session, so these controls are not claimed fixed.
2. **Separate backend hosting:** locate any existing deployment; supply new credentials and a persistent private volume, confirm proxy behavior, staff MFA gateway and backups in staging. This PR does not deploy that service. Do not deploy it with blank secrets or ephemeral storage.
3. **GitHub/Vercel governance:** administrator must enable required checks/reviews, verify environment permissions/MFA, preview protections, logs and alerts. Branch-protection read previously returned 403.
4. **Strict CSP and alternate hosts:** inline-compatible CSP is documented in frontend/SECURITY.md. A future strict CSP needs a tested static hash/externalization design. GitHub Pages is a preview; its platform does not support the Vercel response-header configuration.

See backend/SECURITY-DEPLOYMENT.md for staging, storage, secrets and rollback details. No blanket “all vulnerabilities eliminated” or compliance claim is made.

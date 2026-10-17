# Secure backend operation

The website currently uses a separate Supabase lead destination. This Nest API is not automatically deployed by the frontend workflow. These fixes do not migrate live lead data or change Supabase policies.

## Required configuration

Use Node 24.19 or later in the 24.x line. Set JWT_SECRET to 32 or more cryptographically random bytes encoded as hex; absent, short and placeholder values fail startup. Generate it locally using the command in .env.example and keep it in the hosting secret store, never Git. Tokens use HS256, fixed issuer/audience and a 15-minute expiry. Rotating JWT_SECRET invalidates existing tokens.

Set ADMIN_EMAIL and ADMIN_PASSWORD_HASH together to enable the single staff administrator. Otherwise login is disabled. Create a unique 12–128 character password in a password manager. Pipe it through `node scripts/hash-password.cjs` via stdin using a secure local workflow (not command arguments or chat); store the salted scrypt hash as a secret. No demo account exists. Before exposing a staff interface, put staff access behind the organization's MFA identity/access gateway. This repository does not provision MFA or multiple staff accounts.

Production requires an explicit CORS_ORIGIN list and DATA_DIR. Mount DATA_DIR on a **private, encrypted persistent volume** outside any public directory. The SQLite file is mode 0600, parent directory mode 0700; writes are transactional and durable. Run **one backend instance** on that volume; do not use an ephemeral/serverless filesystem or network-shared SQLite volume. The application rejects requests above 10,000 retained records instead of silently dropping them. Appointments are returned in pages of 100 with `?offset=100` etc. Administrators must monitor capacity, back up the private database, test restores and implement approved retention/export/deletion operations before production use. The application does not automatically delete medical data.

The service rate-limits requests by the socket IP. It deliberately does not trust arbitrary forwarded headers. A reverse proxy must have an explicitly reviewed trust policy and edge rate limits; never enable `trust proxy: true` indiscriminately. Scale-out requires shared throttling and a managed transactional database.

## Live Supabase verification still required

Use an administrator session to inspect schema, grants, RLS policies, security-definer functions, views, storage, logs, backup/retention and data residency. A public anon key is designed for client use and is not a service-role credential. Verify that anonymous callers cannot SELECT, UPDATE or DELETE any lead, and that inserts are restricted to intended fields with server-side length/type constraints and abuse controls. Test with synthetic data in staging and two separate users. Do not apply a generic migration without reviewing the existing schema/policies. No policy was changed by this remediation because no Supabase administrator connection is available.

## Deployment and rollback

Run `npm ci`, `npm audit`, `npm run lint`, and `npm test`. The test suite creates a private temporary SQLite database and synthetic credentials, tests REST/WebSocket authorization, validation, quotas and persistence, and removes its test data. Test the real hosting/proxy/volume configuration in staging before deploying this backend. Never roll back to the vulnerable demo-auth backend; if deployment fails, disable backend routing and keep direct clinic contact routes available. Frontend changes can be rolled back via Vercel; do not roll back database policy changes without a separate reviewed migration.

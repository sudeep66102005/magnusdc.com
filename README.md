# Clarus Magnus Health & Diagnostics — Website

Monorepo containing the frontend and backend for the Clarus Magnus Health &
Diagnostics website, scaffolded from the site architecture diagram (Home,
About, Specialties, Diagnostics, Laboratory, Health Packages, For Corporates,
Patient Info, Contact Us).

```
magnusdc.com/
├── frontend/   # Next.js (React) website
└── backend/    # NestJS API
```

No database is connected yet. Both apps currently run on static/in-memory
seed data that mirrors the site architecture, so the full site is browsable
and the API is fully wired end-to-end. A database can be introduced later
(see "Adding a database" below) without changing the module/route shape.

---

## Frontend — `frontend/`

**Stack:** Next.js 16 (App Router) · TypeScript · Tailwind CSS v4 · shadcn/ui
(`base-nova` style, built on `@base-ui/react`) · TanStack Query · React Hook
Form + Zod · Axios

### Structure

```
frontend/src/
├── app/                        # App Router pages (one folder per route)
│   ├── about/
│   ├── specialties/            # + [slug] detail page
│   ├── diagnostics/            # + [slug] detail page
│   ├── laboratory/             # + [slug] detail page
│   ├── health-packages/        # + [category] page
│   ├── for-corporates/         # + employee-health-checkups, diagnostic-partnerships
│   ├── patient-info/           # + appointment-booking, patient-support
│   ├── contact/
│   ├── privacy-policy/
│   ├── terms-and-conditions/
│   ├── layout.tsx              # Root layout: Navbar, Footer, GlobalWidgets, QueryProvider
│   └── page.tsx                # Home page
├── components/
│   ├── ui/                     # shadcn/ui primitives (button, card, sheet, select, ...)
│   ├── layout/                 # Navbar, Footer, GlobalWidgets (Call/WhatsApp/Reviews/CTA)
│   ├── shared/                 # PageHero, Section, LinkCard
│   ├── forms/                  # AppointmentForm, ContactForm, CorporateInquiryForm
│   └── providers/              # QueryProvider (TanStack Query)
├── hooks/                      # useSpecialties, useDiagnostics, useCreateAppointment, ...
├── lib/
│   ├── api/                    # axios client, endpoint map, shared types
│   ├── constants/               # site-config (phone/whatsapp/address), navigation/sitemap
│   └── data/                    # static seed content (specialties, diagnostics, etc.)
```

### Notes

- **shadcn/ui render pattern:** this project's shadcn style composes elements
  via a `render` prop (Base UI), not Radix's `asChild`. Example:
  `<Button render={<Link href="/x" />}>Label</Button>`.
- **Global widgets** (Call Now, Appointment CTA, WhatsApp Chat, Google
  Reviews, Address & Location) are rendered on every page from
  `components/layout/global-widgets.tsx`, matching the site architecture
  diagram's "Global Elements" row.
- API calls go through `NEXT_PUBLIC_API_URL` (see `.env.example`), defaulting
  to `http://localhost:4000/api` to match the NestJS backend below.

### Run it

```bash
cd frontend
cp .env.example .env.local   # adjust NEXT_PUBLIC_API_URL if needed
npm install
npm run dev                  # http://localhost:3000
```

```bash
npm run build && npm run start   # production build
npm run lint                     # eslint
```

---

## Backend — `backend/`

**Stack:** NestJS 11 · TypeScript · class-validator/class-transformer ·
`@nestjs/websockets` + Socket.IO (live queue updates) · `@nestjs/jwt` +
`@nestjs/passport` (auth scaffold) · `@nestjs/config`

### Structure

```
backend/src/
├── main.ts                     # bootstrap: /api prefix, ValidationPipe, CORS
├── app.module.ts                # wires all feature modules
└── modules/
    ├── health/                  # GET /api/health
    ├── auth/                    # POST /api/auth/login, GET /api/auth/me (JWT)
    ├── specialties/              # GET /api/specialties, GET /api/specialties/:slug
    ├── diagnostics/               # GET /api/diagnostics, GET /api/diagnostics/:slug
    ├── laboratory/                # GET /api/laboratory, GET /api/laboratory/:slug
    ├── health-packages/           # GET /api/health-packages?category=, GET /:slug
    ├── corporates/                # POST /api/corporates/inquiry
    ├── patients/                  # POST /api/patients/support
    ├── contact/                   # POST /api/contact
    ├── appointments/              # POST/GET /api/appointments, GET /:id
    └── queue/                     # WebSocket gateway (namespace "queue")
```

Each feature module follows the same shape: `*.controller.ts`,
`*.service.ts`, `dto/`, `entities/`. Services currently hold in-memory seed
data / arrays — swap these for a real repository (TypeORM, Prisma, Mongoose,
etc.) once a database is chosen, without needing to change controllers or DTOs.

### Live queue updates (WebSockets)

`QueueGateway` (namespace `/queue`) lets clients join a department "room" and
receive `queueUpdate` events. `AppointmentsService` emits an update whenever
a new appointment is created, as a starting point for a live token/queue
display on the frontend.

### Auth

`AuthModule` provides a JWT login flow (`POST /api/auth/login`) and a
protected `GET /api/auth/me` route guarded by `JwtAuthGuard`. The user store
is currently an in-memory placeholder (`admin@magnusdc.com` /
`ChangeMe123!`) — replace with a real user table once a database exists.

### Run it

```bash
cd backend
cp .env.example .env
npm install
npm run start:dev            # http://localhost:4000/api
```

```bash
npm run build                # nest build
npm run lint                 # eslint --fix
npm run test:e2e             # jest e2e (health check)
```

### Adding a database (later)

The service layer is intentionally thin so a database can be dropped in
later:

1. Pick an ORM (TypeORM/Prisma are common NestJS choices) and add a
   `DATABASE_URL` (already stubbed in `.env.example`).
2. Replace the in-memory arrays in each `*.service.ts` with repository calls.
3. Move the `entities/*.entity.ts` classes to real ORM entity/schema
   definitions.
4. Controllers and DTOs should not need to change.

---

## Running both together

```bash
# Terminal 1
cd backend && npm run start:dev

# Terminal 2
cd frontend && npm run dev
```

Frontend: http://localhost:3000 — Backend: http://localhost:4000/api

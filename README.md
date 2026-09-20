# jezerox-next

Marketing site for **JezeroX** (public brand; **Skycap LLC** is the legal entity).

Next.js 16 App Router · React 19 · TypeScript (strict) · Tailwind CSS v4 · deployed on Vercel.

> Working on this repo with an agent? Read [`CLAUDE.md`](./CLAUDE.md) first — it covers the
> architecture, the content-integrity rule, and the design-token contract in depth.

## Getting started

Package manager is **pnpm**.

```bash
pnpm install
cp .env.example .env.local   # then fill in the values below
pnpm dev                     # http://localhost:3000
```

## Scripts

| Command | What it does |
| --- | --- |
| `pnpm dev` | Dev server on port 3000 |
| `pnpm build` | Production build |
| `pnpm start` | Serve the production build |
| `pnpm lint` | ESLint (flat config) — **must pass; `next build` does not run it** |
| `pnpm exec tsc --noEmit` | Typecheck (there is no `typecheck` script) |

There is **no test infrastructure** in this repo — no runner, no config, no test files. Don't
claim tests pass; scaffold a runner before writing the first one.

## Environment

Set the same values in Vercel for production. `.env*` is gitignored.

| Variable | Purpose |
| --- | --- |
| `SITE_URL` | Canonical base URL for metadata and sitemap |
| `RESEND_API_KEY` | Resend API key for the contact form |
| `RESEND_FROM_EMAIL` | Verified sender; falls back to `onboarding@resend.dev` |
| `CONTACT_EMAIL` | Recipient of contact-form submissions |
| `CALENDLY_BOOKING_URL` | Booking link, read in `content.ts` |
| `NEXT_PUBLIC_CALENDLY_URL` | Takes precedence over `CALENDLY_BOOKING_URL` |

## How the site is put together

**`src/lib/content.ts` is the single source of truth for every piece of copy and data.**
Components hold no text. Pages import from `content.ts` and pass values into presentational
primitives, the dynamic routes (`/services/[slug]`, `/work/[slug]`, `/insights/[slug]`) generate
their params from its arrays, and `app/sitemap.ts` derives from those same arrays. Editing site
text means editing `content.ts`.

> **Content integrity.** Every number and quote on this site must be real and defensible
> (sourced from the owner's Upwork history and CV). Employer and agency client work stays
> anonymized for NDA reasons. Do not add unverifiable metrics, invented testimonials, client
> logos, uptime figures or team sizes — remove a section rather than fill it with placeholder
> proof. The rationale is FTC endorsement-guideline exposure for the LLC. See
> `plan/REDESIGN.md` §7.

Other load-bearing pieces:

- **Design tokens** live as CSS custom properties in `src/app/globals.css` and are re-exported to
  Tailwind via `@theme inline`. No component hard-codes a hex value.
- **Motion is gated on `prefers-reduced-motion`** in every animated component. `Reveal` and
  `HeroVisual` subscribe via `src/lib/use-prefers-reduced-motion.ts`; `AuroraField`,
  `MagneticButton` and `Marquee` still read `window.matchMedia` once inside an effect, so they
  do not react to the preference changing mid-session. New animation must render a static state
  when reduce is set.
- **`src/proxy.ts`** sets the security headers (Next.js 16 renamed middleware to `proxy.ts`).
- **`src/lib/seo.ts`** builds all page metadata — use `createPageMetadata()` rather than
  assembling a `Metadata` object by hand.

`plan/` holds the design and content decisions. `REDESIGN.md` and `BRAND_MESSAGING.md` are
current; `DESIGN_SYSTEM.md` is superseded and `STATUS.md` is partly stale.

## Known limitations

These are deliberate and documented, not oversights:

- The CSP in `src/proxy.ts` still carries `'unsafe-inline'` and `'unsafe-eval'` in `script-src`.
- `src/lib/rate-limit.ts` is an in-memory `Map`. It does not survive a cold start and is not
  shared across serverless instances.

## Deployment

Vercel, building from `main`. Feature branch → PR → `main`; merging to `main` deploys production.

# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager is **pnpm** (`pnpm-lock.yaml`, `pnpm-workspace.yaml` with a single root package).

```bash
pnpm dev          # next dev — http://localhost:3000
pnpm build        # next build
pnpm start        # serve the production build
pnpm lint         # bare `eslint` (flat config, lints the cwd)
pnpm exec tsc --noEmit   # typecheck — there is no `typecheck` script
```

### Tests

**There is no test infrastructure in this repo.** No runner is installed, no config exists, and
there are zero test files. `../.cursor/rules/testing.mdc` prescribes Vitest + React Testing
Library + Playwright with 80% coverage, but that is aspirational — treat it as the intended
choice if tests are ever added, not as something you can run. Do not claim tests pass, and
scaffold the runner before writing the first test.

## Repository layout

The **git repository root is `jezerox-next/`**, not its parent. The parent directory
(`../`) is an editor workspace holding things outside version control:

- `../.cursor/rules/*.mdc` — Cursor rules that apply to this code (see *Conventions* below)
- `../jezerox-plan.md` — a go-to-market business strategy document, unrelated to the codebase
- `../pencil-welcome.pen` — a Pencil design file (encrypted; only readable via `pencil` MCP tools)

## Architecture

A Next.js 16 App Router marketing site for JezeroX (public brand; **Skycap LLC** is the legal
entity). React 19, TypeScript strict, Tailwind CSS v4, deployed on Vercel. Path alias `@/*` → `./src/*`.

### `src/lib/content.ts` is the single source of truth

This ~950-line module holds **all** site copy and data: `company`, `stats`, `services`,
`projects`, `testimonials`, `insights`, `capabilities`, `businessProblems`, `processSteps`,
`techGroups`, `industries`, `journey`, `values`, `primaryNav`, `footerNav`, plus
`getService`/`getProject`/`getInsight` lookups and the `featuredProjects` derivation.

Understanding this file explains most of the codebase:

- **Components contain no copy.** Pages import data from here and pass it into presentational
  primitives. Adding or editing site text means editing `content.ts`, not a component.
- **Dynamic routes are generated from these arrays.** `/services/[slug]`, `/work/[slug]` and
  `/insights/[slug]` each call `generateStaticParams()` over the matching array and resolve the
  record with the `get*` helper, calling `notFound()` on a miss.
- **`app/sitemap.ts` derives from the same arrays** — `services`, `projects` *and* `insights` —
  so adding a record automatically adds its sitemap entry. Static routes there are a
  hand-maintained list — add new top-level pages to it explicitly.

### Content-integrity constraint (read before touching copy or stats)

`content.ts`'s header comment and `plan/REDESIGN.md` §7 impose a hard rule: every number and
quote must be **real and defensible** (sourced from the owner's Upwork history and CV), employer
and agency client work must stay **anonymized for NDA reasons** (only own freelance/personal
projects are named), and no unverifiable metric may be added. The stated rationale is US FTC
endorsement-guideline exposure for the LLC. Do not invent testimonials, client logos, uptime
figures, team sizes or founding dates — remove a section rather than fill it with placeholder proof.

The headline numbers are settled, so keep them consistent across `content.ts`, page metadata and
`opengraph-image.tsx`: **25** projects (18 completed + 7 in progress on Upwork — not "25+") and
**4.9★** average (21 jobs rated 5.0 and one rated 4.0 = 4.95 — not "5★").

### Design tokens: CSS custom properties → Tailwind v4

`src/app/globals.css` defines the "Aurora" palette as custom properties on `:root`
(`--ink-950`…`--ink-600`, `--indigo`/`--violet`/`--magenta`/`--amber`, `--fg*`, `--line*`,
`--radius-*`, `--dur-*`, `--ease-out`, `--gradient-brand`), then re-exports them to Tailwind via
`@theme inline` so they become utilities (`bg-ink-850`, `text-fg-muted`, `text-magenta`).

**No component hard-codes a hex value** — this is the explicit DRY contract of the redesign.
Reference tokens either as a utility class or as `var(--token)` (e.g.
`rounded-[var(--radius-md)]`). Global composite classes also live in `globals.css`: `.glass`,
`.gradient-border`, `.grid-pattern`, `.grad-text`, `.marquee-track`, `.flow-dash`, `.float-loop`,
`.spin-slow`, `.pulse-soft`, `.skip-link`.

### Plan docs and their precedence

`plan/` carries the design and content decisions, and the docs disagree with each other. Order
of authority:

1. **`plan/REDESIGN.md`** — current. The "Aurora" direction; explicitly supersedes the visual
   direction in `DESIGN_SYSTEM.md`. §7 is the content-honesty rule above.
2. **`plan/BRAND_MESSAGING.md`** — current. Copy and positioning.
3. **`plan/DESIGN_SYSTEM.md`** — **superseded.** Its navy/blue/teal palette and Space Grotesk
   typography are no longer what the code uses. Do not pull tokens from it.
4. **`plan/STATUS.md`** — **partly stale.** Still useful for the template section lists and env
   var table, but its "Design consistency" section cites the dead `--navy-950`/`--blue-500`/
   `--teal-500` tokens and `--font-space-grotesk`; it says `<main id="main-content">` where the
   code uses `id="main"`; it lists `/industries` and `/careers` routes that do not exist in
   `src/app/`; and its `src/components/ui/` inventory is far short of what is there. Verify
   against the code before acting on it.

### Homepage section order and band tones

`app/page.tsx` follows `../jezerox-plan.md` §18 — lead with the problem, then the offers, then
proof: Hero → `Problems` → `ServicesOverview` → `StatsBar` → `Testimonials` → `ProcessOverview`
→ `FeaturedWork` → `AiSpotlight` → `Marquee` → `Industries` → `Expectations` → `FinalCTA`. The
capability `Marquee` sits ninth deliberately; the plan is explicit that 24 technology tags must
not greet a visitor in the first ten seconds. Don't reorder without re-reading §18.

**Tones alternate, and two components carry their own band.** `StatsBar` is
`border-y border-line bg-ink-900/60` and `Marquee` is `border-y border-line bg-ink-900` — the
latter is *identical* to `tone="surface"`. So a `tone="surface"` `Section` placed directly
before or after either one produces a doubled hairline and two indistinguishable bands. The
neighbours of both must be `tone="page"`. Re-check the whole sequence after any reorder.

### Page composition pattern

Every content route composes the same shell in the page file itself (there is no shared
sub-layout). `/privacy` and `/terms` are the exception: they delegate the whole shell to
`LegalLayout`, which owns the `Header`/`main`/`Footer` wrapper and takes `title`, `intro`,
`updated` and a `sections` array.

```tsx
<Header />
<main id="main" className="min-h-screen">
  <PageHero eyebrow=… title={<>…<GradientText>…</GradientText></>} lede=… >…</PageHero>
  <Section>…</Section>
  <Section tone="surface">…</Section>   {/* alternate tone to delineate bands */}
  <CtaBand … />
</main>
<Footer />
```

Primitives come from barrel files — `@/components/ui`, `@/components/layout`,
`@/components/common`, `@/components/work` etc. each re-export through `index.ts`. Import from
the barrel, and add new components to it.

`Button` is a discriminated union: pass `href` and it renders a `next/link`, omit it and it
renders a `<button>`. Headings pair with `SectionHeading` + `GradientText` for the accent word.

### Server vs client components

Only ten files carry `"use client"` — `ContactForm`, `Header`, `WorkGrid`, `HeroScene`,
`HeroVisual`, the `ui` primitives `AuroraField`, `MagneticButton`, `Marquee`, `Reveal`, and the
`src/lib/use-prefers-reduced-motion.ts` hook. Everything else is a Server Component. Keep it
that way: push interactivity down into a small client leaf rather than marking a page or
section client.

**Motion is gated on `prefers-reduced-motion` in every animated component** (`HeroVisual`,
`AuroraField`, `MagneticButton`, `Marquee`, `Reveal`, plus a `@media` block in `globals.css`).
This is a systemic convention, not an afterthought — new animation must check it and render a
static state when reduce is set.

Two ways of reading it coexist. `Reveal` and `HeroVisual` **subscribe** through
`usePrefersReducedMotion()` (`src/lib/use-prefers-reduced-motion.ts`, a `useSyncExternalStore`
wrapper), so they react when the preference changes mid-session; it returns `null` until
hydration so each caller can pick its own safe pre-hydration render. `AuroraField`,
`MagneticButton` and `Marquee` still call `window.matchMedia(...)` once inside an effect and do
not react to changes. Prefer the hook in new code — and note React 19's
`react-hooks/set-state-in-effect` rule rejects the older `setState`-in-effect shape outright.

**Consequence worth knowing when debugging "the animation is broken":** with reduce set,
`AuroraField`'s canvas never initialises and stays at `opacity-0`, and `HeroVisual` renders
static SVG circles instead of the three.js core. A flat background plus a plain ringed circle
means the viewer's OS has animations turned off — not that the deploy is broken.

The three.js/react-three-fiber hero is deliberately isolated: `HeroVisual` (client) lazy-loads
`HeroScene` via `dynamic(..., { ssr: false })` and only mounts it when motion is allowed, falling
back to inline SVG circles otherwise. Keep WebGL behind that boundary so it stays out of the
initial bundle and off the server.

### Contact flow

`ContactForm` → `submitContactForm` server action in `src/actions/contact-actions.ts`, which in
order: silently accepts-and-discards on honeypot (`website` field non-empty), checks
`checkRateLimit` from `src/lib/rate-limit.ts`, validates with Zod, then sends via Resend with all
interpolated values passed through a local `escapeHtml`. It returns a discriminated
`ContactFormState` and never surfaces internal error text to the user.

Note `rate-limit.ts` is an **in-memory `Map`** (5 requests / 15 min, keyed on
`x-forwarded-for` IP + email). It does not survive a cold start and is not shared across
serverless instances — a durable store is needed if this has to hold under real abuse.

### `src/proxy.ts` — security headers

Next.js 16 renamed middleware to `proxy.ts`, and it lives at `src/` root (not in `app/`). It sets
`X-Frame-Options`, `X-Content-Type-Options`, `Referrer-Policy`, `Permissions-Policy` and a CSP.
The CSP still carries `'unsafe-inline'` and `'unsafe-eval'` in `script-src` with an inline TODO to
tighten it once inline scripts are verified — tightening it is a deliberate, testable change, not
a cleanup to do in passing.

### SEO

`src/lib/seo.ts` exposes `getSiteUrl()` (from `SITE_URL`, default `https://jezerox.com`) and
`createPageMetadata({ title, description, path, robots?, keywords? })`, which builds canonical
URL, OpenGraph and Twitter card together. Every page should build its `metadata` (or
`generateMetadata`) through this helper rather than assembling a `Metadata` object by hand.
Structured data goes through `@/components/seo` (`JsonLd` in the root layout, `faq-schema` for
FAQ blocks). `app/opengraph-image.tsx` and `app/robots.ts` complete the set.

## Environment

Copy `.env.example` → `.env.local`; set the same values in Vercel for production. `.env*` is
gitignored.

| Variable | Purpose |
| --- | --- |
| `SITE_URL` | Canonical base URL for metadata and sitemap |
| `RESEND_API_KEY` | Resend API key for the contact form |
| `RESEND_FROM_EMAIL` | Verified sender; falls back to `onboarding@resend.dev` |
| `CONTACT_EMAIL` | Recipient of form submissions |
| `CALENDLY_BOOKING_URL` | Booking link, read in `content.ts` |
| `NEXT_PUBLIC_CALENDLY_URL` | Takes precedence over `CALENDLY_BOOKING_URL` |

## Conventions

From `../.cursor/rules/` (`nextjs-project.mdc` applies always; `components.mdc`, `api-routes.mdc`
and `testing.mdc` are glob-scoped), reduced to what is not already obvious from the code:

- **Named exports for components**, never default. Two exceptions exist and both are required:
  page/route/layout files (App Router mandates a default export) and `home/HeroScene.tsx`
  (consumed through `dynamic(() => import(...))`). It is the only default-exported component.
- Prefer `interface` for object shapes, `type` for unions and mapped types. No `enum` — use a
  `const` object `as const` plus `type X = (typeof X)[keyof typeof X]`. No `any`; use `unknown`
  with a type guard.
- Extend native element props when wrapping an HTML element; destructure with defaults in the
  signature.
- Compose classes with `cn()` from `@/lib/cn` (clsx + tailwind-merge). No inline styles except
  where a value must come from a CSS custom property or runtime data — see `Button`'s
  `primaryStyle` and `HeroVisual`'s positioning for the accepted shape of that exception.
- Validate every server-action and route-handler input with Zod; return typed success/error
  objects from actions and call `revalidatePath`/`revalidateTag` after mutations.
- Route handlers belong in `src/app/api/` for webhooks and non-form APIs; form mutations belong
  in `src/actions/` with `'use server'`. (Neither `src/app/api/` nor a second action file exists
  yet — `contact-actions.ts` is the only one.)

**File naming is inconsistent in the existing tree** — the Cursor rule says kebab-case, but most
components are PascalCase (`Button.tsx`, `HeroVisual.tsx`) while `src/components/home/` mixes both
(`Hero.tsx` alongside `ai-spotlight.tsx`). Match the dominant style of the folder you are editing
rather than renaming existing files.

## Git

Remote is `github.com/uusammmaa/jezerox-next`. History uses conventional commits with scopes
(`feat(seo):`, `feat(visuals):`, `chore:`). Older history merged feature branch → `staging` →
`main`; current practice is feature branch → PR → `main`. There are many stale feature
branches; `main` is the default, and **merging to `main` deploys production on Vercel**.

`pnpm lint` is not run by `next build`, so a lint error will deploy happily. Run it yourself
before opening a PR.

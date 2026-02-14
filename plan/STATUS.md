# JezeroX — Project Status

Single source of truth for AI. Read this first. For design tokens see `DESIGN_SYSTEM.md`; for copy see `BRAND_MESSAGING.md`.

---

## Current state

- Launched at https://jezerox.com. All 13 steps done. Core pages built.
- Contact form: Resend, rate limiting (5/15min), honeypot, `contact.jezerox.com`.

---

## Code map

- `src/app/` — routes, layout, globals.css, sitemap.ts, robots.ts, not-found.tsx
- `src/app/[route]/page.tsx` — Home, services, contact, work, about, industries, careers, insights, privacy, terms
- `src/components/ui/` — Button, Card, Container, Section
- `src/components/layout/` — Header, Footer
- `src/components/home/`, `contact/`, `work/`, `insights/`, `seo/`
- `src/actions/contact-actions.ts`
- `src/lib/rate-limit.ts`, `src/lib/seo.ts`
- `src/proxy.ts` — security headers (at src root, not in app)

---

## Design refresh (page-by-page)

New designs created in Google Stitch. Each page will be shared as HTML and converted to the app.

**Workflow:** Share HTML → Convert to React/TSX + Tailwind → Apply design system tokens → Keep Header/Footer layout.

**Pages to update:**

| Page | Route | Status |
|------|-------|--------|
| Home | `/` | Done |
| Services | `/services` | Pending |
| Contact | `/contact` | Pending |
| Work | `/work` | Pending |
| About | `/about` | Pending |
| Industries | `/industries` | Pending |
| Careers | `/careers` | Pending |
| Insights | `/insights` | Pending |
| Privacy | `/privacy` | Pending |
| Terms | `/terms` | Pending |

**Conversion rules:**
- Use design tokens from `DESIGN_SYSTEM.md` (colors, typography, spacing)
- Use copy from `BRAND_MESSAGING.md` where applicable
- Preserve layout: Header → `<main id="main-content">` → sections → Footer
- Use existing components: Section, Container, Button, Card, Header, Footer

---

## Next steps (dynamic routes)

- `/services/[slug]` — Service detail template
- `/work/[slug]` — Case study detail template
- `/insights/[slug]` — Blog post template

---

## Template section lists

Use when building dynamic routes.

| Template | Sections (in order) |
|----------|---------------------|
| `/services/[slug]` | Hero; Problems we solve; Approach and deliverables; Example timeline; Tech stack; Relevant case study; FAQ; CTA |
| `/work/[slug]` | Hero (client, challenge, results); Context and goals; Solution (process, tech); Results (metrics); Screenshots/visuals; Testimonial; CTA |
| `/insights/[slug]` | Title and hero image; Content; Author card; Related posts; CTA |

---

## Design consistency

- Layout: Header → `<main id="main-content">` → sections → Footer. Single-column stack.
- Components: Section, Container, Button, Card from `@/components/ui`; Header, Footer from `@/components/layout`.
- Colors: `var(--navy-950)`, `var(--blue-500)`, `var(--teal-500)`, `var(--text-primary)`, `var(--text-muted)` (see globals.css).
- Typography: `font-[family-name:var(--font-space-grotesk)]` for headings; Inter for body.
- Add `metadata` (title, description) per route.

---

## Sitemap and nav

**Routes:** `/`, `/services`, `/services/[slug]`, `/industries`, `/work`, `/work/[slug]`, `/about`, `/careers`, `/insights`, `/insights/[slug]`, `/contact`, `/privacy`, `/terms`, `/not-found`

**Primary nav:** Home, Services, Industries, Work, About, Insights, Careers, Contact (CTA)

**Footer:** Company (About, Careers, Contact); Services; Resources (Insights); Legal (Privacy, Terms)

**Slug conventions:** lowercase, hyphenated (e.g. `/services/product-strategy`). Short, keyword-aligned.

---

## Environment variables

From `.env.example`; copy to `.env.local` for local dev. Set in Vercel for production.

| Variable | Purpose |
|----------|---------|
| `SITE_URL` | Production URL (e.g. https://jezerox.com) |
| `RESEND_API_KEY` | From Resend dashboard |
| `RESEND_FROM_EMAIL` | Sender (e.g. contact@contact.jezerox.com) |
| `CONTACT_EMAIL` | Recipient for form submissions |
| `CALENDLY_BOOKING_URL` | Book a call link |

---

## QA summary

- Lighthouse: Perf 97, A11y 96, BP 96, SEO 100
- Security headers via `src/proxy.ts`
- Known follow-ups: color contrast on `--text-muted`; LCP ~2.55s (monitor); unused JS (defer)

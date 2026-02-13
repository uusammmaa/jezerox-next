# Next steps — JezeroX

Use this to continue implementation. All pages must follow the same design: see **Design consistency** in `COMPONENTS.md` and tokens in `DESIGN_SYSTEM.md`.

---

## Where you are

- **Done:** Steps 1–4 (discovery, messaging, IA, design system); Steps 5–9 (all pages); **Step 10 (Backend integration)** — Contact form with email sending, rate limiting, and honeypot protection; **Step 11 (SEO and analytics)** — metadata, structured data, sitemap, robots, Open Graph/Twitter, Vercel Analytics; **Step 12 (QA and security)** — security headers (`src/proxy.ts`), skip link, Lighthouse audit, `plan/QA_REPORT.md`.
- **Code:** `src/app/page.tsx` (Home), `src/app/services/page.tsx` (Services), `src/app/contact/page.tsx` (Contact), `src/app/work/page.tsx` (Work), `src/app/about/page.tsx` (About), `src/app/industries/page.tsx` (Industries), `src/app/careers/page.tsx` (Careers), `src/app/insights/page.tsx` (Insights), `src/app/privacy/page.tsx` (Privacy), `src/app/terms/page.tsx` (Terms), `src/app/not-found.tsx` (404), `src/app/sitemap.ts`, `src/app/robots.ts`, `src/proxy.ts`, `src/components/ui`, `src/components/layout`, `src/components/home`, `src/components/contact`, `src/components/work`, `src/components/insights`, `src/components/seo`, `src/actions/contact-actions.ts`, `src/lib/rate-limit.ts`, `src/lib/seo.ts`. Design tokens in `src/app/globals.css`.
- **Contact Form:** Email sending via Resend, rate limiting (5 requests per 15 minutes), honeypot spam protection, and dedicated email subdomain (`contact.jezerox.com`) for sending/receiving contact submissions.
- **Contact CTA:** Booking link configured in the Contact page.
- **Layout:** Single-column stack; Header + Footer on every page; Section + Container for content.

---

## Next step (pick one and build)

1. ~~**About** (`/about`) — Done.~~ Sections: Hero (mission) → Story/timeline → Values → Leadership bios → Culture → Security/compliance → CTA.
2. ~~**Industries** (`/industries`) — Done.~~ Sections: Hero → Industry cards → Outcomes by industry → Case study links → CTA.
3. ~~**Careers** (`/careers`) — Done.~~ Sections: Hero → Why JezeroX → Open roles → Hiring process → FAQ → CTA.
4. ~~**Insights** (`/insights`) — Done.~~ Sections: Hero → Topic filters → Featured post → Posts list → Newsletter CTA.
5. ~~**Legal** (`/privacy`, `/terms`) — Done.~~ Simple content pages with prose styling.
6. ~~**404** (`/not-found`) — Done.~~ Page with 404 heading, message, and CTAs (Go Home, Contact Us).

**Completed:** Home (`/`), Services (`/services`), Contact (`/contact`), Work (`/work`), About (`/about`), Industries (`/industries`), Careers (`/careers`), Insights (`/insights`), Privacy (`/privacy`), Terms (`/terms`), 404 (`/not-found`).

Suggested order: ~~About~~ → ~~Industries~~ → ~~Careers~~ → ~~Insights~~ → ~~Legal~~ → ~~404~~.

---

## Design consistency (every new page)

- Use **Header** and **Footer** from `@/components/layout`.
- Wrap content in **Section** (it adds Container). Single column; no two-column splits.
- Use **Button** (primary/secondary/ghost), **Card** for lists and highlights.
- Colors: `var(--navy-950)`, `var(--blue-500)`, `var(--teal-500)`, `var(--text-primary)`, `var(--text-muted)` (see `globals.css` and `DESIGN_SYSTEM.md`).
- Headings: `font-[family-name:var(--font-space-grotesk)]`. Body: default (Inter).
- Page structure: `<Header />` → `<main id="main-content">` → sections → `<Footer />`.
- Add `metadata` (title, description) per route in `app/[route]/page.tsx` or `layout.tsx`.

---

## Reference files

| Need | File |
| ----- | ----- |
| Section list per page | `PLAN.md` (Page sections), `INFORMATION_ARCHITECTURE.md` (page-to-section matrix) |
| Copy and headlines | `BRAND_MESSAGING.md` |
| Shared components and layout rules | `COMPONENTS.md` |
| Tokens, typography, components | `DESIGN_SYSTEM.md` |
| URLs and nav | `INFORMATION_ARCHITECTURE.md` |
| QA results and checklist | `QA_REPORT.md` |

---

## After pages are built

- ~~Step 10: Backend (contact form API, validation, email).~~ **Done.** Contact form integrated with Resend email service, rate limiting (5 requests per 15 minutes per IP/email), honeypot spam protection, and subdomain-based email routing (`contact.jezerox.com`). See `.env.example` for required environment variables.
- ~~Step 11: SEO (metadata, schema, sitemap, robots).~~ **Done.** `src/lib/seo.ts` (createPageMetadata helper), `src/app/sitemap.ts`, `src/app/robots.ts`, `src/components/seo/json-ld.tsx` (Organization + WebSite schema), per-page metadata with canonical/OG/Twitter, `SITE_URL` in `.env.example`, Vercel Analytics.
- ~~Step 12: QA (accessibility, Lighthouse, security headers).~~ **Done.** Security headers via `src/proxy.ts` (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, CSP); skip link and `.sr-only` for accessibility; Lighthouse scores: Performance 97, Accessibility 96, Best Practices 96, SEO 100. See `plan/QA_REPORT.md`.
- Step 13: Launch.

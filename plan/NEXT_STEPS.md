# Next steps — JezeroX

Use this to continue implementation. All pages must follow the same design: see **Design consistency** in `COMPONENTS.md` and tokens in `DESIGN_SYSTEM.md`.

---

## Where you are

- **Done:** Steps 1–4 (discovery, messaging, IA, design system); Home page, **Services** page, and **Contact** page built with shared components.
- **Code:** `src/app/page.tsx` (Home), `src/app/services/page.tsx` (Services), `src/app/contact/page.tsx` (Contact), `src/components/ui`, `src/components/layout`, `src/components/home`, `src/components/contact`, `src/actions/contact-actions.ts`. Design tokens in `src/app/globals.css`.
- **Layout:** Single-column stack; Header + Footer on every page; Section + Container for content.

---

## Next step (pick one and build)

1. **Work / Case studies** (`/work`) — *Next recommended.* Sections: Hero → Case study cards (with filters) → Outcomes highlights → CTA.
2. **About** (`/about`) — Sections: Hero (mission) → Story/timeline → Values → Leadership bios → Culture → Security/compliance → CTA.
3. **Industries** (`/industries`) — Sections: Hero → Industry cards → Outcomes by industry → Case study links → CTA.
4. **Careers** (`/careers`) — Sections: Hero → Why JezeroX → Open roles → Hiring process → FAQ → CTA.
5. **Insights** (`/insights`) — Sections: Hero → Topic filters → Featured post → Posts list → Newsletter CTA.
6. **Legal** — `/privacy`, `/terms` (simple content pages).
7. **404** — `/not-found` with CTA.

**Completed:** Services (`/services`), Contact (`/contact`).

Suggested order: **Work** → **About** → then Industries, Careers, Insights, Legal, 404.

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
|------|------|
| Section list per page | `PLAN.md` (Page sections), `INFORMATION_ARCHITECTURE.md` (page-to-section matrix) |
| Copy and headlines | `BRAND_MESSAGING.md` |
| Shared components and layout rules | `COMPONENTS.md` |
| Tokens, typography, components | `DESIGN_SYSTEM.md` |
| URLs and nav | `INFORMATION_ARCHITECTURE.md` |

---

## After pages are built

- Step 10: Backend (contact form API, validation, email).
- Step 11: SEO (metadata, schema, sitemap, robots).
- Step 12: QA (accessibility, Lighthouse, security headers).
- Step 13: Launch.

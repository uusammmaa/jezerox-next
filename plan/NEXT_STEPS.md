# Next steps — JezeroX

Use this to continue implementation. All pages must follow the same design: see **Design consistency** in `COMPONENTS.md` and tokens in `DESIGN_SYSTEM.md`.

---

## Where you are

<<<<<<< Updated upstream
- **Done:** Steps 1–4 (discovery, messaging, IA, design system); Home page, **Services** page, **Contact** page, and **Work** page built with shared components.
- **Code:** `src/app/page.tsx` (Home), `src/app/services/page.tsx` (Services), `src/app/contact/page.tsx` (Contact), `src/app/work/page.tsx` (Work), `src/components/ui`, `src/components/layout`, `src/components/home`, `src/components/contact`, `src/components/work`, `src/actions/contact-actions.ts`. Design tokens in `src/app/globals.css`.
=======
- **Done:** Steps 1–4 (discovery, messaging, IA, design system); Home page, **Services** page, **Contact** page, **Work** page, and **About** page built with shared components.
- **Code:** `src/app/page.tsx` (Home), `src/app/services/page.tsx` (Services), `src/app/contact/page.tsx` (Contact), `src/app/work/page.tsx` (Work), `src/app/about/page.tsx` (About), `src/components/ui`, `src/components/layout`, `src/components/home`, `src/components/contact`, `src/components/work`, `src/actions/contact-actions.ts`. Design tokens in `src/app/globals.css`.
>>>>>>> Stashed changes
- **Contact CTA:** Booking link configured in the Contact page.
- **Layout:** Single-column stack; Header + Footer on every page; Section + Container for content.

---

## Next step (pick one and build)

<<<<<<< Updated upstream
1. **About** (`/about`) — *Next recommended.* Sections: Hero (mission) → Story/timeline → Values → Leadership bios → Culture → Security/compliance → CTA.
2. **Industries** (`/industries`) — Sections: Hero → Industry cards → Outcomes by industry → Case study links → CTA.
=======
1. ~~**About** (`/about`) — Done.~~ Sections: Hero (mission) → Story/timeline → Values → Leadership bios → Culture → Security/compliance → CTA.
2. **Industries** (`/industries`) — *Next recommended.* Sections: Hero → Industry cards → Outcomes by industry → Case study links → CTA.
>>>>>>> Stashed changes
3. **Careers** (`/careers`) — Sections: Hero → Why JezeroX → Open roles → Hiring process → FAQ → CTA.
4. **Insights** (`/insights`) — Sections: Hero → Topic filters → Featured post → Posts list → Newsletter CTA.
5. **Legal** — `/privacy`, `/terms` (simple content pages).
6. **404** — `/not-found` with CTA.

<<<<<<< Updated upstream
**Completed:** Home (`/`), Services (`/services`), Contact (`/contact`), Work (`/work`).

Suggested order: **About** → Industries → Careers → Insights → Legal → 404.
=======
**Completed:** Home (`/`), Services (`/services`), Contact (`/contact`), Work (`/work`), About (`/about`).

Suggested order: ~~About~~ → **Industries** → Careers → Insights → Legal → 404.
>>>>>>> Stashed changes

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

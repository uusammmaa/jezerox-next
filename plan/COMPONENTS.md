# JezeroX — Shared components and design usage

Use this doc when building new pages so layout and design stay consistent. All tokens and specs live in `DESIGN_SYSTEM.md`. For "what to build next" see `NEXT_STEPS.md`.

---

## Design consistency (all pages)

Every page must follow these rules so the site looks and behaves the same:

1. **Layout:** `Header` → `<main id="main-content">` → sections (in order) → `Footer`. No exceptions.
2. **Single-column stack:** One column only. Content inside `Section` (which wraps with `Container`). No two-column splits; right block always below left block.
3. **Components:** Use only `Button`, `Card`, `Container`, `Section` from `@/components/ui`; `Header`, `Footer` from `@/components/layout`. Same variants (primary/secondary/ghost, glow on featured cards).
4. **Colors:** Use CSS variables from `globals.css`: `var(--navy-950)`, `var(--navy-900)`, `var(--blue-500)`, `var(--teal-500)`, `var(--text-primary)`, `var(--text-secondary)`, `var(--text-muted)`, `var(--border-subtle)`. No hardcoded hex outside tokens.
5. **Typography:** Headings: `font-[family-name:var(--font-space-grotesk)]`. Body: default (Inter). Scale: section titles `text-2xl md:text-3xl`, card titles `text-lg`, body `text-base` or `text-sm`.
6. **Spacing:** Section padding via `Section` (py-12 md:py-16 lg:py-[var(--space-section)]). Between blocks inside a section: `mt-6`, `mt-10`, `gap-6` as in Home.
7. **CTAs:** Primary = "Start a project" / "Contact" style (Button primary). Secondary = "See our work" / "Book a call" (Button secondary). Form submit = "Tell us about your product."
8. **Accessibility:** Semantic HTML (`<main>`, `<section>`, `<nav>`, headings in order). Focus visible (outline). `aria-label` where needed.
9. **Metadata:** Each route: `metadata` with `title` and `description` (see root `layout.tsx` for template).

---

## Layout rule: single-column stack

- **Home and content pages:** One column. Each section is full width; content is constrained by `Container`. No two-column splits (right block goes below left block).
- **Section spacing:** `Section` applies `py-12 md:py-16 lg:py-[var(--space-section)]` (96px desktop, 48px mobile).

---

## Shared components (reuse on every page)

### `@/components/ui`

| Component | Use |
| --- | --- |
| **Container** | Max-width wrapper (1280px, responsive padding). Wrap page/section content. |
| **Section** | `<section>` + vertical padding + optional `Container`. Use for each page section. Pass `id` for anchor links; use `fullWidth` for full-bleed. |
| **Button** | `variant`: primary \| secondary \| ghost. `size`: sm \| md \| lg. Use `href` for links. Primary has soft glow. |
| **Card** | Surface with border, radius-lg, hover. Use `href` for clickable cards; `glow` for featured cards. |

### `@/components/layout`

| Component | Use |
| --- | --- |
| **Header** | Sticky nav: logo, primary nav links, Contact CTA. Mobile: hamburger + drawer. Use on every page. |
| **Footer** | Company, Services, Resources, Legal links + copyright. Use on every page. |

---

## Page-specific components

### `@/components/home`

Use only on the homepage. Other pages build their own sections but reuse **ui** and **layout**.

| Component | Content |
| --- | --- |
| Hero | Tagline, subhead, CTAs (Start a project, See our work). |
| SocialProof | Trusted by… + logos placeholder + stats (50+, 95%, 5+). |
| ServicesOverview | End-to-end product engineering + 6 service cards. |
| FeaturedCaseStudies | 2–3 case study cards with image placeholder, title, description, Learn more. |
| ProcessOverview | Discover, Design, Build, Scale (with durations). |
| IndustryFocus | Built for regulated teams + industry pills. |
| Testimonials | Quote cards with attribution. |
| InsightsPreview | Insights headline + 3 post cards + View all. |
| FinalCTA | Ready to build… + Start a project. |

### `@/components/work`

Use only on the work/case studies page.

| Component | Content |
| --- | --- |
| CaseStudiesGrid | Interactive case study cards with industry filters, outcomes, and tech stack tags. Client component with state management. |

---

## Building a new page

1. **Layout:** `Header` → `<main>` → page sections → `Footer`.
2. **Sections:** Use `<Section id="…">` and put content inside (no extra `Container`; `Section` adds it).
3. **Content width:** All content goes inside `Section` (which uses `Container`) so max-width and padding are consistent.
4. **CTAs:** Prefer `Button` with `href`; primary for main CTA, secondary for “See our work” style.
5. **Cards:** Use `Card` for services, case studies, posts; add `glow` for featured items.
6. **Colors:** Use CSS variables: `var(--navy-950)`, `var(--blue-500)`, `var(--teal-500)`, `var(--text-primary)`, `var(--text-muted)`, etc. (see `DESIGN_SYSTEM.md`).
7. **Typography:** Headings: `font-[family-name:var(--font-space-grotesk)]`. Body: default (Inter via `--font-body`). Use semantic headings (h1 → h2 → h3).
8. **Accessibility:** Keep focus visible (outline on focus), use `aria-label` where needed, semantic HTML (`<main>`, `<nav>`, `<footer>`, etc.).

---

## File structure

```text
src/
  app/           # Routes, layout, globals.css
  actions/       # Server actions (e.g. contact-actions.ts for contact form)
  components/
    ui/           # Button, Card, Container, Section
    layout/       # Header, Footer
    home/         # Home page sections only
    contact/      # ContactForm (Contact page only)
```

For a new page (e.g. Services): add `app/services/page.tsx`, use `Header` and `Footer`, and build sections with `Section` + `Button` / `Card` as needed. Reuse the same tokens and component patterns. Contact page uses `ContactForm` from `@/components/contact` and `submitContactForm` from `@/actions/contact-actions`.

---

## Page-by-page section checklist

Use this when building each page. Sections in order; copy from `BRAND_MESSAGING.md` and `PLAN.md`.

**Built:** Home, Services, Contact, Work, About, Industries. **Next:** Careers.

| Page | Sections (in order) |
| --- | --- |
| **Home** `/` ✓ | Hero → Social proof → Services overview → Featured case studies → Process → Industry focus → Testimonials → Insights preview → Final CTA |
| **Services** `/services` ✓ | Hero → Service categories (grid, same 6 as Home) → Engagement models → Delivery process → Tech stack → Case study highlights → FAQ → CTA |
| **Contact** `/contact` ✓ | Hero → Contact form → Project brief checklist → Calendly/booking CTA → Locations/hours |
| **Work** `/work` ✓ | Hero → Case study cards (filters) → Outcomes highlights → CTA |
| **About** `/about` ✓ | Hero (mission) → Story/timeline → Values → Leadership bios → Culture → Security/compliance → CTA |
| **Industries** `/industries` ✓ | Hero → Industry cards → Outcomes by industry → Case study links → CTA |
| **Careers** `/careers` | Hero → Why JezeroX → Open roles → Hiring process → FAQ → CTA |
| **Insights** `/insights` | Hero → Topic filters → Featured post → Posts list → Newsletter CTA |
| **Privacy** `/privacy` | Content only (no Hero; use Section + prose) |
| **Terms** `/terms` | Content only |
| **404** `/not-found` | CTA + link home |

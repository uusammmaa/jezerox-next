# JezeroX Software Agency Website Plan

## Current status and next steps

- **Done:** Steps 1–4; Steps 5–9 (all pages); **Step 10 (Backend integration)** — Contact form with Resend email service, dedicated email subdomain (`contact.jezerox.com`), rate limiting, and honeypot spam protection; **Step 11 (SEO and analytics)** — metadata, structured data, sitemap, robots.txt, Open Graph/Twitter cards, Vercel Analytics; **Step 12 (QA and security)** — security headers (`src/proxy.ts`), skip link, Lighthouse audit, `plan/QA_REPORT.md`; **Step 13 (Launch)** — deployed to Vercel, custom domains `jezerox.com` and `www.jezerox.com` configured via cPanel DNS.
- **Reference:** `NEXT_STEPS.md` = what to build next; `COMPONENTS.md` = shared components + design consistency + section checklist per page; `DESIGN_SYSTEM.md` = tokens and specs.

---

## Goals and constraints

- Build a modern, SEO-friendly software agency site for JezeroX.
- Use a consistent design system and modern motion.
- Keep security-first; if backend is needed, use Node.js.
- Produce UX designs in Stitch (<https://stitch.withgoogle.com/>).

## Brand foundation (initial direction)

- Agency name: JezeroX
- Core positioning: product engineering for ambitious teams.
- Primary tagline: "Build faster. Scale smarter."
- Secondary tagline: "From MVP to enterprise, JezeroX delivers software that performs."
- Value pillars: product strategy, design, engineering, growth.
- Voice: confident, concise, technical, human.
- CTAs: "Start a project", "See our work", "Book a call".

## Sitemap (pages and routes)

- Home `/`
- Services `/services`
- Service detail template `/services/[slug]`
- Industries `/industries`
- Case studies `/work`
- Case study detail `/work/[slug]`
- About `/about`
- Careers `/careers`
- Blog / Insights `/insights`
- Blog post template `/insights/[slug]`
- Contact `/contact`
- Legal: Privacy `/privacy`, Terms `/terms`
- System: 404 `/not-found`

## Page sections (all pages)

### Home

- **Layout:** Single-column stack (no two-column splits). Each section full width; where a design has left/right blocks, the right block goes below the left block.
- Hero (tagline, subheading, CTA, product-style visual)
- Social proof (logos, then stats below)
- Services overview (6 cards)
- Featured case studies (2-3)
- Process overview (Discover > Design > Build > Scale)
- Industry focus
- Testimonials
- Insights preview
- Final CTA + contact teaser

### Services (index)

- Hero (service promise)
- Service categories (grid)
- Engagement models (fixed scope, retainer, team extension)
- Delivery process
- Tech stack and tools
- Case study highlights
- FAQ
- CTA

### Service detail (template)

- Hero (service-specific promise, CTA)
- Problems we solve
- Approach and deliverables
- Example timeline
- Tech stack
- Relevant case study
- FAQ
- CTA

### Industries

- Hero
- Industry cards (Fintech, Health, Retail, Logistics, SaaS, Education)
- Outcomes by industry
- Case study links
- CTA

### Case studies (index)

- Hero
- Case study cards with filters
- Outcomes highlights
- CTA

### Case study detail

- Hero (client, challenge, results)
- Context and goals
- Solution (process, tech)
- Results (metrics)
- Screenshots / visuals
- Testimonial
- CTA

### About

- Hero (mission)
- Story and timeline
- Values
- Leadership bios
- Culture and principles
- Security and compliance
- CTA

### Careers

- Hero
- Why JezeroX (benefits, culture)
- Open roles
- Hiring process
- FAQ
- CTA

### Insights (blog)

- Hero
- Topic filters
- Featured post
- Posts list
- Newsletter CTA

### Blog post

- Title, hero image
- Content
- Author card
- Related posts
- CTA

### Contact

- Hero
- Contact form
- Project brief checklist
- Calendly/booking CTA
- Locations / hours

### Legal / system

- Privacy policy
- Terms of service
- 404 with CTA

## Content inventory (copy + assets)

### Headlines and copy (drafts)

- Home hero: "Build faster. Scale smarter."
- Subheading: "JezeroX is a software agency that designs, builds, and scales digital products for startups and enterprises."
- Services intro: "Product strategy, UX, engineering, and growth in one expert team."
- Process: "Discover, Design, Build, Scale - a proven delivery system."
- CTA: "Tell us about your product. We will respond in 24 hours."

### Proof points (placeholder until real data)

- "50+ shipped products"
- "95% client retention"
- "5+ industries served"

### Visual direction (dark, futuristic, modern)

- **Vibe:** Dark-first, high-contrast, tech-forward. Inspired by premium product/agency sites but **fully original**—no reuse of purchased or third-party theme assets to avoid copyright issues.
- **Differentiation:** Our own color story (deep navy + electric blue/teal accents, no yellow–purple gradient), typography (Space Grotesk + Inter), and illustration style (geometric/abstract, single-accent line work, or mesh/grid visuals—not character-based line art from other themes).
- **Futuristic cues:** Subtle glow on accents, optional grid/mesh backgrounds, glassmorphism on cards where it fits, crisp borders and sharp hierarchy.

### Logo direction

- **Primary logo:** design-02.png — full logo (symbol + wordmark "JEZEROX") with gradient. Used in header and footer.
- **Symbol only:** logo-mark.png — for favicon, JSON-LD structured data, and compact contexts.
- Variants in `/public`: logo-black.png, logo-white.png, logo-transparent.png, logo-symbol-black.png, logo-symbol-white.png.

### Logo assets (in `/public`)

Naming omits brand prefix; context is JezeroX. Files:

- `logo-design.ai` — Source design
- `design-02.png` — **Primary logo** (symbol + wordmark, gradient). Used in header and footer.
- `design-01.jpg`, `design-01.png`, `design-02.jpg` — Design variants
- `logo-black.png`, `logo-white.png`, `logo-transparent.png` — Full logo variants
- `logo-mark.png` — Symbol only (favicon, JSON-LD, compact contexts)
- `logo-symbol-black.png`, `logo-symbol-white.png` — Symbol variants

### Image direction

- Hero: abstract 3D shape, mesh, or generative wave in **our palette** (navy, blue, teal)—no stock theme gradients.
- Service visuals: geometric icons, isometric tech scenes, or abstract line diagrams in brand colors only.
- Case studies: product UI mockups in device frames; optional subtle grid or glow behind.
- Team: candid photography or simple avatar placeholders.
- **Avoid:** Character-based line-art illustrations that mirror purchased themes; use geometric/abstract or custom-commissioned art only.

## Motion and interaction plan

- Hero: subtle mesh/gradient animation in brand colors (CSS or Lottie); optional soft glow pulse on CTA.
- Section reveal on scroll (staggered cards, subtle fade-up).
- Hover: micro-interactions on cards and buttons (border glow, slight lift); accent glow on primary CTAs.
- Stat counters (respect reduced motion).
- Page transitions (fade/slide).
- Sticky CTA on long pages.
- Futuristic touch: very subtle grid or scan-line overlay on hero/sections where it supports the mood (optional, low opacity).

## Design system (initial specs) — dark, futuristic, modern

- **Visual direction:** Dark-first, high-contrast, original execution. No copied theme assets; all visuals in our palette and style.

- Colors:
  - Primary: deep navy `#0B1220`
  - Accent: electric blue `#3C7DFF`
  - Secondary: teal `#1EC9A8`
  - Neutrals: `#F5F7FB`, `#9AA3B2`, `#1F2A3A`
  - Optional: subtle glow (e.g. `box-shadow` with accent at low opacity) for buttons/cards.
- Typography:

  - Headings: "Space Grotesk"
  - Body: "Inter"
  - Monospace: "JetBrains Mono" (small usage)

- Layout:
  - 12-column grid, 1200-1320 max width
  - 8px spacing scale

- Core components:
  - Buttons (primary, secondary, ghost); primary can use soft glow on hover.
  - Cards (service, case study, post); optional thin border or glass effect.
  - Badges, pills
  - Accordion (FAQ)
  - Tabs / filters
  - Forms (inputs, selects, textarea, checkbox)

## SEO strategy (core)

- Keyword clusters:
  - "software agency", "product development agency", "custom software development"
  - "MVP development", "UX UI design agency", "SaaS development"

- On-page:
  - Unique titles and meta descriptions per page
  - Structured data: Organization, Website, Article, Breadcrumb
  - Internal linking between services and case studies
  - Image alt text and descriptive filenames

- Content:
  - 8-12 cornerstone posts mapped to services
  - Case studies optimized with outcomes and stack

- Technical:
  - Clean URLs, sitemap.xml, robots.txt
  - Open Graph and Twitter cards
  - Performance targets: LCP < 2.5s, CLS < 0.1

## Security and compliance

- Secure contact form with server-side validation.
- Anti-spam (hCaptcha or honeypot).
- Rate limiting and request logging.
- Content Security Policy and security headers.
- Privacy policy covering data collection and cookies.

## Backend needs (Node.js if required)

- Contact form API (email + CRM webhook).
- Newsletter signup (optional integration).
- Careers application handler.
- CMS optional: MDX or headless CMS later.

## Step-by-step task list

1. **Discovery and competitor review** done
   - Audit tkxel.com and 10pearls.com for structure and best practices.
   - List sections, CTAs, and proof patterns that work well.
   - Decide what JezeroX should do differently.
   - Deliverable: notes file with key patterns and decisions.

2. **Finalize brand messaging** done
   - Choose final tagline + subheading.
   - Define value pillars and CTA set.
   - Draft core copy for Home and Services.
   - Deliverable: `BRAND_MESSAGING.md` with approved messaging.

3. **Information architecture** done
   - Confirm sitemap and URL structure.
   - Create page-to-section matrix.
   - Deliverable: finalized IA and section list.

4. **Design system definition** done
   - Lock colors, typography, spacing, components.
   - Define button styles, card styles, form fields.
   - Deliverable: tokens and component spec.

5. **UX design in Stitch**
   - Build frames for all key pages using the design system.
   - Create component library and reusable sections.
   - Deliverable: Stitch design file links.

6. **Content production**
   - Write page copy for all sections.
   - Create case study narratives (placeholders if needed).
   - Deliverable: content files per page.

7. **Asset creation** ✅ Done
   - Create logo set and favicon.
   - Produce hero illustration, service icons, and case study images.
   - Deliverable: SVG/PNG assets in `/public`.
   - **Done:** Logo set in `/public`. design-02.png in header and footer; logo-mark.png as favicon and JSON-LD; logo-black/white/transparent, logo-symbol-black/white, design variants. See "Logo assets" above.

8. **Motion and interaction**
   - Implement key animations and hover states.
   - Respect reduced motion preferences.
   - Deliverable: motion spec + implemented components.

9. **Frontend implementation**
   - Build layout, header, footer, and pages.
   - Implement reusable components and section blocks.
   - Deliverable: fully responsive site.
   - **Done:** Home page; **Services** page (`src/app/services/page.tsx`); **Contact** page (`src/app/contact/page.tsx`) with form, project brief checklist, book-a-call CTA, locations; **Work** page (`src/app/work/page.tsx`) with case study cards, filters, outcomes; **About** page (`src/app/about/page.tsx`) with mission hero, story/timeline, values, leadership bios, culture, security/compliance; **Industries** page (`src/app/industries/page.tsx`) with industry cards, outcomes, case study links; **Careers** page (`src/app/careers/page.tsx`) with hero, why JezeroX benefits, open roles, hiring process timeline, FAQ, CTA; **Insights** page (`src/app/insights/page.tsx`) with hero, topic filters, featured post, posts list, newsletter CTA; **Privacy** page (`src/app/privacy/page.tsx`) with privacy policy content; **Terms** page (`src/app/terms/page.tsx`) with terms of service content; **404** page (`src/app/not-found.tsx`) with 404 heading, message, and CTAs; shared components (`src/components/ui`, `src/components/layout`, `src/components/home`, `src/components/contact`, `src/components/work`, `src/components/insights`); Header with active page highlighting; contact form server action (`src/actions/contact-actions.ts`); design tokens (`globals.css`); `plan/COMPONENTS.md`, `plan/NEXT_STEPS.md`.
   - **Done:** All core pages complete. Step 13 (Launch) complete.

10. **Backend integration (if needed)** ✅ Done
    - Create Node.js API routes for forms.
    - Add validation, rate limiting, and email delivery.
    - Deliverable: secure contact pipeline.
    - **Done:** Contact form integrated with Resend email service (`resend` package), dedicated email subdomain for sending/receiving (`contact.jezerox.com`), rate limiting utility (`src/lib/rate-limit.ts` - 5 requests per 15 minutes per IP/email), honeypot spam protection (hidden website field), email sending with HTML and text templates. Environment variables documented in `.env.example` / `.env.local`.

11. **SEO and analytics** ✅ Done
    - Add metadata, schema, sitemap, and robots.
    - Add analytics and event tracking.
    - Deliverable: SEO checklist complete.
    - **Done:** `src/lib/seo.ts` (metadata helper with `createPageMetadata`); `src/app/sitemap.ts`; `src/app/robots.ts`; `src/components/seo/json-ld.tsx` (Organization + WebSite schema); root layout metadata (metadataBase, openGraph, twitter); per-page metadata with canonical, OG, Twitter on all 11 pages; `SITE_URL` in `.env.example`; Vercel Analytics (`@vercel/analytics`). Image alt audit: no images present (placeholders use divs).

12. **QA and security review** ✅ Done
    - Accessibility checks (WCAG AA).
    - Performance checks (Lighthouse).
    - Security headers validation.
    - Deliverable: QA report and fixes.
    - **Done:** Security headers via `src/proxy.ts` (X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy, CSP); skip link and `.sr-only` for accessibility; Lighthouse scores: Performance 97, Accessibility 96, Best Practices 96, SEO 100. See `plan/QA_REPORT.md`.

13. **Launch** ✅ Done
    - Final content review.
    - Deploy and monitor.
    - Deliverable: live site with monitoring.
    - **Done:** Deployed to Vercel. Live at https://jezerox.com and https://www.jezerox.com. DNS configured via cPanel (A record for apex, CNAME for www). Vercel Analytics active.

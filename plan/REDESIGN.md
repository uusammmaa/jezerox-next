# JezeroX Redesign — Master Plan ("Aurora")

> Direction codename: **Aurora**. This document supersedes the visual direction in
> `DESIGN_SYSTEM.md`. Copy in `BRAND_MESSAGING.md` stays valid; tokens here replace
> the navy/blue/teal palette. Read this first, then `STATUS.md` for page inventory.

---

## 0. Why the current site reads as generic (the honest diagnosis)

Five concrete tells, each fixable:

1. **The logo and the site are two different brands.** The JezeroX mark is a vivid
   indigo → violet → magenta → gold gradient. The site is navy, blue, and teal.
   Nothing on the page echoes the one distinctive asset you own.
2. **Everything is centered.** Hero, every section heading, most content. Centered
   stacks are the number-one signal of a template. Real studios compose asymmetrically.
3. **Every image is a gray box.** `aspect-video rounded-md bg-bg-surface-2` appears in
   Home, Services, Work, Insights. A software agency that shows no software looks unproven.
4. **The type pairing is the "safe AI" default.** Space Grotesk + Inter is the most
   over-used combination in the category. It is not wrong; it is invisible.
5. **The proof is invented.** Testimonials say *"Placeholder — Client"*. Metrics like
   "40% faster time-to-market", "99.9% uptime", "Team of 20+", "Founded 2019" appear to
   be fabricated. Beyond credibility, for a US LLC this is FTC endorsement-rules exposure.
   See §7.

---

## 1. Locked decisions

| Decision | Choice |
|----------|--------|
| Brand / entity | **JezeroX** is the public brand; **Skycap LLC** appears in footer, legal pages, contracts, and schema.org. Tagline: *"JezeroX — a Skycap LLC company."* |
| Palette | **Dark ink + logo gradient** (Aurora). Full tokens in §2. |
| Motion | **WebGL showpiece** — animated shader flow-field hero + a motion library for orchestrated reveals and micro-interactions. |
| Imagery | **Custom brand art + product-UI mockups + AI system diagrams.** No stock photography. |
| Positioning | Software development, **AI, and AI automation** and everything adjacent — lead the story with AI systems, not generic "product engineering." |

---

## 2. Design system v2 — the DRY core

All tokens live as CSS custom properties in `globals.css` (`:root`) and are exposed to
Tailwind v4 via `@theme inline`. **No component hard-codes a hex value** — everything
references a token. This is the DRY contract for the whole redesign.

### 2.1 Color tokens

```css
/* Ground — near-black with a faint violet bias (chosen, not pure #000) */
--ink-950: #08070C;  /* page background            */
--ink-900: #0D0B14;  /* deep surface               */
--ink-850: #100D18;  /* surface / cards            */
--ink-800: #171320;  /* elevated surface           */
--ink-700: #221B30;  /* hairline-strong / borders  */
--ink-600: #2E2540;  /* raised border              */

/* Brand gradient stops — sampled from the JezeroX mark */
--indigo-500:  #4B4ACF;
--violet-500:  #8A3AA6;
--magenta-500: #C42F86;
--amber-400:   #FFD34E;
--amber-500:   #F5B324;   /* pressed / deeper amber */

/* Text — violet-biased greys, not neutral grey */
--text-primary:   #F3F0F9;
--text-secondary: #C6BFD8;
--text-muted:     #A9A2BD;
--text-faint:     #6E6784;

/* Borders / lines */
--line-subtle:  rgba(243, 240, 249, 0.08);
--line-strong:  rgba(243, 240, 249, 0.14);

/* Accent aliases (semantic) */
--accent:        var(--magenta-500);  /* primary interactive accent */
--accent-warm:   var(--amber-400);    /* energy / hover / highlight  */
--accent-cool:   var(--indigo-500);   /* secondary / links           */

/* Status — kept distinct from the brand accent on purpose */
--success: #35C99A;
--warning: #F5B324;
--error:   #F0556A;
--focus:   #A78BFF;
```

### 2.2 The brand gradient (single most important token)

```css
--gradient-brand: linear-gradient(
  100deg,
  var(--indigo-500)  0%,
  var(--violet-500)  38%,
  var(--magenta-500) 66%,
  var(--amber-400)   100%
);
--gradient-brand-soft: linear-gradient(   /* low-alpha wash for glows/fills */
  100deg,
  rgba(75,74,207,0.14) 0%,
  rgba(196,47,134,0.14) 60%,
  rgba(255,211,78,0.14) 100%
);
```

**Usage rules (to avoid rainbow soup):**
- The gradient appears on **at most one hero word**, primary CTA, icon tiles, and thin
  rules/underlines. Never on body text, never on large fills at full saturation.
- Everything else is ink + one text tone. Spend the boldness in one place per viewport.

### 2.3 Typography (production)

Deliberately **not** Space Grotesk + Inter.

| Role | Face | Loaded via | Notes |
|------|------|-----------|-------|
| Display / headings | **Bricolage Grotesque** | `next/font/google` | Characterful editorial grotesque, variable weight. |
| Body / UI | **Geist** | `geist` package (Vercel) or `next/font/google` | Clean, technical, ties to the Next.js stack. |
| Data / eyebrows / code | **Geist Mono** | same | Uppercase eyebrows, metrics, tech tags. |

Type scale (rem, 1rem = 16px), letter-spacing tightens as size grows:

```
display-xl  clamp(3.25, 8vw, 6.5)  / 1.02 / -0.03em   (hero)
display-l   clamp(2.5, 5vw, 4)     / 1.05 / -0.025em
h2          clamp(2, 3.5vw, 3)     / 1.1  / -0.02em
h3          1.5   / 1.2  / -0.01em
h4          1.25  / 1.3
body-l      1.125 / 1.6
body        1.0   / 1.65
mono-eyebrow 0.75 / 1.4 / 0.22em / uppercase
```

Rules: headings get `text-wrap: balance`; running text capped near 65ch; eyebrows are
Geist Mono uppercase with wide tracking. One editorial serif-italic accent (system serif)
is permitted for a single pull-quote moment per page — used with restraint.

### 2.4 Space, radius, shadow, glow, motion

```css
/* 4px base scale */
--space: 4,8,12,16,24,32,48,64,96,128,160 (px)
--section-y: clamp(5rem, 10vw, 9rem);

--radius-sm: 10px;  --radius-md: 14px;  --radius-lg: 20px;
--radius-xl: 28px;  --radius-2xl: 36px; --radius-pill: 9999px;

/* Shadows tuned for a dark ground (cool, low) */
--shadow-md: 0 12px 40px rgba(0,0,0,0.45);
--shadow-lg: 0 28px 80px rgba(0,0,0,0.55);

/* Glow — brand-tinted, low opacity for a11y */
--glow-magenta: 0 0 40px rgba(196,47,134,0.28);
--glow-amber:   0 0 32px rgba(255,211,78,0.20);

/* Glass */
--glass-bg: rgba(19,15,28,0.55);
--glass-blur: 14px;

/* Motion */
--ease-out: cubic-bezier(0.16, 1, 0.3, 1);
--ease-in-out: cubic-bezier(0.65, 0, 0.35, 1);
--dur-fast: 180ms; --dur: 320ms; --dur-slow: 620ms;
```

---

## 3. Component architecture (DRY)

Pages **compose primitives**; they do not repeat Tailwind class soup. Today the same
`font-(family-name:--font-space-grotesk) text-2xl font-semibold …` heading string is
pasted into ~10 files — that ends.

### 3.1 Keep & upgrade
- `Button` — add `gradient` variant (brand gradient fill), keep primary/secondary/ghost, add magnetic-hover option.
- `Card` — retokenize to ink + `--line-subtle`; add `interactive` and `spotlight` (cursor-follow glow) variants.
- `Container`, `Section` — keep; `Section` gains `tone` prop (`page | surface | elevated`) so alternating backgrounds are declarative, not ad-hoc.

### 3.2 New shared primitives (`src/components/ui/`)
| Primitive | Purpose |
|-----------|---------|
| `GradientText` | wraps a word/phrase in the brand gradient clip. One import, no repeated bg-clip soup. |
| `Eyebrow` | Geist Mono uppercase label — replaces the repeated `text-sm font-bold tracking-[0.2em]`. |
| `SectionHeading` | eyebrow + h2 + optional lede, with alignment prop. Kills the pasted heading block. |
| `Reveal` | motion wrapper: fade/slide/clip-up on scroll, respects reduced-motion. |
| `Marquee` | infinite horizontal scroller (capabilities, logos, tech). |
| `Bento` / `BentoCell` | asymmetric grid system for services/features. |
| `StatCard` | metric + label + optional source footnote (see §7). |
| `IconTile` | gradient-bordered icon container (services, values). |
| `GlowOrb` | positioned ambient gradient blob (decor). |
| `AuroraField` | the WebGL flow-field canvas + static fallback (§4). |
| `LogoMark` / `Wordmark` | the real logo assets, sized/variant-aware. |
| `Divider` | hairline / gradient rule. |
| `Badge`, `Pill`, `TechTag` | small labels. |

### 3.3 Feature components
Home sections, `work/CaseStudiesGrid`, `insights/PostsGrid`, `contact/ContactForm`
are refactored to consume the primitives above. No visual value is hard-coded.

---

## 4. Motion strategy

### 4.1 Hero — `AuroraField` (the showpiece)
- Raw **WebGL** fragment shader (no heavy dependency needed for the field itself):
  domain-warped flow of the four brand colors, subtle film grain, soft vignette,
  cursor-reactive warp center. Runs at a capped DPR for perf.
- **Fallbacks, in order:** `prefers-reduced-motion` or no-WebGL → a static CSS
  conic/radial gradient mesh (identical palette). Never a blank box.
- Optional upgrade: the JezeroX **X-mark as real 3D geometry** via `@react-three/fiber`
  + `three`, lazy-loaded and `dynamic({ ssr:false })`, with the shader field as its
  backdrop. Gated behind an intersection + capability check so it never blocks LCP.

### 4.2 Orchestration
- **Page-load:** hero eyebrow → headline words (staggered clip-up) → subhead → CTAs.
- **Scroll:** `Reveal` via IntersectionObserver, staggered per group. One-shot (no replay).
- **Micro:** magnetic primary CTA, spotlight cards, animated gradient underline on links,
  count-up on real stats, marquee.
- **Route:** View Transitions API for cross-page continuity (progressive enhancement).

### 4.3 Contracts
- **Reduced motion:** every animation has a static end-state; WebGL freezes to fallback.
- **Perf budget:** LCP < 2.5s, CLS ~0, Lighthouse Perf ≥ 92 / A11y ≥ 98. Motion lib
  (`motion`, ~big but tree-shaken) and three.js are **lazy** and off the critical path.

---

## 5. Imagery & art direction (no gray boxes, no stock)

1. **Custom brand art** — gradient-mesh / particle renders derived from the logo, exported
   as optimized WebP/AVIF, used for hero backdrops, section dividers, OG image.
2. **Product-UI mockups** — dark dashboard / AI-workflow / chat-agent screens inside clean
   browser & device frames. Designed representative UI where real screenshots don't exist yet.
3. **AI system diagrams** — hand-built **SVG** of AI pipelines, agent architectures, and
   automation flows. This is the differentiator that signals real technical depth.
4. **OG/social image** — 1200×630 brand-art card with wordmark + tagline (fixes the STATUS.md gap).

Pipeline: everything through `next/image` with explicit sizes, AVIF/WebP, priority only on
LCP asset, `public/` for static art. Add a small `art/` subfolder + a generation note.

---

## 6. Page-by-page

**Global chrome**
- **Header:** slimmer glass bar, real wordmark, animated gradient underline on active nav,
  gradient CTA. Mobile menu becomes a full-screen overlay with staggered links.
- **Footer:** restructured — brand + *"a Skycap LLC company"*, Company / Services /
  Resources / Legal columns, real social, newsletter opt-in (optional), entity line.

**Home** (new section order):
`AuroraField Hero → Capability marquee → Services bento (AI-led) → How we work (real 3-4 step
process, numbered) → Selected work (real or honestly-empty) → AI/automation spotlight (diagram)
→ Proof (honest stats + real or omitted testimonials) → Insights → Final CTA (gradient panel)`.

**Other routes** (all move off centered-stack templates, adopt primitives, replace gray boxes):
- `/services` + **new** `/services/[slug]` detail (Hero; problems; approach & deliverables;
  timeline; stack; relevant case study; FAQ; CTA).
- `/work` + **new** `/work/[slug]` case-study detail (only real work, or an honest
  "engagements under NDA / early-stage" state — not fabricated metrics).
- `/about` — story, values, Skycap LLC entity, team (real or "founder-led / building the team").
- `/industries`, `/careers`, `/insights` + **new** `/insights/[slug]`, `/contact`,
  `/privacy`, `/terms`, `/not-found` — all restyled to Aurora + primitives.

---

## 7. Content honesty & legal (Skycap LLC)

**Non-negotiable before launch.** Replace fabricated proof with honest states:
- Testimonials: use **real** quotes with attribution, or **remove the section** until you have them.
- Metrics/case studies: use **real** numbers with a source, or present capability-framed copy
  ("built for 99.9%-uptime targets") that doesn't assert an unverified result. `StatCard`
  supports an optional source footnote for exactly this.
- Trust logos: show **real** clients/partners or drop the strip — no anonymous gray bars.
- **Skycap LLC**: footer entity line, `/privacy` + `/terms` controller = Skycap LLC, and
  `schema.org` `Organization.legalName = "Skycap LLC"`, `foundingDate` only if true.

Rationale: US FTC endorsement guidelines prohibit fabricated testimonials and unsubstantiated
performance claims. This protects the LLC and, honestly, converts better than obvious filler.

---

## 8. Tech & dependencies

- Add: `motion` (Framer Motion, tree-shaken, lazy), `three` + `@react-three/fiber` +
  `@react-three/drei` (lazy, `ssr:false`) for the optional 3D mark, `geist` (fonts),
  `clsx` + `tailwind-merge` (a `cn()` helper for the primitives).
- Keep: Next 16, React 19, Tailwind v4, Resend, zod, lucide-react, Vercel Analytics.
- `next.config.ts`: enable `images` formats (AVIF/WebP); keep the security headers in `proxy.ts`
  (CSP already allows `img-src https:` — fine for self-hosted art).
- Tokens flow: `globals.css` `:root` → `@theme inline` → Tailwind utilities. One source of truth.

---

## 9. Phased roadmap (with acceptance criteria)

| Phase | Scope | Done when |
|-------|-------|-----------|
| **0 — Foundation** | Aurora tokens in `globals.css`; logo/palette swap; `cn()` + primitives (`GradientText`, `Eyebrow`, `SectionHeading`, `Reveal`, `IconTile`, `Divider`); fonts wired via `next/font`. | Site builds on new tokens; primitives unit-composable; no hard-coded hex in touched files. |
| **1 — Home** | `AuroraField` hero + fallback; marquee; services bento; process; AI spotlight w/ first SVG diagram; honest proof; final CTA; new header/footer. | Home fully Aurora; Lighthouse Perf ≥ 92 / A11y ≥ 98; reduced-motion verified; zero gray boxes. |
| **2 — Services & Work** | `/services` + `/services/[slug]`; `/work` + `/work/[slug]`; real/honest content model; product-UI mockups. | Both index + detail templates live; no fabricated metrics. |
| **3 — Rest** | About, Industries, Careers, Insights + `[slug]`, Contact, Privacy, Terms, 404. | All routes Aurora + primitives; forms accessible. |
| **4 — Polish & launch** | OG image; full a11y AA pass; perf/LCP; SEO/schema (Skycap LLC); cross-browser + mobile QA; view transitions. | Lighthouse ≥ 95 across the board; WCAG AA; STATUS.md follow-ups closed. |

---

## 10. Definition of done (quality bar)

- WCAG 2.2 AA: contrast, focus-visible, keyboard, reduced-motion, semantic landmarks.
- DRY: every color/space/type value is a token; every repeated block is a primitive.
- No placeholder copy, no gray-box images, no fabricated proof anywhere.
- Lighthouse ≥ 95 Perf/A11y/BP/SEO on Home; motion lazy and off the LCP path.
- Skycap LLC present in footer, legal, and schema.
- Works and looks intentional at 360px, 768px, 1280px, 1920px.

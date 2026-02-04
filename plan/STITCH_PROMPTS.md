# Stitch design prompts — JezeroX

Copy and paste the prompts below into Stitch (https://stitch.withgoogle.com/) to generate designs. Use the **Master prompt** first for the overall direction, then use **Page-specific prompts** for each screen.

---

## Master prompt (use first for direction)

```
Design a dark, futuristic, modern website for JezeroX, a software product engineering agency. Brand: "Build faster. Scale smarter." — product strategy, design, engineering, and growth for ambitious teams.

Visual style:
- Dark-first: background deep navy #0B1220, surfaces #111A2B and #1F2A3A. High contrast, premium tech feel.
- Accents: electric blue #3C7DFF for primary CTAs and links, teal #1EC9A8 for secondary highlights. No yellow–purple gradients.
- Typography: Space Grotesk for headings (bold, geometric), Inter for body. Clean hierarchy, generous spacing, 12-column grid, max width ~1200–1320px.
- Futuristic touches: subtle blue/teal glow on primary buttons and key cards, optional thin grid or mesh in background at low opacity, optional glassmorphism (frosted panels) on hero or cards. Sharp corners or medium radius (8–16px).
- Illustrations: geometric, abstract, or mesh/grid only — no character-based line art. Use brand colors only (navy, blue, teal). Hero can be abstract 3D shape, wave, or mesh.
- Original execution: no copied theme look; this is a custom design system.

Components: primary button (blue, soft glow on hover), secondary (outline), ghost; cards with subtle border and optional glow on hover; badges/pills for tags; clean form inputs. CTAs: "Start a project", "See our work", "Book a call".

Output: clean, professional, conversion-focused. Accessible contrast and clear hierarchy.
```

---

## Redesign (Home) — use with screenshot + Stitch "Redesign" mode

Use this when you attach the current JezeroX homepage screenshot in Stitch’s **Redesign** mode. It tells Stitch to keep the dark futuristic vibe but use our design system and include all sections from the plan.

```
Redesign this homepage for JezeroX. Keep the same dark, futuristic, modern vibe and overall flow but make it clearly original (our colors, typography, and visuals only — no copy of any theme).

Design system:
- Background: deep navy #0B1220, surfaces #111A2B and #1F2A3A.
- Accents: electric blue #3C7DFF (primary CTAs, links), teal #1EC9A8 (secondary). No yellow–purple or multi-color gradients.
- Typography: Space Grotesk headings, Inter body. 12-column grid, max width ~1200–1320px.
- Logo: wordmark "JezeroX" with single accent (blue or teal).
- Visuals: geometric, abstract, or mesh/grid only — no character-based line art. Navy, blue, teal only.
- Futuristic: subtle blue/teal glow on CTAs and key cards; optional grid/mesh background; optional glassmorphism; radius 8–16px.

Include these sections in this order (from top to bottom):

1. Header: JezeroX logo (left). Nav: Home, Services, Industries, Work, About, Insights, Careers. "Contact" as primary CTA button (right).

2. Hero
   - Headline: "Build faster. Scale smarter."
   - Subhead: "JezeroX is a product engineering partner for ambitious teams. We design, build, and scale secure software from MVP to enterprise."
   - Supporting line: "One senior team across strategy, design, engineering, and growth."
   - CTAs: "Start a project" (primary), "See our work" (secondary).
   - Right: abstract geometric or mesh hero visual (navy/blue/teal, no character art).

3. Social proof
   - Headline: "Trusted by teams building high-impact products."
   - Supporting: "Partners across fintech, health, SaaS, logistics, retail, and education."
   - Client logos row (placeholder) + stats: 50+ shipped products, 95% client retention, 5+ industries served.

4. Services overview
   - Headline: "End-to-end product engineering."
   - Intro: "Strategy, UX, engineering, and growth in one focused team."
   - Six cards in grid: Product strategy | UX and UI design | Web and mobile engineering | Data, AI, and automation | Cloud, DevOps, and security | Growth and optimization. Each: icon, title, short line.

5. Featured case studies
   - 2–3 case study cards (image, client/outcome, link). Headline optional e.g. "See our work."

6. Process overview
   - Headline: "Discover. Design. Build. Scale."
   - Intro: "A proven delivery system with clear outcomes at every stage."
   - Four steps: Discover (1–2 weeks) | Design (2–4 weeks) | Build (4–12+ weeks) | Scale (ongoing).

7. Industry focus
   - Headline: "Built for regulated and high-growth teams."
   - Supporting: "Deep experience in fintech, health, SaaS, logistics, retail, and education."
   - Pills or cards: Fintech, Health, Retail, Logistics, SaaS, Education.

8. Testimonials
   - Headline: "Teams trust JezeroX to deliver."
   - Supporting: "Clear outcomes, predictable delivery, and software that performs."
   - 1–2 quote cards with attribution.

9. Insights preview
   - Headline: "Insights for product leaders."
   - Supporting: "Engineering playbooks, AI productization, and growth lessons."
   - 2–3 post preview cards or link to /insights.

10. Final CTA
    - Headline: "Ready to build your next product?"
    - Supporting: "Tell us about your goals and we will respond in 24 hours."
    - CTA button: "Start a project" (primary, subtle glow).

11. Footer: Company (About, Careers, Contact) | Services | Resources (Insights) | Legal (Privacy, Terms).

Output: professional, conversion-focused, high contrast. Same general structure as the reference but our palette, type, and visual style throughout.
```

---

## Layout fix: right section below left (single-column stack)

Use this in Stitch **Redesign** with your current homepage screenshot (e.g. `stitch/screen.png`) to get the same design but with stacked layout instead of two columns.

```
Same design and content, but change the layout to single-column stacking:

- Where there is a left section and a right section side by side, put the RIGHT section BELOW the LEFT section (full width each).
- Trust & stats: "Trusted by teams at" + logos first (full width), then the three stats cards (50+ products, 95% retention, 5+ industries) below.
- Services & case studies: "Services Overview" (six cards) full width first, then "Featured Case Studies" (2–3 cards) full width below.
- Process & testimonials: "Our Process" (Discover, Design, Build, Scale) full width, then "Industry Focus" (six industry cards) full width, then "Testimonials" full width below.
- Insights & CTA: "Insights" (article cards) full width first, then "Final CTA" (Ready to build your next product? + button) full width below.

Keep header, hero, and footer as they are. No two-column layouts on the page — everything stacked vertically, left content first then right content below.
```

---

## Home page (from scratch)

```
JezeroX homepage, dark futuristic modern. Sections in order:

1. Hero: headline "Build faster. Scale smarter." — subhead "JezeroX is a product engineering partner for ambitious teams. We design, build, and scale secure software from MVP to enterprise." Primary CTA "Start a project", secondary "See our work". Right side: abstract geometric or mesh visual in navy/blue/teal (no character art).

2. Social proof: "Trusted by teams building high-impact products." — client logos row (placeholder) + stats: 50+ shipped products, 95% client retention, 5+ industries.

3. Services overview: "End-to-end product engineering." Six cards in grid: Product strategy, UX and UI design, Web and mobile engineering, Data/AI/automation, Cloud/DevOps/security, Growth and optimization. Each card: icon, title, short line. Use electric blue #3C7DFF and teal #1EC9A8 accents, navy surfaces.

4. Process: "Discover. Design. Build. Scale." — four steps in a row or timeline with short labels (Discover 1–2 weeks, Design 2–4 weeks, Build 4–12+ weeks, Scale ongoing).

5. Industry focus: "Built for regulated and high-growth teams." — Fintech, Health, SaaS, Logistics, Retail, Education as pills or small cards.

6. Testimonials: one or two quote cards with attribution.

7. Final CTA: "Tell us about your product." + Contact teaser. Primary button with subtle glow.

Header: JezeroX wordmark (left), nav: Home, Services, Industries, Work, About, Insights, Careers — Contact as primary CTA button. Footer: company links, services, legal. Dark navy background throughout, Space Grotesk + Inter, 12-column grid.
```

---

## Services index page

```
JezeroX Services page, same dark futuristic style (navy #0B1220, blue #3C7DFF, teal #1EC9A8, Space Grotesk + Inter). Hero: "Product strategy, UX, engineering, and growth in one expert team." Then: service categories grid (same six services as home), engagement models section (fixed scope, retainer, team extension), delivery process, tech stack/tools, case study highlights, FAQ accordion, final CTA. Same header/footer as home. Clean cards, optional glow on hover.
```

---

## Contact page

```
JezeroX Contact page, dark futuristic (navy #0B1220, blue #3C7DFF, teal #1EC9A8). Hero: short headline + subhead. Main: contact form (name, email, company, message) with primary submit "Tell us about your product"; project brief checklist (bullet list); Calendly/booking CTA; locations/hours. Same header/footer. Form inputs: dark surface, subtle border, focus state with blue. One column or form left / CTA right layout.
```

---

## About page

```
JezeroX About page, dark futuristic style. Hero: mission statement. Sections: story and timeline, values (3–4 pillars), leadership bios (cards with photo placeholder, name, role), culture and principles, security and compliance, CTA. Navy backgrounds, blue/teal accents, Space Grotesk + Inter, card-based layout.
```

---

## Case studies index (/work)

```
JezeroX Work / Case studies page. Hero: "See our work" or similar. Case study cards in grid with filter pills (industry/topic). Each card: image area, title, client/industry, short outcome. Stats or outcomes highlight strip. Final CTA. Same dark system (navy, blue, teal), same header/footer.
```

---

## Short one-liner (for quick Stitch experiments)

```
Dark futuristic software agency site: JezeroX. Navy #0B1220 background, electric blue #3C7DFF and teal #1EC9A8 accents. Space Grotesk + Inter. Geometric/mesh visuals only, no character art. Subtle glow on CTAs, clean grid, "Build faster. Scale smarter."
```

---

Use the **Master prompt** to set the overall look, then run **Home page** (or another page) to get a full screen. Iterate by adding "more spacing", "stronger glow", "simplify hero", etc. as needed.

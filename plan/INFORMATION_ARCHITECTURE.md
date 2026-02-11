# Information Architecture - JezeroX

Date: 2026-01-24

## IA principles

- Keep navigation simple and conversion-focused.
- Support SEO with clear, keyword-aligned URLs.
- Ensure each page has a single primary CTA.
- Maintain consistent section ordering where possible.

## Sitemap and URL structure (confirmed)

- Home: `/`
- Services: `/services`
- Service detail: `/services/[slug]`
- Industries: `/industries`
- Case studies: `/work`
- Case study detail: `/work/[slug]`
- About: `/about`
- Careers: `/careers`
- Insights (blog): `/insights`
- Blog post: `/insights/[slug]`
- Contact: `/contact`
- Legal: `/privacy`, `/terms`
- System: `/not-found`

## Primary navigation

- Home
- Services
- Industries
- Work
- About
- Insights
- Careers
- Contact (primary CTA)

## Footer navigation

- Company: About, Careers, Contact
- Services: Services index, key service slugs
- Resources: Insights
- Legal: Privacy, Terms

## Page-to-section matrix (final)

| Page | Sections |
| --- | --- |
| `/` Home | Hero; Social proof (logos + stats); Services overview (6 cards); Featured case studies (2-3); Process overview; Industry focus; Testimonials; Insights preview; Final CTA + contact teaser |
| `/services` | Hero; Service categories (grid); Engagement models; Delivery process; Tech stack and tools; Case study highlights; FAQ; CTA |
| `/services/[slug]` | Hero; Problems we solve; Approach and deliverables; Example timeline; Tech stack; Relevant case study; FAQ; CTA |
| `/industries` | Hero; Industry cards; Outcomes by industry; Case study links; CTA |
| `/work` | Hero; Case study cards with filters; Outcomes highlights; CTA |
| `/work/[slug]` | Hero (client, challenge, results); Context and goals; Solution (process, tech); Results (metrics); Screenshots / visuals; Testimonial; CTA |
| `/about` | Hero (mission); Story and timeline; Values; Leadership bios; Culture and principles; Security and compliance; CTA |
| `/careers` | Hero; Why JezeroX (benefits, culture); Open roles; Hiring process; FAQ; CTA |
| `/insights` | Hero; Topic filters; Featured post; Posts list; Newsletter CTA |
| `/insights/[slug]` | Title and hero image; Content; Author card; Related posts; CTA |
| `/contact` | Hero; Contact form; Project brief checklist; Calendly/booking CTA; Locations / hours |
| `/privacy` | Privacy policy content |
| `/terms` | Terms of service content |
| `/not-found` | 404 with CTA |

## Slug conventions

- Use lowercase, hyphenated slugs (`/services/product-strategy`).
- Keep slugs short and keyword-aligned.
- Avoid duplicate intent across Services and Industries pages.

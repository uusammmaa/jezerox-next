# Launch Checklist — JezeroX

Use this checklist when deploying to production. Do not edit the plan file; this document is the runbook.

---

## Phase 1: Pre-Launch (Complete)

- [x] Environment variables documented in `.env.example`
- [x] Build verification: `pnpm build` succeeds
- [x] Production server: `pnpm start` runs
- [x] Content review: internal links, Calendly, Resend verified
- [x] Security headers via `src/proxy.ts` (Next.js 16)

---

## Phase 2: Deploy to Vercel

### 2.1 Connect and Configure

1. Push code to GitHub/GitLab/Bitbucket
2. Go to [vercel.com](https://vercel.com) and import the repository
3. Set **Root Directory** to `jezerox-next` if this is a monorepo
4. Framework preset: Next.js (auto-detected)

### 2.2 Environment Variables

Add these in Vercel Project Settings → Environment Variables (Production):

| Variable | Value | Notes |
| -------- | ----- | ----- |
| `SITE_URL` | `https://jezerox.com` | Production URL |
| `RESEND_API_KEY` | `re_...` | From Resend dashboard |
| `RESEND_FROM_EMAIL` | `contact@contact.jezerox.com` | Must be verified in Resend |
| `CONTACT_EMAIL` | `contact@contact.jezerox.com` | Recipient for form submissions |
| `CALENDLY_BOOKING_URL` | `https://calendly.com/...` | Book a call link |

### 2.3 Deploy

1. Deploy from `main` (or your production branch)
2. Wait for build to complete
3. Note the preview URL (e.g. `jezerox-next-xxx.vercel.app`)

### 2.4 Custom Domain

1. Project Settings → Domains
2. Add `jezerox.com` and `www.jezerox.com`
3. Follow Vercel DNS instructions (or add CNAME/A records at your registrar)
4. Choose redirect: `www` → apex or apex → `www`

### 2.5 Resend DNS (if not already done)

- Verify `contact.jezerox.com` in Resend
- Add SPF, DKIM records per Resend docs for deliverability

---

## Phase 3: Post-Launch Smoke Tests

Run these after the site is live:

- [ ] Homepage loads at production URL
- [ ] All nav links work (Home, Services, Industries, Work, About, Insights, Careers, Contact)
- [ ] Footer links work (About, Careers, Contact, Services, Insights, Privacy, Terms)
- [ ] Contact form submits and email arrives
- [ ] "Book a call" opens Calendly (correct URL)
- [ ] `/sitemap.xml` resolves
- [ ] `/robots.txt` resolves
- [ ] 404 page renders for invalid routes (e.g. `/invalid-page`)
- [ ] Run Lighthouse on production (targets: Perf 97+, A11y 96+, BP 96+, SEO 100)

---

## Monitoring

- **Vercel Analytics:** Already integrated in `src/app/layout.tsx`
- **Optional:** Add `@vercel/speed-insights` for Core Web Vitals
- **Optional:** Error tracking (e.g. Sentry) for unhandled exceptions

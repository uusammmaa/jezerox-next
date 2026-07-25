import type { Metadata } from "next";
import { GraduationCap, MapPin, Star, Briefcase } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHero, CtaBand } from "@/components/common";
import { Section, SectionHeading, Stat, TechTag, IconTile, GradientText, Reveal } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";
import { company, stats, journey, values, techGroups } from "@/lib/content";

export const metadata: Metadata = createPageMetadata({
  title: "About — Usama Akram, Founder of JezeroX",
  description:
    "JezeroX is led by Usama Akram, a senior engineer with 5+ years shipping AI automation, AI agents, and full-stack products for fintech, SaaS, and startups. A Skycap LLC company.",
  path: "/about",
});

const credentials = [
  { icon: Star, label: "4.9★ · 25+ projects (Upwork)" },
  { icon: Briefcase, label: "5+ years, enterprise + startups" },
  { icon: GraduationCap, label: "BSc (Hons) Software Engineering, Lancaster University (UK)" },
  { icon: MapPin, label: "Remote-first · Worldwide" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen">
        <PageHero
          eyebrow="About"
          title={<>One senior engineer. <GradientText>Real production experience.</GradientText></>}
          lede={`${company.brand} is the practice of ${company.founder} — bringing enterprise-grade engineering to AI automation, agents, and full-stack products, without the agency overhead.`}
        />

        {/* Founder */}
        <Section>
          <div className="grid gap-10 lg:grid-cols-[1fr_1.4fr] lg:items-center">
            <Reveal>
              <div className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-line bg-ink-850 p-10">
                <div className="aurora-fallback pointer-events-none absolute inset-0 opacity-30" aria-hidden />
                <div className="relative">
                  <div
                    className="flex h-24 w-24 items-center justify-center rounded-2xl font-display text-4xl font-bold text-[#0a0710]"
                    style={{ background: "var(--gradient-brand)" }}
                    aria-hidden
                  >
                    UA
                  </div>
                  <h2 className="mt-6 text-2xl font-bold">{company.founder}</h2>
                  <p className="font-mono text-[0.72rem] uppercase tracking-widest text-magenta">{company.founderTitle}</p>
                  <p className="mt-4 text-fg-muted">
                    Senior software engineer and top-rated freelancer. I design and ship
                    intelligent systems end to end — and I&apos;m the one who does the work.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <div>
                <p className="text-lg leading-relaxed text-fg-secondary">
                  Over 5+ years I&apos;ve built enterprise fintech dashboards, real-time AI SaaS
                  platforms, and security software — then went deep on AI automation and agents,
                  becoming a top-rated freelancer with a 4.9★ average across 25+ projects.
                </p>
                <p className="mt-4 text-lg leading-relaxed text-fg-secondary">
                  {company.brand}, operating as {company.legalName}, is how I bring that same
                  senior, production-first standard to your automation, AI, and product work.
                </p>
                <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                  {credentials.map((c) => (
                    <li key={c.label} className="flex items-start gap-3 rounded-[var(--radius-md)] border border-line bg-ink-900 px-4 py-3">
                      <c.icon className="mt-0.5 h-4 w-4 shrink-0 text-magenta" />
                      <span className="text-sm text-fg-secondary">{c.label}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </Section>

        {/* Stats */}
        <Section tone="surface">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 70}>
                <Stat value={s.value} label={s.label} note={s.note} />
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Journey */}
        <Section>
          <Reveal>
            <SectionHeading eyebrow="Journey" title={<>From enterprise to <GradientText>AI automation.</GradientText></>} />
          </Reveal>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {journey.map((j, i) => (
              <Reveal key={j.period} delay={i * 80}>
                <div className="h-full rounded-[var(--radius-xl)] border border-line bg-ink-850 p-6">
                  <div className="font-mono text-[0.7rem] uppercase tracking-widest text-magenta">{j.period}</div>
                  <h3 className="mt-3 text-lg font-semibold">{j.title}</h3>
                  <p className="mt-2 text-sm text-fg-muted">{j.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Values */}
        <Section tone="surface">
          <Reveal>
            <SectionHeading center eyebrow="How I work" title={<>Principles that <GradientText>ship.</GradientText></>} />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 70}>
                <div className="h-full rounded-[var(--radius-xl)] border border-line bg-ink-850 p-7">
                  <h3 className="text-lg font-semibold">{v.title}</h3>
                  <p className="mt-2 text-fg-muted">{v.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Tech */}
        <Section>
          <Reveal>
            <SectionHeading center eyebrow="Toolkit" title={<>Tools I <GradientText>build with.</GradientText></>} />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {techGroups.map((g, i) => (
              <Reveal key={g.label} delay={i * 70}>
                <div className="h-full rounded-[var(--radius-xl)] border border-line bg-ink-850 p-6">
                  <IconTile icon={g.icon} />
                  <h3 className="mt-4 font-semibold">{g.label}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {g.items.map((t) => (
                      <TechTag key={t}>{t}</TechTag>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        <CtaBand
          title={<>Let&apos;s build something <GradientText animate>great together.</GradientText></>}
          subtitle="Tell me about your goals and I'll respond within 24 hours."
          secondary={{ label: "See our work", href: "/work" }}
        />
      </main>
      <Footer />
    </>
  );
}

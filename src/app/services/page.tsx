import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHero, CtaBand } from "@/components/common";
import { Section, SectionHeading, Button, IconTile, TechTag, GradientText, Reveal } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";
import { services, processSteps, techGroups } from "@/lib/content";

export const metadata: Metadata = createPageMetadata({
  title: "Services — AI Automation, AI Agents & Full-Stack Development",
  description:
    "AI automation (n8n, Make, Zapier), AI agents & RAG systems, and full-stack Next.js/React/Angular development. One senior engineer, MVP to enterprise.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen">
        <PageHero
          eyebrow="Services"
          title={<>Automation, AI agents & <GradientText>full-stack</GradientText> — one senior team.</>}
          lede="Whether you need a workflow automated, an AI agent shipped, or a product built end to end, you work directly with a senior engineer who's done it in production."
        >
          <Button href="/contact" variant="primary" size="lg">Start a project</Button>
          <Button href="/work" variant="secondary" size="lg">See our work</Button>
        </PageHero>

        {/* Service cards */}
        <Section>
          <div className="grid gap-5 lg:grid-cols-3">
            {services.map((s, i) => (
              <Reveal key={s.slug} delay={i * 90}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group flex h-full flex-col rounded-[var(--radius-2xl)] border border-line bg-ink-850 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-ink-800 gradient-border"
                >
                  <div className="flex items-start justify-between">
                    <IconTile icon={s.icon} size="lg" />
                    <ArrowUpRight className="h-5 w-5 text-fg-faint transition-colors group-hover:text-magenta" />
                  </div>
                  <h2 className="mt-6 text-2xl font-bold">{s.title}</h2>
                  <p className="mt-3 text-fg-muted">{s.short}</p>
                  <ul className="mt-6 grid flex-1 gap-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-fg-secondary">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-magenta" />
                        {b}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-6 flex flex-wrap gap-2">
                    {s.stack.slice(0, 4).map((t) => (
                      <TechTag key={t}>{t}</TechTag>
                    ))}
                  </div>
                  <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-medium text-magenta">
                    Explore {s.title}
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Process */}
        <Section tone="surface">
          <Reveal>
            <SectionHeading
              eyebrow="How we work"
              title={<>Clear scope. Fast delivery. <GradientText>No surprises.</GradientText></>}
              lede="A lean process with agreed scope and price up front, and demos at every stage."
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <Reveal key={step.name} delay={i * 80}>
                <div className="h-full rounded-[var(--radius-xl)] border border-line bg-ink-850 p-7">
                  <div className="font-display text-4xl font-bold"><GradientText>{i + 1}</GradientText></div>
                  <h3 className="mt-3 text-lg font-semibold">{step.name}</h3>
                  <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-widest text-fg-faint">{step.duration}</p>
                  <p className="mt-3 text-sm text-fg-muted">{step.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Tech */}
        <Section>
          <Reveal>
            <SectionHeading center eyebrow="Toolkit" title={<>The <GradientText>modern stack.</GradientText></>} />
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
          title={<>Not sure which you need? <GradientText animate>Let's talk.</GradientText></>}
          subtitle="Tell me the problem and I'll recommend the right approach — no obligation."
          secondary={{ label: "See our work", href: "/work" }}
        />
      </main>
      <Footer />
    </>
  );
}

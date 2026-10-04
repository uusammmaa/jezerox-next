import type { Metadata } from "next";
import { Check } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHero, CtaBand, Faq } from "@/components/common";
import { Section, SectionHeading, Button, IconTile, GradientText, Reveal, Stat } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";
import { company, partners } from "@/lib/content";

export const metadata: Metadata = createPageMetadata({
  title: "White-Label Engineering for Agencies",
  description:
    "A senior Next.js, React, Python and AI engineer under your agency's brand. 40h or 80h monthly capacity, a paid trial task, no hiring cycle.",
  path: "/partners",
});

export default function PartnersPage() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen">
        <PageHero
          eyebrow={partners.hero.eyebrow}
          title={<>Senior engineering capacity under <GradientText>your brand</GradientText>, without the hiring.</>}
          lede={partners.hero.lede}
        >
          <Button href={company.calendly} variant="primary" size="lg" target="_blank" rel="noopener noreferrer">
            Book a 20-min call
          </Button>
          <Button href="/work" variant="secondary" size="lg">See our work</Button>
        </PageHero>

        {/* Problem */}
        <Section>
          <Reveal>
            <SectionHeading
              eyebrow="The capacity gap"
              title={<>You can sell more work than you can <GradientText>staff.</GradientText></>}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {partners.problems.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="h-full rounded-[var(--radius-xl)] border border-line bg-ink-850 p-7">
                  <IconTile icon={p.icon} />
                  <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
                  <p className="mt-3 text-sm text-fg-muted">{p.detail}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* Offer */}
        <Section tone="surface">
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title={<>Capacity blocks and <GradientText>white-label builds.</GradientText></>}
              lede={partners.rateLine}
            />
          </Reveal>
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {partners.offers.map((o, i) => (
              <Reveal key={o.name} delay={i * 90}>
                <div className="flex h-full flex-col rounded-[var(--radius-2xl)] border border-line bg-ink-850 p-8 gradient-border">
                  <IconTile icon={o.icon} size="lg" />
                  <h3 className="mt-6 text-xl font-bold">{o.name}</h3>
                  <p className="mt-1 font-mono text-sm text-magenta">{o.price}</p>
                  <ul className="mt-6 grid gap-2.5">
                    {o.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5 text-sm text-fg-secondary">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-magenta" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* How it works */}
        <Section>
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title={<>Start with one ticket. <GradientText>Pay only if it&rsquo;s good.</GradientText></>}
            />
          </Reveal>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {partners.steps.map((step, i) => (
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

        {/* Proof */}
        <Section tone="surface">
          <Reveal>
            <SectionHeading center eyebrow="Track record" title={<>Proof, not <GradientText>promises.</GradientText></>} />
          </Reveal>
          <div className="mt-12 grid gap-5 sm:grid-cols-3">
            {partners.proof.map((s) => (
              <Stat key={s.label} value={s.value} label={s.label} note={s.note} />
            ))}
          </div>
        </Section>

        {/* FAQ */}
        <Section>
          <Reveal>
            <SectionHeading center eyebrow="FAQ" title={<>Questions agencies <GradientText>ask first.</GradientText></>} />
          </Reveal>
          <div className="mt-12">
            <Faq items={[...partners.faq]} />
          </div>
        </Section>

        <CtaBand
          eyebrow="For agencies"
          title={<>Need capacity this month? <GradientText animate>Let&rsquo;s talk.</GradientText></>}
          subtitle="20 minutes to see if we fit your stack and your clients."
          primary={{ label: "Book a 20-min call", href: company.calendly, external: true }}
          secondary={{ label: "Email us", href: "/contact" }}
        />
      </main>
      <Footer />
    </>
  );
}

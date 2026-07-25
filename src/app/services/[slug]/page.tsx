import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowUpRight, Check, Target, Sparkles } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHero, CtaBand, Faq } from "@/components/common";
import { Section, SectionHeading, Button, IconTile, TechTag, GradientText, Reveal } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";
import { services, getService, getProject } from "@/lib/content";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return createPageMetadata({
    title: `${service.title} Services`,
    description: `${service.short} ${service.description.slice(0, 100)}`,
    path: `/services/${service.slug}`,
    keywords: service.keywords,
  });
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = service.relatedProjectSlug ? getProject(service.relatedProjectSlug) : undefined;

  return (
    <>
      <Header />
      <main id="main" className="min-h-screen">
        <PageHero
          eyebrow="Services"
          title={<>{service.title.split(" ").slice(0, -1).join(" ")} <GradientText>{service.title.split(" ").slice(-1)}</GradientText></>}
          lede={service.description}
        >
          <Button href="/contact" variant="primary" size="lg">Start a project</Button>
          <Button href="/services" variant="secondary" size="lg">All services</Button>
        </PageHero>

        {/* Problems + Deliverables */}
        <Section>
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal>
              <div className="flex items-center gap-3">
                <IconTile icon={Target} />
                <h2 className="text-2xl font-bold">Problems we solve</h2>
              </div>
              <ul className="mt-6 grid gap-3">
                {service.problems.map((p) => (
                  <li key={p} className="rounded-[var(--radius-md)] border border-line bg-ink-850 px-4 py-3 text-fg-secondary">
                    {p}
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal delay={100}>
              <div className="flex items-center gap-3">
                <IconTile icon={service.icon} />
                <h2 className="text-2xl font-bold">What you get</h2>
              </div>
              <ul className="mt-6 grid gap-3">
                {service.deliverables.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-fg-secondary">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-magenta" />
                    {d}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Section>

        {/* Outcomes */}
        <Section tone="surface">
          <Reveal>
            <SectionHeading eyebrow="Outcomes" title={<>What <GradientText>success</GradientText> looks like</>} />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {service.outcomes.map((o, i) => (
              <Reveal key={o} delay={i * 90}>
                <div className="h-full rounded-[var(--radius-xl)] border border-line bg-gradient-to-b from-ink-850 to-ink-900 p-7">
                  <Sparkles className="h-6 w-6 text-magenta" />
                  <p className="mt-4 text-fg-secondary">{o}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-10 flex flex-wrap gap-2">
            {service.stack.map((t) => (
              <TechTag key={t}>{t}</TechTag>
            ))}
          </div>
        </Section>

        {/* Related project */}
        {related ? (
          <Section>
            <Reveal>
              <SectionHeading eyebrow="Proof" title={<>Related <GradientText>work</GradientText></>} />
            </Reveal>
            <Reveal delay={100}>
              <Link
                href="/work"
                className="group mt-8 flex flex-col gap-6 rounded-[var(--radius-2xl)] border border-line bg-ink-850 p-8 transition-all hover:-translate-y-1 hover:bg-ink-800 gradient-border md:flex-row md:items-center"
              >
                <IconTile icon={related.icon} size="lg" />
                <div className="flex-1">
                  <div className="font-mono text-[0.7rem] uppercase tracking-widest text-fg-faint">{related.category}</div>
                  <h3 className="mt-1 text-xl font-bold">{related.title}</h3>
                  <p className="mt-2 text-sm text-fg-muted">{related.summary}</p>
                </div>
                <ArrowUpRight className="h-6 w-6 shrink-0 text-fg-faint transition-colors group-hover:text-magenta" />
              </Link>
            </Reveal>
          </Section>
        ) : null}

        {/* FAQ */}
        <Section tone="surface">
          <Reveal>
            <SectionHeading center eyebrow="FAQ" title={<>Common <GradientText>questions</GradientText></>} />
          </Reveal>
          <div className="mt-10">
            <Faq items={service.faqs} />
          </div>
        </Section>

        <CtaBand
          title={<>Ready to start your <GradientText animate>{service.title.toLowerCase()}</GradientText> project?</>}
          subtitle="Tell me what you're building and I'll respond within a few hours."
          secondary={{ label: "See all services", href: "/services" }}
        />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Check, Sparkles } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHero, CtaBand } from "@/components/common";
import { Section, SectionHeading, Container, TechTag, GradientText, IconTile, Reveal, BrowserFrame } from "@/components/ui";
import { ProjectVisual } from "@/components/work";
import { createPageMetadata } from "@/lib/seo";
import { projects, getProject } from "@/lib/content";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return createPageMetadata({
    title: `${project.title} — Case Study`,
    description: project.summary,
    path: `/work/${project.slug}`,
    keywords: project.stack,
  });
}

export default async function WorkDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const meta = [
    { k: "Client", v: project.client },
    { k: "Role", v: project.role },
    { k: "Year", v: project.year },
    { k: "Category", v: project.category },
  ];

  return (
    <>
      <Header />
      <main id="main" className="min-h-screen">
        <PageHero
          eyebrow={project.category}
          title={<>{project.title}</>}
          lede={project.summary}
        >
          <Link href="/work" className="inline-flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg">
            <ArrowLeft className="h-4 w-4" /> Back to all work
          </Link>
        </PageHero>

        {/* Meta strip */}
        <Container>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-[var(--radius-xl)] border border-line bg-line md:grid-cols-4">
            {meta.map((m) => (
              <div key={m.k} className="bg-ink-900 p-5">
                <div className="font-mono text-[0.68rem] uppercase tracking-widest text-fg-faint">{m.k}</div>
                <div className="mt-1 text-sm font-medium text-fg">{m.v}</div>
              </div>
            ))}
          </div>
        </Container>

        {/* Screenshots */}
        {project.gallery ? (
          <Section>
            <Reveal>
              <SectionHeading eyebrow="Screenshots" title={<>See it <GradientText>in action</GradientText></>} />
            </Reveal>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              {project.gallery.map((g, i) => (
                <Reveal key={g.src} delay={i * 100}>
                  <figure>
                    <BrowserFrame src={g.src} alt={g.caption} />
                    <figcaption className="mt-3 text-sm text-fg-muted">{g.caption}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </Section>
        ) : project.visual ? (
          <Section>
            <Reveal>
              <SectionHeading eyebrow="Preview" title={<>A look at the <GradientText>interface</GradientText></>} />
            </Reveal>
            <Reveal delay={100}>
              <div className="mt-10 overflow-hidden rounded-[var(--radius-lg)] border border-line shadow-[var(--shadow-lg)]">
                <ProjectVisual variant={project.visual} className="aspect-[16/9] w-full" />
              </div>
              <p className="mt-3 text-sm text-fg-faint">
                Representative illustration — this engagement&apos;s UI is anonymized.
              </p>
            </Reveal>
          </Section>
        ) : null}

        {/* Challenge */}
        <Section>
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
            <Reveal>
              <SectionHeading eyebrow="The challenge" title={<>What we <GradientText>solved</GradientText></>} />
            </Reveal>
            <Reveal delay={100}>
              <p className="text-xl leading-relaxed text-fg-secondary">{project.problem}</p>
            </Reveal>
          </div>
        </Section>

        {/* Approach */}
        <Section tone="surface">
          <Reveal>
            <SectionHeading eyebrow="Approach" title={<>How it was <GradientText>built</GradientText></>} />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {project.approach.map((a, i) => (
              <Reveal key={a} delay={i * 80}>
                <div className="flex h-full gap-4 rounded-[var(--radius-xl)] border border-line bg-ink-850 p-6">
                  <span className="font-mono text-sm text-magenta">{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-fg-secondary">{a}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2">
            {project.stack.map((t) => (
              <TechTag key={t}>{t}</TechTag>
            ))}
          </div>
        </Section>

        {/* Outcome */}
        <Section>
          <Reveal>
            <SectionHeading eyebrow="Outcome" title={<>The <GradientText>result</GradientText></>} />
          </Reveal>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {project.outcome.map((o, i) => (
              <Reveal key={o} delay={i * 90}>
                <div className="h-full rounded-[var(--radius-xl)] border border-line bg-gradient-to-b from-ink-850 to-ink-900 p-7">
                  <IconTile icon={Sparkles} />
                  <p className="mt-4 text-fg-secondary">{o}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <ul className="mt-10 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2.5 text-sm text-fg-secondary">
                <Check className="h-4 w-4 shrink-0 text-magenta" />
                {h}
              </li>
            ))}
          </ul>
        </Section>

        <CtaBand
          title={<>Have a similar <GradientText animate>project?</GradientText></>}
          subtitle="Tell me about it and I'll respond within a few hours."
          secondary={{ label: "More work", href: "/work" }}
        />
      </main>
      <Footer />
    </>
  );
}

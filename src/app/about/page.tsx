import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Section, Button, Card, Container } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About",
  description:
    "JezeroX is a product engineering partner for ambitious teams. Learn about our mission, values, leadership, and how we deliver secure, scalable software.",
  path: "/about",
});

const milestones = [
  {
    year: "2019",
    title: "Founded",
    description:
      "JezeroX started with a simple belief: ambitious teams deserve an engineering partner, not a vendor.",
  },
  {
    year: "2020",
    title: "First enterprise client",
    description:
      "Delivered a regulated fintech platform and proved our process at scale.",
  },
  {
    year: "2021",
    title: "Team of 20+",
    description:
      "Grew to a cross-functional team spanning strategy, design, engineering, and DevOps.",
  },
  {
    year: "2022",
    title: "Multi-industry expansion",
    description:
      "Expanded into healthcare, SaaS, logistics, retail, and education with deep domain expertise.",
  },
  {
    year: "2023",
    title: "AI and automation practice",
    description:
      "Launched our data, AI, and automation practice to help teams ship intelligent products.",
  },
  {
    year: "2024",
    title: "50+ products shipped",
    description:
      "Crossed 50 shipped products with 95% client retention and 99.9% uptime across deployments.",
  },
] as const;

const values = [
  {
    title: "Ownership over output",
    description:
      "We take responsibility for outcomes, not just deliverables. Every decision is measured by its impact on your product.",
    icon: "◆",
  },
  {
    title: "Clarity over complexity",
    description:
      "Simple systems outperform clever ones. We choose clean architecture, clear communication, and honest timelines.",
    icon: "◇",
  },
  {
    title: "Security by default",
    description:
      "Security is not an afterthought. Every product we build starts with compliance, encryption, and access control baked in.",
    icon: "◈",
  },
  {
    title: "Move fast, stay reliable",
    description:
      "Speed matters, but not at the cost of quality. We ship quickly with automated testing, CI/CD, and observability.",
    icon: "⬡",
  },
  {
    title: "Transparent partnership",
    description:
      "No black boxes. You get full visibility into progress, decisions, and trade-offs from day one.",
    icon: "▷",
  },
  {
    title: "Continuous improvement",
    description:
      "Every sprint retrospective, every post-mortem, every release makes the next one better.",
    icon: "▶",
  },
] as const;

const leaders = [
  {
    name: "Alex Mercer",
    role: "CEO and Co-founder",
    bio: "15 years building and scaling software products across fintech and SaaS. Previously VP Engineering at a Series C startup.",
  },
  {
    name: "Priya Sharma",
    role: "CTO and Co-founder",
    bio: "Full-stack architect with deep expertise in distributed systems, cloud infrastructure, and developer experience.",
  },
  {
    name: "Jordan Ellis",
    role: "VP of Design",
    bio: "Led product design at two unicorn startups. Obsessed with accessible, conversion-focused UX systems.",
  },
  {
    name: "Sam Nguyen",
    role: "VP of Engineering",
    bio: "10 years shipping production systems. Specializes in platform reliability, CI/CD, and engineering culture.",
  },
] as const;

const principles = [
  {
    title: "Senior-only delivery",
    description:
      "Every project is staffed with senior engineers and designers. No juniors learning on your budget.",
  },
  {
    title: "Cross-functional squads",
    description:
      "Strategy, design, engineering, and QA work together from day one, not in silos.",
  },
  {
    title: "Async-first communication",
    description:
      "Detailed write-ups, recorded demos, and clear documentation over excessive meetings.",
  },
  {
    title: "Continuous learning",
    description:
      "Weekly knowledge sharing, conference budgets, and dedicated time for experimentation.",
  },
] as const;

const complianceBadges = [
  "SOC 2 aligned",
  "GDPR compliant",
  "HIPAA ready",
  "End-to-end encryption",
  "Automated vulnerability scanning",
  "Role-based access control",
  "Secure CI/CD pipelines",
  "Incident response plan",
] as const;

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        {/* Hero */}
        <section
          className="relative overflow-hidden py-16 md:py-24 lg:py-32"
          aria-label="About hero"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(var(--border-subtle) 1px, transparent 1px),
                linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
            }}
          />
          <Container className="relative">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="font-(family-name:--font-space-grotesk) text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl md:leading-[1.1]">
                Building software that matters
              </h1>
              <p className="mt-6 text-lg text-text-secondary sm:text-xl">
                JezeroX is a product engineering partner for ambitious teams. We
                combine strategy, design, and engineering to deliver secure,
                reliable software that grows with your business.
              </p>
              <p className="mt-3 text-text-muted">
                One senior team across strategy, design, engineering, and growth.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Start a project
                </Button>
                <Button href="/work" variant="secondary" size="lg">
                  See our work
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Story and timeline */}
        <Section id="story">
          <div className="text-center">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              Our story
            </h2>
            <p className="mt-2 text-text-muted">
              From a small team with a clear mission to a trusted engineering
              partner across industries.
            </p>
          </div>
          <div className="relative mx-auto mt-10 max-w-2xl">
            {/* Timeline line */}
            <div
              className="absolute left-[19px] top-0 h-full w-px bg-border"
              aria-hidden
            />
            <div className="space-y-8">
              {milestones.map(({ year, title, description }) => (
                <div key={year} className="relative pl-12">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-2.5 top-1 size-3 rounded-full border-2 border-accent bg-bg-page"
                    aria-hidden
                  />
                  <span className="text-sm font-semibold text-accent">
                    {year}
                  </span>
                  <h3 className="mt-1 font-(family-name:--font-space-grotesk) text-lg font-semibold text-text-primary">
                    {title}
                  </h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Values */}
        <Section id="values">
          <div className="text-center">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              What we stand for
            </h2>
            <p className="mt-2 text-text-muted">
              Principles that guide every product we build and every team we
              partner with.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {values.map(({ title, description, icon }) => (
              <Card key={title} className="h-full">
                <span className="text-2xl text-accent" aria-hidden>
                  {icon}
                </span>
                <h3 className="mt-4 font-(family-name:--font-space-grotesk) text-lg font-semibold text-text-primary">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {description}
                </p>
              </Card>
            ))}
          </div>
        </Section>

        {/* Leadership */}
        <Section id="leadership">
          <div className="text-center">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              Leadership
            </h2>
            <p className="mt-2 text-text-muted">
              Senior operators who have built, scaled, and shipped at every
              stage.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {leaders.map(({ name, role, bio }) => (
              <Card key={name} className="h-full text-center">
                {/* Avatar placeholder */}
                <div className="mx-auto size-20 rounded-full bg-bg-surface-2" />
                <h3 className="mt-4 font-(family-name:--font-space-grotesk) text-lg font-semibold text-text-primary">
                  {name}
                </h3>
                <p className="mt-1 text-sm font-medium text-accent">{role}</p>
                <p className="mt-3 text-sm text-text-secondary">{bio}</p>
              </Card>
            ))}
          </div>
        </Section>

        {/* Culture and principles */}
        <Section id="culture">
          <div className="text-center">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              How we work
            </h2>
            <p className="mt-2 text-text-muted">
              Culture is how decisions get made when no one is watching. Here is
              how we operate.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {principles.map(({ title, description }) => (
              <div
                key={title}
                className="rounded-lg border border-border bg-bg-surface p-6"
              >
                <h3 className="font-(family-name:--font-space-grotesk) text-lg font-semibold text-text-primary">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Security and compliance */}
        <Section id="security">
          <div className="rounded-xl border border-border bg-bg-surface px-8 py-12 md:py-16">
            <div className="text-center">
              <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                Security and compliance
              </h2>
              <p className="mt-3 text-text-muted">
                Every product we build meets enterprise-grade security standards
                from day one.
              </p>
            </div>
            <div className="mx-auto mt-8 flex max-w-3xl flex-wrap justify-center gap-3">
              {complianceBadges.map((badge) => (
                <span
                  key={badge}
                  className="rounded-(--radius-pill) border border-border bg-bg-surface-2 px-4 py-2 text-sm text-text-secondary"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section id="cta">
          <div className="rounded-xl border border-border bg-bg-surface px-8 py-12 text-center md:py-16">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              Ready to build with us?
            </h2>
            <p className="mt-3 text-text-muted">
              Tell us about your goals and we will respond in 24 hours.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Start a project
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

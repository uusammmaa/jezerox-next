import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Section, Button, Card, Container } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Services",
  description:
    "Product strategy, UX/UI design, and engineering in one team. Custom software development and MVP development with transparent engagement models.",
  path: "/services",
});

const services = [
  {
    title: "Product strategy",
    description: "Discovery, roadmap, MVP definition, and validation.",
    icon: "◇",
  },
  {
    title: "UX and UI design",
    description: "Research, design systems, prototypes, and usability.",
    icon: "◈",
  },
  {
    title: "Web and mobile engineering",
    description: "Scalable apps built with modern stacks.",
    icon: "⬡",
  },
  {
    title: "Data, AI, and automation",
    description: "Intelligent workflows and insights.",
    icon: "⬢",
  },
  {
    title: "Cloud, DevOps, and security",
    description: "Infrastructure, observability, and compliance.",
    icon: "▷",
  },
  {
    title: "Growth and optimization",
    description: "Analytics, experiments, and conversion improvements.",
    icon: "▶",
  },
] as const;

const engagementModels = [
  {
    title: "Fixed scope",
    description: "Best for defined MVPs with clear deliverables.",
  },
  {
    title: "Retainer",
    description: "Ongoing product and engineering support.",
  },
  {
    title: "Team extension",
    description: "Embed senior engineers into your team.",
  },
] as const;

const deliverySteps = [
  { name: "Discover", duration: "1 to 2 weeks", detail: "Goals, scope, roadmap, risks." },
  { name: "Design", duration: "2 to 4 weeks", detail: "Prototypes, UI system, usability validation." },
  { name: "Build", duration: "4 to 12+ weeks", detail: "Production-ready web or mobile product." },
  { name: "Scale", duration: "Ongoing", detail: "Performance, analytics, reliability, and growth." },
] as const;

const techStack = [
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Python",
  "AWS",
  "GCP",
  "Postgres",
  "DevOps",
];

const caseStudyHighlights = [
  {
    title: "Fintech platform modernization",
    description: "Reduced time-to-market and improved reliability for a regulated payments product.",
    href: "/work",
  },
  {
    title: "Healthcare data analytics dashboard",
    description: "Secure, HIPAA-aligned dashboards for clinical and operations teams.",
    href: "/work",
  },
  {
    title: "SaaS growth and optimization",
    description: "Conversion and activation improvements with clear attribution.",
    href: "/work",
  },
] as const;

const faqItems = [
  {
    question: "What engagement model fits our project?",
    answer:
      "Fixed scope works best for defined MVPs with clear deliverables. Retainers suit ongoing product and engineering support. Team extension lets you embed senior JezeroX engineers into your team.",
  },
  {
    question: "What are typical timelines?",
    answer:
      "Discovery runs 1–2 weeks; design 2–4 weeks; build 4–12+ weeks depending on scope. Scale is ongoing. We align on milestones and demos at every phase.",
  },
  {
    question: "How do you handle budgets and pricing?",
    answer:
      "We provide transparent estimates after discovery. Fixed-scope projects have agreed deliverables and price. Retainers and team extension are typically monthly with clear capacity.",
  },
  {
    question: "How do we work together day to day?",
    answer:
      "We use your tools (Slack, Jira, etc.) and our delivery process. You get a dedicated lead, regular demos, and async updates. We respect time zones and response SLAs.",
  },
] as const;

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        {/* Hero */}
        <section
          className="relative overflow-hidden py-16 md:py-24 lg:py-32"
          aria-label="Services hero"
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
                Product strategy, design, and engineering in one team.
              </h1>
              <p className="mt-6 text-lg text-text-secondary sm:text-xl">
                We help ambitious teams move from idea to scale with secure,
                high-performing software.
              </p>
              <p className="mt-3 text-text-muted">
                Transparent engagement models and senior delivery teams.
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

        {/* Service categories */}
        <Section id="service-categories">
          <div className="text-center">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              End-to-end product engineering
            </h2>
            <p className="mt-2 text-text-muted">
              Strategy, UX, engineering, and growth in one focused team.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, description, icon }) => (
              <Card key={title} className="h-full">
                <span
                  className="text-2xl text-accent"
                  aria-hidden
                >
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

        {/* Engagement models */}
        <Section id="engagement-models">
          <div className="text-center">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              How we work with you
            </h2>
            <p className="mt-2 text-text-muted">
              Choose the engagement that fits your goals and timeline.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-3">
            {engagementModels.map(({ title, description }) => (
              <Card key={title} className="h-full">
                <h3 className="font-(family-name:--font-space-grotesk) text-lg font-semibold text-text-primary">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {description}
                </p>
              </Card>
            ))}
          </div>
        </Section>

        {/* Delivery process */}
        <Section id="delivery-process">
          <div className="text-center">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              Predictable delivery with measurable outcomes
            </h2>
            <p className="mt-2 text-text-muted">
              Each phase includes milestones, demos, and clear handoffs.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {deliverySteps.map(({ name, duration, detail }, i) => (
              <div
                key={name}
                className="relative rounded-lg border border-border bg-bg-surface p-6"
              >
                <span className="text-sm font-semibold text-accent">
                  Step {i + 1}
                </span>
                <h3 className="mt-2 font-(family-name:--font-space-grotesk) text-lg font-semibold text-text-primary">
                  {name}
                </h3>
                <p className="mt-1 text-sm font-medium text-text-muted">
                  {duration}
                </p>
                <p className="mt-2 text-sm text-text-secondary">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </Section>

        {/* Tech stack */}
        <Section id="tech-stack">
          <div className="text-center">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              Modern stack, proven tools
            </h2>
            <p className="mt-2 text-text-muted">
              TypeScript, React, Next.js, Node.js, Python, AWS, GCP, Postgres,
              and modern DevOps tooling.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-(--radius-pill) border border-border bg-bg-surface-2 px-3 py-1.5 text-sm text-text-secondary"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </Section>

        {/* Case study highlights */}
        <Section id="case-study-highlights">
          <div className="text-center">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              Proof in production
            </h2>
            <p className="mt-2 text-text-muted">
              See how we improved time-to-market, reliability, and conversion.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {caseStudyHighlights.map(({ title, description, href }) => (
              <Card key={title} href={href} glow>
                <div className="aspect-video rounded-md bg-bg-surface-2" />
                <h3 className="mt-4 font-(family-name:--font-space-grotesk) text-lg font-semibold text-text-primary">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {description}
                </p>
                <span className="mt-3 inline-block text-sm font-medium text-accent">
                  Learn more →
                </span>
              </Card>
            ))}
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq">
          <div className="text-center">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              Common questions
            </h2>
            <p className="mt-2 text-text-muted">
              Timelines, budgets, and how we work with your team.
            </p>
          </div>
          <div className="mx-auto mt-10 max-w-2xl space-y-2">
            {faqItems.map(({ question, answer }) => (
              <details
                key={question}
                className="group rounded-lg border border-border bg-bg-surface transition-colors hover:border-(--accent-soft)"
              >
                <summary className="cursor-pointer list-none px-6 py-4 font-(family-name:--font-space-grotesk) font-semibold text-text-primary [&::-webkit-details-marker]:hidden">
                  <span className="flex items-center justify-between gap-4">
                    {question}
                    <span className="text-accent transition-transform group-open:rotate-180" aria-hidden>
                      ▼
                    </span>
                  </span>
                </summary>
                <div className="border-t border-border px-6 py-4">
                  <p className="text-sm text-text-secondary">
                    {answer}
                  </p>
                </div>
              </details>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section id="cta">
          <div className="rounded-xl border border-border bg-bg-surface px-8 py-12 text-center md:py-16">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              Start your next build with JezeroX
            </h2>
            <p className="mt-3 text-text-muted">
              Tell us about your product and timeline.
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

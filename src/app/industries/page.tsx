import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Section, Button, Card, Container } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Industries",
  description:
    "Deep expertise across fintech, healthcare, retail, logistics, SaaS, and education. Software agency for regulated and high-growth teams.",
  path: "/industries",
});

const industries = [
  {
    title: "Fintech",
    description:
      "Regulated payments, banking infrastructure, and financial data platforms built with security and compliance at the core.",
    icon: "◇",
    outcomes: [
      "Reduced time-to-market for new products",
      "99.9% uptime for critical systems",
      "SOC 2 and PCI-DSS compliance",
    ],
  },
  {
    title: "Healthcare",
    description:
      "HIPAA-aligned patient portals, clinical dashboards, and healthcare data analytics that protect privacy and improve outcomes.",
    icon: "◈",
    outcomes: [
      "HIPAA-compliant architecture",
      "Secure patient data handling",
      "Improved clinical workflow efficiency",
    ],
  },
  {
    title: "Retail & E-commerce",
    description:
      "High-conversion storefronts, inventory systems, and omnichannel experiences that drive revenue and customer loyalty.",
    icon: "⬡",
    outcomes: [
      "30%+ conversion improvements",
      "Sub-second page load times",
      "Scalable inventory management",
    ],
  },
  {
    title: "Logistics & Supply Chain",
    description:
      "Real-time tracking, route optimization, and warehouse management systems that reduce costs and improve visibility.",
    icon: "⬢",
    outcomes: [
      "Real-time shipment tracking",
      "Reduced operational costs",
      "Improved delivery accuracy",
    ],
  },
  {
    title: "SaaS",
    description:
      "Multi-tenant platforms, subscription billing, and growth engines that scale from startup to enterprise.",
    icon: "▷",
    outcomes: [
      "Multi-tenant architecture",
      "Automated subscription management",
      "Conversion and retention optimization",
    ],
  },
  {
    title: "Education",
    description:
      "Learning management systems, student portals, and educational analytics that enhance engagement and outcomes.",
    icon: "▶",
    outcomes: [
      "Improved student engagement",
      "Accessible learning platforms",
      "Data-driven insights for educators",
    ],
  },
] as const;

const industryOutcomes = [
  {
    industry: "Fintech",
    metric: "99.9%",
    label: "Uptime for critical systems",
  },
  {
    industry: "Healthcare",
    metric: "100%",
    label: "HIPAA compliance rate",
  },
  {
    industry: "Retail",
    metric: "30%+",
    label: "Average conversion improvement",
  },
  {
    industry: "Logistics",
    metric: "40%",
    label: "Cost reduction in operations",
  },
  {
    industry: "SaaS",
    metric: "95%",
    label: "Client retention rate",
  },
  {
    industry: "Education",
    metric: "50%+",
    label: "Student engagement increase",
  },
] as const;

const caseStudyLinks = [
  {
    title: "Fintech platform modernization",
    industry: "Fintech",
    description:
      "Reduced time-to-market and improved reliability for a regulated payments product.",
    href: "/work",
  },
  {
    title: "Healthcare data analytics dashboard",
    industry: "Healthcare",
    description:
      "Secure, HIPAA-aligned dashboards for clinical and operations teams.",
    href: "/work",
  },
  {
    title: "E-commerce conversion optimization",
    industry: "Retail",
    description:
      "Improved checkout flow and mobile experience resulting in 35% conversion lift.",
    href: "/work",
  },
  {
    title: "SaaS growth and optimization",
    industry: "SaaS",
    description:
      "Conversion and activation improvements with clear attribution.",
    href: "/work",
  },
] as const;

export default function IndustriesPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        {/* Hero */}
        <section
          className="relative overflow-hidden py-16 md:py-24 lg:py-32"
          aria-label="Industries hero"
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
                Built for regulated and high-growth teams
              </h1>
              <p className="mt-6 text-lg text-text-secondary sm:text-xl">
                Deep expertise across fintech, healthcare, retail, logistics,
                SaaS, and education. We build secure, scalable software that
                meets industry standards and drives business outcomes.
              </p>
              <p className="mt-3 text-text-muted">
                Security, compliance, and performance from day one.
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

        {/* Industry cards */}
        <Section id="industry-cards">
          <div className="text-center">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              Industries we serve
            </h2>
            <p className="mt-2 text-text-muted">
              Domain expertise and proven delivery across six key sectors.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ title, description, icon, outcomes }) => (
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
                <ul className="mt-4 space-y-1.5">
                  {outcomes.map((outcome, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-xs text-text-muted"
                    >
                      <span className="mt-1 text-accent" aria-hidden>
                        ✓
                      </span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </Section>

        {/* Outcomes by industry */}
        <Section id="outcomes">
          <div className="text-center">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              Measurable outcomes by industry
            </h2>
            <p className="mt-2 text-text-muted">
              Real results from products we have built and scaled.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industryOutcomes.map(({ industry, metric, label }) => (
              <div
                key={industry}
                className="rounded-lg border border-border bg-bg-surface p-6 text-center"
              >
                <p className="text-sm font-medium text-text-muted">
                  {industry}
                </p>
                <p className="mt-2 font-(family-name:--font-space-grotesk) text-3xl font-bold text-accent">
                  {metric}
                </p>
                <p className="mt-1 text-sm text-text-secondary">{label}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Case study links */}
        <Section id="case-studies">
          <div className="text-center">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              Case studies by industry
            </h2>
            <p className="mt-2 text-text-muted">
              See how we delivered results for teams in your sector.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {caseStudyLinks.map(({ title, industry, description, href }) => (
              <Card key={title} href={href} glow>
                <div className="flex items-center justify-between">
                  <span className="rounded-(--radius-pill) border border-border bg-bg-surface-2 px-3 py-1 text-xs font-medium text-text-secondary">
                    {industry}
                  </span>
                </div>
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

        {/* CTA */}
        <Section id="cta">
          <div className="rounded-xl border border-border bg-bg-surface px-8 py-12 text-center md:py-16">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              Ready to build for your industry?
            </h2>
            <p className="mt-3 text-text-muted">
              Tell us about your sector and goals. We will respond in 24 hours.
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

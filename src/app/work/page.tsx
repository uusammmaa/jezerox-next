import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Section, Button, Container } from "@/components/ui";
import { CaseStudiesGrid } from "@/components/work/CaseStudiesGrid";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Case studies showcasing how JezeroX delivers secure, high-performing software from MVP to enterprise scale.",
};

const outcomes = [
  {
    metric: "50+",
    label: "Products shipped",
  },
  {
    metric: "95%",
    label: "Client retention",
  },
  {
    metric: "2M+",
    label: "Users supported",
  },
  {
    metric: "99.9%",
    label: "Average uptime",
  },
];

export default function WorkPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        {/* Hero */}
        <section
          className="relative overflow-hidden py-16 md:py-24 lg:py-32"
          aria-label="Work hero"
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
                Proof in production
              </h1>
              <p className="mt-6 text-lg text-text-secondary sm:text-xl">
                See how we help ambitious teams build faster, scale smarter, and
                deliver secure software that performs.
              </p>
              <p className="mt-3 text-text-muted">
                Case studies across fintech, healthcare, SaaS, logistics, retail,
                and education.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button href="/contact" variant="primary" size="lg">
                  Start a project
                </Button>
                <Button href="/services" variant="secondary" size="lg">
                  Our services
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Case study cards with filters */}
        <CaseStudiesGrid />

        {/* Outcomes highlights */}
        <Section id="outcomes">
          <div className="rounded-xl border border-border bg-bg-surface px-8 py-12 md:py-16">
            <div className="text-center">
              <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                Measurable impact across projects
              </h2>
              <p className="mt-3 text-text-muted">
                Outcomes that matter: reliability, performance, and growth.
              </p>
            </div>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {outcomes.map(({ metric, label }) => (
                <div key={label} className="text-center">
                  <div className="font-(family-name:--font-space-grotesk) text-4xl font-bold text-accent md:text-5xl">
                    {metric}
                  </div>
                  <div className="mt-2 text-sm text-text-secondary">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section id="cta">
          <div className="rounded-xl border border-border bg-bg-surface px-8 py-12 text-center md:py-16">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              Ready to build your next product?
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

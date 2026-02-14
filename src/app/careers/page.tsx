import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Section, Button, Card, Container } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Careers",
  description:
    "Join JezeroX and build software that matters. Senior-only teams, transparent culture, and opportunities to ship products that scale.",
  path: "/careers",
});

const benefits = [
  {
    title: "Senior-only teams",
    description:
      "Work alongside experienced engineers, designers, and product strategists. No juniors learning on client time.",
    icon: "◆",
  },
  {
    title: "Impactful products",
    description:
      "Build software for fintech, healthcare, SaaS, and more. Every project ships to production with measurable outcomes.",
    icon: "◇",
  },
  {
    title: "Transparent culture",
    description:
      "Clear communication, honest timelines, and full visibility into decisions. No black boxes or politics.",
    icon: "◈",
  },
  {
    title: "Continuous learning",
    description:
      "Weekly knowledge sharing, conference budgets, dedicated experimentation time, and access to senior mentors.",
    icon: "⬡",
  },
  {
    title: "Flexible work",
    description:
      "Async-first communication, flexible hours, and remote-friendly. We focus on outcomes, not hours.",
    icon: "⬢",
  },
  {
    title: "Competitive compensation",
    description:
      "Market-rate salaries, equity opportunities, health benefits, and professional development budgets.",
    icon: "▷",
  },
] as const;

const openRoles = [
  {
    title: "Senior Full-Stack Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Build scalable web and mobile products using TypeScript, React, Next.js, and Node.js. Work across the stack with senior engineers.",
  },
  {
    title: "Senior Product Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    description:
      "Design user experiences that convert and scale. Create design systems, prototypes, and ship products that users love.",
  },
  {
    title: "Product Strategist",
    department: "Strategy",
    location: "Remote",
    type: "Full-time",
    description:
      "Help teams define roadmaps, validate ideas, and reduce risk. Bridge business goals and technical execution.",
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Build secure, scalable infrastructure on AWS and GCP. CI/CD, observability, and compliance from day one.",
  },
] as const;

const hiringSteps = [
  {
    step: 1,
    title: "Application",
    description: "Submit your resume and portfolio. We review every application.",
    duration: "1–2 days",
  },
  {
    step: 2,
    title: "Initial screen",
    description: "30-minute call with our team to discuss your background and goals.",
    duration: "30 minutes",
  },
  {
    step: 3,
    title: "Technical assessment",
    description: "Take-home project or pair programming session. We focus on real-world problems.",
    duration: "2–4 hours",
  },
  {
    step: 4,
    title: "Team interview",
    description: "Meet the team, discuss culture fit, and ask questions about how we work.",
    duration: "1 hour",
  },
  {
    step: 5,
    title: "Offer",
    description: "We make an offer within 24 hours of the final interview.",
    duration: "24 hours",
  },
] as const;

const faqItems = [
  {
    question: "What is the interview process like?",
    answer:
      "Our process is straightforward: application review, initial screen (30 min), technical assessment (2–4 hours), team interview (1 hour), and offer within 24 hours. We respect your time and move quickly.",
  },
  {
    question: "Do you hire remote candidates?",
    answer:
      "Yes, we are fully remote-friendly. We work async-first and focus on outcomes, not location. Some roles may require timezone overlap with clients.",
  },
  {
    question: "What level of experience do you look for?",
    answer:
      "We hire senior-level engineers, designers, and strategists only. Typically 5+ years of experience shipping production software, but we value impact over years.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "TypeScript, React, Next.js, Node.js, Python, AWS, GCP, Postgres, and modern DevOps tooling. We choose the right stack for each project.",
  },
  {
    question: "How do you support professional growth?",
    answer:
      "Weekly knowledge sharing, conference budgets, dedicated experimentation time, access to senior mentors, and clear career progression paths.",
  },
  {
    question: "What is the company culture like?",
    answer:
      "Transparent, async-first, and outcome-focused. We value ownership, clarity, security, and continuous improvement. No politics, no micromanagement.",
  },
] as const;

export default function CareersPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        {/* Hero */}
        <section
          className="relative overflow-hidden py-16 md:py-24 lg:py-32"
          aria-label="Careers hero"
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
                Build software that matters
              </h1>
              <p className="mt-6 text-lg text-text-secondary sm:text-xl">
                Join JezeroX and work with senior teams shipping products that
                scale. Transparent culture, continuous learning, and impact from
                day one.
              </p>
              <p className="mt-3 text-text-muted">
                Senior-only teams. Remote-friendly. Outcome-focused.
              </p>
              <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                <Button href="#open-roles" variant="primary" size="lg">
                  View open roles
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Get in touch
                </Button>
              </div>
            </div>
          </Container>
        </section>

        {/* Why JezeroX */}
        <Section id="why-jezerox">
          <div className="text-center">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              Why JezeroX
            </h2>
            <p className="mt-2 text-text-muted">
              Work with senior teams, ship impactful products, and grow your
              career in a transparent, supportive environment.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map(({ title, description, icon }) => (
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

        {/* Open roles */}
        <Section id="open-roles">
          <div className="text-center">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              Open roles
            </h2>
            <p className="mt-2 text-text-muted">
              We are always looking for senior engineers, designers, and
              strategists who want to build products that scale.
            </p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {openRoles.map(({ title, department, location, type, description }) => (
              <Card key={title} className="h-full">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-(--radius-pill) border border-border bg-bg-surface-2 px-3 py-1 text-xs font-medium text-text-secondary">
                    {department}
                  </span>
                  <span className="text-xs text-text-muted">{location}</span>
                  <span className="text-xs text-text-muted">•</span>
                  <span className="text-xs text-text-muted">{type}</span>
                </div>
                <h3 className="mt-4 font-(family-name:--font-space-grotesk) text-lg font-semibold text-text-primary">
                  {title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {description}
                </p>
                <div className="mt-4">
                  <Button href="/contact" variant="secondary" size="sm">
                    Apply now
                  </Button>
                </div>
              </Card>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-sm text-text-muted">
              Don&apos;t see a role that fits?{" "}
              <a
                href="/contact"
                className="font-medium text-accent hover:underline"
              >
                Get in touch
              </a>{" "}
              and tell us how you can contribute.
            </p>
          </div>
        </Section>

        {/* Hiring process */}
        <Section id="hiring-process">
          <div className="text-center">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              Our hiring process
            </h2>
            <p className="mt-2 text-text-muted">
              Transparent, respectful, and fast. We move quickly and respect
              your time.
            </p>
          </div>
          <div className="relative mx-auto mt-10 max-w-3xl">
            {/* Timeline line */}
            <div
              className="absolute left-[19px] top-0 hidden h-full w-px bg-border md:block"
              aria-hidden
            />
            <div className="space-y-8">
              {hiringSteps.map(({ step, title, description, duration }) => (
                <div key={step} className="relative pl-12">
                  {/* Timeline dot */}
                  <div
                    className="absolute left-[13px] top-1 hidden size-3 rounded-full border-2 border-accent bg-bg-page md:block"
                    aria-hidden
                  />
                  <div className="flex flex-col gap-2 md:flex-row md:items-start md:gap-6">
                    <div className="shrink-0">
                      <span className="text-sm font-semibold text-accent">
                        Step {step}
                      </span>
                      <h3 className="mt-1 font-(family-name:--font-space-grotesk) text-lg font-semibold text-text-primary">
                        {title}
                      </h3>
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-text-secondary">
                        {description}
                      </p>
                      <p className="mt-1 text-xs text-text-muted">
                        {duration}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* FAQ */}
        <Section id="faq">
          <div className="text-center">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              Common questions
            </h2>
            <p className="mt-2 text-text-muted">
              Everything you need to know about working at JezeroX.
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
                    <span
                      className="text-accent transition-transform group-open:rotate-180"
                      aria-hidden
                    >
                      ▼
                    </span>
                  </span>
                </summary>
                <div className="border-t border-border px-6 py-4">
                  <p className="text-sm text-text-secondary">{answer}</p>
                </div>
              </details>
            ))}
          </div>
        </Section>

        {/* CTA */}
        <Section id="cta">
          <div className="rounded-xl border border-border bg-bg-surface px-8 py-12 text-center md:py-16">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              Ready to join the team?
            </h2>
            <p className="mt-3 text-text-muted">
              View open roles or get in touch to learn more about opportunities
              at JezeroX.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button href="#open-roles" variant="primary" size="lg">
                View open roles
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Get in touch
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

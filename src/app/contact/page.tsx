import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Section, Button, Container } from "@/components/ui";
import { ContactForm } from "@/components/contact";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact",
  description:
    "Tell us about your product. JezeroX responds within 24 hours. Book a call or send a message.",
  path: "/contact",
});

const projectBriefChecklist = [
  "What problem are you solving?",
  "Who are your users or customers?",
  "What does success look like (metrics or outcomes)?",
  "Timeline and key milestones",
  "Budget or engagement model preference",
] as const;

const locations = [
  {
    label: "HQ",
    detail: "Remote-first. We work across time zones with clients worldwide.",
  },
  {
    label: "Response time",
    detail: "We respond to all inquiries within 24 hours.",
  },
] as const;

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        {/* Hero */}
        <section
          className="relative overflow-hidden py-16 md:py-24 lg:py-32"
          aria-label="Contact hero"
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
                Tell us about your product.
              </h1>
              <p className="mt-6 text-lg text-text-secondary sm:text-xl">
                We respond within 24 hours. Share your goals, timeline, and we
                will align on next steps.
              </p>
              <p className="mt-3 text-text-muted">
                Start a project, book a call, or ask a question.
              </p>
            </div>
          </Container>
        </section>

        {/* Contact form */}
        <Section id="contact-form">
          <div className="text-center">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              Send a message
            </h2>
            <p className="mt-2 text-text-muted">
              Name, email, company, and a short description of your product or
              goals.
            </p>
          </div>
          <div className="mt-10">
            <ContactForm />
          </div>
        </Section>

        {/* Project brief checklist */}
        <Section id="project-brief">
          <div className="text-center">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              Help us help you: project brief checklist
            </h2>
            <p className="mt-2 text-text-muted">
              Including these in your message speeds up our first conversation.
            </p>
          </div>
          <ul className="mx-auto mt-10 max-w-xl space-y-3">
            {projectBriefChecklist.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-lg border border-border bg-bg-surface px-4 py-3"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-(--accent-soft) text-sm font-semibold text-accent">
                  {i + 1}
                </span>
                <span className="text-text-secondary">{item}</span>
              </li>
            ))}
          </ul>
        </Section>

        {/* Calendly / booking CTA */}
        <Section id="book-a-call">
          <div className="rounded-xl border border-border bg-bg-surface px-8 py-12 text-center md:py-16">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              Prefer to talk first?
            </h2>
            <p className="mt-3 text-text-muted">
              Book a call with our team. No commitment—we will listen and
              suggest next steps.
            </p>
            <div className="mt-8">
              <Button
                href={process.env.CALENDLY_BOOKING_URL || ""}
                variant="secondary"
                size="lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a call
              </Button>
            </div>
            <p className="mt-4 text-sm text-text-muted">
              Or use the form above and we will propose a time.
            </p>
          </div>
        </Section>

        {/* Locations / hours */}
        <Section id="locations-hours">
          <div className="text-center">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              Where we work
            </h2>
            <p className="mt-2 text-text-muted">
              Remote-first. We respond within 24 hours, any day.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {locations.map(({ label, detail }) => (
              <div
                key={label}
                className="rounded-lg border border-border bg-bg-surface p-6"
              >
                <h3 className="font-(family-name:--font-space-grotesk) text-lg font-semibold text-text-primary">
                  {label}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">{detail}</p>
              </div>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

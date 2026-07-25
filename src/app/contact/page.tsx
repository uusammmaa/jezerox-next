import type { Metadata } from "next";
import { Mail, CalendarClock, Clock, Check } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHero } from "@/components/common";
import { Section, Button, GradientText } from "@/components/ui";
import { ContactForm } from "@/components/contact";
import { createPageMetadata } from "@/lib/seo";
import { company } from "@/lib/content";

export const metadata: Metadata = createPageMetadata({
  title: "Contact — Start a Project with JezeroX",
  description:
    "Tell JezeroX about your AI automation, AI agent, or full-stack project. Direct line to a senior engineer. Response within 24 hours.",
  path: "/contact",
});

const brief = [
  "What problem are you solving?",
  "What tools or systems are involved?",
  "What does success look like?",
  "Rough timeline and budget",
];

export default function ContactPage() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen">
        <PageHero
          eyebrow="Contact"
          title={<>Tell me about your <GradientText>project.</GradientText></>}
          lede="Share your goals and I'll respond within 24 hours with clear next steps. You'll talk directly to the engineer who'll do the work."
        />

        <Section>
          <div className="grid gap-12 lg:grid-cols-[1.3fr_0.7fr]">
            {/* Form */}
            <div className="rounded-[var(--radius-2xl)] border border-line bg-ink-850 p-6 md:p-10">
              <h2 className="text-2xl font-bold">Send a message</h2>
              <p className="mt-2 text-fg-muted">A few lines is enough to get started.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="flex flex-col gap-5">
              <div className="rounded-[var(--radius-xl)] border border-line bg-ink-900 p-6">
                <h3 className="flex items-center gap-2 font-semibold">
                  <Check className="h-4 w-4 text-magenta" /> Helpful to include
                </h3>
                <ul className="mt-4 grid gap-2.5">
                  {brief.map((b) => (
                    <li key={b} className="flex items-start gap-2.5 text-sm text-fg-secondary">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-magenta" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[var(--radius-xl)] border border-line bg-ink-900 p-6">
                <h3 className="flex items-center gap-2 font-semibold">
                  <CalendarClock className="h-4 w-4 text-magenta" /> Prefer to talk?
                </h3>
                <p className="mt-3 text-sm text-fg-muted">Book a free discovery call — no commitment.</p>
                <Button href={company.calendly} variant="secondary" size="md" target="_blank" rel="noopener noreferrer" className="mt-4 w-full">
                  Book a call
                </Button>
              </div>

              <div className="grid gap-4 rounded-[var(--radius-xl)] border border-line bg-ink-900 p-6 text-sm">
                <div className="flex items-center gap-3 text-fg-secondary">
                  <Clock className="h-4 w-4 text-magenta" /> {company.responseTime}
                </div>
                <a href={`mailto:${company.email}`} className="flex items-center gap-3 text-fg-secondary transition-colors hover:text-fg">
                  <Mail className="h-4 w-4 text-magenta" /> {company.email}
                </a>
              </div>
            </aside>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

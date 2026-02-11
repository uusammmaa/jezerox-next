import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Section, Container } from "@/components/ui";
import { PostsGrid } from "@/components/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Engineering playbooks, AI productization strategies, and growth lessons for product leaders building software that scales.",
};

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        {/* Hero */}
        <section
          className="relative overflow-hidden py-16 md:py-24 lg:py-32"
          aria-label="Insights hero"
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
                Insights for product leaders
              </h1>
              <p className="mt-6 text-lg text-text-secondary sm:text-xl">
                Engineering playbooks, AI productization, and growth lessons
                from building software that scales.
              </p>
              <p className="mt-3 text-text-muted">
                Practical frameworks, real-world case studies, and actionable
                strategies for ambitious teams.
              </p>
            </div>
          </Container>
        </section>

        {/* Topic filters, Featured post, and Posts list */}
        <PostsGrid />

        {/* Newsletter CTA */}
        <Section id="newsletter">
          <div className="rounded-xl border border-border bg-bg-surface px-8 py-12 text-center md:py-16">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              Stay updated with our latest insights
            </h2>
            <p className="mt-3 text-text-muted">
              Get engineering playbooks, product strategy frameworks, and
              growth lessons delivered to your inbox.
            </p>
            <form
              action="/api/newsletter"
              method="POST"
              className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:flex-row"
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                aria-label="Email address"
                className="flex-1 rounded-lg border border-border bg-bg-surface-2 px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-accent focus:outline-none focus:ring-2 focus:ring-(--accent-soft)"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-md border border-accent bg-accent px-5 text-base font-semibold text-(--gray-100) shadow-(--glow-accent) transition-colors duration-150 hover:bg-accent-hover hover:border-accent-hover active:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--blue-400) disabled:pointer-events-none disabled:opacity-40"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-4 text-xs text-text-muted">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

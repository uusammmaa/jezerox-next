import { Section, Button } from "@/components/ui";

export function FinalCTA() {
  return (
    <Section id="final-cta">
      <div className="rounded-[var(--radius-xl)] border border-[var(--border-subtle)] bg-[var(--navy-900)] px-8 py-12 text-center opacity-0 animate-fade-in animation-fill-both animation-delay-200 md:py-16">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
            Ready to build your next product?
          </h2>
          <p className="mt-3 text-[var(--text-muted)]">
            Tell us about your goals and we will respond in 24 hours.
          </p>
          <div className="mt-8">
            <Button href="/contact" variant="primary" size="lg">
              Start a project
            </Button>
          </div>
        </div>
    </Section>
  );
}

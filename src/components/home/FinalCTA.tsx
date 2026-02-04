import { Section, Button } from "@/components/ui";

export function FinalCTA() {
  return (
    <Section id="final-cta">
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
  );
}

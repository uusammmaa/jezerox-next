import { Section } from "@/components/ui";

const industries = [
  "Fintech",
  "Health",
  "Retail",
  "Logistics",
  "SaaS",
  "Education",
] as const;

export function IndustryFocus() {
  return (
    <Section id="industries" className="relative border-t border-border bg-bg-surface-2">
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-20" aria-hidden />
      <div className="relative z-10">
        <div className="text-center">
          <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
            Built for regulated and high-growth teams
          </h2>
          <p className="mt-2 text-text-muted">
            Deep experience in fintech, health, SaaS, logistics, retail, and
            education.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {industries.map((name) => (
            <span
              key={name}
              className="glass rounded-full px-4 py-2 text-sm font-medium text-text-secondary"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </Section>
  );
}

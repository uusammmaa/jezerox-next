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
    <Section id="industries">
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
              className="rounded-(--radius-pill) border border-border bg-bg-surface px-4 py-2 text-sm font-medium text-text-secondary"
            >
              {name}
            </span>
          ))}
        </div>
    </Section>
  );
}

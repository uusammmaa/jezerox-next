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
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
            Built for regulated and high-growth teams
          </h2>
          <p className="mt-2 text-[var(--text-muted)]">
            Deep experience in fintech, health, SaaS, logistics, retail, and
            education.
          </p>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {industries.map((name) => (
            <span
              key={name}
              className="rounded-[var(--radius-pill)] border border-[var(--border-subtle)] bg-[var(--navy-900)] px-4 py-2 text-sm font-medium text-[var(--text-secondary)]"
            >
              {name}
            </span>
          ))}
        </div>
    </Section>
  );
}

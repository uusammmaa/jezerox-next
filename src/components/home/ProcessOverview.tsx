import { Section } from "@/components/ui";

const steps = [
  { name: "Discover", duration: "1 to 2 weeks", detail: "Goals, scope, roadmap, risks." },
  { name: "Design", duration: "2 to 4 weeks", detail: "Prototypes, UI system, usability validation." },
  { name: "Build", duration: "4 to 12+ weeks", detail: "Production-ready web or mobile product." },
  { name: "Scale", duration: "Ongoing", detail: "Performance, analytics, reliability, and growth." },
] as const;

export function ProcessOverview() {
  return (
    <Section id="process">
      <div className="text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
            Discover. Design. Build. Scale.
          </h2>
          <p className="mt-2 text-[var(--text-muted)]">
            A proven delivery system with clear outcomes at every stage.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({ name, duration, detail }, i) => (
            <div
              key={name}
              className="relative rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--navy-900)] p-6 opacity-0 animate-slide-up animation-fill-both transition-[border-color,box-shadow,transform] duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-0.5 hover:border-[var(--accent-soft)] hover:shadow-[0_8px_24px_rgba(5,10,20,0.35)]"
              style={{ animationDelay: `${0.15 + i * 0.1}s` }}
            >
              <span className="text-sm font-semibold text-[var(--blue-500)]">
                Step {i + 1}
              </span>
              <h3 className="mt-2 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[var(--text-primary)]">
                {name}
              </h3>
              <p className="mt-1 text-sm font-medium text-[var(--text-muted)]">
                {duration}
              </p>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {detail}
              </p>
            </div>
          ))}
        </div>
    </Section>
  );
}

import { Section, SectionHeading, GradientText, Reveal } from "@/components/ui";
import { processSteps } from "@/lib/content";

export function ProcessOverview() {
  return (
    <Section id="process">
      <Reveal>
        <SectionHeading
          eyebrow="How we work"
          title={<>Discover. Design. Build. <GradientText>Scale.</GradientText></>}
          lede="A lean delivery process with clear scope, pricing, and demos at every stage."
        />
      </Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((step, i) => (
          <Reveal key={step.name} delay={i * 90}>
            <div className="relative h-full overflow-hidden rounded-[var(--radius-xl)] border border-line bg-ink-850 p-7">
              <div className="font-display text-5xl font-bold leading-none">
                <GradientText>{i + 1}</GradientText>
              </div>
              <h3 className="mt-4 text-lg font-semibold">{step.name}</h3>
              <p className="mt-1 font-mono text-[0.7rem] uppercase tracking-widest text-fg-faint">
                {step.duration}
              </p>
              <p className="mt-3 text-sm text-fg-muted">{step.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

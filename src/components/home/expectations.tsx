import { Section, SectionHeading, GradientText, Reveal } from "@/components/ui";
import { expectations } from "@/lib/content";

export function Expectations() {
  return (
    <Section id="expect">
      <Reveal>
        <SectionHeading
          center
          eyebrow="What you can expect"
          title={<>Senior delivery, <GradientText>no surprises.</GradientText></>}
        />
      </Reveal>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {expectations.map((e, i) => (
          <Reveal key={e.key} delay={i * 90}>
            <div className="h-full rounded-[var(--radius-xl)] border border-line bg-gradient-to-b from-ink-850 to-ink-900 p-8">
              <div className="font-display text-4xl font-bold tracking-tight">
                <GradientText>{e.key}</GradientText>
              </div>
              <div className="mt-2 font-semibold text-fg-secondary">{e.label}</div>
              <p className="mt-3 text-sm text-fg-muted">{e.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

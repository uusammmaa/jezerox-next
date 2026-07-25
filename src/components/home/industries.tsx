import { Section, SectionHeading, GradientText, IconTile, Reveal } from "@/components/ui";
import { industries } from "@/lib/content";

export function Industries() {
  return (
    <Section id="industries" tone="surface">
      <Reveal>
        <SectionHeading
          eyebrow="Who I work with"
          title={<>Built for teams <GradientText>like yours.</GradientText></>}
          lede="Automation and AI tuned to the workflows that actually move the needle in your industry."
        />
      </Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {industries.map((ind, i) => (
          <Reveal key={ind.name} delay={(i % 4) * 70}>
            <div className="group h-full rounded-[var(--radius-xl)] border border-line bg-ink-850 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-ink-800 gradient-border">
              <IconTile icon={ind.icon} />
              <h3 className="mt-4 text-lg font-semibold">{ind.name}</h3>
              <p className="mt-1.5 text-sm text-fg-muted">{ind.blurb}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

import { Section, SectionHeading, GradientText, IconTile, Reveal } from "@/components/ui";
import { businessProblems } from "@/lib/content";

/**
 * Sits directly under the hero so the second thing a visitor reads is their own
 * problem, not our stack. Deliberately placed above the offers — see
 * ../../../../jezerox-plan.md §18.
 */
export function Problems() {
  return (
    <Section id="problems" tone="surface">
      <Reveal>
        <SectionHeading
          eyebrow="Problems we solve"
          title={<>If any of this sounds <GradientText>familiar.</GradientText></>}
          lede="Most of the work worth automating is not glamorous. It is the repetitive handoffs between systems that quietly consume your team's week."
        />
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {businessProblems.map((p, i) => (
          <Reveal key={p.title} delay={(i % 3) * 90} className="h-full">
            <div className="flex h-full flex-col rounded-[var(--radius-2xl)] border border-line bg-ink-850 p-6">
              <IconTile icon={p.icon} />
              <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-fg-muted">{p.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

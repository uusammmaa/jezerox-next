import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Section, SectionHeading, IconTile, GradientText, TechTag, Reveal } from "@/components/ui";
import { cn } from "@/lib/cn";
import { services } from "@/lib/content";

export function ServicesOverview() {
  const [feature, ...rest] = services;

  return (
    <Section id="services">
      <Reveal>
        <SectionHeading
          eyebrow="What we do"
          title={<>Intelligent software, <GradientText>end to end.</GradientText></>}
          lede="Strategy, design, engineering, and AI in one focused team — led by an AI automation & agents practice."
        />
      </Reveal>

      <div className="mt-14 grid gap-4 md:grid-cols-6">
        {/* Feature service */}
        <Reveal className="md:col-span-3 md:row-span-2">
          <Link
            href={`/services/${feature.slug}`}
            className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[var(--radius-2xl)] border border-line bg-ink-850 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-ink-800 gradient-border"
          >
            <div>
              <IconTile icon={feature.icon} size="lg" />
              <h3 className="mt-6 text-3xl font-bold">{feature.title}</h3>
              <p className="mt-3 max-w-md text-fg-muted">{feature.description}</p>
              <ul className="mt-6 grid gap-2.5">
                {feature.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-sm text-fg-secondary">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-magenta" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-2">
              {feature.stack.slice(0, 5).map((s) => (
                <TechTag key={s}>{s}</TechTag>
              ))}
              <ArrowUpRight className="ml-auto h-5 w-5 text-fg-faint transition-colors group-hover:text-magenta" />
            </div>
          </Link>
        </Reveal>

        {/* Remaining services */}
        {rest.map((s, i) => (
          <Reveal key={s.slug} className="md:col-span-3" delay={(i + 1) * 90}>
            <Link
              href={`/services/${s.slug}`}
              className={cn(
                "group relative flex h-full flex-col overflow-hidden rounded-[var(--radius-2xl)] border border-line bg-ink-850 p-8 transition-all duration-300 hover:-translate-y-1 hover:bg-ink-800 gradient-border",
              )}
            >
              <div className="flex items-start justify-between">
                <IconTile icon={s.icon} />
                <ArrowUpRight className="h-5 w-5 text-fg-faint transition-colors group-hover:text-magenta" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-fg-muted">{s.short}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {s.stack.slice(0, 4).map((t) => (
                  <TechTag key={t}>{t}</TechTag>
                ))}
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

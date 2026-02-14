import Link from "next/link";
import {
  Target,
  Palette,
  Code,
  Brain,
  Cloud,
  TrendingUp,
  Check,
} from "lucide-react";
import { Section } from "@/components/ui";

// cspell:ignore roadmaps
const services = [
  {
    title: "Product strategy",
    description:
      "Align goals, validate scope, and define a roadmap that reduces risk.",
    icon: Target,
    bullets: ["Discovery", "Roadmaps", "MVP definition"],
  },
  {
    title: "UX and UI design",
    description: "Research, design systems, prototypes, and usability.",
    icon: Palette,
    bullets: ["Research", "Design systems", "Prototypes"],
  },
  {
    title: "Web and mobile engineering",
    description: "Scalable apps built with modern stacks.",
    icon: Code,
    bullets: ["Scalable apps", "Modern stacks", "Cross-platform"],
  },
  {
    title: "Data, AI, and automation",
    description: "Intelligent workflows and insights.",
    icon: Brain,
    bullets: ["Intelligent workflows", "Insights", "Automation"],
  },
  {
    title: "Cloud, DevOps, and security",
    description: "Infrastructure, observability, and compliance.",
    icon: Cloud,
    bullets: ["Infrastructure", "Observability", "Compliance"],
  },
  {
    title: "Growth and optimization",
    description: "Analytics, experiments, and conversion improvements.",
    icon: TrendingUp,
    bullets: ["Analytics", "Experiments", "Conversion"],
  },
] as const;

export function ServicesOverview() {
  return (
    <Section id="services">
      <div className="mb-20 flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-xl">
          <h2 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--blue-500)]">
            Core Expertise
          </h2>
          <h3 className="font-(family-name:--font-space-grotesk) text-4xl font-bold leading-tight text-text-primary md:text-5xl">
            End-to-end product engineering.
          </h3>
        </div>
        <p className="max-w-sm text-text-muted">
          Strategy, UX, engineering, and growth in one focused team.
        </p>
      </div>
      <div className="grid gap-8 md:grid-cols-3">
        {services.map(({ title, description, icon: Icon, bullets }) => (
          <Link
            key={title}
            href="/services"
            className="glass group rounded-xl p-10 transition-all duration-500 hover:border-[var(--blue-500)]/50"
          >
            <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-lg bg-[var(--accent-soft)] transition-all group-hover:bg-[var(--blue-500)] group-hover:text-white">
              <Icon className="h-7 w-7 text-[var(--blue-500)] group-hover:text-white" />
            </div>
            <h4 className="mb-4 font-(family-name:--font-space-grotesk) text-2xl font-bold text-text-primary">
              {title}
            </h4>
            <p className="mb-8 leading-relaxed text-text-muted">{description}</p>
            <ul className="space-y-3 text-sm font-medium text-text-secondary">
              {bullets.map((bullet) => (
                <li key={bullet} className="flex items-center gap-2">
                  <Check className="h-4 w-4 shrink-0 text-[var(--blue-500)]" />
                  {bullet}
                </li>
              ))}
            </ul>
          </Link>
        ))}
      </div>
    </Section>
  );
}

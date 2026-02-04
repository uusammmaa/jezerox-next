import { Section, Card } from "@/components/ui";

const services = [
  {
    title: "Product strategy",
    description: "Discovery, roadmaps, MVP definition, and validation.",
    icon: "◇",
  },
  {
    title: "UX and UI design",
    description: "Research, design systems, prototypes, and usability.",
    icon: "◈",
  },
  {
    title: "Web and mobile engineering",
    description: "Scalable apps built with modern stacks.",
    icon: "⬡",
  },
  {
    title: "Data, AI, and automation",
    description: "Intelligent workflows and insights.",
    icon: "⬢",
  },
  {
    title: "Cloud, DevOps, and security",
    description: "Infrastructure, observability, and compliance.",
    icon: "▷",
  },
  {
    title: "Growth and optimization",
    description: "Analytics, experiments, and conversion improvements.",
    icon: "▶",
  },
] as const;

export function ServicesOverview() {
  return (
    <Section id="services">
      <div className="text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
            End-to-end product engineering
          </h2>
          <p className="mt-2 text-[var(--text-muted)]">
            Strategy, UX, engineering, and growth in one focused team.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon }, i) => (
            <Card
              key={title}
              href="/services"
              className={`h-full opacity-0 animate-slide-up animation-fill-both ${
                i === 0 ? "animation-delay-200" :
                i === 1 ? "animation-delay-300" :
                i === 2 ? "animation-delay-400" :
                i === 3 ? "animation-delay-500" :
                i === 4 ? "animation-delay-600" : "animation-delay-700"
              }`}
            >
              <span
                className="text-2xl text-[var(--blue-500)]"
                aria-hidden
              >
                {icon}
              </span>
              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[var(--text-primary)]">
                {title}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {description}
              </p>
            </Card>
          ))}
        </div>
    </Section>
  );
}

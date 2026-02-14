import { Section, Card } from "@/components/ui";

// cspell:ignore roadmaps
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
          <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
            End-to-end product engineering
          </h2>
          <p className="mt-2 text-text-muted">
            Strategy, UX, engineering, and growth in one focused team.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ title, description, icon }) => (
            <Card key={title} href="/services" className="h-full">
              <span
                className="text-2xl text-accent"
                aria-hidden
              >
                {icon}
              </span>
              <h3 className="mt-4 font-(family-name:--font-space-grotesk) text-lg font-semibold text-text-primary">
                {title}
              </h3>
              <p className="mt-2 text-sm text-text-secondary">
                {description}
              </p>
            </Card>
          ))}
        </div>
    </Section>
  );
}

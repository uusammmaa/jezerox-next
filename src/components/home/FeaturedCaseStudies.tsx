import { Section, Card } from "@/components/ui";

const caseStudies = [
  {
    title: "Fintech platform modernization",
    description: "Reduced time-to-market and improved reliability for a regulated payments product.",
    href: "/work",
  },
  {
    title: "Healthcare data analytics dashboard",
    description: "Secure, HIPAA-aligned dashboards for clinical and operations teams.",
    href: "/work",
  },
  {
    title: "SaaS growth and optimization",
    description: "Conversion and activation improvements with clear attribution.",
    href: "/work",
  },
] as const;

export function FeaturedCaseStudies() {
  return (
    <Section id="case-studies">
      <div className="text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
            Featured case studies
          </h2>
          <p className="mt-2 text-[var(--text-muted)]">
            Proof in production — see how we deliver.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {caseStudies.map(({ title, description, href }, i) => (
            <Card
              key={title}
              href={href}
              glow
              className={`opacity-0 animate-slide-up animation-fill-both ${
                i === 0 ? "animation-delay-200" : i === 1 ? "animation-delay-300" : "animation-delay-400"
              }`}
            >
              <div className="aspect-video rounded-[var(--radius-md)] bg-[var(--navy-800)]" />
              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[var(--text-primary)]">
                {title}
              </h3>
              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                {description}
              </p>
              <span className="mt-3 inline-block text-sm font-medium text-[var(--blue-500)]">
                Learn more →
              </span>
            </Card>
          ))}
        </div>
    </Section>
  );
}

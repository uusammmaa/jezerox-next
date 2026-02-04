import { Section } from "@/components/ui";


const stats = [
  { value: "50+", label: "shipped products", icon: "🚀" },
  { value: "95%", label: "client retention", icon: "◎" },
  { value: "5+", label: "industries served", icon: "◉" },
] as const;

export function SocialProof() {
  return (
    <Section id="social-proof">
      <div className="flex flex-col gap-10 md:gap-12">
          <div className="text-center">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              Trusted by teams building high-impact products
            </h2>
            <p className="mt-2 text-text-muted">
              Partners across fintech, health, SaaS, logistics, retail, and
              education.
            </p>
          </div>
          {/* Placeholder logos row */}
          <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
            <span className="text-sm font-medium text-text-muted">
              [Client logos]
            </span>
          </div>
          {/* Stats below logos — single column stack */}
          <div className="grid gap-6 sm:grid-cols-3">
            {stats.map(({ value, label, icon }) => (
              <div
                key={label}
                className="rounded-lg border border-border bg-bg-surface p-6 text-center"
              >
                <span className="text-2xl text-accent-teal" aria-hidden>
                  {icon}
                </span>
                <p className="mt-2 font-(family-name:--font-space-grotesk) text-3xl font-bold text-text-primary">
                  {value}
                </p>
                <p className="mt-1 text-sm text-text-muted">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
    </Section>
  );
}

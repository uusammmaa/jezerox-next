import { Section, Card } from "@/components/ui";

const testimonials = [
  {
    quote:
      "JezeroX delivered on time and helped us ship a secure, scalable product. Clear communication and senior execution.",
    author: "Placeholder",
    role: "Client",
  },
  {
    quote:
      "From discovery to launch, the team was focused on outcomes. We’d work with them again.",
    author: "Placeholder",
    role: "Client",
  },
] as const;

export function Testimonials() {
  return (
    <Section id="testimonials">
      <div className="text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
            Teams trust JezeroX to deliver
          </h2>
          <p className="mt-2 text-[var(--text-muted)]">
            Clear outcomes, predictable delivery, and software that performs.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {testimonials.map(({ quote, author, role }) => (
            <Card key={quote.slice(0, 24)}>
              <blockquote className="text-[var(--text-secondary)]">
                &ldquo;{quote}&rdquo;
              </blockquote>
              <footer className="mt-4">
                <cite className="not-italic font-semibold text-[var(--text-primary)]">
                  {author}
                </cite>
                <span className="text-sm text-[var(--text-muted)]"> — {role}</span>
              </footer>
            </Card>
          ))}
        </div>
    </Section>
  );
}

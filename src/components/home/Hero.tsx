import { Button, Container } from "@/components/ui";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-24 lg:py-32"
      aria-label="Hero"
    >
      {/* Optional subtle grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--border-subtle) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="font-(family-name:--font-space-grotesk) text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl md:leading-[1.1]">
            Build faster. Scale smarter.
          </h1>
          <p className="mt-6 text-lg text-text-secondary sm:text-xl">
            JezeroX is a product engineering partner for ambitious teams. We
            design, build, and scale secure software from MVP to enterprise.
          </p>
          <p className="mt-3 text-text-muted">
            One senior team across strategy, design, engineering, and growth.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" variant="primary" size="lg">
              Start a project
            </Button>
            <Button href="/work" variant="secondary" size="lg">
              See our work
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}

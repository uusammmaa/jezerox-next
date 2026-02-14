import Link from "next/link";
import { Button, Container } from "@/components/ui";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden pt-40 pb-32"
      aria-label="Hero"
    >
      <div className="pointer-events-none absolute inset-0 grid-pattern opacity-40" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 h-full w-full -translate-x-1/2 -translate-y-1/2 hero-glow" />
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center">
          <div
            className="mb-8 inline-flex items-center gap-2 rounded-full border border-[var(--accent-soft)] bg-[var(--accent-soft)] px-3 py-1 text-xs font-bold tracking-[0.2em] text-[var(--blue-500)]"
            role="status"
          >
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--blue-500)] opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--blue-500)]" />
            </span>
            PRODUCT ENGINEERING
          </div>
          <h1 className="font-(family-name:--font-space-grotesk) text-5xl font-bold leading-[1.1] tracking-tighter text-text-primary md:text-7xl lg:text-8xl">
            Build faster. Scale{" "}
            <span className="bg-gradient-to-r from-[var(--blue-500)] via-[var(--blue-400)] to-[var(--teal-400)] bg-clip-text text-transparent">
              smarter.
            </span>
          </h1>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-text-secondary md:text-xl">
            JezeroX is a product engineering partner for ambitious teams. We
            design, build, and scale secure software from MVP to
            enterprise, including AI, data automation, and custom machine
            learning.
          </p>
          <p className="mt-3 text-text-muted">
            One senior team across strategy, design, engineering, and growth.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
              Start a project
            </Button>
            <Link
              href="/work"
              className="glass flex h-12 w-full items-center justify-center rounded-[var(--radius-md)] px-5 text-base font-semibold transition-all hover:bg-white/10 sm:w-auto"
            >
              See our work
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

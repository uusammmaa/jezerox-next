import { Button, Container } from "@/components/ui";

/** Abstract geometric illustration — inline SVG, no network requests */
function HeroIllustration() {
  return (
    <div
      className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden"
      aria-hidden
    >
      {/* Soft gradient orbs — very low opacity, subtle pulse via CSS */}
      <div
        className="absolute left-1/2 top-1/4 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.12] blur-[80px] animate-hero-glow"
        style={{ background: "radial-gradient(circle, var(--blue-500) 0%, transparent 70%)" }}
      />
      <div
        className="absolute right-1/4 top-1/2 h-[300px] w-[400px] rounded-full opacity-[0.08] blur-[60px] animate-hero-glow animation-delay-500"
        style={{ background: "radial-gradient(circle, var(--teal-500) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 h-[250px] w-[350px] rounded-full opacity-[0.06] blur-[50px] animate-hero-glow animation-delay-1000"
        style={{ background: "radial-gradient(circle, var(--blue-400) 0%, transparent 70%)" }}
      />
      {/* Geometric mesh — brand colors, minimal */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.06]"
        viewBox="0 0 1200 600"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="hero-mesh-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="var(--blue-500)" />
            <stop offset="100%" stopColor="var(--teal-500)" />
          </linearGradient>
        </defs>
        {/* Abstract arcs and lines */}
        <path
          d="M0 300 Q300 100 600 300 T1200 300"
          stroke="url(#hero-mesh-blue)"
          strokeWidth="0.5"
          fill="none"
        />
        <path
          d="M0 400 Q400 200 800 400 T1200 400"
          stroke="url(#hero-mesh-blue)"
          strokeWidth="0.5"
          fill="none"
        />
        <circle cx="200" cy="200" r="80" stroke="var(--blue-500)" strokeWidth="0.5" fill="none" />
        <circle cx="1000" cy="350" r="100" stroke="var(--teal-500)" strokeWidth="0.5" fill="none" />
        <polygon
          points="600,150 700,250 600,350 500,250"
          stroke="var(--blue-400)"
          strokeWidth="0.5"
          fill="none"
        />
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section
      className="relative overflow-hidden py-16 md:py-24 lg:py-32"
      aria-label="Hero"
    >
      {/* Grid overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(var(--border-subtle) 1px, transparent 1px),
            linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
      />
      <HeroIllustration />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            className="font-[family-name:var(--font-space-grotesk)] text-4xl font-bold tracking-tight text-[var(--text-primary)] opacity-0 sm:text-5xl md:text-6xl md:leading-[1.1] animate-slide-up animation-fill-both animation-delay-100"
          >
            Build faster. Scale smarter.
          </h1>
          <p
            className="mt-6 text-lg text-[var(--text-secondary)] opacity-0 sm:text-xl animate-slide-up animation-fill-both animation-delay-200"
          >
            JezeroX is a product engineering partner for ambitious teams. We
            design, build, and scale secure software from MVP to enterprise.
          </p>
          <p className="mt-3 text-[var(--text-muted)] opacity-0 animate-fade-in animation-fill-both animation-delay-400">
            One senior team across strategy, design, engineering, and growth.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 opacity-0 animate-slide-up animation-fill-both animation-delay-500">
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

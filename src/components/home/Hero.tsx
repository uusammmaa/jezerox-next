import { ArrowRight } from "lucide-react";
import {
  AuroraField,
  Button,
  Container,
  Eyebrow,
  GradientText,
  MagneticButton,
  Reveal,
} from "@/components/ui";
import { company } from "@/lib/content";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28 pb-20" aria-label="Hero">
      <AuroraField />
      {/* Legibility scrim */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        aria-hidden
        style={{
          background:
            "linear-gradient(90deg, rgba(8,7,12,0.92) 0%, rgba(8,7,12,0.72) 34%, rgba(8,7,12,0.12) 66%, rgba(8,7,12,0.35) 100%), linear-gradient(0deg, rgba(8,7,12,0.85) 0%, transparent 32%, transparent 72%, rgba(8,7,12,0.5) 100%)",
        }}
      />
      <Container className="relative z-10">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,440px)]">
          <div className="max-w-2xl">
          <Reveal>
            <Eyebrow>AI Systems · Automation · Full-Stack</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 text-[clamp(3rem,8.2vw,6.4rem)] font-bold leading-[0.98] tracking-[-0.035em]">
              Build faster.
              <br />
              Scale <GradientText animate>smarter.</GradientText>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-xl text-lg text-fg-secondary md:text-xl">
              {company.brand} designs, builds, and ships intelligent software — AI automation,
              AI agents, and full-stack products that scale from MVP to enterprise.
            </p>
          </Reveal>
          <Reveal delay={340}>
            <p className="mt-3 text-fg-muted">
              One senior engineer across automation, AI, and full-stack.
            </p>
          </Reveal>
          <Reveal delay={440}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <MagneticButton>
                <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                  Start a project
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </MagneticButton>
              <Button href="/work" variant="secondary" size="lg" className="w-full sm:w-auto">
                See our work
              </Button>
            </div>
          </Reveal>
          <Reveal delay={560}>
            <div className="mt-11 flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-xs tracking-wide text-fg-muted">
              <span className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-amber shadow-[0_0_10px_var(--amber)]" />
                Top Rated on Upwork
              </span>
              <span className="text-fg-faint">/</span>
              <span>{company.location}</span>
              <span className="text-fg-faint">/</span>
              <span>{company.responseTime}</span>
            </div>
          </Reveal>
          </div>
          <Reveal delay={300} className="hidden lg:block">
            <HeroVisual />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

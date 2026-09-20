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
            <Eyebrow>AI Automation · Internal Tools · Custom Software</Eyebrow>
          </Reveal>
          <Reveal delay={120}>
            {/* Longer headline than a two-word one, so the clamp ceiling is lower. */}
            <h1 className="mt-6 text-[clamp(2.5rem,5.6vw,4.25rem)] font-bold leading-[1.02] tracking-[-0.03em]">
              Automate the work your team should not be doing{" "}
              <GradientText animate>manually.</GradientText>
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-7 max-w-xl text-lg text-fg-secondary md:text-xl">
              {company.brand} builds production-ready AI automation and internal software that
              connects your tools, removes repetitive work, and helps your team move faster —
              without replacing the systems you already use.
            </p>
          </Reveal>
          <Reveal delay={440}>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <MagneticButton>
                <Button href="/contact" variant="primary" size="lg" className="w-full sm:w-auto">
                  Tell us what you want to automate
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

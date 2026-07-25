import { type ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { Section, Button, Eyebrow, MagneticButton, Reveal } from "@/components/ui";

interface CtaBandProps {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string; external?: boolean };
}

/** The reusable closing call-to-action band (used on every page — DRY). */
export function CtaBand({
  eyebrow = "Start a project",
  title,
  subtitle,
  primary = { label: "Start a project", href: "/contact" },
  secondary,
}: CtaBandProps) {
  return (
    <Section>
      <Reveal>
        <div className="relative overflow-hidden rounded-[var(--radius-2xl)] border border-line bg-ink-900 px-6 py-16 text-center md:px-12 md:py-24">
          <div className="grid-pattern pointer-events-none absolute inset-0 opacity-60" aria-hidden />
          <div
            className="pointer-events-none absolute inset-0"
            aria-hidden
            style={{
              background:
                "radial-gradient(60% 120% at 50% 0%, rgba(255,211,78,0.16), transparent 60%), radial-gradient(80% 120% at 50% 120%, rgba(196,47,134,0.18), transparent 60%)",
            }}
          />
          <div className="relative">
            <Eyebrow center>{eyebrow}</Eyebrow>
            <h2 className="mx-auto mt-5 max-w-3xl text-4xl leading-[1.02] sm:text-5xl md:text-6xl">{title}</h2>
            {subtitle ? <p className="mx-auto mt-6 max-w-xl text-lg text-fg-secondary">{subtitle}</p> : null}
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <MagneticButton>
                <Button href={primary.href} variant="primary" size="lg">
                  {primary.label}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </MagneticButton>
              {secondary ? (
                <Button
                  href={secondary.href}
                  variant="secondary"
                  size="lg"
                  {...(secondary.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  {secondary.label}
                </Button>
              ) : null}
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

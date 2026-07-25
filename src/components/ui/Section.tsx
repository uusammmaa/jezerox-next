import { type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Container } from "./Container";

type Tone = "page" | "surface" | "elevated";

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  /** Background tone. `surface`/`elevated` get a top hairline for delineation. */
  tone?: Tone;
  /** Skip the inner Container (full-bleed content) */
  bleed?: boolean;
}

const tones: Record<Tone, string> = {
  page: "",
  surface: "bg-ink-900 border-t border-line",
  elevated: "bg-ink-850 border-t border-line",
};

/** Vertical rhythm section with optional background tone. */
export function Section({ children, id, className, tone = "page", bleed = false }: Readonly<SectionProps>) {
  return (
    <section
      id={id}
      className={cn("py-[clamp(4.5rem,9vw,8rem)]", tones[tone], className)}
    >
      {bleed ? children : <Container>{children}</Container>}
    </section>
  );
}

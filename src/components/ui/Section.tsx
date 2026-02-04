import { type ReactNode } from "react";
import { Container } from "./container";

interface SectionProps {
  children: ReactNode;
  /** Optional id for anchor links */
  id?: string;
  /** Optional className for wrapper (e.g. background) */
  className?: string;
  /** If true, no Container wrapper (full bleed) */
  fullWidth?: boolean;
}

/**
 * Vertical section with consistent spacing. Single-column stack layout.
 * Section spacing: 96px desktop, 48px mobile (plan: section spacing).
 */
export function Section({
  children,
  id,
  className = "",
  fullWidth = false,
}: Readonly<SectionProps>) {
  const spacing = "py-12 md:py-16 lg:py-[var(--space-section)]";
  const content = fullWidth ? (
    children
  ) : (
    <Container>{children}</Container>
  );

  return (
    <section
      id={id}
      className={`${spacing} ${className}`.trim()}
    >
      {content}
    </section>
  );
}

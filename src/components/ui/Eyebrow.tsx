import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface EyebrowProps {
  children: ReactNode;
  className?: string;
  /** Center the leading rule + text */
  center?: boolean;
}

/** Mono uppercase kicker with a gradient tick. Replaces repeated label markup. */
export function Eyebrow({ children, className, center = false }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-fg-muted",
        center && "justify-center",
        className,
      )}
    >
      <span
        className="h-px w-6 shrink-0"
        style={{ background: "var(--gradient-brand)" }}
        aria-hidden
      />
      {children}
    </span>
  );
}

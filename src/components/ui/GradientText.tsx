import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  /** Slow animated sweep (use sparingly — hero only) */
  animate?: boolean;
}

/** Brand-gradient clipped text. The one place bg-clip logic lives (DRY). */
export function GradientText({ children, className, animate = false }: GradientTextProps) {
  return (
    <span className={cn("grad-text", animate && "grad-text-animate", className)}>
      {children}
    </span>
  );
}

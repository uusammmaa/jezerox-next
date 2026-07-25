import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

/** Small mono pill for tech/skill tags. */
export function TechTag({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-line px-3 py-1 font-mono text-[0.68rem] uppercase tracking-wide text-fg-secondary",
        className,
      )}
    >
      {children}
    </span>
  );
}

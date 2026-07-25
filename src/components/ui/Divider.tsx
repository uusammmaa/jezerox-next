import { cn } from "@/lib/cn";

/** Hairline rule. `gradient` renders a brand-tinted line. */
export function Divider({ className, gradient = false }: { className?: string; gradient?: boolean }) {
  return (
    <hr
      className={cn("h-px border-0", gradient ? "" : "bg-line", className)}
      style={gradient ? { background: "var(--gradient-brand)", opacity: 0.5 } : undefined}
    />
  );
}

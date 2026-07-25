import { cn } from "@/lib/cn";
import { GradientText } from "./GradientText";

interface StatProps {
  value: string;
  label: string;
  note?: string;
  className?: string;
}

/** A single proof metric. Use only with real, defensible numbers. */
export function Stat({ value, label, note, className }: StatProps) {
  return (
    <div className={cn("text-center sm:text-left", className)}>
      <div className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
        <GradientText>{value}</GradientText>
      </div>
      <div className="mt-1 font-medium text-fg">{label}</div>
      {note ? <div className="text-sm text-fg-faint">{note}</div> : null}
    </div>
  );
}

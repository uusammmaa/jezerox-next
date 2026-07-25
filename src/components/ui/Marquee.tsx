import { cn } from "@/lib/cn";

/** Infinite horizontal ticker (capabilities / tech). Pauses on hover. */
export function Marquee({ items, className }: { items: readonly string[]; className?: string }) {
  const doubled = [...items, ...items];
  return (
    <div
      className={cn("group overflow-hidden border-y border-line bg-ink-900 py-5", className)}
      aria-hidden
    >
      <div className="marquee-track flex w-max items-center gap-14 group-hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-14 whitespace-nowrap font-mono text-sm uppercase tracking-[0.14em] text-fg-muted"
          >
            {item}
            <span className="text-[0.5rem] text-magenta">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

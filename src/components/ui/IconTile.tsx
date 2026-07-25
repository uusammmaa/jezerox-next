import { type LucideIcon } from "lucide-react";
import { cn } from "@/lib/cn";

interface IconTileProps {
  icon: LucideIcon;
  size?: "md" | "lg";
  className?: string;
}

/** Gradient-tinted icon container used on service/feature cards. */
export function IconTile({ icon: Icon, size = "md", className }: IconTileProps) {
  const box = size === "lg" ? "h-14 w-14 rounded-2xl" : "h-12 w-12 rounded-xl";
  const glyph = size === "lg" ? "h-6 w-6" : "h-5 w-5";
  return (
    <span
      className={cn(
        "grid place-items-center border border-line bg-[rgba(196,47,134,0.1)]",
        box,
        className,
      )}
      aria-hidden
    >
      <Icon className={cn(glyph, "text-magenta")} strokeWidth={1.8} />
    </span>
  );
}

import { type ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";

interface SectionHeadingProps {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  center?: boolean;
  className?: string;
  /** Heading level for correct document outline (default h2) */
  as?: "h1" | "h2" | "h3";
}

/** Eyebrow + heading + lede. Replaces the heading block pasted across ~10 pages. */
export function SectionHeading({
  eyebrow,
  title,
  lede,
  center = false,
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  return (
    <div className={cn(center ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className)}>
      {eyebrow ? <Eyebrow center={center}>{eyebrow}</Eyebrow> : null}
      <Tag
        className={cn(
          "mt-4 text-balance text-3xl leading-[1.05] sm:text-4xl md:text-5xl",
          Tag === "h1" && "text-4xl sm:text-6xl md:text-7xl",
        )}
      >
        {title}
      </Tag>
      {lede ? (
        <p className={cn("mt-5 text-lg text-fg-muted", center && "mx-auto max-w-prose")}>
          {lede}
        </p>
      ) : null}
    </div>
  );
}

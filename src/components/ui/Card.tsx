import { type ReactNode } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

interface CardProps {
  children: ReactNode;
  className?: string;
  href?: string;
  /** Show the animated gradient hairline border on hover */
  interactive?: boolean;
  /** Featured cards: add a soft magenta glow on hover */
  glow?: boolean;
}

const base =
  "relative rounded-[var(--radius-xl)] border border-line bg-ink-850 p-6 transition-[transform,background,border-color,box-shadow] duration-300 ease-[var(--ease-out)]";
const hover = "hover:-translate-y-1 hover:bg-ink-800";

export function Card({ children, className, href, interactive = true, glow = false }: Readonly<CardProps>) {
  const classes = cn(
    base,
    interactive && [hover, "gradient-border"],
    glow && "hover:shadow-[var(--glow-magenta)]",
    className,
  );
  if (href) {
    const external = href.startsWith("http");
    return (
      <Link
        href={href}
        className={cn("block", classes)}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }
  return <div className={classes}>{children}</div>;
}

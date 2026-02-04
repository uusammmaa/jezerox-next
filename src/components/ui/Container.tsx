import { type ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
  as?: "div" | "section" | "main";
}

/**
 * Max-width container with responsive padding. Use for page content.
 * Design: 12-column feel, max 1280px, padding 24–32px.
 */
export function Container({
  children,
  className = "",
  as: Tag = "div",
}: ContainerProps) {
  return (
    <Tag
      className={`mx-auto w-full max-w-[var(--container-max)] px-[var(--container-padding)] sm:px-6 md:px-8 ${className}`}
    >
      {children}
    </Tag>
  );
}

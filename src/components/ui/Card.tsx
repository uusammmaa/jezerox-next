import { type ReactNode } from "react";
import Link from "next/link";

interface CardProps {
  children: ReactNode;
  className?: string;
  /** Optional link wrapper */
  href?: string;
  /** Optional hover glow (featured cards) */
  glow?: boolean;
}

const baseStyles =
  "rounded-[var(--radius-lg)] border border-[var(--border-subtle)] bg-[var(--navy-900)] p-6 shadow-[0_1px_2px_rgba(5,10,20,0.4)] transition-[border-color,box-shadow] duration-150 hover:border-[var(--accent-soft)] hover:shadow-[0_8px_24px_rgba(5,10,20,0.35)]";

export function Card({
  children,
  className = "",
  href,
  glow = false,
}: CardProps) {
  const styles = `${baseStyles} ${glow ? "hover:shadow-[var(--glow-accent)]" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={`block ${styles}`}>
        {children}
      </Link>
    );
  }

  return <div className={styles}>{children}</div>;
}

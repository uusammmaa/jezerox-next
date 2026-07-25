"use client";

import { type ReactNode, useRef } from "react";
import { cn } from "@/lib/cn";

/** Wraps a CTA so it drifts toward the cursor. Pointer-fine + motion-safe only. */
export function MagneticButton({
  children,
  strength = 0.3,
  className,
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);

  const enabled = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(pointer: fine)").matches &&
    !window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el || !enabled()) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left - r.width / 2) * strength;
    const y = (e.clientY - r.top - r.height / 2) * strength;
    el.style.transform = `translate(${x}px, ${y}px)`;
  };
  const reset = () => {
    if (ref.current) ref.current.style.transform = "";
  };

  return (
    <span
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={cn(
        "inline-block transition-transform duration-300 ease-[var(--ease-out)] will-change-transform",
        className,
      )}
    >
      {children}
    </span>
  );
}

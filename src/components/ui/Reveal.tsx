"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";
import { usePrefersReducedMotion } from "@/lib/use-prefers-reduced-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Stagger delay in ms */
  delay?: number;
}

/**
 * Fade + rise on scroll into view. Zero-dependency, one-shot,
 * respects prefers-reduced-motion (renders visible immediately).
 */
export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = usePrefersReducedMotion();
  const [shown, setShown] = useState(false);

  // Latched: once revealed, stay revealed. `reduce` is live, so a viewer turning
  // the OS preference off mid-session would otherwise flip this back to false and
  // animate already-visible content out and back in.
  const revealed = reduce === true || shown;

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce !== false || shown) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce, shown]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-[var(--ease-out)] will-change-[opacity,transform]",
        revealed ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

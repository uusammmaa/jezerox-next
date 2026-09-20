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
  const [inView, setInView] = useState(false);

  // `reduce` is null until hydration, so the server and the first client render
  // both emit the hidden state — the same markup this component shipped before.
  const shown = reduce === true || inView;

  useEffect(() => {
    const el = ref.current;
    if (!el || reduce !== false) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [reduce]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-[var(--ease-out)] will-change-[opacity,transform]",
        shown ? "translate-y-0 opacity-100" : "translate-y-7 opacity-0",
        className,
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

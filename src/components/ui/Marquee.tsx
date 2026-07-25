"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

/**
 * Auto-scrolling ticker that is also grab-to-scroll and wheel-scrollable.
 * Pauses auto-scroll while hovered or dragged; loops seamlessly.
 */
export function Marquee({ items, className }: { items: readonly string[]; className?: string }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const doubled = [...items, ...items];

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    let raf = 0;
    let paused = false;
    let dragging = false;
    let startX = 0;
    let startScroll = 0;

    const half = () => el.scrollWidth / 2;
    const wrap = () => {
      if (el.scrollLeft >= half()) el.scrollLeft -= half();
      else if (el.scrollLeft <= 0) el.scrollLeft += half();
    };

    const tick = () => {
      if (!paused && !dragging && !reduce) {
        el.scrollLeft += 0.5;
        wrap();
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);

    const onEnter = () => (paused = true);
    const onLeave = () => {
      paused = false;
      dragging = false;
      el.classList.remove("cursor-grabbing");
    };
    const onDown = (e: PointerEvent) => {
      dragging = true;
      startX = e.clientX;
      startScroll = el.scrollLeft;
      el.setPointerCapture(e.pointerId);
      el.classList.add("cursor-grabbing");
    };
    const onMove = (e: PointerEvent) => {
      if (!dragging) return;
      el.scrollLeft = startScroll - (e.clientX - startX);
      wrap();
    };
    const onUp = (e: PointerEvent) => {
      dragging = false;
      try { el.releasePointerCapture(e.pointerId); } catch {}
      el.classList.remove("cursor-grabbing");
    };
    const onWheel = (e: WheelEvent) => {
      const delta = Math.abs(e.deltaX) > Math.abs(e.deltaY) ? e.deltaX : e.deltaY;
      if (delta) {
        el.scrollLeft += delta;
        wrap();
      }
    };

    el.addEventListener("pointerenter", onEnter);
    el.addEventListener("pointerleave", onLeave);
    el.addEventListener("pointerdown", onDown);
    el.addEventListener("pointermove", onMove);
    el.addEventListener("pointerup", onUp);
    el.addEventListener("wheel", onWheel, { passive: true });

    return () => {
      cancelAnimationFrame(raf);
      el.removeEventListener("pointerenter", onEnter);
      el.removeEventListener("pointerleave", onLeave);
      el.removeEventListener("pointerdown", onDown);
      el.removeEventListener("pointermove", onMove);
      el.removeEventListener("pointerup", onUp);
      el.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <div className={cn("border-y border-line bg-ink-900 py-5", className)} aria-hidden>
      <div
        ref={scrollerRef}
        className="flex cursor-grab select-none overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex w-max shrink-0 items-center gap-14 px-7">
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
    </div>
  );
}

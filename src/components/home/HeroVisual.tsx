"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

const nodes = [
  { label: "AI Agents", x: 50, y: 5, color: "var(--magenta)" },
  { label: "RAG", x: 90, y: 26, color: "var(--amber)" },
  { label: "n8n", x: 95, y: 64, color: "var(--indigo)" },
  { label: "Automation", x: 58, y: 95, color: "var(--magenta)" },
  { label: "LLM", x: 14, y: 80, color: "var(--amber)" },
  { label: "Next.js", x: 6, y: 34, color: "var(--indigo)" },
];

/**
 * Hero visual: a 3D distorted core (react-three-fiber) inside a rotating orbit of
 * capability nodes on animated connectors, with cursor parallax. Falls back to a
 * static gradient core when the viewer prefers reduced motion.
 */
export function HeroVisual() {
  const ref = useRef<HTMLDivElement>(null);
  const [use3d, setUse3d] = useState(false);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setUse3d(!reduce);

    const el = ref.current;
    if (!el || reduce || !window.matchMedia("(pointer: fine)").matches) return;
    let raf = 0;
    const target = { x: 0, y: 0 };
    const cur = { x: 0, y: 0 };
    const onMove = (e: MouseEvent) => {
      target.x = (e.clientX / window.innerWidth - 0.5) * 18;
      target.y = (e.clientY / window.innerHeight - 0.5) * 18;
    };
    const loop = () => {
      cur.x += (target.x - cur.x) * 0.06;
      cur.y += (target.y - cur.y) * 0.06;
      el.style.transform = `translate(${cur.x}px, ${cur.y}px)`;
      raf = requestAnimationFrame(loop);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    loop();
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[480px]" aria-hidden>
      <div
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(closest-side, rgba(196,47,134,0.22), rgba(75,74,207,0.12), transparent 72%)" }}
      />
      <div ref={ref} className="absolute inset-0">
        <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
          <defs>
            <linearGradient id="hv-grad" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="var(--indigo)" />
              <stop offset="0.55" stopColor="var(--magenta)" />
              <stop offset="1" stopColor="var(--amber)" />
            </linearGradient>
          </defs>
          <g fill="none" stroke="url(#hv-grad)" strokeWidth="1.5" opacity="0.7">
            {nodes.map((n) => (
              <line key={n.label} className="flow-dash" x1="200" y1="200" x2={n.x * 4} y2={n.y * 4} />
            ))}
          </g>
          <circle cx="200" cy="200" r="172" fill="none" stroke="var(--line-strong)" strokeWidth="1" strokeDasharray="2 8" className="spin-slow" />
          <circle cx="200" cy="200" r="120" fill="none" stroke="rgba(243,240,249,0.08)" strokeWidth="1" />
          {/* static core fallback (reduced motion / pre-hydration) */}
          {!use3d ? (
            <>
              <circle cx="200" cy="200" r="46" fill="none" stroke="url(#hv-grad)" strokeWidth="1.5" opacity="0.5" />
              <circle cx="200" cy="200" r="30" fill="#0d0b14" stroke="url(#hv-grad)" strokeWidth="2" />
              <circle cx="200" cy="200" r="15" fill="url(#hv-grad)" />
            </>
          ) : null}
        </svg>

        {/* 3D core */}
        {use3d ? (
          <div className="absolute left-1/2 top-1/2 h-[52%] w-[52%] -translate-x-1/2 -translate-y-1/2">
            <HeroScene />
          </div>
        ) : null}

        {/* capability nodes */}
        {nodes.map((n, i) => (
          <div
            key={n.label}
            className="float-loop absolute z-10 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-line bg-ink-900/80 px-3 py-1.5 font-mono text-[0.68rem] uppercase tracking-wide text-fg-secondary backdrop-blur"
            style={{ left: `${n.x}%`, top: `${n.y}%`, animationDelay: `${i * 0.5}s` }}
          >
            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full align-middle" style={{ background: n.color }} />
            {n.label}
          </div>
        ))}
      </div>
    </div>
  );
}

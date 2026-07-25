import { type Project } from "@/lib/content";

type Variant = NonNullable<Project["visual"]>;

const C = {
  bg: "#0d0b14",
  node: "#171320",
  node2: "#1d1729",
  line: "#2e2540",
  muted: "#4a4360",
  text: "#6e6784",
  indigo: "#4b4acf",
  magenta: "#c42f86",
  amber: "#ffd34e",
};

/** Themed, animated SVG illustration for case studies without a real screenshot. */
export function ProjectVisual({ variant, className }: { variant: Variant; className?: string }) {
  return (
    <svg
      viewBox="0 0 480 270"
      preserveAspectRatio="xMidYMid slice"
      className={className}
      role="img"
      aria-hidden
    >
      <defs>
        <linearGradient id={`pv-${variant}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={C.indigo} />
          <stop offset="0.55" stopColor={C.magenta} />
          <stop offset="1" stopColor={C.amber} />
        </linearGradient>
      </defs>
      <rect width="480" height="270" fill={C.bg} />
      {scenes[variant](`pv-${variant}`)}
    </svg>
  );
}

const scenes: Record<Variant, (g: string) => React.ReactNode> = {
  /* ---- n8n-style workflow ---- */
  workflow: (g) => (
    <>
      <g fill="none" stroke={`url(#${g})`} strokeWidth="2">
        <path className="flow-dash" d="M120 135 C160 135 165 92 200 92" />
        <path className="flow-dash" d="M120 135 C160 135 165 182 200 182" />
        <path className="flow-dash" d="M280 92 C320 92 325 135 360 135" />
        <path className="flow-dash" d="M280 182 C320 182 325 135 360 135" />
      </g>
      {[
        { x: 44, y: 117, c: C.indigo },
        { x: 200, y: 74, c: C.magenta },
        { x: 200, y: 164, c: C.magenta },
        { x: 360, y: 117, c: C.amber },
      ].map((n, i) => (
        <g key={i} className="float-loop" style={{ animationDelay: `${i * 0.6}s` }}>
          <rect x={n.x} y={n.y} width="76" height="36" rx="9" fill={C.node} stroke={C.line} />
          <circle cx={n.x + 15} cy={n.y + 18} r="5" fill={n.c} />
          <rect x={n.x + 26} y={n.y + 12} width="38" height="4" rx="2" fill={C.muted} />
          <rect x={n.x + 26} y={n.y + 20} width="24" height="4" rx="2" fill={C.text} />
        </g>
      ))}
      <circle cx="378" cy="135" r="3" fill={C.amber} className="pulse-soft" />
    </>
  ),

  /* ---- multi-agent / RAG ---- */
  agent: (g) => (
    <>
      <g fill="none" stroke={C.line} strokeWidth="1.5">
        <line x1="240" y1="135" x2="140" y2="70" />
        <line x1="240" y1="135" x2="340" y2="70" />
        <line x1="240" y1="135" x2="120" y2="190" />
        <line x1="240" y1="135" x2="360" y2="190" />
      </g>
      <g fill="none" stroke={`url(#${g})`} strokeWidth="2">
        <path className="flow-dash" d="M240 135 L140 70" />
        <path className="flow-dash" d="M240 135 L120 190" />
      </g>
      {[
        { x: 108, y: 54, w: 64, label: C.indigo },
        { x: 308, y: 54, w: 64, label: C.magenta },
        { x: 88, y: 174, w: 64, label: C.amber },
        { x: 328, y: 174, w: 64, label: C.indigo },
      ].map((n, i) => (
        <g key={i} className="float-loop" style={{ animationDelay: `${i * 0.5}s` }}>
          <rect x={n.x} y={n.y} width={n.w} height="32" rx="8" fill={C.node} stroke={C.line} />
          <circle cx={n.x + 13} cy={n.y + 16} r="4" fill={n.label} />
          <rect x={n.x + 22} y={n.y + 14} width="30" height="4" rx="2" fill={C.muted} />
        </g>
      ))}
      <circle cx="240" cy="135" r="30" fill={C.node2} stroke={`url(#${g})`} strokeWidth="2" />
      <circle cx="240" cy="135" r="14" fill={`url(#${g})`} className="pulse-soft" />
    </>
  ),

  /* ---- analytics dashboard ---- */
  dashboard: (g) => (
    <>
      <rect x="40" y="34" width="400" height="202" rx="14" fill={C.node} stroke={C.line} />
      {/* KPI tiles */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={56 + i * 126} y={50} width="112" height="52" rx="9" fill={C.node2} stroke={C.line} />
          <rect x={68 + i * 126} y={62} width="40" height="6" rx="3" fill={C.text} />
          <rect x={68 + i * 126} y={76} width="66" height="12" rx="4" fill={i === 1 ? C.magenta : C.muted} />
        </g>
      ))}
      {/* bar chart */}
      {[26, 44, 34, 58, 48, 70].map((h, i) => (
        <rect key={i} x={64 + i * 22} y={200 - h} width="12" height={h} rx="3" fill={i === 5 ? `url(#${g})` : C.muted} />
      ))}
      {/* line chart */}
      <polyline
        points="240,190 268,168 296,176 324,150 352,158 380,130 408,138"
        fill="none"
        stroke={`url(#${g})`}
        strokeWidth="2.5"
        className="flow-dash"
      />
      <circle cx="408" cy="138" r="4" fill={C.amber} className="pulse-soft" />
    </>
  ),

  /* ---- real-time AI SaaS ---- */
  saas: (g) => (
    <>
      <rect x="40" y="34" width="400" height="202" rx="14" fill={C.node} stroke={C.line} />
      {/* waveform */}
      <polyline
        points="64,100 84,78 104,120 124,66 144,128 164,84 184,110 204,72 224,118 244,90"
        fill="none"
        stroke={`url(#${g})`}
        strokeWidth="2.5"
        className="flow-dash"
      />
      {/* score gauge */}
      <circle cx="360" cy="104" r="40" fill="none" stroke={C.line} strokeWidth="8" />
      <path d="M360 64 A40 40 0 1 1 326 124" fill="none" stroke={`url(#${g})`} strokeWidth="8" strokeLinecap="round" />
      <circle cx="360" cy="104" r="6" fill={C.amber} className="pulse-soft" />
      {/* toggle rows */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x={64} y={168 + i * 22} width="120" height="8" rx="4" fill={C.muted} />
          <rect x={360} y={166 + i * 22} width="34" height="16" rx="8" fill={i === 0 ? C.magenta : C.node2} stroke={C.line} />
          <circle cx={i === 0 ? 386 : 368} cy={174 + i * 22} r="5" fill={i === 0 ? "#fff" : C.text} />
        </g>
      ))}
    </>
  ),

  /* ---- marketplace ---- */
  marketplace: (g) => (
    <>
      {/* filter bar */}
      <rect x="40" y="40" width="180" height="16" rx="8" fill={C.node2} stroke={C.line} />
      <rect x="360" y="40" width="80" height="16" rx="8" fill={`url(#${g})`} />
      {[0, 1, 2].map((i) => (
        <g key={i} className="float-loop" style={{ animationDelay: `${i * 0.7}s` }}>
          <rect x={40 + i * 140} y={78} width="120" height="150" rx="12" fill={C.node} stroke={C.line} />
          <rect x={52 + i * 140} y={90} width="96" height="64" rx="8" fill={C.node2} />
          <circle cx={100 + i * 140} cy={122} r="14" fill="none" stroke={`url(#${g})`} strokeWidth="2" />
          <rect x={52 + i * 140} y={164} width="70" height="8" rx="4" fill={C.muted} />
          <rect x={52 + i * 140} y={180} width="44" height="8" rx="4" fill={C.text} />
          <rect x={52 + i * 140} y={200} width="48" height="16" rx="8" fill="none" stroke={C.magenta} />
          <rect x={112 + i * 140} y={200} width="36" height="16" rx="8" fill={`url(#${g})`} />
        </g>
      ))}
    </>
  ),
};

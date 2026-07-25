import { type Project } from "@/lib/content";

type Variant = NonNullable<Project["visual"]>;

const C = {
  win: "#12101a",
  side: "#0f0d16",
  panel: "#191521",
  panel2: "#1f1a2b",
  line: "#2a2438",
  muted: "#413a54",
  text: "#6e6784",
  light: "#b8b0cc",
  indigo: "#4b4acf",
  magenta: "#c42f86",
  amber: "#ffd34e",
};

/**
 * Realistic dark "app screenshot" illustration for case studies without a real
 * capture. Framed like a real product (window chrome + sidebar) so it reads
 * consistently next to the real screenshots.
 */
export function ProjectVisual({ variant, className }: { variant: Variant; className?: string }) {
  const g = `pv-${variant}`;
  return (
    <svg viewBox="0 0 480 270" preserveAspectRatio="xMidYMid slice" className={className} role="img" aria-hidden>
      <defs>
        <linearGradient id={g} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor={C.indigo} />
          <stop offset="0.55" stopColor={C.magenta} />
          <stop offset="1" stopColor={C.amber} />
        </linearGradient>
        <clipPath id={`${g}-clip`}>
          <rect x="8" y="8" width="464" height="254" rx="12" />
        </clipPath>
      </defs>

      <rect width="480" height="270" fill={C.win} />

      <g clipPath={`url(#${g}-clip)`}>
        <rect x="8" y="8" width="464" height="254" fill={C.win} />
        {/* top bar */}
        <rect x="8" y="8" width="464" height="24" fill={C.side} />
        <circle cx="22" cy="20" r="3.5" fill={C.muted} />
        <circle cx="34" cy="20" r="3.5" fill={C.muted} />
        <circle cx="46" cy="20" r="3.5" fill={C.muted} />
        <rect x="64" y="15" width="150" height="10" rx="5" fill={C.panel} />
        {/* sidebar */}
        <rect x="8" y="32" width="66" height="230" fill={C.side} />
        <rect x="18" y="44" width="46" height="18" rx="6" fill="rgba(196,47,134,0.16)" />
        <rect x="24" y="50" width="34" height="6" rx="3" fill={C.magenta} />
        {[70, 90, 110, 130, 150].map((y) => (
          <rect key={y} x="24" y={y} width="34" height="6" rx="3" fill={C.muted} />
        ))}
        {content[variant](g)}
      </g>

      <rect x="8" y="8" width="464" height="254" rx="12" fill="none" stroke={C.line} strokeWidth="1" />
    </svg>
  );
}

const content: Record<Variant, (g: string) => React.ReactNode> = {
  /* ---------------- Analytics dashboard ---------------- */
  dashboard: (g) => (
    <>
      {/* header */}
      <rect x="86" y="44" width="120" height="12" rx="4" fill={C.light} opacity="0.9" />
      <rect x="410" y="42" width="54" height="16" rx="8" fill={`url(#${g})`} />
      {/* KPI cards */}
      {[
        { x: 86, accent: false },
        { x: 214, accent: true },
        { x: 342, accent: false },
      ].map((k, i) => (
        <g key={i}>
          <rect x={k.x} y="66" width="116" height="52" rx="9" fill={C.panel} stroke={C.line} />
          <rect x={k.x + 12} y="76" width="40" height="6" rx="3" fill={C.text} />
          <rect x={k.x + 12} y="90" width="60" height="12" rx="4" fill={k.accent ? C.magenta : C.light} opacity={k.accent ? 1 : 0.85} />
          <polyline
            points={`${k.x + 12},108 ${k.x + 30},102 ${k.x + 48},106 ${k.x + 66},98 ${k.x + 84},101 ${k.x + 100},94`}
            fill="none"
            stroke={k.accent ? `url(#${g})` : C.muted}
            strokeWidth="1.6"
          />
        </g>
      ))}
      {/* chart panel */}
      <rect x="86" y="128" width="372" height="118" rx="9" fill={C.panel} stroke={C.line} />
      <rect x="98" y="138" width="70" height="8" rx="4" fill={C.text} />
      {[38, 60, 48, 74, 58, 88, 70].map((h, i) => (
        <rect key={i} x={100 + i * 26} y={228 - h} width="14" height={h} rx="3" fill={i === 5 ? `url(#${g})` : C.panel2} />
      ))}
      <polyline
        points="290,210 316,188 342,196 368,168 394,178 420,150 446,160"
        fill="none"
        stroke={`url(#${g})`}
        strokeWidth="2.5"
        className="flow-dash"
      />
      <circle cx="446" cy="160" r="4" fill={C.amber} className="pulse-soft" />
    </>
  ),

  /* ---------------- n8n-style workflow canvas ---------------- */
  workflow: (g) => (
    <>
      <rect x="86" y="42" width="90" height="10" rx="4" fill={C.text} />
      {/* connectors */}
      <g fill="none" stroke={`url(#${g})`} strokeWidth="2">
        <path className="flow-dash" d="M170 96 C205 96 205 78 240 78" />
        <path className="flow-dash" d="M170 96 C205 96 205 150 240 150" />
        <path className="flow-dash" d="M322 78 C355 78 360 114 392 114" />
        <path className="flow-dash" d="M322 150 C355 150 360 114 392 114" />
      </g>
      {[
        { x: 94, y: 80, c: C.indigo },
        { x: 240, y: 60, c: C.magenta },
        { x: 240, y: 132, c: C.magenta },
        { x: 392, y: 96, c: C.amber },
      ].map((n, i) => (
        <g key={i} className="float-loop" style={{ animationDelay: `${i * 0.5}s` }}>
          <rect x={n.x} y={n.y} width="78" height="34" rx="9" fill={C.panel} stroke={C.line} />
          <rect x={n.x + 8} y={n.y + 9} width="16" height="16" rx="5" fill={n.c} />
          <rect x={n.x + 30} y={n.y + 11} width="38" height="5" rx="2.5" fill={C.light} opacity="0.8" />
          <rect x={n.x + 30} y={n.y + 21} width="24" height="4" rx="2" fill={C.text} />
        </g>
      ))}
      {/* minimap */}
      <rect x="392" y="196" width="66" height="46" rx="6" fill={C.panel} stroke={C.line} />
      <rect x="400" y="204" width="14" height="10" rx="2" fill={C.muted} />
      <rect x="420" y="210" width="14" height="10" rx="2" fill={C.magenta} opacity="0.6" />
      <rect x="404" y="224" width="14" height="10" rx="2" fill={C.muted} />
    </>
  ),

  /* ---------------- Real-time AI SaaS ---------------- */
  saas: (g) => (
    <>
      <rect x="86" y="44" width="110" height="12" rx="4" fill={C.light} opacity="0.9" />
      <rect x="410" y="42" width="54" height="16" rx="8" fill="rgba(53,201,154,0.18)" stroke="#35c99a" />
      <circle cx="422" cy="50" r="3" fill="#35c99a" className="pulse-soft" />
      {/* waveform panel */}
      <rect x="86" y="66" width="230" height="96" rx="9" fill={C.panel} stroke={C.line} />
      <polyline
        points="98,120 112,96 126,138 140,84 154,146 168,100 182,128 196,88 210,134 224,104 238,124 252,94 266,130 280,108 294,118"
        fill="none"
        stroke={`url(#${g})`}
        strokeWidth="2.2"
        className="flow-dash"
      />
      {/* score gauge */}
      <rect x="328" y="66" width="130" height="96" rx="9" fill={C.panel} stroke={C.line} />
      <circle cx="393" cy="114" r="30" fill="none" stroke={C.panel2} strokeWidth="7" />
      <path d="M393 84 A30 30 0 1 1 367 129" fill="none" stroke={`url(#${g})`} strokeWidth="7" strokeLinecap="round" />
      <circle cx="393" cy="114" r="5" fill={C.amber} className="pulse-soft" />
      {/* metric rows */}
      {[0, 1, 2].map((i) => (
        <g key={i}>
          <rect x="86" y={176 + i * 24} width="372" height="18" rx="6" fill={C.panel} stroke={C.line} />
          <rect x="96" y={182 + i * 24} width="90" height="6" rx="3" fill={C.text} />
          <rect x="360" y={181 + i * 24} width="30" height="8" rx="4" fill={i === 0 ? C.magenta : C.muted} />
          <rect x="400" y={181 + i * 24} width="48" height="8" rx="4" fill={i === 1 ? C.amber : C.panel2} opacity="0.8" />
        </g>
      ))}
    </>
  ),

  /* ---------------- RAG chat / agent ---------------- */
  agent: (g) => (
    <>
      <rect x="86" y="44" width="100" height="10" rx="4" fill={C.text} />
      {/* assistant bubble */}
      <rect x="86" y="66" width="220" height="46" rx="10" fill={C.panel} stroke={C.line} />
      {[76, 88, 98].map((y, i) => (
        <rect key={i} x="98" y={y} width={i === 2 ? 120 : 190} height="5" rx="2.5" fill={C.light} opacity="0.7" />
      ))}
      {/* sources chips */}
      {[86, 132, 178].map((x, i) => (
        <g key={i}>
          <rect x={x} y="120" width="42" height="16" rx="8" fill={C.panel2} stroke={C.line} />
          <circle cx={x + 10} cy="128" r="3" fill={[C.indigo, C.magenta, C.amber][i]} />
          <rect x={x + 18} y="125" width="16" height="5" rx="2.5" fill={C.text} />
        </g>
      ))}
      {/* user bubble */}
      <rect x="234" y="146" width="224" height="40" rx="10" fill="rgba(196,47,134,0.14)" stroke="rgba(196,47,134,0.3)" />
      {[156, 168].map((y, i) => (
        <rect key={i} x="246" y={y} width={i === 1 ? 120 : 200} height="5" rx="2.5" fill={C.light} opacity="0.7" />
      ))}
      {/* streaming assistant */}
      <rect x="86" y="196" width="180" height="30" rx="10" fill={C.panel} stroke={C.line} />
      <rect x="98" y="207" width="120" height="5" rx="2.5" fill={C.light} opacity="0.6" />
      <rect x="222" y="205" width="30" height="9" rx="3" fill={`url(#${g})`} className="pulse-soft" />
      {/* input */}
      <rect x="86" y="234" width="372" height="20" rx="10" fill={C.panel} stroke={C.line} />
      <rect x="98" y="241" width="150" height="6" rx="3" fill={C.text} />
      <circle cx="446" cy="244" r="8" fill={`url(#${g})`} />
    </>
  ),

  /* ---------------- Marketplace ---------------- */
  marketplace: (g) => (
    <>
      {/* filter bar */}
      <rect x="86" y="42" width="150" height="16" rx="8" fill={C.panel} stroke={C.line} />
      <rect x="96" y="47" width="70" height="6" rx="3" fill={C.text} />
      <rect x="404" y="42" width="54" height="16" rx="8" fill={`url(#${g})`} />
      {[0, 1, 2].map((i) => (
        <g key={i} className="float-loop" style={{ animationDelay: `${i * 0.7}s` }}>
          <rect x={90 + i * 124} y="70" width="112" height="172" rx="11" fill={C.panel} stroke={C.line} />
          <rect x={100 + i * 124} y="80" width="92" height="70" rx="8" fill={C.panel2} />
          <circle cx={146 + i * 124} cy="115" r="15" fill="none" stroke={`url(#${g})`} strokeWidth="2" />
          <rect x={100 + i * 124} y="160" width="72" height="7" rx="3.5" fill={C.light} opacity="0.8" />
          <rect x={100 + i * 124} y="174" width="46" height="6" rx="3" fill={C.text} />
          <rect x={100 + i * 124} y="210" width="42" height="18" rx="9" fill="none" stroke={C.magenta} />
          <rect x={150 + i * 124} y="210" width="42" height="18" rx="9" fill={`url(#${g})`} />
        </g>
      ))}
    </>
  ),
};

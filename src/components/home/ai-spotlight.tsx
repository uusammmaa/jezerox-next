import { Section, Eyebrow, GradientText, Button, Reveal } from "@/components/ui";

const steps = [
  { n: "01", h: "Ingest & ground", p: "Connect your data, build retrieval, and give models the right context." },
  { n: "02", h: "Orchestrate agents", p: "Tool-using workflows and n8n automations that do real work end to end." },
  { n: "03", h: "Evaluate & guard", p: "Eval suites, guardrails, and monitoring before anything reaches users." },
];

export function AiSpotlight() {
  return (
    <Section id="ai" tone="surface">
      <div className="grid items-center gap-14 lg:grid-cols-2">
        <Reveal>
          <Eyebrow>AI &amp; Automation</Eyebrow>
          <h2 className="mt-4 text-3xl leading-tight sm:text-4xl md:text-[2.75rem]">
            From prototype to <GradientText>production AI.</GradientText>
          </h2>
          <p className="mt-5 max-w-xl text-lg text-fg-muted">
            I build AI systems that ship — not demos. Grounded retrieval, evaluated prompts,
            guarded outputs, and monitoring so your team can trust what it puts in front of users.
          </p>
          <div className="mt-8 flex flex-col gap-5">
            {steps.map((s) => (
              <div key={s.n} className="flex gap-4">
                <span className="pt-0.5 font-mono text-sm text-magenta">{s.n}</span>
                <div>
                  <h3 className="text-lg font-semibold">{s.h}</h3>
                  <p className="text-sm text-fg-muted">{s.p}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-9">
            <Button href="/services/ai-agents" variant="secondary">
              Explore AI agents &amp; RAG
            </Button>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <PipelineDiagram />
        </Reveal>
      </div>
    </Section>
  );
}

function PipelineDiagram() {
  return (
    <div className="rounded-[var(--radius-2xl)] border border-line bg-ink-900 p-6 shadow-[var(--shadow-lg)]">
      <svg
        viewBox="0 0 460 320"
        width="100%"
        fill="none"
        role="img"
        aria-label="AI automation pipeline: data sources feed retrieval and an orchestration layer with an agent loop, guarded and evaluated, then shipped to your product."
      >
        <defs>
          <linearGradient id="edge" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#4B4ACF" />
            <stop offset=".55" stopColor="#C42F86" />
            <stop offset="1" stopColor="#FFD34E" />
          </linearGradient>
          <linearGradient id="node" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#171320" />
            <stop offset="1" stopColor="#221B30" />
          </linearGradient>
        </defs>
        <g stroke="url(#edge)" strokeWidth="1.6" opacity=".85">
          <path d="M96 70 H150" />
          <path d="M96 120 H150" />
          <path d="M96 170 H150" />
          <path d="M250 120 H300" />
          <path d="M375 120 V210 H250 V178" strokeDasharray="4 4" />
          <path d="M375 120 H408" />
        </g>
        <g fontSize="11" fill="#C6BFD8" fontFamily="ui-monospace, monospace">
          <rect x="20" y="55" width="76" height="30" rx="8" fill="url(#node)" stroke="#2E2540" />
          <text x="58" y="74" textAnchor="middle">Your data</text>
          <rect x="20" y="105" width="76" height="30" rx="8" fill="url(#node)" stroke="#2E2540" />
          <text x="58" y="124" textAnchor="middle">APIs</text>
          <rect x="20" y="155" width="76" height="30" rx="8" fill="url(#node)" stroke="#2E2540" />
          <text x="58" y="174" textAnchor="middle">Docs</text>
        </g>
        <rect x="150" y="88" width="100" height="64" rx="12" fill="url(#node)" stroke="#C42F86" />
        <text x="200" y="116" textAnchor="middle" fontSize="12" fill="#F3F0F9" fontFamily="ui-monospace, monospace">Retrieval</text>
        <text x="200" y="134" textAnchor="middle" fontSize="9" fill="#A9A2BD" fontFamily="ui-monospace, monospace">context</text>
        <rect x="300" y="88" width="100" height="64" rx="12" fill="url(#node)" stroke="#FFD34E" />
        <text x="350" y="112" textAnchor="middle" fontSize="12" fill="#F3F0F9" fontFamily="ui-monospace, monospace">Orchestrate</text>
        <text x="350" y="130" textAnchor="middle" fontSize="9" fill="#A9A2BD" fontFamily="ui-monospace, monospace">LLM · tools</text>
        <rect x="150" y="196" width="100" height="46" rx="10" fill="url(#node)" stroke="#4B4ACF" />
        <text x="200" y="216" textAnchor="middle" fontSize="10" fill="#F3F0F9" fontFamily="ui-monospace, monospace">Eval · Guard</text>
        <text x="200" y="230" textAnchor="middle" fontSize="8.5" fill="#A9A2BD" fontFamily="ui-monospace, monospace">monitor</text>
        <circle cx="430" cy="120" r="18" fill="url(#edge)" />
        <text x="430" y="124" textAnchor="middle" fontSize="9" fill="#0a0710" fontWeight="700" fontFamily="ui-monospace, monospace">Ship</text>
        <g fontSize="9" fill="#6E6784" fontFamily="ui-monospace, monospace">
          <text x="20" y="290">ingest</text>
          <text x="180" y="290">ground</text>
          <text x="330" y="290">act</text>
          <text x="150" y="268">↑ continuous evaluation loop</text>
        </g>
      </svg>
    </div>
  );
}

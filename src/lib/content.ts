/**
 * Single source of truth for all site content (DRY).
 * Every page/section/schema reads from here — no copy is hard-coded in components.
 *
 * All numbers and quotes are REAL and defensible (from Upwork history + CV).
 * Employer/agency client work is ANONYMIZED (NDA-safe); only own freelance/
 * personal projects are named. Do not add unverifiable metrics — see plan/REDESIGN.md §7.
 */

import type { LucideIcon } from "lucide-react";
import {
  Workflow,
  Bot,
  Code2,
  Boxes,
  ShieldCheck,
  Sparkles,
  Gauge,
  Database,
  Cpu,
  Layers,
  Compass,
  Building2,
  ShoppingCart,
  Stethoscope,
  Scale,
  Landmark,
  Megaphone,
  Users,
  Rocket,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Company / entity                                                    */
/* ------------------------------------------------------------------ */

export const company = {
  brand: "JezeroX",
  legalName: "Skycap LLC",
  founder: "Usama Akram",
  founderTitle: "Founder & Principal Engineer",
  entityLine: "JezeroX — a Skycap LLC company",
  tagline: "Build faster. Scale smarter.",
  positioning:
    "JezeroX designs, builds, and ships intelligent software — AI automation, AI agents, and full-stack products that scale from MVP to enterprise.",
  location: "Remote-first · Worldwide",
  email: "inbox@contact.jezerox.com",
  calendly:
    process.env.NEXT_PUBLIC_CALENDLY_URL ??
    process.env.CALENDLY_BOOKING_URL ??
    "https://calendly.com/usamaakram17/discovery-consultation-call",
  responseTime: "Responds within a few hours",
  // Public reviews profile — powers the "Top Rated on Upwork" proof link.
  upworkUrl: "https://www.upwork.com/freelancers/~0163ea60c05bc57535",
  socials: [
    { label: "LinkedIn", href: "https://www.linkedin.com/company/jezerox" },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Proof stats (all provable from Upwork history + CV)                 */
/* ------------------------------------------------------------------ */

// All verifiable on the Upwork profile: Top Rated, 100% JSS, $10K+, 25 jobs, 415 hrs.
export const stats: { value: string; label: string; note?: string }[] = [
  { value: "100%", label: "Job Success", note: "Top Rated on Upwork" },
  { value: "25", label: "Projects delivered", note: "5★ average" },
  { value: "$10K+", label: "Earned on Upwork", note: "415+ hours" },
  { value: "5+ yrs", label: "Experience", note: "enterprise + startups" },
];

/* ------------------------------------------------------------------ */
/* Services (3 SEO landing clusters)                                   */
/* ------------------------------------------------------------------ */

export interface Service {
  slug: string;
  title: string;
  short: string;
  description: string;
  icon: LucideIcon;
  keywords: string[];
  problems: string[];
  bullets: string[];
  deliverables: string[];
  outcomes: string[];
  stack: string[];
  faqs: { q: string; a: string }[];
  relatedProjectSlug?: string;
  featured?: boolean;
}

export const services: Service[] = [
  {
    slug: "ai-automation",
    title: "AI Automation",
    short: "n8n, Make & Zapier workflows that run your business on autopilot.",
    description:
      "Custom workflow automation with n8n, Make, and Zapier — connecting your tools, cleaning your data, and removing the manual work that slows your team down. From lead sourcing to reporting, built to run reliably and observably in production.",
    icon: Workflow,
    keywords: [
      "n8n developer",
      "n8n automation expert",
      "n8n consultant",
      "Make.com automation",
      "Zapier expert",
      "AI automation agency",
      "workflow automation agency",
      "business process automation",
      "API integration",
      "data automation",
      "email automation",
      "CRM automation",
      "Google Sheets automation",
      "web scraping automation",
      "no-code automation",
    ],
    problems: [
      "Your team copies data between tools by hand every day.",
      "Leads, invoices, or reports are slow and error-prone.",
      "You have a half-built automation that keeps breaking.",
      "Your tools don't talk to each other.",
    ],
    bullets: [
      "n8n / Make / Zapier workflow design & self-hosting",
      "Lead sourcing & enrichment (Apify, Google Maps, scraping)",
      "CRM, email & Google Workspace automations",
      "API & webhook integrations between any tools",
    ],
    deliverables: [
      "Production-ready workflows with error handling & retries",
      "Self-hosted n8n setup or managed cloud",
      "Documentation & handover so your team can maintain it",
      "Monitoring and alerting on failures",
    ],
    outcomes: [
      "Hours of manual work removed every week",
      "Reliable, observable automations you can trust",
      "A system your team can extend without me",
    ],
    stack: ["n8n", "Make", "Zapier", "Apify", "OpenAI", "Supabase", "Airtable", "Google Sheets", "Slack", "Gmail", "HubSpot", "Notion", "Twilio", "REST APIs", "Webhooks", "Cron"],
    faqs: [
      { q: "Do you work with n8n, Make, and Zapier?", a: "Yes — all three. n8n is my primary tool for complex, self-hosted, or AI-heavy workflows; Make and Zapier are great for lighter integrations. I'll recommend the right one for your case and budget." },
      { q: "Can you fix or finish an existing automation?", a: "Absolutely. A lot of my work is rescuing stalled or fragile flows, untangling them, and getting them reliably into production — with monitoring so they stay that way." },
      { q: "Will my team be able to maintain it?", a: "Yes. Everything ships with clear documentation and a handover walkthrough so you're never locked in." },
    ],
    relatedProjectSlug: "leadpipe-automation",
    featured: true,
  },
  {
    slug: "ai-agents",
    title: "AI Agents & RAG",
    short: "Chatbots, RAG systems & multi-agent workflows that actually ship.",
    description:
      "Production AI agents — grounded retrieval (RAG), tool-using multi-agent systems, and chat assistants built on OpenAI and modern frameworks. Evaluated, guarded, and monitored so you can trust what it puts in front of users, not just a flashy demo.",
    icon: Bot,
    keywords: [
      "AI agent developer",
      "RAG developer",
      "build AI chatbot",
      "custom GPT developer",
      "multi-agent systems",
      "OpenAI developer",
      "Claude developer",
      "LangChain developer",
      "LLM integration",
      "vector database",
      "semantic search",
      "AI customer support",
      "document Q&A",
      "chatbot for my website",
    ],
    problems: [
      "Your AI demo works in the room but not in production.",
      "The model hallucinates or ignores your data.",
      "You need an assistant grounded in your own knowledge base.",
      "You don't know how to evaluate or safeguard AI outputs.",
    ],
    bullets: [
      "Retrieval-augmented generation (RAG) over your data",
      "Multi-agent & tool-using systems",
      "Customer-facing chat assistants & copilots",
      "Evals, guardrails & observability",
    ],
    deliverables: [
      "Grounded, cited answers from your knowledge base",
      "Agent orchestration with real tool use",
      "Prompt evaluation suite & safety guardrails",
      "Vector search (Pinecone / Supabase) & monitoring",
    ],
    outcomes: [
      "AI that's accurate, grounded, and safe to ship",
      "Automations that take real action, not just chat",
      "Confidence in quality via evals and monitoring",
    ],
    stack: ["OpenAI", "Claude", "LangChain", "LlamaIndex", "LangGraph", "RAG", "Pinecone", "Weaviate", "pgvector", "Embeddings", "Function calling", "Vercel AI SDK", "FastAPI", "Python"],
    faqs: [
      { q: "What is RAG and do I need it?", a: "Retrieval-augmented generation grounds the model in your own documents and data so answers are accurate and citeable instead of made up. If you want an assistant that knows your business, you need it." },
      { q: "Can the agent actually do things, not just answer?", a: "Yes. I build tool-using and multi-agent systems that take real actions — updating records, sending messages, running workflows via n8n — with guardrails around them." },
      { q: "How do you keep AI outputs safe and reliable?", a: "Evaluation suites, guardrails, and monitoring. We measure quality before launch and watch it in production so regressions get caught early." },
    ],
    relatedProjectSlug: "rag-multi-agent",
    featured: true,
  },
  {
    slug: "web-development",
    title: "Web & App Development",
    short: "Full-stack Next.js, React & Angular apps — MVP to enterprise.",
    description:
      "Scalable web and SaaS products built with Next.js, React, Angular, and Node — the same stack behind enterprise fintech dashboards and AI SaaS platforms I've shipped. Clean architecture, typed end to end, fast, and accessible.",
    icon: Code2,
    keywords: [
      "Next.js developer",
      "React developer",
      "Angular developer",
      "full-stack developer",
      "MERN stack developer",
      "React Native developer",
      "Node.js developer",
      "TypeScript developer",
      "SaaS development",
      "MVP development",
      "AI SaaS developer",
      "Stripe integration",
      "web app development",
      "hire full stack developer",
    ],
    problems: [
      "You need an MVP built fast without cutting corners.",
      "Your app is slow, hard to maintain, or dated.",
      "You want AI features inside a real product.",
      "You need senior help on an existing codebase.",
    ],
    bullets: [
      "Next.js / React / Angular front ends",
      "Node, NestJS & TypeScript back ends",
      "SaaS platforms with Stripe, auth & dashboards",
      "Performance, accessibility & SEO baked in",
    ],
    deliverables: [
      "Production web app or SaaS MVP",
      "Design system & reusable component library",
      "Payments, authentication & role-based access",
      "CI/CD, testing & Vercel/AWS deployment",
    ],
    outcomes: [
      "A fast, accessible product users trust",
      "Clean architecture your team can build on",
      "Enterprise-grade quality from an experienced engineer",
    ],
    stack: ["Next.js", "React", "Angular", "React Native", "TypeScript", "Node", "NestJS", "Tailwind", "Prisma", "Postgres", "GraphQL", "tRPC", "Stripe", "AWS", "Vercel", "Docker"],
    faqs: [
      { q: "What stacks do you build in?", a: "Next.js and React for web, React Native for mobile, Angular for enterprise front ends, Node/NestJS and TypeScript on the back end. 5+ years shipping production apps in fintech, SaaS, and AI." },
      { q: "Can you add AI to my existing app?", a: "Yes — that's a sweet spot. I integrate LLMs, RAG, and automations into existing products with the same care as the rest of the codebase." },
      { q: "Do you do fixed-scope or ongoing work?", a: "Both. Fixed-scope for defined MVPs and features; ongoing retainer or team-extension when you need senior capacity over time." },
    ],
    relatedProjectSlug: "ai-lie-detection-saas",
    featured: true,
  },
  {
    slug: "ai-consulting",
    title: "AI Consulting",
    short: "Strategy, audits & a clear roadmap to ship AI that actually pays off.",
    description:
      "Not sure where AI fits — or burned by a build that never shipped? I help teams find the highest-ROI use cases, choose the right architecture and models, and de-risk the first project. From a single strategy call to fractional AI-engineer support.",
    icon: Compass,
    keywords: [
      "AI consultant",
      "AI strategy consulting",
      "fractional AI engineer",
      "AI advisor",
      "AI readiness audit",
      "LLM strategy",
      "AI roadmap",
      "generative AI consultant",
      "AI implementation consultant",
      "hire AI expert",
    ],
    problems: [
      "You know you need AI but not where to start.",
      "You've spent on AI that never shipped or paid off.",
      "You want a second opinion on an AI build.",
      "Your team needs to level up on LLMs and automation.",
    ],
    bullets: [
      "AI opportunity audit & prioritized roadmap",
      "Architecture, model & vendor selection",
      "Proof-of-concept scoping & de-risking",
      "Team workshops & fractional support",
    ],
    deliverables: [
      "A prioritized AI roadmap tied to ROI",
      "Clear architecture & tool recommendations",
      "A scoped, de-risked first project",
      "Hands-on guidance or fractional AI-engineer time",
    ],
    outcomes: [
      "Confidence in where AI actually helps",
      "Budget spent on AI that ships",
      "A partner who has built this before",
    ],
    stack: ["OpenAI", "Claude", "n8n", "RAG", "LangChain", "Python", "TypeScript", "Vector DBs"],
    faqs: [
      { q: "Do you offer one-off consulting?", a: "Yes — from a single strategy call or audit to an ongoing fractional-AI-engineer retainer. I scope it to exactly what you need." },
      { q: "Can you review an existing AI project?", a: "Absolutely. I do architecture reviews and second opinions on stalled or underperforming AI builds, with concrete, prioritized next steps." },
      { q: "Do you train teams?", a: "Yes — practical, hands-on workshops on LLMs, RAG, and automation so your team can build and maintain with confidence." },
    ],
    relatedProjectSlug: "rag-multi-agent",
    featured: true,
  },
];

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Capabilities (marquee / supporting list)                            */
/* ------------------------------------------------------------------ */

export const capabilities: string[] = [
  "AI Automation",
  "n8n Workflows",
  "Make & Zapier",
  "AI Agents",
  "RAG Systems",
  "LLM Integration",
  "Multi-Agent AI",
  "Vector Search",
  "Pinecone",
  "LangChain",
  "OpenAI & Claude",
  "Web Scraping",
  "AI Consulting",
  "Next.js",
  "React",
  "React Native",
  "Angular",
  "TypeScript",
  "Node & NestJS",
  "GraphQL",
  "Stripe & Payments",
  "Supabase",
  "AWS & Vercel",
  "Cloud & DevOps",
];

/* ------------------------------------------------------------------ */
/* Process                                                             */
/* ------------------------------------------------------------------ */

export const processSteps: { name: string; duration: string; detail: string }[] = [
  { name: "Discover", duration: "1–2 days", detail: "We scope the problem, map your tools, and agree on a clear plan and price." },
  { name: "Design", duration: "Days", detail: "Architecture, workflows, or UI prototypes — validated before we build." },
  { name: "Build", duration: "1–6 weeks", detail: "Production-ready automation, agent, or app with demos along the way." },
  { name: "Scale", duration: "Ongoing", detail: "Monitoring, iteration, and support so it keeps performing." },
];

/* ------------------------------------------------------------------ */
/* Projects / case studies (own work named; employer work anonymized)  */
/* ------------------------------------------------------------------ */

export interface Project {
  slug: string;
  title: string;
  client: string;
  category: "AI Automation" | "AI Agents" | "AI SaaS" | "Enterprise" | "Web & Mobile";
  year: string;
  role: string;
  summary: string;
  problem: string;
  approach: string[];
  outcome: string[];
  highlights: string[];
  stack: string[];
  icon: LucideIcon;
  /** Real product screenshot for the card cover (optional) */
  image?: string;
  /** Real screenshots for the case-study detail page (optional) */
  gallery?: { src: string; caption: string }[];
  /** Themed SVG illustration when there's no real screenshot */
  visual?: "workflow" | "dashboard" | "saas" | "marketplace" | "agent";
  featured?: boolean;
}

export const projects: Project[] = [
  {
    slug: "leadpipe-automation",
    title: "LeadPipe — automated lead engine",
    client: "JezeroX product",
    category: "AI Automation",
    year: "2025",
    role: "Design, build & automation",
    summary:
      "An end-to-end lead pipeline: scrape Google Maps businesses with Apify, dedupe and store in Supabase, then run a 3-step email outreach sequence with merge fields, daily cron follow-ups, and a dry-run safety mode.",
    problem:
      "Outbound lead generation is repetitive and error-prone — scraping, cleaning, deduping, and following up by hand doesn't scale.",
    approach: [
      "Configurable Apify Google Maps scraping by niche + location",
      "Supabase ingest with deduplication and status tracking",
      "3-step email sequence with merge fields and daily cron follow-ups",
      "Dry-run safety mode and CSV export for review",
    ],
    outcome: [
      "A repeatable engine that turns a niche + city into a working outreach pipeline",
      "Manual scraping and follow-up effort removed",
      "Safe-by-default with dry-run and send limits",
    ],
    highlights: [
      "Apify → Supabase → SendGrid pipeline",
      "Automated 3-step outreach with merge fields",
      "Daily cron follow-ups & CSV export",
    ],
    stack: ["Next.js", "Node", "Supabase", "Apify", "SendGrid", "TypeScript"],
    icon: Workflow,
    image: "/work/leadpipe-leads.jpg",
    gallery: [
      { src: "/work/leadpipe-leads.jpg", caption: "Scraped leads — searchable, filterable, one-click CSV export." },
      { src: "/work/leadpipe-outreach.jpg", caption: "3-step email sequence with merge fields and per-step delays." },
    ],
    featured: true,
  },
  {
    slug: "ai-sourcing-agent",
    title: "AI sourcing agent (n8n + OpenAI)",
    client: "Verified Upwork client",
    category: "AI Automation",
    year: "2025",
    role: "Automation rescue & delivery",
    summary:
      "Rescued and completed a half-built, tangled n8n flow into a reliable AI sourcing agent connecting OpenAI, Apify, and Google Sheets — the client had nearly given up before the handover.",
    problem:
      "The client had a complex, half-finished n8n workflow that was confusing and kept failing. They were close to abandoning it.",
    approach: [
      "Audited and untangled the existing n8n workflow",
      "Reconnected OpenAI, Apify, and Google Sheets reliably",
      "Added error handling so the agent runs unattended",
    ],
    outcome: [
      "A working, reliable AI sourcing agent in production",
      "A stalled project brought over the finish line",
      "5.0★ review — “brought the project home”",
    ],
    highlights: [
      "OpenAI + Apify + n8n + Google Sheets",
      "Untangled and shipped a stalled workflow",
      "5.0★ — “brought the project home”",
    ],
    stack: ["n8n", "OpenAI", "Apify", "Google Sheets"],
    icon: Bot,
    visual: "workflow",
    featured: true,
  },
  {
    slug: "rag-multi-agent",
    title: "RAG & multi-agent automation systems",
    client: "Enterprise Upwork client",
    category: "AI Agents",
    year: "2025",
    role: "AI architecture partner",
    summary:
      "Ongoing AI architecture partner delivering 10+ internal projects across n8n, OpenAI, and RAG — building retrieval, automations, and agent workflows the team relies on day to day.",
    problem:
      "A team needed a reliable partner to build and maintain a growing set of internal AI tools — retrieval, automations, and agents — that they could depend on.",
    approach: [
      "Built RAG retrieval over internal knowledge",
      "Designed multi-agent and tool-using workflows",
      "Delivered and iterated across 10+ internal projects",
    ],
    outcome: [
      "10+ internal AI projects delivered and in use",
      "A trusted, long-term AI engineering relationship",
      "5.0★ — “skilled, reliable, creative in solution design”",
    ],
    highlights: [
      "10+ internal AI projects delivered",
      "RAG retrieval + multi-agent orchestration",
      "5.0★ — long-term AI partner",
    ],
    stack: ["RAG", "OpenAI", "n8n", "Vector DB", "Automation"],
    icon: Sparkles,
    visual: "agent",
    featured: false,
  },
  {
    slug: "ai-assistant-suite",
    title: "AI assistant & RAG demo suite",
    client: "JezeroX product",
    category: "AI Agents",
    year: "2025",
    role: "Design & build",
    summary:
      "A suite of production-style AI demos: a streaming chat assistant (Next.js + Vercel AI SDK), two RAG pipelines (FastAPI + Pinecone, and Supabase / pgvector), and a tool-using research agent — each showing grounded, streaming AI, not slideware.",
    problem:
      "Prospects want to see AI that actually works — grounded, streaming, and tool-using — before they trust it in production.",
    approach: [
      "Streaming chat assistant with the Vercel AI SDK on Next.js",
      "RAG over documents with FastAPI + Pinecone, and a Supabase / pgvector variant",
      "A research agent with tool use and streamed reasoning steps",
    ],
    outcome: [
      "A one-click way for clients to try real, grounded AI",
      "Streaming, RAG, and agents demonstrated in one place",
      "Reusable patterns that carry straight into client work",
    ],
    highlights: [
      "Streaming LLM chat (Vercel AI SDK)",
      "RAG: Pinecone + Supabase / pgvector",
      "Tool-using research agent",
    ],
    stack: ["Next.js", "Vercel AI SDK", "FastAPI", "Pinecone", "Supabase", "Python"],
    icon: Bot,
    image: "/work/ai-assistant.jpg",
    gallery: [
      { src: "/work/ai-assistant.jpg", caption: "Streaming AI assistant with switchable demos: coach, two RAG pipelines, and a research agent." },
    ],
    featured: true,
  },
  {
    slug: "fintech-dashboards",
    title: "Enterprise fintech dashboards",
    client: "A leading African fintech (contract)",
    category: "Enterprise",
    year: "2023–2025",
    role: "Senior frontend engineer",
    summary:
      "Engineered fintech web applications with 50+ modular components — account management, loan processing, card operations, and compliance workflows — with biometric auth, real-time analytics, and internationalization.",
    problem:
      "A fast-growing fintech needed a comprehensive, compliant, multi-language dashboard suite covering accounts, loans, cards, and operations at scale.",
    approach: [
      "Built 50+ modular components in Angular and React",
      "Integrated biometric auth, real-time charts, and PDF generation",
      "Delivered a multi-language, lazy-loaded modular architecture",
    ],
    outcome: [
      "A comprehensive fintech platform covering core banking ops",
      "Compliance workflows and biometric security built in",
      "Scalable, internationalized, maintainable front end",
    ],
    highlights: [
      "50+ modular components, Angular & React",
      "Biometric auth, real-time charts, PDF export",
      "Multi-language, lazy-loaded architecture",
    ],
    stack: ["Angular", "React", "TypeScript", "Nx", "Tailwind"],
    icon: ShieldCheck,
    visual: "dashboard",
    featured: true,
  },
  {
    slug: "ai-lie-detection-saas",
    title: "Real-time AI SaaS platform",
    client: "A US SaaS startup (contract)",
    category: "AI SaaS",
    year: "2024",
    role: "Lead frontend engineer",
    summary:
      "Built a real-time AI SaaS on Next.js 15 and React 19 with face and voice analysis, live dashboards, and full Stripe/Firebase subscription billing.",
    problem:
      "A startup needed a production SaaS that ran real-time AI analysis in the browser with a complete subscription business around it.",
    approach: [
      "Built real-time face, voice, and behavior analysis with face-api.js",
      "Implemented live dashboards on Next.js 15 / React 19",
      "Integrated Stripe + Firebase subscription billing and auth",
    ],
    outcome: [
      "A launched real-time AI SaaS product",
      "Full subscription billing and user dashboards",
      "Modern, performant Next.js architecture",
    ],
    highlights: [
      "Real-time face, voice & behavior analysis",
      "Stripe + Firebase SaaS billing & dashboards",
      "Next.js 15 / React 19",
    ],
    stack: ["Next.js", "React", "face-api.js", "Stripe", "Firebase"],
    icon: Cpu,
    visual: "saas",
    featured: true,
  },
  {
    slug: "gaming-marketplace",
    title: "Gaming booking marketplace",
    client: "A gaming startup (contract)",
    category: "Web & Mobile",
    year: "2024",
    role: "Frontend engineer",
    summary:
      "Delivered a full-featured booking and payments marketplace with Stripe, Discord OAuth, calendar scheduling, custom animations, and a library of 40+ reusable components.",
    problem:
      "A gaming startup needed a polished marketplace where users could book and pay for sessions, with social login and scheduling.",
    approach: [
      "Built booking and calendar scheduling flows",
      "Integrated Stripe payments and Discord OAuth",
      "Created 40+ reusable components with custom animations",
    ],
    outcome: [
      "A full-featured, animated marketplace experience",
      "Payments and social auth working end to end",
      "A reusable component library for future features",
    ],
    highlights: [
      "Stripe payments + Discord OAuth",
      "Booking & calendar scheduling",
      "40+ reusable UI components",
    ],
    stack: ["React", "Tailwind", "Stripe", "OAuth"],
    icon: Boxes,
    visual: "marketplace",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

/* ------------------------------------------------------------------ */
/* Testimonials (real, verbatim from Upwork reviews)                   */
/* ------------------------------------------------------------------ */

export interface Testimonial {
  quote: string;
  author: string;
  context: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "Together with Usama, we've already delivered 10 internal projects for our team across n8n, OpenAI, RAG, and a wide range of automation tools. Very happy with the collaboration. Skilled, reliable, and creative.",
    author: "Verified Upwork client",
    context: "AI automation · long-term partner",
    rating: 5,
  },
  {
    quote:
      "I had a half-done n8n flow, very confusing and complicated. I gave up at one point but Usama didn't. Good job bringing the project home. I definitely recommend him.",
    author: "Verified Upwork client",
    context: "n8n AI sourcing agent",
    rating: 5,
  },
  {
    quote: "Usama is our fixed guy for all our projects. Always high quality work.",
    author: "Verified Upwork client",
    context: "Ongoing engineering",
    rating: 5,
  },
  {
    quote:
      "This was one of the smoothest development collaborations we've had. Deep expertise in Angular and .NET, followed agile workflows perfectly, and delivered scalable, production-ready features.",
    author: "Verified Upwork client",
    context: "Full-stack (Angular + .NET)",
    rating: 5,
  },
  {
    quote:
      "Amazing work. I highly recommend Usama for workflows. He is amazing at what he does and makes sure everything is done well and proficiently.",
    author: "Verified Upwork client",
    context: "n8n workflow development",
    rating: 5,
  },
  {
    quote:
      "Usama did an excellent job enhancing our React application — clean, efficient code while improving UI/UX and performance. Great communication and problem-solving skills.",
    author: "Verified Upwork client",
    context: "React web app",
    rating: 5,
  },
];

/* ------------------------------------------------------------------ */
/* Tech stack (grouped, for services/about)                            */
/* ------------------------------------------------------------------ */

export const techGroups: { label: string; icon: LucideIcon; items: string[] }[] = [
  { label: "AI & Automation", icon: Sparkles, items: ["n8n", "Make", "Zapier", "OpenAI", "LangChain", "RAG", "Apify"] },
  { label: "Frontend", icon: Layers, items: ["Next.js", "React", "Angular", "TypeScript", "Tailwind"] },
  { label: "Backend & Data", icon: Database, items: ["Node", "NestJS", "Python", "Supabase", "Postgres", "GraphQL"] },
  { label: "Cloud & Tooling", icon: Gauge, items: ["AWS", "Vercel", "Docker", "GitHub Actions", "Stripe"] },
];

/* ------------------------------------------------------------------ */
/* "What you can expect" (honest commitments, not fake metrics)        */
/* ------------------------------------------------------------------ */

export const expectations: { key: string; label: string; detail: string }[] = [
  { key: "Fast", label: "Real replies", detail: "Every inquiry gets a real reply from me — usually within a few hours, not days." },
  { key: "Senior", label: "Only, on your build", detail: "You work directly with a senior engineer — the person who scopes it ships it." },
  { key: "Fixed", label: "Scope & price up front", detail: "Clear deliverables and pricing agreed before we start. No surprises." },
];

/* ------------------------------------------------------------------ */
/* Industries / niches served (US-market SEO + self-identification)    */
/* ------------------------------------------------------------------ */

export const industries: { name: string; blurb: string; icon: LucideIcon }[] = [
  { name: "Real estate", blurb: "Lead capture, instant follow-up, and listing automation.", icon: Building2 },
  { name: "E-commerce", blurb: "Cart recovery, order ops, and support automation.", icon: ShoppingCart },
  { name: "Healthcare & dental", blurb: "Scheduling, intake, and reminder workflows.", icon: Stethoscope },
  { name: "Legal", blurb: "Document review, intake, and case-file automation.", icon: Scale },
  { name: "Financial services", blurb: "Reporting, reconciliation, and compliance flows.", icon: Landmark },
  { name: "Marketing agencies", blurb: "White-label automation and AI content pipelines.", icon: Megaphone },
  { name: "Recruiting & HR", blurb: "Candidate sourcing, screening, and onboarding.", icon: Users },
  { name: "SaaS & startups", blurb: "AI features, onboarding, and internal tooling.", icon: Rocket },
];

/* ------------------------------------------------------------------ */
/* About — story & journey (employer names anonymized)                 */
/* ------------------------------------------------------------------ */

export const journey: { period: string; title: string; detail: string }[] = [
  { period: "2018–2020", title: "Started in enterprise software", detail: "Built AI platforms, calendar/email automations, and Angular dashboards — including a 2-week AI PoC that helped secure a major data-science partnership." },
  { period: "2020–2022", title: "Enterprise security & scale", detail: "Delivered 15+ modules for an enterprise threat-intelligence platform — Okta auth, real-time sockets, and a lazy-loaded, CI/CD architecture." },
  { period: "2022–2025", title: "Fintech, SaaS & AI at scale", detail: "Led front ends for fintech dashboards (50+ components), a real-time AI SaaS, and a payments marketplace at a global software consultancy." },
  { period: "2025 →", title: "JezeroX — AI automation & agents", detail: "Now focused on AI automation and agents as a top-rated freelancer, delivering 25+ projects at a 4.9★ average — operating as JezeroX, a Skycap LLC company." },
];

export const values: { title: string; detail: string }[] = [
  { title: "Ship it, don't demo it", detail: "Real, production-ready systems with monitoring — not throwaway proofs of concept." },
  { title: "Senior, hands-on delivery", detail: "You work directly with me. The person who scopes your work is the one who builds it." },
  { title: "Clarity over complexity", detail: "Clear scope, clear price, clear communication. No jargon, no surprises." },
  { title: "Reliability by default", detail: "Error handling, guardrails, and observability built in from the start." },
];

/* ------------------------------------------------------------------ */
/* Navigation                                                          */
/* ------------------------------------------------------------------ */

export const primaryNav: { href: string; label: string }[] = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
];

export const footerNav: { heading: string; links: { href: string; label: string }[] }[] = [
  {
    heading: "Services",
    links: [
      { href: "/services/ai-automation", label: "AI Automation" },
      { href: "/services/ai-agents", label: "AI Agents & RAG" },
      { href: "/services/web-development", label: "Web & App Dev" },
      { href: "/services/ai-consulting", label: "AI Consulting" },
    ],
  },
  {
    heading: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/work", label: "Work" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { href: "/insights", label: "Insights" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Insights (real, useful guides — SEO surface)                        */
/* ------------------------------------------------------------------ */

export interface Insight {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readingTime: string;
  date: string;
  keywords: string[];
  body: { heading?: string; paragraphs: string[] }[];
}

export const insights: Insight[] = [
  {
    slug: "n8n-vs-make-vs-zapier",
    title: "n8n vs Make vs Zapier: how to choose in 2026",
    excerpt:
      "The three big automation platforms solve overlapping problems in very different ways. Here's a practical way to pick the right one for your workflow and budget.",
    category: "AI Automation",
    readingTime: "5 min read",
    date: "2026",
    keywords: ["n8n vs make", "n8n vs zapier", "best automation platform", "workflow automation"],
    body: [
      {
        paragraphs: [
          "If you're automating a business process, you'll almost always end up comparing n8n, Make, and Zapier. They overlap a lot, but the right choice depends on complexity, cost at scale, and how much control you need.",
        ],
      },
      {
        heading: "Zapier — fastest for simple, well-supported apps",
        paragraphs: [
          "Zapier has the largest app directory and the gentlest learning curve. If your automation is a handful of steps between popular SaaS tools, it's the quickest path. The trade-offs: it gets expensive as task volume grows, and complex branching or custom logic is awkward.",
        ],
      },
      {
        heading: "Make — visual power at a lower cost",
        paragraphs: [
          "Make (formerly Integromat) gives you a visual canvas with real branching, iterators, and error handling, usually at a lower per-operation cost than Zapier. It's a strong middle ground when your logic is non-trivial but you don't want to self-host.",
        ],
      },
      {
        heading: "n8n — the most control, especially for AI",
        paragraphs: [
          "n8n is open-source and can be self-hosted, which means no per-task pricing and full control over data — important for AI workflows that touch sensitive information. It has first-class support for custom code, LLM nodes, and complex multi-step agents. It's my default for anything AI-heavy or high-volume.",
          "The cost is a steeper learning curve and the responsibility of hosting (or paying for n8n Cloud). For most serious automation work, that control pays for itself quickly.",
        ],
      },
      {
        heading: "A simple rule of thumb",
        paragraphs: [
          "Simple and low-volume? Zapier. Visual, branching logic without hosting? Make. AI-heavy, high-volume, or data-sensitive? n8n. If you're not sure, start with the outcome you want and work backward — that's what I do with clients before writing a single node.",
        ],
      },
    ],
  },
  {
    slug: "what-is-rag",
    title: "What RAG actually is — and when your AI needs it",
    excerpt:
      "Retrieval-augmented generation is the difference between an AI that makes things up and one that answers from your real data. Here's how it works, in plain terms.",
    category: "AI Agents",
    readingTime: "6 min read",
    date: "2026",
    keywords: ["what is RAG", "retrieval augmented generation", "AI chatbot on my data", "grounded LLM"],
    body: [
      {
        paragraphs: [
          "Large language models are trained on general data with a cutoff date. Ask one about your internal docs, your product, or last week's numbers and it will either say it doesn't know — or worse, confidently invent an answer. RAG fixes that.",
        ],
      },
      {
        heading: "The core idea",
        paragraphs: [
          "Retrieval-augmented generation means: before the model answers, you retrieve the most relevant pieces of your own data and hand them to the model as context. The model then answers grounded in that material, and can cite it.",
          "Mechanically: your documents are split into chunks, converted to embeddings, and stored in a vector database. At question time, the system finds the closest-matching chunks and includes them in the prompt.",
        ],
      },
      {
        heading: "When you need it",
        paragraphs: [
          "You need RAG whenever the AI must answer from information it wasn't trained on: customer support over your help center, an internal assistant over company docs, a sales tool that knows your catalog. If accuracy on your data matters, RAG is usually the answer.",
        ],
      },
      {
        heading: "What separates a demo from production",
        paragraphs: [
          "A basic RAG demo is easy. A reliable one is not. The hard parts are chunking strategy, retrieval quality, handling 'I don't know', evaluation, and monitoring for drift. That's where most projects stall — and where careful engineering earns its keep.",
        ],
      },
    ],
  },
  {
    slug: "ai-demo-to-production",
    title: "From AI demo to production: a reliability checklist",
    excerpt:
      "The gap between an impressive AI demo and something you can put in front of users is mostly engineering. Here's the checklist I use before anything ships.",
    category: "AI Agents",
    readingTime: "5 min read",
    date: "2026",
    keywords: ["AI in production", "LLM guardrails", "AI evaluation", "productionize AI"],
    body: [
      {
        paragraphs: [
          "Almost anyone can build an AI demo that wows in a meeting. Turning it into something dependable is a different job. Before I call an AI system production-ready, it clears this checklist.",
        ],
      },
      {
        heading: "1. Evaluation before launch",
        paragraphs: [
          "You can't improve what you don't measure. A set of representative test cases with expected outcomes tells you whether a change made things better or worse — instead of guessing from a few manual tries.",
        ],
      },
      {
        heading: "2. Guardrails on inputs and outputs",
        paragraphs: [
          "Validate what goes in and constrain what comes out. That means handling prompt injection, filtering unsafe content, and making sure the model stays on-task and within scope.",
        ],
      },
      {
        heading: "3. Graceful failure",
        paragraphs: [
          "Real systems fail — APIs time out, models return junk. Production AI needs retries, fallbacks, and a sensible 'I'm not sure' path instead of a confident wrong answer.",
        ],
      },
      {
        heading: "4. Observability",
        paragraphs: [
          "Log inputs, outputs, latency, and cost. When something goes wrong in production — and it will — you need to see what happened and fix it fast. This is the difference between a system you trust and one you cross your fingers over.",
        ],
      },
    ],
  },
];

export function getInsight(slug: string): Insight | undefined {
  return insights.find((i) => i.slug === slug);
}

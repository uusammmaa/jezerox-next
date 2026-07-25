import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { PageHero, CtaBand } from "@/components/common";
import { Section, GradientText, Reveal } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";
import { insights } from "@/lib/content";

export const metadata: Metadata = createPageMetadata({
  title: "Insights — AI Automation & Engineering Guides",
  description:
    "Practical guides on n8n and workflow automation, RAG and AI agents, and shipping AI to production — written from real project experience.",
  path: "/insights",
});

export default function InsightsPage() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen">
        <PageHero
          eyebrow="Insights"
          title={<>Guides on AI, automation & <GradientText>shipping.</GradientText></>}
          lede="Practical, no-hype notes from real projects — how to choose tools, build reliable AI, and automate the right things."
        />

        <Section>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {insights.map((post, i) => (
              <Reveal key={post.slug} delay={(i % 3) * 90}>
                <Link
                  href={`/insights/${post.slug}`}
                  className="group flex h-full flex-col rounded-[var(--radius-2xl)] border border-line bg-ink-850 p-7 transition-all duration-300 hover:-translate-y-1 hover:bg-ink-800 gradient-border"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[0.68rem] uppercase tracking-widest text-magenta">{post.category}</span>
                    <ArrowUpRight className="h-5 w-5 text-fg-faint transition-colors group-hover:text-magenta" />
                  </div>
                  <h2 className="mt-4 text-xl font-bold leading-snug">{post.title}</h2>
                  <p className="mt-3 flex-1 text-sm text-fg-muted">{post.excerpt}</p>
                  <span className="mt-6 font-mono text-[0.7rem] uppercase tracking-widest text-fg-faint">{post.readingTime}</span>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>

        <CtaBand
          title={<>Have a question I haven&apos;t <GradientText animate>written about?</GradientText></>}
          subtitle="Ask me directly — I'll give you a straight answer within a few hours."
          secondary={{ label: "View services", href: "/services" }}
        />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { PageHero, CtaBand } from "@/components/common";
import { Section, GradientText } from "@/components/ui";
import { WorkGrid } from "@/components/work";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Work — AI Automation & Full-Stack Case Studies",
  description:
    "Selected AI automation, AI agent, and full-stack projects — from n8n workflows and RAG systems to enterprise fintech dashboards and AI SaaS platforms.",
  path: "/work",
});

export default function WorkPage() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen">
        <PageHero
          eyebrow="Work"
          title={<>Real projects, <GradientText>real outcomes.</GradientText></>}
          lede="A sample of automation, AI, and full-stack engagements. Client work is shown with details anonymized where required."
        />
        <Section>
          <WorkGrid />
        </Section>
        <CtaBand
          title={<>Want results like these on <GradientText animate>your project?</GradientText></>}
          subtitle="Tell me what you're building and I'll respond within 24 hours."
          secondary={{ label: "View services", href: "/services" }}
        />
      </main>
      <Footer />
    </>
  );
}

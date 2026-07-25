import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Marquee } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";
import { capabilities } from "@/lib/content";
import {
  Hero,
  StatsBar,
  ServicesOverview,
  AiSpotlight,
  Industries,
  FeaturedWork,
  ProcessOverview,
  Testimonials,
  Expectations,
  FinalCTA,
} from "@/components/home";

export const metadata: Metadata = createPageMetadata({
  title: "AI Automation, AI Agents & Full-Stack Development",
  description:
    "JezeroX builds AI automation (n8n, Make, Zapier), AI agents & RAG systems, and full-stack web apps. 25+ projects delivered, 4.9★. A Skycap LLC company.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen">
        <Hero />
        <StatsBar />
        <Marquee items={capabilities} />
        <ServicesOverview />
        <AiSpotlight />
        <Industries />
        <FeaturedWork />
        <ProcessOverview />
        <Testimonials />
        <Expectations />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

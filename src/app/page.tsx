import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Marquee } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";
import { capabilities } from "@/lib/content";
import {
  Hero,
  Problems,
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
  title: "AI Automation, Internal Tools & Custom Software",
  description:
    "JezeroX builds AI automation (n8n, Make, Zapier), AI-powered internal tools, and custom software that connects the systems you already use. 25 projects delivered, 4.9★. A Skycap LLC company.",
  path: "/",
});

/**
 * Section order follows ../../../jezerox-plan.md §18: lead with the problem, then the
 * offers, then proof — and keep the capability marquee well below the fold rather
 * than third on the page.
 */
export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen">
        <Hero />
        <Problems />
        <ServicesOverview />
        <StatsBar />
        <Testimonials />
        <ProcessOverview />
        <FeaturedWork />
        <AiSpotlight />
        <Marquee items={capabilities} />
        <Industries />
        <Expectations />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

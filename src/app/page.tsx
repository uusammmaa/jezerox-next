import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { createPageMetadata } from "@/lib/seo";
import {
  Hero,
  SocialProof,
  ServicesOverview,
  FeaturedCaseStudies,
  ProcessOverview,
  IndustryFocus,
  Testimonials,
  InsightsPreview,
  FinalCTA,
} from "@/components/home";

export const metadata: Metadata = createPageMetadata({
  title: "Build faster. Scale smarter.",
  description:
    "JezeroX is a software agency that designs, builds, and scales digital products for startups and enterprises. Product strategy, UX, engineering, and growth in one expert team.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <Hero />
        <SocialProof />
        <ServicesOverview />
        <FeaturedCaseStudies />
        <ProcessOverview />
        <IndustryFocus />
        <Testimonials />
        <InsightsPreview />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}

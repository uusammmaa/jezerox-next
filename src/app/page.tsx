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
    "JezeroX is a product engineering partner for ambitious teams. We design, build, and scale secure software from MVP to enterprise, including AI, data automation, and custom machine learning solutions.",
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

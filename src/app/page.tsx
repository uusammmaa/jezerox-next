import { Header, Footer } from "@/components/layout";
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

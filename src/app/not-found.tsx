import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Section, Button, GradientText } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Page not found",
  description: "The page you're looking for doesn't exist.",
  path: "/404",
  robots: "noindex, follow",
});

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen">
        <Section className="grid min-h-[70vh] place-items-center">
          <div className="mx-auto max-w-2xl text-center">
            <div className="font-display text-7xl font-bold leading-none tracking-tight sm:text-8xl md:text-9xl">
              <GradientText>404</GradientText>
            </div>
            <h1 className="mt-6 text-2xl font-bold sm:text-3xl">This page took a wrong turn.</h1>
            <p className="mt-4 text-lg text-fg-muted">
              The page you&apos;re looking for doesn&apos;t exist or has moved.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/" variant="primary" size="lg">Back home</Button>
              <Button href="/contact" variant="secondary" size="lg">Get in touch</Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

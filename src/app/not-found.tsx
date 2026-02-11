import type { Metadata } from "next";
import { Header, Footer } from "@/components/layout";
import { Section, Button } from "@/components/ui";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you're looking for doesn't exist.",
};

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main-content" className="min-h-screen">
        <Section>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="font-(family-name:--font-space-grotesk) text-6xl font-bold tracking-tight text-text-primary sm:text-7xl md:text-8xl">
              404
            </h1>
            <h2 className="mt-6 font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary sm:text-3xl md:text-4xl">
              Page Not Found
            </h2>
            <p className="mt-4 text-lg text-text-secondary sm:text-xl">
              The page you&apos;re looking for doesn&apos;t exist or has been
              moved.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/" variant="primary" size="lg">
                Go Home
              </Button>
              <Button href="/contact" variant="secondary" size="lg">
                Contact Us
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

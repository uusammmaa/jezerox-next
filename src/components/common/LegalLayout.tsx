import { type ReactNode } from "react";
import { Header, Footer } from "@/components/layout";
import { Section } from "@/components/ui";
import { PageHero } from "./PageHero";

interface LegalLayoutProps {
  title: ReactNode;
  intro: string;
  updated: string;
  sections: { heading: string; paragraphs: ReactNode[] }[];
}

/** Shared layout for Privacy / Terms (DRY). */
export function LegalLayout({ title, intro, updated, sections }: LegalLayoutProps) {
  return (
    <>
      <Header />
      <main id="main" className="min-h-screen">
        <PageHero eyebrow="Legal" title={title} lede={intro} />
        <Section>
          <div className="mx-auto flex max-w-2xl flex-col gap-10">
            <p className="font-mono text-[0.72rem] uppercase tracking-widest text-fg-faint">
              Last updated: {updated}
            </p>
            {sections.map((s) => (
              <section key={s.heading} className="flex flex-col gap-3">
                <h2 className="text-xl font-bold">{s.heading}</h2>
                {s.paragraphs.map((p, i) => (
                  <p key={i} className="leading-relaxed text-fg-muted">
                    {p}
                  </p>
                ))}
              </section>
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </>
  );
}

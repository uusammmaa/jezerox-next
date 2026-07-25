import { Star, ArrowUpRight } from "lucide-react";
import { Section, SectionHeading, GradientText, Reveal } from "@/components/ui";
import { testimonials, company } from "@/lib/content";

export function Testimonials() {
  return (
    <Section id="testimonials" tone="surface">
      <Reveal>
        <SectionHeading
          center
          eyebrow="Client reviews"
          title={<>Teams keep <GradientText>coming back.</GradientText></>}
          lede="Verbatim reviews from verified Upwork clients — Top Rated, 100% Job Success."
        />
        {company.upworkUrl ? (
          <div className="mt-6 text-center">
            <a
              href={company.upworkUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-line px-4 py-2 text-sm font-medium text-fg-secondary transition-colors hover:border-line-strong hover:text-fg"
            >
              <Star className="h-4 w-4 fill-amber text-amber" />
              Top Rated · 100% Job Success on Upwork
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        ) : null}
      </Reveal>
      <div className="mt-12 columns-1 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5">
        {testimonials.map((t, i) => (
          <Reveal key={t.quote.slice(0, 24)} delay={(i % 3) * 80} className="break-inside-avoid">
            <figure className="rounded-[var(--radius-xl)] border border-line bg-ink-850 p-6">
              <div className="flex gap-0.5" aria-label={`${t.rating} out of 5 stars`}>
                {Array.from({ length: t.rating }).map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-amber text-amber" />
                ))}
              </div>
              <blockquote className="mt-4 text-fg-secondary">“{t.quote}”</blockquote>
              <figcaption className="mt-4 border-t border-line pt-4">
                <div className="text-sm font-semibold text-fg">{t.author}</div>
                <div className="font-mono text-[0.7rem] uppercase tracking-wide text-fg-faint">
                  {t.context}
                </div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

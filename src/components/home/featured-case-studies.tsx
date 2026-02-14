import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section } from "@/components/ui";

const featuredCaseStudy = {
  label: "Latest Work",
  title: "Fintech platform modernization",
  description:
    "We collaborated with a regulated payments provider to reduce time-to-market and improve reliability. Delivered a production-ready platform with clear compliance controls.",
  metrics: [
    { value: "34%", label: "Cost Reduction" },
    { value: "2.4ms", label: "Processing Latency" },
  ],
  href: "/work",
};

export function FeaturedCaseStudies() {
  return (
    <Section id="case-studies" className="bg-bg-surface-2">
      <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
        <div className="relative">
          <div className="pointer-events-none absolute -top-10 -left-10 h-40 w-40 rounded-full bg-[var(--blue-500)]/20 blur-[100px]" />
          <div
            className="relative z-10 aspect-video overflow-hidden rounded-xl border border-border shadow-2xl"
            aria-hidden
          >
            <div className="h-full w-full bg-gradient-to-br from-[var(--navy-800)] to-[var(--navy-900)]" />
          </div>
        </div>
        <div>
          <h2 className="mb-6 text-sm font-bold uppercase tracking-[0.2em] text-[var(--blue-500)]">
            {featuredCaseStudy.label}
          </h2>
          <h3 className="mb-8 font-(family-name:--font-space-grotesk) text-4xl font-bold text-text-primary">
            {featuredCaseStudy.title}
          </h3>
          <p className="mb-10 text-lg leading-relaxed text-text-muted">
            {featuredCaseStudy.description}
          </p>
          <div className="mb-12 grid grid-cols-2 gap-8">
            {featuredCaseStudy.metrics.map(({ value, label }) => (
              <div key={label}>
                <p className="font-(family-name:--font-space-grotesk) text-3xl font-bold text-text-primary">
                  {value}
                </p>
                <p className="text-sm text-text-muted">{label}</p>
              </div>
            ))}
          </div>
          <Link
            href={featuredCaseStudy.href}
            className="group inline-flex items-center gap-2 font-bold text-[var(--blue-500)] transition-colors hover:text-[var(--blue-400)]"
          >
            Read full case study
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </Section>
  );
}

'use client';

import { useState } from "react";
import { Section, Card } from "@/components/ui";

type Industry = "All" | "Fintech" | "Healthcare" | "SaaS" | "Logistics" | "Retail" | "Education";

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: Industry;
  description: string;
  outcome: string;
  tags: string[];
  href: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: "fintech-platform",
    title: "Fintech platform modernization",
    client: "Leading payments provider",
    industry: "Fintech",
    description:
      "Re-architected a legacy payments platform to improve reliability, reduce technical debt, and accelerate feature delivery for regulated markets.",
    outcome: "40% faster time-to-market • 99.9% uptime • SOC 2 compliant",
    tags: ["Next.js", "Node.js", "AWS", "Postgres"],
    href: "/work/fintech-platform",
  },
  {
    id: "healthcare-dashboard",
    title: "Healthcare data analytics dashboard",
    client: "Multi-site health system",
    industry: "Healthcare",
    description:
      "Built secure, HIPAA-aligned dashboards for clinical and operations teams to visualize patient outcomes and resource utilization.",
    outcome: "50% reduction in report generation time • HIPAA compliant • 95% user satisfaction",
    tags: ["React", "Python", "GCP", "BigQuery"],
    href: "/work/healthcare-dashboard",
  },
  {
    id: "saas-growth",
    title: "SaaS growth and optimization",
    client: "B2B marketing platform",
    industry: "SaaS",
    description:
      "Improved conversion and activation with experimentation framework, analytics instrumentation, and targeted UX improvements.",
    outcome: "32% increase in trial-to-paid conversion • 45% improvement in activation rate",
    tags: ["TypeScript", "Next.js", "Segment", "Amplitude"],
    href: "/work/saas-growth",
  },
  {
    id: "logistics-mobile",
    title: "Logistics mobile app",
    client: "Regional freight network",
    industry: "Logistics",
    description:
      "Designed and built native mobile apps for drivers and dispatchers to optimize route planning and real-time tracking.",
    outcome: "25% improvement in delivery efficiency • 4.8★ app store rating",
    tags: ["React Native", "Node.js", "AWS", "GraphQL"],
    href: "/work/logistics-mobile",
  },
  {
    id: "retail-ecommerce",
    title: "Retail e-commerce platform",
    client: "Multi-brand retailer",
    industry: "Retail",
    description:
      "Built headless commerce platform with unified checkout, inventory management, and personalized recommendations.",
    outcome: "60% faster page load • 28% increase in conversion • 2M+ orders/month",
    tags: ["Next.js", "Shopify", "Algolia", "Stripe"],
    href: "/work/retail-ecommerce",
  },
  {
    id: "education-lms",
    title: "Education learning platform",
    client: "K-12 school district",
    industry: "Education",
    description:
      "Developed accessible learning management system with video delivery, assessments, and progress tracking for 50K+ students.",
    outcome: "50K+ active students • WCAG 2.1 AA compliant • 92% engagement rate",
    tags: ["React", "Node.js", "Postgres", "AWS"],
    href: "/work/education-lms",
  },
];

const industries: Industry[] = ["All", "Fintech", "Healthcare", "SaaS", "Logistics", "Retail", "Education"];

export function CaseStudiesGrid() {
  const [selectedIndustry, setSelectedIndustry] = useState<Industry>("All");

  const filteredCaseStudies =
    selectedIndustry === "All"
      ? caseStudies
      : caseStudies.filter((cs) => cs.industry === selectedIndustry);

  return (
    <Section id="case-studies">
      <div className="text-center">
        <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
          Featured case studies
        </h2>
        <p className="mt-2 text-text-muted">
          Filter by industry to see how we deliver outcomes.
        </p>
      </div>

      {/* Industry filters */}
      <div className="mt-8 flex flex-wrap justify-center gap-2">
        {industries.map((industry) => (
          <button
            key={industry}
            onClick={() => setSelectedIndustry(industry)}
            className={`rounded-(--radius-pill) border px-4 py-2 text-sm font-medium transition-colors duration-150 ${
              selectedIndustry === industry
                ? "border-accent bg-(--accent-soft) text-accent"
                : "border-border bg-bg-surface text-text-secondary hover:border-(--accent-soft) hover:text-text-primary"
            }`}
            aria-pressed={selectedIndustry === industry}
          >
            {industry}
          </button>
        ))}
      </div>

      {/* Case study grid */}
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCaseStudies.map((study) => (
          <Card key={study.id} href={study.href} glow>
            {/* Image placeholder */}
            <div className="aspect-video rounded-md bg-bg-surface-2" />

            {/* Industry badge */}
            <div className="mt-4">
              <span className="inline-block rounded-(--radius-pill) border border-border bg-bg-surface-2 px-2 py-0.5 text-xs text-text-muted">
                {study.industry}
              </span>
            </div>

            {/* Content */}
            <h3 className="mt-3 font-(family-name:--font-space-grotesk) text-lg font-semibold text-text-primary">
              {study.title}
            </h3>
            <p className="mt-2 text-sm text-text-secondary">
              {study.description}
            </p>

            {/* Outcome */}
            <p className="mt-3 text-sm font-medium text-accent-teal">
              {study.outcome}
            </p>

            {/* Tech stack tags */}
            <div className="mt-4 flex flex-wrap gap-1.5">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-sm bg-bg-surface-2 px-2 py-0.5 text-xs text-text-muted"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Link indicator */}
            <span className="mt-4 inline-block text-sm font-medium text-accent">
              View case study →
            </span>
          </Card>
        ))}
      </div>

      {/* Empty state */}
      {filteredCaseStudies.length === 0 && (
        <div className="mt-10 text-center">
          <p className="text-text-muted">
            No case studies found for this industry.
          </p>
        </div>
      )}
    </Section>
  );
}

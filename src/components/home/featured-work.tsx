import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeading, GradientText, Reveal } from "@/components/ui";
import { ProjectCard } from "@/components/work";
import { cn } from "@/lib/cn";
import { featuredProjects } from "@/lib/content";

export function FeaturedWork() {
  return (
    <Section id="work">
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <Reveal>
          <SectionHeading
            eyebrow="Selected work"
            title={<>Real projects, <GradientText>real results.</GradientText></>}
            lede="A sample of automation, AI, and full-stack work — from enterprise fintech to n8n agents."
          />
        </Reveal>
        <Reveal delay={80}>
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 whitespace-nowrap font-medium text-fg transition-colors hover:text-magenta"
          >
            View all work
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 3) * 90} className={cn(i === 0 && "lg:col-span-2")}>
            <ProjectCard project={p} wide={i === 0} />
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

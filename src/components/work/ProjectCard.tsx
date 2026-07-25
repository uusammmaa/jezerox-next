import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { TechTag } from "@/components/ui";
import { cn } from "@/lib/cn";
import { type Project } from "@/lib/content";
import { ProjectVisual } from "./ProjectVisual";

/** Project/case-study card. Shared by the Home "selected work" grid and /work. */
export function ProjectCard({ project, wide = false }: { project: Project; wide?: boolean }) {
  const Icon = project.icon;
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[var(--radius-2xl)] border border-line bg-ink-850 transition-all duration-300 hover:-translate-y-1 hover:border-line-strong gradient-border"
    >
      <div className={cn("relative overflow-hidden border-b border-line", wide ? "h-44" : "h-36")}>
        {project.image ? (
          <>
            <Image
              src={project.image}
              alt=""
              fill
              className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 420px"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-850 via-ink-850/10 to-transparent" />
          </>
        ) : project.visual ? (
          <>
            <ProjectVisual
              variant={project.visual}
              className="absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-850 via-transparent to-transparent" />
          </>
        ) : (
          <>
            <div className="aurora-fallback absolute inset-0 opacity-70 transition-transform duration-500 group-hover:scale-105" />
            <div className="grid-pattern absolute inset-0 opacity-40" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-850 to-transparent" />
            <Icon className="absolute right-5 top-5 h-12 w-12 text-fg/80" strokeWidth={1.2} />
          </>
        )}
        <span className="absolute bottom-4 left-5 inline-flex rounded-full border border-line-strong bg-ink-950/70 px-3 py-1 font-mono text-[0.62rem] uppercase tracking-widest text-fg-secondary backdrop-blur">
          {project.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-bold leading-snug">{project.title}</h3>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-fg-faint transition-colors group-hover:text-magenta" />
        </div>
        <p className="mt-2.5 text-sm text-fg-muted">{project.summary}</p>
        <div className="mt-5 flex flex-1 flex-col justify-end gap-4">
          <ul className="grid gap-1.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 text-sm text-fg-secondary">
                <span className="h-1 w-1 rounded-full bg-magenta" />
                {h}
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, wide ? 5 : 3).map((t) => (
              <TechTag key={t}>{t}</TechTag>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

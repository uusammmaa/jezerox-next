"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";
import { projects, type Project } from "@/lib/content";
import { ProjectCard } from "./ProjectCard";

const categories = ["All", "AI Automation", "AI Agents", "AI SaaS", "Enterprise", "Web & Mobile"] as const;
type Category = (typeof categories)[number];

export function WorkGrid() {
  const [active, setActive] = useState<Category>("All");
  const filtered: Project[] = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={cn(
              "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
              active === c
                ? "border-magenta bg-[rgba(196,47,134,0.12)] text-fg"
                : "border-line text-fg-muted hover:border-line-strong hover:text-fg",
            )}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}

import type { MetadataRoute } from "next";
import { getSiteUrl } from "@/lib/seo";
import { services, projects } from "@/lib/content";

const baseUrl = getSiteUrl();

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { path: "/", priority: 1, changeFrequency: "weekly" as const },
    { path: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/work", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/insights", priority: 0.7, changeFrequency: "weekly" as const },
    { path: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const serviceRoutes = services.map((s) => ({
    path: `/services/${s.slug}`,
    priority: 0.85,
    changeFrequency: "monthly" as const,
  }));

  const workRoutes = projects.map((p) => ({
    path: `/work/${p.slug}`,
    priority: 0.7,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...serviceRoutes, ...workRoutes].map(({ path, priority, changeFrequency }) => ({
    url: path === "/" ? baseUrl : `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }));
}

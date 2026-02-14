'use client';

import { useState } from "react";
import { Section, Card } from "@/components/ui";

type Topic = "All" | "Engineering" | "Product Strategy" | "AI & Automation" | "Growth" | "Design" | "DevOps";

interface Post {
  id: string;
  title: string;
  description: string;
  topic: Topic;
  date: string;
  readTime: string;
  href: string;
  featured?: boolean;
}

const posts: Post[] = [
  {
    id: "engineering-playbooks",
    title: "Engineering playbooks for product teams",
    description:
      "Practical frameworks for shipping faster, reducing technical debt, and maintaining code quality as your team scales.",
    topic: "Engineering",
    date: "2024-12-15",
    readTime: "8 min read",
    href: "/insights/engineering-playbooks",
    featured: true,
  },
  {
    id: "ai-productization",
    title: "AI productization: from prototype to production",
    description:
      "How to move AI features from proof-of-concept to reliable production systems that users trust.",
    topic: "AI & Automation",
    date: "2024-12-10",
    readTime: "12 min read",
    href: "/insights/ai-productization",
  },
  {
    id: "growth-lessons-saas",
    title: "Growth lessons from B2B SaaS",
    description:
      "Data-driven strategies for improving activation, retention, and expansion in B2B software products.",
    topic: "Growth",
    date: "2024-12-05",
    readTime: "10 min read",
    href: "/insights/growth-lessons-saas",
  },
  {
    id: "mvp-validation",
    title: "MVP validation frameworks that work",
    description:
      "Systematic approaches to validate product ideas before building, reducing risk and accelerating time-to-market.",
    topic: "Product Strategy",
    date: "2024-11-28",
    readTime: "7 min read",
    href: "/insights/mvp-validation",
  },
  {
    id: "design-systems-scale",
    title: "Building design systems that scale",
    description:
      "Lessons from creating and maintaining design systems for teams shipping multiple products.",
    topic: "Design",
    date: "2024-11-20",
    readTime: "9 min read",
    href: "/insights/design-systems-scale",
  },
  {
    id: "devops-security",
    title: "DevOps security best practices",
    description:
      "Secure CI/CD pipelines, infrastructure as code, and compliance automation for regulated industries.",
    topic: "DevOps",
    date: "2024-11-15",
    readTime: "11 min read",
    href: "/insights/devops-security",
  },
  {
    id: "typescript-patterns",
    title: "TypeScript patterns for large codebases",
    description:
      "Advanced TypeScript techniques for maintaining type safety and developer experience at scale.",
    topic: "Engineering",
    date: "2024-11-10",
    readTime: "6 min read",
    href: "/insights/typescript-patterns",
  },
  {
    id: "product-roadmaps",
    title: "Product roadmap strategies",
    description:
      "How to create roadmaps that align engineering, design, and business goals while staying flexible.",
    topic: "Product Strategy",
    date: "2024-11-05",
    readTime: "8 min read",
    href: "/insights/product-roadmaps",
  },
];

const topics: Topic[] = ["All", "Engineering", "Product Strategy", "AI & Automation", "Growth", "Design", "DevOps"];

export function PostsGrid() {
  const [selectedTopic, setSelectedTopic] = useState<Topic>("All");

  const filteredPosts =
    selectedTopic === "All"
      ? posts
      : posts.filter((post) => post.topic === selectedTopic);

  const featuredPost = posts.find((post) => post.featured);
  const regularPosts = filteredPosts.filter((post) => !post.featured);

  return (
    <>
      {/* Topic filters */}
      <Section id="filters">
        <div className="flex flex-wrap justify-center gap-2">
          {topics.map((topic) => (
            <button
              key={topic}
              onClick={() => setSelectedTopic(topic)}
              className={`rounded-(--radius-pill) border px-4 py-2 text-sm font-medium transition-colors duration-150 ${
                selectedTopic === topic
                  ? "border-accent bg-(--accent-soft) text-accent"
                  : "border-border bg-bg-surface text-text-secondary hover:border-(--accent-soft) hover:text-text-primary"
              }`}
              aria-pressed={selectedTopic === topic}
            >
              {topic}
            </button>
          ))}
        </div>
      </Section>

      {/* Featured post */}
      {featuredPost && (
        <Section id="featured-post">
          <div className="text-center">
            <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
              Featured insight
            </h2>
          </div>
          <div className="mt-8">
            <Card href={featuredPost.href} glow className="md:flex md:gap-8">
              <div className="aspect-16/10 shrink-0 rounded-md bg-bg-surface-2 md:w-1/2" />
              <div className="mt-6 md:mt-0 md:flex md:flex-col md:justify-center">
                <div className="mb-2">
                  <span className="inline-block rounded-(--radius-pill) border border-border bg-bg-surface-2 px-3 py-1 text-xs font-medium text-accent">
                    {featuredPost.topic}
                  </span>
                </div>
                <h3 className="mt-3 font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
                  {featuredPost.title}
                </h3>
                <p className="mt-3 text-base text-text-secondary">
                  {featuredPost.description}
                </p>
                <div className="mt-4 flex items-center gap-4 text-sm text-text-muted">
                  <time dateTime={featuredPost.date}>
                    {new Date(featuredPost.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  <span>•</span>
                  <span>{featuredPost.readTime}</span>
                </div>
                <span className="mt-6 inline-block text-sm font-medium text-accent">
                  Read article →
                </span>
              </div>
            </Card>
          </div>
        </Section>
      )}

      {/* Posts list */}
      <Section id="posts-list">
        <div className="text-center">
          <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
            All insights
          </h2>
          <p className="mt-2 text-text-muted">
            {selectedTopic === "All"
              ? "Browse all our insights and guides."
              : `Filtered by ${selectedTopic.toLowerCase()}.`}
          </p>
        </div>

        {regularPosts.length > 0 ? (
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {regularPosts.map((post) => (
              <Card key={post.id} href={post.href}>
                <div className="aspect-16/10 rounded-md bg-bg-surface-2" />
                <div className="mt-4">
                  <span className="inline-block rounded-(--radius-pill) border border-border bg-bg-surface-2 px-2 py-0.5 text-xs text-text-muted">
                    {post.topic}
                  </span>
                </div>
                <h3 className="mt-3 font-(family-name:--font-space-grotesk) text-lg font-semibold text-text-primary">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-text-secondary">
                  {post.description}
                </p>
                <div className="mt-4 flex items-center gap-3 text-xs text-text-muted">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </time>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
                <span className="mt-4 inline-block text-sm font-medium text-accent">
                  Read more →
                </span>
              </Card>
            ))}
          </div>
        ) : (
          <div className="mt-10 text-center">
            <p className="text-text-muted">
              No posts found for this topic. Try selecting a different filter.
            </p>
          </div>
        )}
      </Section>
    </>
  );
}

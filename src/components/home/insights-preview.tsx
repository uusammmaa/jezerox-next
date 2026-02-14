import Link from "next/link";
import { Section, Card } from "@/components/ui";

const posts = [
  { title: "Engineering playbooks for product teams", slug: "#", date: "Recent" },
  { title: "AI productization: from prototype to production", slug: "#", date: "Recent" },
  { title: "Growth lessons from B2B SaaS", slug: "#", date: "Recent" },
] as const;

export function InsightsPreview() {
  return (
    <Section id="insights" className="border-t border-border bg-bg-surface-2">
      <div className="text-center">
          <h2 className="font-(family-name:--font-space-grotesk) text-2xl font-semibold text-text-primary md:text-3xl">
            Insights for product leaders
          </h2>
          <p className="mt-2 text-text-muted">
            Engineering playbooks, AI productization, and growth lessons.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map(({ title, slug, date }) => (
            <Card key={title} href={slug} className="glass">
              <div className="aspect-video rounded-md bg-bg-surface-2" />
              <h3 className="mt-4 font-(family-name:--font-space-grotesk) text-lg font-semibold text-text-primary">
                {title}
              </h3>
              <p className="mt-1 text-sm text-text-muted">{date}</p>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center">
          <Link
            href="/insights"
            className="font-medium text-accent hover:text-(--blue-400) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--blue-400)"
          >
            View all insights →
          </Link>
        </p>
    </Section>
  );
}

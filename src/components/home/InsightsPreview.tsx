import Link from "next/link";
import { Section, Card } from "@/components/ui";

const posts = [
  { title: "Engineering playbooks for product teams", slug: "#", date: "Recent" },
  { title: "AI productization: from prototype to production", slug: "#", date: "Recent" },
  { title: "Growth lessons from B2B SaaS", slug: "#", date: "Recent" },
] as const;

export function InsightsPreview() {
  return (
    <Section id="insights">
      <div className="text-center">
          <h2 className="font-[family-name:var(--font-space-grotesk)] text-2xl font-semibold text-[var(--text-primary)] md:text-3xl">
            Insights for product leaders
          </h2>
          <p className="mt-2 text-[var(--text-muted)]">
            Engineering playbooks, AI productization, and growth lessons.
          </p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {posts.map(({ title, slug, date }) => (
            <Card key={title} href={slug}>
              <div className="aspect-[16/10] rounded-[var(--radius-md)] bg-[var(--navy-800)]" />
              <h3 className="mt-4 font-[family-name:var(--font-space-grotesk)] text-lg font-semibold text-[var(--text-primary)]">
                {title}
              </h3>
              <p className="mt-1 text-sm text-[var(--text-muted)]">{date}</p>
            </Card>
          ))}
        </div>
        <p className="mt-8 text-center">
          <Link
            href="/insights"
            className="font-medium text-[var(--blue-500)] hover:text-[var(--blue-400)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--blue-400)]"
          >
            View all insights →
          </Link>
        </p>
    </Section>
  );
}

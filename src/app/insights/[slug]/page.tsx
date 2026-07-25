import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Header, Footer } from "@/components/layout";
import { CtaBand } from "@/components/common";
import { Container, Eyebrow, GradientText } from "@/components/ui";
import { createPageMetadata, getSiteUrl } from "@/lib/seo";
import { insights, getInsight, company } from "@/lib/content";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) return {};
  return createPageMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/insights/${post.slug}`,
    keywords: post.keywords,
  });
}

export default async function InsightPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getInsight(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    author: { "@type": "Person", name: company.founder },
    publisher: { "@type": "Organization", name: company.brand, legalName: company.legalName },
    mainEntityOfPage: `${getSiteUrl()}/insights/${post.slug}`,
    keywords: post.keywords.join(", "),
  };

  return (
    <>
      <Header />
      <main id="main" className="min-h-screen">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

        <article className="relative overflow-hidden pt-36 pb-16 md:pt-44">
          <div
            className="pointer-events-none absolute right-[-10%] top-[-15%] h-[480px] w-[560px]"
            aria-hidden
            style={{ background: "radial-gradient(closest-side, rgba(196,47,134,0.18), rgba(75,74,207,0.1), transparent)" }}
          />
          <Container className="relative">
            <div className="mx-auto max-w-2xl">
              <Link href="/insights" className="inline-flex items-center gap-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg">
                <ArrowLeft className="h-4 w-4" /> All insights
              </Link>
              <div className="mt-8">
                <Eyebrow>{post.category}</Eyebrow>
              </div>
              <h1 className="mt-4 text-balance text-4xl leading-[1.08] tracking-[-0.02em] sm:text-5xl">{post.title}</h1>
              <p className="mt-5 font-mono text-[0.72rem] uppercase tracking-widest text-fg-faint">
                {post.readingTime} · {company.founder}
              </p>

              <div className="mt-12 flex flex-col gap-8">
                {post.body.map((block, i) => (
                  <section key={i} className="flex flex-col gap-4">
                    {block.heading ? (
                      <h2 className="text-2xl font-bold">{block.heading}</h2>
                    ) : null}
                    {block.paragraphs.map((p, j) => (
                      <p key={j} className="text-lg leading-relaxed text-fg-secondary">
                        {p}
                      </p>
                    ))}
                  </section>
                ))}
              </div>

              <div className="mt-14 rounded-[var(--radius-xl)] border border-line bg-ink-900 p-6">
                <p className="text-fg-secondary">
                  <span className="font-semibold text-fg">Working on something like this?</span>{" "}
                  I help teams ship AI automation and agents that actually hold up in production.
                </p>
                <Link href="/contact" className="mt-3 inline-flex items-center gap-1.5 font-medium text-magenta">
                  Start a conversation →
                </Link>
              </div>
            </div>
          </Container>
        </article>

        <CtaBand
          title={<>Build it <GradientText animate>right</GradientText> the first time.</>}
          subtitle="Tell me about your project and I'll respond within 24 hours."
          secondary={{ label: "Read more insights", href: "/insights" }}
        />
      </main>
      <Footer />
    </>
  );
}

import { Container } from "@/components/ui";

export function SocialProof() {
  return (
    <section
      id="social-proof"
      className="border-y border-border bg-bg-surface/50 py-12"
    >
      <Container>
        <p className="mb-10 text-center text-xs font-bold tracking-[0.2em] text-text-muted">
          TRUSTED BY INDUSTRY LEADERS
        </p>
        <div className="flex flex-wrap items-center justify-center gap-12 opacity-40 transition-all duration-500 hover:opacity-100 md:gap-24 [&>*]:grayscale [&>*]:hover:grayscale-0">
          <div className="h-8 w-24 rounded-sm bg-[var(--navy-700)]" aria-hidden />
          <div className="h-8 w-32 rounded-sm bg-[var(--navy-700)]" aria-hidden />
          <div className="h-8 w-28 rounded-sm bg-[var(--navy-700)]" aria-hidden />
          <div className="h-8 w-36 rounded-sm bg-[var(--navy-700)]" aria-hidden />
          <div className="h-8 w-24 rounded-sm bg-[var(--navy-700)]" aria-hidden />
        </div>
      </Container>
    </section>
  );
}

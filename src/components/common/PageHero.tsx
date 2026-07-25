import { type ReactNode } from "react";
import { Container, Eyebrow } from "@/components/ui";
import { cn } from "@/lib/cn";

interface PageHeroProps {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  children?: ReactNode;
  center?: boolean;
}

/** Consistent inner-page hero: eyebrow + H1 + lede over a subtle Aurora glow. */
export function PageHero({ eyebrow, title, lede, children, center = false }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden pt-36 pb-14 md:pt-44 md:pb-20">
      <div
        className="grid-pattern pointer-events-none absolute inset-0 opacity-40"
        style={{ maskImage: "linear-gradient(to bottom, black, transparent)", WebkitMaskImage: "linear-gradient(to bottom, black, transparent)" }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute right-[-10%] top-[-20%] h-[520px] w-[620px]"
        aria-hidden
        style={{ background: "radial-gradient(closest-side, rgba(196,47,134,0.20), rgba(75,74,207,0.12), transparent)" }}
      />
      <Container className="relative">
        <div className={cn(center ? "mx-auto max-w-3xl text-center" : "max-w-3xl")}>
          {eyebrow ? <Eyebrow center={center}>{eyebrow}</Eyebrow> : null}
          <h1 className="mt-5 text-balance text-4xl leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {lede ? (
            <p className={cn("mt-6 text-lg text-fg-muted md:text-xl", center && "mx-auto max-w-2xl")}>
              {lede}
            </p>
          ) : null}
          {children ? (
            <div className={cn("mt-9 flex flex-wrap gap-4", center && "justify-center")}>{children}</div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

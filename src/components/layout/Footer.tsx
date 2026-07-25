import Link from "next/link";
import Image from "next/image";
import { Container, Button } from "@/components/ui";
import { company, footerNav } from "@/lib/content";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-ink-900" role="contentinfo">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-[1.6fr_1fr_1fr_1fr] md:py-20">
          <div>
            <Link href="/" aria-label="JezeroX home" className="inline-flex">
              <Image src="/design-02.png" alt="JezeroX" width={140} height={32} className="h-7 w-auto" />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-fg-muted">
              {company.positioning}
            </p>
            <p className="mt-5 font-mono text-[0.7rem] uppercase tracking-[0.12em] text-fg-faint">
              {company.entityLine}
            </p>
            <div className="mt-6">
              <Button href="/contact" variant="secondary" size="sm">
                Start a project
              </Button>
            </div>
          </div>

          {footerNav.map((col) => (
            <div key={col.heading}>
              <h2 className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-fg-faint">
                {col.heading}
              </h2>
              <ul className="mt-5 flex flex-col gap-3">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-sm text-fg-muted transition-colors hover:text-fg">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-line py-7 sm:flex-row">
          <p className="text-xs text-fg-faint">
            © {year} {company.legalName}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {company.socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-fg-muted transition-colors hover:text-fg"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

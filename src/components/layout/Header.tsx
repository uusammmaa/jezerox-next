"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";
import { Button, Container } from "@/components/ui";
import { primaryNav } from "@/lib/content";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while the mobile overlay is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(`${href}`));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background,border-color,backdrop-filter] duration-300",
        scrolled || menuOpen
          ? "border-b border-line bg-ink-950/70 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
      role="banner"
    >
      <Link href="#main" className="skip-link">
        Skip to content
      </Link>
      <Container>
        <div className="flex h-[72px] items-center justify-between">
          <Link href="/" aria-label="JezeroX home" className="flex items-center">
            <Image src="/design-02.png" alt="JezeroX" width={132} height={30} className="h-[26px] w-auto" priority />
          </Link>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {primaryNav.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                aria-current={isActive(href) ? "page" : undefined}
                className={cn(
                  "group relative rounded-lg px-3.5 py-2 text-sm transition-colors",
                  isActive(href) ? "text-fg" : "text-fg-secondary hover:text-fg",
                )}
              >
                {label}
                <span
                  aria-hidden
                  className={cn(
                    "pointer-events-none absolute inset-x-3.5 bottom-1 h-px origin-left transition-transform duration-300 group-hover:scale-x-100",
                    isActive(href) ? "scale-x-100" : "scale-x-0",
                  )}
                  style={{ background: "var(--gradient-brand)" }}
                />
              </Link>
            ))}
            <Button href="/contact" variant="primary" size="sm" className="ml-2">
              Start a project
            </Button>
          </nav>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-fg hover:bg-ink-800 md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" aria-hidden>
              {menuOpen ? (
                <path strokeLinecap="round" d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile overlay */}
      <div
        id="mobile-nav"
        className={cn(
          "grid overflow-hidden bg-ink-950/95 backdrop-blur-xl transition-[grid-template-rows] duration-300 md:hidden",
          menuOpen ? "grid-rows-[1fr] border-t border-line" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0">
          <Container>
            <nav className="flex flex-col gap-1 py-6" aria-label="Mobile">
              {primaryNav.map(({ href, label }, i) => (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "rounded-xl px-4 py-3 text-lg font-medium transition-colors",
                    isActive(href) ? "bg-ink-800 text-fg" : "text-fg-secondary hover:bg-ink-800 hover:text-fg",
                  )}
                  style={{ transitionDelay: `${i * 30}ms` }}
                >
                  {label}
                </Link>
              ))}
              <Button href="/contact" variant="primary" size="lg" className="mt-3 w-full" >
                Start a project
              </Button>
            </nav>
          </Container>
        </div>
      </div>
    </header>
  );
}

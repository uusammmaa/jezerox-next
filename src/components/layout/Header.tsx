"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Container } from "@/components/ui";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/insights", label: "Insights" },
  { href: "/careers", label: "Careers" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header
      className="glass sticky top-0 z-50 border-b border-border"
      role="banner"
    >
      <Link
        href="#main-content"
        className="skip-link focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--blue-400)"
      >
        Skip to main content
      </Link>
      <Container className="flex h-20 items-center justify-between">
        <Link
          href="/"
          className="flex items-center focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--blue-400)"
          aria-label="JezeroX home"
        >
          <Image
            src="/design-02.png"
            alt="JezeroX"
            width={140}
            height={36}
            className="h-8 w-auto md:h-9"
            priority
          />
        </Link>

        <nav
          className="flex items-center gap-1"
          aria-label="Primary navigation"
        >
          <ul className="hidden items-center gap-1 md:flex">
            {navLinks.map(({ href, label }) => {
              const isActive =
                pathname === href ||
                (href !== "/" && pathname.startsWith(`${href}/`));
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={`rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--blue-400) ${
                      isActive
                        ? "bg-bg-surface-2 text-text-primary"
                        : "text-text-secondary hover:bg-bg-surface-2 hover:text-text-primary"
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
          <Link
            href="/contact"
            className="ml-2 hidden rounded-md bg-accent px-4 py-2 text-sm font-semibold text-(--gray-100) hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--blue-400) md:inline-flex"
          >
            Contact
          </Link>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md text-text-primary hover:bg-bg-surface-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--blue-400) md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="sr-only">{menuOpen ? "Close" : "Menu"}</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </nav>
      </Container>

      <div
        id="mobile-nav"
        className={`glass border-t border-border md:hidden ${menuOpen ? "block" : "hidden"}`}
        aria-hidden={!menuOpen}
      >
        <Container className="flex flex-col gap-1 py-4">
          {navLinks.map(({ href, label }) => {
            const isActive =
              pathname === href ||
              (href !== "/" && pathname.startsWith(`${href}/`));
            return (
              <Link
                key={href}
                href={href}
                className={`rounded-md px-3 py-2 transition-colors ${
                  isActive
                    ? "bg-bg-surface-2 text-text-primary font-medium"
                    : "text-text-secondary hover:bg-bg-surface-2 hover:text-text-primary"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            );
          })}
          <Link
            href="/contact"
            className="mt-2 inline-flex justify-center rounded-md bg-accent px-4 py-2 text-sm font-semibold text-(--gray-100) hover:bg-accent-hover"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </Container>
      </div>
    </header>
  );
}

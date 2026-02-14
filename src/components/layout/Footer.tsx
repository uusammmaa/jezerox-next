import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui";

const navLinks = [
  { href: "/services", label: "Expertise" },
  { href: "/work", label: "Our Work" },
  { href: "/about", label: "About Us" },
  { href: "/privacy", label: "Privacy" },
] as const;

const socialLinks = [
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://x.com", label: "Twitter (X)" },
  { href: "https://github.com", label: "GitHub" },
] as const;

const legalLinks = [
  { href: "/terms", label: "Terms of Service" },
  { href: "/privacy", label: "Privacy" },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-border bg-bg-surface"
      role="contentinfo"
    >
      <Container className="py-20">
        <div className="mb-20 grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="mb-6 flex items-center"
              aria-label="JezeroX home"
            >
              <Image
                src="/design-02.png"
                alt=""
                width={140}
                height={36}
                className="h-8 w-auto"
              />
            </Link>
            <p className="max-w-xs leading-relaxed text-text-muted">
              JezeroX partners with ambitious teams to design, build, and scale
              secure digital products.
            </p>
          </div>
          <div>
            <h4 className="mb-6 font-(family-name:--font-space-grotesk) font-bold text-text-primary">
              NAVIGATION
            </h4>
            <ul className="space-y-4">
              {navLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-text-muted transition-colors hover:text-[var(--blue-500)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--blue-400)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-(family-name:--font-space-grotesk) font-bold text-text-primary">
              SOCIAL
            </h4>
            <ul className="space-y-4">
              {socialLinks.map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-text-muted transition-colors hover:text-[var(--blue-500)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--blue-400)]"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-8 md:flex-row">
          <p className="text-xs font-medium text-text-muted">
            © {year} JezeroX. All rights reserved.
          </p>
          <div className="flex gap-8">
            {legalLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-xs font-medium text-text-muted transition-colors hover:text-[var(--blue-500)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--blue-400)]"
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}

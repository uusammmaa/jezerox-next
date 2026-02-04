import Link from "next/link";
import { Container } from "@/components/ui";

const footerGroups = [
  {
    label: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/careers", label: "Careers" },
      { href: "/contact", label: "Contact" },
    ],
  },
  {
    label: "Services",
    links: [
      { href: "/services", label: "Services" },
    ],
  },
  {
    label: "Resources",
    links: [
      { href: "/insights", label: "Insights" },
    ],
  },
  {
    label: "Legal",
    links: [
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
    ],
  },
] as const;

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="border-t border-[var(--border-subtle)] bg-[var(--navy-900)]"
      role="contentinfo"
    >
      <Container className="py-12 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {footerGroups.map(({ label, links }) => (
            <div key={label}>
              <h3 className="mb-4 font-[family-name:var(--font-space-grotesk)] text-sm font-semibold uppercase tracking-wider text-[var(--text-muted)]">
                {label}
              </h3>
              <ul className="space-y-2">
                {links.map(({ href, label: linkLabel }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      className="text-sm text-[var(--text-secondary)] hover:text-[var(--blue-400)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--blue-400)]"
                    >
                      {linkLabel}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-8 sm:flex-row">
          <p className="text-sm text-[var(--text-muted)]">
            © {year} JezeroX. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}

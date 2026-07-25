import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Analytics } from "@vercel/analytics/next";
import { getSiteUrl } from "@/lib/seo";
import { company } from "@/lib/content";
import { JsonLd } from "@/components/seo/json-ld";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const siteUrl = getSiteUrl();
const defaultTitle = `${company.brand} — AI Automation, AI Agents & Full-Stack Development`;
const defaultDescription =
  "JezeroX builds AI automation (n8n, Make, Zapier), AI agents & RAG systems, and full-stack web apps. Top-rated engineer, 25+ projects, 4.9★. A Skycap LLC company.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  icons: { icon: "/logo-mark.png" },
  title: {
    default: defaultTitle,
    template: "%s | JezeroX",
  },
  description: defaultDescription,
  keywords: [
    "AI automation agency",
    "AI automation agency USA",
    "n8n developer",
    "n8n consultant",
    "AI agent developer",
    "RAG developer",
    "AI consultant",
    "Next.js developer",
    "React developer",
    "Node.js developer",
    "NestJS developer",
    "workflow automation",
    "hire AI automation expert",
    "AI automation for real estate",
    "AI automation for ecommerce",
    "AI automation for healthcare",
    "AI automation for law firms",
    "AI automation for agencies",
  ],
  robots: "index, follow",
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: company.brand,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#08070C",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

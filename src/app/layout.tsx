import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { getSiteUrl } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = getSiteUrl();
const defaultTitle = "JezeroX — Build faster. Scale smarter.";
const defaultDescription =
  "JezeroX is a product engineering partner for ambitious teams. We design, build, and scale secure software from MVP to enterprise.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: "%s | JezeroX",
  },
  description: defaultDescription,
  robots: "index, follow",
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: siteUrl,
    siteName: "JezeroX",
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
  themeColor: "#0B1220",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <JsonLd />
        {children}
        <Analytics />
      </body>
    </html>
  );
}

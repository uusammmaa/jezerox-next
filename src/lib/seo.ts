import type { Metadata } from "next";

const SITE_URL = process.env.SITE_URL ?? "https://jezerox.com";

export function getSiteUrl(): string {
  return SITE_URL.replace(/\/$/, "");
}

export interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  /** Override for noIndex pages (e.g. 404). Default: index, follow */
  robots?: Metadata["robots"];
}

export function createPageMetadata({
  title,
  description,
  path,
  robots = "index, follow",
}: PageMetadataOptions): Metadata {
  const baseUrl = getSiteUrl();
  const url = path === "/" ? baseUrl : `${baseUrl}${path}`;

  return {
    title,
    description,
    robots,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: "JezeroX",
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

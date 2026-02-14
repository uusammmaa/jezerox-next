import { getSiteUrl } from "@/lib/seo";

const siteUrl = getSiteUrl();

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "JezeroX",
  url: siteUrl,
  logo: `${siteUrl}/logo-mark.png`,
  description:
    "JezeroX is a product engineering partner for ambitious teams. We design, build, and scale secure software from MVP to enterprise.",
  foundingDate: "2019",
  contactPoint: {
    "@type": "ContactPoint",
    url: `${siteUrl}/contact`,
    contactType: "customer service",
    availableLanguage: "English",
    areaServed: "Worldwide",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "JezeroX",
  url: siteUrl,
  description:
    "JezeroX is a software agency that designs, builds, and scales digital products for startups and enterprises.",
  publisher: {
    "@type": "Organization",
    name: "JezeroX",
    logo: {
      "@type": "ImageObject",
      url: `${siteUrl}/logo-mark.png`,
    },
  },
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
    </>
  );
}

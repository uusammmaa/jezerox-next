import { getSiteUrl } from "@/lib/seo";

const siteUrl = getSiteUrl();

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: "JezeroX",
  url: siteUrl,
  logo: `${siteUrl}/logo-mark.png`,
  description:
    "JezeroX is a product engineering partner for ambitious teams. We design, build, and scale secure software from MVP to enterprise.",
  foundingDate: "2019",
  knowsAbout: [
    "Product strategy",
    "UX design",
    "Software engineering",
    "AI development",
    "Machine learning",
    "Data automation",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "JezeroX Services",
    itemListElement: [
      { "@type": "Service", name: "Data, AI, and automation" },
      { "@type": "Service", name: "AI productization" },
    ],
  },
  contactPoint: {
    "@type": "ContactPoint",
    url: `${siteUrl}/contact`,
    contactType: "customer service",
    availableLanguage: "English",
    areaServed: "Worldwide",
  },
};

const aiServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Data, AI, and automation",
  description:
    "JezeroX builds custom AI solutions including LLM integration, predictive analytics, intelligent workflows, and production machine learning systems. We help product teams move AI from prototype to scalable, reliable production.",
  provider: { "@id": `${siteUrl}/#organization` },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "JezeroX",
  url: siteUrl,
  description:
    "JezeroX is a product engineering partner that designs, builds, and scales digital products, including AI, machine learning, and data automation, for startups and enterprises.",
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
          __html: JSON.stringify(aiServiceSchema),
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

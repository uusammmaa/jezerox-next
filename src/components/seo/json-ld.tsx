import { getSiteUrl } from "@/lib/seo";
import { company, services } from "@/lib/content";

const siteUrl = getSiteUrl();

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": `${siteUrl}/#organization`,
  name: company.brand,
  legalName: company.legalName,
  url: siteUrl,
  logo: `${siteUrl}/logo-mark.png`,
  image: `${siteUrl}/logo-mark.png`,
  description:
    "JezeroX builds AI automation (n8n, Make, Zapier), AI agents and RAG systems, and full-stack web applications for startups and enterprises.",
  founder: {
    "@type": "Person",
    name: company.founder,
    jobTitle: company.founderTitle,
  },
  areaServed: "Worldwide",
  knowsAbout: [
    "AI automation",
    "n8n",
    "AI agents",
    "RAG systems",
    "LLM integration",
    "OpenAI API",
    "Next.js",
    "React",
    "Angular",
    "Full-stack development",
  ],
  sameAs: company.socials.map((s) => s.href),
  contactPoint: {
    "@type": "ContactPoint",
    email: company.email,
    contactType: "sales",
    availableLanguage: "English",
    areaServed: "Worldwide",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "JezeroX Services",
    itemListElement: services.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.title, description: s.short },
    })),
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: company.brand,
  url: siteUrl,
  description:
    "AI automation, AI agents, and full-stack development studio. A Skycap LLC company.",
  publisher: { "@id": `${siteUrl}/#organization` },
};

export function JsonLd() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
    </>
  );
}

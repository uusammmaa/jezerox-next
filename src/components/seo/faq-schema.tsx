export interface FaqItem {
  question: string;
  answer: string;
}

interface FaqSchemaProps {
  items: readonly FaqItem[];
}

export function FaqSchema({ items }: Readonly<FaqSchemaProps>) {
  const faqPageSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map(({ question, answer }) => ({
      "@type": "Question",
      name: question,
      acceptedAnswer: {
        "@type": "Answer",
        text: answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(faqPageSchema),
      }}
    />
  );
}

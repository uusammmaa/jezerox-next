import type { Metadata } from "next";
import { LegalLayout } from "@/components/common";
import { GradientText } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";
import { company } from "@/lib/content";

export const metadata: Metadata = createPageMetadata({
  title: "Terms of Service",
  description: "The terms governing use of the JezeroX (Skycap LLC) website and services.",
  path: "/terms",
  robots: "index, follow",
});

export default function TermsPage() {
  return (
    <LegalLayout
      title={<>Terms of <GradientText>Service</GradientText></>}
      intro={`The terms governing use of the ${company.brand} website and services.`}
      updated="July 2026"
      sections={[
        {
          heading: "Agreement",
          paragraphs: [
            `These terms govern your use of the ${company.brand} website, operated by ${company.legalName} ("we", "us"). By using this site you agree to them.`,
          ],
        },
        {
          heading: "Services",
          paragraphs: [
            "This website describes our software, AI automation, and engineering services. Any actual engagement is governed by a separate written agreement (a proposal, statement of work, or contract) that defines scope, deliverables, timeline, and price.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "The content, branding, and design of this website are owned by us and may not be copied or reproduced without permission. Ownership of work produced under a client engagement is defined in that engagement's agreement.",
          ],
        },
        {
          heading: "No warranty",
          paragraphs: [
            'This website is provided "as is" for informational purposes. We make no warranties about the accuracy or completeness of its content, and case studies describe past work without guaranteeing similar results.',
          ],
        },
        {
          heading: "Limitation of liability",
          paragraphs: [
            "To the fullest extent permitted by law, we are not liable for any indirect or consequential damages arising from your use of this website.",
          ],
        },
        {
          heading: "Governing law",
          paragraphs: [
            "These terms are governed by the laws of the State of Texas, United States, without regard to conflict-of-law principles.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [`Questions about these terms? Email ${company.email}.`],
        },
      ]}
    />
  );
}

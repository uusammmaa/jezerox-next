import type { Metadata } from "next";
import { LegalLayout } from "@/components/common";
import { GradientText } from "@/components/ui";
import { createPageMetadata } from "@/lib/seo";
import { company } from "@/lib/content";

export const metadata: Metadata = createPageMetadata({
  title: "Privacy Policy",
  description: "How JezeroX (Skycap LLC) collects, uses, and protects your information.",
  path: "/privacy",
  robots: "index, follow",
});

export default function PrivacyPage() {
  return (
    <LegalLayout
      title={<>Privacy <GradientText>Policy</GradientText></>}
      intro={`How ${company.brand}, operated by ${company.legalName}, handles your information.`}
      updated="July 2026"
      sections={[
        {
          heading: "Who we are",
          paragraphs: [
            `${company.brand} is a trading name of ${company.legalName}, a company registered in the United States. This policy explains what personal information we collect and how we use it. Questions? Email ${company.email}.`,
          ],
        },
        {
          heading: "Information we collect",
          paragraphs: [
            "When you submit our contact form we collect the name, email address, company, and message you provide. We use privacy-respecting analytics to understand aggregate site usage; this does not identify you personally.",
          ],
        },
        {
          heading: "How we use it",
          paragraphs: [
            "We use the information you send solely to respond to your inquiry and discuss a potential engagement. We do not sell your data or use it for advertising.",
          ],
        },
        {
          heading: "Third-party services",
          paragraphs: [
            "Contact form submissions are delivered via Resend (email). The site is hosted on Vercel, which processes standard server logs, and uses Vercel Analytics. Each provider processes data under its own privacy terms.",
          ],
        },
        {
          heading: "Cookies & analytics",
          paragraphs: [
            "We use privacy-friendly, aggregate analytics (Vercel Analytics) to understand site usage. We do not use advertising cookies or cross-site trackers. Any cookies set are limited to what's needed for the site to function.",
          ],
        },
        {
          heading: "International users",
          paragraphs: [
            "JezeroX serves clients worldwide. If you contact us from outside the United States, your information may be processed in the US and in other countries where our service providers operate. By contacting us, you consent to this transfer.",
          ],
        },
        {
          heading: "Data retention",
          paragraphs: [
            "We keep inquiry emails only as long as needed to respond and maintain our business records, then delete them.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            `You can request access to, correction of, or deletion of the personal information you've shared with us at any time by emailing ${company.email}.`,
          ],
        },
        {
          heading: "Changes",
          paragraphs: [
            "We may update this policy from time to time. The latest version will always be posted on this page.",
          ],
        },
      ]}
    />
  );
}

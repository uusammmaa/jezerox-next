import { CtaBand } from "@/components/common";
import { GradientText } from "@/components/ui";
import { company } from "@/lib/content";

export function FinalCTA() {
  return (
    <CtaBand
      title={<>Ready to build something <GradientText animate>intelligent?</GradientText></>}
      subtitle="Tell me about your goals and I'll respond within a few hours with clear next steps."
      primary={{ label: "Start a project", href: "/contact" }}
      secondary={{ label: "Book a call", href: company.calendly, external: true }}
    />
  );
}

import { CtaBand } from "@/components/common";
import { GradientText } from "@/components/ui";
import { company } from "@/lib/content";

export function FinalCTA() {
  return (
    <CtaBand
      title={<>Ready to build something <GradientText animate>intelligent?</GradientText></>}
      subtitle="Tell us about your goals and you'll get a real reply within a few hours with clear next steps."
      primary={{ label: "Tell us what you want to automate", href: "/contact" }}
      secondary={{ label: "Book a call", href: company.calendly, external: true }}
    />
  );
}

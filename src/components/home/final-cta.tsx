import Link from "next/link";
import { Section } from "@/components/ui";

const calendlyUrl = process.env.CALENDLY_BOOKING_URL || "/contact";

export function FinalCTA() {
  return (
    <Section id="final-cta">
      <div className="relative overflow-hidden rounded-3xl bg-[var(--blue-500)] p-12 text-center md:p-24">
        <div className="pointer-events-none absolute inset-0 grid-pattern opacity-20" />
        <div className="relative z-10">
          <h2 className="font-(family-name:--font-space-grotesk) text-4xl font-bold text-white md:text-6xl">
            Ready to build your next product?
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-lg text-blue-100 md:text-xl">
            Tell us about your goals and we will respond in 24 hours.
          </p>
          <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-10 py-4 text-lg font-bold text-[var(--blue-500)] transition-colors hover:bg-slate-100"
            >
              Start a project
            </Link>
            <Link
              href={calendlyUrl}
              className="inline-flex items-center justify-center rounded-lg border border-white/30 bg-white/10 px-10 py-4 text-lg font-bold text-white transition-colors hover:bg-white/20"
            >
              Book a call
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}

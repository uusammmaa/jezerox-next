import { Plus } from "lucide-react";
import { FaqSchema } from "@/components/seo/faq-schema";

/** Accessible FAQ accordion + FAQ schema.org markup (SEO). */
export function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <>
      <FaqSchema items={items.map((i) => ({ question: i.q, answer: i.a }))} />
      <div className="mx-auto max-w-2xl divide-y divide-line border-y border-line">
        {items.map((item) => (
          <details key={item.q} className="group py-1">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 font-display text-lg font-semibold text-fg [&::-webkit-details-marker]:hidden">
              {item.q}
              <Plus className="h-5 w-5 shrink-0 text-magenta transition-transform duration-300 group-open:rotate-45" />
            </summary>
            <p className="pb-5 text-fg-muted">{item.a}</p>
          </details>
        ))}
      </div>
    </>
  );
}

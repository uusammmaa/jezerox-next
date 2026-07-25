import Image from "next/image";
import { cn } from "@/lib/cn";

/** Mock browser chrome around a product screenshot — makes real captures look intentional. */
export function BrowserFrame({
  src,
  alt,
  className,
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <div className={cn("overflow-hidden rounded-[var(--radius-lg)] border border-line bg-ink-800 shadow-[var(--shadow-lg)]", className)}>
      <div className="flex items-center gap-2 border-b border-line bg-ink-900 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
        <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
        <span className="ml-3 h-5 flex-1 rounded-md bg-ink-850" />
      </div>
      <Image
        src={src}
        alt={alt}
        width={1568}
        height={699}
        className="w-full"
        sizes="(max-width: 768px) 100vw, 760px"
      />
    </div>
  );
}

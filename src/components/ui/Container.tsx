import { type ReactNode } from "react";
import { cn } from "@/lib/cn";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

/** Max-width wrapper with responsive gutters. */
export function Container({ children, className }: Readonly<ContainerProps>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-(--container-max) px-5 sm:px-6 lg:px-10",
        className,
      )}
    >
      {children}
    </div>
  );
}

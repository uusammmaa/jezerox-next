import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge conditional class names and resolve Tailwind conflicts.
 * The single class-composition helper for all UI primitives (DRY).
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void): () => void {
  const mql = window.matchMedia(QUERY);
  mql.addEventListener("change", onChange);
  return () => mql.removeEventListener("change", onChange);
}

function getSnapshot(): boolean {
  return window.matchMedia(QUERY).matches;
}

function getServerSnapshot(): null {
  return null;
}

/**
 * Subscribes to the `prefers-reduced-motion` media query.
 *
 * Returns `null` on the server and until hydration completes — the preference is
 * genuinely unknown there, and callers need to distinguish "not yet known" from
 * "motion is allowed" to pick a safe pre-hydration render. Reading it through
 * `useSyncExternalStore` (rather than `setState` inside an effect) keeps the value
 * available on first client render and avoids a cascading re-render.
 */
export function usePrefersReducedMotion(): boolean | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

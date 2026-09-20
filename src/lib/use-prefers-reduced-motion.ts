"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

/**
 * One shared MediaQueryList for the whole app. `getSnapshot` runs on every render
 * of every subscriber — the homepage mounts dozens of `Reveal`s — so allocating a
 * fresh MediaQueryList per call would evaluate the query far more than necessary.
 */
let mql: MediaQueryList | null = null;
function query(): MediaQueryList {
  mql ??= window.matchMedia(QUERY);
  return mql;
}

function subscribe(onChange: () => void): () => void {
  const m = query();
  m.addEventListener("change", onChange);
  return () => m.removeEventListener("change", onChange);
}

function getSnapshot(): boolean {
  return query().matches;
}

function getServerSnapshot(): null {
  return null;
}

/**
 * Subscribes to the `prefers-reduced-motion` media query.
 *
 * Returns `null` on the server and for the hydration render — the preference is
 * genuinely unknown there, and callers need to distinguish "not yet known" from
 * "motion is allowed" to pick a safe pre-hydration render. Each subscriber
 * therefore re-renders once immediately after hydration, when the real value
 * first becomes readable. Using `useSyncExternalStore` rather than `setState`
 * inside an effect is what keeps that to a single settled re-render, and keeps
 * the value live if the preference changes mid-session.
 */
export function usePrefersReducedMotion(): boolean | null {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

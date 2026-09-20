import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Hosts that serve the same content as the canonical domain but must never be
 * indexed. Vercel marks *preview* deployments `noindex` automatically, but the
 * production `*.vercel.app` alias (here `jezerox-next.vercel.app`) is served
 * with no such header — it returns 200 and is fully crawlable, which is
 * duplicate content against jezerox.com. Matching the whole `.vercel.app` apex
 * covers the production alias and every preview URL without naming either, and
 * deliberately cannot match a custom domain.
 */
function isNonCanonicalHost(host: string): boolean {
  const hostname = host.split(":")[0].toLowerCase();
  return hostname === "vercel.app" || hostname.endsWith(".vercel.app");
}

export function proxy(request: NextRequest) {
  const response = NextResponse.next();
  response.headers.set("X-Frame-Options", "DENY");
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set(
    "Permissions-Policy",
    "camera=(), microphone=(), geolocation=()"
  );
  // CSP: start permissive, tighten after verifying no inline scripts break
  response.headers.set(
    "Content-Security-Policy",
    "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://va.vercel-insights.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://vitals.vercel-insights.com; frame-ancestors 'none';"
  );

  // Keep duplicate hosts out of the index. The canonical <link> already points at
  // the real domain, but a canonical is a hint — this is the directive.
  const host = request.headers.get("host");
  if (host && isNonCanonicalHost(host)) {
    response.headers.set("X-Robots-Tag", "noindex, nofollow");
  }

  return response;
}

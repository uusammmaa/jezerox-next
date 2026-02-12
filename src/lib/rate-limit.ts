/**
 * Simple in-memory rate limiter for contact form submissions
 * Limits: 5 submissions per IP per 15 minutes
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

const rateLimitStore = new Map<string, RateLimitEntry>();

const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX_REQUESTS = 5;

function getClientIdentifier(formData: FormData, headers: Headers): string {
  // Try to get IP from headers (set by Next.js/Vercel)
  const forwardedFor = headers.get("x-forwarded-for");
  const realIp = headers.get("x-real-ip");
  const ip = forwardedFor?.split(",")[0]?.trim() || realIp || "unknown";

  // Also use email as part of identifier to prevent abuse
  const emailValue = formData.get("email");
  const email = typeof emailValue === "string" ? emailValue : "";

  return `${ip}:${email}`;
}

export function checkRateLimit(
  formData: FormData,
  headers: Headers
): { allowed: boolean; remaining: number; resetAt: number } {
  const identifier = getClientIdentifier(formData, headers);
  const now = Date.now();

  const entry = rateLimitStore.get(identifier);

  if (!entry || entry.resetAt < now) {
    // Create new entry or reset expired entry
    const newEntry: RateLimitEntry = {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    };
    rateLimitStore.set(identifier, newEntry);

    // Clean up old entries periodically
    if (rateLimitStore.size > 1000) {
      for (const [key, value] of rateLimitStore.entries()) {
        if (value.resetAt < now) {
          rateLimitStore.delete(key);
        }
      }
    }

    return {
      allowed: true,
      remaining: RATE_LIMIT_MAX_REQUESTS - 1,
      resetAt: newEntry.resetAt,
    };
  }

  if (entry.count >= RATE_LIMIT_MAX_REQUESTS) {
    return {
      allowed: false,
      remaining: 0,
      resetAt: entry.resetAt,
    };
  }

  entry.count++;
  return {
    allowed: true,
    remaining: RATE_LIMIT_MAX_REQUESTS - entry.count,
    resetAt: entry.resetAt,
  };
}

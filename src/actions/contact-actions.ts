"use server";

import { Resend } from "resend";
import { z } from "zod";
import { headers } from "next/headers";
import { checkRateLimit } from "@/lib/rate-limit";

const ContactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .refine(
      (val) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val),
      "Please enter a valid email"
    ),
  company: z.string().min(1, "Company is required"),
  message: z.string().min(10, "Message must be at least 10 characters"),
  // Honeypot field - should be empty for real users
  website: z.string().max(0, "Invalid submission").optional(),
});

export type ContactFormState =
  | { success: true; message: string }
  | { success: false; error: string; fieldErrors?: Record<string, string[]> };

const resend = new Resend(process.env.RESEND_API_KEY);

async function sendContactEmail(data: {
  name: string;
  email: string;
  company: string;
  message: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    const fromEmail = process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev";
    const toEmail = process.env.CONTACT_EMAIL || "contact@jezerox.com";

    await resend.emails.send({
      from: `JezeroX Contact Form <${fromEmail}>`,
      to: [toEmail],
      replyTo: data.email,
      subject: `New Contact Form Submission from ${data.name}`,
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0B1220; margin-bottom: 24px;">New Contact Form Submission</h2>
          
          <div style="background: #F5F7FB; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 8px 0;"><strong>Name:</strong> ${escapeHtml(data.name)}</p>
            <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
            <p style="margin: 8px 0;"><strong>Company:</strong> ${escapeHtml(data.company)}</p>
          </div>
          
          <div style="margin-bottom: 20px;">
            <strong>Message:</strong>
            <p style="white-space: pre-wrap; background: #F5F7FB; padding: 16px; border-radius: 8px; margin-top: 8px;">
              ${escapeHtml(data.message)}
            </p>
          </div>
          
          <p style="color: #9AA3B2; font-size: 14px; margin-top: 24px;">
            This email was sent from the JezeroX contact form.
          </p>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Company: ${data.company}

Message:
${data.message}
      `.trim(),
    });

    return { success: true };
  } catch (error) {
    console.error("Failed to send contact email:", error);
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to send email",
    };
  }
}

function escapeHtml(text: string): string {
  return text
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function submitContactForm(
  _prevState: ContactFormState | null,
  formData: FormData
): Promise<ContactFormState> {
  // Honeypot check - if website field is filled, it's a bot
  const website = formData.get("website");
  if (website && typeof website === "string" && website.length > 0) {
    // Silently reject - don't let bots know the honeypot worked
    return {
      success: true,
      message: "Thanks for reaching out. We'll respond within 24 hours.",
    };
  }

  // Rate limiting check
  const headersList = await headers();
  const rateLimitResult = checkRateLimit(formData, headersList);

  if (!rateLimitResult.allowed) {
    const resetMinutes = Math.ceil((rateLimitResult.resetAt - Date.now()) / 60000);
    return {
      success: false,
      error: `Too many requests. Please try again in ${resetMinutes} minute${resetMinutes > 1 ? "s" : ""}.`,
    };
  }

  const raw = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    message: formData.get("message"),
    website: formData.get("website"),
  };

  const parsed = ContactFormSchema.safeParse(raw);

  if (!parsed.success) {
    const fieldErrors: Record<string, string[]> = {};
    for (const issue of parsed.error.issues) {
      const path = issue.path[0]?.toString() ?? "form";
      if (!fieldErrors[path]) fieldErrors[path] = [];
      fieldErrors[path].push(issue.message);
    }
    return {
      success: false,
      error: "Please fix the errors below.",
      fieldErrors,
    };
  }

  // Send email
  const emailResult = await sendContactEmail({
    name: parsed.data.name,
    email: parsed.data.email,
    company: parsed.data.company,
    message: parsed.data.message,
  });

  if (!emailResult.success) {
    // Log error but don't expose internal details to user
    console.error("Email sending failed:", emailResult.error);
    return {
      success: false,
      error: "We encountered an issue sending your message. Please try again later or contact us directly.",
    };
  }

  return {
    success: true,
    message: "Thanks for reaching out. We'll respond within 24 hours.",
  };
}

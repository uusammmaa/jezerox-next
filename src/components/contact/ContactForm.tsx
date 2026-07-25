"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui";
import { cn } from "@/lib/cn";
import { submitContactForm, type ContactFormState } from "@/actions/contact-actions";

const inputBase =
  "w-full rounded-[var(--radius-md)] border border-line bg-ink-850 px-4 py-3 text-fg placeholder:text-fg-faint transition-colors focus:border-magenta focus:outline-none focus:ring-2 focus:ring-magenta/25";

function Field({
  id,
  name,
  label,
  type = "text",
  required,
  rows,
  error,
  placeholder,
}: Readonly<{
  id: string;
  name: string;
  label: string;
  type?: "text" | "email";
  required?: boolean;
  rows?: number;
  error?: string;
  placeholder?: string;
}>) {
  const inputClassName = cn(inputBase, error && "border-error focus:border-error focus:ring-error/25");
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-fg">
        {label}
        {required && <span className="text-fg-muted"> *</span>}
      </label>
      {rows ? (
        <textarea id={id} name={name} required={required} rows={rows} placeholder={placeholder} className={inputClassName} aria-invalid={!!error} />
      ) : (
        <input type={type} id={id} name={name} required={required} placeholder={placeholder} className={inputClassName} aria-invalid={!!error} />
      )}
      {error && (
        <p className="text-sm text-error" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState<ContactFormState | null, FormData>(submitContactForm, null);
  const fieldErrors = state && !state.success && state.fieldErrors ? state.fieldErrors : {};

  return (
    <form action={formAction} className="mx-auto max-w-xl space-y-6">
      {state?.success && (
        <output className="block rounded-[var(--radius-md)] border border-success/30 bg-success/10 px-4 py-3 text-sm text-success" htmlFor="contact-name contact-email contact-company contact-message">
          {state.message}
        </output>
      )}
      {state && !state.success && state.error && (
        <p className="rounded-[var(--radius-md)] border border-error/30 bg-error/10 px-4 py-3 text-sm text-error" role="alert">
          {state.error}
        </p>
      )}

      <div className="grid gap-6 sm:grid-cols-2">
        <Field id="contact-name" name="name" label="Name" required error={fieldErrors.name?.[0]} placeholder="Jane Doe" />
        <Field id="contact-email" name="email" label="Email" type="email" required error={fieldErrors.email?.[0]} placeholder="jane@company.com" />
      </div>
      <Field id="contact-company" name="company" label="Company" required error={fieldErrors.company?.[0]} placeholder="Company or project name" />
      <Field id="contact-message" name="message" label="What do you want to build?" required rows={5} error={fieldErrors.message?.[0]} placeholder="A few lines on your goals, timeline, and budget…" />

      {/* Honeypot — hidden from users */}
      <div style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }} aria-hidden="true">
        <label htmlFor="contact-website">Website</label>
        <input type="text" id="contact-website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <Button type="submit" variant="primary" size="lg" disabled={isPending} className="w-full sm:w-auto">
        {isPending ? "Sending…" : "Send message"}
      </Button>
    </form>
  );
}

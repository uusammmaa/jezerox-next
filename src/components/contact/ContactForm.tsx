"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui";
import { submitContactForm, type ContactFormState } from "@/actions/contact-actions";

const inputBase =
  "w-full rounded-[var(--radius-md)] border border-[var(--border-subtle)] bg-[var(--navy-900)] px-4 py-3 text-text-primary placeholder:text-text-muted focus:border-[var(--blue-500)] focus:outline-none focus:ring-2 focus:ring-[var(--blue-500)]/20";

function Field({
  id,
  name,
  label,
  type = "text",
  required,
  rows,
  error,
}: Readonly<{
  id: string;
  name: string;
  label: string;
  type?: "text" | "email";
  required?: boolean;
  rows?: number;
  error?: string;
}>) {
  const inputClassName = `${inputBase} ${error ? "border-accent-teal" : ""}`;
  return (
    <div className="space-y-1.5">
      <label htmlFor={id} className="block text-sm font-medium text-text-primary">
        {label}
        {required && <span className="text-text-muted"> *</span>}
      </label>
      {rows ? (
        <textarea
          id={id}
          name={name}
          required={required}
          rows={rows}
          className={inputClassName}
          aria-invalid={!!error}
        />
      ) : (
        <input
          type={type}
          id={id}
          name={name}
          required={required}
          className={inputClassName}
          aria-invalid={!!error}
        />
      )}
      {error && (
        <p className="text-sm text-accent-teal" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export function ContactForm() {
  const [state, formAction, isPending] = useActionState<ContactFormState | null, FormData>(
    submitContactForm,
    null
  );

  const fieldErrors = state && !state.success && state.fieldErrors ? state.fieldErrors : {};

  return (
    <form action={formAction} className="mx-auto max-w-xl space-y-6">
      {state?.success && (
        <output
          className="block rounded-md border border-(--teal-500)/30 bg-(--teal-500)/10 px-4 py-3 text-sm text-(--teal-400)"
          htmlFor="contact-name contact-email contact-company contact-message"
        >
          {state.message}
        </output>
      )}
      {state && !state.success && state.error && (
        <p className="text-sm text-accent-teal" role="alert">
          {state.error}
        </p>
      )}

      <Field
        id="contact-name"
        name="name"
        label="Name"
        required
        error={fieldErrors.name?.[0]}
      />
      <Field
        id="contact-email"
        name="email"
        label="Email"
        type="email"
        required
        error={fieldErrors.email?.[0]}
      />
      <Field
        id="contact-company"
        name="company"
        label="Company"
        required
        error={fieldErrors.company?.[0]}
      />
      <Field
        id="contact-message"
        name="message"
        label="Message"
        required
        rows={5}
        error={fieldErrors.message?.[0]}
      />

      <Button type="submit" variant="primary" size="lg" disabled={isPending}>
        {isPending ? "Sending…" : "Tell us about your product."}
      </Button>
    </form>
  );
}

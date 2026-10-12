"use client";

import Link from "next/link";
import { useState } from "react";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";
import { contactForm } from "@/lib/content";

type Status = { kind: "idle" | "sending" | "sent" | "error"; message?: string };

const field = "w-full rounded-none border border-edge-gray bg-paper px-3 py-2.5 text-[16px] font-medium text-ink placeholder:text-steel placeholder:font-normal focus:border-ink focus:outline-none";
const label = "mb-1.5 block text-[14px] font-semibold";

// Theme the phone input to match the other fields, referencing the design tokens
// from globals.css @theme (single source of truth) rather than hardcoded hex.
const phoneTheme = {
  "--react-international-phone-height": "46px",
  "--react-international-phone-border-radius": "0px",
  "--react-international-phone-border-color": "var(--color-edge-gray)",
  "--react-international-phone-background-color": "var(--color-paper)",
  "--react-international-phone-text-color": "var(--color-ink)",
  "--react-international-phone-font-size": "16px",
} as React.CSSProperties;

export function ContactForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const [phone, setPhone] = useState("");
  const [dialLen, setDialLen] = useState(0);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
    setStatus({ kind: "sending" });
    const data = new FormData(form);
    // Optional field: drop it unless a national number was typed beyond the country dial code.
    if (phone.replace(/\D/g, "").length <= dialLen) data.delete("phone");
    else data.set("phone", phone);
    try {
      const res = await fetch(contactForm.endpoint, { method: "POST", body: data, headers: { Accept: "application/json" } });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || json.success === false) throw new Error();
      form.reset();
      setPhone("");
      setStatus({ kind: "sent", message: "Inquiry sent. We'll follow up by email within one business day." });
    } catch {
      setStatus({
        kind: "error",
        message: "The inquiry didn't send. Check your connection and try again, or email info@qorvynsystems.com.",
      });
    }
  }

  return (
    <form onSubmit={onSubmit} noValidate={false} className="grid gap-5 sm:grid-cols-2">
      <input type="hidden" name="access_key" value={contactForm.accessKey} />
      <input type="hidden" name="subject" value={contactForm.subject} />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div>
        <label htmlFor="name" className={label}>Name</label>
        <input id="name" name="name" type="text" autoComplete="name" required placeholder="Your name" className={field} />
      </div>
      <div>
        <label htmlFor="email" className={label}>Business email</label>
        <input id="email" name="email" type="email" autoComplete="email" required placeholder="you@company.com" className={field} />
      </div>
      <div>
        <label htmlFor="phone" className={label}>Phone number <span className="font-normal text-steel">(optional)</span></label>
        <PhoneInput
          defaultCountry="us"
          value={phone}
          onChange={(value, meta) => { setPhone(value); setDialLen(meta.country.dialCode.length); }}
          inputProps={{ id: "phone", name: "phone", autoComplete: "tel" }}
          className="w-full [&_.react-international-phone-input]:w-full [&_.react-international-phone-input]:font-medium focus-within:[--react-international-phone-border-color:var(--color-ink)]"
          style={phoneTheme}
        />
      </div>
      <div>
        <label htmlFor="company" className={label}>Company <span className="font-normal text-steel">(optional)</span></label>
        <input id="company" name="company" type="text" autoComplete="organization" placeholder="Organization name" className={field} />
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="service_interest" className={label}>Area of interest</label>
        <select id="service_interest" name="service_interest" required defaultValue="" className={field}>
          <option value="" disabled>Select a service</option>
          {contactForm.interests.map((i) => <option key={i}>{i}</option>)}
        </select>
      </div>
      <div className="sm:col-span-2">
        <label htmlFor="message" className={label}>How can we help?</label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          placeholder="What you're working toward, where the friction is, and what a good outcome looks like."
          className={field}
        />
      </div>

      <div className="flex flex-col gap-4 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-[14px] text-steel">
          Please don’t include passwords or other sensitive information. By submitting, you agree to our{" "}
          <Link href="/privacy" className="link-underline text-ink">Privacy Policy</Link>.
        </p>
        <button type="submit" disabled={status.kind === "sending"} className="btn-dark shrink-0 justify-center disabled:opacity-60">
          {status.kind === "sending" ? "Sending inquiry…" : status.kind === "sent" ? "Send another inquiry" : "Send inquiry"}
        </button>
      </div>

      <p role="status" aria-live="polite" className={`text-[16px] sm:col-span-2 ${status.kind === "error" ? "text-[#9b2c2c]" : "text-network-green"}`}>
        {status.message}
      </p>
    </form>
  );
}

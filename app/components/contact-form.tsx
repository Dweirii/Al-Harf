"use client";

import { useState } from "react";
import type { Dictionary } from "../lib/dictionaries/en";
import { fill } from "../lib/i18n";

const field =
  "w-full border border-grey/50 bg-shelf px-4 py-3 text-[1.05rem] text-ink placeholder:text-ink-soft/70 focus:border-gold focus:outline-none";
const label = "block text-[0.95rem] font-medium text-ink";

export default function ContactForm({
  t,
  email,
}: {
  t: Dictionary["contactPage"]["form"];
  email: string;
}) {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = `${data.get("firstName")} ${data.get("lastName")}`.trim();
    const body = [
      `${t.bodyName}: ${name}`,
      `${t.bodyEmail}: ${data.get("email")}`,
      `${t.bodyPhone}: ${data.get("phone")}`,
      "",
      String(data.get("message") ?? ""),
    ].join("\n");

    window.location.href = `mailto:${email}?subject=${encodeURIComponent(
      fill(t.subject, { name }),
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label className={label} htmlFor="firstName">
            {t.firstName}
          </label>
          <input id="firstName" name="firstName" required className={field} />
        </div>
        <div className="space-y-2">
          <label className={label} htmlFor="lastName">
            {t.lastName}
          </label>
          <input id="lastName" name="lastName" required className={field} />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <label className={label} htmlFor="email">
            {t.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            dir="ltr"
            required
            className={field}
          />
        </div>
        <div className="space-y-2">
          <label className={label} htmlFor="phone">
            {t.phone}
          </label>
          <input id="phone" name="phone" type="tel" dir="ltr" className={field} />
        </div>
      </div>

      <div className="space-y-2">
        <label className={label} htmlFor="message">
          {t.message}
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          className={field}
          placeholder={t.messagePlaceholder}
        />
      </div>

      <button
        type="submit"
        className="bg-ink px-8 py-3.5 text-[1.05rem] font-medium text-bone transition-colors hover:bg-gold-deep"
      >
        {t.send}
      </button>

      {sent && (
        <p className="border-s-[3px] border-gold bg-shelf px-4 py-3 text-[1.02rem] text-ink-soft">
          {t.sent}{" "}
          <a href={`mailto:${email}`} dir="ltr" className="text-gold-deep underline">
            {email}
          </a>
        </p>
      )}
    </form>
  );
}

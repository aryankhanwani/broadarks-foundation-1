"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

const REASONS = ["Partner with us", "Volunteer", "Media", "Donation help", "Something else"];

function Field({
  label,
  name,
  type = "text",
  textarea = false,
  required = true,
}: {
  label: string;
  name: string;
  type?: string;
  textarea?: boolean;
  required?: boolean;
}) {
  const [focused, setFocused] = useState(false);
  const cls =
    "peer w-full border-0 border-b border-line bg-transparent pb-3 pt-7 text-ink outline-none transition-colors placeholder:text-transparent focus:border-transparent";

  return (
    <div className="relative">
      <label
        htmlFor={name}
        className={`eyebrow pointer-events-none absolute left-0 top-1 transition-colors ${
          focused ? "text-brand" : "text-ink-50"
        }`}
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={name}
          name={name}
          rows={4}
          required={required}
          placeholder={label}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={`${cls} resize-none`}
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          placeholder={label}
          onFocus={() => setFocused(true)}
          onBlur={() => setFocused(false)}
          className={cls}
        />
      )}
      <span
        className={`absolute inset-x-0 bottom-0 h-[1.5px] origin-left bg-brand transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
          focused ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </div>
  );
}

export default function ContactForm() {
  const [reason, setReason] = useState(REASONS[0]);
  const [sent, setSent] = useState(false);

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="border border-line bg-sky-50 p-10 md:p-14"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand text-white">
              ✓
            </span>
            <h3 className="display mt-7 text-[1.65rem] leading-tight text-ink">
              Thank you — that reached us.
            </h3>
            <p className="mt-4 max-w-[44ch] leading-relaxed text-ink-70">
              A person, not an autoresponder, replies to every message. Usually
              within two working days; occasionally three if the team is in the
              field.
            </p>
            <button
              onClick={() => setSent(false)}
              className="link-underline mt-8 text-sm text-ink"
            >
              Send another →
            </button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="space-y-9"
          >
            <div>
              <p className="eyebrow mb-4 text-ink-50">What is this about?</p>
              <div className="flex flex-wrap gap-2.5">
                {REASONS.map((r) => (
                  <button
                    key={r}
                    type="button"
                    onClick={() => setReason(r)}
                    className={`relative overflow-hidden rounded-full border px-5 py-2.5 text-sm transition-colors duration-500 ${
                      reason === r
                        ? "border-brand bg-brand text-white"
                        : "border-line text-ink-70 hover:border-ink/40 hover:text-ink"
                    }`}
                  >
                    {r}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <Field label="Your name" name="name" />
              <Field label="Email" name="email" type="email" />
            </div>
            <div className="grid gap-8 sm:grid-cols-2">
              <Field label="Organisation (optional)" name="org" required={false} />
              <Field label="Phone (optional)" name="phone" required={false} />
            </div>
            <Field label="Your message" name="message" textarea />

            <button
              type="submit"
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-ink px-8 py-4 text-sm font-medium text-white transition-colors duration-500 hover:text-ink"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 rounded-full bg-brand transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-y-100" />
              <span className="relative z-10">Send message</span>
              <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </button>

            <p className="text-xs text-ink-50">
              This demo form doesn&apos;t submit anywhere yet — wire it to your
              inbox or CRM when you&apos;re ready.
            </p>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}

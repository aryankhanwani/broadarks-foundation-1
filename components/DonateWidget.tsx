"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { GIVING_TIERS } from "@/lib/content";
import { img } from "@/lib/images";

const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;

export default function DonateWidget({ sceneIds }: { sceneIds: string[] }) {
  const [freq, setFreq] = useState<"monthly" | "once">("monthly");
  const [idx, setIdx] = useState(0);
  const [custom, setCustom] = useState("");

  const tier = GIVING_TIERS[idx];
  const amount = useMemo(() => {
    const c = Number(custom.replace(/[^\d]/g, ""));
    return c > 0 ? c : tier.amount;
  }, [custom, tier.amount]);

  const yearly = freq === "monthly" ? amount * 12 : amount;
  const children = Math.max(1, Math.round(yearly / 12000));

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      {/* picker */}
      <div className="lg:col-span-7">
        <div className="inline-flex rounded-full border border-line p-1">
          {(["monthly", "once"] as const).map((f) => (
            <button
              key={f}
              onClick={() => setFreq(f)}
              className="relative rounded-full px-6 py-2.5 text-sm transition-colors duration-300"
            >
              {freq === f && (
                <motion.span
                  layoutId="freq-pill"
                  transition={{ type: "spring", stiffness: 340, damping: 32 }}
                  className="absolute inset-0 rounded-full bg-ink"
                />
              )}
              <span className={`relative z-10 ${freq === f ? "text-white" : "text-ink-70"}`}>
                {f === "monthly" ? "Give monthly" : "Give once"}
              </span>
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-px sm:grid-cols-2">
          {GIVING_TIERS.map((t, i) => {
            const active = i === idx && !custom;
            return (
              <button
                key={t.amount}
                onClick={() => {
                  setIdx(i);
                  setCustom("");
                }}
                className={`group relative h-full border p-6 text-left transition-colors duration-500 ${
                  active
                    ? "border-brand bg-sky-50"
                    : "border-line bg-white hover:border-ink/30"
                }`}
              >
                <span className="flex items-baseline justify-between gap-3">
                  <span className="numeral text-[1.85rem] text-ink">
                    {inr(t.amount)}
                  </span>
                  <span
                    className={`h-3 w-3 shrink-0 rounded-full border transition-colors duration-300 ${
                      active ? "border-brand bg-brand" : "border-ink/25"
                    }`}
                  />
                </span>
                <span className="eyebrow mt-4 block text-brand">{t.label}</span>
                <span className="mt-2 block text-[0.9rem] leading-relaxed text-ink-70">
                  {t.text}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-8">
          <label htmlFor="custom" className="eyebrow text-ink-50">
            Or enter your own amount
          </label>
          <div className="relative mt-3 flex items-center border-b border-line focus-within:border-brand">
            <span className="numeral pr-2 text-[1.6rem] text-ink-50">₹</span>
            <input
              id="custom"
              inputMode="numeric"
              value={custom}
              onChange={(e) => setCustom(e.target.value.replace(/[^\d]/g, ""))}
              placeholder="5,000"
              className="numeral w-full bg-transparent py-3 text-[1.6rem] text-ink outline-none placeholder:text-ink/20"
            />
          </div>
        </div>
      </div>

      {/* summary */}
      <div className="lg:col-span-5">
        <div className="sticky top-32 overflow-hidden border border-line bg-white">
          <div className="relative aspect-[16/10]">
            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 1.06 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={img(sceneIds[idx % sceneIds.length], 800)}
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 34vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent" />
            <p className="absolute bottom-4 left-5 eyebrow text-white/85">
              {freq === "monthly" ? "Recurring gift" : "One-time gift"}
            </p>
          </div>

          <div className="p-7">
            <p className="eyebrow text-ink-50">You&apos;re giving</p>
            <p className="numeral mt-3 text-[2.9rem] text-ink">
              {inr(amount)}
              <span className="text-[1.1rem] text-ink-50">
                {freq === "monthly" ? " / month" : " once"}
              </span>
            </p>

            <dl className="mt-8 space-y-3 border-t border-line pt-6 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-ink-50">Over twelve months</dt>
                <dd className="tabular-nums text-ink">{inr(yearly)}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-50">Reaches the field</dt>
                <dd className="tabular-nums text-ink">{inr(Math.round(yearly * 0.91))}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-50">Roughly equals</dt>
                <dd className="text-right text-ink">
                  {children} {children === 1 ? "child" : "children"} in school for a year
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-ink-50">80G deduction</dt>
                <dd className="tabular-nums text-ink">
                  up to {inr(Math.round(yearly * 0.5))}
                </dd>
              </div>
            </dl>

            <button className="group relative mt-8 flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-brand py-4 text-sm font-medium text-white transition-colors duration-500">
              <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-y-100" />
              <span className="relative z-10">
                Continue to pay {inr(amount)}
              </span>
              <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1">
                →
              </span>
            </button>

            <p className="mt-4 text-center text-xs text-ink-50">
              Demo only — connect Razorpay or Stripe to take live payments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

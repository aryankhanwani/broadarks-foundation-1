"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { img } from "@/lib/images";

const line = {
  hidden: { y: "112%" },
  show: { y: "0%", transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function PageHero({
  eyebrow,
  title,
  italic,
  sub,
  lead,
  image,
  meta,
}: {
  eyebrow: string;
  title: string;
  italic?: string;
  /** Sub-headline, set between the title and the lead. */
  sub?: string;
  lead?: string;
  image: string;
  meta?: { k: string; v: string }[];
}) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-white pb-16 pt-32 md:pb-24 md:pt-40">
      <div className="shell">
        <motion.div style={{ opacity: fade }}>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="eyebrow mb-8 flex items-center gap-3 text-ink-50"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-brand" />
            {eyebrow}
          </motion.p>

          <h1 className="display max-w-[17ch] text-[clamp(2.26rem,6.26vw,4.87rem)] leading-[1.0] text-ink">
            <motion.span initial="hidden" animate="show" transition={{ staggerChildren: 0.07 }}>
              <span className="block overflow-hidden pb-[0.06em]">
                <motion.span variants={line} className="block">
                  {title}
                </motion.span>
              </span>
              {italic && (
                <span className="block overflow-hidden pb-[0.06em]">
                  <motion.span variants={line} className="serif block text-[1.06em] italic text-brand">
                    {italic}
                  </motion.span>
                </span>
              )}
            </motion.span>
          </h1>

          {sub && (
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 max-w-[48ch] text-[1.2rem] font-medium leading-snug text-ink"
            >
              {sub}
            </motion.p>
          )}

          {lead && (
            <motion.p
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className={`${sub ? "mt-5" : "mt-8"} max-w-[56ch] text-[1.05rem] leading-relaxed text-ink-70`}
            >
              {lead}
            </motion.p>
          )}
        </motion.div>
      </div>

      <div className="shell mt-14">
        <motion.div
          initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
          animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
          transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[16/10] w-full overflow-hidden md:aspect-[21/9]"
        >
          <motion.div style={{ y }} className="absolute -inset-y-[14%] inset-x-0">
            <Image
              src={img(image, 1900)}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </motion.div>

        {meta && (
          <div className="grid grid-cols-2 border-b border-line md:grid-cols-4">
            {meta.map((m, i) => (
              <motion.div
                key={m.k}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 + i * 0.08, duration: 0.7 }}
                className="border-t border-line px-1 py-6 md:border-r md:px-6 md:last:border-r-0"
              >
                <p className="numeral text-[1.95rem] text-brand">{m.v}</p>
                <p className="eyebrow mt-3 text-ink-50">{m.k}</p>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

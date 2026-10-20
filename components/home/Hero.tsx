"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { IMG, img } from "@/lib/images";
import Button from "@/components/ui/Button";
import { HOME_COPY } from "@/lib/homeCopy";

const C = HOME_COPY.hero;

/** Hero clip; the poster frame stands in until it loads. */
const VIDEO = "/video/hero.mp4";

const line = {
  hidden: { y: "112%" },
  show: { y: "0%", transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const mediaY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const mediaScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  // Respect reduced-motion: hold on the poster frame instead of looping.
  useEffect(() => {
    const v = videoRef.current;
    if (v && window.matchMedia("(prefers-reduced-motion: reduce)").matches) v.pause();
  }, []);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-ink">
      {/* full-bleed video */}
      <motion.div
        initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0"
      >
        <motion.div style={{ y: mediaY, scale: mediaScale }} className="absolute -inset-[4%]">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster={img(IMG.heroPoster, 1920)}
            aria-hidden
            className="h-full w-full object-cover"
          >
            <source src={VIDEO} type="video/mp4" />
          </video>
        </motion.div>
        {/* legibility: heavier on the left where the copy sits, and along the bottom */}
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/45 to-ink/10" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink/70 to-transparent" />
      </motion.div>

      <div className="shell relative z-10 flex min-h-[100svh] items-end pb-16 pt-32 lg:pb-24">
        <motion.div style={{ y: textY, opacity: fade }} className="max-w-[76rem]">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="eyebrow mb-8 flex items-center gap-3 text-white/60"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            {C.eyebrow}
          </motion.div>

          <h1 className="display text-[clamp(2.52rem,7.48vw,5.74rem)] leading-[1.0] text-white">
            <motion.span
              initial="hidden"
              animate="show"
              className="block"
              transition={{ staggerChildren: 0.08, delayChildren: 0.35 }}
            >
              {C.lines.map((l) => (
                <span key={l} className="block overflow-hidden pb-[0.06em]">
                  <motion.span variants={line} className="block">
                    {l}
                  </motion.span>
                </span>
              ))}
              <span className="block overflow-hidden pb-[0.06em]">
                <motion.span variants={line} className="serif block text-[1.06em] italic text-brand">
                  {C.accent}
                </motion.span>
              </span>
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.95, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mt-9 max-w-[52ch] text-[1.05rem] leading-relaxed text-white/75">
              {C.lead}
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href={C.primary.href} variant="light">
                {C.primary.label}
              </Button>
              <Link
                href={C.secondary.href}
                className="link-underline py-3.5 text-sm text-white/70 hover:text-white"
              >
                {C.secondary.label}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute right-5 top-28 z-10 hidden bg-brand px-5 py-4 text-white md:right-10 lg:block xl:right-14"
      >
        <p className="numeral text-[2.1rem]">{C.badge.value}</p>
        <p className="eyebrow mt-1.5 text-[0.55rem] text-white/80">{C.badge.label}</p>
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-6 right-5 z-10 hidden items-center gap-3 md:flex md:right-10"
      >
        <span className="eyebrow text-white/60">Scroll</span>
        <span className="relative block h-10 w-px overflow-hidden bg-white/25">
          <motion.span
            animate={{ y: ["-100%", "100%"] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-x-0 h-1/2 bg-brand"
          />
        </span>
      </motion.div>
    </section>
  );
}

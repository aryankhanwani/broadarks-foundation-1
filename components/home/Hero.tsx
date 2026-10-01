"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { IMG, img } from "@/lib/images";
import Button from "@/components/ui/Button";

const line = {
  hidden: { y: "112%" },
  show: { y: "0%", transition: { duration: 1.1, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.12]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden bg-white">
      {/* thin brand rail */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 hidden w-[3px] bg-brand/70 lg:block" />

      <div className="shell relative z-10 grid min-h-[100svh] grid-cols-1 items-end gap-10 pb-14 pt-32 lg:grid-cols-12 lg:items-center lg:pb-20 lg:pt-28">
        <motion.div style={{ y: textY, opacity: fade }} className="lg:col-span-7 xl:col-span-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15, duration: 0.8 }}
            className="eyebrow mb-8 flex items-center gap-3 text-ink-50"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-brand" />
            </span>
            Since 2014 · 9 states · 412 communities
          </motion.div>

          <h1 className="display text-[clamp(2.52rem,7.48vw,5.74rem)] leading-[1.0] text-ink">
            <motion.span
              initial="hidden"
              animate="show"
              className="block"
              transition={{ staggerChildren: 0.08 }}
            >
              {["A wider arc", "of opportunity,"].map((l) => (
                <span key={l} className="block overflow-hidden pb-[0.06em]">
                  <motion.span variants={line} className="block">
                    {l}
                  </motion.span>
                </span>
              ))}
              <span className="block overflow-hidden pb-[0.06em]">
                <motion.span variants={line} className="serif block text-[1.06em] italic text-brand">
                  drawn together.
                </motion.span>
              </span>
            </motion.span>
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="mt-9 max-w-[46ch] text-[1.05rem] leading-relaxed text-ink-70">
              Broadarks Foundation builds learning, health, livelihood and food
              systems alongside under-served communities across India — and then
              hands every one of them over.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Button href="/donate">Donate now</Button>
              <Link
                href="/work"
                className="link-underline py-3.5 text-sm text-ink-70 hover:text-ink"
              >
                See the work
              </Link>
            </div>
          </motion.div>
        </motion.div>

        {/* image cluster */}
        <div className="relative lg:col-span-5 lg:col-start-8 xl:col-span-6 xl:col-start-7">
          <motion.div
            initial={{ clipPath: "inset(100% 0% 0% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            transition={{ delay: 0.35, duration: 1.25, ease: [0.16, 1, 0.3, 1] }}
            className="relative aspect-[4/5] w-full overflow-hidden sm:aspect-[5/4] lg:aspect-[4/5]"
          >
            <motion.div style={{ y: imgY, scale: imgScale }} className="absolute -inset-[8%]">
              <Image
                src={img(IMG.kidsGroup, 1400)}
                alt="Children outside a Broadarks learning centre"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="absolute -bottom-8 -left-4 hidden w-[42%] sm:block lg:-left-16"
          >
            <div className="relative aspect-square overflow-hidden border-[6px] border-white shadow-[0_20px_60px_-25px_rgba(6,42,60,0.5)]">
              <Image
                src={img(IMG.classroomFloor, 700)}
                alt="An open-air class in session"
                fill
                sizes="20vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="absolute -right-2 top-6 hidden bg-brand px-5 py-4 text-white lg:block"
          >
            <p className="numeral text-[2.1rem]">128K+</p>
            <p className="eyebrow mt-1.5 text-[0.55rem] text-white/80">Lives touched</p>
          </motion.div>
        </div>
      </div>

      <motion.div
        style={{ opacity: fade }}
        className="absolute bottom-6 right-5 z-10 hidden items-center gap-3 md:flex md:right-10"
      >
        <span className="eyebrow text-ink-50">Scroll</span>
        <span className="relative block h-10 w-px overflow-hidden bg-line">
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

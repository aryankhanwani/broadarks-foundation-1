"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { PROGRAMS } from "@/lib/content";
import { img } from "@/lib/images";
import SplitWords from "@/components/motion/SplitWords";
import Reveal from "@/components/motion/Reveal";
import { HOME_COPY } from "@/lib/homeCopy";

const C = HOME_COPY.programs;
const CARDS = PROGRAMS.map((p, i) => ({ ...p, ...C.cards?.[i] }));

/** Pinned section: vertical scroll drives a horizontal run through the pillars. */
export default function ProgramsScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [distance, setDistance] = useState(0);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  /**
   * The section is 420vh tall with a 100vh sticky panel, so the panel unpins at
   * (420-100)/420 ≈ 0.76 of the range. The horizontal run has to be finished by
   * then, or the track keeps sliding while the panel is already leaving.
   */
  const x = useTransform(scrollYProgress, [0.05, 0.74], [0, -distance]);
  const progress = useTransform(scrollYProgress, [0.05, 0.74], ["0%", "100%"]);

  useEffect(() => {
    const measure = () => {
      const el = trackRef.current;
      if (!el) return;
      setDistance(Math.max(0, el.scrollWidth - window.innerWidth + 40));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <>
      {/* mobile: plain stacked list */}
      <section className="bg-sand py-20 lg:hidden">
        <div className="shell">
          <p className="eyebrow mb-6 text-ink-50">
            <span className="text-brand">03</span>
            <span className="mx-3 inline-block h-px w-8 translate-y-[-3px] bg-ink/20" />
            {C.eyebrow}
          </p>
          <SplitWords
            text={`${C.title} ${C.accent}`}
            className="display text-[2.26rem] leading-[1.02] text-ink"
          />
          <Reveal delay={0.15}>
            <p className="serif mt-6 text-[1.2rem] italic leading-snug text-brand-700">
              {C.sub}
            </p>
            <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-70">{C.body}</p>
          </Reveal>
          <div className="mt-12 space-y-10">
            {CARDS.map((p) => (
              <Reveal key={p.slug}>
                <Link href={`/work#${p.slug}`} className="block">
                  <div className="relative aspect-[4/3] w-full overflow-hidden">
                    <Image
                      src={img(p.image, 900)}
                      alt={p.title}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                    <span className="absolute left-4 top-4 bg-white px-3 py-1.5 eyebrow text-ink">
                      {p.index} · {p.kicker}
                    </span>
                  </div>
                  <h3 className="display mt-5 text-[1.57rem] leading-tight text-ink">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-70">
                    {p.blurb}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* desktop: pinned horizontal run */}
      <section ref={ref} className="relative hidden h-[420vh] bg-sand lg:block">
        <div className="sticky top-0 flex h-screen flex-col justify-center overflow-hidden">
          <div className="shell flex items-end justify-between pb-10 pt-24">
            <div>
              <p className="eyebrow mb-5 text-ink-50">
                <span className="text-brand">03</span>
                <span className="mx-3 inline-block h-px w-8 translate-y-[-3px] bg-ink/20" />
                {C.eyebrow}
              </p>
              <h2 className="display max-w-[16ch] text-[2.96rem] leading-[1.0] text-ink">
                {C.title}{" "}
                <span className="serif text-[1.06em] italic text-brand">{C.accent}</span>
              </h2>
            </div>
            <div className="max-w-[34ch] pb-2">
              <p className="serif text-[1.3rem] italic leading-snug text-brand-700">
                {C.sub}
              </p>
            </div>
          </div>

          <motion.div ref={trackRef} style={{ x }} className="flex gap-6 pl-5 md:pl-10 xl:pl-14">
            <div className="flex w-[clamp(320px,29vw,440px)] shrink-0 items-center pr-4">
              <p className="border-l-2 border-brand pl-6 text-[1.02rem] leading-relaxed text-ink-70">
                {C.body}
              </p>
            </div>
            {CARDS.map((p) => (
              <Link
                key={p.slug}
                href={`/work#${p.slug}`}
                className="group relative w-[clamp(320px,29vw,440px)] shrink-0"
              >
                <div className="relative aspect-[3/4] overflow-hidden bg-ink">
                  <Image
                    src={img(p.image, 900)}
                    alt={p.title}
                    fill
                    sizes="30vw"
                    className="object-cover transition-transform duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.07]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/10 to-transparent" />

                  <span className="absolute left-5 top-5 flex items-center gap-2 bg-white/95 px-3 py-1.5 eyebrow text-ink">
                    {p.index} · {p.kicker}
                  </span>

                  <div className="absolute inset-x-5 bottom-5 text-white">
                    <h3 className="display text-[1.65rem] leading-tight">{p.title}</h3>
                    <p className="mt-2 max-h-0 overflow-hidden text-[0.9rem] leading-relaxed text-white/80 opacity-0 transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:max-h-32 group-hover:opacity-100">
                      {p.blurb}
                    </p>
                    <div className="mt-4 flex gap-5 border-t border-white/20 pt-3">
                      {p.metrics.slice(0, 2).map((m) => (
                        <span key={m.k} className="text-xs text-white/70">
                          <b className="block text-base font-normal text-brand">{m.v}</b>
                          {m.k}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            <div className="flex w-[30vw] shrink-0 items-center pl-6">
              <Link href="/work" className="group">
                <p className="display text-[2.09rem] leading-tight text-ink">
                  {C.link ?? (
                    <>
                      All five,
                      <br />
                      in detail
                    </>
                  )}
                </p>
                <span className="mt-4 inline-flex h-14 w-14 items-center justify-center rounded-full border border-ink/25 transition-colors duration-500 group-hover:bg-brand group-hover:text-white">
                  →
                </span>
              </Link>
            </div>
          </motion.div>

          <div className="shell mt-10 pb-10">
            <div className="h-px w-full bg-ink/10">
              <motion.div style={{ width: progress }} className="h-px bg-brand" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

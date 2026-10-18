"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { IMG, img } from "@/lib/images";
import SplitWords from "@/components/motion/SplitWords";
import Reveal from "@/components/motion/Reveal";
import { HOME_COPY } from "@/lib/homeCopy";

const C = HOME_COPY.gallery;

const COLS: { id: string; alt: string; ratio: string }[][] = [
  [
    { id: IMG.volunteersGroup, alt: "Volunteers at a community drive", ratio: "aspect-[3/4]" },
    { id: IMG.foodRelief, alt: "Packing relief rations", ratio: "aspect-square" },
    { id: IMG.library, alt: "A lending library inside a learning centre", ratio: "aspect-[4/5]" },
  ],
  [
    { id: IMG.classroomTeacher, alt: "A class in session", ratio: "aspect-[4/5]" },
    { id: IMG.kidsBackpacks, alt: "Children walking to the centre", ratio: "aspect-[3/4]" },
    { id: IMG.handsHeart, alt: "Hands together at a community event", ratio: "aspect-square" },
  ],
  [
    { id: IMG.kidsLaughing, alt: "Children laughing", ratio: "aspect-square" },
    { id: IMG.townhall, alt: "A village committee meeting", ratio: "aspect-[4/5]" },
    { id: IMG.graduation, alt: "A graduating cohort", ratio: "aspect-[3/4]" },
  ],
  [
    { id: IMG.clinicianPhone, alt: "A community health worker on her round", ratio: "aspect-[4/5]" },
    { id: IMG.kidsPlaying, alt: "Children playing near the centre", ratio: "aspect-[3/4]" },
    { id: IMG.workshop, alt: "A skilling workshop", ratio: "aspect-square" },
  ],
];

function Col({ items, speed }: { items: (typeof COLS)[number]; speed: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed, -speed]);

  return (
    <motion.div ref={ref} style={{ y }} className="flex flex-col gap-4 sm:gap-6">
      {items.map((it) => (
        <figure key={it.id} className={`group relative ${it.ratio} overflow-hidden bg-sky-100`}>
          <Image
            src={img(it.id, 800)}
            alt={it.alt}
            fill
            sizes="(max-width: 640px) 50vw, 25vw"
            className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.08]"
          />
          <figcaption className="pointer-events-none absolute inset-x-0 bottom-0 translate-y-3 bg-gradient-to-t from-ink/80 to-transparent p-4 text-[0.72rem] text-white opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {it.alt}
          </figcaption>
        </figure>
      ))}
    </motion.div>
  );
}

export default function Gallery() {
  return (
    <section className="overflow-hidden bg-white py-24 md:py-32">
      <div className="shell">
        <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal y={14}>
              <p className="eyebrow mb-5 text-ink-50">
                <span className="text-brand">05</span>
                <span className="mx-3 inline-block h-px w-8 translate-y-[-3px] bg-ink/20" />
                {C.eyebrow}
              </p>
            </Reveal>
            <SplitWords
              text={C.title}
              className="display max-w-[22ch] text-[2.09rem] leading-[1.02] text-ink sm:text-[2.78rem]"
            />
            <Reveal delay={0.15}>
              <p className="serif mt-5 text-[1.2rem] italic leading-snug text-brand-700 md:text-[1.3rem]">
                {C.sub}
              </p>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="max-w-[38ch] text-[0.95rem] leading-relaxed text-ink-70">
              {C.body}
            </p>
          </Reveal>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 px-5 sm:gap-6 md:px-10 lg:grid-cols-4 xl:px-14">
        <Col items={COLS[0]} speed={50} />
        <Col items={COLS[1]} speed={-40} />
        <Col items={COLS[2]} speed={62} />
        <Col items={COLS[3]} speed={-28} />
      </div>

      <div className="shell">
        <Reveal y={14}>
          <p className="mt-16 flex flex-col gap-2 border-t border-line pt-6 text-[0.95rem] text-ink-70 sm:flex-row sm:items-baseline sm:gap-6">
            <span className="eyebrow shrink-0 text-brand">{C.caption.k}</span>
            {C.caption.v}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

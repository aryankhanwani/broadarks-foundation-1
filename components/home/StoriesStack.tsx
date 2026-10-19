"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { STORIES } from "@/lib/content";
import { img } from "@/lib/images";
import SplitWords from "@/components/motion/SplitWords";
import Reveal from "@/components/motion/Reveal";
import { HOME_COPY } from "@/lib/homeCopy";

const C = HOME_COPY.stories;

function Card({
  story,
  i,
  total,
}: {
  story: (typeof STORIES)[number];
  i: number;
  total: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);

  /**
   * From md up each card pins at its natural height, stepped down a little per
   * card so a sliver of the one beneath stays visible. Scroll distance is just
   * the cards themselves — no full-viewport slots to scroll through. Phones get
   * a plain list, since a card there can be taller than the screen.
   */
  return (
    <div
      ref={ref}
      className="mb-6 last:mb-0 md:sticky md:top-[var(--pin)] md:mb-[12vh]"
      style={{ zIndex: i + 1, "--pin": `calc(12vh + ${i * 16}px)` } as React.CSSProperties}
    >
      <motion.article
        style={{ scale }}
        className="grid w-full overflow-hidden border border-line bg-white shadow-[0_30px_80px_-50px_rgba(6,42,60,0.55)] md:grid-cols-2"
      >
        <div className="relative aspect-[16/9] sm:aspect-[2/1] md:aspect-auto md:min-h-[28rem]">
          <Image
            src={img(story.scene, 1000)}
            alt={story.headline}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className="object-cover"
          />
          <span className="absolute left-5 top-5 bg-brand px-3 py-1.5 eyebrow text-white">
            {i === 0 ? C.tag : story.program}
          </span>
        </div>

        <div className="flex flex-col justify-between gap-6 p-6 md:gap-8 md:p-11">
          <div>
            <p className="eyebrow text-ink-50">
              {String(i + 1).padStart(2, "0")} / {String(total).padStart(2, "0")} ·{" "}
              {story.place}
            </p>
            <h3 className="display mt-4 text-[1.45rem] leading-[1.08] text-ink sm:text-[1.65rem] md:mt-5 md:text-[2rem]">
              {story.headline}
            </h3>
            <p className="serif mt-4 text-[1.15rem] italic leading-snug text-brand-700 md:mt-6 md:text-[1.3rem]">
              {story.pull}
            </p>
            <p className="mt-6 hidden max-w-[46ch] text-[0.95rem] leading-relaxed text-ink-70 md:block">
              {story.body[0]}
            </p>
          </div>

          <div className="flex items-center justify-between gap-4 border-t border-line pt-5">
            <div className="flex items-center gap-3">
              <span className="relative h-11 w-11 shrink-0 overflow-hidden rounded-full">
                <Image
                  src={img(story.portrait, 200)}
                  alt={story.name}
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </span>
              <span className="text-sm">
                <b className="block font-medium text-ink">{story.name}</b>
                <span className="text-ink-50">{story.age} · {story.place}</span>
              </span>
            </div>
            <Link
              href={`/impact#${story.slug}`}
              className="link-underline shrink-0 text-sm text-ink"
            >
              Read →
            </Link>
          </div>
        </div>
      </motion.article>
    </div>
  );
}

export default function StoriesStack() {
  return (
    <section className="relative bg-sky-50 py-24 md:py-32">
      <div className="shell">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <Reveal y={14}>
              <p className="eyebrow mb-5 text-ink-50">
                <span className="text-brand">04</span>
                <span className="mx-3 inline-block h-px w-8 translate-y-[-3px] bg-ink/20" />
                {C.eyebrow}
              </p>
            </Reveal>
            <SplitWords
              text={C.title}
              className="display max-w-[15ch] text-[2.09rem] leading-[1.02] text-ink sm:text-[2.78rem] lg:text-[3.31rem]"
            />
          </div>
          <Reveal delay={0.2} className="max-w-[42ch]">
            <p className="serif text-[1.2rem] italic leading-snug text-brand-700 md:text-[1.3rem]">
              {C.sub}
            </p>
            <p className="mt-4 text-[0.95rem] leading-relaxed text-ink-70">{C.body}</p>
            <Link href="/impact" className="link-underline mt-6 inline-block pb-2 text-sm text-ink">
              {C.link}
            </Link>
          </Reveal>
        </div>

        <div>
          {STORIES.slice(0, 4).map((s, i) => (
            <Card key={s.slug} story={s} i={i} total={4} />
          ))}
        </div>
      </div>
    </section>
  );
}

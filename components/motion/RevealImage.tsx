"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform, type Variants } from "motion/react";
import { img } from "@/lib/images";

type Props = {
  id: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  width?: number;
  /** vertical drift of the image inside its frame, in % */
  parallax?: number;
  rounded?: string;
};

const curtain: Variants = {
  hidden: { scaleY: 1 },
  show: { scaleY: 0, transition: { duration: 1.05, ease: [0.16, 1, 0.3, 1] } },
};

const zoom: Variants = {
  hidden: { scale: 1.14 },
  show: { scale: 1, transition: { duration: 1.4, ease: [0.16, 1, 0.3, 1] } },
};

/**
 * Image in a frame that wipes open on entry, with the picture itself
 * drifting slowly inside the frame as you scroll past it.
 */
export default function RevealImage({
  id,
  alt,
  className = "",
  imgClassName = "",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  width = 1600,
  parallax = 8,
  rounded = "",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [`-${parallax}%`, `${parallax}%`]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      className={`relative overflow-hidden bg-sky-100 ${rounded} ${className}`}
    >
      <motion.div style={{ y }} className="absolute -inset-y-[12%] inset-x-0">
        <motion.div variants={zoom} className="relative h-full w-full">
          <Image
            src={img(id, width)}
            alt={alt}
            fill
            sizes={sizes}
            priority={priority}
            className={`object-cover ${imgClassName}`}
          />
        </motion.div>
      </motion.div>

      <motion.span
        aria-hidden
        variants={curtain}
        style={{ originY: 1 }}
        className="absolute inset-0 z-10 block bg-sky-100"
      />
    </motion.div>
  );
}

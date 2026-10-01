"use client";

import { motion } from "motion/react";
import type { ElementType } from "react";

type Props = {
  text: string;
  as?: ElementType;
  className?: string;
  delay?: number;
  stagger?: number;
  once?: boolean;
};

/** Word-by-word mask reveal — the signature entrance for headlines. */
export default function SplitWords({
  text,
  as: Tag = "h2",
  className = "",
  delay = 0,
  stagger = 0.045,
  once = true,
}: Props) {
  const words = text.split(" ");

  return (
    <Tag className={className}>
      <motion.span
        className="inline"
        initial="hidden"
        whileInView="show"
        viewport={{ once, amount: 0.4 }}
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: stagger, delayChildren: delay } },
        }}
      >
        {words.map((w, i) => (
          <span
            key={`${w}-${i}`}
            className="inline-block overflow-hidden align-bottom"
            style={{ paddingBottom: "0.08em", marginBottom: "-0.08em" }}
          >
            <motion.span
              className="inline-block"
              variants={{
                hidden: { y: "108%", rotate: 3 },
                show: {
                  y: "0%",
                  rotate: 0,
                  transition: { duration: 0.95, ease: [0.16, 1, 0.3, 1] },
                },
              }}
            >
              {w}
              {i < words.length - 1 ? " " : ""}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  );
}

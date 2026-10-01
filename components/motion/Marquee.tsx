"use client";

import { useRef, type ReactNode } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";

/** A band of repeating content that drifts, and speeds up with scroll velocity. */
export default function Marquee({
  children,
  speed = 40,
  reverse = false,
  className = "",
}: {
  children: ReactNode;
  speed?: number;
  reverse?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const raw = useTransform(scrollYProgress, [0, 1], reverse ? [-120, 120] : [120, -120]);
  const x = useSpring(raw, { stiffness: 80, damping: 30, mass: 0.6 });

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ x }} className="flex w-max">
        <div
          className="flex animate-none items-center gap-10 whitespace-nowrap pr-10"
          style={{
            animation: `broadarks-marquee ${speed}s linear infinite${reverse ? " reverse" : ""}`,
          }}
        >
          {children}
          {children}
        </div>
      </motion.div>
    </div>
  );
}

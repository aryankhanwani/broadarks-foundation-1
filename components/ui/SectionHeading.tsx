import type { ReactNode } from "react";
import SplitWords from "@/components/motion/SplitWords";
import Reveal from "@/components/motion/Reveal";

export default function SectionHeading({
  eyebrow,
  index,
  title,
  lead,
  align = "left",
  tone = "ink",
  children,
}: {
  eyebrow?: string;
  index?: string;
  title: string;
  lead?: string;
  align?: "left" | "center";
  tone?: "ink" | "light";
  children?: ReactNode;
}) {
  const isLight = tone === "light";
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : ""}>
      {(eyebrow || index) && (
        <Reveal y={14}>
          <div
            className={`eyebrow mb-6 flex items-center gap-3 ${
              align === "center" ? "justify-center" : ""
            } ${isLight ? "text-white/60" : "text-ink-50"}`}
          >
            {index && <span className="text-brand">{index}</span>}
            {index && <span className="h-px w-8 bg-current opacity-40" />}
            {eyebrow && <span>{eyebrow}</span>}
          </div>
        </Reveal>
      )}
      <SplitWords
        text={title}
        as="h2"
        className={`display text-[2.09rem] leading-[1.02] sm:text-[2.78rem] lg:text-[3.48rem] ${
          isLight ? "text-white" : "text-ink"
        } ${align === "center" ? "" : "max-w-[18ch]"}`}
      />
      {lead && (
        <Reveal delay={0.15} y={18}>
          <p
            className={`mt-7 max-w-[52ch] text-[1.0625rem] leading-relaxed ${
              isLight ? "text-white/70" : "text-ink-70"
            } ${align === "center" ? "mx-auto" : ""}`}
          >
            {lead}
          </p>
        </Reveal>
      )}
      {children}
    </div>
  );
}

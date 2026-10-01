import Link from "next/link";
import type { ReactNode } from "react";
import Magnetic from "@/components/motion/Magnetic";

type Variant = "solid" | "outline" | "light";

const base =
  "group relative inline-flex items-center gap-3 overflow-hidden rounded-full px-7 py-3.5 text-sm font-medium transition-colors duration-500";

const styles: Record<Variant, string> = {
  solid: "bg-ink text-white hover:text-ink",
  outline: "border border-ink/25 text-ink hover:text-white",
  light: "bg-white text-ink hover:text-white",
};

const fill: Record<Variant, string> = {
  solid: "bg-brand",
  outline: "bg-ink",
  light: "bg-brand",
};

export default function Button({
  href,
  children,
  variant = "solid",
  magnetic = true,
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: Variant;
  magnetic?: boolean;
  className?: string;
}) {
  const inner = (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      <span
        className={`absolute inset-0 origin-bottom scale-y-0 rounded-full transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-y-100 ${fill[variant]}`}
        aria-hidden
      />
      <span className="relative z-10">{children}</span>
      <svg
        viewBox="0 0 14 14"
        className="relative z-10 h-3 w-3 transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:translate-x-1"
        fill="none"
        aria-hidden
      >
        <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </Link>
  );

  return magnetic ? <Magnetic>{inner}</Magnetic> : inner;
}

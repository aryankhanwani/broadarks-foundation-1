"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import Logo from "./Logo";
import { NAV, SITE } from "@/lib/content";

export default function Nav() {
  const pathname = usePathname();
  const [solid, setSolid] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  /** Transparent over the homepage's dark video hero, so the bar goes light. */
  const overHero = pathname === "/" && !solid && !open;

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setSolid(y > 40);
    setHidden(y > prev && y > 420 && !open);
  });

  useEffect(() => {
    document.documentElement.style.overflow = open ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <motion.header
        animate={{ y: hidden ? "-110%" : "0%" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div
          className={`transition-[background-color,border-color,backdrop-filter] duration-500 ${
            solid && !open
              ? "border-b border-line bg-white/85 backdrop-blur-xl"
              : "border-b border-transparent"
          }`}
        >
          <div className="shell flex h-[72px] items-center justify-between md:h-[84px]">
            <Link
              href="/"
              aria-label={SITE.name}
              onClick={() => setOpen(false)}
              className={`relative z-50 transition-colors duration-300 ${
                open || overHero ? "text-white" : "text-ink"
              }`}
            >
              <Logo />
            </Link>

            <nav className="hidden items-center gap-9 lg:flex">
              {NAV.map((item) => {
                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`group relative py-2 text-sm transition-colors ${
                      overHero ? "text-white/80 hover:text-white" : "text-ink/80 hover:text-ink"
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute inset-x-0 bottom-0 h-px origin-left bg-brand transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] ${
                        active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center gap-3">
              <Link
                href="/donate"
                className="group relative hidden overflow-hidden rounded-full bg-brand px-6 py-3 text-sm font-medium text-white sm:inline-flex"
              >
                <span className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-y-100" />
                <span className="relative">Donate</span>
              </Link>

              <button
                onClick={() => setOpen((v) => !v)}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                className={`relative z-50 flex h-11 w-11 items-center justify-center rounded-full border transition-colors duration-300 lg:hidden ${
                  open || overHero ? "border-white/30" : "border-line"
                }`}
              >
                <span className="relative block h-3 w-5">
                  <motion.span
                    animate={{ rotate: open ? 45 : 0, y: open ? 5 : 0 }}
                    className={`absolute inset-x-0 top-0 h-[1.5px] transition-colors duration-300 ${
                      open || overHero ? "bg-white" : "bg-ink"
                    }`}
                  />
                  <motion.span
                    animate={{ rotate: open ? -45 : 0, y: open ? -5 : 0 }}
                    className={`absolute inset-x-0 bottom-0 h-[1.5px] transition-colors duration-300 ${
                      open || overHero ? "bg-white" : "bg-ink"
                    }`}
                  />
                </span>
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col justify-between gap-10 overflow-y-auto bg-ink px-5 pb-10 pt-24 text-white md:px-10 lg:hidden"
          >
            <nav className="flex flex-col">
              {[...NAV, { label: "Donate", href: "/donate" }].map((item, i) => (
                <div key={item.href} className="overflow-hidden border-b border-white/10">
                  <motion.div
                    initial={{ y: "110%" }}
                    animate={{ y: "0%" }}
                    transition={{
                      delay: 0.15 + i * 0.06,
                      duration: 0.8,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="flex items-baseline gap-4 py-4 display text-[1.83rem] leading-none"
                    >
                      <span className="eyebrow text-brand opacity-70">
                        0{i + 1}
                      </span>
                      {item.label}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="space-y-2 text-sm text-white/55"
            >
              <p>{SITE.email}</p>
              <p>{SITE.phone}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import Link from "next/link";
import Logo from "./Logo";
import Reveal from "./motion/Reveal";
import SplitWords from "./motion/SplitWords";
import Button from "./ui/Button";
import { NAV, SITE, PROGRAMS, tel } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink text-white">
      <div className="shell pb-12 pt-24 md:pt-32">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SplitWords
              text="Stand a little closer."
              as="h2"
              className="display max-w-[14ch] text-[2.44rem] leading-[1.0] sm:text-[3.48rem] lg:text-[4.35rem]"
            />
            <Reveal delay={0.15}>
              <p className="mt-8 max-w-[44ch] text-white/60">
                Give once, give monthly, partner with us, or simply read the
                numbers first. All four are welcome.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Button href="/donate" variant="light">
                  Donate
                </Button>
                <Link
                  href="/contact"
                  className="link-underline inline-flex items-center py-3.5 text-sm text-white/70 hover:text-white"
                >
                  Partner with us
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 lg:pt-4">
            <div>
              <p className="eyebrow mb-5 text-white/40">Pages</p>
              <ul className="space-y-3 text-sm">
                {[...NAV, { label: "Donate", href: "/donate" }].map((n) => (
                  <li key={n.href}>
                    <Link href={n.href} className="link-underline text-white/70 hover:text-white">
                      {n.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="eyebrow mb-5 text-white/40">Programmes</p>
              <ul className="space-y-3 text-sm">
                {PROGRAMS.map((p) => (
                  <li key={p.slug}>
                    <Link
                      href={`/work#${p.slug}`}
                      className="link-underline text-white/70 hover:text-white"
                    >
                      {p.kicker}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <p className="eyebrow mb-5 text-white/40">Elsewhere</p>
              <ul className="space-y-3 text-sm">
                {SITE.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      className="link-underline text-white/70 hover:text-white"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
              <address className="mt-8 space-y-1 text-sm not-italic text-white/50">
                {SITE.address.map((l) => (
                  <p key={l}>{l}</p>
                ))}
                <p className="pt-3">
                  <a href={`mailto:${SITE.email}`} className="link-underline text-white/70">
                    {SITE.email}
                  </a>
                </p>
                <p>
                  <a href={`mailto:${SITE.careersEmail}`} className="link-underline text-white/70">
                    {SITE.careersEmail}
                  </a>
                </p>
                {SITE.phones.map((p) => (
                  <p key={p}>
                    <a href={tel(p)} className="link-underline text-white/70">
                      {p}
                    </a>
                  </p>
                ))}
              </address>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-white/10 pt-8 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="text-white/70">
            <Logo tone="light" />
          </Link>
          <p className="max-w-md">{SITE.regd}</p>
          <p className="flex gap-5">
            <Link href="/privacy" className="link-underline hover:text-white/70">
              Privacy Policy
            </Link>
            <span>© {new Date().getFullYear()} {SITE.name}</span>
          </p>
        </div>
      </div>

      {/* oversized wordmark bleeding off the bottom edge */}
      <div
        aria-hidden
        className="pointer-events-none select-none px-5 md:px-10"
      >
        <p className="serif translate-y-[22%] text-center text-[19vw] leading-none text-white/[0.055]">
          BROADARKS
        </p>
      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";
import Reveal from "@/components/motion/Reveal";
import SplitWords from "@/components/motion/SplitWords";
import { img } from "@/lib/images";

export default function CTABand({
  image,
  eyebrow = "Take part",
  title,
  sub,
  lead,
  primary = { href: "/donate", label: "Donate now" },
  secondary,
}: {
  image: string;
  eyebrow?: string;
  title: string;
  sub?: string;
  lead: string;
  primary?: { href: string; label: string };
  secondary?: { href: string; label: string };
}) {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <Image src={img(image, 1800)} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-ink/75" />
      </div>

      <div className="shell relative py-28 text-center md:py-40">
        <Reveal y={14}>
          <p className="eyebrow mb-7 text-white/50">{eyebrow}</p>
        </Reveal>
        <SplitWords
          text={title}
          className="display mx-auto max-w-[18ch] text-[2.26rem] leading-[1.02] text-white sm:text-[3.13rem] lg:text-[3.83rem]"
        />
        {sub && (
          <Reveal delay={0.15}>
            <p className="serif mx-auto mt-7 max-w-[40ch] text-[1.25rem] italic leading-snug text-brand md:text-[1.4rem]">
              {sub}
            </p>
          </Reveal>
        )}
        <Reveal delay={0.2}>
          <p className="mx-auto mt-8 max-w-[50ch] text-[1.05rem] leading-relaxed text-white/70">
            {lead}
          </p>
          <div className="mt-11 flex flex-wrap items-center justify-center gap-4">
            <Button href={primary.href} variant="light">
              {primary.label}
            </Button>
            {secondary && (
              <Link
                href={secondary.href}
                className="link-underline py-3.5 text-sm text-white/70 hover:text-white"
              >
                {secondary.label}
              </Link>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

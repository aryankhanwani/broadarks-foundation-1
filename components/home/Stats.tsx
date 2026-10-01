import Image from "next/image";
import Counter from "@/components/motion/Counter";
import Reveal from "@/components/motion/Reveal";
import { STATS } from "@/lib/content";
import { IMG, img } from "@/lib/images";

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-ink py-24 text-white md:py-32">
      <Image
        src={img(IMG.handsCircle, 1800)}
        alt=""
        fill
        sizes="100vw"
        aria-hidden
        className="object-cover opacity-[0.16]"
      />
      <div className="absolute inset-0 bg-ink/55" aria-hidden />

      <div className="shell relative">
        <Reveal y={16}>
          <p className="eyebrow mb-14 text-white/45">
            <span className="text-brand">02</span>
            <span className="mx-3 inline-block h-px w-8 translate-y-[-3px] bg-white/30" />
            The arithmetic
          </p>
        </Reveal>

        <div className="grid gap-x-10 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.09}>
              <div className="border-t border-white/15 pt-6">
                <p className="numeral text-[3.2rem] text-brand sm:text-[3.9rem]">
                  <Counter to={s.value} suffix={s.suffix} />
                </p>
                <p className="mt-4 text-[1.05rem] text-white">{s.label}</p>
                <p className="mt-1 text-sm text-white/45">{s.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-16 max-w-[58ch] border-l-2 border-brand pl-6 text-[1.05rem] leading-relaxed text-white/70">
            Every programme is re-audited five years after we exit it. The
            failures are published at the same volume as the successes — it is
            the only way these numbers stay worth reading.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

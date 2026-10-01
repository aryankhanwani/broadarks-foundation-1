import Image from "next/image";
import Marquee from "@/components/motion/Marquee";
import Reveal from "@/components/motion/Reveal";
import { PARTNERS } from "@/lib/content";
import { IMG, img } from "@/lib/images";

export default function Partners() {
  return (
    <section className="border-y border-line bg-sand py-20 md:py-28">
      <div className="shell mb-14 grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow mb-6 text-ink-50">
            <span className="text-brand">06</span>
            <span className="mx-3 inline-block h-px w-8 translate-y-[-3px] bg-ink/20" />
            Who funds this
          </p>
          <p className="serif text-[1.85rem] leading-snug text-ink">
            Twenty-eight institutional partners, and eleven thousand people who
            give under ₹1,000 a month.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7">
          <figure className="border-l-2 border-brand pl-7">
            <blockquote className="serif text-[1.5rem] italic leading-snug text-ink md:text-[1.8rem]">
              “We have funded a lot of education work. Broadarks is the only
              partner that sent us the list of what had failed before we asked
              for it.”
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3">
              <span className="relative h-11 w-11 overflow-hidden rounded-full">
                <Image
                  src={img(IMG.p4, 200)}
                  alt=""
                  fill
                  sizes="44px"
                  className="object-cover"
                />
              </span>
              <span className="text-sm">
                <b className="block font-medium text-ink">Priya Raghunath</b>
                <span className="text-ink-50">CSR Lead, Tata Capital</span>
              </span>
            </figcaption>
          </figure>
        </Reveal>
      </div>

      <Marquee speed={55} reverse>
        {PARTNERS.map((p, i) => (
          <span key={`${p}-${i}`} className="flex items-center gap-10">
            <span className="serif whitespace-nowrap text-[1.7rem] text-ink/35 sm:text-[2.1rem]">
              {p}
            </span>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand/60" />
          </span>
        ))}
      </Marquee>
    </section>
  );
}

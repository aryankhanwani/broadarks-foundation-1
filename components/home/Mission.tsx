import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import SplitWords from "@/components/motion/SplitWords";
import RevealImage from "@/components/motion/RevealImage";
import SectionHeading from "@/components/ui/SectionHeading";
import { IMG } from "@/lib/images";
import { HOME_COPY } from "@/lib/homeCopy";

const C = HOME_COPY.grassroots;
const P = HOME_COPY.principles;

export default function Mission() {
  return (
    <section className="relative bg-white py-24 md:py-36">
      <div className="shell grid gap-16 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-5">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              index="01"
              eyebrow={C.eyebrow}
              title={C.title}
            >
              <Reveal delay={0.15} y={18}>
                <p className="serif mt-7 max-w-[34ch] text-[1.3rem] italic leading-snug text-brand-700">
                  {C.sub}
                </p>
              </Reveal>
              <Reveal delay={0.25} y={18}>
                <p className="mt-6 max-w-[52ch] text-[1.0625rem] leading-relaxed text-ink-70">
                  {C.body}
                </p>
              </Reveal>
            </SectionHeading>
            <Reveal delay={0.2}>
              <Link
                href={C.link.href}
                className="link-underline mt-10 inline-flex items-center gap-2 text-sm text-ink"
              >
                {C.link.label}
                <span aria-hidden>→</span>
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-6 lg:col-start-7">
          <RevealImage
            id={IMG.kidsPointing}
            alt="Children in a community we work with"
            className="aspect-[5/6] w-full"
            sizes="(max-width: 1024px) 100vw, 45vw"
          />

          <SplitWords
            text={P.title}
            as="h3"
            className="display mt-16 text-[1.57rem] leading-tight text-ink sm:text-[1.95rem]"
          />

          <div className="mt-8 space-y-px">
            {P.items.map((v, i) => (
              <Reveal key={v.n} delay={i * 0.07} y={20}>
                <div className="group flex gap-6 border-t border-line py-7 transition-colors duration-500 hover:border-brand">
                  <span className="eyebrow mt-1 shrink-0 text-brand">{v.n}</span>
                  <div>
                    <h3 className="display text-[1.3rem] leading-tight text-ink">
                      {v.title}
                    </h3>
                    <p className="mt-2.5 max-w-[50ch] text-[0.95rem] leading-relaxed text-ink-70">
                      {v.text}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

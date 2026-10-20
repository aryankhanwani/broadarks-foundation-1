import Initials from "@/components/ui/Initials";
import Marquee from "@/components/motion/Marquee";
import Reveal from "@/components/motion/Reveal";
import Counter from "@/components/motion/Counter";
import { PARTNERS } from "@/lib/content";
import { HOME_COPY } from "@/lib/homeCopy";

const C = HOME_COPY.partners;

export default function Partners() {
  return (
    <section className="border-y border-line bg-sand py-20 md:py-28">
      <div className="shell mb-14 grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <p className="eyebrow mb-6 text-ink-50">
            <span className="text-brand">06</span>
            <span className="mx-3 inline-block h-px w-8 translate-y-[-3px] bg-ink/20" />
            {C.eyebrow}
          </p>
          <h2 className="serif text-[1.85rem] leading-snug text-ink">{C.title}</h2>
          <p className="serif mt-5 text-[1.2rem] italic leading-snug text-brand-700">
            {C.sub}
          </p>
          <p className="mt-5 text-[0.95rem] leading-relaxed text-ink-70">{C.body}</p>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-6 lg:col-start-7">
          <div className="mb-14 grid grid-cols-2 gap-8">
            {C.metrics.map((m) => (
              <div key={m.label} className="border-t border-ink/15 pt-6">
                <p className="numeral text-[3.2rem] text-brand sm:text-[3.9rem]">
                  <Counter to={m.value} suffix={m.suffix} group />
                </p>
                <p className="mt-3 text-[1.05rem] text-ink">{m.label}</p>
              </div>
            ))}
          </div>
          <figure className="border-l-2 border-brand pl-7">
            <blockquote className="serif text-[1.5rem] italic leading-snug text-ink md:text-[1.8rem]">
              “We have funded a lot of education work. Broadarks is the only
              partner that sent us the list of what had failed before we asked
              for it.”
            </blockquote>
            <figcaption className="mt-7 flex items-center gap-3">
              <Initials name="Priya Raghunath" className="h-11 w-11 text-[0.8rem]" />
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

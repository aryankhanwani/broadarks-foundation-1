import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import RevealImage from "@/components/motion/RevealImage";
import Parallax from "@/components/motion/Parallax";
import CTABand from "@/components/CTABand";
import Counter from "@/components/motion/Counter";
import { PROGRAMS } from "@/lib/content";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "The Work",
  description:
    "Five pillars — education, health, livelihood, nutrition and climate — built together and handed over.",
};

const APPROACH = [
  {
    n: "01",
    t: "Sit down first",
    d: "Three to six months of listening before a rupee is spent. Most of what we planned on paper gets thrown out in this phase, which is the point.",
  },
  {
    n: "02",
    t: "Build inside, not near",
    d: "The centre goes into the settlement. Staff are hired from within walking distance. Distance kills attendance faster than cost does.",
  },
  {
    n: "03",
    t: "Give the money a local home",
    d: "A committee, a tariff, a ledger, a bank account. Ownership of money is the single strongest predictor of whether a thing survives us.",
  },
  {
    n: "04",
    t: "Leave, then come back and check",
    d: "Handover at year three, independent audit at year five. Whatever failed goes into the annual report at the same size as whatever worked.",
  },
];

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="The work"
        title="Five pillars,"
        italic="one arc."
        lead="They are not separate programmes running in parallel. A meal holds up a lesson; a lesson holds up a livelihood; a lit house lets a child study after dark. We fund the chain, or we don't fund it."
        image={IMG.kidsBackpacks}
        meta={[
          { k: "Communities", v: "412" },
          { k: "Learning centres", v: "63" },
          { k: "Health workers", v: "180" },
          { k: "Collectives", v: "48" },
        ]}
      />

      {/* programmes */}
      <section className="bg-white">
        {PROGRAMS.map((p, i) => {
          const flip = i % 2 === 1;
          return (
            <div
              key={p.slug}
              id={p.slug}
              className={`scroll-mt-24 border-t border-line py-20 md:py-28 ${
                i % 2 === 1 ? "bg-sand" : "bg-white"
              }`}
            >
              <div className="shell grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
                <div className={`lg:col-span-6 ${flip ? "lg:order-2 lg:col-start-7" : ""}`}>
                  <RevealImage
                    id={p.image}
                    alt={p.title}
                    className="aspect-[4/5] w-full sm:aspect-[5/4] lg:aspect-[4/5]"
                    sizes="(max-width: 1024px) 100vw, 48vw"
                  />
                </div>

                <div className={`lg:col-span-5 ${flip ? "lg:order-1 lg:col-start-1" : "lg:col-start-8"}`}>
                  <Reveal y={14}>
                    <p className="eyebrow mb-6 flex items-center gap-3 text-ink-50">
                      <span className="text-brand">{p.index}</span>
                      <span className="h-px w-8 bg-ink/20" />
                      {p.kicker}
                    </p>
                  </Reveal>

                  <Reveal delay={0.05}>
                    <h2 className="display max-w-[15ch] text-[1.91rem] leading-[1.02] text-ink sm:text-[2.52rem]">
                      {p.title}
                    </h2>
                  </Reveal>

                  <Reveal delay={0.12}>
                    <p className="mt-6 max-w-[48ch] text-[1.05rem] leading-relaxed text-ink">
                      {p.blurb}
                    </p>
                    <p className="mt-5 max-w-[50ch] leading-relaxed text-ink-70">{p.detail}</p>
                  </Reveal>

                  <Reveal delay={0.18}>
                    <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-line pt-6">
                      {p.metrics.map((m) => (
                        <div key={m.k}>
                          <dt className="eyebrow order-2 mt-2 block text-ink-50">{m.k}</dt>
                          <dd className="numeral text-[1.7rem] text-brand">{m.v}</dd>
                        </div>
                      ))}
                    </dl>
                  </Reveal>

                  <Reveal delay={0.24}>
                    <Parallax amount={18} className="mt-10 hidden xl:block">
                      <RevealImage
                        id={p.secondary}
                        alt=""
                        className="aspect-[16/9] w-full"
                        sizes="35vw"
                        parallax={5}
                      />
                    </Parallax>
                  </Reveal>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* method */}
      <section className="bg-ink py-24 text-white md:py-32">
        <div className="shell">
          <SectionHeading
            index="06"
            eyebrow="How a programme actually runs"
            tone="light"
            title="Four steps, and the last one is the hard one."
            lead="Anyone can open a centre. The discipline is in closing the loop three and five years later, in public."
          />

          <div className="mt-16 grid gap-px sm:grid-cols-2 lg:grid-cols-4">
            {APPROACH.map((a, i) => (
              <Reveal key={a.n} delay={i * 0.08}>
                <div className="group h-full border-t border-white/15 pt-7 transition-colors duration-500 hover:border-brand">
                  <span className="eyebrow text-brand">{a.n}</span>
                  <h3 className="display mt-5 text-[1.3rem] leading-tight">{a.t}</h3>
                  <p className="mt-3 max-w-[34ch] text-[0.93rem] leading-relaxed text-white/60">
                    {a.d}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-20 grid gap-10 border-t border-white/15 pt-12 sm:grid-cols-3">
              {[
                { v: 91, s: "%", l: "Of every rupee reaches the field" },
                { v: 14, s: "%", l: "Of each programme budget spent on handover" },
                { v: 5, s: " yrs", l: "Before we call anything a success" },
              ].map((x) => (
                <div key={x.l}>
                  <p className="numeral text-[2.9rem] text-brand">
                    <Counter to={x.v} suffix={x.s} />
                  </p>
                  <p className="mt-3 max-w-[26ch] text-sm text-white/60">{x.l}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTABand
        image={IMG.workshop}
        eyebrow="Fund a pillar"
        title="Pick the part of the chain you care about."
        lead="Designated giving is available for every programme. Above ₹2,00,000 we'll send a utilisation plan before you commit anything."
        secondary={{ href: "/contact", label: "Ask us first" }}
      />
    </>
  );
}

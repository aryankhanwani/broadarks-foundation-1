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
    d: "Three to six months of deep field assessment precede any capital deployment. Initial proposals are refined based on community feedback to ensure absolute operational alignment.",
  },
  {
    n: "02",
    t: "Build inside, not near",
    d: "Facilities are placed directly within target settlements, and staff are recruited locally. Geographic proximity directly secures consistent daily participation.",
  },
  {
    n: "03",
    t: "Give the money a local home",
    d: "We establish local committees, fee structures, transparent ledgers, and dedicated bank accounts. Financial self-governance is the single strongest predictor of post-exit sustainability.",
  },
  {
    n: "04",
    t: "Leave, then come back and check",
    d: "Project ownership transfers at year three, followed by an independent audit at year five. Operational failures are disclosed in our annual reports with the same prominence as successes.",
  },
];

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="The work"
        title="Five pillars, one interconnected"
        italic="execution arc."
        sub="Comprehensive CSR intervention chains designed for complete community transformation."
        lead="Our initiatives do not operate in silos. Nutritional support sustains educational attendance; education builds viable livelihoods; and reliable household electrification enables evening study. We fund and execute the entire continuum, ensuring zero structural gaps across every deployed intervention."
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
                    <h2 className="display max-w-[20ch] text-[1.74rem] leading-[1.05] text-ink sm:text-[2.17rem]">
                      {p.headline}
                    </h2>
                  </Reveal>

                  <Reveal delay={0.12}>
                    <p className="mt-6 max-w-[48ch] text-[1.05rem] leading-relaxed text-ink">
                      {p.sub}
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
            title="Structured lifecycle execution and post-exit accountability."
            sub="Four-phase governance framework driving last-mile integration and audited handover."
            lead="Anyone can open a centre. Sustainable impact requires long-term operational discipline and public disclosures three and five years post-exit."
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
        title="Targeted capital deployment across the implementation chain."
        sub="Designated institutional grants and high-accountability CSR funding."
        lead="Designated giving options are available across all five operational pillars. For institutional contributions exceeding ₹2,00,000, we provide a detailed capital utilization plan prior to financial commitment."
        secondary={{ href: "/contact", label: "Ask us first" }}
      />
    </>
  );
}

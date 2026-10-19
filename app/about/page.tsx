import type { Metadata } from "next";
import Image from "next/image";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import RevealImage from "@/components/motion/RevealImage";
import Parallax from "@/components/motion/Parallax";
import CTABand from "@/components/CTABand";
import Marquee from "@/components/motion/Marquee";
import { TIMELINE, VALUES, TEAM, SITE } from "@/lib/content";
import { IMG, img } from "@/lib/images";

export const metadata: Metadata = {
  title: "About Us",
  description: SITE.description,
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Structured field implementation"
        italic="built on grassroots proximity."
        sub="Scaling ground operations since 2014."
        lead="BroadArks Foundation originated in 2014 as a single-room community intervention in Seelampur, East Delhi, serving forty children. Over twelve years of continuous growth, we have expanded into a multi-state implementation agency executing high-impact CSR programmes across nine states. Throughout our expansion, our foundational operating model has remained constant: maintain deep ground proximity, commit to long-term community presence, and build self-sustaining projects designed for local handover."
        image={IMG.classroomFloor}
        meta={[
          { k: "Years of continuous field execution", v: "12+" },
          { k: "States with active, compliant CSR operations", v: "9" },
          { k: "Built for long-term community autonomy", v: "Exit-driven" },
          { k: "Field personnel hired locally", v: "89%" },
        ]}
      />

      {/* letter */}
      <section className="bg-white py-24 md:py-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                index="01"
                eyebrow="Why we exist"
                title="Proximity as an operational strategy."
                sub="Closing the last-mile gap in community development."
              />
            </div>
          </div>

          <div className="space-y-7 text-[1.08rem] leading-[1.75] text-ink-70 lg:col-span-7 lg:col-start-6">
            <Reveal>
              <p className="serif text-[1.6rem] leading-snug text-ink">
                Proximity is the operational method. The distance between an
                individual and essential infrastructure is measured not merely
                in physical kilometres, but in accessibility and local
                integration.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                We operate on a direct observation: public services exist, yet
                target populations often face barriers that prevent effective
                utilization. A healthcare facility located at a distance imposes
                prohibitive wage losses, and an educational framework misaligned
                with a child&apos;s age group fails to deliver sustainable
                outcomes.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                Consequently, our implementation model positions infrastructure
                directly within settlements rather than adjacent regions,
                recruits personnel locally, and evaluates project sustainability
                five years post-exit rather than at initial launch. This
                approach prioritizes long-term operational retention over rapid
                scaling.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <RevealImage
                id={IMG.townhall}
                alt="A village committee meeting in progress"
                className="my-12 aspect-[16/10] w-full"
                sizes="(max-width: 1024px) 100vw, 55vw"
              />
            </Reveal>

            <Reveal delay={0.08}>
              <p>
                Our organizational structure remains intentionally focused,
                deploying 740 field personnel—with 89% recruited locally from
                served communities, alongside a central office team of 19
                members.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                For institutional partners and donors, our governance commitment
                provides direct traceability of capital allocation, full
                disclosure of operational challenges alongside successes, and
                verified five-year post-exit evaluations.
              </p>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-12 flex items-center gap-4 border-t border-line pt-8">
                <span className="relative h-14 w-14 overflow-hidden rounded-full">
                  <Image src={img(IMG.p9, 200)} alt="" fill sizes="56px" className="object-cover" />
                </span>
                <span className="text-sm">
                  <b className="block font-medium text-ink">Nandini Roy</b>
                  <span className="text-ink-50">Head of Programmes, on behalf of the team</span>
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* values */}
      <section className="bg-sand py-24 md:py-32">
        <div className="shell">
          <SectionHeading
            index="02"
            eyebrow="What we hold to"
            title="Core operational commitments."
            sub="Four governance standards driving ground impact and accountability."
          />
          <div className="mt-16 grid gap-px border-t border-line md:grid-cols-2">
            {VALUES.map((v, i) => (
              <Reveal key={v.n} delay={i * 0.08}>
                <div className="group h-full border-b border-line bg-sand p-8 transition-colors duration-500 hover:bg-white md:p-11">
                  <span className="eyebrow text-brand">{v.n}</span>
                  <h3 className="display mt-6 text-[1.48rem] leading-tight text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-4 max-w-[46ch] leading-relaxed text-ink-70">{v.text}</p>
                  <span className="mt-8 block h-px w-0 bg-brand transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:w-full" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* timeline */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                index="03"
                eyebrow="How we got here"
                title="Institutional evolution and operational milestones."
                sub="A twelve-year timeline of scaled impact, systematic transition, and rigorous evaluation."
              />
              <Parallax amount={30} className="mt-12 hidden lg:block">
                <RevealImage
                  id={IMG.library}
                  alt="A lending library inside a learning centre"
                  className="aspect-[4/5] w-full"
                  sizes="40vw"
                />
              </Parallax>
            </div>
          </div>

          <ol className="lg:col-span-6 lg:col-start-7">
            {TIMELINE.map((t, i) => (
              <Reveal key={t.year} delay={i * 0.06}>
                <li className="group relative grid grid-cols-[4.5rem_1fr] gap-5 border-t border-line py-8">
                  <span className="numeral text-[1.5rem] text-brand">{t.year}</span>
                  <div>
                    <h3 className="text-[1.05rem] font-medium text-ink">{t.title}</h3>
                    <p className="mt-2 max-w-[46ch] text-[0.95rem] leading-relaxed text-ink-70">
                      {t.text}
                    </p>
                  </div>
                  <span className="absolute -top-px left-0 h-px w-0 bg-brand transition-all duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:w-full" />
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* team */}
      <section className="bg-sky-50 py-24 md:py-32">
        <div className="shell">
          <SectionHeading
            index="04"
            eyebrow="The people"
            title="19 in Delhi. 740 in the field. Zero miles between strategy and execution."
            sub="A lean administrative core powered by a direct grassroots execution network."
            lead="Nineteen team members handle administrative oversight, compliance, and institutional coordination in Delhi. Seven hundred and forty field personnel drive daily execution across target communities. The leadership list reflects administrative oversight; the 740 field professionals deliver ground-level implementation and long-term project outcomes."
          />
          <div className="mt-16 grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-3 lg:grid-cols-6">
            {TEAM.map((m, i) => (
              <Reveal key={m.name} delay={i * 0.06}>
                <div className="group">
                  <div className="relative aspect-[4/5] overflow-hidden bg-sky-100">
                    <Image
                      src={img(m.img, 500)}
                      alt={m.name}
                      fill
                      sizes="(max-width: 768px) 45vw, 16vw"
                      className="object-cover grayscale transition-all duration-[1.2s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-105 group-hover:grayscale-0"
                    />
                  </div>
                  <h3 className="mt-4 text-[0.95rem] font-medium text-ink">{m.name}</h3>
                  <p className="text-[0.82rem] text-ink-50">{m.role}</p>
                  <p className="eyebrow mt-1.5 text-[0.55rem] text-brand">{m.place}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <div className="border-y border-line bg-brand py-5 text-white">
        <Marquee speed={50}>
          {["Be close", "Stay long", "Hand it over", "Publish the failures"].map((t, i) => (
            <span key={`${t}-${i}`} className="flex items-center gap-10">
              <span className="serif text-[1.6rem] sm:text-[2rem]">{t}</span>
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white/60" />
            </span>
          ))}
        </Marquee>
      </div>

      <CTABand
        image={IMG.volunteersGroup}
        eyebrow="Work with us"
        title="Targeted skill partnerships to expand operational efficacy."
        sub="Collaborating with domain experts to strengthen last-mile CSR infrastructure."
        lead="We prioritize specialized capabilities that directly strengthen our field infrastructure, data governance, and regulatory compliance frameworks. We actively engage domain experts, including data analysts, legal counsel, technical translators, and strategic designers. If you possess a specialized skill set outside our internal capacity, we invite you to propose a specific operational contribution rather than a general advisory role."
        primary={{ href: "/contact", label: "Get in touch" }}
        secondary={{ href: "/donate", label: "Or donate" }}
      />
    </>
  );
}

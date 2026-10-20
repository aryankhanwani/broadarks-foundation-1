import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/motion/Reveal";
import RevealImage from "@/components/motion/RevealImage";
import CTABand from "@/components/CTABand";
import Counter from "@/components/motion/Counter";
import { STORIES, STATS } from "@/lib/content";
import { IMG, img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Impact Stories",
  description:
    "Five people, five programmes — what changed, in their own terms rather than ours.",
};

export default function ImpactPage() {
  return (
    <>
      <PageHero
        eyebrow="Impact stories"
        title="Measurable data grounded"
        italic="in personal transformation."
        sub="Individual case outcomes driving macro community metrics."
        lead="We maintain strict aggregate reporting to fulfill partner compliance standards. However, every data point represents a direct human outcome: an individual returning to formal education or independently establishing commercial terms in the market. Below are five representative case studies."
        image={IMG.kidsPlaying}
      />

      {/* numbers strip */}
      <section className="border-y border-line bg-sky-50 py-14">
        <div className="shell grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <p className="numeral text-[2.5rem] text-brand">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-[0.95rem] text-ink">{s.label}</p>
              <p className="text-sm text-ink-50">{s.note}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* stories */}
      <section className="bg-white">
        {STORIES.map((s, i) => {
          const flip = i % 2 === 1;
          return (
            <article
              key={s.slug}
              id={s.slug}
              className="scroll-mt-24 border-t border-line py-20 md:py-28"
            >
              <div className="shell grid gap-12 lg:grid-cols-12 lg:gap-16">
                <div className={`lg:col-span-6 ${flip ? "lg:order-2 lg:col-start-7" : ""}`}>
                  <RevealImage
                    id={s.scene}
                    alt={s.headline}
                    className="aspect-[4/5] w-full"
                    sizes="(max-width: 1024px) 100vw, 48vw"
                  />
                  <div className="mt-5 flex items-center gap-4">
                    <span className="relative h-16 w-16 shrink-0 overflow-hidden rounded-full border-2 border-white shadow-lg">
                      <Image
                        src={img(s.portrait, 240)}
                        alt={s.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </span>
                    <div>
                      <p className="display text-[1.17rem] leading-none text-ink">{s.name}</p>
                      <p className="mt-1.5 text-sm text-ink-50">
                        {s.age} · {s.place}
                      </p>
                    </div>
                  </div>
                </div>

                <div className={`lg:col-span-5 ${flip ? "lg:order-1" : "lg:col-start-8"}`}>
                  <Reveal y={14}>
                    <p className="eyebrow mb-6 flex items-center gap-3 text-ink-50">
                      <span className="text-brand">{String(i + 1).padStart(2, "0")}</span>
                      <span className="h-px w-8 bg-ink/20" />
                      {s.program}
                    </p>
                  </Reveal>

                  <Reveal delay={0.05}>
                    <h2 className="display max-w-[16ch] text-[1.74rem] leading-[1.05] text-ink sm:text-[2.26rem]">
                      {s.headline}
                    </h2>
                  </Reveal>

                  <Reveal delay={0.12}>
                    <p className="serif mt-8 border-l-2 border-brand pl-6 text-[1.45rem] italic leading-snug text-brand-700">
                      {s.pull}
                    </p>
                  </Reveal>

                  <div className="mt-8 space-y-5">
                    {s.body.map((para, j) => (
                      <Reveal key={j} delay={0.16 + j * 0.05}>
                        <p className="max-w-[52ch] leading-[1.75] text-ink-70">{para}</p>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>

      {/* honest note */}
      <section className="bg-sand py-24 md:py-32">
        <div className="shell grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              index="06"
              eyebrow="The other half"
              title="Honest reporting beyond the highlights."
              sub="Transparent disclosures and full accountability in our annual review."
            />
          </div>
          <div className="space-y-6 text-[1.05rem] leading-[1.75] text-ink-70 lg:col-span-6 lg:col-start-7">
            <Reveal>
              <p>
                For every success story, there is an initiative where we had to
                rethink our approach. A centre in Nuh that we closed after
                eighteen months when attendance stayed below thirty percent. A
                skilling cohort whose jobs disappeared when the local unit shut
                down. A solar micro-grid we set up incorrectly, which stopped
                working in month twenty-nine.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                We publish these lessons annually in our report with the exact
                same detail as our wins.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <Link
                href="/blog/the-five-year-test"
                className="link-underline mt-4 inline-flex text-sm text-ink"
              >
                Read how the five-year test works →
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand
        image={IMG.handsReaching}
        eyebrow="Add to this page"
        title="Direct support that changes a day."
        sub="Simple monthly giving that creates lasting change."
        lead="₹1,000 a month keeps one child in a learning centre, meal included, for a year."
      />
    </>
  );
}

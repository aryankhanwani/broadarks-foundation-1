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
        title="Two rooms, one fan,"
        italic="forty children."
        lead="Broadarks Foundation started in 2014 in a rented room in Seelampur, east Delhi. Twelve years on we work across nine states — and the operating principle has not changed: be close, stay long, hand it over."
        image={IMG.classroomFloor}
        meta={[
          { k: "Founded", v: "2014" },
          { k: "States", v: "9" },
          { k: "Field staff", v: "740" },
          { k: "Hired locally", v: "89%" },
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
                title="Proximity is the whole method."
              />
            </div>
          </div>

          <div className="space-y-7 text-[1.08rem] leading-[1.75] text-ink-70 lg:col-span-7 lg:col-start-6">
            <Reveal>
              <p className="serif text-[1.6rem] leading-snug text-ink">
                The distance between a child and a classroom is rarely measured
                in kilometres. It is measured in whether anyone in that
                classroom knows her name.
              </p>
            </Reveal>
            <Reveal delay={0.08}>
              <p>
                We began with a simple, unoriginal observation: services exist,
                and the people who need them most are the least able to reach
                them. A clinic forty minutes away is not a clinic if reaching it
                costs half a day&apos;s wages. A school that starts a child two
                grades below her age is not a second chance.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                So we build inside the settlement rather than near it, hire from
                within it rather than around it, and measure ourselves five
                years after we leave rather than on the day we cut the ribbon.
                It makes us slower than we would like. It has also made the work
                stay.
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
                We are not a large organisation and have no ambition to become
                one quickly. Seven hundred and forty people work in the field;
                eighty-nine percent of them were hired from the communities they
                serve. The Delhi office is nineteen people, and most of them are
                on a train more weeks than not.
              </p>
            </Reveal>
            <Reveal delay={0.12}>
              <p>
                What we can promise a donor is narrow and specific: you will
                know where the money went, you will see what failed, and you
                will be able to check whether it was still standing five years
                later.
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
            title="Four commitments we can be held to."
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
                title="Twelve years, unevenly."
                lead="Not a straight line. Two programmes in this list no longer exist, and one of them we ended ourselves."
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
            title="Nineteen in Delhi. Seven hundred and forty in the field."
            lead="The names below are the ones donors usually want. The other 740 are the reason any of it works."
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
        title="We are almost always looking for the wrong kind of help."
        lead="Data people, translators, lawyers, designers. If you have a skill we don't have in-house, tell us what you'd like to do rather than what you'd like to see."
        primary={{ href: "/contact", label: "Get in touch" }}
        secondary={{ href: "/donate", label: "Or donate" }}
      />
    </>
  );
}

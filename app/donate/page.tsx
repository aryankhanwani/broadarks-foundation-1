import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/motion/Reveal";
import RevealImage from "@/components/motion/RevealImage";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";
import Counter from "@/components/motion/Counter";
import { FAQS, GIVING_TIERS, SITE, tel } from "@/lib/content";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "₹910 of every ₹1,000 reaches the field. Give once or monthly — 80G receipt within 48 hours.",
};

const SPLIT = [
  { v: 910, l: "To the field", d: "Salaries, meals, materials, transport, clinic supplies, hardware." },
  { v: 54, l: "To measurement", d: "Monitoring staff, data systems, the annual audit, finance." },
  { v: 36, l: "To fundraising", d: "Donor communication and the reports you're reading." },
];

/** Online payments are off for now: donors write or call, and we reply with the details. */
const DONATE_MAIL = `mailto:${SITE.email}?subject=${encodeURIComponent("Donation enquiry")}`;

const STEPS = [
  {
    n: "01",
    t: "Write or call us",
    d: `Email ${SITE.email} or call us with the amount you have in mind, whether it is one-time or monthly, and any programme you'd like it to go to.`,
  },
  {
    n: "02",
    t: "We share the details",
    d: "A member of our team replies with the payment details and anything else needed to complete your contribution.",
  },
  {
    n: "03",
    t: "Receipt within 48 hours",
    d: "Once your contribution reaches us, we send an official receipt and 80G certificate to your email within 48 hours.",
  },
];

const OTHER_WAYS = [
  { t: "CSR partnership", d: "Multi-year programme funding with quarterly utilisation reporting and a named programme lead.", cta: "Write to us" },
  { t: "Payroll giving", d: "Set up a monthly deduction across your organisation. We handle the paperwork end to end.", cta: "Get the form" },
  { t: "In-kind & equipment", d: "Laptops, medical equipment, books. Tell us what you have before you ship it.", cta: "Check the list" },
  { t: "Legacy giving", d: "Leave a bequest to the endowment. It funds the parts of the work no grant will.", cta: "Talk to Aisha" },
];

export default function DonatePage() {
  return (
    <>
      <PageHero
        eyebrow="Donate"
        title="₹910 of every ₹1,000"
        italic="reaches the field."
        lead="Here is the other ₹90, itemised, before you give us anything. Monthly gifts are worth roughly four times a one-off to us — they let us hire teachers on real contracts."
        image={IMG.newGlasses}
      />

      {/* how to give */}
      <section className="bg-white py-16 md:py-24">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <SectionHeading
              index="01"
              eyebrow="How to give"
              title="Donate by writing to us."
              lead="We don't take payments on this website. Get in touch by email or phone and our team will guide you through your contribution personally."
            >
              <Reveal delay={0.2}>
                <div className="mt-10 flex flex-wrap items-center gap-4">
                  <Button href={DONATE_MAIL}>Email {SITE.email}</Button>
                </div>
                <p className="mt-6 text-sm text-ink-70">
                  Or call{" "}
                  {SITE.phones.map((p, i) => (
                    <span key={p}>
                      {i > 0 && " / "}
                      <a href={tel(p)} className="link-underline text-ink">
                        {p}
                      </a>
                    </span>
                  ))}
                  <span className="text-ink-50"> · Mon–Fri, 10am–6pm IST</span>
                </p>
              </Reveal>
            </SectionHeading>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <ol>
              {STEPS.map((s, i) => (
                <Reveal key={s.n} delay={i * 0.08}>
                  <li className="grid grid-cols-[3rem_1fr] gap-4 border-t border-line py-7">
                    <span className="eyebrow pt-1.5 text-brand">{s.n}</span>
                    <div>
                      <h3 className="display text-[1.3rem] leading-tight text-ink">{s.t}</h3>
                      <p className="mt-2 max-w-[48ch] leading-relaxed text-ink-70">{s.d}</p>
                    </div>
                  </li>
                </Reveal>
              ))}
            </ol>

            <Reveal delay={0.3}>
              <div className="mt-6 border-t border-line pt-8">
                <p className="eyebrow text-ink-50">What a gift does</p>
                <ul className="mt-5 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                  {GIVING_TIERS.map((g) => (
                    <li key={g.amount}>
                      <p className="numeral text-[1.6rem] text-brand">
                        ₹{g.amount.toLocaleString("en-IN")}
                      </p>
                      <p className="mt-1 text-[0.95rem] font-medium text-ink">{g.label}</p>
                      <p className="mt-1 text-sm leading-relaxed text-ink-70">{g.text}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* the split */}
      <section className="border-y border-line bg-sand py-24 md:py-32">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                index="02"
                eyebrow="Where it goes"
                title="The arithmetic, shown."
                lead="An overhead of zero is not efficiency — it's an accounting choice, and usually a fragile one. Ours is 9%, and here is what it buys."
              />
              <Reveal delay={0.2}>
                <RevealImage
                  id={IMG.glassesKids}
                  alt=""
                  className="mt-12 hidden aspect-[4/3] w-full lg:block"
                  sizes="40vw"
                />
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            {SPLIT.map((s, i) => (
              <Reveal key={s.l} delay={i * 0.1}>
                <div className="border-t border-line py-9">
                  <div className="flex items-baseline justify-between gap-6">
                    <p className="numeral text-[2.5rem] text-ink">
                      ₹<Counter to={s.v} />
                    </p>
                    <p className="eyebrow text-brand">{s.l}</p>
                  </div>
                  <div className="mt-5 h-1.5 w-full bg-ink/8">
                    <div
                      className="h-1.5 bg-brand"
                      style={{ width: `${(s.v / 1000) * 100}%` }}
                    />
                  </div>
                  <p className="mt-4 max-w-[48ch] text-[0.95rem] leading-relaxed text-ink-70">
                    {s.d}
                  </p>
                </div>
              </Reveal>
            ))}
            <Reveal delay={0.3}>
              <p className="mt-8 border-t border-line pt-8 text-sm text-ink-50">
                {SITE.regd}. Audited statements and FCRA returns published every
                October.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* other ways */}
      <section className="bg-white py-24 md:py-32">
        <div className="shell">
          <SectionHeading
            index="03"
            eyebrow="Other ways to give"
            title="Money is not the only useful thing."
          />
          <div className="mt-16 grid gap-px sm:grid-cols-2">
            {OTHER_WAYS.map((w, i) => (
              <Reveal key={w.t} delay={i * 0.08}>
                <div className="group h-full border-t border-line py-9 sm:pr-10">
                  <h3 className="display text-[1.48rem] leading-tight text-ink">{w.t}</h3>
                  <p className="mt-3 max-w-[44ch] leading-relaxed text-ink-70">{w.d}</p>
                  <Link
                    href="/contact"
                    className="link-underline mt-6 inline-flex text-sm text-ink"
                  >
                    {w.cta} →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="bg-ink py-24 text-white md:py-32">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                index="04"
                eyebrow="Questions"
                tone="light"
                title="The ones worth asking."
              />
            </div>
          </div>
          <dl className="lg:col-span-7 lg:col-start-6">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.06}>
                <div className="group border-t border-white/15 py-7 transition-colors duration-500 hover:border-brand">
                  <dt className="display text-[1.17rem] leading-snug text-white">{f.q}</dt>
                  <dd className="mt-3 max-w-[56ch] leading-relaxed text-white/60">{f.a}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}

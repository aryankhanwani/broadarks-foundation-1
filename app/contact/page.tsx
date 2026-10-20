import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/motion/Reveal";
import RevealImage from "@/components/motion/RevealImage";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/ui/SectionHeading";
import { SITE, FAQS, tel } from "@/lib/content";
import { IMG } from "@/lib/images";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Partner, volunteer, ask a hard question about the finances, or just say hello.",
};

const OFFICES = [
  { city: "Bhopal", label: "Head office", lines: SITE.address },
  { city: "Call us", label: "Phone", lines: SITE.phones, href: tel },
  {
    city: "Write to us",
    label: "Email",
    lines: [SITE.email, SITE.careersEmail],
    href: (l: string) => `mailto:${l}`,
  },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact us"
        title="A representative responds."
        italic="Without automated delay."
        sub="Direct channels for partnership and stakeholder communication: responsive professional engagement and transparent financial inquiry support."
        lead="We welcome inquiries regarding strategic partnerships, volunteer opportunities, media engagements, or financial allocation transparency, with financial governance inquiries prioritized."
        image={IMG.trainingGroup}
      />

      <section className="bg-white py-20 md:py-28">
        <div className="shell grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <h2 className="display text-[1.74rem] leading-tight text-ink sm:text-[2.17rem]">
                Tell us what you&apos;re after.
              </h2>
            </Reveal>
            <div className="mt-12">
              <ContactForm />
            </div>
          </div>

          <div className="lg:col-span-4 lg:col-start-9">
            <div className="lg:sticky lg:top-32">
              <RevealImage
                id={IMG.campBanner}
                alt="Teachers and the Broadarks team after a vision screening training"
                className="aspect-[4/5] w-full"
                sizes="(max-width: 1024px) 100vw, 30vw"
              />

              <Reveal delay={0.1}>
                <div className="mt-10 space-y-6 border-t border-line pt-8">
                  <div>
                    <p className="eyebrow text-ink-50">Email</p>
                    <a
                      href={`mailto:${SITE.email}`}
                      className="link-underline mt-2 inline-block text-[1.05rem] text-ink"
                    >
                      {SITE.email}
                    </a>
                  </div>
                  <div>
                    <p className="eyebrow text-ink-50">Careers</p>
                    <a
                      href={`mailto:${SITE.careersEmail}`}
                      className="link-underline mt-2 inline-block text-[1.05rem] text-ink"
                    >
                      {SITE.careersEmail}
                    </a>
                  </div>
                  <div>
                    <p className="eyebrow text-ink-50">Phone</p>
                    {SITE.phones.map((p) => (
                      <a
                        key={p}
                        href={tel(p)}
                        className="link-underline mt-2 block w-fit text-[1.05rem] text-ink"
                      >
                        {p}
                      </a>
                    ))}
                    <p className="mt-1 text-sm text-ink-50">Mon–Fri, 10am–6pm IST</p>
                  </div>
                  <div>
                    <p className="eyebrow text-ink-50">Elsewhere</p>
                    <ul className="mt-3 flex flex-wrap gap-4 text-sm">
                      {SITE.socials.map((s) => (
                        <li key={s.label}>
                          <a
                            href={s.href}
                            target="_blank"
                            rel="noreferrer"
                            className="link-underline text-ink-70 hover:text-ink"
                          >
                            {s.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* offices */}
      <section className="border-y border-line bg-sand py-20 md:py-24">
        <div className="shell">
          <p className="eyebrow mb-10 text-ink-50">
            <span className="text-brand">02</span>
            <span className="mx-3 inline-block h-px w-8 translate-y-[-3px] bg-ink/20" />
            Where to find us
          </p>
          <div className="grid gap-px md:grid-cols-3">
            {OFFICES.map((o, i) => (
              <Reveal key={o.city} delay={i * 0.08}>
                <div className="group h-full border-t border-line pt-7 md:pr-10">
                  <p className="eyebrow text-brand">{o.label}</p>
                  <h3 className="display mt-4 text-[1.57rem] leading-none text-ink">{o.city}</h3>
                  <address className="mt-4 space-y-1 text-sm not-italic leading-relaxed text-ink-70">
                    {o.lines.map((l) => (
                      <p key={l}>
                        {o.href ? (
                          <a href={o.href(l)} className="link-underline hover:text-ink">
                            {l}
                          </a>
                        ) : (
                          l
                        )}
                      </p>
                    ))}
                  </address>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* faq */}
      <section className="bg-white py-24 md:py-32">
        <div className="shell grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-32">
              <SectionHeading
                index="03"
                eyebrow="Asked often enough to answer here"
                title="Frequently asked questions and governance standards."
                sub="Institutional compliance, regulatory certifications, and operational audits."
              />
            </div>
          </div>
          <dl className="lg:col-span-7 lg:col-start-6">
            {FAQS.map((f, i) => (
              <Reveal key={f.q} delay={i * 0.06}>
                <div className="group border-t border-line py-7 transition-colors duration-500 hover:border-brand">
                  <dt className="display text-[1.17rem] leading-snug text-ink">{f.q}</dt>
                  <dd className="mt-3 max-w-[56ch] leading-relaxed text-ink-70">{f.a}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>
    </>
  );
}

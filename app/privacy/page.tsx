import type { Metadata } from "next";
import Reveal from "@/components/motion/Reveal";
import { PRIVACY } from "@/lib/privacy";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How BroadArks Foundation handles information about visitors, donors, programme participants, volunteers and partners.",
};

const G = PRIVACY.grievance;

export default function PrivacyPage() {
  return (
    <article className="bg-white">
      <header className="shell pb-14 pt-36 md:pb-20 md:pt-44">
        <Reveal>
          <p className="eyebrow text-ink-50">Legal</p>
          <h1 className="display mt-6 text-[clamp(2.4rem,6vw,4.35rem)] leading-[1.02] text-ink">
            Privacy Policy
          </h1>
          <p className="mt-6 text-sm text-ink-50">
            Effective date: {PRIVACY.effective} · Version {PRIVACY.version}
          </p>
        </Reveal>
      </header>

      <div className="shell grid gap-12 border-t border-line pb-24 pt-14 md:pb-32 lg:grid-cols-12">
        <aside className="hidden lg:col-span-3 lg:block">
          <nav className="sticky top-32">
            <p className="eyebrow text-ink-50">On this page</p>
            <ol className="mt-4 space-y-2 text-sm">
              {PRIVACY.sections.map((s, i) => (
                <li key={s.title}>
                  <a href={`#s${i + 1}`} className="link-underline text-ink-70 hover:text-ink">
                    {s.title}
                  </a>
                </li>
              ))}
              <li>
                <a href="#grievance" className="link-underline text-ink-70 hover:text-ink">
                  Privacy contact and Grievance Officer
                </a>
              </li>
              <li>
                <a href="#changes" className="link-underline text-ink-70 hover:text-ink">
                  Changes to this policy
                </a>
              </li>
            </ol>
          </nav>
        </aside>

        <div className="max-w-[68ch] lg:col-span-8 lg:col-start-5">
          {PRIVACY.sections.map((s, i) => (
            <section key={s.title} id={`s${i + 1}`} className="scroll-mt-32">
              <h2 className="display mt-14 text-[1.5rem] leading-tight text-ink first:mt-0">
                {s.title}
              </h2>
              {s.body.map((b, j) =>
                typeof b === "string" ? (
                  <p key={j} className="mt-5 leading-relaxed text-ink-70">
                    {b}
                  </p>
                ) : (
                  <ul key={j} className="mt-5 space-y-3">
                    {b.list.map((it) => (
                      <li key={it} className="flex gap-4 leading-relaxed text-ink-70">
                        <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                        {it}
                      </li>
                    ))}
                  </ul>
                ),
              )}
            </section>
          ))}

          <section id="grievance" className="mt-14 scroll-mt-32 border-y border-line py-8">
            <h2 className="display text-[1.5rem] leading-tight text-ink">
              Privacy contact and Grievance Officer
            </h2>
            <address className="mt-5 space-y-1 not-italic leading-relaxed text-ink-70">
              <p className="text-ink">BroadArks Foundation</p>
              <p>
                Attention: {G.name}; {G.role}
              </p>
              <p>
                Email:{" "}
                <a href={`mailto:${G.email}`} className="link-underline text-ink">
                  {G.email}
                </a>
              </p>
              <p>
                Telephone:{" "}
                <a href={`tel:${G.phone.replace(/\s/g, "")}`} className="link-underline text-ink">
                  {G.phone}
                </a>
              </p>
              <p>{G.address}</p>
            </address>
          </section>

          <section id="changes" className="scroll-mt-32">
            <h2 className="display mt-14 text-[1.5rem] leading-tight text-ink">
              Changes to this policy
            </h2>
            <p className="mt-5 leading-relaxed text-ink-70">{PRIVACY.changes}</p>
          </section>
        </div>
      </div>
    </article>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Initials from "@/components/ui/Initials";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/motion/Reveal";
import PostCard, { fmtDate } from "@/components/PostCard";
import CTABand from "@/components/CTABand";
import { POSTS } from "@/lib/content";
import { IMG, img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Journal",
  description:
    "Field notes, method and finances — what we are learning, written down as it happens.",
};

export default function BlogPage() {
  const [lead, ...rest] = POSTS;

  return (
    <>
      <PageHero
        eyebrow="Journal"
        title="Working notes,"
        italic="published early."
        lead="We write these mostly for ourselves — to force the thinking into sentences before it hardens into policy. Three pieces so far this year."
        image={IMG.trainerScreen}
      />

      {/* lead post */}
      <section className="bg-white pb-20">
        <div className="shell">
          <Reveal>
            <Link href={`/blog/${lead.slug}`} className="group grid gap-10 lg:grid-cols-12">
              <div className="relative aspect-[16/10] overflow-hidden bg-sky-100 lg:col-span-7">
                <Image
                  src={img(lead.cover, 1400)}
                  alt={lead.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 58vw"
                  className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.05]"
                />
                <span className="absolute left-4 top-4 bg-white/95 px-3 py-1.5 eyebrow text-ink">
                  Latest · {lead.category}
                </span>
              </div>

              <div className="flex flex-col justify-center lg:col-span-5">
                <p className="eyebrow text-ink-50">
                  {fmtDate(lead.date)} · {lead.readTime}
                </p>
                <h2 className="display mt-4 text-[1.74rem] leading-[1.08] text-ink sm:text-[2.35rem]">
                  <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:bg-[length:100%_1px]">
                    {lead.title}
                  </span>
                </h2>
                <p className="mt-5 max-w-[48ch] text-[1.02rem] leading-relaxed text-ink-70">
                  {lead.dek}
                </p>
                <div className="mt-8 flex items-center gap-3 border-t border-line pt-6">
                  <Initials name={lead.author.name} className="h-10 w-10 text-[0.8rem]" />
                  <span className="text-sm">
                    <b className="block font-medium text-ink">{lead.author.name}</b>
                    <span className="text-ink-50">{lead.author.role}</span>
                  </span>
                </div>
              </div>
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-white pb-24 md:pb-32">
        <div className="shell">
          <div className="mb-12 flex items-center gap-4 border-t border-line pt-8">
            <p className="eyebrow text-ink-50">More from the journal</p>
            <span className="h-px flex-1 bg-line" />
            <p className="eyebrow text-ink-50">{POSTS.length} pieces</p>
          </div>

          <div className="grid gap-12 md:grid-cols-2 md:gap-10">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1} className="md:row-span-4 md:grid md:grid-rows-subgrid md:gap-y-0">
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        image={IMG.seatedBanner}
        eyebrow="Stay close"
        title="One letter a quarter. Nothing else, ever."
        lead="Programme updates, the numbers behind them, and what we got wrong. Unsubscribe in one click."
        primary={{ href: "/contact", label: "Join the list" }}
      />
    </>
  );
}

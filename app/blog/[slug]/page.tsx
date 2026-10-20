import type { Metadata } from "next";
import Initials from "@/components/ui/Initials";
import Link from "next/link";
import { notFound } from "next/navigation";
import Reveal from "@/components/motion/Reveal";
import RevealImage from "@/components/motion/RevealImage";
import PostCard, { fmtDate } from "@/components/PostCard";
import CTABand from "@/components/CTABand";
import ReadingProgress from "@/components/ReadingProgress";
import { POSTS } from "@/lib/content";
import { IMG } from "@/lib/images";

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/blog/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.dek };
}

export default async function PostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = POSTS.filter((p) => p.slug !== post.slug);

  return (
    <>
      <ReadingProgress />

      <article>
        <header className="shell pb-14 pt-32 md:pt-40">
          <Reveal y={14}>
            <p className="eyebrow mb-8 flex flex-wrap items-center gap-3 text-ink-50">
              <Link href="/blog" className="link-underline text-ink">
                Journal
              </Link>
              <span className="h-px w-6 bg-ink/20" />
              <span className="text-brand">{post.category}</span>
              <span className="h-px w-6 bg-ink/20" />
              {fmtDate(post.date)} · {post.readTime}
            </p>
          </Reveal>

          <Reveal delay={0.05}>
            <h1 className="display max-w-[20ch] text-[clamp(2rem,5.22vw,4rem)] leading-[1.02] text-ink">
              {post.title}
            </h1>
          </Reveal>

          <Reveal delay={0.12}>
            <p className="mt-8 max-w-[56ch] text-[1.15rem] leading-relaxed text-ink-70">
              {post.dek}
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="mt-10 flex items-center gap-3">
              <Initials name={post.author.name} className="h-12 w-12 text-sm" />
              <span className="text-sm">
                <b className="block font-medium text-ink">{post.author.name}</b>
                <span className="text-ink-50">{post.author.role}</span>
              </span>
            </div>
          </Reveal>
        </header>

        <div className="shell">
          <RevealImage
            id={post.cover}
            alt={post.title}
            className="aspect-[16/9] w-full"
            sizes="100vw"
            width={1900}
            priority
          />
        </div>

        <div className="shell grid gap-12 py-16 md:py-24 lg:grid-cols-12">
          <aside className="lg:col-span-3">
            <div className="lg:sticky lg:top-32">
              <p className="eyebrow text-ink-50">Share</p>
              <ul className="mt-4 space-y-2 text-sm">
                {["Copy link", "LinkedIn", "X", "WhatsApp"].map((s) => (
                  <li key={s}>
                    <span className="link-underline cursor-pointer text-ink-70 hover:text-ink">
                      {s}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="mt-10 border-t border-line pt-6">
                <p className="eyebrow text-ink-50">Filed under</p>
                <p className="mt-3 text-sm text-ink">{post.category}</p>
              </div>
            </div>
          </aside>

          <div className="lg:col-span-8 lg:col-start-5">
            {post.body.map((b, i) => {
              if (b.type === "h2")
                return (
                  <Reveal key={i} y={18}>
                    <h2 className="display mt-14 text-[1.65rem] leading-tight text-ink first:mt-0">
                      {b.text}
                    </h2>
                  </Reveal>
                );
              if (b.type === "quote")
                return (
                  <Reveal key={i} y={18}>
                    <blockquote className="my-12 border-l-2 border-brand pl-7">
                      <p className="serif text-[1.6rem] italic leading-snug text-ink">
                        {b.text}
                      </p>
                    </blockquote>
                  </Reveal>
                );
              if (b.type === "list")
                return (
                  <Reveal key={i} y={18}>
                    <ul className="my-10 space-y-3 border-y border-line py-8">
                      {b.items?.map((it) => (
                        <li key={it} className="flex gap-4 text-[1.02rem] text-ink-70">
                          <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
                          {it}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                );
              return (
                <Reveal key={i} y={18}>
                  <p className="mt-6 max-w-[62ch] text-[1.08rem] leading-[1.8] text-ink-70">
                    {b.text}
                  </p>
                </Reveal>
              );
            })}

            <Reveal y={18}>
              <RevealImage
                id={post.inline}
                alt=""
                className="my-16 aspect-[16/10] w-full"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
            </Reveal>

            <Reveal y={18}>
              <div className="flex flex-col gap-5 border-t border-line pt-8 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <Initials name={post.author.name} className="h-12 w-12 text-sm" />
                  <span className="text-sm">
                    <b className="block font-medium text-ink">{post.author.name}</b>
                    <span className="text-ink-50">{post.author.role}</span>
                  </span>
                </div>
                <Link href="/blog" className="link-underline text-sm text-ink">
                  ← Back to the journal
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </article>

      <section className="border-t border-line bg-sand py-20 md:py-28">
        <div className="shell">
          <p className="eyebrow mb-10 text-ink-50">Keep reading</p>
          <div className="grid gap-12 md:grid-cols-2 md:gap-10">
            {more.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1} className="md:row-span-4 md:grid md:grid-rows-subgrid md:gap-y-0">
                <PostCard post={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        image={IMG.trainees}
        eyebrow="Take part"
        title="Reading is good. Funding it is better."
        lead="₹1,000 is a month of learning-centre place for one child, hot meal included."
      />
    </>
  );
}

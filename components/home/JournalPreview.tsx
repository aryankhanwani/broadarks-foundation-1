import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import SplitWords from "@/components/motion/SplitWords";
import PostCard from "@/components/PostCard";
import { POSTS } from "@/lib/content";

export default function JournalPreview() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="shell">
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal y={14}>
              <p className="eyebrow mb-5 text-ink-50">
                <span className="text-brand">07</span>
                <span className="mx-3 inline-block h-px w-8 translate-y-[-3px] bg-ink/20" />
                Journal
              </p>
            </Reveal>
            <SplitWords
              text="What we're learning, written down."
              className="display max-w-[16ch] text-[2.09rem] leading-[1.02] text-ink sm:text-[2.78rem]"
            />
          </div>
          <Reveal delay={0.2}>
            <Link href="/blog" className="link-underline pb-2 text-sm text-ink">
              All writing →
            </Link>
          </Reveal>
        </div>

        <div className="grid gap-12 md:grid-cols-3 md:gap-8">
          {POSTS.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <PostCard post={p} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

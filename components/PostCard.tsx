import Image from "next/image";
import Link from "next/link";
import type { Post } from "@/lib/content";
import { img } from "@/lib/images";

export const fmtDate = (d: string) =>
  new Date(d).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

export default function PostCard({ post, large = false }: { post: Post; large?: boolean }) {
  return (
    // Four rows (cover, date, title, dek) on a subgrid, so cards placed side by
    // side line up row by row even when one title wraps further than another.
    <article className="group row-span-4 grid grid-rows-subgrid gap-y-0">
      <Link href={`/blog/${post.slug}`} className="row-span-4 grid grid-rows-subgrid gap-y-0">
        <div
          className={`relative overflow-hidden bg-sky-100 ${
            large ? "aspect-[16/10]" : "aspect-[4/3]"
          }`}
        >
          <Image
            src={img(post.cover, large ? 1400 : 800)}
            alt={post.title}
            fill
            sizes={large ? "(max-width: 1024px) 100vw, 60vw" : "(max-width: 768px) 100vw, 33vw"}
            className="object-cover transition-transform duration-[1.4s] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.06]"
          />
          <span className="absolute left-4 top-4 bg-white/95 px-3 py-1.5 eyebrow text-ink">
            {post.category}
          </span>
        </div>

        <p className="eyebrow mt-6 text-ink-50">
          {fmtDate(post.date)} · {post.readTime}
        </p>
        <h3
          className={`display mt-3 leading-[1.08] text-ink ${
            large ? "text-[2rem] sm:text-[2.6rem]" : "text-[1.5rem]"
          }`}
        >
          <span className="bg-[linear-gradient(currentColor,currentColor)] bg-[length:0%_1px] bg-left-bottom bg-no-repeat transition-[background-size] duration-700 ease-[cubic-bezier(.16,1,.3,1)] group-hover:bg-[length:100%_1px]">
            {post.title}
          </span>
        </h3>
        <p
          className={`mt-3 leading-relaxed text-ink-70 ${
            large ? "max-w-[52ch] text-[1.02rem]" : "text-[0.92rem]"
          }`}
        >
          {post.dek}
        </p>
      </Link>
    </article>
  );
}

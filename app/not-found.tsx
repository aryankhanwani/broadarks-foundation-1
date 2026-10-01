import Link from "next/link";
import Button from "@/components/ui/Button";
import RevealImage from "@/components/motion/RevealImage";
import { NAV } from "@/lib/content";
import { IMG } from "@/lib/images";

export default function NotFound() {
  return (
    <section className="shell grid min-h-[100svh] items-center gap-14 py-32 lg:grid-cols-12">
      <div className="lg:col-span-6">
        <p className="eyebrow mb-8 flex items-center gap-3 text-ink-50">
          <span className="h-1.5 w-1.5 rounded-full bg-brand" />
          Error 404
        </p>
        <h1 className="display text-[clamp(2.26rem,6.09vw,4.35rem)] leading-[1.0] text-ink">
          This page went
          <span className="serif block text-[1.06em] italic text-brand">out to the field.</span>
        </h1>
        <p className="mt-8 max-w-[44ch] leading-relaxed text-ink-70">
          The link you followed doesn&apos;t exist any more — or never did.
          Here&apos;s everything that does.
        </p>

        <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm">
          {NAV.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className="link-underline text-ink-70 hover:text-ink">
                {n.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10">
          <Button href="/">Back to the homepage</Button>
        </div>
      </div>

      <div className="lg:col-span-5 lg:col-start-8">
        <RevealImage
          id={IMG.kidsBoots}
          alt=""
          className="aspect-[4/5] w-full"
          sizes="(max-width: 1024px) 100vw, 40vw"
        />
      </div>
    </section>
  );
}

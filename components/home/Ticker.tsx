import Marquee from "@/components/motion/Marquee";

const ITEMS = [
  "63 learning centres",
  "180 community health workers",
  "2.1M meals served",
  "48 women's collectives",
  "34 solar micro-grids",
  "412 communities",
  "91% reaches the field",
];

export default function Ticker() {
  return (
    <div className="border-y border-line bg-brand py-5 text-white">
      <Marquee speed={46}>
        {ITEMS.map((t, i) => (
          <span key={`${t}-${i}`} className="flex items-center gap-10">
            <span className="serif text-[1.6rem] sm:text-[2rem]">{t}</span>
            <svg viewBox="0 0 24 24" className="h-3 w-3 shrink-0 opacity-70" aria-hidden>
              <path
                d="M12 0l2.4 9.6L24 12l-9.6 2.4L12 24l-2.4-9.6L0 12l9.6-2.4z"
                fill="currentColor"
              />
            </svg>
          </span>
        ))}
      </Marquee>
    </div>
  );
}

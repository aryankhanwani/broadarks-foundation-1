/** Monogram stand-in for a person's photo; the name itself is always printed alongside. */
export default function Initials({ name, className = "" }: { name: string; className?: string }) {
  const letters = name
    .split(/\s+/)
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <span
      aria-hidden
      className={`flex shrink-0 items-center justify-center rounded-full bg-brand/10 font-medium tracking-wide text-brand-700 ${className}`}
    >
      {letters}
    </span>
  );
}

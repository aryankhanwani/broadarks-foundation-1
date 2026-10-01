export default function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 32 32"
        className="h-7 w-7 shrink-0"
        aria-hidden
        fill="none"
      >
        <circle cx="16" cy="16" r="15" className="stroke-current" strokeWidth="1.25" opacity="0.35" />
        <path
          d="M4 22c4.2-8.6 9.1-13 12-13s7.8 4.4 12 13"
          className="stroke-current"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <path
          d="M9.5 24.5c2.9-5.2 5.4-7.8 6.5-7.8s3.6 2.6 6.5 7.8"
          className="stroke-current"
          strokeWidth="2.1"
          strokeLinecap="round"
          opacity="0.45"
        />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="serif text-[1.2rem] tracking-tight">Broadarks</span>
        <span className="eyebrow text-[0.55rem] opacity-60">Foundation</span>
      </span>
    </span>
  );
}

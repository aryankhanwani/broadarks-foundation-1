import Image from "next/image";

/** Full-colour lockup on light grounds, all-white reverse on dark ones. */
const SRC = { dark: "/brand/logo.png", light: "/brand/logo-white.png" };

export default function Logo({
  tone = "dark",
  className = "",
}: {
  /** Colour of the text it sits among: "dark" on light backgrounds, "light" on dark. */
  tone?: "dark" | "light";
  className?: string;
}) {
  return (
    <Image
      src={SRC[tone]}
      alt="BroadArks Foundation"
      width={975}
      height={200}
      priority
      className={`h-9 w-auto md:h-10 ${className}`}
    />
  );
}

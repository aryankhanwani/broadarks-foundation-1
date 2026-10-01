import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Instrument_Sans,
  Instrument_Serif,
} from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollProgress from "@/components/motion/ScrollProgress";
import { SITE } from "@/lib/content";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });
/** Headlines and UI. */
const display = Instrument_Sans({
  variable: "--font-display",
  subsets: ["latin"],
});

/** Accent only — highlighted phrases, pull quotes, numerals, the wordmark. */
const serif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://broadarks.org"),
  title: {
    default: `${SITE.name} — ${SITE.tagline}`,
    template: `%s — ${SITE.name}`,
  },
  description: SITE.description,
  openGraph: {
    title: SITE.name,
    description: SITE.description,
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} ${display.variable} ${serif.variable} h-full`}
    >
      <body className="min-h-full">
        <SmoothScroll />
        <ScrollProgress />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

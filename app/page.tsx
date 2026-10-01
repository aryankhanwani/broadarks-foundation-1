import Hero from "@/components/home/Hero";
import Ticker from "@/components/home/Ticker";
import Mission from "@/components/home/Mission";
import Stats from "@/components/home/Stats";
import ProgramsScroll from "@/components/home/ProgramsScroll";
import StoriesStack from "@/components/home/StoriesStack";
import Gallery from "@/components/home/Gallery";
import Partners from "@/components/home/Partners";
import JournalPreview from "@/components/home/JournalPreview";
import CTABand from "@/components/CTABand";
import { IMG } from "@/lib/images";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Ticker />
      <Mission />
      <Stats />
      <ProgramsScroll />
      <StoriesStack />
      <Gallery />
      <Partners />
      <JournalPreview />
      <CTABand
        image={IMG.groupHug}
        title="₹1,000 is a month of school."
        lead="It is also a hot meal every weekday, a library card, and one adult who knows the child's name and uses it."
        secondary={{ href: "/contact", label: "Talk to us instead" }}
      />
    </>
  );
}

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
import { HOME_COPY } from "@/lib/homeCopy";

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
        image={IMG.schoolAssembly}
        eyebrow={HOME_COPY.cta.eyebrow}
        title={HOME_COPY.cta.title}
        sub={HOME_COPY.cta.sub}
        lead={HOME_COPY.cta.lead}
        primary={HOME_COPY.cta.primary}
        secondary={HOME_COPY.cta.secondary}
      />
    </>
  );
}

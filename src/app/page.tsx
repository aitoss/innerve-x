
import Footer from "@/components/layout/Footer";
import DividerNoArrow from "@/components/ui/DividerNoArrrow";
import Divider from "@/components/ui/DividerTest";
import ClockBannerSection from "@/sections/ClockBannerSection";
import FaqSection from "@/sections/FaqSection";
import HeroSectionAnimation from "@/sections/HeroSectionAnimation";
import PrizePoolSection from "@/sections/prizePoolSection";
import TimelineSection from "@/sections/timelineSection";
import TrackSection from "@/sections/TrackSecction";
import WantToSponsorsUsSection from "@/sections/WantToSponsorsUsSection";
import VillageGirlAnimation from "@/sections/VillageGirlAnimation";
import Image from "next/image";
import Audio from "@/components/ui/Audio";

export default function Home() {
  return (
    <main>
      <Audio />
      <div data-section="hero"  >
        <HeroSectionAnimation />
      </div>
      <DividerNoArrow />
      <div data-section="clock"  >
        <ClockBannerSection />
      </div>
      <div data-section="prizepool"  >
        <PrizePoolSection />
      </div>
      <DividerNoArrow />
      <div data-section="tracks"  >
        <TrackSection />
      </div>
      <Divider />
      <div data-section="timeline"  >
        <TimelineSection />
      </div>
      <Divider />
      <div data-section="sponsorus"  >
        <WantToSponsorsUsSection />
      </div>
      <Divider />
      <div data-section="faq"  >
        <FaqSection />
      </div>
      <DividerNoArrow />
      <div data-section="contact"  >
        <Footer />
      </div>
      <VillageGirlAnimation />
    </main>
  );
}

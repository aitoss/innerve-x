import ScrollBackToTopButton from "@/components/ui/scrollBackToTopButton";
import ClockSection from "@/sections/clockSection";
import HeroSectionAnimation from "@/sections/HeroSectionAnimation";
import PrizePoolSection from "@/sections/prizePoolSection";
import TimelineSection from "@/sections/timelineSection";
import TrackSection from "@/sections/TrackSecction";

export default function TestShashwatPage() {
  return (
    <main>
      <HeroSectionAnimation />
      <ClockSection />
      <PrizePoolSection />
      <TrackSection />
      <TimelineSection />
      <ScrollBackToTopButton /> 
    </main>
  );
}

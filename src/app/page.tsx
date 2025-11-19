"use client";

import { Suspense, lazy, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import DividerNoArrow from "@/components/ui/DividerNoArrrow";
import Divider from "@/components/ui/DividerTest";
import ClockBannerSection from "@/sections/ClockBannerSection";
import HeroSectionAnimation from "@/sections/HeroSectionAnimation";
import LoadingScreen from "@/sections/LoadingScreen";
import Audio from "@/components/ui/Audio";
import ScrollBackToTopButton from "@/components/ui/scrollBackToTopButton";
import { motion } from "motion/react"

// Lazy load below-the-fold sections
const PrizePoolSection = dynamic(() => import("@/sections/prizePoolSection"), {
  loading: () => <div className="min-h-screen" />,
  ssr: false,
});

const TrackSection = dynamic(() => import("@/sections/TrackSecction"), {
  loading: () => <div className="min-h-screen" />,
  ssr: false,
});

const TimelineSection = dynamic(() => import("@/sections/timelineSection"), {
  loading: () => <div className="min-h-screen" />,
  ssr: false,
});

const WantToSponsorsUsSection = dynamic(
  () => import("@/sections/WantToSponsorsUsSection"),
  {
    loading: () => <div className="min-h-screen" />,
    ssr: false,
  }
);

const FaqSection = dynamic(() => import("@/sections/FaqSection"), {
  loading: () => <div className="min-h-screen" />,
  ssr: false,
});

const Footer = dynamic(() => import("@/components/layout/Footer"), {
  loading: () => <div className="min-h-[400px]" />,
  ssr: false,
});

const VillageGirlAnimation = dynamic(
  () => import("@/sections/VillageGirlAnimation"),
  {
    ssr: false,
  }
);

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isContentReady, setIsContentReady] = useState(false);

  useEffect(() => {
    // Simulate minimum loading time for smooth transition
    const minLoadTime = setTimeout(() => {
      setIsLoading(false);
      // Start revealing content after loading screen exits
      setTimeout(() => {
        setIsContentReady(true);
      }, 300);
    }, 2500);

    return () => clearTimeout(minLoadTime);
  }, []);

  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <motion.main
      className="relative w-full overflow-x-hidden bg-black"
    >
      <Audio />
      <div id="hero-section" data-section="hero">
        <HeroSectionAnimation />
      </div>
      <DividerNoArrow />
      <div id="clock-section" data-section="clock">
        <ClockBannerSection />
      </div>
      <div id="prizepool-section" data-section="prizepool">
        <PrizePoolSection />
      </div>
      <DividerNoArrow />
      <div id="track-section" data-section="tracks">
        <TrackSection />
      </div>
      <Divider />
      <div id="timeline-section" data-section="timeline">
        <TimelineSection />
      </div>
      <Divider />
      <div id="wtsu-section" data-section="sponsorus">
        <WantToSponsorsUsSection />
      </div>
      <Divider />
      <div id="faq-section" data-section="faq">
        <FaqSection />
      </div>
      <DividerNoArrow />
      <div id="footer-section" data-section="contact">
        <Footer />
      </div>
      <VillageGirlAnimation />
      <ScrollBackToTopButton />
    </motion.main>
  );
}

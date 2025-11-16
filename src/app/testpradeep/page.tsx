"use client";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/sections/HeroSection";
import SvgTo3D from "@/components/ui/svgTo3D"
import CharacterScroll from "@/sections/VillageGirlAnimation";
import HeroSectionAnimation from "@/sections/HeroSectionAnimation";
import ClockSection from "@/sections/clockSection";
import PrizePoolSection from "@/sections/prizePoolSection";
import CountdownTimerCard from "@/components/layout/countdownTimerCard";
import TrackSection from "@/sections/TrackSecction";
import WantToSponsorsUsSection from "@/sections/WantToSponsorsUsSection";
import Divider from "@/components/ui/DividerTest";
import Footer from "@/components/layout/Footer";
import TimelineSection from "@/sections/timelineSection";
import DividerNoArrow from "@/components/ui/DividerNoArrrow";
import Galaxy from "@/components/ui/TracksElements/Glaxy";
import FaqSection from "@/sections/FaqSection";
import ClockBannerSection from "@/sections/ClockBannerSection";


export default function () {
    return (
        <>
            {/* <HeroSection /> */}
            {/* <CharacterScroll /> */}
            <HeroSectionAnimation />
            <ClockBannerSection />
            {/* <div className="h-screen">ghdfghdfghdfg</div>
            <div className="h-screen">dhdfhgfdgh</div>
            <div className="h-screen">dhdfhgfdhgdf</div>
            <div className="h-screen">dghdghgfdhf</div> */}
            {/* <Divider /> */}
            {/* <ClockSection /> */}
            <PrizePoolSection />
            <DividerNoArrow />
            <TrackSection />    
            <DividerNoArrow />
            <TimelineSection />
            <Divider />
            <WantToSponsorsUsSection />
            <Divider />
            <FaqSection />
            <DividerNoArrow />
            {/* <Divider /> */}
            <Footer />

        </>
    );
}

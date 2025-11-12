"use client";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/sections/HeroSection";
import SvgTo3D from "@/components/ui/svgTo3D"
import CharacterScroll from "@/sections/LoadingScreen";
import HeroSectionAnimation from "@/sections/HeroSectionAnimation";
import ClockSection from "@/sections/clockSection";
import PrizePoolSection from "@/sections/prizePoolSection";
import CountdownTimerCard from "@/components/layout/countdownTimerCard";
import TrackSection from "@/sections/TrackSecction";
import WantToSponsorsUsSection from "@/sections/WantToSponsorsUsSection";

export default function () {
    return ( 
        <>
            {/* <HeroSection /> */}
            <HeroSectionAnimation />

            {/* <div className="flex justify-center absolute top-220 left-[25%] z-50">
                <ClockSection />
            </div>
            <PrizePoolSection /> */}
            
            {/* <div className="h-screen relative w-full flex justify-center items-center text-6xl border-b-2 border-gray-300" >hii</div>
            <div className="h-screen w-full flex justify-center items-center text-6xl border-b-2 border-gray-300" > Test to scroll</div>
            <div className="h-screen w-full flex justify-center items-center text-6xl border-b-2 border-gray-300" > Test to scroll</div> */}

            <TrackSection />
            {/* <WantToSponsorsUsSection/> */}

        </>
    );
}

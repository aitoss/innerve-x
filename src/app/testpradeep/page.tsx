"use client";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/sections/HeroSection";
import SvgTo3D from "@/components/ui/svgTo3D"
import CharacterScroll from "@/sections/LoadingScreen";
import HeroSectionAnimation from "@/sections/HeroSectionAnimation";
import ClockSection from "@/sections/clockSection";
import PrizePoolSection from "@/sections/prizePoolSection";
import CountdownTimerCard from "@/components/layout/countdownTimerCard";

export default function () {
    return ( 
        <>
            {/* <HeroSection /> */}
            <HeroSectionAnimation />

            {/* <div className="flex justify-center absolute top-220 left-[25%] z-50">
                <ClockSection />
            </div>
            <PrizePoolSection /> */}
            
            <div className="h-screen relative w-full flex justify-center items-center text-6xl border-b-2 border-gray-300" >
                <div className="absolute top-[10%] left-[15%]  bg-red-400">first</div>
                <div className="absolute top-[45%] left-[60%]  bg-blue-400">second</div>
                <div className="absolute top-[70%] left-[25%]  bg-green-400">third</div>
                <div className="absolute top-[20%] left-[75%]  bg-yellow-400">fourth</div>
                <div className="absolute top-[55%] left-[40%]  bg-purple-400">fifth</div>
                <div className="absolute top-[85%] left-[65%]  bg-pink-400">sixth</div>
            </div>
            <div className="h-screen w-full flex justify-center items-center text-6xl border-b-2 border-gray-300" > Test to scroll</div>
            <div className="h-screen w-full flex justify-center items-center text-6xl border-b-2 border-gray-300" > Test to scroll</div>
            {/* <SvgTo3D /> */}
        </>
    );
}

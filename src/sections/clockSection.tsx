"use client";

import CountdownTimerCard from "@/components/layout/countdownTimerCard";
import EventCardAnimated from "@/components/layout/eventCardAnimation";
import { div } from "motion/react-client";
import Image from "next/image";
import PrizePoolClouds from "@/assets/svg/PrizePooltopclouds.svg";

export default function ClockSection() {
  return (
    <div className="relative  bg-[#BFEEFE]">
      {/* Cloud Background */}
      <div className="absolute z-5">
        <Image 
          src={PrizePoolClouds} 
          alt="clouds background" 
          className="w-screen h-auto"
        />
      </div>
      
      <div className="relative w-full -top-32 h-full z-20 flex justify-center">
        <div className="z-10">
          <CountdownTimerCard />
        </div>
        <div className="absolute z-5 -top-4">
          <EventCardAnimated />
        </div>
      </div>
    </div>
  );
}

"use client";

import CountdownTimerCard from "@/components/layout/countdownTimerCard";
import EventCardAnimated from "@/components/layout/eventCardAnimation";
import { div } from "motion/react-client";
import Image from "next/image";
import PrizePoolClouds from "@/assets/svg/PrizePooltopclouds.svg";
import RopeImage from "@/components/ui/ClockElements/rope";

export default function   ClockSection() {
  return (
    <div className="relative  bg-[#CCECF7]">
      {/* Cloud Background */}
      <div className="absolute z-5">
        <Image
          src={PrizePoolClouds}
          alt="clouds background"
          className="w-screen h-full"
          draggable={false}
        />
      </div>

      <div className="relative w-full -top-[45px] sm:-top-16 md:-top-[90px] lg:-top-32 h-full z-20 flex justify-center">
        <div className="z-10">
          <CountdownTimerCard />
        </div>
        <div className="absolute top-10 left-1/2 xl:-translate-x-[calc(50%+320px)]  md:-translate-x-[calc(-50%+220px)] sm:-translate-x-[calc(-50%+155px)] -translate-x-[calc(-50%+105px)]">
          <RopeImage />
        </div>
        <div className="absolute left-1/2 top-10 xl:translate-x-[calc(-50%+320px)] md:translate-x-[calc(-50%+220px)] sm:translate-x-[calc(-50%+150px)] translate-x-[calc(-50%+100px)]">
          <RopeImage />
        </div>
        <div className="absolute z-5 -top-1.5 sm:-top-2 md:-top-[11px] lg:-top-4 flex justify-center w-full">
          <EventCardAnimated />
        </div>
      </div>
    </div>
  );
}

"use client";

import PrizePoolCard from "@/components/ui/PrizepoolElements/prizePoolCard";
import { PrizepoolBottomForest } from "@/components/ui/PrizepoolElements/prizePoolImages";
import PrizePoolScroll from "@/components/ui/PrizepoolElements/prizePoolScroll";
import BalloonAnimation from "@/components/ui/PrizepoolElements/balloonAnimation";

export default function PrizePoolSection() {
  return (
    <div className="relative  flex flex-col md:pt-50  items-center  bg-linear-to-b from-[#CCECF7] to-[#BFEEFE]">
      <div className="flex justify-center">
        <PrizePoolScroll />
      </div>
      <PrizePoolCard />
      <div className=" -mt-30 sm:-mt-50 md:-mt-70 lg:-mt-90">
        <PrizepoolBottomForest />
      </div>
    </div>
  );
}

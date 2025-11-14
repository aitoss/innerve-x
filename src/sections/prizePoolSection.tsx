"use client";

import PrizePoolCard from "@/components/ui/PrizepoolElements/prizePoolCard";
import { PrizepoolBottomForest } from "@/components/ui/PrizepoolElements/prizePoolImages";
import PrizePoolScroll from "@/components/ui/PrizepoolElements/prizePoolScroll";
import BalloonAnimation from "@/components/ui/PrizepoolElements/balloonAnimation";

export default function PrizePoolSection() {
  return (
    <div className="relative flex flex-col pt-70 sm:pt-100 md:pt-150 lg:pt-200 items-center overflow-visible bg-linear-to-b from-[#CCECF7] to-[#BFEEFE]">
      <div className="overflow-x-hidden">

      <BalloonAnimation />
      </div>
      <div className="flex justify-center">
        <PrizePoolScroll />
      </div>
      <PrizePoolCard />
      <div className="-mt-70">

      <PrizepoolBottomForest /> 
      </div>
    </div>
  );
}

import PrizePoolCard from "@/components/ui/prizePoolCard";
import { HotAirBalloon, PrizepoolBottomForest } from "@/components/ui/prizePoolImages";
import PrizePoolScroll from "@/components/ui/prizePoolScroll";

export default function PrizePoolSection() {
  return (
    <div className="relative flex flex-col pt-200 items-center bg-linear-to-b from-[#CCECF7] to-[#BFEEFE]">
      <div className="absolute z-40 top-108 left-20">
        <HotAirBalloon />
      </div>
      <div className="flex justify-center">
        <PrizePoolScroll />
      </div>
      <PrizePoolCard />
      <PrizepoolBottomForest /> 
    </div>
  );
}

import PrizePoolCard from "@/components/ui/prizePoolCard";
import PrizePoolScroll from "@/components/ui/prizePoolScroll";


export default function PrizePoolSection() {



  return (
    <div className="flex flex-col items-center">
        <div className="flex justify-center">

        <PrizePoolScroll />
        </div>
        <PrizePoolCard />
    </div>
  );
}
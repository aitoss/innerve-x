import Image from "next/image";
import goldStorage1 from "@/assets/svg/storage_gold_1.svg";
import goldStorage2 from "@/assets/svg/storage_gold_2.svg";
import goldStorage3 from "@/assets/svg/storage_gold_3.svg";
import goldStorage4 from "@/assets/svg/storage_gold_4.svg";
import goldStorage5 from "@/assets/svg/storage_gold_5.svg";
import axe from "@/assets/svg/axe.svg";
import rectangle from "@/assets/svg/PrizePoolRectangle.svg";
import prizepoolCrown from "@/assets/svg/prizePoolCrown.svg";
import prizepoolHeadingPolygon from "@/assets/svg/prizePoolheadingPolygon.svg";
import prizepoolBottomForest from "@/assets/svg/Prizepoolforest.svg";
import hotAirBalloon from "@/assets/svg/PrizePoolHotAirBalloon.svg";

export function GoldStorage1Image() {
  return (
    <div>
      <Image src={goldStorage1} alt="Gold Storage 1" draggable={false}/>
    </div>
  );
}

export function GoldStorage2Image() {
  return (
    <div>
      <Image src={goldStorage2} alt="Gold Storage 2" draggable={false}/>
    </div>
  );
}

export function GoldStorage3Image() {
  return (
    <div>
      <Image src={goldStorage3} alt="Gold Storage 3" draggable={false}/>
    </div>
  );
}

export function GoldStorage4Image() {
  return (
    <div>
      <Image src={goldStorage4} alt="Gold Storage 4" draggable={false}/>
    </div>
  );
}

export function GoldStorage5Image() {
  return (
    <div>
      <Image src={goldStorage5} alt="Gold Storage 5" draggable={false}/>
    </div>
  );
}

export function AxeImage() {
  return (
    <div>
      <Image src={axe} alt="Axe" draggable={false}/>
    </div>
  );
}

export function Rectangle() {
  return (
    <div>
      <Image src={rectangle} alt="rectangle" draggable={false}/>
    </div>
  );
}

export function PrizepoolCrown() {
  return (
    <div>
      <Image src={prizepoolCrown} alt="prizepoolCrown" draggable={false}/>
    </div>
  );
}

export function PrizepoolHeadingPolygon() {
  return (
    <div>
      <Image src={prizepoolHeadingPolygon} alt="prizepoolHeadingPolygon" draggable={false}/>
    </div>
  );
}

export function PrizepoolBottomForest() {
  return (
    <div>
      <Image src={prizepoolBottomForest} className="w-lvw" alt="BottomForest" draggable={false}/>
    </div>
  );
}

export function HotAirBalloon() {
  return (
    <div>
      <Image src={hotAirBalloon} alt="hotAirBalloon" draggable={false}/>
    </div>
  );
}
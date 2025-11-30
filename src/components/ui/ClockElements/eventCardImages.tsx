import Image from "next/image";
import Plank from "@/assets/images/datePlank.png"
import Shield from "@/assets/svg/eventCardShield.svg"

export function PlankImage() {
  return (
    <div className="w-[245px] sm:w-[350px] md:w-[490px] lg:w-[700px]">
        <Image src={Plank} alt="" className="w-full h-auto" draggable={false}/>
    </div>
  );
}

export function EventCardShield() {
  return (
    <div className="w-[91px] sm:w-[130px] md:w-[182px] lg:w-[260px]">
        <Image src={Shield} alt="" className="w-full h-auto" draggable={false}/>
    </div>
  );
}
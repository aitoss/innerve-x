import Image from "next/image";
import countdownArrow from "@/assets/svg/arrow.svg";

export default function CountdownArrow() {
  return (
    <div className="w-full h-auto">
      <Image src={countdownArrow} alt="Countdown Arrow" className="w-full h-auto"  draggable={false}/>
    </div>
  );
}

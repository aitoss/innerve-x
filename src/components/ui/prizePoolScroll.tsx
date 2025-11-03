import Image from "next/image";
import Scroll from "@/assets/svg/scroll.svg"

export default function PrizePoolScroll() {



  return (
    <div className="relative">
        <Image src={Scroll} alt="" />
        <div className="absolute top-2/6 left-1/12 text-8xl text-white [text-shadow:0px_5px_0px_rgb(0_0_0/1.00)]">Prize Pool: 12 Lacs+</div>
    </div>
  );
}
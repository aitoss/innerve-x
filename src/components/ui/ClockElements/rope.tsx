import Image from "next/image";
import Rope from "@/assets/svg/finalRope.svg"

export default function RopeImage() {



  return (
    <div className="h-[180px] sm:h-[300px] md:h-[400px] lg:h-[500px] w-auto overflow-hidden">
        <Image src={Rope} alt="" className="h-full w-auto object-contain object-top" draggable={false} />
    </div>
  );
}
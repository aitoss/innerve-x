import Image from "next/image";
import clockImage from "@/assets/svg/clock.svg";

export default function ClockAnimation() {
    return (
        <div className="relative">
        <Image className="pt-[1.3px]" src={clockImage} alt="Clock Animation" width={100} height={100} />
        <div className="absolute top-[44%] left-[45%] w-9 h-3 bg-[#393635] spin-continuous border rounded-full"></div>
        </div>

    );
}
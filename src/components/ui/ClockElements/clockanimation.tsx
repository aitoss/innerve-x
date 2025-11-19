import Image from "next/image";
import clockImage from "@/assets/svg/clock.svg";

export default function ClockAnimation() {
    return (
        <div className="relative">
            <Image className="pt-[1.3px]" src={clockImage} alt="Clock Animation" width={100} height={100} />
            <div className="absolute scale-35 sm:scale-55 md:scale-73 lg:scale-89 xl:scale-100 top-[34%] sm:top-[38%] md:top-[41%] lg:top-[43.5%] left-[38%] sm:left-[41%] md:left-[45%] w-9 h-3 bg-[#393635] spin-continuous border rounded-full"></div>
        </div>

    );
}
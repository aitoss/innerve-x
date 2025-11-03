import Image from "next/image";
import DevfolioBg from "../../assets/webp/ApplyWDBG.webp"
import DEvfolioButtonCta from "../../assets/images/cta.png"
import Arrow from "../../assets/svg/ArrowDevfolio.svg"

export default function DevfolioButton() {
    return (
        <button className="relative w-[380px] h-[50px] items-center justify-center rounded-[50px] z-30">
            <Image src={DEvfolioButtonCta} alt="Devfolio Button" layout="fill" objectFit="cover" className="rounded-xl" />
            {/* <span className="relative flex text-stroke-black [text-shadow:_0px_3px_0px_rgb(0_0_0_/_1.00)] justify-center items-center gap-4 text-white text-2xl"><Image src={Arrow} alt="Arrow"  /> Apply With Devfolio </span> */}
        </button>
        // <button>

        // </button>
    );
}
import Image from "next/image";
import DevfolioBg from "../../assets/webp/ApplyWDBG.webp"
import Arrow from "../../assets/svg/Arrow.svg"

export default function DevfolioButton() {
    return (
        <button className="relative w-[380px] h-[50px] items-center justify-center rounded-[50px] z-5">
            <Image src={DevfolioBg} alt="Devfolio Button" layout="fill" objectFit="cover" className="rounded-xl" />
            <span className="relative flex text-stroke-black justify-center items-center gap-4 text-white text-3d text-2xl">Apply With Devfolio <Image src={Arrow} alt="Arrow"  /></span>
        </button>
    );
}
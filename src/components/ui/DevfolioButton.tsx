'use client';
import Image from "next/image";
import DevfolioBg from "../../assets/webp/ApplyWDBG.webp"
import DEvfolioButtonCta from "../../assets/images/cta.png"
import Arrow from "../../assets/svg/ArrowDevfolio.svg"
import Devfolio from "../../assets/svg/DEVFOLIO 1.svg"

export default function DevfolioButton() {
    return (
        // <button className="relative w-[380px] h-[50px] items-center justify-center rounded-[50px] z-30">
        //     <Image src={DEvfolioButtonCta} alt="Devfolio Button" layout="fill" objectFit="cover" className="rounded-xl" />
        //     {/* <span className="relative flex text-stroke-black [text-shadow:_0px_3px_0px_rgb(0_0_0_/_1.00)] justify-center items-center gap-4 text-white text-2xl"><Image src={Arrow} alt="Arrow"  /> Apply With Devfolio </span> */}
        // </button>
        <button className="relative flex justify-center items-center  gap-6 px-6 p-2 text-white  w-fit  shadow-[0_3px_0_#000] text-xl  md:text-2xl  font-medium border-t-4 border-b-4 border-b-[#EC8F01]  border-t-[#FFF] text-shadow  rounded-xl " style={{ background: 'linear-gradient(180deg, #FFEA92 1%, #FFFABC 20%, #FFE673 65%, #FFC610 94%)' }} >
            <Image src={Devfolio} alt="Devfolio Logo" className=" " />
            Apply with Devfolio
        </button>
    );
}
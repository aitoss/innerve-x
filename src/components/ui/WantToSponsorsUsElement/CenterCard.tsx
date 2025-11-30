import Image from "next/image";
import WTSUCenterCardBg from "../../../assets/webp/WTSU/WTSUCenterCardBg.webp"
import WSTUSideImg from "../../../assets/webp/WTSU/WSTUSideImg.webp"
import WTSUCentalImg from "../../../assets/webp/WTSU/WTSUCentalImg.webp"
import WTSUglow from "../../../assets/webp/WTSU/WTSUglow.webp"

export default function WTSUCenterCard() {
    return (
        <div className="relative w-[90%] max-w-[340px] xs:max-w-[400px] sm:max-w-[480px] md:max-w-[560px] lg:max-w-[659.54px] aspect-[659.54/428.8] z-10 outline-12 xs:outline-[14px] sm:outline-16 md:outline-18 outline-white rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-[19px] mx-auto">
            <div className="relative w-full h-full outline-4 xs:outline-[5px] sm:outline-[6px] md:outline-[7px] lg:outline-8 outline-[#EABC00] rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-[22px]">
                <Image src={WTSUCenterCardBg} fill alt="Center image" className="absolute inset-0 rounded-lg xs:rounded-xl sm:rounded-2xl md:rounded-[22px] " draggable={false}/>
                <div className="relative z-10 w-full h-full px-3 xs:px-4 sm:px-6 md:px-8 py-4 xs:py-5 sm:py-6 md:py-8 flex flex-col items-center justify-around">
                    <h2 className="text-white text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center leading-tight font-bold">
                        Want To <br /> Sponsor Us?
                    </h2>

                    <div className="relative  mx-auto w-[30%] aspect-square max-w-[200px] sm:max-w-60 md:max-w-[280px] lg:max-w-[300px]">
                        <Image
                            src={WTSUglow}
                            alt="Glow effect"
                            fill
                            className="object-cover scale-150"
                            draggable={false}
                        />
                        <Image
                            src={WTSUCentalImg}
                            alt="Central sponsor image"
                            fill
                            className="relative z-10 object-contain"
                            draggable={false}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
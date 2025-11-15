import Image from "next/image";
import WTSUCenterCardBg from "../../../assets/webp/WTSU/WTSUCenterCardBg.webp"
import WSTUSideImg from "../../../assets/webp/WTSU/WSTUSideImg.webp"
import WTSUCentalImg from "../../../assets/webp/WTSU/WTSUCentalImg.webp"
import WTSUglow from "../../../assets/webp/WTSU/WTSUglow.webp"

export default function WTSUCenterCard() {
    return (
        <div className="w-full max-w-[400px] sm:max-w-[600px] md:max-w-[700px] h-[280px] sm:h-[380px] md:h-[462px] relative z-10 bg-[#FFF] px-3 sm:px-4 md:px-[19px] py-2 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl md:rounded-[19px] mx-auto">
            <div className="relative w-full h-full bg-[#EABC00] rounded-xl sm:rounded-2xl md:rounded-[19px] p-1 sm:p-1.5">
                <div className="relative flex justify-center p-1 sm:p-1.5 md:p-2 w-full h-full bg-[#AA5A01] rounded-xl sm:rounded-2xl md:rounded-[19px]">
                    <Image 
                        src={WTSUCenterCardBg} 
                        alt="WTSUCenterCardBg" 
                        fill
                        className="z-0 absolute inset-0 object-cover rounded-xl sm:rounded-2xl md:rounded-[19px]" 
                    />
                    <div className="relative z-10 w-full px-2 sm:px-3 md:px-4 flex flex-col items-center">
                        <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[60px] text-center leading-tight md:leading-none mt-3 sm:mt-4 md:mt-6 lg:mt-10">
                            Want To <br /> Sponsor Us?
                        </p>
                        
                        <div className="relative mx-auto w-[220px] h-[190px] sm:w-[300px] sm:h-[250px]  md:w-[400px] md:h-[300px]">
                            <Image 
                                src={WTSUglow} 
                                alt="WTSUglow" 
                                fill
                                className="object-contain"
                            />
                            <Image 
                                src={WTSUCentalImg} 
                                alt="WTSUCentalImg" 
                                fill
                                className="relative z-10 object-contain" 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
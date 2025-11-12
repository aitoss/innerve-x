import Image from "next/image";
import WTSUCenterCardBg from "../../../assets/webp/WTSU/WTSUCenterCardBg.webp"
import WSTUSideImg from "../../../assets/webp/WTSU/WSTUSideImg.webp"
import WTSUCentalImg from "../../../assets/webp/WTSU/WTSUCentalImg.webp"
import WTSUglow from "../../../assets/webp/WTSU/WTSUglow.webp"

export default function WTSUCenterCard() {
    return (
        <div className="w-full max-w-[40vw] h-auto min-h-[300px] md:h-[466px] relative z-10 bg-[#FFF] px-3 sm:px-[19px] py-3 sm:py-4 rounded-[19px] mx-auto">
            <div className="relative w-full h-full min-h-[280px] md:min-h-[420px] bg-[#EABC00] rounded-[19px] p-1 sm:p-1.5">
                <div className="relative flex justify-center w-full h-full bg-[#AA5A01] rounded-[19px]">
                    <Image 
                        src={WTSUCenterCardBg} 
                        alt="WTSUCenterCardBg" 
                        fill
                        className="z-0 object-cover rounded-[19px]" 
                    />
                    <div className="relative z-10 w-full px-4">
                        <p className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[60px] text-center leading-tight md:leading-none mt-6 sm:mt-8 md:mt-10">
                            Want To <br /> Sponsor Us?
                        </p>
                        
                        <div className="relative  mx-auto w-[200px] h-[150px] sm:w-[250px] sm:h-[180px] md:w-[300px] md:h-[220px] lg:w-[400px] lg:h-[300px]">
                            <Image 
                                src={WTSUglow} 
                                alt="WTSUglow" 
                                fill
                                className="object-contain "
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
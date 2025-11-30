import Image from "next/image";
import WSTUChampionCard from "../../../assets/webp/WTSU/WTSUChamionCard.webp"
import WTSUSponsorsBonus from "../../../assets/webp/WTSU/WTSUSponsorsBonus.webp"
import WTSUSponsorsBonusSvg from "../../../assets/svg/WTSU/sponsorsbonus.svg"
import WTSUglow from "../../../assets/svg/WTSU/WTSUGlow2.svg"

export default function WTSUTop() {
    return (
        <div className="relative -top-3 w-8/10 z-10">
            {/* Sponsor Bonus Badge */}
            <div className="absolute -top-7 sm:-top-6 md:-top-8   md:left-2  z-20">
                <Image 
                    src={WTSUSponsorsBonusSvg} 
                    alt="WTSUSponsorsBonus" 
                    className="w-36 h-auto sm:w-40 md:w-48"
                    draggable={false} 
                />
            </div>

            {/* Purple Header Bar */}
            <div 
                className="relative border-[3px] sm:border-4 md:border-[5px] lg:border-6 text-white flex items-center justify-between border-[#EDB102] h-10 sm:h-12 md:h-14 lg:h-16 xl:h-[72px] border-b-0 rounded-t-lg sm:rounded-t-xl md:rounded-t-2xl z-10 w-full px-3 sm:px-4 md:px-6 lg:px-8" 
                style={{ background: 'linear-gradient(90deg, #5329A2 0%, #28137B 100%)' }}
            >
                {/* Champion Wild Card Text */}
                <p className="text-md sm:text-base md:text-lg lg:text-xl xl:text-3xl font-bold tracking-wide flex-1 text-center pr-2">
                    Champion Wild Card
                </p>
                
                {/* Card/Shield Icon */}
                <div className="relative flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 xl:w-16 xl:h-16 shrink-0">
                    <Image 
                        src={WTSUglow} 
                        alt="WTSUglow" 
                        className="absolute inset-0 z-10 w-full h-full object-contain" 
                        fill
                        sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, (max-width: 1024px) 48px, 64px"
                        draggable={false}
                    />
                    <Image 
                        src={WSTUChampionCard} 
                        alt="WSTUChampionCard" 
                        className="relative z-20 w-full h-full object-contain" 
                        fill
                        sizes="(max-width: 640px) 32px, (max-width: 768px) 40px, (max-width: 1024px) 48px, 64px"
                        draggable={false}
                    />
                </div>
            </div>
        </div>
    );
}
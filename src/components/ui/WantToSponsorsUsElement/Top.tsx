import Image from "next/image";
import WSTUChampionCard from "../../../assets/webp/WTSU/WTSUChamionCard.webp"
import WTSUSponsorsBonus from "../../../assets/webp/WTSU/WTSUSponsorsBonus.webp"
import WTSUSponsorsBonusSvg from "../../../assets/svg/WTSU/sponsorsbonus.svg"
import WTSUglow from "../../../assets/svg/WTSU/WTSUGlow2.svg"

export default function WTSUTop() {
    return (
        <div className="relative border-6 text-white text-3xl flex items-center justify-evenly border-[#EDB102] h-18 border-b-0 rounded-t-xl z-10 w-[600px] bg-linear " style={{ background: 'linear-gradient(90deg, #5329A2 0%, #28137B 100%)' }} >
            <Image src={ WTSUSponsorsBonusSvg} alt="WTSUSponsorsBonus" className="absolute bottom-[60%] left-[-30]" />
            <p>Champions Wild Card</p>
            <div className="relative flex items-centerjustify-center ">
                <Image src={WTSUglow} alt="WTSUglow" className="absolute inset-0  z-10  " />
                <Image src={WSTUChampionCard} alt="WSTUChampionCard" className="relative z-20  " />
            </div>
        </div>
    );
}
import Image from "next/image";
import TrackBgImg from "../assets/webp/tracks/TrackBgImg.webp"
import TrackCard from "@/components/ui/TracksElements/TrackCard";
import TrackHealthImg from "../assets/svg/Traks/TrackHealth.svg"
import BlueCornerImg from "../assets/svg/Traks/BlueCorner.svg"
import OrangeCornerImg from "../assets/svg/Traks/OrangeCornerImg.svg"
import PurpleCornerImg from "../assets/svg/Traks/PurpleCornerImg.svg"
import TrackArVr from "../assets/svg/Traks/TrackArVr.svg"
import TrackEduTech from "../assets/svg/Traks/TrackEduTech.svg"
import TrackFinTech from "../assets/svg/Traks/TrackFinTech.svg"
import TrackGameDev from "../assets/svg/Traks/TrackGameDev.svg"
import TrackCyberSec from "../assets/svg/Traks/TrackCyber.svg"
import TrackBlockChain from "../assets/svg/Traks/TracksBlockChain.svg"
import TrackLogistics from "../assets/svg/Traks/TrackLogistics.svg"
import TrackEcoTech from "../assets/svg/Traks/TrackEcoTech.svg"
import TrackButton from "@/components/ui/TracksElements/TrackButton";
import Galaxy from "@/components/ui/TracksElements/Glaxy";

const TRACKS_CARDS_DATA = [
    {
        BgColor: "bg-[#2860BC]",
        BC1: "border-[#579BEC]",
        BC2: "border-[#FFBF64]",
        Logo: TrackHealthImg,
        CornerImg: BlueCornerImg,
        Title: "Health"
    },
    {
        BgColor: "bg-[#E4630E]",
        BC1: "border-[#FFDC53]",
        BC2: "border-[#FBC3C1]",
        Logo: TrackArVr,
        CornerImg: OrangeCornerImg,
        Title: "AR/VR"
    },
    {
        BgColor: "bg-[#CA4CFA]",
        BC1: "border-[#E6ADFD]",
        BC2: "border-[#FFBF64]",
        Logo: TrackEduTech,
        CornerImg: PurpleCornerImg,
        Title: "EduTech"
    },
    {
        BgColor: "bg-[#2860BC]",
        BC1: "border-[#579BEC]",
        BC2: "border-[#FFBF64]",
        Logo: TrackGameDev,
        CornerImg: BlueCornerImg,
        Title: "GameDev"
    },
    {
        BgColor: "bg-[#E4630E]",
        BC1: "border-[#FFDC53]",
        BC2: "border-[#FBC3C1]",
        Logo: TrackFinTech,
        CornerImg: OrangeCornerImg,
        Title: "FinTech"
    },
    {
        BgColor: "bg-[#CA4CFA]",
        BC1: "border-[#E6ADFD]",
        BC2: "border-[#FFBF64]",
        Logo: TrackCyberSec,
        CornerImg: PurpleCornerImg,
        Title: "CyberSec"
    },
    {
        BgColor: "bg-[#2860BC]",
        BC1: "border-[#579BEC]",
        BC2: "border-[#FFBF64]",
        Logo: TrackBlockChain,
        CornerImg: BlueCornerImg,
        Title: "BlockChain"
    },
    {
        BgColor: "bg-[#E4630E]",
        BC1: "border-[#FFDC53]",
        BC2: "border-[#FBC3C1]",
        Logo: TrackLogistics,
        CornerImg: OrangeCornerImg,
        Title: "Logistics"
    },
    {
        BgColor: "bg-[#CA4CFA]",
        BC1: "border-[#E6ADFD]",
        BC2: "border-[#FFBF64]",
        Logo: TrackEcoTech,
        CornerImg: PurpleCornerImg,
        Title: "EcoTech"
    }
]

export default function TrackSection() {
    return (
        <section className="relative w-full flex  flex-col items-center justify-center bg-[#010101] pt-26 px-10" >
            {/* <div className="absolute inset-0 bg-linear-to-b from-transparent via-black to-black/0 pointer-events-none z-10" /> */}
            <div className="absolute inset-0 z-0 w-full/2 h-[]">
                <Galaxy
                    mouseRepulsion={true}
                    mouseInteraction={true}
                    density={3}
                    glowIntensity={0.2}
                    saturation={0}
                    hueShift={240}
                />
            </div>
            <TrackButton />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-[164px]  z-10 md:gap-y-16  md:my-20">
                {TRACKS_CARDS_DATA.map((card, index) => (
                    <div key={index} className="flex justify-center">
                        <TrackCard
                            BgColor={card.BgColor}
                            BC1={card.BC1}
                            BC2={card.BC2}
                            Logo={card.Logo}
                            CornerImg={card.CornerImg}
                            Title={card.Title}
                        />
                    </div>
                ))}
            </div>
            <div className="h-[50vh]" />
            <div className="absolute w-full z-0 bottom-0 h-[90vh] ">
                <Image src={TrackBgImg} alt="background image" objectFit="cover" layout="fill" className="" />
                <div className="absolute inset-0 bg-linear-to-b from-black via-black/80 to-transparent " />
            </div>
        </section>
    )
}

import WTSUCenterCard from "@/components/ui/WantToSponsorsUsElement/CenterCard";
import WTSUTop from "@/components/ui/WantToSponsorsUsElement/Top";
import WTSUBgImg from "../assets/webp/WTSU/WantToSponsorsUs.webp";
import WTSUButton from "@/components/ui/WantToSponsorsUsElement/Button";
import WTSURod from "../assets/svg/WTSU/WTSURod.svg"
import Image from "next/image";

export default function WantToSponsorsUsSection() {
    return (
        <section
            style={{
                backgroundImage: `url(${WTSUBgImg.src})`,
            }}
            className="relative border-box flex justify-center items-center w-full min-h-[90vh]  py-30 px-4 sm:px-6"
        >

            <div className="w-full max-w-[400px] sm:max-w-[600px] md:max-w-[700px] flex flex-col items-center">
                <WTSUTop />
                <WTSUCenterCard />
                <div className="flex justify-between w-full px-20 sm:px-10 md:px-14 mx-auto">
                    <Image src={WTSURod} alt="Rod" className="md:w-8 h-auto" draggable={false}/>
                    <Image src={WTSURod} alt="Rod" className="md:w-8 h-auto" draggable={false}/>
                </div>
                <WTSUButton />
            </div>
        </section>
    )
}   
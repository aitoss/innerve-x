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
            className="relative flex justify-center items-center w-full  h-[90vh] "
        >

            <div className="w-fit  flex flex-col items-center  ">
                <WTSUTop />
                <WTSUCenterCard />
                <div className="flex justify-between w-full  px-14 mx-auto ">
                    <Image src={WTSURod} alt="Rod" />
                    <Image src={WTSURod} alt="Rod" />
                </div>
                <WTSUButton />
            </div>
        </section>
    )
}
import Image from "next/image";
import PrizePoolClouds from "../assets/webp/clockTopCloud.webp"
import CountdownTimerCard from "@/components/layout/countdownTimerCard";
import RopeImage from "../assets/svg/rope.svg"

import EventCardAnimated from "@/components/layout/eventCardAnimation";
import EventCard from "@/components/layout/eventCard";
export default function ClockBannerSection() {
    return (
        <section className="relative flex justify-center w-full h-auto bg-[#CCECF7] " >
            <div className="absolute left-0 right-0 z-0">
                <Image src={PrizePoolClouds} alt="clouds background" objectFit="fill" className="w-screen h-full" />
            </div>
            <div className="w-fit  relative -top-8 md:-top-20 z-20" >
                <CountdownTimerCard />
                <div className="relative flex  z-0 justify-around px-10" >
                    <Image src={RopeImage} alt="rope image" className="md:w-3" />
                    <Image src={RopeImage} alt="rope image" className="md:w-3" />
                </div>
                <div className="flex justify-center ">
                    <EventCard />
                </div>
            </div>

        </section>
    )
}
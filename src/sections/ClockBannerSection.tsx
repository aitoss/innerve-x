'use client';
import Image from "next/image";
import PrizePoolClouds from "../assets/webp/clockTopCloud.webp"
import CountdownTimerCard from "@/components/layout/countdownTimerCard";
import RopeImage from "../assets/svg/rope.svg"
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import EventCardAnimated from "@/components/layout/eventCardAnimation";
import EventCard from "@/components/layout/eventCard";
import Cloud from "@/components/ui/HeroSectionElement/Cloud";
export default function ClockBannerSection() {

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const leftCloudX = useTransform(scrollYProgress, [0, 1], [0, -2500]);
    const rightCloudX = useTransform(scrollYProgress, [0, 1], [0, 2500]);


    return (
        <section ref={containerRef} className="relative flex justify-center w-full max-sm:pb-10 h-auto bg-[#CCECF7] overflow-x-clip "    >
            <Cloud position="top-0  md:left-[100px]" X={leftCloudX} />
            <Cloud position=" top-[-40%] right-[-150px] md:right-[100px]" X={rightCloudX} />

            <div className="absolute left-0 right-0 z-0">
                <Image src={PrizePoolClouds} alt="clouds background" objectFit="fill" className="w-screen h-full" draggable={false}/>
            </div>
            <div className="w-fit  relative -top-8 md:-top-20 z-20" >
                <CountdownTimerCard />
                <div className="relative flex  z-0 justify-around  md:px-10" >
                    <Image src={RopeImage} alt="rope image" className="md:w-3 md:h-full h-14  " draggable={false}/>
                    <Image src={RopeImage} alt="rope image" className="md:w-3 md:h-full h-14 " draggable={false}/>
                </div>
                <div className="flex justify-center ">
                    <EventCard />
                </div>
            </div>

        </section>
    )
}
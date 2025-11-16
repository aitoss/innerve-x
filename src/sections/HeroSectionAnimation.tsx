"use client"
import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import heroImage from "../assets/webp/backgroundImage.webp";
import InnerveHeadingLogo from "@/components/ui/Innerve-Heading-logo";
import DevfolioButton from "@/components/ui/DevfolioButton";
import BalloonShip from "@/components/ui/HeroSectionElement/BalloonShip";
import Cloud from "@/components/ui/HeroSectionElement/Cloud";
import BlueDragon from "@/components/ui/HeroSectionElement/BlueDragon";
import GreenDragon from "@/components/ui/HeroSectionElement/GreenDragon";
import Bat1 from "@/components/ui/HeroSectionElement/Bat_1";
import Bat2 from "@/components/ui/HeroSectionElement/Bat_2";
import Balloon from "@/components/ui/HeroSectionElement/Ballon";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";


export default function HeroSectionAnimation() {

    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const leftCloudX = useTransform(scrollYProgress, [0, 1], [200, -500]);
    const rightCloudX = useTransform(scrollYProgress, [0, 1], [-200, 500]);
    const BalloonShipX = useTransform(scrollYProgress, [0, 1], [0, 400]);
    const BalloonShipY = useTransform(scrollYProgress, [0, 1], [0, -300]);
    const BlueDragonX = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const BlueDragonY = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const GreenDragonY = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const GreenDragonX = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const BalloonY = useTransform(scrollYProgress, [0, 1], [0, -150]);
    const BalloonX = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const centerContentY = useTransform(scrollYProgress, [0, 1], [0, -250]); // Positive value makes it lag behind


    const bat1X = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const bat1Y = useTransform(scrollYProgress, [0, 1], [0, -80]);

    const bat2X = useTransform(scrollYProgress, [0, 1], [0, 150]);
    const bat2Y = useTransform(scrollYProgress, [0, 1], [0, -120]);

    const bat3X = useTransform(scrollYProgress, [0, 1], [0, -80]);
    const bat3Y = useTransform(scrollYProgress, [0, 1], [0, 100]);

    const bat4X = useTransform(scrollYProgress, [0, 1], [0, 90]);
    const bat4Y = useTransform(scrollYProgress, [0, 1], [0, -150]);

    const bat5X = useTransform(scrollYProgress, [0, 1], [0, -180]);
    const bat5Y = useTransform(scrollYProgress, [0, 1], [0, -90]);

    const bat6X = useTransform(scrollYProgress, [0, 1], [0, 110]);
    const bat6Y = useTransform(scrollYProgress, [0, 1], [0, 130]);

    const bat7X = useTransform(scrollYProgress, [0, 1], [0, -140]);
    const bat7Y = useTransform(scrollYProgress, [0, 1], [0, -110]);

    const bat8X = useTransform(scrollYProgress, [0, 1], [0, 160]);
    const bat8Y = useTransform(scrollYProgress, [0, 1], [0, -140]);




    return (
        <section ref={containerRef} className="relative w-full  h-screen flex justify-center items-center overflow-x-hidden overflow-y-auto " >
            {/* this is absolute positioning section that is relative to the this hero section */}

            {/* this is the bottom zero layer Image */}
            <Image src={heroImage} alt="Hero Image" layout="fill" objectFit="cover" className="absolute inset-0 z-0" />
            {/* <video
                src="/videos/output_loop.webm"
                className="absolute inset-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            /> */}


            {/* this is layer five navbar */}
            <Navbar />


            {/* this is the first layer gradient overlay */}
            <div className="absolute inset-0 z-10" style={{ background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.50) 100%)' }} />



            {/* this is the second layer */}
            <BalloonShip X={BalloonShipX} Y={BalloonShipY} />
            <BlueDragon X={BlueDragonX} Y={BlueDragonY} />
            <GreenDragon X={GreenDragonX} Y={GreenDragonY} />
            <Balloon position="top-[40%] right-[15%]" size="max-sm:w-[50px] w-[30px] " X={BalloonX} Y={BalloonY} />
            <Balloon position="top-[27%] right-[35%]" size="h-[90px] max-sm:w-[50px] w-[90px]" X={BalloonX} Y={BalloonY} />

            {/* this is the bat section of positions with random movements */}
            <Bat1 position="top-[3%] right-[-3.5%]" size="max-sm:h-[30px] h-[50px] w-auto" X={bat1X} Y={bat1Y} /> {/* the top right bat */}
            <Bat1 position="top-[30%]  right-[16%]" size="max-sm:h-[30px] h-[30px] w-auto" X={bat2X} Y={bat2Y} />  
            <Bat1 position="top-[36%] max-sm:left-[10%]  right-[20%]" size="max-sm:h-[30px] h-[30px] w-auto" X={bat3X} Y={bat3Y} /> {/* three bat as a background b2 */}
            <Bat2 position="top-[30%] max-sm:top-[26%] max-sm:left-[40%] right-[22%]" size="max-sm:h-[30px] h-[30px] w-auto" X={bat4X} Y={bat4Y} />
            <Bat2 position="top-[35%] right-[25%]" size="max-sm:h-[30px] h-[50px] w-auto" X={bat5X} Y={bat5Y} /> {/* bat side of innnerve logo */}
            {/* <Bat2 position="top-[26%] max-sm:top-[16%] max-sm:left-[40%]  right-[26%]" size="max-sm:h-[30px] h-[80px] w-auto" X={bat6X} Y={bat6Y} />  */}
            <Bat1 position="top-[22%] right-[6%]" size="max-sm:h-[30px] h-[40px] w-auto" X={bat7X} Y={bat7Y} /> {/* right first bat2 */}
            <Bat2 position="top-[16%] right-[-1.5%]" size="max-sm:h-[30px] h-[80px] w-auto" X={bat8X} Y={bat8Y} /> {/* right first bat1 */}


            {/* <Cloud position="bottom-[-20%] left-[-200px]" X={leftCloudX} /> */}
            {/* <Cloud position="bottom-[-20%] right-[-200px]" X={rightCloudX} /> */}

            {/* this is layer four */}
            <div className="absolute inset-0 z-40" style={{ background: 'linear-gradient(180deg, black 0%, rgba(0, 0, 0, 0) 29%)' }} />


            {/* iss mein oo component put karunga jispe mein flex properties apply kar sakta hu */}

            <motion.div className="z-40 flex flex-col items-center space-y-10 " style={{ y: centerContentY }} >
                <InnerveHeadingLogo />
                <DevfolioButton />
            </motion.div>
        </section>
    )
}
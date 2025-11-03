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

export default function HeroSection() {
    return (
        <section className="relative w-full  h-screen flex justify-center items-center bg-gray-400 overflow-hidden ">
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
            <BalloonShip />
            <BlueDragon />
            <GreenDragon />
            <Balloon position="top-[10%] right-[53%]" />
            <Balloon position="top-[30%] right-[35%]" size="h-[90px] w-[90px]" />

            {/* this is the bat section of positions  */}
            <Bat1 position="top-[3%] right-[-3.5%]" size="h-[100px] w-[100px]" /> {/* the top right bat */}
            <Bat1 position="top-[30%] right-[16%]" size="h-[50px] w-[50px]" />  {/* three bat as a background b3 */}
            <Bat1 position="top-[36%] right-[20%]" size="h-[50px] w-[50px]" /> {/* three bat as a background b2 */}
            <Bat2 position="top-[30%] right-[22%]" size="h-[60px] w-[60px]" />   {/* three bat as a background b1 */}
            <Bat2 position="top-[38%] right-[25%]" size="h-[100px] w-[100px]" /> {/* bat side of innnerve logo */}
            <Bat2 position="top-[26%] right-[26%]" size="h-[150px] w-[150px]" /> {/* bat above innnerve logo */}
            <Bat1 position="top-[22%] right-[6%]" size="h-[70px] w-[70px]" />   {/* right first bat2 */}
            <Bat2 position="top-[16%] right-[-1.5%]" size="h-[150px] w-[150px]" />    {/* right first bat1 */}

            {/* <Cloud position="bottom-[-10%] left-[-10%]" /> */}
            {/* <Cloud position="bottom-[-10%] right-[-10%]" /> */}

            {/* this is layer four */}
            <div className="absolute inset-0 z-40" style={{ background: 'linear-gradient(180deg, black 0%, rgba(0, 0, 0, 0) 29%)' }} />


            {/* iss mein oo component put karunga jispe mein flex properties apply kar sakta hu */}

            <div className=" text-center space-y-10 ">
                <InnerveHeadingLogo />
                <DevfolioButton />
            </div>
        </section>
    )
}
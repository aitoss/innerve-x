import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import heroImage from "../assets/webp/backgroundImage.webp";
import InnerveHeadingLogo from "@/components/ui/Innerve-Heading-logo";
import DevfolioButton from "@/components/ui/DevfolioButton";
import BalloonShip from "@/components/ui/BalloonShip";

export default function HeroSection() {
    return (
        <section className="relative w-full  h-screen flex justify-center items-center bg-gray-400 ">

            {/* this is absolute positioning section that is relative to the this hero section */}
            <div className="absolute inset-0 z-1 opacity-100 bg-linear-to-t from-transparent to-black/85 " />
            <Navbar />
            {/* <Image
                src={heroImage}
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
            /> */}
            <video
                src="/videos/output_loop.webm"
                className="absolute inset-0 w-full h-full object-cover z-0"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            />

            {/* <BalloonShip /> */}

            {/* this is the is mein oo component put karunga jispe mein flex properties apply kar sakta hu */}

            <div className=" text-center space-y-10 ">
                <InnerveHeadingLogo />
                <DevfolioButton />
            </div>
        </section>
    )
}
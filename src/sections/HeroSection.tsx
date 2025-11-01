import Navbar from "@/components/layout/Navbar";
import Image from "next/image";
import heroImage from "../assets/webp/backgroundImage.webp";

export default function HeroSection() {
    return (
        <section className="relative w-full  h-screen bg-gray-400 ">
            <Navbar />
            <Image
                src={"/backgroundImage.webp"}
                alt="Hero Image"
                layout="fill"
                objectFit="cover"
                className="absolute inset-0 z-0"
            />
        </section>
    )
}
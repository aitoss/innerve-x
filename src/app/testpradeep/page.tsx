import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/sections/HeroSection";
import SvgTo3D from "@/components/ui/svgTo3D"
import CharacterScroll from "@/sections/LoadingScreen";

export default function TestPage() {
    return (
        <>
            {/* <div className="min-h-[300vh]">
                <CharacterScroll />
                <div className="h-screen flex items-center justify-center">
                    <h1 className="text-6xl">Scroll Down to See Character Change</h1>
                </div>
            </div> */}
            <HeroSection />
            {/* <CharacterScroll /> */}
            {/* <SvgTo3D /> */}
        </>
    );
}

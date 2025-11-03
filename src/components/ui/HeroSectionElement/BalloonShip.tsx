import Image from "next/image";
import BalloonShipImage from "../../../assets/svg/ship.svg"
export default function BalloonShip() {
    return (
        <div className="absolute inline-block top-[-10%] left-[-17%] z-20">
            {/* <video
                src="/videos/ship1_clean_high.webm"
                className="w-[800px] h-auto object-cover"
                autoPlay
                loop
                muted
                playsInline
                preload="auto"
            /> */}

            <Image src={BalloonShipImage} alt="Balloon Ship"  objectFit="contain" className="w-[85%]" />
        </div>
    );
}
import Image from "next/image";
import {motion} from "motion/react"
import BalloonShipImage from "../../../assets/svg/ship.svg"

interface BalloonShipProps {
    X?: any;
    Y?: any;
}

export default function BalloonShip({X,Y}: BalloonShipProps) {
    return (
        <motion.div className="absolute inline-block top-[-10%] left-[-17%] z-20" style={{x: X, y: Y}}>
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
        </motion.div>
    );
}
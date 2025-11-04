import Image from "next/image"
import {motion} from "motion/react"
import BalloonImage from "../../../assets/svg/balloon.svg"

interface BalloonProps {
    position?: string;
    size?: string;
    X?:any;
    Y?:any;
}

export default function Balloon({position="", size="h-[100px] w-[100px]", X, Y}:BalloonProps){
    return (
        <motion.div className={`absolute ${position} z-20`} style={{x:X, y:Y}}>
            <Image src={BalloonImage} alt="Balloon" className={size} />
        </motion.div>
    )
}
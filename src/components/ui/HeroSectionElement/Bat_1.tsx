import Image from "next/image"
import { motion } from "motion/react"
import Bat1Image from "../../../assets/svg/bat.svg"
import BatGif from "../../../assets/gif/bat1.gif"

interface Bat1Props {
    position?: string;
    size?: string;
    X?: any;
    Y?: any;
}

export default function Bat1({ position = "", size = "h-[100px] w-[100px]", X, Y }: Bat1Props) {
    return (
        <motion.div className={`absolute ${position} z-20`} style={{ x: X, y: Y }}>
            <Image src={BatGif} alt="Bat-1" className={size}  draggable={false} priority/>
        </motion.div>
    )
}
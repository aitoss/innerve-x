import Image from "next/image"
import { motion } from "motion/react"
import Bat2Image from "../../../assets/svg/bat 2.svg"
import Bat2Gif from "../../../assets/gif/bat2.gif"


interface Bat2Props {
    position?: string;
    size?: string;
    X?: any;
    Y?: any;
}

export default function Bat2({ position = "", size = "", X, Y }: Bat2Props) {
    return (
        <motion.div className={`absolute ${position} z-20`} style={{ x: X, y: Y }}>
            <Image src={Bat2Gif} alt="Bat2" className={size} draggable={false} unoptimized priority />
        </motion.div>
    )
}
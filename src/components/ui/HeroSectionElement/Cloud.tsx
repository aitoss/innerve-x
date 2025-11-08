import { div } from "motion/react-client"
import Image from "next/image";
import CloudImage from "../../../assets/svg/cloud.svg"
import {motion} from "motion/react"

interface CloudProps {
    position?: string;
    X?:any;
}

export default function Cloud({position, X}:CloudProps) {
    return (
        <motion.div className={`absolute ${position} overflow-hidden z-10 pointer-events-none`} style={{x:X}} >
            <Image src={CloudImage} alt="Cloud"  />
        </motion.div>
    );
}  
import { div } from "motion/react-client"
import Image from "next/image";
import CloudImage from "../../../assets/svg/cloud.svg"
import CloudImage2 from "../../../assets/webp/cloud.webp"
import {motion} from "motion/react"

interface CloudProps {
    position?: string;
    X?:any;
}

export default function Cloud({position, X}:CloudProps) {
    return (
        <motion.div className={`absolute ${position}  z-70 pointer-events-none`} style={{x:X}} >
            <Image src={CloudImage2} alt="Clouds" className="scale-150" />
        </motion.div>
    );
}  
import { div } from "motion/react-client"
import Image from "next/image";
import CloudImage from "../../../assets/svg/cloud.svg"
import CloudImage2 from "../../../assets/webp/cloud4.webp"
import { motion } from "motion/react"

interface CloudProps {
    position?: string;
    X?: any;
}

export default function Cloud({ position, X }: CloudProps) {
    return (
        <motion.div
            className={`absolute ${position} min-w-1/2 z-70 pointer-events-none`}
            style={{ x: X }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="relative  ">
                {/* Soft ambient glow behind the cloud */}
                <div className="absolute inset-0  blur-3xl bg-white opacity-20"></div>

                {/* Actual cloud with multiple white glows */}
                <Image
                    src={CloudImage2}
                    alt="Clouds"
                    className="relative  max-sm:scale-130     blur-[0.5px] drop-shadow-[0_0_25px_rgba(255,255,255,0.9)] "
                />
            </div>
        </motion.div>
    );
}   
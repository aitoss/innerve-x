"use client";
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
            className={`absolute ${position} min-w-1/2 z-70 pointer-events-none gpu-accelerate`}
            style={{ 
                x: X
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ 
                duration: 1,
                ease: "easeOut"
            }}
        >
            <div className="relative">
                {/* Reduce blur intensity on mobile */}
                <div className="absolute inset-0 blur-2xl md:blur-3xl bg-white opacity-20"></div>

                <Image
                    src={CloudImage2}
                    alt="Clouds"
                    className="relative max-sm:scale-130 blur-[0.5px] drop-shadow-[0_0_25px_rgba(255,255,255,0.9)]"
                    draggable={false}
                    priority
                />
            </div>
        </motion.div>
    );
}
"use client";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useAnimationFrame } from "motion/react";
import GreenDragonImage from "../../../assets/svg/dragon-1.svg";

interface GreenDragonProps {
    X?: any;
    Y?: any;
}

export default function GreenDragon({ X, Y }: GreenDragonProps) {
 

    return (
        <motion.div
            className="absolute bottom-[50px] lg:-left-60 md:left-[-180px] sm:left-[-140px] left-[-130px]  z-20"
            style={{
                x: X,
                y: Y, // ✅ single combined Y motion (no conflict)
            }}
        >
            <div className="animate-float-fast">
                <Image src={GreenDragonImage} alt="GreenDragonImage" className="lg:w-auto md:w-8/10 sm:w-7/10 w-6/10" draggable={false} priority />
            </div>
        </motion.div>
    );
}
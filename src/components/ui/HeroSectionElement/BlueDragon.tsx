"use client";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useAnimationFrame } from "motion/react";
import BlueDragonImage from "../../../assets/svg/dragon-2.svg";

interface BlueDragonProps {
    X?: any;
    Y?: any;
}

export default function BlueDragon({ X, Y }: BlueDragonProps) {


    return (
        <motion.div
            className="absolute inline-block lg:bottom-[70px] bottom-[2%] lg:right-[-450px] md:right-[-500px] sm:right-[-520px] right-[-550px]   z-20"
            style={{
                x: X,
                y: Y, // ✅ single combined Y motion (no conflict)
            }}
        >
            <div className="animate-float">
                <Image src={BlueDragonImage} alt="Blue dragon" className="lg:w-auto md:w-8/10 sm:w-7/10 w-6/10" draggable={false} priority />
            </div>
        </motion.div>
    );
}
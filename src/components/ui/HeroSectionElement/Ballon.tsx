"use client";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useAnimationFrame } from "motion/react";
import BalloonImage from "../../../assets/svg/balloon.svg";


interface BalloonProps {
    position?: string;
    size?: string;
    X?: any;
    Y?: any;
}

export default function Balloon({ position = "", size = "h-[100px] w-[100px]", X, Y }: BalloonProps) {

    return (
        <motion.div
            className={`absolute ${position} z-20`}
            style={{
                x: X,
                y: Y, // ✅ single combined Y motion (no conflict)
            }}
        >
            <div className="animate-float-slow">
                <Image src={BalloonImage} alt="Balloon" className={`${size}`} draggable={false} priority/>
            </div>
        </motion.div>
    );
}
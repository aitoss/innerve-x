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
    // Base floating Y motion
    const baseY = useMotionValue(0);
    let direction = 1;
    let floatPosition = 0;
    let lastTime = 0;
    const speed = 0.02; // smaller = slower float

    // Animate the gentle float with `useAnimationFrame`
    useAnimationFrame((t) => {
        if (!lastTime) lastTime = t;
        const delta = t - lastTime;
        floatPosition += direction * delta * speed;
        if (floatPosition > 15 || floatPosition < -15) direction *= -1;
        baseY.set(floatPosition);
        lastTime = t;
    });

    // Merge scroll motion (Y) + float (baseY)
    const combinedY = useTransform(() => (Y?.get() ?? 0) + baseY.get());

    return (
        <motion.div
            className={`absolute ${position} z-20`}
            style={{
                x: X,
                y: combinedY, // ✅ single combined Y motion (no conflict)
            }}
        >
            <Image src={BalloonImage} alt="Balloon" className={`${size}`} />
        </motion.div>
    );
}
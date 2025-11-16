"use client";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useAnimationFrame } from "motion/react";
import BlueDragonImage from "../../../assets/svg/dragon-2.svg";

interface BlueDragonProps {
    X?: any;
    Y?: any;
}

export default function BlueDragon({ X, Y }: BlueDragonProps) {
    // Base floating Y motion
    const baseY = useMotionValue(0);
    let direction = 1;
    let position = 0;
    let lastTime = 0;
    const speed = 0.01; // smaller = slower float

    // Animate the gentle float with `useAnimationFrame`
    useAnimationFrame((t) => {
        if (!lastTime) lastTime = t;
        const delta = t - lastTime;
        position += direction * delta * speed;
        if (position > 15 || position < -15) direction *= -1;
        baseY.set(position);
        lastTime = t;
    });

    // Merge scroll motion (Y) + float (baseY)
    const combinedY = useTransform(() => (Y?.get() ?? 0) + baseY.get());

    return (
        <motion.div
            className="absolute inline-block lg:bottom-[70px] bottom-[2%] lg:right-[-450px] md:right-[-500px] sm:right-[-520px] right-[-550px]   z-20"
            style={{
                x: X,
                y: combinedY, // ✅ single combined Y motion (no conflict)
            }}
        >
            <Image src={BlueDragonImage} alt="Blue dragon" className="lg:w-auto md:w-8/10 sm:w-7/10 w-6/10" />
        </motion.div>
    );
}
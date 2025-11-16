"use client";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useAnimationFrame } from "motion/react";
import BalloonShipImage from "../../../assets/svg/ship.svg";

interface BalloonShipProps {
    X?: any;
    Y?: any;
}

export default function BalloonShip({ X, Y }: BalloonShipProps) {
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
            className="absolute inline-block max-sm:top-0 max-sm:left-[-20%] top-[-10%] left-[-270px] z-20"
            style={{
                x: X,
                y: combinedY, // ✅ single combined Y motion (no conflict)
            }}
        >
            <Image
                src={BalloonShipImage}
                alt="Balloon Ship"
                className="w-[85%] max-sm:w-7/10 object-contain"
            />
        </motion.div>
    );
}
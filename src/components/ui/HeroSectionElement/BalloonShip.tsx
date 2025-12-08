"use client";
import Image from "next/image";
import { motion, useMotionValue, useTransform, useAnimationFrame } from "motion/react";
import BalloonShipImage from "../../../assets/svg/ship.svg";

interface BalloonShipProps {
    X?: any;
    Y?: any;
}

export default function BalloonShip({ X, Y }: BalloonShipProps) {


    return (
        <motion.div
            className="absolute inline-block max-sm:top-0 max-sm:left-[-20%] top-[-10%] left-[-270px] z-20"
            style={{
                x: X,
                y: Y, // ✅ single combined Y motion (no conflict)
            }}
        >
            <div className="animate-float">
                <Image
                    src={BalloonShipImage}
                    alt="Balloon Ship"
                    className="w-[85%] max-sm:w-7/10 object-contain"
                    draggable={false}
                    priority
                />
            </div>
        </motion.div>
    );
}
"use client";

import Image from "next/image";
import BordImage from "../../../assets/images/board.png";
import { motion } from "motion/react";

export default function BordAnimation() {
    return (
        <div className="w-full h-full flex justify-center">
            <motion.div
                initial={{ y: -80, opacity: 0 }}             // starts higher
                whileInView={{ y: 0, opacity: 1 }}           // falls down
                transition={{
                    duration: 1,
                    ease: [0.25, 0.46, 0.45, 0.94],          // smooth gravity fall
                }}
                viewport={{ once: true, amount: 0.4 }}       // triggers when visible
                className="animate-bounce-slow"               // your bounce effect after
            >
                <Image src={BordImage} alt="Board"  draggable={false}/>
            </motion.div>
        </div>
    );
}
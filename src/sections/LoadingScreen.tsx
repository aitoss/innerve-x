import Image from "next/image";
import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";


export default function LoadingScreen() {
    const [progress, setProgress] = useState(0);
    const rafRef = useRef<number | null>(null);

    useEffect(() => {
        const startTime = Date.now();
        const duration = 2500;

        const animate = () => {
            const elapsed = Date.now() - startTime;
            const newProgress = Math.min((elapsed / duration) * 100, 100);
            
            setProgress(newProgress);

            if (newProgress < 100) {
                rafRef.current = requestAnimationFrame(animate);
            }
        };

        rafRef.current = requestAnimationFrame(animate);
        return () => {
            if (rafRef.current !== null) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, []);

    return (
        <div className="relative flex items-center justify-center h-screen bg-black">
            <Image 
                src="/loading/loadingscreen.svg" 
                alt="Loading Screen" 
                fill 
                className="absolute inset-0 object-cover" 
                draggable={false}
                priority // Preload critical image
            />
            <div className="relative flex flex-col items-center z-10">
                <div className="relative md:h-52 md:w-32 w-26 h-42">
                    <Image 
                        src="/loading/InnerveLoadingLogo.svg" 
                        alt="Innerve Logo" 
                        fill 
                        className="mx-auto z-0 mb-4" 
                        draggable={false}
                        priority
                    />
                    <motion.div
                        animate={{
                            x: [0, 10, -10, 0],
                            y: [0, -5, 5, 0],
                            rotate: [0, 5, -5, 0]
                        }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            ease: "easeInOut"
                        }}
                        className="absolute z-10 bottom-[15%] left-[20%] will-change-transform" // Add GPU hint
                    >
                        <Image
                            src="/loading/lens.svg"
                            alt="Lens"
                            width={70}
                            height={70}
                            draggable={false}
                            priority
                        />
                    </motion.div>
                </div>
                <div className="mt-10 text-center">
                    <p className="text-white text-stroke-h2 md:text-stroke-h4 text-[28px]">
                        Searching for <br /> participants...
                    </p>
                </div>
                <div className="w-[400px] relative max-w-[85vw] mt-16">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 text-white text-center text-2xl [text-shadow:2px_3px_0px_rgb(0,0,0)]">
                        Loading...
                    </div>
                    <div className="w-full relative h-8 bg-gray-800 rounded-md overflow-hidden border-black">
                        <div className="w-[98%] h-1/2 rounded-md absolute top-1 left-1/2 -translate-x-1/2 z-10 bg-white opacity-30" />
                        <motion.div
                            className="h-full bg-[#BC14C5] rounded-md will-change-transform"
                            style={{ width: `${progress}%` }} // Use style instead of animate for better performance
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
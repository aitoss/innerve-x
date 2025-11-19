import Image from "next/image";
import { motion } from "motion/react";
import { useState, useEffect } from "react";


export default function LoadingScreen() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 2500; // 2 seconds to match the loading time
        const interval = 25; // Update every 20ms for smooth animation
        const increment = 100 / (duration / interval);

        const timer = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return Math.min(prev + increment, 100);
            });
        }, interval);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative flex items-center justify-center h-screen bg-black">
            <Image src="/loading/loadingscreen.svg" alt="Loading Screen" fill className=" absolute inset-0 object-cover " />
            <div className="relative flex flex-col items-center  z-10 " >
                <div className="relative  md:h-52 md:w-32 w-26 h-42 " >
                    <Image src="/loading/InnerveLoadingLogo.svg" alt="Innerve Logo" fill className="mx-auto z-0 mb-4" />
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
                        className="absolute z-10 bottom-[15%] left-[20%]"
                    >
                        <Image
                            src="/loading/lens.svg"
                            alt="Lens"
                            width={70}
                            height={70}
                        />
                    </motion.div>
                </div>
                <div className="mt-10 text-center " >
                    <p className="text-white text-stroke-h2 md:text-stroke-h4 text-[28px] " >Searching for <br /> participants...</p>
                </div>
                {/* Progress Bar */}
                <div className="w-[400px] relative  max-w-[85vw] mt-16">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20 text-white text-center text-2xl [text-shadow:2px_3px_0px_rgb(0,0,0)]">Loading...</div>
                    <div className="w-full relative h-8 bg-gray-800 rounded-md overflow-hidden border-black">
                        <div className="w-[98%] h-1/2 rounded-md absolute top-1 left-1/2 -translate-x-1/2 z-10 bg-white opacity-30 " />

                        <motion.div
                            className="h-full bg-[#BC14C5] rounded-md"
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1, ease: "linear" }}
                        />
                    </div>
                    {/* <div className="text-white text-center mt-2 text-sm font-medium">
                        {Math.round(progress)}%
                    </div> */}
                </div>
            </div>
        </div>
    );
}
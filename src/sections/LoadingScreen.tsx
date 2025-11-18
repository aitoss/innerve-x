import Image from "next/image";
import { motion } from "motion/react";
import { useState, useEffect } from "react";


export default function LoadingScreen() {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const duration = 2000; // 2 seconds to match the loading time
        const interval = 20; // Update every 20ms for smooth animation
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
                <div className="relative h-52 w-32  " >
                    <Image src="/loading/InnerveLoadingLogo.svg" alt="Innerve Logo" fill className="mx-auto z-0 mb-4" />
                    <motion.div
                        animate={{
                            x: [0, 10, -10, 0],
                            y:[0, -5, 5, 0],
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
                <div className="mt-10" >
                    <p className="text-white text-stroke-h4 text-[2rem] " >Searching for <br /> participatants...</p>
                </div>
                <div className="text-white text-center text-xl animate-pulse">Loading...</div>
                
                {/* Progress Bar */}
                <div className="w-[400px] max-w-[90vw] mt-8">
                    <div className="w-full h-8 bg-gray-800 rounded-full overflow-hidden border-2 border-gray-700">
                        <motion.div
                            className="h-full bg-linear-to-r from-purple-500 to-pink-500 rounded-full"
                            initial={{ width: "0%" }}
                            animate={{ width: `${progress}%` }}
                            transition={{ duration: 0.1, ease: "linear" }}
                        />
                    </div>
                    <div className="text-white text-center mt-2 text-sm font-medium">
                        {Math.round(progress)}%
                    </div>
                </div>

            </div>
        </div>
    );
}
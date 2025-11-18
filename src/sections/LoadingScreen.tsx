import Image from "next/image";
import { motion } from "motion/react";


export default function LoadingScreen() {
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
                <div>

                </div>

            </div>
        </div>
    );
}
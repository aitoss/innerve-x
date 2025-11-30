import * as motion from "motion/react-client"
import Image from "next/image";
import Glow from "@/assets/svg/dropped-image.png"

export default function GlowAnimation() {
    return (
        <motion.div className="w-fit h-fit"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
        <Image src={Glow} alt="" draggable={false}/>
        </motion.div>
 )}
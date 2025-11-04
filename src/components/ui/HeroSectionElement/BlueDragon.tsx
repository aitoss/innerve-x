import Image from "next/image";
import BlueDragonImage from "../../../assets/svg/dragon-2.svg"
import { motion } from "motion/react";

interface BlueDragonProps {
    X?: any;
    Y?: any;
}


export default function BlueDragon({X,Y}: BlueDragonProps){
    return (
        <motion.div className="absolute inline-block bottom-[10%] right-[-20%] z-20" style={{x:X, y:Y}} >
            <Image src={BlueDragonImage} alt="Blue dragon" />
        </motion.div>
    )
}
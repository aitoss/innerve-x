import Image from "next/image";
import {motion} from "motion/react"
import GreenDragonImage from "../../../assets/svg/dragon-1.svg"

interface GreenDragonProps {
    X?:any;
    Y?:any;
}

export default function GreenDragon({X,Y}: GreenDragonProps){
    return (
        <motion.div className="absolute bottom-[-5%] left-[-13%] z-20" style={{x:X, y:Y}}>
            <Image src={GreenDragonImage} alt="GreenDragonImage" />
        </motion.div>
    )
}
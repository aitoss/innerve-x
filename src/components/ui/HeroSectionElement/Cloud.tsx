import { div } from "motion/react-client"
import Image from "next/image";
import CloudImage from "../../../assets/svg/cloud.svg"


export default function Cloud({position}:any) {
    return (
        <div className={`absolute ${position} overflow-hidden z-1 pointer-events-none`}>
            <Image src={CloudImage} alt="Cloud"  />
        </div>
    );
}
import Image from "next/image"
import BalloonImage from "../../../assets/svg/balloon.svg"

interface BalloonProps {
    position?: string;
    size?: string;
}

export default function Balloon({position="", size="h-[100px] w-[100px]"}:BalloonProps){
    return (
        <div className={`absolute ${position} z-20`}>
            <Image src={BalloonImage} alt="Balloon" className={size} />
        </div>
    )
}
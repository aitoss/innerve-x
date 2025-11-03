import Image from "next/image"
import Bat1Image from "../../../assets/svg/bat.svg"

interface Bat1Props {
  position?: string;
  size?: string;
}

export default function Bat1({position="", size="h-[100px] w-[100px]"}:Bat1Props){
    return(
        <div className={`absolute ${position} z-20`}>
            <Image src={Bat1Image} alt="Bat-1" className={size} /> 
        </div>
    )
}
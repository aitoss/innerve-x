import Image from "next/image"
import Bat2Image from "../../../assets/svg/bat 2.svg"

interface Bat2Props {
    position?: string;
    size?: string;
    }

export default function Bat2({position="", size=""}:Bat2Props){
    return(
        <div className={`absolute ${position} z-20`}>
            <Image src={Bat2Image} alt="Bat-2" className={size} />
        </div>
    )
}
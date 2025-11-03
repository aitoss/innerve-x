import Image from "next/image";
import GreenDragonImage from "../../../assets/svg/dragon-1.svg"

export default function GreenDragon(){
    return (
        <div className="absolute bottom-[-5%] left-[-13%] z-20" >
            <Image src={GreenDragonImage} alt="GreenDragonImage" />
        </div>
    )
}
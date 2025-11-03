import Image from "next/image";
import BlueDragonImage from "../../../assets/svg/dragon-2.svg"



export default function BlueDragon(){
    return (
        <div className="absolute inline-block bottom-[10%] right-[-20%] z-20">
            <Image src={BlueDragonImage} alt="Blue dragon" />
        </div>
    )
}
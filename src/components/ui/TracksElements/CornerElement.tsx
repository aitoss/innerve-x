import Image from "next/image";
import BlueCorner from "../../../assets/svg/Traks/BlueCorner.svg"


interface CornerElementProps{
    Position?:string,
    Rotation?:string,
    ImageSrc:string
}

export default function CornerElement({Position="top-0 left-0", Rotation="0deg", ImageSrc}:CornerElementProps){
    return(
        <div className={`absolute ${Position}`} style={{transform: `rotate(${Rotation})`}}>
            <Image src={ImageSrc} alt="Corner Img" draggable={false}/>
        </div>
    )
}
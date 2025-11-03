import Image from "next/image"
import LogoHeading from "../../assets/svg/innerveTaglineLogo.svg"


export default function InnerveHeadingLogo() {
    return ( 
        <Image src={LogoHeading} alt="Innerve Heading Logo" width={768} height={200} className=" relative z-30" />
    )
}
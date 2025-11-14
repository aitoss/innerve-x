import Image from "next/image"
import LogoHeading from "../../assets/svg/innerveTaglineLogo.svg"


export default function InnerveHeadingLogo() {
    return ( 
        <Image src={LogoHeading} alt="Innerve Heading Logo"  className=" w-full h-auto relative z-30" />
    )
}
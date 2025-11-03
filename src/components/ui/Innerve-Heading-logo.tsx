import Image from "next/image"
import LogoHeading from "../../assets/webp/logo-heading.webp"

export default function InnerveHeadingLogo() {
    return ( 
        <Image src={LogoHeading} alt="Innerve Heading Logo" width={768} height={200} className=" relative z-5" />
    )
}
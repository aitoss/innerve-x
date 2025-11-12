import Image from "next/image";
import innerveLogo from "@/assets/svg/innervelogo.svg"
import InnerveLogo2 from "../../assets/svg/InnerveLogo2.svg"

export default function InnerveNavbarLogo() {
    return (
        <div className="flex gap-1 sm:gap-2 items-center text-white" >
            <Image 
                src={InnerveLogo2} 
                alt="Innerve Logo 2" 
                className="w-26 h-auto sm:w-44 md:w-52  lg:w-auto "
            />
        </div>
    );
}
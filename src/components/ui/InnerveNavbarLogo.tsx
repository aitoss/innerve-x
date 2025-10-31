import Image from "next/image";
import innerveLogo from "@/assets/svg/innervelogo.svg"

export default function InnerveNavbarLogo() {
    return (
        <div className="flex gap-2 items-center text-white " >
            <Image src={innerveLogo} alt="Innerve Logo" width={15} height={17} />
            <h1 className="text-2xl font-bold font-clashClan">Innerve - X</h1>
        </div>
    );
}
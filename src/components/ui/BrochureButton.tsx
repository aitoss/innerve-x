import Image from "next/image";
import broucherButton from "../../assets/svg/brouchureButton.svg"

export default function BrochureButton() {
    return (
        <button>
            <Image src={broucherButton} alt="Brochure Button" />
        </button>

        // <button className="relative text-center w-64 h-14 bg-gradient-to-b from-lime-300 via-lime-300 to-lime-500 rounded-lg border-[1.19px] border-lime-300" >
        //     <span className="text-center justify-start text-white text-2xl font-normal text-stroke-black  [text-shadow:_0px_2px_0px_rgb(0_0_0_/_1.00)]">Brochure</span>
        // </button>
    );
}
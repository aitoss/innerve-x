import Image from "next/image";
import broucherButton from "../../assets/svg/brouchureButton.svg"

export default function BrochureButton() {
    return (
        // <button className="transition-transform duration-200 hover:scale-105 active:scale-95">
        //     <Image 
        //         src={broucherButton} 
        //         alt="Brochure Button" 
        //         className="w-3/4 h-auto   md:w-9/10 lg:w-auto "
        //     />
        // </button>

        <button className="w-full border-2 rounded-xl" >
            <div className="w-full text-white text-shadow flex justify-center items-end lg:text-xl md:md lg:px-10 md:px-6 lg:pt-2 md:pt-1 shadow-[0_-3px_0_#fff]   border-b-10 border-[#74C138] border-x-2 border-t-2 bor bg-[#9ED952] rounded-xl  ">
                Brochure
            </div>
        </button>

    );
}
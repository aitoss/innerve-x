import Image from "next/image";
import broucherButton from "../../assets/svg/brouchureButton.svg"
import ButtonSound from "../../utils/ButtonClickedSound"
export default function BrochureButton() {
const handleClick = () => {
    ButtonSound();
    window.open('https://docs.google.com/document/d/1uMeesybWs7aWRscEMJtW4YFVqXG8gAVpcbvkaJ6XgIQ/edit?amp;fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnet9ycJwGWHNyA8nB7r8Vx2AmSm6g8k9DP2f9M5Fkt6e7psWKQVP0SMR5DY4_aem_ItCrHIZU-qCzFp-WBBkR1g&pli=1&tab=t.0', '_blank');
}


    return (
        // <button className="transition-transform duration-200 hover:scale-105 active:scale-95">
        //     <Image 
        //         src={broucherButton} 
        //         alt="Brochure Button" 
        //         className="w-3/4 h-auto   md:w-9/10 lg:w-auto "
        //         draggable={false}
        //     />
        // </button>

        <button onClick={handleClick} className="w-full border-2 rounded-xl cursor-pointer transition-transform duration-200 hover:scale-[1.01] active:scale-95" >
            <div className="w-full text-white text-shadow flex justify-center items-end text-4xl lg:text-xl md:md lg:px-10 md:px-6 lg:pt-2 md:pt-1 p-1 px-8 shadow-[0_-3px_0_#fff]   border-b-10 border-[#74C138] border-x-2 border-t-2 bor bg-[#9ED952] rounded-xl  ">
                Results
            </div>
        </button>

    );
}

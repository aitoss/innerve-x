import Image from "next/image";
import broucherButton from "../../assets/svg/brouchureButton.svg"
import ButtonSound from "../../utils/ButtonClickedSound"
export default function BrochureButton() {
const handleClick = () => {
    ButtonSound();
    window.open('https://drive.google.com/file/d/1lpJ2wNF4iU-eEJ2QFSo6bw4SyxnijO5o/view?usp=drive_link', '_blank');
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
                Brochure
            </div>
        </button>

    );
}

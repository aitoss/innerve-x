import Image from "next/image";
import DividerButtonImg from "../../assets/svg/DividerButton.svg"

export default function Divider() {

    const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

    return (
        <div className="relative flex flex-col items-center w-full bg-transparent " onClick={scrollToTop}>
            <Image src={DividerButtonImg} alt="DividerButtonImg" className="absolute max-sm:w-1/5 bottom-8/10 md:bottom-full z-10" draggable={false}/>
            <hr className="w-full h-2 " style={{ background: 'linear-gradient(180deg, #FFD27F 0%, #FFDC9B 17%, #FBEAD1 33%, #E9D3B8 50%, #C7944E 67%, #BE7A00 83%, #C47F00 100%)' }} />
        </div>
    );
}
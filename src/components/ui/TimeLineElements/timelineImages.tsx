import Image from "next/image";
import BottomImage from "@/assets/svg/timelineBottomImage.svg";
import Header from "@/assets/svg/TimelineHeading.svg";
import Niddle from "@/assets/svg/TimelineNiddle.svg";

export function TimelineBottomImage() {
  return (
    <div className="relative mt-40 w-full">
      <div className="absolute mt- inset-0 bg-linear-to-t from-transparent via-[#012A57]/10 to-[#012A57]  pointer-events-none" />
      <Image
        src={BottomImage}
        alt="Timeline Bottom"
        className="w-full -mt-94 h-auto "
        style={{ 
          width: "100%", 
          height: "auto"
        }}
        draggable={false}
      />
    </div>
  );
}

export function TimelineHeader() {
  return (
    <div className="min-w-max">
      <Image src={Header} alt="Timeline Header" width={800} height={200} className="w-[800px] h-auto" draggable={false}/>
    </div>
  );
}

export function TimelineNiddle() {
  return (
    <div className="min-w-max">
      <Image src={Niddle} alt="Timeline Niddle" width={50} height={50} className="w-auto h-auto" draggable={false}/>
    </div>
  );
}
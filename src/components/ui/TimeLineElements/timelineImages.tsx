import Image from "next/image";
import BottomImage from "@/assets/svg/timelineBottomImage.svg";
import Header from "@/assets/svg/TimelineHeading.svg";
import Niddle from "@/assets/svg/TimelineNiddle.svg";

export function TimelineBottomImage() {
  return (
    <div className="relative w-full">
      <div className="absolute  inset-0 bg-linear-to-t from-transparent to-[#012A57] pointer-events-none" />
      <Image
        src={BottomImage}
        alt="Timeline Bottom"
        className="w-full -mt-94 h-auto "
        style={{ 
          width: "100%", 
          height: "auto"
        }}
      />
    </div>
  );
}

export function TimelineHeader() {
  return (
    <div className="min-w-max">
      <Image src={Header} alt="Timeline Header" width={800} height={200} className="w-[800px] h-auto" />
    </div>
  );
}

export function TimelineNiddle() {
  return (
    <div className="min-w-max">
      <Image src={Niddle} alt="Timeline Niddle" width={50} height={50} className="w-auto h-auto" />
    </div>
  );
}
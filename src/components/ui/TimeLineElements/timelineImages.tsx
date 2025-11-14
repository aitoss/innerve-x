import Image from "next/image";
import BottomImage from "@/assets/svg/timelineBottomImage.svg";
import Header from "@/assets/svg/TimelineHeading.svg";
import Niddle from "@/assets/svg/TimelineNiddle.svg";

export function TimelineBottomImage() {
  return (
    <div className="relative w-full">
      {/* Gradient overlay to blend with background */}
      <div
        className="absolute top-0 left-0 w-full h-122 z-10 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, #012A57, transparent)",
        }}
      />
      <Image
        src={BottomImage}
        alt="Timeline Bottom"
        className="w-full h-auto"
        style={{ width: "100%", height: "auto" }}
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
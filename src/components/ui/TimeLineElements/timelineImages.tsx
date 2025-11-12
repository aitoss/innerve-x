import Image from "next/image";
import BottomImage from "@/assets/svg/timelineBottomImage.svg";

export function TimelineBottomImage() {
  return (
    <div className="relative w-full">
      {/* Gradient overlay to blend with background */}
      <div 
        className="absolute top-0 left-0 w-full h-122 z-10 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, #2B5497, transparent)'
        }}
      />
      <Image 
        src={BottomImage} 
        alt="Timeline Bottom" 
        className="w-full h-auto"
        style={{ width: '100%', height: 'auto' }}
      />
    </div>
  );
}
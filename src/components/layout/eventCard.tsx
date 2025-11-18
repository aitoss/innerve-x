import { EventCardShield, PlankImage } from "@/components/ui/ClockElements/eventCardImages";

export default function   EventCard() {
  return (
    <>
      <div className="relative">
        <PlankImage />
        <div className="absolute top-1/5 -left-[2px q] sm:left-2 md:left-3 lg:-left-5   z-50">
          <EventCardShield />
        </div>
        {/* Mobile: 35px, SM: 51px, MD: 71px, LG: 101px */}
        <div className="absolute w-[35px] h-full sm:w-[51px] md:w-[71px] lg:w-[101px] bg-linear-to-b from-[#8a1b07] via-[#c52119] to-[#6b120c] top-0 left-[42px] sm:left-[60px] md:left-[84px] lg:left-26">
          <div className="absolute w-px h-full bg-[#bf5f5b] left-[3px] sm:left-[5px] md:left-1.5 lg:left-[9px]"></div>
          <div className="absolute w-px h-full bg-[#bf5f5b] right-[3px] sm:right-[5px] md:right-1.5 lg:right-[9px]"></div>
        </div>
        <div className="absolute">
          {/* Mobile: -105px/116px, SM: -150px/165px, MD: -210px/231px, LG: -300px/330px */}
          <div className="absolute text-stroke-h4 -top-[105px] left-[116px] sm:-top-[150px] sm:left-[165px] md:-top-[210px] md:left-[231px] lg:-top-[300px] lg:left-[300px] text-white text-center text-[8px]  flex gap-1 sm:gap-1.5 md:gap-2 lg:gap-3 justify-center">
            {/* Mobile: text-[28px], SM: text-[40px], MD: text-[56px], LG: text-8xl */}
            <div className="text-[28px] sm:text-[40px] md:text-[56px] lg:text-8xl leading-none">
              30
              {/* Mobile: text-[18px] mt-1.5, SM: text-[25px] mt-2, MD: text-[35px] mt-3, LG: text-5xl mt-4 */}
              <div className="text-[18px] mt-1 sm:text-[25px] sm:mt-1.5 md:text-[35px] md:mt-2 lg:text-5xl lg:mt-3 flex flex-col gap-0.5 sm:gap-1 md:gap-1.5 lg:gap-3 justify-center">
                <div>Jan</div>
                <div>2026</div>
              </div>
            </div>
            <div className="text-[28px] sm:text-[40px] md:text-[56px] lg:text-8xl leading-none">-</div>
            <div className="text-[28px] sm:text-[40px] md:text-[56px] lg:text-8xl leading-none">
              31
              <div className="text-[18px] mt-1 sm:text-[25px] sm:mt-1.5 md:text-[35px] md:mt-2 lg:text-5xl lg:mt-3 flex flex-col gap-0.5 sm:gap-1 md:gap-1.5 lg:gap-3 justify-center">
                <div>Jan</div>
                <div>2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

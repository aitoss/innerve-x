import { EventCardShield, PlankImage } from "@/components/ui/ClockElements/eventCardImages";

export default function EventCard() {
  return (
    <>
      <div className="relative">
        <PlankImage />
        <div className="absolute top-1/5 left-4 z-50">
          <EventCardShield />
        </div>
        <div className="absolute w-[101px] h-full bg-linear-to-b from-[#8a1b07] via-[#c52119] to-[#6b120c] top-0 left-30">
          <div className="absolute w-px h-full bg-[#bf5f5b] left-[9px]"></div>
          <div className="absolute w-px h-full bg-[#bf5f5b] right-[9px]"></div>
        </div>
        <div className="absolute">
          <div className="absolute -top-[300px] left-[330px] text-white text-center text-[24px] font-bold [text-shadow:0px_5px_0px_rgb(0_0_0/1.00)] flex gap-6 justify-center">
            <div className="text-8xl">
              30
              <div className="text-5xl mt-4 flex flex-col gap-4 justify-center">
                <div>jan</div>
                <div>2026</div>
              </div>
            </div>
            <div className="text-8xl">-</div>
            <div className="text-8xl">
              31
              <div className="text-5xl mt-4 flex flex-col gap-4 justify-center ">
                <div>jan</div>
                <div>2026</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

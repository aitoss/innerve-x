import CountdownTimer from "@/components/ui/ClockElements/countdownTimer";
import ClockAnimation from "@/components/ui/ClockElements/clockanimation";
import CountdownArrow from "@/components/ui/ClockElements/countdownArrows";

export default function CountdownTimerCard() {
  return (
    <div className="relative z-10">
      {/* Mobile: 35% = 301px, SM: 50% = 430px, MD: 70% = 602px, LG: 100% = 860px */}
      <div className=" h-[95px] w-[301px] sm:h-[136px] sm:w-[430px] md:h-[190px] md:w-[602px] lg:h-[272px] lg:w-[860px] text-xs sm:text-base md:text-lg lg:text-2xl border border-black sm:border-2 rounded-2xl md:rounded-4xl">
        <div className=" h-[25%]  rounded-tr-2xl rounded-tl-2xl w-full md:rounded-tr-4xl md:rounded-tl-4xl bg-linear-to-b from-[#E7EDFB] to-[#DDDFF8] flex items-center justify-center">
          {/* Mobile: 214px, SM: 306px, MD: 428px, LG: 612px */}
          <div className="h-[45px] w-[214px] sm:h-[67px] sm:w-[306px] md:h-[93px] md:w-[428px] lg:h-[133px] lg:w-[612px] mb-5 md:mb-8 bg-[linear-gradient(180deg,#25aa87_0%,#52f4c0_8%,#0fae7e_17%,#00875f_88%)] rounded-t-[7px] sm:rounded-t-[10px] md:rounded-t-[14px] lg:rounded-t-[20px] rounded-b-xl">
            <div className="h-10 text-stroke-h4 sm:h-[60px] md:h-[83px] lg:h-[119px] rounded-t-[7px] sm:rounded-t-[10px] md:rounded-t-[14px] lg:rounded-t-[20px] text-[18px] sm:text-[20px] md:text-[22px] lg:text-[36px] text-white [text-shadow:0_1.2px_0_#000] sm:[text-shadow:0_1.8px_0_#000] md:[text-shadow:0_2.5px_0_#000] lg:[text-shadow:0_3.558px_0_#000] flex items-center justify-center">
              Game Starts In
            </div>
            <div className="h-[5px] sm:h-[7px] md:h-2.5 lg:h-3.5 bg-[linear-gradient(180deg,#f2db70_0%,#ffdc77_39%,#a3701f_100%)] rounded-b-xl"></div>
          </div>
        </div>
        <div className=" h-[75%] w-full rounded-br-2xl rounded-bl-2xl md:rounded-br-4xl md:rounded-bl-4xl bg-linear-to-b from-[#023c2d] via-[#026144] to-[#029267] flex items-center justify-center">
          {/* Mobile: 184px, SM: 264px, MD: 369px, LG: 527px */}
          <div className="absolute mt-3 h-[34px] w-[250px] sm:h-[49px] sm:w-[264px] md:h-[68px] md:w-[369px] lg:h-[97px] lg:w-[527px] bg-[linear-gradient(180deg,#268462_49.9%,#186b4d_50.1%)] flex items-center justify-start gap-1 sm:gap-2 md:gap-3 lg:gap-4 rounded-r-xl sm:rounded-r-2xl rounded-[21px] sm:rounded-[30px] md:rounded-[42px] lg:rounded-[60px] border-t border-r border-b sm:border-t-2 sm:border-r-2 sm:border-b-2 border-t-[#1E7152] border-r-[#1E7152] border-b-[#55BD9A]">
            {/* Mobile: 34px, SM: 49px, MD: 68px, LG: 97px */}
            <div className="w-[34px] h-8 sm:w-[49px] sm:h-[45px] md:w-[68px] md:h-[63px] lg:w-[97px] lg:h-[90px] rounded-[100px] mb-0.5 sm:mb-1 md:mb-1.5 lg:mb-2">
              <ClockAnimation />
            </div>
            <div className="text-center pr-4  flex-1">
              <CountdownTimer eventdate={new Date(2026, 0, 30, 9, 0, 0)} />
            </div>
            {/* Mobile: 35px, SM: 50px, MD: 70px, LG: 100px */}
            <div className="hidden md:block absolute -left-[42px] sm:-left-[60px] md:-left-[84px] lg:-left-34 -top-0.5 sm:-top-1 w-[35px] sm:w-[50px] md:w-[70px] lg:w-[100px]">
              <CountdownArrow />
            </div>
            <div className="hidden md:block absolute -right-[42px] sm:-right-[60px] md:-right-[84px] lg:-right-34 -top-0.5 sm:-top-1 w-[35px] sm:w-[50px] md:w-[70px] lg:w-[100px] scale-x-[-1] transform">
              <CountdownArrow />
            </div>
          </div>
        </div>
      </div>
    </div  >
  );
}

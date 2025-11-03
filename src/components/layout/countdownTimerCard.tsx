import CountdownTimer from "@/utils/countdownTimer";
import ClockAnimation from "@/components/ui/clockanimation"
import CountdownArrow from "@/components/ui/countdownArrows";

export default function CountdownTimerCard() {
  return (
    <>
      <div className="h-[272px] w-[860px] text-2xl border-2 border-black rounded-4xl">
        <div className="h-[25%] w-full rounded-tr-4xl rounded-tl-4xl text-2xl bg-linear-to-b from-[#E7EDFB] to-[#DDDFF8] flex items-center justify-center">
          <div className="h-[133px] w-[612px] bg-[linear-gradient(180deg,#25aa87_0%,#52f4c0_8%,#0fae7e_17%,#00875f_88%)] rounded-t-[20px] rounded-b-xl">
            <div className="h-[119px] rounded-t-[20px] text-[32px] text-white [text-shadow:0_3.558px_0_#000] flex pt-[8%] justify-center">
              Game Starts In
            </div>
            <div className="h-3.5 bg-[linear-gradient(180deg,#f2db70_0%,#ffdc77_39%,#a3701f_100%)] rounded-b-xl"></div>
          </div>
        </div>
        <div className="h-[75%] w-full rounded-br-4xl rounded-bl-4xl bg-linear-to-b from-[#023c2d] via-[#026144] to-[#029267] flex items-center justify-center">
          <div className="absolute h-[97px] w-[527px] bg-[linear-gradient(180deg,#268462_49.9%,#186b4d_50.1%)] flex items-center justify-start gap-4 rounded-r-2xl rounded-l-[60px] border-t-2 border-r-2 border-b-2  border-t-[#1E7152] border-r-[#1E7152] border-b-[#55BD9A]">
            <div className="w-[97px] h-[90px] rounded-[100px] mb-2">
                <ClockAnimation />
            </div>
            <div className="text-center">
              <CountdownTimer eventdate={new Date(2026, 0, 30, 9, 0, 0)} />
            </div>
          <div className="absolute -left-34 -top-1 w-[100px]">
            <CountdownArrow />
          </div>
          <div className="absolute left-140 -top-1 w-[100px] scale-x-[-1] transform">
            <CountdownArrow />
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

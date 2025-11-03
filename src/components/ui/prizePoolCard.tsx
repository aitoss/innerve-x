import GlowAnimation from "./glowAnimation";
import { AxeImage, GoldStorage1Image, GoldStorage2Image, Rectangle } from "./prizeCardsImages";

export default function PrizePoolCard() {
  return (
    <>
      <div className="w-[461px] inline-flex flex-col justify-start items-start">
        <div className="w-96 h-32 relative overflow-hidden">
          <div className="w-80 px-2.5 py-4 left-12 top-[66px] absolute bg-linear-to-r from-violet-900 to-violet-950 rounded-tl-md rounded-tr-md border-l-[5px] border-r-[5px] border-t-[5px] border-yellow-500 inline-flex justify-center items-center gap-2.5">
            <div className="text-center justify-start text-white text-2xl font-normal [[text-shadow:0px_2px_0px_rgb(0_0_0/1.00)]">
              1st PRIZE
            </div>
          </div>
          <div className="w-80 h-20 left-0 top-0 absolute overflow-hidden">
            <div className="w-72 h-10 left-[32.11px] top-[27.16px] absolute">
              <div className="w-72 h-10 left-0 top-1.5 absolute">
                <Rectangle />
              </div>
              <div className="left-[67.89px] top-[9.84px] absolute text-center justify-start text-yellow-700 text-xl font-normal ">
                STORE BONUS
              </div>
            </div>
            <div className="w-28 h-20 left-0 top-1 absolute z-10">
              <AxeImage />
            </div>
          </div>
        </div>
        <div className="self-stretch px-3 pt-14 pb-3 bg-linear-to-b from-amber-300 to-yellow-500 rounded-3xl shadow-[0px_14px_0px_0px_rgba(0,0,0,0.25)] outline-10 outline-offset-[-10px] outline-yellow-500 flex flex-col justify-start items-center gap-2 overflow-hidden">
          <div className="self-stretch relative flex flex-col justify-center items-center">
            <div className="self-stretch text-center justify-start text-white text-8xl font-normal [text-shadow:0px_4px_0px_rgb(0_0_0/1.00)]">
              125K+
            </div>
            <div className="w-96 h-96 left-8 top-24 absolute">
              <GlowAnimation />
            </div>
            <div className="w-80 h-80 z-1">
              <GoldStorage1Image />
            </div>
          </div>
          <div className="w-[458px] px-6 py-4 bg-amber-700/75 inline-flex justify-center items-center gap-3 overflow-hidden">
            <div className="flex-1 text-center justify-start text-white text-xl font-normal leading-6 [text-shadow:0px_2px_0px_rgb(0_0_0/1.00)]">
              Innerve Goodies and Merch.
              <br /> Fundings and Internship opportunities from our sponsors
            </div>
          </div>
        </div>
      </div>
      
      <div className="w-[461px] inline-flex flex-col justify-start items-start">
        <div className="w-96 h-32 relative overflow-hidden">
          <div className="w-80 px-2.5 py-4 left-12 top-[66px] absolute bg-linear-to-r from-violet-900 to-violet-950 rounded-tl-md rounded-tr-md border-l-[5px] border-r-[5px] border-t-[5px] border-yellow-500 inline-flex justify-center items-center gap-2.5">
            <div className="text-center justify-start text-white text-2xl font-normal [[text-shadow:0px_2px_0px_rgb(0_0_0/1.00)]">
              2nd PRIZE
            </div>
          </div>
          <div className="w-80 h-20 left-0 top-0 absolute overflow-hidden">
            <div className="w-72 h-10 left-[32.11px] top-[27.16px] absolute">
              <div className="w-72 h-10 left-0 top-1.5 absolute">
                <Rectangle />
              </div>
              <div className="left-[67.89px] top-[9.84px] absolute text-center justify-start text-yellow-700 text-xl font-normal ">
                STORE BONUS
              </div>
            </div>
            <div className="w-28 h-20 left-0 top-1 absolute z-10">
              <AxeImage />
            </div>
          </div>
        </div>
        <div className="self-stretch px-3 pt-14 pb-3 bg-linear-to-b from-amber-300 to-yellow-500 rounded-3xl shadow-[0px_14px_0px_0px_rgba(0,0,0,0.25)] outline-10 outline-offset-[-10px] outline-yellow-500 flex flex-col justify-start items-center gap-2 overflow-hidden">
          <div className="self-stretch relative flex flex-col justify-center items-center">
            <div className="self-stretch text-center justify-start text-white text-8xl font-normal [text-shadow:0px_4px_0px_rgb(0_0_0/1.00)]">
              75K+
            </div>
            <div className="w-96 h-96 left-8 top-24 absolute">
              <GlowAnimation />
            </div>
            <div className="w-80 h-80 z-1">
              <GoldStorage2Image />
            </div>
          </div>
          <div className="w-[458px] px-6 py-4 bg-amber-700/75 inline-flex justify-center items-center gap-3 overflow-hidden">
            <div className="flex-1 text-center justify-start text-white text-xl font-normal leading-6 [text-shadow:0px_2px_0px_rgb(0_0_0/1.00)]">
              Innerve Goodies and Merch.
              <br /> Fundings and Internship opportunities from our sponsors
            </div>
          </div>
        </div>
      </div>

      <div className="w-[461px] inline-flex flex-col justify-start items-start">
        <div className="w-96 h-32 relative overflow-hidden">
          <div className="w-80 px-2.5 py-4 left-12 top-[66px] absolute bg-linear-to-r from-violet-900 to-violet-950 rounded-tl-md rounded-tr-md border-l-[5px] border-r-[5px] border-t-[5px] border-yellow-500 inline-flex justify-center items-center gap-2.5">
            <div className="text-center justify-start text-white text-2xl font-normal [[text-shadow:0px_2px_0px_rgb(0_0_0/1.00)]">
              1st PRIZE
            </div>
          </div>
          <div className="w-80 h-20 left-0 top-0 absolute overflow-hidden">
            <div className="w-72 h-10 left-[32.11px] top-[27.16px] absolute">
              <div className="w-72 h-10 left-0 top-1.5 absolute">
                <Rectangle />
              </div>
              <div className="left-[67.89px] top-[9.84px] absolute text-center justify-start text-yellow-700 text-xl font-normal ">
                STORE BONUS
              </div>
            </div>
            <div className="w-28 h-20 left-0 top-1 absolute z-10">
              <AxeImage />
            </div>
          </div>
        </div>
        <div className="self-stretch px-3 pt-14 pb-3 bg-linear-to-b from-amber-300 to-yellow-500 rounded-3xl shadow-[0px_14px_0px_0px_rgba(0,0,0,0.25)] outline-10 outline-offset-[-10px] outline-yellow-500 flex flex-col justify-start items-center gap-2 overflow-hidden">
          <div className="self-stretch relative flex flex-col justify-center items-center">
            <div className="self-stretch text-center justify-start text-white text-8xl font-normal [text-shadow:0px_4px_0px_rgb(0_0_0/1.00)]">
              125K+
            </div>
            <div className="w-96 h-96 left-8 top-24 absolute">
              <GlowAnimation />
            </div>
            <div className="w-80 h-80 z-1">
              <GoldStorage1Image />
            </div>
          </div>
          <div className="w-[458px] px-6 py-4 bg-amber-700/75 inline-flex justify-center items-center gap-3 overflow-hidden">
            <div className="flex-1 text-center justify-start text-white text-xl font-normal leading-6 [text-shadow:0px_2px_0px_rgb(0_0_0/1.00)]">
              Innerve Goodies and Merch.
              <br /> Fundings and Internship opportunities from our sponsors
            </div>
          </div>
        </div>
      </div>

      <div className="w-[461px] inline-flex flex-col justify-start items-start">
        <div className="w-96 h-32 relative overflow-hidden">
          <div className="w-80 px-2.5 py-4 left-12 top-[66px] absolute bg-linear-to-r from-violet-900 to-violet-950 rounded-tl-md rounded-tr-md border-l-[5px] border-r-[5px] border-t-[5px] border-yellow-500 inline-flex justify-center items-center gap-2.5">
            <div className="text-center justify-start text-white text-2xl font-normal [[text-shadow:0px_2px_0px_rgb(0_0_0/1.00)]">
              1st PRIZE
            </div>
          </div>
          <div className="w-80 h-20 left-0 top-0 absolute overflow-hidden">
            <div className="w-72 h-10 left-[32.11px] top-[27.16px] absolute">
              <div className="w-72 h-10 left-0 top-1.5 absolute">
                <Rectangle />
              </div>
              <div className="left-[67.89px] top-[9.84px] absolute text-center justify-start text-yellow-700 text-xl font-normal ">
                STORE BONUS
              </div>
            </div>
            <div className="w-28 h-20 left-0 top-1 absolute z-10">
              <AxeImage />
            </div>
          </div>
        </div>
        <div className="self-stretch px-3 pt-14 pb-3 bg-linear-to-b from-amber-300 to-yellow-500 rounded-3xl shadow-[0px_14px_0px_0px_rgba(0,0,0,0.25)] outline-10 outline-offset-[-10px] outline-yellow-500 flex flex-col justify-start items-center gap-2 overflow-hidden">
          <div className="self-stretch relative flex flex-col justify-center items-center">
            <div className="self-stretch text-center justify-start text-white text-8xl font-normal [text-shadow:0px_4px_0px_rgb(0_0_0/1.00)]">
              125K+
            </div>
            <div className="w-96 h-96 left-8 top-24 absolute">
              <GlowAnimation />
            </div>
            <div className="w-80 h-80 z-1">
              <GoldStorage1Image />
            </div>
          </div>
          <div className="w-[458px] px-6 py-4 bg-amber-700/75 inline-flex justify-center items-center gap-3 overflow-hidden">
            <div className="flex-1 text-center justify-start text-white text-xl font-normal leading-6 [text-shadow:0px_2px_0px_rgb(0_0_0/1.00)]">
              Innerve Goodies and Merch.
              <br /> Fundings and Internship opportunities from our sponsors
            </div>
          </div>
        </div>
      </div>

      <div className="w-[461px] inline-flex flex-col justify-start items-start">
        <div className="w-96 h-32 relative overflow-hidden">
          <div className="w-80 px-2.5 py-4 left-12 top-[66px] absolute bg-linear-to-r from-violet-900 to-violet-950 rounded-tl-md rounded-tr-md border-l-[5px] border-r-[5px] border-t-[5px] border-yellow-500 inline-flex justify-center items-center gap-2.5">
            <div className="text-center justify-start text-white text-2xl font-normal [[text-shadow:0px_2px_0px_rgb(0_0_0/1.00)]">
              1st PRIZE
            </div>
          </div>
          <div className="w-80 h-20 left-0 top-0 absolute overflow-hidden">
            <div className="w-72 h-10 left-[32.11px] top-[27.16px] absolute">
              <div className="w-72 h-10 left-0 top-1.5 absolute">
                <Rectangle />
              </div>
              <div className="left-[67.89px] top-[9.84px] absolute text-center justify-start text-yellow-700 text-xl font-normal ">
                STORE BONUS
              </div>
            </div>
            <div className="w-28 h-20 left-0 top-1 absolute z-10">
              <AxeImage />
            </div>
          </div>
        </div>
        <div className="self-stretch px-3 pt-14 pb-3 bg-linear-to-b from-amber-300 to-yellow-500 rounded-3xl shadow-[0px_14px_0px_0px_rgba(0,0,0,0.25)] outline-10 outline-offset-[-10px] outline-yellow-500 flex flex-col justify-start items-center gap-2 overflow-hidden">
          <div className="self-stretch relative flex flex-col justify-center items-center">
            <div className="self-stretch text-center justify-start text-white text-8xl font-normal [text-shadow:0px_4px_0px_rgb(0_0_0/1.00)]">
              125K+
            </div>
            <div className="w-96 h-96 left-8 top-24 absolute">
              <GlowAnimation />
            </div>
            <div className="w-80 h-80 z-1">
              <GoldStorage1Image />
            </div>
          </div>
          <div className="w-[458px] px-6 py-4 bg-amber-700/75 inline-flex justify-center items-center gap-3 overflow-hidden">
            <div className="flex-1 text-center justify-start text-white text-xl font-normal leading-6 [text-shadow:0px_2px_0px_rgb(0_0_0/1.00)]">
              Innerve Goodies and Merch.
              <br /> Fundings and Internship opportunities from our sponsors
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

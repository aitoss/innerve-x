"use client";
import Tilt from "react-parallax-tilt";
import GlowAnimation from "./glowAnimation";
import {
  AxeImage,
  GoldStorage1Image,
  GoldStorage2Image,
  GoldStorage3Image,
  GoldStorage4Image,
  GoldStorage5Image,
  Rectangle,
} from "./prizePoolImages";

export default function PrizePoolCard() {
  return (
    <div className="gap-10 mt-18 mb-18 flex flex-wrap justify-center items-start">
      <Tilt>
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
          <div className="self-stretch px-3 pt-14 pb-3 bg-linear-to-b from-[#fdd05c] via-[#e9a907] to-[#e9a907] rounded-3xl shadow-[0px_14px_0px_0px_rgba(0,0,0,0.25)] outline-10 outline-offset-[-10px] outline-[#e9a907] flex flex-col justify-start items-center gap-2 overflow-hidden">
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
            <div className="w-[458px] px-6 py-4 bg-[#c6661c] inline-flex justify-center items-center gap-3 overflow-hidden">
              <div className="flex-1 text-center justify-start text-white text-xl font-normal leading-6 [text-shadow:0px_2px_0px_rgb(0_0_0/1.00)]">
                Innerve Goodies and Merch.
                <br /> Fundings and Internship opportunities from our sponsors
              </div>
            </div>
          </div>
        </div>
      </Tilt>

      <Tilt>
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
          <div className="self-stretch px-3 pt-14 pb-3 bg-linear-to-b from-violet-500 via-purple-800 to-fuchsia-950 rounded-3xl shadow-[0px_14px_0px_0px_rgba(0,0,0,0.25)] outline-10 outline-offset-[-10px] outline-[#452A76] flex flex-col justify-start items-center gap-2 overflow-hidden">
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
            <div className="w-[458px] px-6 py-4 bg-[#875bff]/75 inline-flex justify-center items-center gap-3 overflow-hidden">
              <div className="flex-1 text-center justify-start text-white text-xl font-normal leading-6 [text-shadow:0px_2px_0px_rgb(0_0_0/1.00)]">
                Innerve Goodies and Merch.
                <br /> Fundings and Internship opportunities from our sponsors
              </div>
            </div>
          </div>
        </div>
      </Tilt>

      <Tilt>
        <div className="w-[461px] inline-flex flex-col justify-start items-start">
          <div className="w-96 h-32 relative overflow-hidden">
            <div className="w-80 px-2.5 py-4 left-12 top-[66px] absolute bg-linear-to-r from-violet-900 to-violet-950 rounded-tl-md rounded-tr-md border-l-[5px] border-r-[5px] border-t-[5px] border-yellow-500 inline-flex justify-center items-center gap-2.5">
              <div className="text-center justify-start text-white text-2xl font-normal [[text-shadow:0px_2px_0px_rgb(0_0_0/1.00)]">
                3rd PRIZE
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
          <div className="self-stretch px-3 pt-14 pb-3 bg-[linear-gradient(180deg,#bd5341_0%,#A52D1C_36%,#62180f_71%)] rounded-3xl shadow-[0px_14px_0px_0px_rgba(0,0,0,0.25)] outline-10 outline-offset-[-10px] outline-[#802b1e] flex flex-col justify-start items-center gap-2 overflow-hidden">
            <div className="self-stretch relative flex flex-col justify-center items-center">
              <div className="self-stretch text-center justify-start text-white text-8xl font-normal [text-shadow:0px_4px_0px_rgb(0_0_0/1.00)]">
                50K+
              </div>
              <div className="w-96 h-96 left-8 top-24 absolute">
                <GlowAnimation />
              </div>
              <div className="w-80 h-80 z-1">
                <GoldStorage3Image />
              </div>
            </div>
            <div className="w-[458px] px-6 py-4 bg-[#dd6c45] inline-flex justify-center items-center gap-3 overflow-hidden">
              <div className="flex-1 text-center justify-start text-white text-xl font-normal leading-6 [text-shadow:0px_2px_0px_rgb(0_0_0/1.00)]">
                Innerve Goodies and Merch.
                <br /> Fundings and Internship opportunities from our sponsors
              </div>
            </div>
          </div>
        </div>
      </Tilt>

      <Tilt>
        <div className="w-[461px] inline-flex flex-col justify-start items-start">
          <div className="w-96 h-32 relative overflow-hidden">
            <div className="w-80 px-2.5 py-4 left-12 top-[66px] absolute bg-linear-to-r from-violet-900 to-violet-950 rounded-tl-md rounded-tr-md border-l-[5px] border-r-[5px] border-t-[5px] border-yellow-500 inline-flex justify-center items-center gap-2.5">
              <div className="text-center justify-start text-white text-2xl font-normal [[text-shadow:0px_2px_0px_rgb(0_0_0/1.00)]">
                4th PRIZE
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
          <div className="self-stretch px-3 pt-14 pb-3 bg-[linear-gradient(180deg,#443E3F_0%,#33302F_40%,#131314_80%)] rounded-3xl shadow-[0px_14px_0px_0px_rgba(0,0,0,0.25)] outline-10 outline-offset-[-10px] outline-[#5B524A] flex flex-col justify-start items-center gap-2 overflow-hidden">
            <div className="self-stretch relative flex flex-col justify-center items-center">
              <div className="self-stretch text-center justify-start text-white text-8xl font-normal [text-shadow:0px_4px_0px_rgb(0_0_0/1.00)]">
                25K+
              </div>
              <div className="w-96 h-96 left-8 top-24 absolute">
                <GlowAnimation />
              </div>
              <div className="pt-24 w-80 h-80 z-1">
                <GoldStorage4Image />
              </div>
            </div>
            <div className="w-[458px] px-6 py-4 bg-[#32302E] inline-flex justify-center items-center gap-3 overflow-hidden">
              <div className="flex-1 text-center justify-start text-white text-xl font-normal leading-6 [text-shadow:0px_2px_0px_rgb(0_0_0/1.00)]">
                Innerve Goodies and Merch.
                <br /> Fundings and Internship opportunities from our sponsors
              </div>
            </div>
          </div>
        </div>
      </Tilt>

      <Tilt>
        <div className="w-[461px] inline-flex flex-col justify-start items-start">
          <div className="w-96 h-32 relative overflow-hidden">
            <div className="w-80 px-2.5 py-4 left-12 top-[66px] absolute bg-linear-to-r from-violet-900 to-violet-950 rounded-tl-md rounded-tr-md border-l-[5px] border-r-[5px] border-t-[5px] border-yellow-500 inline-flex justify-center items-center gap-2.5">
              <div className="text-center justify-start text-white text-2xl font-normal [[text-shadow:0px_2px_0px_rgb(0_0_0/1.00)]">
                5th PRIZE
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
          <div className="self-stretch px-3 pt-14 pb-3 bg-[linear-gradient(180deg,#BF90D8_11%,#9E4BB0_38%,#602C87_71%,#602C87_87%)] rounded-3xl shadow-[0px_14px_0px_0px_rgba(0,0,0,0.25)] outline-10 outline-offset-[-10px] outline-[#8A41B5] flex flex-col justify-start items-center gap-2 overflow-hidden">
            <div className="self-stretch relative flex flex-col justify-center items-center">
              <div className="self-stretch text-center justify-start text-white text-8xl font-normal [text-shadow:0px_4px_0px_rgb(0_0_0/1.00)]">
                15K+
              </div>
              <div className="w-96 h-96 left-8 top-24 absolute">
                <GlowAnimation />
              </div>
              <div className="pt-24 w-80 h-80 z-1">
                <GoldStorage5Image />
              </div>
            </div>
            <div className="w-[458px] px-6 py-4 bg-[#9444A8] inline-flex justify-center items-center gap-3 overflow-hidden">
              <div className="flex-1 text-center justify-start text-white text-xl font-normal leading-6 [text-shadow:0px_2px_0px_rgb(0_0_0/1.00)]">
                Innerve Goodies and Merch.
                <br /> Fundings and Internship opportunities from our sponsors
              </div>
            </div>
          </div>
        </div>
      </Tilt>
    </div>
  );
}

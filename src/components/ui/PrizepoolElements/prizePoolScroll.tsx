import { PrizepoolCrown, PrizepoolHeadingPolygon } from "./prizePoolImages";

export default function   PrizePoolScroll() {
  return (
    <div className="h-[113px] md:h-[150px] xl:h-[212px] flex justify-center items-center w-lvw bg-[linear-gradient(180deg,#463CE4_0%,#3530D2_5%,#2D2DC1_91%,#252EA7_100%)]">
      <div className="relative -left-1/20 sm:left-[3%]">
        {/* Crown - hidden on mobile, replaced with rotated polygon */}
        <div className="hidden sm:block scale-65 md:scale-80 xl:scale-100 absolute -top-[89px] md:-top-[85px] xl:-top-14 -left-[175px] md:-left-[180px] xl:-left-50 z-30">
          <PrizepoolCrown />
        </div>
        <div className="absolute -top-[29px]  scale-55 md:scale-56 xl:scale-88 md:-top-[35px] xl:-top-[9.5px] -right-[43px] md:-right-18 xl:-right-30 z-10 w-[84px] md:w-28 xl:w-40">
          <PrizepoolHeadingPolygon />
        </div>
        <div className="sm:hidden absolute -top-[29px]  scale-55 -left-[13px] z-10 w-[84px] scale-x-[-0.6] ">
          <PrizepoolHeadingPolygon />
        </div>
        <div className="relative sm:text-stroke-h text-stroke-h text-[22px] sm:text-[28px] md:text-4xl ml-7 md:ml-10 p-4 md:p-5 xl:text-6xl xl:p-8 text-white text-center tracking-wider bg-[#041E8F] border-t-4 border-b-4 md:border-t-4 md:border-b-4 xl:border-t-8 xl:border-b-[7px] border-t-[#002395] border-b-[#014ECB] z-20">
          Prize Pool: Rs.12 Lacs+
        </div>
      </div>
    </div>
  );
}   

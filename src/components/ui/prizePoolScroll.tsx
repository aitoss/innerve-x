import { PrizepoolCrown, PrizepoolHeadingPolygon } from "./prizePoolImages";

export default function PrizePoolScroll() {
  return (
    <div className="h-[150px] xl:h-[212px] flex justify-center items-center w-lvw bg-[linear-gradient(180deg,#463CE4_0%,#3530D2_5%,#2D2DC1_91%,#252EA7_100%)] ">
      <div  className="relative -left-1/20 sm:left-[3%]">
        <div className="absolute scale-73 hidden sm:block xl:scale-100 -top-24 -left-45 xl:-top-14 xl:-left-50 z-30" >
          <PrizepoolCrown />
        </div>
        <div className="absolute scale-56 xl:scale-88 -top-[35px] xl:-top-[9.5px] -right-15 xl:-right-20 z-10" >
          <PrizepoolHeadingPolygon />
        </div>
        <div className="absolute scale-56 xl:scale-88 -top-[35px] xl:-top-[9.5px] -left-5 xl:-left-20 z-10 scale-x-[-0.6]" >
          <PrizepoolHeadingPolygon />
        </div>
        <div className="relative text-4xl left- ml-10 p-5 xl:text-6xl xl:p-8 text-white text-center bg-[#041E8F] border-t-4 border-b-4 xl:border-t-8 xl:border-b-[7px] border-t-[#002395] border-b-[#014ECB] z-20" >
          Prize Pool: 12 Lacs +
        </div>
      </div>
    </div>
  );
}

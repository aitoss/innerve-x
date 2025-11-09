import { PrizepoolCrown, PrizepoolHeadingPolygon } from "./prizePoolImages";

export default function PrizePoolScroll() {
  return (
    <div className="h-[212px] flex items-center w-lvw bg-[linear-gradient(180deg,#463CE4_0%,#3530D2_5%,#2D2DC1_91%,#252EA7_100%)] ">
      <div  className=" relative left-[30%] ">
        <div className="absolute -top-14 -left-60 z-30" >
          <PrizepoolCrown />
        </div>
        <div className="absolute scale-88 -top-[9.5px] -right-20 z-10" >
          <PrizepoolHeadingPolygon />
        </div>
        <div className="relative text-6xl p-8 text-white text-center bg-[#041E8F] border-t-8 border-b-[7px] border-t-[#002395] border-b-[#014ECB] z-20" >
          Prize Pool: 12 Lacs +
        </div>
      </div>
    </div>
  );
}

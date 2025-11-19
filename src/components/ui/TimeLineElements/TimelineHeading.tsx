import { TimelineHeader, TimelineNiddle } from "./timelineImages";

export default function TimelineHeading() {
  return (
    <div className="relative z-20 w-full flex justify-center">
      <div className=" scale-40 sm:scale-60 md:scale-80 lg:scale-100 origin-top">
        <div className="relative flex justify-center">
          <TimelineHeader />
          <div className="spin-continuous-niddle absolute z-10 left-[6.3%] top-4.5">
            <TimelineNiddle />
          </div>
          <div className="absolute text-stroke-h text-[64px] text-white  top-1/4 left-[41.67%]">
            Timeline
          </div>
        </div>
      </div>
    </div>
  );
}
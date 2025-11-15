import { TimelineHeader, TimelineNiddle } from "./timelineImages";

export default function TimelineHeading() {
  return (
    <div className="relative w-full flex justify-center">
      <div className=" scale-40 sm:scale-60 md:scale-80 lg:scale-100 origin-top">
        <div className="relative flex justify-center">
          <TimelineHeader />
          <div className="spin-continuous-niddle absolute z-10 left-[5.61%] top-3">
            <TimelineNiddle />
          </div>
          <div className="absolute text-6xl text-white [text-shadow:0px_4px_0px_rgb(0_0_0/1.00)] top-1/3 left-[41.67%]">
            Timeline
          </div>
        </div>
      </div>
    </div>
  );
}
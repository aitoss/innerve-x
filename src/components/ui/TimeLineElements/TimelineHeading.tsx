import { TimelineHeader, TimelineNiddle } from "./timelineImages";

export default function TimelineHeading() {
  return (
    <div className="relative w-fit scale-60 md:scale-80 lg:scale-100 origin-top mx-auto flex justify-center">
      <TimelineHeader />
      <div className="spin-continuous-niddle absolute z-10 left-11/196 top-3">
        <TimelineNiddle />
      </div>
      <div className="absolute text-6xl text-white [text-shadow:0px_4px_0px_rgb(0_0_0/1.00)] top-1/3 left-5/12">
        Timeline
      </div>
    </div>
  );
}
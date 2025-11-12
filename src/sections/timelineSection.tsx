"use client";

import { useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, useState } from "react";
import TimelineHeading from "@/components/ui/TimeLineElements/TimelineHeading";
import TimelineCurveAnimation from "@/components/ui/TimeLineElements/TimelinecurveAnimation";
import TimelineCardsLayout from "@/components/ui/TimeLineElements/TimelineCardsLayout";
import { TimelineBottomImage } from "@/components/ui/TimeLineElements/timelineImages";

export default function TimelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [circleScales, setCircleScales] = useState<MotionValue<number>[]>([]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"],
  });

  // Transform scroll progress to percentage for gradient animation
  // Extended range to go beyond the 5th circle
  const gradientProgress = useTransform(scrollYProgress, [0, 1], [0, 110]);

  const handleCircleScalesReady = (scales: MotionValue<number>[]) => {
    setCircleScales(scales);
  };

  return (
    <>
      <div
        ref={sectionRef}
        className="relative min-h-screen bg-[#2B5497] py-20 overflow-hidden"
      >
        {/* Timeline Header */}
        <TimelineHeading />

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Curve Animation */}
          <TimelineCurveAnimation
            gradientProgress={gradientProgress}
            onCircleScalesReady={handleCircleScalesReady}
          />

          {/* Timeline Cards with synchronized opacity */}
          {circleScales.length > 0 && (
            <TimelineCardsLayout circleOpacities={circleScales} />
          )}
        </div>
      </div>
      <div className="">
        <TimelineBottomImage />
      </div>
    </>
  );
}

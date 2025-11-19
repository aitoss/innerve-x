"use client";

import { useScroll, useTransform, type MotionValue } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import TimelineHeading from "@/components/ui/TimeLineElements/TimelineHeading";
import TimelineCurveAnimation from "@/components/ui/TimeLineElements/TimelinecurveAnimation";
import TimelineCurveAnimationMobile from "@/components/ui/TimeLineElements/TimelinecurveAnimationMobile";
import TimelineCardsLayout from "@/components/ui/TimeLineElements/TimelineCardsLayout";
import { TimelineBottomImage } from "@/components/ui/TimeLineElements/timelineImages";

export default function TimelineSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [circleScales, setCircleScales] = useState<MotionValue<number>[]>([]);
  const [isMobile, setIsMobile] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [leftPosition, setLeftPosition] = useState("18%");

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    const updateLeftPosition = () => {
      const width = window.innerWidth;
      if (width >= 440 && width <= 505) {
        setLeftPosition("14%");
      } else {
        setLeftPosition("18%");
      }
    };
    
    checkMobile();
    updateLeftPosition();
    window.addEventListener("resize", checkMobile);
    window.addEventListener("resize", updateLeftPosition);
    return () => {
      window.removeEventListener("resize", checkMobile);
      window.removeEventListener("resize", updateLeftPosition);
    };
  }, []);

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
        className="relative min-h-screen overflow-hidden bg-[#012A57] py-20 "
      >


        <TimelineHeading />


        {/* Timeline Container */}
        <div className={isMobile ? "z-10 relative scale-100 -ml-10 sm:ml-0 overflow-visible -top-31 sm:-top-22 md:-top-12" : "z-10 relative scale-100 md:-top-66 lg:-top-28 xl:-top-7"} style={isMobile ? { left: leftPosition } : {}}>
          {/* Timeline Curve Animation - Switch based on screen size */}
          {isMounted && (
            isMobile ? (
              <TimelineCurveAnimationMobile
                key="mobile"
                gradientProgress={gradientProgress}
                onCircleScalesReady={handleCircleScalesReady}
              />
            ) : (
              <TimelineCurveAnimation
                key="desktop"
                gradientProgress={gradientProgress}
                onCircleScalesReady={handleCircleScalesReady}
              />
            )
          )}

          {/* Timeline Cards with synchronized opacity */}
          {circleScales.length > 0 && isMounted && (
            <TimelineCardsLayout circleOpacities={circleScales} />
          )}
        </div>
      </div>
      <div className="z-0">
        <TimelineBottomImage />
      </div>
    </>
  );
}

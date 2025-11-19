"use client";

import { motion, useTransform, useMotionValue, animate, type MotionValue } from "framer-motion";
import { useEffect } from "react";

interface TimelineCurveAnimationMobileProps {
  gradientProgress: MotionValue<number>;
  onCircleScalesReady?: (scales: MotionValue<number>[]) => void;
}

export default function TimelineCurveAnimationMobile({ gradientProgress, onCircleScalesReady }: TimelineCurveAnimationMobileProps) {
  // Motion values for each circle's scale - 5 circles in mobile
  const circle1Scale = useMotionValue(0);
  const circle2Scale = useMotionValue(0);
  const circle3Scale = useMotionValue(0);
  const circle4Scale = useMotionValue(0);
  const circle5Scale = useMotionValue(0);

  useEffect(() => {
    // Pass the circle scales to parent component
    if (onCircleScalesReady) {
      onCircleScalesReady([circle1Scale, circle2Scale, circle3Scale, circle4Scale, circle5Scale]);
    }
  }, [onCircleScalesReady, circle1Scale, circle2Scale, circle3Scale, circle4Scale, circle5Scale]);

  useEffect(() => {
    const unsubscribe = gradientProgress.on("change", (value) => {
      // Circle 1 at 4.6% (y=65 of 1353 = 4.8%)
      if (value >= 4.6) {
        animate(circle1Scale, 1, { duration: 0.2 });
      } else {
        animate(circle1Scale, 0, { duration: 0.2 });
      }
      
      // Circle 2 at 22% (y=334 of 1353 = 24.7%)
      if (value >= 22) {
        animate(circle2Scale, 1, { duration: 0.2 });
      } else {
        animate(circle2Scale, 0, { duration: 0.2 });
      }
      
      // Circle 3 at 43.3% (y=597 of 1353 = 44.1%)
      if (value >= 43.3) {
        animate(circle3Scale, 1, { duration: 0.2 });
      } else {
        animate(circle3Scale, 0, { duration: 0.2 });
      }
      
      // Circle 4 at 65.5% (y=867 of 1353 = 64.1%)
      if (value >= 65.5) {
        animate(circle4Scale, 1, { duration: 0.2 });
      } else {
        animate(circle4Scale, 0, { duration: 0.2 });
      }
      
      // Circle 5 at 83.9% (y=1135 of 1353 = 83.9%)
      if (value >= 83.9) {
        animate(circle5Scale, 1, { duration: 0.2 });
      } else {
        animate(circle5Scale, 0, { duration: 0.2 });
      }
    });

    return () => unsubscribe();
  }, [gradientProgress, circle1Scale, circle2Scale, circle3Scale, circle4Scale, circle5Scale]);

  return (
    <div className="relative w-full h-[1653px] pl-8">
      {/* SVG Timeline Mobile */}
      <svg className="absolute left-0 -top-5 z-0 w-full h-full" viewBox="0 0 109 1353" fill="none" preserveAspectRatio="xMinYMid meet" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Animated gradient for flow effect */}
          <linearGradient id="animatedFlowGradientMobile" x1="53" y1="0" x2="53" y2="1353" gradientUnits="userSpaceOnUse">
            <motion.stop 
              offset="0%" 
              stopColor="#7BCAF8"
              stopOpacity="1"
            />
            <motion.stop 
              offset={useTransform(gradientProgress, (p) => `${Math.max(0, p - 0.5)}%`)}
              stopColor="#7BCAF8"
              stopOpacity="1"
            />
            <motion.stop 
              offset={useTransform(gradientProgress, (p) => `${Math.min(p, 110)}%`)}
              stopColor="#ffffff"
              stopOpacity="1"
            />
            <motion.stop 
              offset="110%" 
              stopColor="#ffffff"
              stopOpacity="1"
            />
          </linearGradient>
          
          <clipPath id="clip0_1575_958">
            <rect width="109" height="1353" fill="white"/>
          </clipPath>
        </defs>
        
        <g clipPath="url(#clip0_1575_958)">
          {/* Bottom curve - Base */}
          <path 
            d="M53 1268C43.3957 1175.31 38 1049.59 38 918.5C38 787.412 43.3957 661.693 53 569" 
            stroke="#7BCAF8"
            strokeWidth="1"
          />
          
          {/* Bottom curve - Animated overlay */}
          <motion.path 
            d="M53 1268C43.3957 1175.31 38 1049.59 38 918.5C38 787.412 43.3957 661.693 53 569" 
            stroke="url(#animatedFlowGradientMobile)" 
            strokeWidth="1"
          />
          
          {/* Top curve - Base */}
          <path 
            d="M53.5 3C62.7945 78.0563 68 179.854 68 286C68 392.146 62.2945 493.944 53 569" 
            stroke="#7BCAF8"
            strokeWidth="1"
          />
          
          {/* Top curve - Animated overlay */}
          <motion.path 
            d="M53.5 3C62.7945 78.0563 68 179.854 68 286C68 392.146 62.2945 493.944 53 569" 
            stroke="url(#animatedFlowGradientMobile)" 
            strokeWidth="1"
          />
          
          {/* Key point circles on the path */}
          {/* Circle 1 - y=65 (~4.8% of 1353) */}
          <g>
            <circle cx="59.468" cy="65.3449" r="2.11834" fill="white"/>
            <motion.circle 
              cx="59.2189" 
              cy="65.2189" 
              r="9.59763" 
              stroke="#7BCAF8" 
              strokeWidth="2.2426" 
              fill="none"
              style={{
                scale: circle1Scale,
                transformOrigin: "59.2189px 65.2189px"
              }}
            />
          </g>
          
          {/* Circle 2 - y=334 (~24.7% of 1353) */}
          <g>
            <circle cx="67.2129" cy="334.349" r="2.11834" fill="white" transform="rotate(1 67.2129 334.349)"/>
            <motion.circle 
              cx="67.215" 
              cy="334.223" 
              r="9.59763" 
              stroke="#7BCAF8" 
              strokeWidth="2.2426" 
              fill="none"
              transform="rotate(1 67.215 334.223)"
              style={{
                scale: circle2Scale,
                transformOrigin: "67.215px 334.223px"
              }}
            />
          </g>
          
          {/* Circle 3 - y=597 (~44.1% of 1353) */}
          <g>
            <circle cx="50.2189" cy="597.341" r="2.11834" fill="white"/>
            <motion.circle 
              cx="50.2189" 
              cy="597.219" 
              r="9.59763" 
              stroke="#7BCAF8" 
              strokeWidth="2.2426" 
              fill="none"
              style={{
                scale: circle3Scale,
                transformOrigin: "50.2189px 597.219px"
              }}
            />
          </g>
          
          {/* Circle 4 - y=867 (~64.1% of 1353) */}
          <g>
            <circle cx="38.466" cy="867.681" r="2.11834" fill="white"/>
            <motion.circle 
              cx="38.467" 
              cy="867.555" 
              r="9.59763" 
              stroke="#7BCAF8" 
              strokeWidth="2.2426" 
              fill="none"
              style={{
                scale: circle4Scale,
                transformOrigin: "38.467px 867.555px"
              }}
            />
          </g>
          
          {/* Circle 5 - y=1135 (~83.9% of 1353) */}
          <g>
            <circle cx="43.2184" cy="1135.34" r="2.11834" fill="white"/>
            <motion.circle 
              cx="43.2189" 
              cy="1135.22" 
              r="9.59763" 
              stroke="#7BCAF8" 
              strokeWidth="2.2426" 
              fill="none"
              style={{
                scale: circle5Scale,
                transformOrigin: "43.2189px 1135.22px"
              }}
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

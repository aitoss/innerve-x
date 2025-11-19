"use client";

import { motion, useTransform, useMotionValue, animate, type MotionValue } from "framer-motion";
import { useEffect } from "react";

interface TimelineCurveAnimationProps {
  gradientProgress: MotionValue<number>;
  onCircleScalesReady?: (scales: MotionValue<number>[]) => void;
}

export default function TimelineCurveAnimation({ gradientProgress, onCircleScalesReady }: TimelineCurveAnimationProps) {
  // Motion values for each circle's scale
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
      // Circle 1 at 4.6% - animate in when white reaches, animate out when white leaves
      if (value >= 4.6) {
        animate(circle1Scale, 1, { duration: 0.2 });
      } else {
        animate(circle1Scale, 0, { duration: 0.2 });
      }
      
      // Circle 2 at 22%
      if (value >= 22) {
        animate(circle2Scale, 1, { duration: 0.2 });
      } else {
        animate(circle2Scale, 0, { duration: 0.2 });
      }
      
      // Circle 3 at 43.3%
      if (value >= 43.3) {
        animate(circle3Scale, 1, { duration: 0.2 });
      } else {
        animate(circle3Scale, 0, { duration: 0.2 });
      }
      
      // Circle 4 at 65.5%
      if (value >= 65.5) {
        animate(circle4Scale, 1, { duration: 0.2 });
      } else {
        animate(circle4Scale, 0, { duration: 0.2 });
      }
      
      // Circle 5 at 86.7%
      if (value >= 86.7) {
        animate(circle5Scale, 1, { duration: 0.2 });
      } else {
        animate(circle5Scale, 0, { duration: 0.2 });
      }
    });

    return () => unsubscribe();
  }, [gradientProgress, circle1Scale, circle2Scale, circle3Scale, circle4Scale, circle5Scale]);

  return (
    <div className="relative scale-80 lg:scale-90 xl:scale-100 w-full max-w-6xl mx-auto xl:mx-auto ml-0 h-[2197px] pl-4 pr-5">
      {/* SVG Timeline from assets with proper viewBox */}
      <svg className="absolute inset-0 w-full h-full xl:mx-0 -ml-[300px]" viewBox="0 0 465 2197" fill="none" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Animated gradient for flow effect */}
          <linearGradient id="animatedFlowGradient" x1="223" y1="0" x2="223" y2="2197" gradientUnits="userSpaceOnUse">
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
          
          {/* Arrow gradient */}
          <linearGradient id="paint0_linear_1567_938" x1="222.5" y1="1907" x2="-250" y2="2216" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffffff"/>
            <stop offset="1" stopColor="#012956"/>
          </linearGradient>
          
          <clipPath id="clip0_1567_938">
            <rect width="465" height="2197" fill="white"/>
          </clipPath>
          <clipPath id="clip1_1567_938">
            <rect width="437" height="1910" fill="white"/>
          </clipPath>
        </defs>
        
        <g clipPath="url(#clip0_1567_938)">
          {/* Arrow at bottom */}
          <path 
            d="M223.193 1907.72C222.731 1907.24 222.269 1906.76 221.807 1906.28C214.639 1913.19 206.921 1920.38 199.443 1927.17C61.5709 2048.1 -92.7025 2158.86 -271.066 2209.22C-280.934 2211.77 -291.035 2214.07 -301 2216C-291.028 2214.1 -280.919 2211.83 -271.041 2209.32C-92.4538 2159.52 62.2822 2049.21 200.718 1928.58C208.231 1921.8 215.985 1914.63 223.193 1907.72Z" 
            fill="url(#paint0_linear_1567_938)"
          />
          
          <g clipPath="url(#clip1_1567_938)">
            {/* Bottom curve - Base */}
            <path 
              d="M216.973 1909.97C344.125 1782.82 415.558 1610.37 415.558 1430.55C415.558 1250.73 344.125 1078.27 216.973 951.121" 
              stroke="#7BCAF8" 
              strokeWidth="3"
            />
            
            {/* Bottom curve - Animated overlay */}
            <motion.path 
              d="M216.973 1909.97C344.125 1782.82 415.558 1610.37 415.558 1430.55C415.558 1250.73 344.125 1078.27 216.973 951.121" 
              stroke="url(#animatedFlowGradient)" 
              strokeWidth="3"
            />
            
            {/* Top curve - Base */}
            <path 
              d="M224.585 0C97.4331 127.152 26 299.606 26 479.426C26 659.246 97.4331 831.701 224.585 958.852" 
              stroke="#7BCAF8" 
              strokeWidth="3"
            />
            
            {/* Top curve - Animated overlay */}
            <motion.path 
              d="M224.585 0C97.4331 127.152 26 299.606 26 479.426C26 659.246 97.4331 831.701 224.585 958.852" 
              stroke="url(#animatedFlowGradient)" 
              strokeWidth="3"
            />
          </g>
          
          {/* Key point circles on the path */}
          {/* Top start point - y=102 (~4.6% of 2197) */}
          <g>
            <circle cx="141" cy="102.5" r="4.5" fill="white"/>
            <motion.circle 
              cx="140" 
              cy="102" 
              r="18.5" 
              stroke="#7BCAF8" 
              strokeWidth="5" 
              fill="none"
              style={{
                scale: circle1Scale,
                transformOrigin: "140px 102px"
              }}
            />
          </g>
          
          {/* Middle point 1 - y=483 (~22% of 2197) */}
          <g>
            <circle cx="26" cy="483.5" r="4.5" fill="white"/>
            <motion.circle 
              cx="26" 
              cy="483" 
              r="18.5" 
              stroke="#7BCAF8" 
              strokeWidth="5" 
              fill="none"
              style={{
                scale: circle2Scale,
                transformOrigin: "26px 483px"
              }}
            />
          </g>
          
          {/* Center connection point - y=951 (~43% of 2197) */}
          <g>
            <circle cx="215" cy="951.5" r="4.5" fill="white"/>
            <motion.circle 
              cx="215" 
              cy="951" 
              r="18.5" 
              stroke="#7BCAF8" 
              strokeWidth="5" 
              fill="none"
              style={{
                scale: circle3Scale,
                transformOrigin: "215px 951px"
              }}
            />
          </g>
          
          {/* Middle point 2 - y=1440 (~65.5% of 2197) */}
          <g>
            <circle cx="415.5" cy="1439.5" r="4.5" fill="white"/>
            <motion.circle 
              cx="415" 
              cy="1440" 
              r="18.5" 
              stroke="#7BCAF8" 
              strokeWidth="5" 
              fill="none"
              style={{
                scale: circle4Scale,
                transformOrigin: "415px 1440px"
              }}
            />
          </g>
          
          {/* Bottom end point - y=1906 (~86.7% of 2197) */}
          <g>
            <circle cx="221" cy="1906.5" r="4.5" fill="white"/>
            <motion.circle 
              cx="221" 
              cy="1906" 
              r="18.5" 
              stroke="#7BCAF8" 
              strokeWidth="5" 
              fill="none"
              style={{
                scale: circle5Scale,
                transformOrigin: "221px 1906px"
              }}
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

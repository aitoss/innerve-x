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
    <div className="relative w-full max-w-6xl mx-auto h-[2197px] pl-4 pr-5">
      {/* SVG Timeline from assets with proper viewBox */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 875 2197" fill="none" preserveAspectRatio="xMidYMid meet" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Animated gradient for flow effect */}
          <linearGradient id="animatedFlowGradient" x1="526" y1="0" x2="526" y2="2197" gradientUnits="userSpaceOnUse">
            <motion.stop 
              offset="0%" 
              stopColor="#ffffff"
              stopOpacity="1"
            />
            <motion.stop 
              offset={useTransform(gradientProgress, (p) => `${Math.max(0, p - 0.5)}%`)}
              stopColor="#ffffff"
              stopOpacity="1"
            />
            <motion.stop 
              offset={useTransform(gradientProgress, (p) => `${Math.min(p, 110)}%`)}
              stopColor="#979494"
              stopOpacity="1"
            />
            <motion.stop 
              offset="110%" 
              stopColor="#979494"
              stopOpacity="1"
            />
          </linearGradient>
          
          {/* Arrow gradient */}
          <linearGradient id="paint0_linear_arrow" x1="524" y1="1907" x2="51.5" y2="2216" gradientUnits="userSpaceOnUse">
            <stop stopColor="#969494"/>
            <stop offset="1"/>
          </linearGradient>
          
          <clipPath id="clip0_timeline">
            <rect width="875" height="2197" fill="white"/>
          </clipPath>
          <clipPath id="clip1_timeline">
            <rect width="437" height="1910" fill="white" transform="translate(305)"/>
          </clipPath>
        </defs>
        
        <g clipPath="url(#clip0_timeline)">
          {/* Arrow at bottom */}
          <path 
            d="M524.693 1907.72C524.231 1907.24 523.769 1906.76 523.307 1906.28C516.139 1913.19 508.421 1920.38 500.943 1927.17C363.071 2048.1 208.798 2158.86 30.4339 2209.22C20.5659 2211.77 10.4654 2214.07 0.5 2216C10.4717 2214.1 20.5806 2211.83 30.4588 2209.32C209.046 2159.52 363.782 2049.21 502.218 1928.58C509.731 1921.8 517.485 1914.63 524.693 1907.72Z" 
            fill="url(#paint0_linear_arrow)"
          />
          
          <g clipPath="url(#clip1_timeline)">
            {/* Bottom curve - Gray base */}
            <path 
              d="M521.973 1909.97C649.125 1782.82 720.558 1610.37 720.558 1430.55C720.558 1250.73 649.125 1078.27 521.973 951.121" 
              stroke="#979494" 
              strokeWidth="2"
            />
            
            {/* Bottom curve - Animated overlay */}
            <motion.path 
              d="M521.973 1909.97C649.125 1782.82 720.558 1610.37 720.558 1430.55C720.558 1250.73 649.125 1078.27 521.973 951.121" 
              stroke="url(#animatedFlowGradient)" 
              strokeWidth="2"
            />
            
            {/* Top curve - Gray base */}
            <path 
              d="M529.585 0C402.433 127.152 331 299.606 331 479.426C331 659.246 402.433 831.701 529.585 958.852" 
              stroke="#979494" 
              strokeWidth="2"
            />
            
            {/* Top curve - Animated overlay */}
            <motion.path 
              d="M529.585 0C402.433 127.152 331 299.606 331 479.426C331 659.246 402.433 831.701 529.585 958.852" 
              stroke="url(#animatedFlowGradient)" 
              strokeWidth="2"
            />
          </g>
          
          {/* Key point circles on the path */}
          {/* Top start point - y=102 (~4.6% of 2197) */}
          <g>
            <circle cx="445" cy="102.5" r="4.5" fill="white"/>
            <motion.circle 
              cx="444" 
              cy="102" 
              r="18.5" 
              stroke="#367498" 
              strokeWidth="5" 
              fill="none"
              style={{
                scale: circle1Scale,
                transformOrigin: "444px 102px"
              }}
            />
          </g>
          
          {/* Middle point 1 - y=483 (~22% of 2197) */}
          <g>
            <circle cx="331" cy="483.5" r="4.5" fill="white"/>
            <motion.circle 
              cx="331" 
              cy="483" 
              r="18.5" 
              stroke="#367498" 
              strokeWidth="5" 
              fill="none"
              style={{
                scale: circle2Scale,
                transformOrigin: "331px 483px"
              }}
            />
          </g>
          
          {/* Center connection point - y=951 (~43% of 2197) */}
          <g>
            <circle cx="523" cy="951.5" r="4.5" fill="white"/>
            <motion.circle 
              cx="523" 
              cy="951" 
              r="18.5" 
              stroke="#367498" 
              strokeWidth="5" 
              fill="none"
              style={{
                scale: circle3Scale,
                transformOrigin: "523px 951px"
              }}
            />
          </g>
          
          {/* Middle point 2 - y=1440 (~65.5% of 2197) */}
          <g>
            <circle cx="721.5" cy="1439.5" r="4.5" fill="white"/>
            <motion.circle 
              cx="721" 
              cy="1440" 
              r="18.5" 
              stroke="#367498" 
              strokeWidth="5" 
              fill="none"
              style={{
                scale: circle4Scale,
                transformOrigin: "721px 1440px"
              }}
            />
          </g>
          
          {/* Bottom end point - y=1906 (~86.7% of 2197) */}
          <g>
            <circle cx="524" cy="1906.5" r="4.5" fill="white"/>
            <motion.circle 
              cx="524" 
              cy="1906" 
              r="18.5" 
              stroke="#367498" 
              strokeWidth="5" 
              fill="none"
              style={{
                scale: circle5Scale,
                transformOrigin: "524px 1906px"
              }}
            />
          </g>
        </g>
      </svg>
    </div>
  );
}

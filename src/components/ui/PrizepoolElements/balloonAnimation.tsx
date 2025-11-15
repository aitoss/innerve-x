"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { HotAirBalloon } from "./prizePoolImages";

export default function BalloonAnimation() {
  const [screenWidth, setScreenWidth] = useState(1200);
  
  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  
  const amplitude = screenWidth < 768 ? 30 : screenWidth < 1024 ? 50 : 75;
  const center = screenWidth < 440 ? 570 : screenWidth < 640 ? 580 : screenWidth < 768 ? 435 : screenWidth < 1024 ? 400 : screenWidth < 1280 ? 312 : 325;
  
  // Calculate pixel positions based on actual screen width for better constraints
  // Adjust balloon width based on scale
  const balloonWidth = screenWidth < 640 ? 75 : screenWidth < 768 ? 90 : screenWidth < 1024 ? 112 : screenWidth < 1280 ? 135 : 150;
  const minX = screenWidth < 640 ? -balloonWidth -90 : screenWidth < 768 ? -balloonWidth -40 : screenWidth < 1024 ? -balloonWidth + 35 : screenWidth < 1280 ? -balloonWidth +80 : -balloonWidth + 120;
  const maxX = screenWidth < 440 ? screenWidth - 40 : screenWidth < 640 ? screenWidth+160 : screenWidth < 768 ? screenWidth + 140 : screenWidth < 1024 ? screenWidth -20 : screenWidth < 1280 ? screenWidth-125: screenWidth - 250;
//   const minX = -balloonWidth; // Start off-screen left
//   const maxX = screenWidth; // End off-screen right
  const midX = (screenWidth / 2 - balloonWidth / 2); // Center position
  
  // Create smooth wave-like path with many waypoints for natural curved movement
  const numPoints = 24; // Changed to 24 so we don't duplicate the start point
  const xPositions = [];
  const yPositions = [];
  
  for (let i = 0; i < numPoints; i++) {
    const progress = i / numPoints;
    // Horizontal movement: left to right and back
    const xProgress = progress * 2; // 0 to 2
    let x;
    if (xProgress <= 1) {
      // Moving right
      x = minX + (maxX - minX) * xProgress;
    } else {
      // Moving left
      x = maxX - (maxX - minX) * (xProgress - 1);
    }
    xPositions.push(x);
    
    // Vertical movement: smooth wave
    const y = center + amplitude * Math.sin(progress * Math.PI * 4); // 4 complete waves
    yPositions.push(y);
  }
  
  return (
    <motion.div 
      className="absolute z-10 scale-50 sm:scale-60 md:scale-75 lg:scale-90 xl:scale-100"
      style={{ left: "0%", top: "-400px" }}
      initial={{ x: xPositions[0], y: yPositions[0] }}
      animate={{
        x: xPositions,
        y: yPositions,
      }}
      transition={{
        duration: 60,
        repeat: Infinity,
        ease: "linear",
      }} 
    >
      <HotAirBalloon />
    </motion.div>
  );
}

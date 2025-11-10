"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import PrizePoolCard from "@/components/ui/prizePoolCard";
import { HotAirBalloon, PrizepoolBottomForest } from "@/components/ui/prizePoolImages";
import PrizePoolScroll from "@/components/ui/prizePoolScroll";

export default function PrizePoolSection() {
  const [screenWidth, setScreenWidth] = useState(1200);
  
  useEffect(() => {
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);
    };
    
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);
  
  // Calculate pixel positions based on actual screen width for better constraints
  // Balloon width is approximately 150px, so we ensure it stays within bounds
  const balloonWidth = 150;
  const minX = -50; // Start 50px from left edge
  const maxX = (screenWidth - balloonWidth - 100)*1; // End 50px from right edge
  const midX = (screenWidth / 2 - balloonWidth / 2)*1; // Center position
  
  // Create smooth path across the screen
  const xPositions = [
    minX,
    minX + (maxX - minX) * 0.25,
    midX,
    minX + (maxX - minX) * 0.75,
    maxX,
    minX + (maxX - minX) * 0.75,
    midX,
    minX + (maxX - minX) * 0.25,
    minX
  ];
  
  return (
    <div className="relative flex flex-col pt-200 items-center overflow-visible bg-linear-to-b from-[#CCECF7] to-[#BFEEFE]">
      <motion.div 
        className="absolute z-50"
        style={{ left: "0%", top: "-400px" }}
        initial={{ x: xPositions[0], y: -200 }}
        animate={{
          x: xPositions,
          y: [650, 950, 650, 950, 650, 950, 650, 950, 650],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.125, 0.25, 0.375, 0.5 ,0.625, 0.750, 0.875, 1]
        }} 
      >
        <HotAirBalloon />
      </motion.div>
      <div className="flex justify-center">
        <PrizePoolScroll />
      </div>
      <PrizePoolCard />
      <PrizepoolBottomForest /> 
    </div>
  );
}

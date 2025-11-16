"use client";

import { motion } from "framer-motion";
import EventCard from "@/components/layout/eventCard";
import { useState, useEffect } from "react";

export default function EventCardAnimated() {
  const [initialY, setInitialY] = useState(400);
  const [finalY, setFinalY] = useState(550);

  useEffect(() => {
    const calculateY = () => {
      const width = window.innerWidth;
      
      // Calculate Y position based on viewport width
      // Desktop: 400 -> 550 (for width >= 1024)
      // Tablet: 300 -> 425 (for width >= 768)
      // Mobile: 200 -> 300 (for width < 768)
      
      if (width >= 1024) {
        setInitialY(400);
        setFinalY(600);
      } else if (width >= 768) {
        setInitialY(200);
        setFinalY(430);
      } else if (width >=640) {
        setInitialY(180);
        setFinalY(305);
      } else {
        setInitialY(100);
        setFinalY(210);
      }
    };

    // Calculate on mount
    calculateY();

    // Recalculate on window resize
    window.addEventListener('resize', calculateY);

    // Cleanup
    return () => window.removeEventListener('resize', calculateY);
  }, []);

  return (
    <section className="relative w-full flex flex-col items-center justify-center">
      {/* Event Card with Falling Animation */}
      <div
        // key={`${initialY}-${finalY}`}
        // className="absolute select-none flex justify-center"
        // initial={{ 
        //   y: initialY,
        //   rotate: 0,
        //   opacity: 1
        // }}
        // whileInView={{ 
        //   y: finalY,
        //   rotate: 0,
        //   opacity: 1
        // }}
        // viewport={{ once: true, amount: 0.6 }}
        // transition={{
        //   type: "spring",
        //   damping: 10,
        //   stiffness: 280,
        //   mass: 4.5,
        //   opacity: {
        //     duration: 0.1,
        //     ease: "easeIn"
        //   }
        // }}
      >
        <EventCard />
      </div>
    </section>
  );
}

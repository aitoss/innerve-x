"use client";

import { motion } from "framer-motion";
import EventCard from "@/components/layout/eventCard";

export default function EventCardAnimated() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center">
      {/* Event Card with Falling Animation */}
      <motion.div
        className="absolute select-none"
        style={{ 
          zIndex: 5,
          width: "700px",
          height: "280px",
        }}
        initial={{ 
          y: 400,
          rotate: 0,
          opacity: 1
        }}
        whileInView={{ 
          y: 550,
          rotate: 0,
          opacity: 1
        }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{
          type: "spring",
          damping: 10,
          stiffness: 280,
          mass: 8.5,
          opacity: {
            duration: 0.1,
            ease: "easeIn"
          }
        }}
      >
        <EventCard />
      </motion.div>
    </section>
  );
}

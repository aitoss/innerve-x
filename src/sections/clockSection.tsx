"use client";

import CountdownTimerCard from "@/components/layout/countdownTimerCard";
import EventCardAnimated from "@/components/layout/eventCardAnimation";

export default function ClockSection() {
  return (
    <div className="mb-20 z-1 flex justify-center">
      <div className="relative z-50">
        <CountdownTimerCard />
      </div>
      <div className="absolute z-0 -top-4">
        <EventCardAnimated />
      </div>
    </div>
  );
}

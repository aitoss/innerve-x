"use client";

import { type MotionValue } from "framer-motion";
import { useEffect, useState } from "react";
import TimelineCard from "./timelineCard";

interface ResponsiveValue {
  base: number;  // < 440px
  xs: number;    // < 640px
  sm: number;    // < 768px
  md: number;    // < 1024px
  lg: number;    // < 1280px
  xl: number;    // >= 1280px
}

interface TimelineCardData {
  cardNumber: number;
  cardHeading: string;
  cardLine1: string;
  cardLine2: string;
  position: "left" | "right";
  yPosition: ResponsiveValue;
  containerClassName?: string;
  numberClassName?: string;
  headingClassName?: string;
  descriptionClassName?: string;
}

const timelineData: TimelineCardData[] = [
  {
    cardNumber: 1,
    cardHeading: "Registration Starts",
    cardLine1: "Secure your spot starting November 15, 2025, at 12:00 AM IST.",
    cardLine2: "Join us for an exciting 24-hour hackathon by registering early!",
    position: "right",
    yPosition: { base: 230, xs: 200, sm: 260, md: 220, lg: 320, xl: 320 },
    containerClassName: "ml-[17%] md:mr-[15%] ml-[14%] lg:mr-[10%] pl-4 pr-35 lg:pr-8",
    numberClassName: "",
    headingClassName: "",
    descriptionClassName: "pl-4 sm:pl-8  ",
  },
  {
    cardNumber: 2,
    cardHeading: "Registration Ends",
    cardLine1: "Registration closes on December 15, 2025, at 11:59 PM IST.",
    cardLine2: "Don't miss your chance to be part of this incredible event!",
    position: "left",
    yPosition: { base: 670, xs: 630, sm: 710, md: 700, lg: 720, xl: 680 },
    containerClassName: "mr-[17%] ml-[22%] md:ml-[7%] pl-4 pr-8",
    numberClassName: "",
    headingClassName: "",
    descriptionClassName: "pl-4 sm:pl-8 ",
  },
  {
    cardNumber: 3,
    cardHeading: "Announcement of Shortlisted Teams",
    cardLine1: "Shortlisted teams will be announced on January 16, 2026.",
    cardLine2: "Check back to see if your team advances.",
    position: "right",
    yPosition: { base: 1100, xs: 1140, sm: 1120, md: 1160, lg: 1180, xl: 1180 },
    containerClassName: "mr-[15%] ml-[15%] sm:ml-[12%] lg:mr-[10%] pl-4 sm:pl-4 pr-12",
    numberClassName: "",
    headingClassName: "",
    descriptionClassName: "pl-4 sm:pl-8 ",
  },
  {
    cardNumber: 4,
    cardHeading: "Hackathon Begins",
    cardLine1: "The 24-hour coding marathon starts on January 30, 2026.",
    cardLine2: "Build innovative solutions and bring your ideas to life!",
    position: "left",
    yPosition: { base: 1600, xs: 1600, sm: 1600, md: 1600, lg: 1650, xl: 1680 },
    containerClassName: "mr-[20%] lg:mr-[0%] ml-[18%]  pl-4 pr-8",
    numberClassName: "",
    headingClassName: "",
    descriptionClassName: "pl-4 sm:pl-8 ",
  },
  {
    cardNumber: 5,
    cardHeading: "Results Announced",
    cardLine1: "Winners will be announced on January 31, 2026.",
    cardLine2: "Exciting prizes and recognition awaits!",
    position: "right",
    yPosition: { base: 2100, xs: 2100, sm: 2100, md: 2100, lg: 2100, xl: 2200 },
    containerClassName: "ml-[25%] sm:ml-[20%] md:ml-0 mr-[20%] lg:mr-[10%] pl-4 pr-8",
    numberClassName: "",
    headingClassName: "",
    descriptionClassName: "pl-4 sm:pl-8  ",
  }
];

interface TimelineCardsLayoutProps {
  circleOpacities?: MotionValue<number>[];
}

export default function TimelineCardsLayout({ circleOpacities = [] }: TimelineCardsLayoutProps) {
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getResponsiveYPosition = (yPosition: ResponsiveValue): number => {
    if (windowWidth === 0) return yPosition.xl;
    if (windowWidth < 440) return yPosition.base;
    if (windowWidth < 640) return yPosition.xs;
    if (windowWidth < 768) return yPosition.sm;
    if (windowWidth < 1024) return yPosition.md;
    if (windowWidth < 1280) return yPosition.lg;
    return yPosition.xl;
  };

  if (windowWidth === 0) return null;

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
      {timelineData.map((data, index) => {
        const yPos = getResponsiveYPosition(data.yPosition);
        return (
          <div
            key={data.cardNumber}
            className={`absolute w-full flex justify-end ${data.position === "left" ? "xl:justify-start" : ""}`}
            style={{
              top: `${(yPos / 2397) * 100}%`,
              transform: "translateY(-50%)",
            }}
          >
            <TimelineCard
              cardNumber={data.cardNumber}
              cardHeading={data.cardHeading}
              cardLine1={data.cardLine1}
              cardLine2={data.cardLine2}
              position={data.position}
              opacity={circleOpacities[index]}
              containerClassName={data.containerClassName}
              numberClassName={data.numberClassName}
              headingClassName={data.headingClassName}
              descriptionClassName={data.descriptionClassName}
            />
          </div>
        );
      })}
    </div>
  );
}

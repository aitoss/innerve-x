import { type MotionValue } from "framer-motion";
import TimelineCard from "./timelineCard";

interface TimelineCardData {
  cardNumber: number;
  cardHeading: string;
  cardLine1: string;
  cardLine2: string;
  position: "left" | "right";
  yPosition: number; // Y position in pixels to align with circles
  marginLeft?: number; // Margin from left in pixels
  marginRight?: number; // Margin from right in pixels
}

const timelineData: TimelineCardData[] = [
  {
    cardNumber: 1,
    cardHeading: "Registration Starts",
    cardLine1: "Secure your spot starting December 15, 2025, at 12:00 AM IST.",
    cardLine2: "Join us for an exciting 24-hour hackathon by registering early!",
    position: "right",
    yPosition: 240, // Aligns with circle 1 at y=102
    marginLeft: 0,
  },
  {
    cardNumber: 2,
    cardHeading: "Team Formation",
    cardLine1: "Form your team of 2-4 members and choose your track.",
    cardLine2: "Collaborate with talented developers, designers, and innovators!",
    position: "left",
    yPosition: 583, // Aligns with circle 2 at y=483
    marginLeft: 6, // 32px = 2rem (pl-8)
  },
  {
    cardNumber: 3,
    cardHeading: "Hackathon Begins",
    cardLine1: "The 24-hour coding marathon starts on January 10, 2026.",
    cardLine2: "Build innovative solutions and bring your ideas to life!",
    position: "right",
    yPosition: 921, // Aligns with circle 3 at y=951
    marginLeft: 0,
  },
  {
    cardNumber: 4,
    cardHeading: "Submission Deadline",
    cardLine1: "Submit your projects before the deadline on January 11, 2026.",
    cardLine2: "Make sure to complete all requirements and documentation!",
    position: "left",
    yPosition: 1440, // Aligns with circle 4 at y=1440
    marginLeft: 32,
  },
  {
    cardNumber: 5,
    cardHeading: "Results Announced",
    cardLine1: "Winners will be announced on January 12, 2026.",
    cardLine2: "Exciting prizes and recognition await the top teams!",
    position: "right",
    yPosition: 2050, // Aligns with circle 5 at y=1906
    marginLeft: 0,
  }
];

interface TimelineCardsLayoutProps {
  circleOpacities?: MotionValue<number>[];
}

export default function TimelineCardsLayout({ circleOpacities = [] }: TimelineCardsLayoutProps) {
  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none">
      {timelineData.map((data, index) => (
        <div
          key={data.cardNumber}
          className={`absolute w-full pr-4 flex ${data.position === "left" ? "justify-start" : "justify-end"}`}
          style={{
            top: `${(data.yPosition / 2197) * 100}%`,
            transform: "translateY(-50%)",
            marginLeft: `${data.marginLeft || 0}vw`,
          }}
        >
          <TimelineCard
            cardNumber={data.cardNumber}
            cardHeading={data.cardHeading}
            cardLine1={data.cardLine1}
            cardLine2={data.cardLine2}
            position={data.position}
            opacity={circleOpacities[index]}
          />
        </div>
      ))}
    </div>
  );
}

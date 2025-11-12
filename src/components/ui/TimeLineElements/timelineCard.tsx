import { motion, type MotionValue } from "framer-motion";

interface TimelineCardProps {
  cardNumber: number;
  cardHeading: string;
  cardLine1: string;
  cardLine2: string;
  opacity?: MotionValue<number>;
  position?: "left" | "right";
}

export default function TimelineCard({ 
  cardNumber, 
  cardHeading, 
  cardLine1, 
  cardLine2,
  opacity,
  position = "right"
}: TimelineCardProps) {
  return (
    <motion.div 
      className="h-fit w-[35%] flex flex-col gap-7 text-left"
      style={{ opacity }}
    >
      <div className="text-white text-6xl [text-shadow:0px_4px_0px_rgb(0_0_0/1.00)]">
        {cardNumber}.
      </div>
      <div className="text-4xl text-white [text-shadow:0px_4px_0px_rgb(0_0_0/1.00)]">
        {cardHeading}
      </div>
      <div className="text-white text-2xl ml-8 [text-shadow:0px_4px_0px_rgb(0_0_0/1.00)]">
        {cardLine1} <br /> {cardLine2}
      </div>
    </motion.div>
  );
}

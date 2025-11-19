import { motion, type MotionValue } from "framer-motion";

interface TimelineCardProps {
  cardNumber: number;
  cardHeading: string;
  cardLine1: string;
  cardLine2: string;
  opacity?: MotionValue<number>;
  position?: "left" | "right";
  containerClassName?: string;
  numberClassName?: string;
  headingClassName?: string;
  descriptionClassName?: string;
}

export default function TimelineCard({ 
  cardNumber, 
  cardHeading, 
  cardLine1, 
  cardLine2,
  opacity,
  position = "right",
  containerClassName = "",
  numberClassName = "",
  headingClassName = "",
  descriptionClassName = ""
}: TimelineCardProps) {
  return (
    <motion.div 
      className={`h-fit w-full max-w-[90%] sm:max-w-[80%] md:max-w-[65%] lg:max-w-[50%] xl:max-w-[30%] flex flex-col gap-1 sm:gap-2 md:gap-4 xl:gap-7 text-left overflow-hidden box-border ${containerClassName}`}
      style={{ opacity }}
    >
      <div className={`text-white text-xl sm:text-4xl md:text-5xl lg:text-6xl [text-shadow:0px_4px_0px_rgb(0_0_0/1.00)] wrap-break-word overflow-wrap-anywhere w-full ${numberClassName}`}>
        {cardNumber}.
      </div>
      <div className={`text-[16px] sm:text-2xl md:text-3xl lg:text-4xl text-[#7BCAF8] [text-shadow:0px_4px_0px_rgb(0_0_0/1.00)] wrap-break-word overflow-wrap-anywhere w-full ${headingClassName}`}>
        {cardHeading}
      </div>
      <div className={`text-white text-[12px] sm:text-[18px] md:text-xl lg:text-2xl [text-shadow:0px_4px_0px_rgb(0_0_0/1.00)] wrap-break-word overflow-wrap-anywhere ${descriptionClassName}`}>
        {cardLine1} <br /> {cardLine2}
      </div>
    </motion.div>
  );
}

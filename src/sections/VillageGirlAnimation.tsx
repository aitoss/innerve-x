"use client";
// import { useSpring, animated } from "@react-spring/web";

// import { useScroll } from "framer-motion";

// export default function SmoothVillageGirlcroll() {
//     const { scrollYProgress } = useScroll();

//     const VillageGirl = [
//         "/VillageGirl/Girl_1.png",
//         "/VillageGirl/Girl_2.png",
//         "/VillageGirl/Girl_3.png",
//         "/VillageGirl/Girl_4.png",
//         "/VillageGirl/Girl_5.png",
//         "/VillageGirl/Girl_6.png",
//         "/VillageGirl/Girl_7.png",
//         "/VillageGirl/Girl_8.png",
//         "/VillageGirl/Girl_9.png",
//         "/VillageGirl/Girl_10.png"
//     ];

//     const style = useSpring({
//         opacity: scrollYProgress,
//         config: { tension: 180, friction: 20 },
//     });

//     return (
//         <div className="fixed bottom-10 right-10">
//             <animated.img
//                 src="/VillageGirl/happy.png"
//                 style={style}
//                 className="absolute w-64 h-auto"
//             />
//         </div>
//     );
// }






import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const VillageGirl = [
  "/VillageGirl/Girl_1.png",
  "/VillageGirl/Girl_2.png",
  "/VillageGirl/Girl_3.png",
  "/VillageGirl/Girl_4.png",
  "/VillageGirl/Girl_5.png",
  "/VillageGirl/Girl_6.png",
  "/VillageGirl/Girl_7.png",
  "/VillageGirl/Girl_8.png",
  "/VillageGirl/Girl_9.png",
  "/VillageGirl/Girl_10.png"
];

export default function CharacterScroll() {
  const { scrollYProgress } = useScroll();
  const [index, setIndex] = useState(0);

  const range = useTransform(scrollYProgress, [0, 1], [0, VillageGirl.length - 1]);

  useEffect(() => {
    const unsubscribe = range.on("change", (val) => {
      setIndex(Math.round(val));
    });
    return () => unsubscribe();
  }, [range]);

  return (
    <motion.img
      src={VillageGirl[index]}
      alt="Character expression"
      className="fixed z-60 -bottom-30 left-0 w-46 h-auto"
      transition={{ duration: 0.5 }}
    />
  );
}
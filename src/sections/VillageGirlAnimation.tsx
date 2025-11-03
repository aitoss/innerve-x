"use client";
// import { useSpring, animated } from "@react-spring/web";

// import { useScroll } from "framer-motion";

// export default function SmoothFaceScroll() {
//     const { scrollYProgress } = useScroll();

//     const faces = [
//         "/faces/Villager_HV_Villager_1.png",
//         "/faces/Villager_HV_Villager_2.png",
//         "/faces/Villager_HV_Villager_3.png",
//         "/faces/Villager_HV_Villager_4.png",
//         "/faces/Villager_HV_Villager_5.png",
//         "/faces/Villager_HV_Villager_6.png",
//         "/faces/Villager_HV_Villager_7.png",
//         "/faces/Villager_HV_Villager_8.png",
//         "/faces/Villager_HV_Villager_9.png",
//         "/faces/Villager_HV_Villager_10.png"
//     ];

//     const style = useSpring({
//         opacity: scrollYProgress,
//         config: { tension: 180, friction: 20 },
//     });

//     return (
//         <div className="fixed bottom-10 right-10">
//             <animated.img
//                 src="/faces/happy.png"
//                 style={style}
//                 className="absolute w-64 h-auto"
//             />
//         </div>
//     );
// }






import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";

const faces = [
  "/faces/Villager_HV_Villager_1.png",
  "/faces/Villager_HV_Villager_2.png",
  "/faces/Villager_HV_Villager_3.png",
  "/faces/Villager_HV_Villager_4.png",
  "/faces/Villager_HV_Villager_5.png",
  "/faces/Villager_HV_Villager_6.png",
  "/faces/Villager_HV_Villager_7.png",
  "/faces/Villager_HV_Villager_8.png",
  "/faces/Villager_HV_Villager_9.png",
  "/faces/Villager_HV_Villager_10.png"
];

export default function CharacterScroll() {
  const { scrollYProgress } = useScroll();
  const [index, setIndex] = useState(0);

  const range = useTransform(scrollYProgress, [0, 1], [0, faces.length - 1]);

  useEffect(() => {
    const unsubscribe = range.on("change", (val) => {
      setIndex(Math.round(val));
    });
    return () => unsubscribe();
  }, [range]);

  return (
    <motion.img
      src={faces[index]}
      alt="Character expression"
      className="fixed bottom-10 right-10 w-64 h-auto"
      transition={{ duration: 0.5 }}
    />
  );
}
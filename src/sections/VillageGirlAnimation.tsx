"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";
import Image from "next/image";
import TextBubbleBox from "../assets/webp/TextBubbleBox.webp";

// Section to character expression mapping
const SECTION_CONFIG = {
  hero: {
    images: [11],
    description: "Welcome to innerve.tech, chief. We sure have been waiting for you"
  },
  clock: {
    images: [13],
    description: "Victory Approaches! Prepare your Wizards"
  },
  prizepool: {
    images: [3],
    description: "Look at the loot! It's too shiny for my simple eyes"
  },
  tracks: {
    images: [2],
    description: "Ready the troops for deployment!"
  },
  timeline: {
    images: [7],
    description: "The Grand Battle Plan is Unfolding."
  },
  sponsorus: {
    images: [6],
    description: "Petition the Chiefs! Send your resources so the defenses can be upgraded!"
  },
  faq: {
    images: [4  ],
    description: "Read it before you bother the Elders."
  },
  contact: {
    images: [11],
    description: "Send a Message to the War Chief."
  }
};

// Simplified hook using scroll position
function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("[data-section]");
      const scrollPosition = window.scrollY + window.innerHeight / 2; // Middle of viewport

      let currentSection = "hero";

      sections.forEach((section) => {
        const element = section as HTMLElement;
        const sectionTop = element.offsetTop;
        const sectionHeight = element.offsetHeight;
        const sectionBottom = sectionTop + sectionHeight;

        // Check if scroll position is within this section
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          const sectionName = element.getAttribute("data-section");
          if (sectionName) {
            currentSection = sectionName;
          }
        }
      });

      setActiveSection(currentSection);
    };

    // Initial check
    handleScroll();

    // Throttled scroll listener for better performance with passive flag
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Use passive listener to improve scroll performance
    window.addEventListener("scroll", scrollListener, { passive: true });
    
    // Cleanup
    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return activeSection;
}

export default function VillageGirlAnimation() {
  const activeSection = useActiveSection();
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  // Get current section config
  const currentConfig = SECTION_CONFIG[activeSection as keyof typeof SECTION_CONFIG];
  const currentImage = currentConfig?.images[0] || 12;
  const bubbleText = currentConfig?.description || "";

  // Show bubble with delay after section change
  useEffect(() => {
    setShowBubble(false);
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 300);
    return () => clearTimeout(timer);
  }, [activeSection]);

  // Optimized preloading - only load visible images initially
  useEffect(() => {
    // Load initial image first
    const initialImg = new window.Image();
    initialImg.src = `/VillageGirl/Girl_11.png`;
    initialImg.onload = () => setIsLoaded(true);

    // Lazy load remaining images in the background
    const imageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13];
    
    // Use requestIdleCallback if available, otherwise setTimeout
    const loadRemainingImages = () => {
      imageNumbers.forEach((num, index) => {
        setTimeout(() => {
          const img = new window.Image();
          img.src = `/VillageGirl/Girl_${num}.png`;
        }, index * 100); // Stagger loading
      });
    };

    if ('requestIdleCallback' in window) {
      requestIdleCallback(loadRemainingImages);
    } else {
      setTimeout(loadRemainingImages, 1000);
    }
  }, []);

  return (
    <div className="fixed -bottom-[2.5%]  left-0 z-60 pointer-events-none flex ">
      {/* Character Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: isLoaded ? 1 : 0, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
            duration: 0.2
          }}
          className="relative w-32 md:w-40 aspect-1/2 "
        >
          <Image
            src={`/VillageGirl/Girl_${currentImage}.png`}
            alt="Village Girl Character"
            // width={160}
            // height={320}
            fill
            className=" "
            priority={currentImage === 12}
            quality={100}
          />
        </motion.div>
      </AnimatePresence>

      {/* Speech Bubble - positioned to the right of character */}
      <AnimatePresence mode="wait">
        {showBubble && bubbleText && (
          <motion.div
            key={`bubble-${activeSection}`}
            initial={{ opacity: 0, x: -20, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -20, scale: 0.8 }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 25,
              delay: 0.1
            }}
            className="relative md:top-8  md:-left-12 top-4 -left-6 "
          >
            <div className="md:w-100 md:h-40 h-24 w-60 relative flex justify-center items-center " >
              <Image src={TextBubbleBox} alt="Text Bubble Box" fill className="object-contain absolute inset-0 z-0  " quality={100} />
              <motion.p
                key={bubbleText}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative z-10 text-black text-center w-full h-full flex justify-center items-center px-12 pt-2 pl-14  text-[9px] md:text-base    uppercase"
              >
                {bubbleText}
              </motion.p>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
"use client";

import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import TextBubbleBox from "../assets/webp/TextBubbleBox.webp"

// Section to character expression mapping based on mood and context
const SECTION_CONFIG = {
  hero: {
    images: [11], // Welcome expression - neutral/happy
    description: "Welcome to innerve.tech, chief. We sure have been waiting for you"
  },
  clock: {
    images: [13], // Neutral/focused
    description: "Victory Approaches! Prepare your Wizards"
  },
  prizepool: {
    images: [3, 8], // Amazed progression - seeing the loot
    description: "Look at the loot! It's too shiny for my simple eyes",
    transition: "scroll" // Transition through images as user scrolls through section
  },
  tracks: {
    images: [2, 7], // Ready/determined
    description: "Ready the troops for deployment!",
    transition: "scroll"
  },
  timeline: {
    images: [7, 2], // Confident/planning
    description: "The Grand Battle Plan is Unfolding.",
    transition: "scroll"
  },
  // sponsors: {
  //   images: [13], // Using Girl_13 instead of Girl_15 (happy/grateful) - only 13 images exist
  //   description: "Our Providers of Gold and Elixir."
  // },
  sponsorus: {
    images: [6], // Inviting/persuasive
    description: "Petition the Chiefs! Send your resources so the defenses can be upgraded!",
    transition: "scroll"
  },
  faq: {
    images: [12], // Helpful/explaining
    description: "Read it before you bother the Elders."
  },
  contact: {
    images: [11], // Friendly/communicative
    description: "Send a Message to the War Chief."
  },
  // victory: {
  //   images: [11], // Victory expression (used when scrolled to very bottom)
  //   description: "I helped! Victory for the Village!"
  // }
};

// Custom hook to detect which section is currently in view
function useActiveSection() {
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [sectionProgress, setSectionProgress] = useState<number>(0);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-20% 0px -20% 0px", // Trigger when section is 20% into viewport
      threshold: [0, 0.25, 0.5, 0.75, 1]
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      // Find the section with highest intersection ratio
      let maxRatio = 0;
      let mostVisibleSection = activeSection;

      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio > maxRatio) {
          maxRatio = entry.intersectionRatio;
          const sectionName = entry.target.getAttribute("data-section");
          if (sectionName) {
            mostVisibleSection = sectionName;
          }
        }
      });

      if (mostVisibleSection !== activeSection) {
        setActiveSection(mostVisibleSection);
        setSectionProgress(0); // Reset progress when entering new section
      }
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all sections with data-section attribute
    const sections = document.querySelectorAll("[data-section]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [activeSection]);

  // Track scroll progress within active section for multi-image sections
  useEffect(() => {
    const handleScroll = () => {
      const section = document.querySelector(`[data-section="${activeSection}"]`);
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;

      // Calculate how far through the section we've scrolled (0 to 1)
      const scrolledIntoView = windowHeight - rect.top;
      const progress = Math.max(0, Math.min(1, scrolledIntoView / (sectionHeight + windowHeight)));

      setSectionProgress(progress);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeSection]);

  return { activeSection, sectionProgress };
}

// Get current image index based on section and progress
function getCurrentImage(sectionKey: string, progress: number): number {
  const config = SECTION_CONFIG[sectionKey as keyof typeof SECTION_CONFIG];
  if (!config) return 12; // Default neutral expression

  const { images } = config;
  const transition = "transition" in config ? config.transition : undefined;

  // Single image sections - just return the image
  if (images.length === 1) {
    return images[0];
  }

  // Multi-image sections with scroll-based transitions
  if (transition === "scroll") {
    const index = Math.floor(progress * images.length);
    return images[Math.min(index, images.length - 1)];
  }

  // Default to first image
  return images[0];
}

export default function VillageGirlAnimation() {
  const { activeSection, sectionProgress } = useActiveSection();
  const [currentImage, setCurrentImage] = useState(12); // Start with neutral/welcome
  const [isLoaded, setIsLoaded] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  // Get current section config for text display
  const currentConfig = SECTION_CONFIG[activeSection as keyof typeof SECTION_CONFIG];
  const bubbleText = currentConfig?.description || "";

  // Update current image when section or progress changes
  useEffect(() => {
    const newImage = getCurrentImage(activeSection, sectionProgress);
    if (newImage !== currentImage) {
      setCurrentImage(newImage);
    }
  }, [activeSection, sectionProgress, currentImage]);

  // Show bubble with delay after section change
  useEffect(() => {
    setShowBubble(false);
    const timer = setTimeout(() => {
      setShowBubble(true);
    }, 300); // Delay to sync with character transition
    return () => clearTimeout(timer);
  }, [activeSection]);

  // Preload all character images
  useEffect(() => {
    const imageNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    let loadedCount = 0;

    imageNumbers.forEach((num) => {
      const img = new window.Image();
      img.src = `/VillageGirl/Girl_${num}.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === imageNumbers.length) {
          setIsLoaded(true);
        }
      };
    });
  }, []);

  return (
    <div className="fixed -bottom-16 left-4 z-60 pointer-events-none flex ">
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
            duration: 0.3
          }}
          className="relative"
        >
          <Image
            src={`/VillageGirl/Girl_${currentImage}.png`}
            alt="Village Girl Character"
            width={184}
            height={276}
            className="w-32 h-auto sm:w-40 md:w-46 lg:w-52"
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
            className="relative top-28 -left-12 "
          >
            <div className="w-100 h-36 relative flex justify-center items-center " >
              <Image src={TextBubbleBox} alt="Text Bubble Box" fill className="object-contain absolute inset-0 z-0  " quality={100} />
              <motion.p
                key={bubbleText}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="relative z-10 text-black text-center w-full h-full flex justify-center items-center p-8 pl-12 font-bold text-[10px] md:text-base   uppercase"
                style={{
                  fontFamily: 'Clash, sans-serif',
                  textShadow: '0 1px 2px rgba(0,0,0,0.1)'
                }}
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
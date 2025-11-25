"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

export default function LenisProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Defer Lenis initialization to allow initial render to complete
    const initTimer = setTimeout(() => {
      setIsReady(true);
    }, 500); // Delay smooth scroll initialization

    return () => clearTimeout(initTimer);
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const lenis = new Lenis({
      duration: 1.1, // Scroll duration (higher = slower)
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing function
      orientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.7, // Lower value = slower scroll (default is 1)
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, [isReady]);

  return <>{children}</>;
}
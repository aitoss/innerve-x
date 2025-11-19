

"use client";

import { useEffect, useRef, useState } from "react";

export default function Audio() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Defer audio initialization to avoid blocking initial render
    const initTimer = setTimeout(() => {
      const startAudio = () => {
        if (audioRef.current && !isPlaying) {
          audioRef.current.play()
            .then(() => {
              setIsPlaying(true);
            })
            .catch((error) => {
              console.log("Audio autoplay failed:", error);
            });
        }
      };

      // Try to play after delay
      startAudio();

      // Backup: start on any user interaction
      const events = ['click', 'scroll', 'keydown', 'touchstart'];
      events.forEach(event => {
        window.addEventListener(event, startAudio, { once: true, passive: true });
      });

      return () => {
        events.forEach(event => {
          window.removeEventListener(event, startAudio);
        });
      };
    }, 1000); // Delay audio initialization by 1 second

    return () => clearTimeout(initTimer);
  }, [isPlaying]);

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !audioRef.current.muted;
      setIsMuted(!isMuted);
    }
  }

  return (
    <>
      <audio
        ref={audioRef}
        loop
        muted
        preload="auto"
      >
        <source src="/audio.webm" type="audio/webm" />
      </audio>

      {/* Custom Audio Control Button */}
      <button
          onClick={toggleMute}
          className="fixed cursor-pointer bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-[#EAA908]  border border-white/50 flex items-center justify-center hover:bg-white/20 transition-all duration-300 shadow-lg"
          aria-label={isMuted ? "Unmute audio" : "Mute audio"}
        >
          {isMuted ? (
            // Muted Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 9.75L19.5 12m0 0l2.25 2.25M19.5 12l2.25-2.25M19.5 12l-2.25 2.25m-10.5-6l4.72-4.72a.75.75 0 011.28.531V19.94a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.506-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.395C2.806 8.757 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          ) : (
            // Unmuted Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6 text-white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.114 5.636a9 9 0 010 12.728M16.463 8.288a5.25 5.25 0 010 7.424M6.75 8.25l4.72-4.72a.75.75 0 011.28.53v15.88a.75.75 0 01-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.01 9.01 0 012.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75z"
              />
            </svg>
          )}
        </button>
    </>
  );
}
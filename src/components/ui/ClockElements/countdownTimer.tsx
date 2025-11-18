"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
    eventdate: Date | string | number;
};

const CountdownTimer = ({ eventdate }: Props) => {
    const targetDate = eventdate instanceof Date ? eventdate : new Date(eventdate);

    const getRemaining = () => Math.max(0, targetDate.getTime() - Date.now());
    
    // Initialize with null to prevent server-side rendering mismatch
    const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
    const [isClient, setIsClient] = useState(false);

    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        // Set initial time only on client
        setIsClient(true);
        setTimeRemaining(getRemaining());

        // Start interval
        intervalRef.current = setInterval(() => {
            setTimeRemaining(getRemaining());
        }, 1000);

        // Clean up when unmounting
        return () => {
            if (intervalRef.current) clearInterval(intervalRef.current);
        };  
    }, []);

    const getFormattedTime = (ms: number) => {
        const days = Math.floor(ms / (1000 * 60 * 60 * 24));
        const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((ms % (1000 * 60)) / 1000);
        return { days, hours, minutes, seconds };
    };

    // Show placeholder during SSR/initial render
    if (!isClient || timeRemaining === null) {
        return (
            <div className="text-[12px] sm:text-[17px] md:text-[24px] lg:text-[34px] text-white [text-shadow:0_1.2px_0_#000] sm:[text-shadow:0_1.8px_0_#000] md:[text-shadow:0_2.5px_0_#000] lg:[text-shadow:0_3.558px_0_#000]">
                Loading...
            </div>
        );
    }

    const { days, hours, minutes, seconds } = getFormattedTime(timeRemaining);

    return (
        <div className="text-[16px] md:text-stroke-h4 sm:text-[20px] md:text-[24px] lg:text-[34px] text-white [text-shadow:0_1.2px_0_#000] sm:[text-shadow:0_1.8px_0_#000] md:[text-shadow:0_2.5px_0_#000] lg:[text-shadow:0_3.558px_0_#000]">
            {days}d : {hours}h : {minutes}m : {seconds}s
        </div> 
    );
};

export default CountdownTimer;
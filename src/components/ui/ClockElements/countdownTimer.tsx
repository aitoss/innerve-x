"use client";

import { useEffect, useState } from "react";

type Props = {
    eventdate: Date | string | number;
};

const CountdownTimer = (props: Props) => {
    const { eventdate } = props as Props;
    const targetDate = eventdate instanceof Date ? eventdate : new Date(eventdate);

    const getRemaining = () => Math.max(0, targetDate.getTime() - Date.now());

    const [timeRemaining, setTimeRemaining] = useState<number>(getRemaining());

    useEffect(() => {
        setTimeout(() => setTimeRemaining(getRemaining()), 1000 );
        // update every second and clean up on unmount or if targetDate changes
    }, [timeRemaining]);

    

    const getFormattedTime = (timeRemaining: number) => {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        return { days, hours, minutes, seconds };
    };

    const { days, hours, minutes, seconds } = getFormattedTime(timeRemaining);

    return (
        <>
        <div className="text-[12px] sm:text-[17px] md:text-[24px] lg:text-[34px] text-white [text-shadow:0_1.2px_0_#000] sm:[text-shadow:0_1.8px_0_#000] md:[text-shadow:0_2.5px_0_#000] lg:[text-shadow:0_3.558px_0_#000]">
            {days}D : {hours}H : {minutes}M : {seconds}S
        </div>
            
        </>
    );
};

export default CountdownTimer;
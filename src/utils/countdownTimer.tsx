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
        // const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        return { days, hours, minutes };
    };

    const { days, hours, minutes } = getFormattedTime(timeRemaining);

    return (
        <>
        <div className="text-[40px] text-white [text-shadow:0_3.558px_0_#000]">
            {days}D {hours}H {minutes}M 
        </div>
            
        </>
    );
};

export default CountdownTimer;
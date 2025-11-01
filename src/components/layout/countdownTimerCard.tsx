import CountdownTimer from "@/utils/countdownTimer";


export default function CountdownTimerCard() {
    
    return (
        <>
            <div className="h-[290px] w-[770px] text-2xl ">
                <div className="h-[25%] w-full rounded-tr-4xl rounded-tl-4xl text-2xl bg-linear-to-b from-[#E7EDFB] to-[#DDDFF8] flex items-center justify-center">
                    <div className="h-[133px] w-[612px] bg-[linear-gradient(180deg,#25aa87_0%,#52f4c0_8%,#0fae7e_17%,#00875f_88%)] rounded-t-[20px] rounded-b-xl">
                        <div className="h-[119px] rounded-t-[20px] text-[45px] text-white [text-shadow:0_3.558px_0_#000] flex pt-[6.5%] justify-center">Game Starts In</div>
                        <div className="h-3.5 bg-[linear-gradient(180deg,#f2db70_0%,#ffdc77_39%,#a3701f_100%)] rounded-b-xl"></div>
                    </div>
                </div>
                <div className="h-[75%] w-full rounded-br-4xl rounded-bl-4xl bg-linear-to-b from-[#023c2d] via-[#026144] to-[#029267] "></div>
            </div>
        </>
    )

}
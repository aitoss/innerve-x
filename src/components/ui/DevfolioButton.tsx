'use client';
import { useEffect } from "react";

export default function DevfolioButton() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://apply.devfolio.co/v2/sdk.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        }
    }, []);

    return (

        <div
            className="apply-button cursor-pointer transition-transform duration-200 hover:scale-110 active:scale-90"
            data-hackathon-slug="innerve-x"
            data-button-theme="light"
            style={{ height: '44px', width: '312px' }}
        ></div>




    );
}

// <button className="relative flex justify-center items-center  gap-6 px-6 p-2 text-white  w-fit  shadow-[0_3px_0_#000] text-xl  md:text-2xl  font-medium border-t-4 border-b-4 border-b-[#EC8F01]  border-t-[#FFF] text-shadow  rounded-xl " style={{ background: 'linear-gradient(180deg, #FFEA92 1%, #FFFABC 20%, #FFE673 65%, #FFC610 94%)' }} >
//     <Image src={Devfolio} alt="Devfolio Logo" className=" " />
//     Apply with Devfolio
// </button>
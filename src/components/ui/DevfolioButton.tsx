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
        <div className="relative flex justify-center items-center pointer-events-none gap-6 px-6 p-2 text-white  w-fit  shadow-[0_3px_0_#000] text-xl  md:text-2xl  font-medium border-t-4 border-b-4 bg-[#B3CEFF] border-b-[#6198dc]  border-t-[#FFF] text-shadow  rounded-xl " >
            <div
                className="apply-button"
                data-hackathon-slug="innerve-x"
                data-button-theme="light"
                style={{ height: '44px', width: '312px' }}
            ></div>
        </div>



    );
}

// <button className="relative flex justify-center items-center  gap-6 px-6 p-2 text-white  w-fit  shadow-[0_3px_0_#000] text-xl  md:text-2xl  font-medium border-t-4 border-b-4 border-b-[#EC8F01]  border-t-[#FFF] text-shadow  rounded-xl " style={{ background: 'linear-gradient(180deg, #FFEA92 1%, #FFFABC 20%, #FFE673 65%, #FFC610 94%)' }} >
//     <Image src={Devfolio} alt="Devfolio Logo" className=" " />
//     Apply with Devfolio
// </button>
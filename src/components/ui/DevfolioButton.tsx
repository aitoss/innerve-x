"use client";
import { useEffect } from "react";

//export default function DevfolioButton() {
//useEffect(() => {
//  const script = document.createElement("script");
//  script.src = "https://apply.devfolio.co/v2/sdk.js";
//  script.async = true;
// script.defer = true;
// document.body.appendChild(script);
//
// return () => {
//    document.body.removeChild(script);
//  };
//}, []);

//return (
// <div
//    className="apply-button"
//   data-hackathon-slug="innerve-x"
//    data-button-theme="light"
//   style={{ height: "44px", width: "312px" }}
// ></div>
//);
//}

export default function DevfolioButton() {

    const handleClick = () => {
        window.open('https://unstop.com/o/PvyFs2j?lb=7ZSlAfI&utm_medium=Share&utm_source=WhatsApp', '_blank');}
  return (
    <button onClick={handleClick} className="flex text-stroke-h4 justify-center items-center text-[18px] sm:text-[20px] md:text-[22px] lg:text-[32px] w-fit py-2 px-12 bg-[linear-gradient(180deg,#FFEA92_1%,#FFFABC_20%,#FFE673_65%,#FFC610_94%)] text-white [text-shadow:0_1.2px_0_#000] sm:[text-shadow:0_1.8px_0_#000] md:[text-shadow:0_2.5px_0_#000] lg:[text-shadow:0_3.558px_0_#000]  border-b-4 border-b-[#EC8F00] border-t-4 border-t-[#ffffff] rounded-xl ursor-pointer transition-transform duration-200 hover:scale-[1.01] active:scale-95">
      Apply with Unstop
    </button>
  );
}

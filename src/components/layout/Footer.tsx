import Image from 'next/image';
import FooterImg from "./../../assets/webp/footerImg.webp"
import { FaInstagram, FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaMeta, FaXTwitter } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="relative flex  justify-center items-center w-full h-screen ">
            <Image src={FooterImg} alt="Footer Image" layout="fill" objectFit="cover" className='z-0' />
            <div className=' flex flex-col items-center  mx-auto z-10 text-white '>
                <div className="text-[64px] mb-18 ">Contact Us</div>
                <div className="space-y-12 text-[36px]">
                    <div className='flex flex-col items-center'>
                        <p>Mohit Sharma</p>
                        <div className="w-48 h-14 p-[4.77px] relative bg-linear-to-b from-orange-500 via-amber-700 to-orange-600 to 92% rounded-lg shadow-[0px_2.153862237930298px_0px_0px_rgba(0,0,0,0.46)] outline outline-2 outline-black inline-flex flex-col justify-center items-center gap-1">
                            <div className="w-44 h-10 left-1.5 top-[5.15px] absolute bg-linear-to-b from-amber-300 to-amber-300/5 to 65% rounded-[4.85px]"></div>
                            <div className="justify-start text-white text-2xl text-shadow leading-4 [text-shadow:0px_2px_0px_rgb(0_0_0/1.00)]">8273500806</div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p>Joyti Mishra</p>
                        <div className="w-48 h-14 p-[4.77px] relative bg-linear-to-b from-orange-500 via-amber-700 to-orange-600 to 92% rounded-lg shadow-[0px_2.153862237930298px_0px_0px_rgba(0,0,0,0.46)] outline outline-2 outline-black inline-flex flex-col justify-center items-center gap-1">
                            <div className="w-44 h-10 left-1.5 top-[5.15px] absolute bg-linear-to-b from-amber-300 to-amber-300/5 to 65% rounded-[4.85px]"></div>
                            <div className="justify-start text-white text-2xl font-normal font-['Clash'] leading-4 [text-shadow:0px_2px_0px_rgb(0_0_0/1.00)]">8765432345</div>
                        </div>
                    </div>
                </div>
                <div className="text-[36px] mt-10 mb-5">
                    <div>Venue</div>
                    <div></div>
                </div>
            </div>
            <div className='w-full absolute bottom-0 px-20 py-4 border-2 border-[#FFFFFF1F] z-10 flex items-center justify-between'>
                <div className="text-white font-sans flex gap-2 items-center text-xl">
                    <div className='h-8 w-8 border-10 bg-[#3AFFA3]  border-[#3A614F] rounded-full' />
                    Registration Open
                </div>
                <div className="text-white font-sans flex text-xl ">Made with ❤️ by Open Source Software Club</div>
                <div className=" text-white font-sans flex text-xl gap-5">
                    <FaInstagram />
                    <FaMeta />
                    <FaDiscord />
                    <FaXTwitter />
                    <FaGithub />
                    <FaLinkedin />
                </div>
            </div>
        </footer>
    );
}
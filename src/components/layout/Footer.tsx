import Image from 'next/image';
import FooterImg from "./../../assets/webp/footerImg.webp"
import { FaInstagram, FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaMeta, FaXTwitter } from "react-icons/fa6";
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="relative flex justify-center items-center w-full min-h-screen py-8 md:py-0">
            <Image src={FooterImg} alt="Footer Image" layout="fill" objectFit="cover" className='z-0' />
            <div className='flex flex-col items-center mx-auto z-10 text-white px-4 md:px-8'>
                <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] mb-8 md:mb-12 lg:mb-18 text-center">Contact Us</div>
                <div className="space-y-6 md:space-y-8 lg:space-y-12 text-xl sm:text-2xl md:text-3xl lg:text-[36px]">
                    <div className='flex flex-col items-center'>
                        <p className="mb-2 md:mb-3">Mohit Sharma</p>
                        <div className="w-40 h-12 sm:w-44 sm:h-12 md:w-48 md:h-14 p-[4.77px] relative bg-linear-to-b from-orange-500 via-amber-700 to-orange-600 to 92% rounded-lg shadow-[0px_2.153862237930298px_0px_0px_rgba(0,0,0,0.46)] outline-2 outline-black inline-flex flex-col justify-center items-center gap-1">
                            <div className="w-36 h-8 sm:w-40 sm:h-8 md:w-44 md:h-10 left-1.5 top-[5.15px] absolute bg-linear-to-b from-amber-300 to-amber-300/5 to 65% rounded-[4.85px]"></div>
                            <div className="justify-start text-white text-base sm:text-lg md:text-xl text-shadow leading-4 [text-shadow:0px_2px_0px_rgb(0_0_0/1.00)]">9012301175</div>
                        </div>
                    </div>
                    <div className='flex flex-col items-center'>
                        <p className="mb-2 md:mb-3">Joyti Mishra</p>
                        <div className="w-40 h-12 sm:w-44 sm:h-12 md:w-48 md:h-14 p-[4.77px] relative bg-linear-to-b from-orange-500 via-amber-700 to-orange-600 to 92% rounded-lg shadow-[0px_2.153862237930298px_0px_0px_rgba(0,0,0,0.46)] outline-2 outline-black inline-flex flex-col justify-center items-center gap-1">
                            <div className="w-36 h-8 sm:w-40 sm:h-8 md:w-44 md:h-10 left-1.5 top-[5.15px] absolute bg-linear-to-b from-amber-300 to-amber-300/5 to 65% rounded-[4.85px]"></div>
                            <div className="justify-start text-white text-base sm:text-lg md:text-xl leading-4 [text-shadow:0px_2px_0px_rgb(0_0_0/1.00)]">9569795669</div>
                        </div>
                    </div>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] mt-6 md:mt-8 lg:mt-10 mb-4 md:mb-5 text-center">
                    <div>Venue</div>
                    <div></div>
                </div>
            </div>
            <div className='w-full absolute bottom-0 px-4 sm:px-8 md:px-12 lg:px-20 py-3 md:py-4 border-t-2 border-[#FFFFFF1F] z-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 bg-black/20 backdrop-blur-sm'>
                <div className="text-white font-sans flex gap-2 items-center text-sm sm:text-base md:text-lg lg:text-xl order-1 md:order-1">
                    <div className='h-6 w-6 md:h-8 md:w-8 border-10 bg-[#3AFFA3] border-[#3A614F] rounded-full' />
                    <span className="whitespace-nowrap">Registration Open</span>
                </div>
                <div className="text-white font-sans text-xs sm:text-sm md:text-base lg:text-xl text-center order-3 md:order-2">
                    Made with ❤️ by Open Source Software Club
                </div>
                <div className="text-white font-sans flex text-lg sm:text-xl md:text-2xl lg:text-xl gap-3 sm:gap-4 md:gap-5 order-2 md:order-3">
                    <Link href="https://www.instagram.com/ossclub.ait/?igsh=aGJka2VnaHZjaXg5#" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="hover:text-pink-500 transition-colors cursor-pointer" />
                    </Link>
                    <Link href="https://www.facebook.com/groups/ossclubait/" target="_blank" rel="noopener noreferrer">
                        <FaMeta className="hover:text-blue-500 transition-colors cursor-pointer" />
                    </Link>
                    <Link href="https://discord.com/invite/innerve" target="_blank" rel="noopener noreferrer">
                        <FaDiscord className="hover:text-indigo-500 transition-colors cursor-pointer" />
                    </Link>
                    <Link href="https://twitter.com/innerve_nitk" target="_blank" rel="noopener noreferrer">
                        <FaXTwitter className="hover:text-gray-400 transition-colors cursor-pointer" />
                    </Link>
                    <Link href="https://x.com/innerve_tech?t=Z27owCJGKPRNCfZgqsYU3A&s=09" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="hover:text-gray-300 transition-colors cursor-pointer" />
                    </Link>
                    <Link href="https://www.linkedin.com/company/open-source-software-club/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="hover:text-blue-600 transition-colors cursor-pointer" />
                    </Link>
                </div>
            </div>
        </footer>
    );
}
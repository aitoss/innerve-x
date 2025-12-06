import Image from "next/image";
import FooterImg from "./../../assets/webp/footerImg.webp";
import { FaInstagram, FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaMeta, FaXTwitter } from "react-icons/fa6";
import Link from "next/link";
import { MdOutlineMail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative flex justify-center items-center w-full min-h-screen py-8 md:py-10">
      <Image
        src={FooterImg}
        alt="Footer Image"
        layout="fill"
        objectFit="cover"
        className="z-0"
        draggable={false}
      />
      <div className="flex flex-col items-center mx-auto z-10 text-white px-4 md:px-8">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] mb-8 md:mb-12 lg:mb-18 text-center">
          Contact Us
        </div>
        <div className="space-y-6 md:space-y-8 lg:space-y-12 text-xl sm:text-2xl md:text-3xl lg:text-[36px]">
          <div className="flex flex-col items-center">
            <p className="mb-2 md:mb-3">Mohit Sharma</p>
            <a
              className="relative flex justify-center items-center  gap-6 px-6 p-2 text-white  w-fit  shadow-[0_3px_0_#000] text-xl  md:text-2xl  font-medium border-t-4 border-b-4 border-b-[#EC8F01]  border-t-[#FFF] text-shadow  rounded-xl cursor-pointer transition-transform duration-200 hover:scale-[1.01] active:scale-95"
              style={{
                background:
                  "linear-gradient(180deg, #FFEA92 0%, #FFFABC 24%, #FFE673 50%, #FFC610 80%)",
              }}
              href={`tel:9012301175`}
            >
              +91 90123 01175
            </a>
          </div>
          <div className="flex flex-col items-center">
            <p className="mb-2 md:mb-3">Jyoti Mishra</p>
            <a
              href={`tel:9569795669`}
              className="relative flex justify-center items-center  gap-6 px-6 p-2 text-white  w-fit  shadow-[0_3px_0_#000] text-xl  md:text-2xl  font-medium border-t-4 border-b-4 border-b-[#EC8F01]  border-t-[#FFF] text-shadow  rounded-xl cursor-pointer transition-transform duration-200 hover:scale-[1.01] active:scale-95"
              style={{
                background:
                  "linear-gradient(180deg, #FFEA92 0%, #FFFABC 24%, #FFE673 50%, #FFC610 80%)",
              }}

            >
              +91 95697 95669
            </a>
          </div>
        </div>
        <div className="text-xl sm:text-2xl md:text-3xl lg:text-[36px] mt-6 md:mt-8 lg:mt-10 mb-4 md:mb-5 text-center">
          <div>Venue</div>
          <div className="border-8 border-[#fbdd66] rounded-3xl">
            <iframe
              title="Venue Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.2698970162237!2d73.87251157617055!3d18.606926382503538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c70090000001%3A0x160a20f3d0273495!2sArmy%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1763620455906!5m2!1sen!2sin"
              width="180"
              height="180"
              className=" rounded-2xl"
              allowFullScreen={true}
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="w-full absolute bottom-0 px-4 sm:px-8 md:px-12 lg:px-20 py-3 md:py-4 border-t-2 border-[#FFFFFF1F] z-10 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-2 bg-black/20 backdrop-blur-sm">
        <div className="text-white font-sans flex gap-2 items-center text-sm sm:text-base md:text-lg lg:text-xl order-1 md:order-1">
          {/* <div className="h-6 w-6 md:h-8 md:w-8 border-10 bg-[#3AFFA3] border-[#3A614F] rounded-full" /> */}
          <Link href="https://github.com/MLH/mlh-policies/blob/main/code-of-conduct.md" target="_blank" rel="noopener noreferrer" className=" hover:text-yellow-300 transition-colors ">
            MLH Code of Conduct
          </Link>
        </div>
        <div className="text-white font-sans text-xs sm:text-sm md:text-base lg:text-xl text-center order-3 md:order-2">
          Made with ❤️ by Open Source Software Club

        </div>
        <div className="text-white font-sans flex text-lg sm:text-xl md:text-2xl lg:text-xl gap-3 sm:gap-4 md:gap-5 order-2 md:order-3">
          <Link
            href="mailto:innerve@aitpune.edu.in"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdOutlineMail className="hover:text-pink-500 transition-colors cursor-pointer" />
          </Link>
          <Link
            href="https://www.instagram.com/ossclub.ait/?igsh=aGJka2VnaHZjaXg5#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="hover:text-pink-500 transition-colors cursor-pointer" />
          </Link>
          <Link
            href="https://www.facebook.com/groups/ossclubait/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaMeta className="hover:text-blue-500 transition-colors cursor-pointer" />
          </Link>
          <Link
            href="https://discord.com/invite/innerve"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDiscord className="hover:text-indigo-500 transition-colors cursor-pointer" />
          </Link>
          <Link
            href="https://discord.gg/rBrnsHZ6SA"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaXTwitter className="hover:text-gray-400 transition-colors cursor-pointer" />
          </Link>
          <Link
            href="https://github.com/aitoss"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="hover:text-gray-300 transition-colors cursor-pointer" />
          </Link>
          <Link
            href="https://www.linkedin.com/company/open-source-software-club/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="hover:text-blue-600 transition-colors cursor-pointer" />
          </Link>
        </div>
      </div>
    </footer>
  );
}

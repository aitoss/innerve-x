'use client';
import { useState } from "react";
import BrochureButton from "./BrochureButton";
import { motion } from "motion/react";

export default function NavigationBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navItems = ["Prizes", "Tracks", "Timeline", "Sponsor"];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-4 mx-5 lg:gap-[4vw]">
                {navItems.map((item) => (
                    <li key={item}>
                        <a href="#" className="text-white text-xl lg:text-2xl hover:text-gray-300 text-shadow transition-colors duration-200">
                            {item}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-white text-4xl z-60"
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
            >
                {isMobileMenuOpen ? '✕' : '☰'}
            </button>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: '0%' }}
                    exit={{ opacity: 0, x: '-100%' }}
                    transition={{ duration: 0.3 }} 
                    className="md:hidden h-screen flex justify-center items-center absolute top-full z-60 left-0 right-0 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl">
                    <motion.div 
                        className="flex flex-col py-4 px-6 space-y-4"
                        initial="hidden"
                        animate="visible"
                        variants={{
                            hidden: { opacity: 0 },
                            visible: {
                                opacity: 1,
                                transition: {
                                    staggerChildren: 0.1
                                }
                            }
                        }}
                    >
                        <ul className="flex flex-col justify-center items-center gap-6">
                            {navItems.map((item) => (
                                <motion.li 
                                    key={item}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                >
                                    <a
                                        href="#"
                                        className="text-white text-4xl hover:text-gray-300 [text-shadow:0px_3px_0px_rgb(0_0_0/1.00)] block transition-colors duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item}
                                    </a>
                                </motion.li>
                            ))}
                        </ul>
                        {/* Brochure Button in Mobile Menu */}
                        <motion.div 
                            className="pt-4 border-t w-full border-gray-300"
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                visible: { opacity: 1, y: 0 }
                            }}
                        >
                            <BrochureButton />
                        </motion.div>
                    </motion.div>
                </motion.div>
            )}
        </>
    );
}
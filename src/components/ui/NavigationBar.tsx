'use client';
import { useState } from "react";
import BrochureButton from "./BrochureButton";

export default function NavigationBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const navItems = ["Prizes", "Tracks", "Timeline", "Sponsor"];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <>
            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-4 lg:gap-[4vw]">
                {navItems.map((item) => (
                    <li key={item}>
                        <a href="#" className="text-white text-lg lg:text-2xl hover:text-gray-300 [text-shadow:0px_3px_0px_rgb(0_0_0/1.00)] transition-colors duration-200">
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
                <div className="md:hidden absolute top-full left-0 right-0 bg-white/10 backdrop-blur-md border border-white/20 shadow-lg rounded-xl">
                    <div className="flex flex-col py-4 px-6 space-y-4">
                        <ul className="flex flex-col space-y-4">
                            {navItems.map((item) => (
                                <li key={item}>
                                    <a
                                        href="#"
                                        className="text-white text-xl hover:text-gray-300 [text-shadow:0px_3px_0px_rgb(0_0_0/1.00)] block transition-colors duration-200"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        {/* Brochure Button in Mobile Menu */}
                        <div className="pt-4 border-t border-gray-600">
                            <BrochureButton />
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
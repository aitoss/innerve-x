'use client';
import { useState, useEffect } from "react";
import BrochureButton from "./BrochureButton";
import { motion } from "motion/react";

export default function NavigationBar() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);
    const navItems = [
        { label: "Prizes", href: "#prizepool-section" },
        { label: "Tracks", href: "#track-section" },
        { label: "Timeline", href: "#timeline-section" },
        { label: "Sponsor", href: "#wtsu-section" }
    ];

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    // Lock body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            // Save current scroll position
            const scrollY = window.scrollY;
            setScrollPosition(scrollY);
            
            // Lock scroll
            document.body.style.overflow = 'hidden';
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.setAttribute('data-menu-open', 'true');
        } else {
            // Restore scroll
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.removeAttribute('data-menu-open');
            
            // Restore scroll position
            window.scrollTo(0, scrollPosition);
        }

        return () => {
            document.body.style.overflow = '';
            document.body.style.position = '';
            document.body.style.top = '';
            document.body.style.width = '';
            document.body.removeAttribute('data-menu-open');
        };
    }, [isMobileMenuOpen, scrollPosition]);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        
        // Close menu first and restore scroll
        setIsMobileMenuOpen(false);
        
        // Wait for menu to close and scroll position to restore
        setTimeout(() => {
            const element = document.querySelector(href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 100);
    };

    return (
        <>
            {/* Desktop Navigation */}
            <ul className="hidden md:flex gap-4 mx-5 lg:gap-[4vw]">
                {navItems.map((item) => (
                    <li key={item.label}>
                        <a 
                            href={item.href} 
                            onClick={(e) => handleSmoothScroll(e, item.href)}
                            className="text-white text-xl lg:text-2xl hover:text-gray-300 text-shadow transition-colors duration-200"
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>

            {/* Mobile Menu Button */}
            <button
                className="md:hidden text-white text-4xl z-80 relative"
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
                    className="md:hidden h-screen flex justify-center items-center fixed top-0 left-0 right-0 z-70 bg-white/10 backdrop-blur-md"
                    style={{ paddingTop: '80px' }}>
                    <motion.div 
                        className="flex flex-col relative -top-8 space-y-4"
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
                        <ul className="flex flex-col  justify-center items-center gap-6">
                            {navItems.map((item) => (
                                <motion.li 
                                    key={item.label}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    }}
                                >
                                    <a
                                        href={item.href}
                                        onClick={(e) => handleSmoothScroll(e, item.href)}
                                        className="text-white text-4xl hover:text-gray-300 [text-shadow:0px_3px_0px_rgb(0_0_0/1.00)] block transition-colors duration-200 cursor-pointer"
                                    >
                                        {item.label}
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
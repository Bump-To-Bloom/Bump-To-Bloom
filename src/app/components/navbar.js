'use client'

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const closeTimeout = useRef(null);

    const handleMouseEnter = () => {
        if (closeTimeout.current) {
            clearTimeout(closeTimeout.current);
        }
        setDropdownOpen(true);
    };

    const handleMouseLeave = () => {
        closeTimeout.current = setTimeout(() => {
            setDropdownOpen(false);
        }, 200); // delay in ms
    };

    return (
        <nav className="sticky top-0 z-50 bg-[var(--background)] px-6 py-4 border-b border-gray-300 font-serif">
            {/* CONTAINER */}
            <div className="relative flex items-center justify-between h-16">

                {/* HAMBURGER - MOBILE ONLY */}
                <button onClick={() => setOpen(true)} className="md:hidden absolute left-0">
                    <Menu className="w-7 h-7 text-black" />
                </button>

                {/* LOGO */}
                <div className="flex justify-center w-full md:w-auto md:justify-start md:static">
                    <Link href="/" className="flex items-center">
                        <div className="relative w-[160px] h-[60px]">
                            <Image 
                                src="/logo.webp" 
                                alt="Bump to Bloom Logo" 
                                fill 
                                className="object-contain" 
                                priority 
                            />
                        </div>
                    </Link>
                </div>

                {/* NAV LINKS - DESKTOP ONLY */}
                <div className="hidden md:flex gap-6 ml-auto items-center">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/about" className="hover:underline">About</Link>

                    {/* DROPDOWN PARENT */}
                    <div 
                        className="relative"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <button className="hover:underline cursor-pointer">Online Booking</button>

                        {/* DESKTOP DROPDOWN MENU */}
                        {dropdownOpen && (
                            <div 
                                className="absolute left-0 mt-2 w-44 bg-[#f0e7de] border border-[#e0d6cc] shadow-md rounded-lg py-2 opacity-0 translate-y-2 animate-dropdown font-serif text-[15px]"
                                onMouseEnter={handleMouseEnter} 
                                onMouseLeave={handleMouseLeave}
                            >
                                <Link href="/maternity" className="block px-5 py-2 hover:bg-[#e5dbd2] transition-colors">Maternity</Link>
                                <Link href="/couples" className="block px-5 py-2 hover:bg-[#e5dbd2] transition-colors">Couples</Link>
                                <Link href="/family" className="block px-5 py-2 hover:bg-[#e5dbd2] transition-colors">Family</Link>
                                <Link href="/smash-cake" className="block px-5 py-2 hover:bg-[#e5dbd2] transition-colors">Smash Cake</Link>
                            </div>
                        )}
                    </div>

                    <Link href="/faq" className="hover:underline">FAQ</Link>
                </div>
            </div>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-40 bg-[var(--background)] flex flex-col items-center justify-center space-y-6 text-xl"
                    >
                        <button
                            onClick={() => setOpen(false)}
                            className="absolute top-4 right-4"
                            aria-label="Close Menu"
                        >
                            <X className="w-7 h-7 text-black" />
                        </button>

                        {/* NAV LINKS WITH STAGGER */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {},
                                visible: {
                                    transition: { staggerChildren: 0.15 },
                                },
                            }}
                            className="flex flex-col items-center w-full max-w-xs"
                        >
                            {[
                                { href: "/", label: "Home" },
                                { href: "/about", label: "About" },
                                { href: "/faq", label: "FAQ" },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    variants={{
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 },
                                    }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        className="block w-full text-center hover:underline"
                                    >
                                        {item.label}
                                    </Link>
                                </motion.div>
                            ))}

                            {/* ONLINE BOOKING COLLAPSIBLE */}
                            <motion.div
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 },
                                }}
                                className="w-full text-center mt-2"
                            >
                                <button
                                    onClick={() => setDropdownOpen(!dropdownOpen)}
                                    className="flex items-center justify-center w-full hover:underline"
                                >
                                    <span>Online Booking</span>
                                    <svg
                                        className={`ml-2 w-4 h-4 transition-transform duration-200 ${
                                            dropdownOpen ? "rotate-180" : "rotate-0"
                                        }`}
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>

                                <AnimatePresence>
                                    {dropdownOpen && (
                                        <motion.div
                                            initial="hidden"
                                            animate="visible"
                                            exit="exit"
                                            variants={{
                                                visible: {
                                                    transition: { staggerChildren: 0.1, staggerDirection: 1 },
                                                },
                                                exit: {
                                                    transition: { staggerChildren: 0.1, staggerDirection: -1 },
                                                },
                                            }}
                                            className="mt-3 space-y-2"
                                        >
                                            {[
                                                { href: "/maternity", label: "Maternity" },
                                                { href: "/couples", label: "Couples" },
                                                { href: "/family", label: "Family" },
                                                { href: "/smash-cake", label: "Smash Cake" },
                                            ].map((item, i) => (
                                                <motion.div
                                                    key={i}
                                                    variants={{
                                                        hidden: { opacity: 0, y: 10 },
                                                        visible: { opacity: 1, y: 0 },
                                                        exit: { opacity: 0, y: 10 },
                                                    }}
                                                >
                                                    <Link
                                                        href={item.href}
                                                        onClick={() => setOpen(false)}
                                                        className="block w-full text-center hover:underline"
                                                    >
                                                        {item.label}
                                                    </Link>
                                                </motion.div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
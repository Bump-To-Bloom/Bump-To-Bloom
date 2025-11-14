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
        }, 200);
    };

    return (
        <header className="sticky top-0 z-50 w-full">

            <nav className="bg-[var(--background)] px-6 py-4 border-b border-gray-300 font-serif">

                <div className="relative flex items-center justify-between h-16">

                    {/* HAMBURGER - MOBILE ONLY */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden absolute left-0"
                        aria-label="Open menu"
                        aria-controls="mobile-menu"
                        aria-expanded={open ? "true" : "false"}
                    >
                        <Menu className="w-7 h-7 text-black" />
                    </button>

                    {/* MOBILE: CENTER LOGO */}
                    <Link 
                        href="/" 
                        className="md:hidden absolute left-1/2 -translate-x-1/2 flex items-center"
                    >
                        <div className="relative w-[250px] h-[50px]">
                            <Image 
                                src="/logo.webp" 
                                alt="Bump to Bloom Logo" 
                                fill 
                                className="object-contain" 
                                priority
                            />
                        </div>
                    </Link>

                    {/* BOOK NOW (MOBILE ONLY) */}
                    <a
                        href="https://book.usesession.com/i/5CWM4HSgH4"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="
                            ml-auto md:hidden 
                            flex items-center gap-1 
                            bg-[var(--olive)] text-[var(--cream)] 
                            px-4 py-1.5 rounded-md 
                            text-sm font-medium tracking-wide
                            shadow-sm hover:opacity-90 active:scale-95
                            transition-all duration-200 ease-out
                            translate-y-5
                        "
                    >
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                            strokeWidth={1.8}
                            stroke='currentColor'
                            className='w-4 h-4'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                d='M8 7V3m8 4V3m-9 8h10m-11 8h12a2 2 0 002-2V7a2 2 0 00-2-2H6a2 2 0 00-2 2v10a2 2 0 002 2z'
                            />
                        </svg>
                        <span>Book</span>
                    </a>

                    {/* NAV LINKS - DESKTOP ONLY */}
                    <div className="hidden md:flex items-center justify-between w-full max-w-5xl mx-auto px-4 text-[17px] text-[var(--links)]">

                        {/* LEFT SIDE */}
                        <div className="flex items-center gap-9 ml-25">
                            <Link href="/about" className="hover:underline">About</Link>

                            <div 
                                className="relative"
                                onMouseEnter={handleMouseEnter}
                                onMouseLeave={handleMouseLeave}
                            >
                                <button
                                    className="hover:underline cursor-pointer"
                                    aria-haspopup="true"
                                    aria-expanded={dropdownOpen ? "true" : "false"}
                                >
                                    Online Booking
                                </button>

                                {dropdownOpen && (
                                    <div 
                                        className="absolute left-0 mt-2 w-44 bg-[var(--beige)] border border-[var(--sage)] shadow-md rounded-lg py-2 opacity-0 translate-y-2 animate-dropdown font-serif text-[15px]"
                                        onMouseEnter={handleMouseEnter} 
                                        onMouseLeave={handleMouseLeave}
                                    >
                                        <Link href="/maternity" className="block px-5 py-2 hover:bg-[var(--cream)] transition-colors">Maternity</Link>
                                        <Link href="/family" className="block px-5 py-2 hover:bg-[var(--cream)] transition-colors">Family</Link>
                                        <Link href="/couples" className="block px-5 py-2 hover:bg-[var(--cream)] transition-colors">Couples</Link>
                                        <Link href="/fresh48" className="block px-5 py-2 hover:bg-[var(--cream)] transition-colors">Fresh48</Link>
                                        <Link href="/gender-reveal" className="block px-5 py-2 hover:bg-[var(--cream)] transition-colors">Gender Reveal</Link>
                                        <Link href="/smash-cake" className="block px-5 py-2 hover:bg-[var(--cream)] transition-colors">Smash Cake</Link>
                                        <Link href="/proposal" className="block px-5 py-2 hover:bg-[var(--cream)] transition-colors">Proposal</Link>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* CENTER LOGO */}
                        <div className="flex justify-center px-4">
                            <Link href="/" className="flex items-center">
                                <div className="relative w-[200px] h-[80px]">
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

                        {/* RIGHT SIDE */}
                        <div className="flex items-center gap-9 mr-25">
                            <Link href="/faq" className="hover:underline">FAQ</Link>
                            <a
                                href="https://book.usesession.com/i/5CWM4HSgH4/gift-cards"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:underline cursor-pointer"
                            >
                                Gift Cards
                            </a>
                        </div>

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
                                    { href: "/", label: "Home", type: "internal" },
                                    { href: "/about", label: "About", type: "internal" },
                                    { href: "/faq", label: "FAQ", type: "internal" },
                                    { href: "https://book.usesession.com/i/5CWM4HSgH4/gift-cards", label: "Gift Cards", type: "external" },
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        variants={{
                                            hidden: { opacity: 0, y: 20 },
                                            visible: { opacity: 1, y: 0 },
                                        }}
                                    >
                                        {item.type === "external" ? (
                                            <a
                                                href={item.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                onClick={() => setOpen(false)}
                                                className="block w-full text-center hover:underline"
                                            >
                                                {item.label}
                                            </a>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                onClick={() => setOpen(false)}
                                                className="block w-full text-center hover:underline"
                                            >
                                                {item.label}
                                            </Link>
                                        )}
                                    </motion.div>
                                ))}

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
                                        aria-haspopup="true"
                                        aria-expanded={dropdownOpen ? "true" : "false"}
                                    >
                                        <span>Online Booking</span>
                                        <svg
                                            className={`ml-2 w-4 h-4 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : "rotate-0"}`}
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
                                                    { href: "/family", label: "Family" },
                                                    { href: "/couples", label: "Couples" },
                                                    { href: "/fresh48", label: "Fresh48" },
                                                    { href: "/gender-reveal", label: "Gender Reveal" },
                                                    { href: "/smash-cake", label: "Smash Cake" },
                                                    { href: "/proposal", label: "Proposal" },
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
        </header>
    );
}
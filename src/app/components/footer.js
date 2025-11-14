// IMPORTS
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail } from "lucide-react";

export default function Footer() {
    const images = Array.from({ length: 12 }, (_, i) => `/footer/img${i + 1}.jpg`);

    return (
        <footer className="relative bg-[var(--background)] pt-16 pb-10 overflow-hidden">

            {/* TOP ROW: NAV + LOGO + CONTACT */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-7 items-start">

                {/* LEFT - NAV */}
                <div className="flex flex-col items-center md:items-start text-[var(--links)] text-[20px] space-y-2 font-serif">

                    <Link href="/" className="hover:underline hover:text-[var(--foreground)] transition">Home</Link>
                    <Link href="/about" className="hover:underline hover:text-[var(--foreground)] transition">About</Link>
                    <Link href="/faq" className="hover:underline hover:text-[var(--foreground)] transition">FAQ</Link>
                    <a
                        href="https://book.usesession.com/i/5CWM4HSgH4/gift-cards"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline cursor-pointer"
                    >
                        Gift Cards
                    </a>

                    {/* ONLINE BOOKING DROPDOWN */}
                    <div className="relative group cursor-pointer">
                        <span className="hover:underline hover:text-[var(--foreground)] transition hidden md:block">
                            Online Booking
                        </span>

                        <div className="absolute left-0 top-full mt-2 bg-[var(--background)] shadow-lg rounded-md py-2 px-3 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-200 z-50 min-w-[170px] space-y-1">
                            <a href="/maternity" className="block text-[var(--olive)] hover:underline font-sans">Maternity</a>
                            <a href="/family" className="block text-[var(--olive)] hover:underline font-sans">Family</a>
                            <a href="/couples" className="block text-[var(--olive)] hover:underline font-sans">Couples</a>
                            <a href="/fresh48" className="block text-[var(--olive)] hover:underline font-sans">Fresh48</a>
                            <a href="/gender-reveal" className="block text-[var(--olive)] hover:underline font-sans">Gender Reveal</a>
                            <a href="/smash-cake" className="block text-[var(--olive)] hover:underline font-sans">Smash Cake</a>
                            <a href="/proposals" className="block text-[var(--olive)] hover:underline font-sans">Proposal</a>
                        </div>
                    </div>
                </div>

                {/* CENTER LOGO */}
                <div className="flex flex-col items-center text-center">
                    <div className="relative w-[300px] h-[135px] mb-4">
                        <Image 
                            src="/logo.webp" 
                            alt="Bump To Bloom Photography"
                            fill 
                            className="object-contain"
                            priority
                        />
                    </div>
                </div>

                {/* RIGHT - CONTACT & SOCIALS */}
                <div className="flex flex-col items-center md:items-end text-sm text-center md:text-right font-sans text-[var(--foreground)]/90">
                    <span className="font-semibold">Bump To Bloom Photography</span>
                    <p><strong>ABN:</strong> 265 655 159 78</p>
                    <p>6 Firefly Crescent,</p>
                    <p>Lawnton, QLD 4501</p>

                    <a href="tel:+61415353198" className="text-[var(--links)] hover:underline mt-1">
                        0415 353 198
                    </a>

                    <a href="mailto:bumptobloomphotography@gmail.com" className="text-[var(--links)] hover:underline">
                        bumptobloomphotography@gmail.com
                    </a>

                    <div className="flex justify-center md:justify-end gap-4 mt-5">
                        <a
                            href="https://instagram.com/bumptobloomphotography"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="p-3 rounded-full bg-[var(--links)] hover:bg-[#8a7266] transition"
                        >
                            <Instagram className="w-5 h-5 text-white" />
                        </a>
                        <a
                            href="https://www.facebook.com/groups/798155578499950/user/61579442406492/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="p-3 rounded-full bg-[var(--links)] hover:bg-[#8a7266] transition"
                        >
                            <Facebook className="w-5 h-5 text-white" />
                        </a>
                        <a
                            href="mailto:bumptobloomphotography@gmail.com"
                            className="p-3 rounded-full bg-[var(--links)] hover:bg-[#8a7266] transition"
                        >
                            <Mail className="w-5 h-5 text-white" />
                        </a>
                    </div>
                </div>
            </div>

            {/* BOTTOM SLIDING IMAGE STRIP */}
            <div className="mt-14 overflow-hidden relative w-full">
                <div className="flex animate-slide whitespace-nowrap">
                    {images.concat(images).map((src, i) => (
                        <div key={i} className="relative w-[200px] h-[180px] flex-shrink-0 mx-1 rounded-md overflow-hidden">
                            <Image src={src} alt="" fill className="object-cover" />
                        </div>
                    ))}
                </div>
            </div>

            {/* BASE TEXT */}
            <div className="mt-8 text-xs text-center text-gray-500 font-sans">
                &copy; {new Date().getFullYear()} Bump To Bloom Photography. All rights reserved.
            </div>

            <div className="mt-3 text-xs text-gray-500 text-center space-x-4 font-sans">
                <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
                <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            </div>
        </footer>
    );
}
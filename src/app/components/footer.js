// IMPORTS
import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, MailCheckIcon } from "lucide-react";

// FOOTER
export default function Footer() {
    return (
        <footer className="bg-[var(--background)] px-7 py-10 mt-0">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 items-start gap-8">
                {/* BRANDING */}
                <div className="flex items-center gap-3 justify-center md:justify-start">
                    <Image src="/logo-notext.webp" alt="Logo" width={200} height={200} />
                </div>

                {/* TAGLINE / QUOTE */}
                <div className="flex items-center justify-center text-center mt-10 px-1">
                    <p className="text-xl text-[var(--links)] md:text-4xl font-semibold font-script italic leading-snug">
                        &quot;Capturing life&apos;s most precious moments with care and creativity.&quot;
                    </p>
                </div>

                {/* BUSINESS DETAILS */}
                <div className="flex flex-col items-center md:items-end text-sm text-center md:text-right">
                    <Link href="/" className="text-[var(--links)] font-semibold font-sans hover:underline">
                        Bump To Bloom Photography
                    </Link>
                    <p><strong>ABN:</strong> 265 655 159 78</p>
                    <p>6 Firefly Crescent,</p>
                    <p>Lawnton, QLD 4501</p>
                    <a href="TEL:+61415353198" className="text-[var(--links)] font-sans hover:underline">
                        0415 353 198
                    </a>
                    <a href="mailto:bumptobloomphotography@gmail.com" className="text-[var(--links)] font-sans hover:underline">
                        bumptobloomphotography@gmail.com
                    </a>

                    {/* SOCIALS */}
                    <div className="flex justify-center md:justify-end gap-6 mt-4">
                        <a
                            href="https://instagram.com/bumptobloomphotography"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-[var(--links)] hover:bg-[#8a7266] transition"
                        >
                            <Instagram className="w-6 h-6 text-white" />
                        </a>
                            <a
                                href="https://www.facebook.com/groups/798155578499950/user/61579442406492/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-3 rounded-full bg-[var(--links)] hover:bg-[#8a7266] transition"
                            >
                                <Facebook className="w-6 h-6 text-white" />
                            </a>
                        <a
                            href="mailto:bumptobloomphotography@gmail.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-[var(--links)] hover:bg-[#8a7266] transition"
                        >
                            <Mail className="w-6 h-6 text-white" />
                        </a>
                    </div>
                </div>
            </div>

            {/* BOTTOM LINE */}
            <div className="mt-6 text-xs text-center text-gray-500 font-sans">
                &copy; {new Date().getFullYear()} Bump To Bloom Photography. All rights reserved.
            </div>

            <div className="mt-4 text-xs text-gray-500 text-center space-x-4 font-sans">
                <Link href="/terms" className="hover:underline">Terms & Conditions</Link>
                <Link href="/privacy" className="hover:underline">Privacy Policy</Link>
            </div>
        </footer>
    )
}
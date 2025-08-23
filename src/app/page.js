'use client';

// IMPORTS
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

// SESSIONS DATA
const sessions = [
    { label: 'Maternity', href: '/maternity', img: '/sessions/maternity.jpg' },
    { label: 'Family', href: '/family', img: '/sessions/family.jpg' },
    { label: 'Smash Cake', href: '/smash-cake', img: '/sessions/smashcake.jpg' },
    { label: 'Couples', href: '/couples', img: '/sessions/couples.jpg' }
];

// FADE-IN SECTION WRAPPER
function FadeSection({ children, delay = 0 }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay }}
        >
            {children}
        </motion.div>
    );
}

// HOME PAGE
export default function Home() {
    return (
        <main className="text-gray-900">

            {/* HERO BANNER */}
            <section className="relative h-[90vh] w-full overflow-hidden">
                <Image
                    src="/sessions/maternity.jpg"
                    alt="Bump2Bloom"
                    fill
                    className="object-cover object-[50%_10%] object-center"
                    priority
                />
                <div className="absolute inset-0 bg-black/30 flex flex-col items-center justify-center text-white text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-serif font-light text-[#f0e7de]">Embracing the Moment from Bump To Bloom</h1>
                    <p className="mt-4 max-w-xl text-lg text-[#f0e7de] font-sans">
                        Maternity, Family, and Love Timelessly Preserved
                    </p>
                <button
                    onClick={() => {
                        document.getElementById("sessions")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="mt-6 inline-block font-sans bg-[#f0e7de] text-black px-6 py-4 rounded-full font-medium hover:bg-gray-200 transition cursor-pointer"
                >
                    View Sessions
                </button>
                </div>
            </section>

            {/* ABOUT ME */}
            <section className="py-20 px-6">
                <FadeSection delay={0.2}>
                    <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-center">
                        {/* PORTRAIT */}
                        <div className="w-full md:w-1/2 relative h-[32rem]">
                            <Image
                                src="/photographer/about.jpg"
                                alt="Studio setup"
                                fill
                                className="object-cover object-[50%_10%] rounded-lg shadow-md"
                            />
                        </div>
                        {/* TEXT CONTENT */}
                        <div className="w-full md:w-1/2 space-y-4">
                            <h3 className="text-2xl font-bold font-serif">Hi, I&apos;m Ella!</h3>
                            <p className="font-sans">
                                I&apos;m a Brisbane-based photographer dedicated to capturing life&apos;s fleeting moments.
                                The soft joy of maternity, the laughter of families, and the beauty of love.
                            </p>
                            <p className="font-sans">
                                I&apos;m a family, maternity, couple, and smash cake photographer, passionate about turning fleeting moments into timeless keepsakes.
                                Based in the beautiful Moreton Bay Region, I have the privilege of capturing families, glowing mums-to-be, and couples across Brisbane, the Gold Coast, and the Sunshine Coast.
                                From golden beaches, to scenic hinterlands, I love using our incredible locations as the backdrop for your most precious moments.
                            </p>
                        </div>
                    </div>
                </FadeSection>
            </section>

            {/* SESSIONS */}
            <section id="sessions" className="py-5 px-6 max-w-6xl mx-auto">
                <FadeSection>
                    <h2 className="text-center text-3xl font-semibold font-serif mb-10">Book Your Session</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                        {sessions.map(({ label, href, img }, i) => (
                            <Link
                                key={label}
                                href={href}
                                className="group relative rounded-lg overflow-hidden shadow-lg"
                            >
                                <Image
                                    src={img}
                                    alt={label}
                                    width={600}
                                    height={400}
                                    className={`object-cover h-60 w-full transition-transform group-hover:scale-105 ${
                                        label === "Maternity"
                                            ? "object-[50%_30%]"
                                            : label === "Couples"
                                            ? "object-[50%_40%]"
                                            : "object-center"
                                    }`}
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-center">
                                    <p className="text-lg text-[#f0e7de] font-semibold font-sans">{label}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </FadeSection>
            </section>
        </main>
    );
}
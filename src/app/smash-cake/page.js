'use client'

// IMPORTS
import Image from "next/image";
import Link from "next/link";
import SmashcakeCarousel from "../components/smashcake-carousel";
import { motion } from "framer-motion";
import usePageAnimation from "../hooks/usePageAnimation";

// ANIMATION VARIANTS
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

// SMASH CAKE
export default function SmashCake() {
    const hasAnimated = usePageAnimation("smash-cake")

    return (
        <>
        <motion.div
            initial={hasAnimated ? false : "hidden"}
            animate={hasAnimated ? false : "visible"}
            variants={fadeUp}
        >
            {/* NORTH BRISBANE PHOTOGRAPHER BANNER */}
            <div className="text-center pt-10">
                <h1 className="text-3xl font-serif tracking-widest text-black">N o r t h&nbsp;&nbsp;B r i s b a n e</h1>
                <p className="text-[1.2rem] italic font-sans text-[#b68f6c] -mt-1">Smash Cake Photography</p>
            </div>

            {/* GALLERY */}
            <SmashcakeCarousel />

            {/* HERO PAGE */}
            <main className="px-6 py-12 max-w-7xl mx-auto text-center space-y-16">

                {/* TAGLINE */}
                <motion.section
                    className="space-y-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <p className="max-w-2xl mx-auto text-base text-gray-700 font-sans">
                        Celebrate your little one&apos;s first birthday in the most fun (and messy!) way possible — with a cake smash session designed just for them. These sessions are playful, colourful, and full of laughter as your baby explores their cake in a beautifully styled setup.
                    </p>
                    <p className="max-w-2xl mx-auto text-base text-gray-700 font-sans">
                        Everything is taken care of -  including the cake, props, and themed styling - so you can relax and enjoy watching the chaos unfold. Let&apos;s capture the joy, curiosity, and cake-covered smiles to remember this milestone forever.
                    </p>
                </motion.section>

                {/* PACKAGES */}
                <section className="space-y-8">
                    <motion.h1
                        className="text-3xl italic text-gray-900 font-serif mb-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        Smash Cake Package
                    </motion.h1>

                    {/* BAR */}
                    <motion.div
                        className="mx-auto mt-2 h-5 w-75 sm:w-37 md:w-45 lg:w-75 rounded-sm bg-[#c6a489]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    />

                    <div className="flex flex-wrap justify-center gap-6">
                        {/* CLASSIC */}
                        <motion.div
                            className="border p-6 rounded-lg shadow-sm bg-white"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0 } } }}
                        >
                            <h2 className="text-lg font-semibold mb-4 text-gray-800 font-sans">Classic</h2>
                            <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside text-left font-sans">
                                <li>Up to a <strong>1-hour</strong> studio smash cake session in Lawnton</li>
                                <li><strong>6</strong> edited high-resolution digital images + matching black & white copies</li>
                                <li>Private online gallery for viewing and download</li>
                                <li>Decorated setup with backdrop, props, and balloons</li>
                                <li><strong>Custom cake included</strong> (allergy-friendly options available)</li>
                            </ul>
                            <div className="mt-6 text-center">
                                <p className="text-xl font-semibold mb-2 text-gray-900 font-sans">$249</p>
                                <a
                                    href="https://book.usesession.com/t/GzqFowEdFG"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#b68f6c] text-white font-serif px-4 py-2 rounded hover:bg-[#a97e5c] transition-colors duration-300 cursor-pointer inline-block"
                                >
                                    BOOK NOW
                                </a>
                            </div>
                        </motion.div>

                        {/* PREMIUM */}
                        <motion.div
                            className="border p-6 rounded-lg shadow-sm bg-white"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.2 } } }}
                        >
                            <h2 className="text-lg font-semibold mb-4 text-gray-800 font-sans">Premium</h2>
                            <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside text-left font-sans">
                                <li>Up to a <strong>1-hour</strong> studio smash cake session in Lawnton</li>
                                <li><strong>12</strong> edited high-resolution digital images + matching black & white copies</li>
                                <li>Private online gallery for viewing and download</li>
                                <li>Decorated setup with backdrop, props, and balloons</li>
                                <li><strong>Custom cake included</strong> (allergy-friendly options available)</li>
                            </ul>
                            <div className="mt-6 text-center">
                                <p className="text-xl font-semibold mb-2 text-gray-900 font-sans">$399</p>
                                <a
                                    href="https://book.usesession.com/t/GzqFowEdFG"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#b68f6c] text-white font-serif px-4 py-2 rounded hover:bg-[#a97e5c] transition-colors duration-300 cursor-pointer inline-block"
                                >
                                    BOOK NOW
                                </a>
                            </div>
                        </motion.div>
                    </div>

                    {/* RETAINER */}
                    <motion.p
                        className="max-w-2xl mx-auto text-base text-gray-700 font-sans"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        To secure your session, a <strong>$50 retainer</strong> is required at the time our booking is made.
                        <br />
                        Additional images can be purchased for <strong>$20</strong> each post image preview.
                    </motion.p>
                </section>
            </main>
        </motion.div>
        </>
    );
}

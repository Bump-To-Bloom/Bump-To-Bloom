'use client'

// IMPORTS
import Image from "next/image";
import Link from "next/link";
import ProposalCarousel from "../components/proprosal-carousel";
import { motion } from "framer-motion";
import usePageAnimation from "../hooks/usePageAnimation";

// ANIMATION VARIANTS
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

// FRESH 48
export default function Fresh48Page() {
    const hasAnimated = usePageAnimation("family")

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
                <p className="text-[1.2rem] italic font-sans text-[#b68f6c] -mt-1">Fresh48 Photography</p>
            </div>

            {/* HERO PAGE */}
            <main className="px-6 py-6 max-w-7xl mx-auto text-center space-y-8  ">

                {/* TAGLINE */}
                <motion.section
                    className="space-y-6"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                >
                    <p className="max-w-2xl mx-auto text-base text-gray-700 font-sans">
                       The first few moments after birth are raw, emotional, and fleeting. Fresh48 sessions capture all the first moments, including quiet moments, tiny details, and the love that fills the room. Perfect for families who want to capture those precious first moment.
                    </p>
                </motion.section>

                {/* FAMILY PACKAGES */}
                <section className="space-y-8">
                    <motion.h1
                        className="text-3xl italic text-gray-900 font-serif mb-0"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    >
                        Fresh48 Packages
                    </motion.h1>

                    {/* BAR */}
                    <motion.div
                        className="mx-auto mt-2 h-5 w-60 sm:w-32 md:w-40 lg:w-70 rounded-sm bg-[#c6a489]"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={fadeUp}
                    />

                    {/* PACKAGE CARDS */}
                    <div className="flex justify-center items-center">
                        <div className="grid grid-cols-1 gap-6 justify-items-center">
                            {/* CLASSIC */}
                            <motion.div
                                className="border p-6 rounded-lg shadow-sm bg-white w-full max-w-sm"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0 } } }}
                            >
                                <h2 className="text-lg font-semibold mb-4 text-gray-800 font-sans">Classic</h2>
                                <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside text-left font-sans">
                                    <li><strong>30</strong> edited high-resolution digital images + black and white copies</li>
                                    <li><strong>45</strong> to <strong>60</strong> minute session in your hospital room or home</li>
                                    <li>Private online gallery for viewing and download</li>
                                    <li>Sneakpeeks within <strong>48</strong> hours</li>
                                </ul>
                                <div className="mt-6 text-center">
                                    <p className="text-xl font-semibold mb-2 text-gray-900 font-sans">$499</p>
                                    <a
                                        href="https://book.usesession.com/t/LRpNk09Et_"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="bg-[#b68f6c] text-white font-serif px-4 py-2 rounded hover:bg-[#a97e5c] transition-colors duration-300 cursor-pointer inline-block"
                                    >
                                        BOOK NOW
                                    </a>
                                </div>
                            </motion.div>
                        </div>
                    </div>

                    {/* RETAINER NOTE */}
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
    )
}
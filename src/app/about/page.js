'use client';

// IMPORTS
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import usePageAnimation from "../hooks/usePageAnimation";

// ANIMATION VARIANTS
const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

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

// ABOUT PAGE
export default function AboutPage() {
    // STATES
    const hasAnimated = usePageAnimation("about")

    return (
        <main className="text-gray-900">
            <motion.div
                initial={hasAnimated ? false : "hidden"}
                animate={hasAnimated ? false : "visible"}
                variants={fadeUp}
            >
                {/* HEADER */}
                <h1 className="text-4xl font-serif text-black text-center pt-10">About Me</h1>

                {/* BAR */}
                <motion.div
                    className="mx-auto mt-2 h-5 w-44 rounded-sm bg-[#c6a489]"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                />

                {/* ABOUT ME SECTION */}
                <section className="py-10 px-6">
                    <FadeSection delay={0.2}>
                        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 items-start">
                            {/* PORTRAIT */}
                            <div className="w-full md:w-1/2 relative h-[26rem] md:h-[32rem]">
                                <Image
                                    src="/photographer/about.jpg"
                                    alt="Ella - Bump to Bloom Photography"
                                    fill
                                    className="object-cover object-[50%_10%] rounded-lg shadow-md"
                                />
                            </div>
                            {/* TEXT BOX WITH SCROLL */}
                            <motion.div
                                className="w-full md:w-1/2 border p-6 rounded-lg shadow-sm bg-white font-sans text-left space-y-6 overflow-y-auto"
                                style={{ maxHeight: "32rem" }}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeUp}
                            >
                                <div>
                                    <h3 className="text-2xl font-bold font-serif">Capturing your precious moments</h3>
                                    <p className="font-sans text-lg mt-2">
                                        Hi, I&apos;m Ella ✨ I am the heart and lens behind Bump to Bloom Photography. Based in North Brisbane, I am a mum, and someone who believes in capturing the magic of life&apos;s fleeting seasons.
                                    </p>
                                    <p className="font-sans text-lg mt-3">
                                        Every photograph I take is about preserving the warmth, love, and authenticity of your family&apos;s story. These moments pass in a heartbeat, but your memories deserve to live on - natural, beautiful, and true to you.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold font-serif">My Style 🌿</h3>
                                    <p className="font-sans text-lg mt-2">
                                        Soft, natural, and timeless. I capture real emotions - those tender glances, little giggles, and the quiet in-between moments.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold font-serif">Why Bump to Bloom? 🌸</h3>
                                    <p className="font-sans text-lg mt-2">
                                        The name represents growth, love, and new beginnings. Just like a flower blooming, every stage of life deserves to be cherished. From your growing bump to your giggling toddler and beyond, my goal is to create images that feel as meaningful as the journey you are on.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold font-serif">Beyond the Camera</h3>
                                    <p className="font-sans text-lg mt-2">
                                        I know how quickly these seasons pass - that is why I am so passionate about helping you hold onto yours.
                                    </p>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold font-serif">Let&apos;s Bloom Together ✨</h3>
                                    <p className="font-sans text-lg mt-2">
                                        Whether it is a maternity glow, a giggly family session, or a milestone worth celebrating, I would be honoured to capture it for you.
                                    </p>
                                    <p className="font-sans text-lg font-semibold mt-4">
                                        📸 Ready to make magic together?
                                    </p>
                                </div>
                            </motion.div>
                        </div>
                    </FadeSection>
                </section>

                {/* ABOUT YOUR SESSION SECTION */}
                <section className="py-8 px-6">
                    <FadeSection delay={0.2}>
                        {/* HEADER */}
                        <h1 className="text-4xl font-serif text-black text-center">About Your Session</h1>

                        {/* BAR */}
                        <motion.div
                            className="mx-auto mt-2 h-5 w-90 rounded-sm bg-[#c6a489]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeUp}
                        />

                        {/* INTRO TEXT */}
                        <div className="w-full max-w-3xl mx-auto space-y-4 text-center mt-6">
                            <p className="font-sans text-lg">
                                Hello and welcome to Bump to Bloom Photography! <br />
                                I&apos;m Ella, your photographer for maternity, family, couple, and cake smash sessions.  
                                My goal is to make each shoot relaxed, natural, and fun - so the photos you take home feel genuine and timeless.
                            </p>
                            <h2 className="text-2xl font-bold font-serif pt-4">What to Expect</h2>
                        </div>

                        {/* WHAT TO EXPECT GRID */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 max-w-6xl mx-auto">
                            {/* BEFORE YOUR SESSION */}
                            <motion.div
                                className="border p-6 rounded-lg shadow-sm bg-white"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0 } } }}
                            >
                                <h2 className="text-lg font-semibold mb-4 text-gray-800 font-sans">Before Your Session</h2>
                                <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside text-left font-sans">
                                    <li><strong>Booking:</strong> Secure your date via the website or email.</li>
                                    <li><strong>Preparation:</strong> Guidance on outfits, props, and choosing the perfect location.</li>
                                    <li><strong>Consultation:</strong> Chat through any ideas or special requests you may have.</li>
                                </ul>
                            </motion.div>

                            {/* DURING YOUR SESSION */}
                            <motion.div
                                className="border p-6 rounded-lg shadow-sm bg-white"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.2 } } }}
                            >
                                <h2 className="text-lg font-semibold mb-4 text-gray-800 font-sans">During Your Session</h2>
                                <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside text-left font-sans">
                                    <li>A relaxed, fun, and natural experience.</li>
                                    <li>Gentle guidance for posing and capturing genuine smiles.</li>
                                    <li>Sessions usually run 45-60 minutes depending on type.</li>
                                </ul>
                            </motion.div>

                            {/* AFTER YOUR SESSION */}
                            <motion.div
                                className="border p-6 rounded-lg shadow-sm bg-white"
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.4 } } }}
                            >
                                <h2 className="text-lg font-semibold mb-4 text-gray-800 font-sans">After Your Session</h2>
                                <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside text-left font-sans">
                                    <li><strong>Editing:</strong> Each image is carefully retouched for a polished look.</li>
                                    <li><strong>Delivery:</strong> High-resolution photos provided in a private online gallery.</li>
                                </ul>
                            </motion.div>
                        </div>

                        {/* STYLING TIPS */}
                        <div className="w-full max-w-3xl mx-auto space-y-4 text-center mt-10">
                            <h2 className="text-2xl font-bold font-serif">Styling Tips</h2>
                            <ul className="space-y-3 text-base text-gray-700 font-sans mx-auto list-disc list-inside text-left md:text-center px-6">
                                <li>Wear soft, neutral tones for a timeless look.</li>
                                <li>Avoid busy patterns that distract from the moment.</li>
                                <li>You may wish to bring sentimental items to your maternity photoshoot such as ultrasound images or a baby item.</li>
                            </ul>
                        </div>

                        {/* NEXT STEPS */}
                        <div className="w-full max-w-3xl mx-auto space-y-4 text-center mt-10 mb-0">
                            <h2 className="text-2xl font-bold font-serif">Next Steps:</h2>
                            <ul className="space-y-3 text-base text-gray-700 font-sans mx-auto list-disc list-inside text-left md:text-center px-6">
                                <li><strong>Contact:</strong> Using my email or through the &quot;Book Now&quot; buttons on the booking pages.</li>
                                <li><strong>Booking:</strong> Secure your date with a deposit.</li>
                                <li><strong>Prepare:</strong> Review styling tips and plan your outfits.</li>
                                <li><strong>Enjoy:</strong> Relax and enjoy your session.</li>
                            </ul>
                        </div>
                    </FadeSection>
                </section>
            </motion.div>
        </main>
    )
}
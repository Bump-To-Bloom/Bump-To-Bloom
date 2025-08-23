'use client'

// IMPORTS
import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FaLeaf, FaCamera, FaRegSun } from 'react-icons/fa';

// FAQ PAGE
export default function FAQ() {
    // FAQ CONTENT
    const faqSections = [
        {
            title: "Before Your Session",
            icon: <FaLeaf className="text-gray-500 mr-2" />,
            items: [
                {
                    q: "When should I book my maternity session?",
                    a: "I recommend booking between 28-34 weeks of pregnancy. This is when your bump is beautifully round, and you're still comfortable enough to move around during the shoot.",
                },
                {
                    q: "What should I wear?",
                    a: "Neutral, flowy, and timeless pieces always photograph beautifully. I'll also share a style guide and outfit inspiration to help you choose what feels best for you.",
                },
                {
                    q: "Can I include my partner or children in the session?",
                    a: "Absolutely! Your session is all about your story, and loved ones are always welcome.",
                },
                {
                    q: "Where will the photoshoot take place?",
                    a: "I offer outdoor locations around North Brisbane. We'll chat about the vibe you'd like so we can choose the perfect location for you.",
                },
            ],
        },
        {
            title: "During Your Session",
            icon: <FaCamera className="text-gray-500 mr-2" />,
            items: [
                {
                    q: "I feel a little camera shy - what if I don't know how to pose?",
                    a: "Don't worry at all! I'll gently guide you into natural poses and moments. The goal is for you to feel comfortable and enjoy the experience.",
                },
                {
                    q: "How long does a session usually take?",
                    a: "Maternity, couple, and family sessions usually take around 60-90 minutes, while cake smash sessions may run a little shorter.",
                },
                {
                    q: "What if my children don't cooperate?",
                    a: "That's totally okay! Kids are full of personality, and I work with their energy. Sometimes the unplanned moments end up being the most magical photos.",
                },
                {
                    q: "What happens if the weather is bad?",
                    a: "If it's raining or too windy for an outdoor session, we'll reschedule for another day that works best for you.",
                },
            ],
        },
        {
            title: "After Your Session",
            icon: <FaRegSun className="text-gray-500 mr-2" />,
            items: [
                {
                    q: "When will I receive my photos?",
                    a: "Your gallery will be ready within 2-3 weeks after your session. I'll send you a private online link where you can view and download your images.",
                },
                {
                    q: "How many photos will I get?",
                    a: "This depends on the package you choose (10, 20, or 30 images). You'll also have the option to purchase extra images if you fall in love with more than your package includes.",
                },
                {
                    q: "Do you retouch the photos?",
                    a: "Yes - your photos are carefully edited in my signature soft, natural style. I'll enhance lighting, tones, and remove small distractions while keeping everything looking real and true.",
                },
                {
                    q: "Can I order prints or albums?",
                    a: "At this time, I only offer digital images delivered via a private online gallery.",
                },
                {
                    q: "Do you share my photos online?",
                    a: "Only with your permission. I respect your privacy, and you'll always have the choice to keep your images private.",
                },
            ],
        },
    ];

    // MULTI-TOGGLE STATE
    const [openIndexes, setOpenIndexes] = useState([]);

    // TOGGLE HANDLER
    const toggle = (i) => {
        if (openIndexes.includes(i)) {
            setOpenIndexes(openIndexes.filter((index) => index !== i));
        } else {
            setOpenIndexes([...openIndexes, i]);
        }
    };

    return (
        <main className="max-w-6xl mx-auto px-6 py-16 text-gray-800 space-y-10">
            {/* HEADER */}
            <header className="text-center space-y-2">
                <h1 className="text-4xl font-bold tracking-tight font-serif">FAQ</h1>
            </header>

            {/* FAQ SECTIONS */}
            <section className="space-y-8 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
                {faqSections.map((section, sectionIndex) => (
                    <div
                        key={sectionIndex}
                        className="rounded-xl border p-6 shadow-sm"
                        style={{ backgroundColor: '#f0e7de' }}
                    >
                        <h2 className="flex items-center text-lg font-semibold mb-4 font-serif">
                            {section.icon} {section.title}
                        </h2>
                        <div className="space-y-4">
                            {section.items.map((item, i) => {
                                const globalIndex = sectionIndex * 10 + i;
                                return (
                                    <div key={i} className="border-b pb-3">
                                        {/* QUESTION TOGGLE */}
                                        <button
                                            onClick={() => toggle(globalIndex)}
                                            className="w-full text-left flex justify-between items-center font-medium text-gray-800 font-sans cursor-pointer"
                                        >
                                            {item.q}
                                            <span className="text-xl">
                                                {openIndexes.includes(globalIndex) ? '−' : '+'}
                                            </span>
                                        </button>

                                        {/* ANIMATED ANSWER */}
                                        <AnimatePresence>
                                            {openIndexes.includes(globalIndex) && (
                                                <motion.p
                                                    className="mt-2 text-sm text-gray-600 overflow-hidden font-sans"
                                                    initial={{ opacity: 0, height: 0 }}
                                                    animate={{ opacity: 1, height: 'auto' }}
                                                    exit={{ opacity: 0, height: 0 }}
                                                    transition={{ duration: 0.25 }}
                                                >
                                                    {item.a}
                                                </motion.p>
                                            )}
                                        </AnimatePresence>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </section>
        </main>
    );
}
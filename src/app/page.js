'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import { Mail, Instagram } from "lucide-react";
import { useState, useEffect} from 'react';

const sessions = [
    { label: 'Maternity', href: '/maternity', img: '/sessions/maternity.jpg' },
    { label: 'Family', href: '/family', img: '/sessions/family.jpg' },
    { label: 'Smash Cake', href: '/smash-cake', img: '/sessions/smashcake.jpg' },
    { label: 'Couples', href: '/couples', img: '/sessions/couples.jpg' },
    { label: 'Proposal', href: '/proposal', img: '/sessions/proposals.jpg' },
    { label: 'Gender Reveal', href: '/gender-reveal', img: '/sessions/gender-reveal.jpg' }
];

const positions = {
    0: "50% 22%",
    1: "10% 50%",
    2: "50% 100%",
    3: "50% 35%",
    4: "50% 50%",
    5: "50% 60%"
};

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

function ThankYouPopup() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        if (window.location.hash === "#thanks") {
            setShow(true);
            window.history.replaceState(null, "", window.location.pathname);
        }
    }, []);

    if (!show) return null;

    return (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50">
            <motion.div 
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.25 }}
                className="bg-[var(--cream)] max-w-md w-full mx-6 rounded-3xl shadow-2xl p-10 text-center border border-[var(--border)]"
            >
                <h2 className="font-serif text-4xl text-[var(--olive)] mb-3 tracking-wide">
                    Thank You ✨
                </h2>

                <p className="text-[var(--foreground)]/80 leading-relaxed mb-8 text-[17px]">
                    Your enquiry has been sent successfully. I’ll reply as soon as possible.
                </p>

                <button
                    onClick={() => setShow(false)}
                    className="px-8 py-3 rounded-full bg-[var(--olive)] text-[var(--cream)] font-medium tracking-wide hover:opacity-90 transition cursor-pointer"
                >
                    Close
                </button>
            </motion.div>
        </div>
    );
}

export default function Home() {
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const last = localStorage.getItem("lastSubmit");
        if (!last) return;

        const diff = Date.now() - Number(last);

        if (diff < 5000) {
            setIsSubmitting(true);
            setTimeout(() => setIsSubmitting(false), 5000 - diff);
        }
    }, []);

    return (
        <>            
            <main className="text-gray-900">

                <section className="relative h-[90vh] w-full overflow-hidden">
                    <Image
                        src="/hero-photo.jpg"
                        alt="Hero Image"
                        fill
                        priority
                        fetchPriority="high"
                        sizes="100vw"
                        quality={70}
                        className="object-cover object-[30%_10%] md:object-[50%_10%]"
                    />

                    <div className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2 bg-[var(--olive)] text-[var(--cream)] p-8 rounded-2xl shadow-xl w-[340px] text-left">
                        <h3 className="text-2xl font-serif mb-3 text-center">Let&rsquo;s Create Something Beautiful</h3>

                        <p className="font-sans text-[var(--cream)]/85 text-[15px] leading-snug mb-6">
                            Warm, natural and timeless photography for mothers, families and couples — capturing real connection across Brisbane, the Sunshine Coast, and the Gold Coast.
                        </p>

                        <a 
                            href="https://book.usesession.com/i/5CWM4HSgH4"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block text-center bg-[var(--cream)] text-[var(--olive)] font-semibold py-3 rounded-full hover:opacity-90 transition mb-6"
                        >
                            Book Now
                        </a>

                        <div className="flex items-center gap-3 mb-3">
                            <a 
                                href="mailto:bumptobloomphotography@gmail.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Email"
                                className="p-2 rounded-full bg-[var(--cream)]/20 hover:bg-[var(--cream)]/30 transition"
                            >
                                <Mail className="w-5 h-5 text-[var(--cream)]" />
                            </a>
                            <span className="text-sm font-sans text-[var(--cream)]">bumptobloomphotography@gmail.com</span>
                        </div>

                        <div className="flex items-center gap-3">
                            <a
                                href="https://instagram.com/bumptobloomphotography"
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label="Instagram"
                                className="p-2 rounded-full bg-[var(--cream)]/20 hover:bg-[var(--cream)]/30 transition"
                            >
                                <Instagram className="w-5 h-5 text-[var(--cream)]" />
                            </a>
                            <span className="text-sm font-sans text-[var(--cream)]">@bumptobloomphotography</span>
                        </div>
                    </div>
                </section>

                <section className="py-10 px-6 text-center mb-20">
                    <FadeSection delay={0.2}>
                        <h1 className="text-3xl md:text-5xl font-serif font-light text-[var(--foreground)] max-w-4xl mx-auto">
                            Embracing the Moment from Bump To Bloom
                        </h1>

                        <p className="mt-4 max-w-xl mx-auto text-lg font-sans text-[var(--links)]">
                            Maternity, Family, and Love Timelessly Preserved
                        </p>

                        <button
                            onClick={() => {
                                document.getElementById("sessions")?.scrollIntoView({ behavior: "smooth" });
                            }}
                            className="mt-8 inline-block font-sans bg-[var(--cream)] text-[var(--olive)] px-8 py-4 rounded-full font-medium hover:opacity-90 transition cursor-pointer"
                        >
                            View Sessions
                        </button>
                    </FadeSection>
                </section>

                <section className="py-0">
                    <FadeSection delay={0.2}>

                        {/* TESTIMONIAL 1 */}
                        <div className="bg-[var(--sage)] py-28 px-6 w-full">
                            <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">

                                <div className="-translate-y-10">
                                    <h3 className="font-serif text-5xl mb-6">
                                        B & C
                                    </h3>

                                    <p className="font-sans mb-8 leading-relaxed text-[var(--foreground)]/90">
                                        &ldquo;We had such a great experience with Ella! From booking through to the shoot and final edits, the whole process was simple, smooth, and professional. Ella made our family feel comfortable and captured such genuine, beautiful moments. We absolutely love our photos and will treasure them for years to come. Highly recommend!&rdquo;
                                    </p>
                                </div>

                                <div className="relative w-full max-w-xl mx-auto -mt-20 md:-mt-40">
                                    <div className="grid grid-cols-2 gap-2 h-[520px]">
                                        <div className="relative w-full h-full overflow-hidden rounded-lg shadow-md">
                                            <Image src="/testomonials/testomonial-1/img1.jpg" alt="Gallery 1" fill className="object-cover object-[50%_52%]" />
                                        </div>
                                        <div className="relative w-full h-full overflow-hidden rounded-lg shadow-md">
                                            <Image src="/testomonials/testomonial-1/img2.jpg" alt="Gallery 2" fill className="object-cover" />
                                        </div>
                                        <div className="relative w-full h-full overflow-hidden rounded-lg shadow-md">
                                            <Image src="/testomonials/testomonial-1/img3.jpg" alt="Gallery 3" fill className="object-cover" />
                                        </div>
                                        <div className="relative w-full h-full overflow-hidden rounded-lg shadow-md">
                                            <Image src="/testomonials/testomonial-1/img4.jpg" alt="Gallery 4" fill className="object-cover object-[50%_35%]" />
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* TESTIMONIAL 2 */}
                        <div className="bg-[var(--background)] py-28 px-6 w-full">
                            <div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center md:flex-row-reverse">

                                <div className="relative w-full max-w-xl mx-auto -mt-20 md:-mt-40 order-last md:order-first">
                                    <div className="grid grid-cols-2 gap-2 h-[520px]">
                                        <div className="relative w-full h-full overflow-hidden rounded-lg shadow-md">
                                            <Image src="/testomonials/testomonial-2/img1.jpg" alt="Gallery 1" fill className="object-cover" />
                                        </div>
                                        <div className="relative w-full h-full overflow-hidden rounded-lg shadow-md">
                                            <Image src="/testomonials/testomonial-2/img2.jpg" alt="Gallery 2" fill className="object-cover" />
                                        </div>
                                        <div className="relative w-full h-full overflow-hidden rounded-lg shadow-md">
                                            <Image src="/testomonials/testomonial-2/img3.jpg" alt="Gallery 3" fill className="object-cover object-[50%_30%]" />
                                        </div>
                                        <div className="relative w-full h-full overflow-hidden rounded-lg shadow-md">
                                            <Image src="/testomonials/testomonial-2/img4.jpg" alt="Gallery 4" fill className="object-cover" />
                                        </div>
                                    </div>
                                </div>

                                <div className="-translate-y-15">
                                    <h3 className="font-serif text-5xl text-[var(--olive)] mb-6">
                                        P & A
                                    </h3>

                                    <p className="font-sans mb-8 leading-relaxed text-[var(--foreground)]/85">
                                        &ldquo;I&rsquo;m so grateful to Bump To Bloom Photography for beautifully capturing such a special moment in my life. The pictures and videos from my proposal engagement are absolutely stunning—unique, elegant, and full of emotion. Truly exceeded my expectations.&rdquo;
                                    </p>
                                </div>

                            </div>
                        </div>

                    </FadeSection>
                </section>

                <section id="sessions" className="py-5 px-6 max-w-6xl mx-auto">
                    <FadeSection>
                        <h2 className="text-center text-3xl font-semibold font-serif mb-10 text-[var(--foreground)]">Book Your Session</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 gap-6">
                            {sessions.map(({ label, href, img }, index) => (
                                <Link
                                    key={label}
                                    href={href}
                                    className="group relative rounded-lg overflow-hidden shadow-lg"
                                >
                                    <Image
                                        src={img}
                                        alt={`${label} photography session example`}
                                        width={364}
                                        height={260}
                                        sizes="(max-width: 768px) 100vw, 364px"
                                        quality={70}
                                        className="object-cover h-60 w-full transition-transform group-hover:scale-105"
                                        style={{ objectPosition: positions[index] || "50% 50%" }}
                                    />
                                    <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-3 text-center">
                                        <p className="text-lg text-[#f0e7de] font-semibold font-sans">{label}</p>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </FadeSection>
                </section>
                
                <section id="contact" className="py-20 px-6">
                    <ThankYouPopup />

                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
                        <div className="hidden md:block">
                            <div className="relative w-full h-full min-h-[563px] overflow-hidden rounded-xl shadow-xl">
                                <Image
                                    src="/testomonials/testomonial-2/img1.jpg"
                                    alt="Contact Image"
                                    fill
                                    className="object-cover object-[50%_40%]"
                                    priority
                                />
                            </div>
                        </div>

                        <div className="bg-[var(--cream)] rounded-xl p-6 sm:p-8 shadow-xl">
                            <h2 className="font-serif text-3xl mb-2 text-[var(--olive)]">Enquire & Book</h2>
                            <p className="text-[var(--foreground)]/80 mb-6">Tell me a little about your session and I’ll reply shortly.</p>

                            <form
                                action="https://api.web3forms.com/submit"
                                method="POST"
                                onSubmit={() => {
                                    setIsSubmitting(true);
                                    localStorage.setItem("lastSubmit", Date.now());
                                    setTimeout(() => setIsSubmitting(false), 3000);
                                }}
                                className="space-y-5"
                            >
                                {/* ACCESS KEY */}
                                <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />

                                <input type="hidden" name="from_name" value="Bump To Bloom Website" />
                                <input type="hidden" name="botcheck" />

                                {/* REDIRECT */}
                                <input type="hidden" name="redirect" value="https://bumptobloomphotography.com.au/#thanks" />

                                {/* SUBJECT */}
                                <input type="hidden" name="subject" value="New enquiry from Bump to Bloom" />

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm mb-1 text-[var(--foreground)]/80">Full Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            className="w-full rounded-md border border-[var(--border)] bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--olive)]"
                                            placeholder="First & Last Name"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm mb-1 text-[var(--foreground)]/80">Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            className="w-full rounded-md border border-[var(--border)] bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--olive)]"
                                            placeholder="example@email.com"
                                        />
                                    </div>
                                </div>

                                <div className="grid sm:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm mb-1 text-[var(--foreground)]/80">Phone (optional)</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            className="w-full rounded-md border border-[var(--border)] bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--olive)]"
                                            placeholder="0400 000 000"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm mb-1 text-[var(--foreground)]/80">Session Type</label>
                                        <select
                                            name="session_type"
                                            className="w-full rounded-md border border-[var(--border)] bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-[var(--olive)]"
                                            defaultValue=""
                                            required
                                        >
                                            <option value="" disabled>Select a session</option>
                                            <option value="Maternity">Maternity</option>
                                            <option value="Family">Family</option>
                                            <option value="Fresh48">Fresh48</option>
                                            <option value="Smash Cake">Smash Cake</option>
                                            <option value="Couples">Couples</option>
                                            <option value="Proposal">Proposal</option>
                                            <option value="Other">Other</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm mb-1 text-[var(--foreground)]/80">Message</label>
                                    <textarea
                                        name="message"
                                        rows={5}
                                        required
                                        className="w-full rounded-md border border-[var(--border)] bg-white px-3 py-2 resize-y outline-none focus:ring-2 focus:ring-[var(--olive)]"
                                        placeholder="Tell me about your ideal session, dates, location, and any details you’d love captured."
                                    />
                                </div>

                                <button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className={`w-full sm:w-auto inline-flex justify-center rounded-full px-6 py-3 font-medium transition cursor-pointer 
                                        ${isSubmitting 
                                            ? "bg-[var(--olive)]/50 cursor-not-allowed" 
                                            : "bg-[var(--olive)] text-[var(--cream)] hover:opacity-90"
                                        }`}
                                >
                                    {isSubmitting ? "Sending..." : "Send Enquiry"}
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
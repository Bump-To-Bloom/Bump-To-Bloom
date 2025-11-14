'use client'

// IMPORTS
import Image from "next/image"
import NewbornCarousel from "../components/newborncarousel";
import { motion } from "framer-motion";
import usePageAnimation from "../hooks/usePageAnimation";

// ANIMATION VARIANTS
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
}

// MATERNITY PAGE
export default function MaternityPage() {
  const hasAnimated = usePageAnimation("maternity");

  return (
    <>
    <motion.section
      className="space-y-6"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
    >
      {/* NORTH BRISBANE PHOTOGRAPHER BANNER */}
      <div className="text-center pt-10">
        <h1 className="text-3xl font-serif tracking-widest text-black">N o r t h&nbsp;&nbsp;B r i s b a n e</h1>
        <p className="text-[1.2rem] italic font-sans text-[#b68f6c] -mt-1">Maternity Photography</p>
      </div>

      {/* GALLERY */}
      <div className="w-full max-w-3xl mx-auto mt-10 px-4">
        <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/sessions/maternity.jpg"
            alt="Couple session"
            fill
            className="object-cover object-[50%_20%]"
            priority
          />
        </div>
      </div>

      {/* HERO PAGE */}
      <main className="px-6 py-5 max-w-7xl mx-auto text-center space-y-16">

        {/* TAGLINE */}
        <motion.section
          className="space-y-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <p className="max-w-2xl mx-auto text-base text-gray-700 font-sans">
            Whether you&apos;re wrapped in a flowing dress from my client closet or holding hands with your partner at sunset,
            these moments deserve to be remembered — because your journey to motherhood is truly worth capturing.
            Let&apos;s document the beginning of your next chapter.
          </p>
          <p className="max-w-2xl mx-auto text-base text-gray-700 font-sans">
            If you wish to capture these moments with ultrasound pictures or other sentimental items, please ensure to bring them along your session.
          </p>
        </motion.section>

        {/* MATERNITY PACKAGES */}
        <section className="space-y-8">
          <motion.h1
            className="text-3xl italic text-gray-900 font-serif mb-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            Maternity Packages
          </motion.h1>

          {/* BAR */}
          <motion.div
            className="mx-auto mt-2 h-5 w-70 sm:w-42 md:w-50 lg:w-70 rounded-sm bg-[#c6a489]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          />

          {/* PACKAGE CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* MINI */}
            <motion.div
              className="border p-6 rounded-lg shadow-sm bg-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0 } } }}
            >
              <h2 className="text-lg font-semibold mb-4 text-gray-800 font-sans">Mini</h2>
              <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside text-left font-sans">
                <li>Up to a <strong>45-minute</strong> sunset maternity session at your chosen location</li>
                <li><strong>10</strong> edited high-resolution digital images + black and white copies</li>
                <li>Private online gallery for viewing and download</li>
                <li>Poses including <strong>partner</strong> and <strong>siblings</strong></li>
                <li>Access to client closet for styling assistance</li>
              </ul>
              <div className="mt-6 text-center">
                <p className="text-xl font-semibold mb-2 text-gray-900 font-sans">$199</p>
                <a
                  href="https://book.usesession.com/t/4IkFCr_g3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#b68f6c] text-white font-serif px-4 py-2 rounded hover:bg-[#a97e5c] transition-colors duration-300 cursor-pointer inline-block"
                >
                  BOOK NOW
                </a>
              </div>
            </motion.div>

            {/* CLASSIC */}
            <motion.div
              className="border p-6 rounded-lg shadow-sm bg-white"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.2 } } }}
            >
              <h2 className="text-lg font-semibold mb-4 text-gray-800 font-sans">Classic</h2>
              <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside text-left font-sans">
                <li>Up to a <strong>1-hour</strong> sunset maternity session at your chosen location</li>
                <li><strong>20</strong> edited high-resolution digital images + black and white copies</li>
                <li>Private online gallery for viewing and download</li>
                <li>Poses including <strong>partner</strong> and <strong>siblings</strong></li>
                <li>Access to client closet for styling assistance</li>
              </ul>
              <div className="mt-6 text-center">
                <p className="text-xl font-semibold mb-2 text-gray-900 font-sans">$349</p>
                <a
                  href="https://book.usesession.com/t/4IkFCr_g3F"
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
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: 0.4 } } }}
            >
              <h2 className="text-lg font-semibold mb-4 text-gray-800 font-sans">Premium</h2>
              <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside text-left font-sans">
                <li>Up to a <strong>1-hour</strong> sunset maternity session at your chosen location</li>
                <li><strong>30</strong> edited high-resolution digital images + black and white copies</li>
                <li>Private online gallery for viewing and download</li>
                <li>Poses including <strong>partner</strong> and <strong>siblings</strong></li>
                <li>Access to client closet for styling assistance</li>
              </ul>
              <div className="mt-6 text-center">
                <p className="text-xl font-semibold mb-2 text-gray-900 font-sans">$499</p>
                <a
                  href="https://book.usesession.com/t/4IkFCr_g3F"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#b68f6c] text-white font-serif px-4 py-2 rounded hover:bg-[#a97e5c] transition-colors duration-300 cursor-pointer inline-block"
                >
                  BOOK NOW
                </a>
              </div>
            </motion.div>
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
    </motion.section>
    </>
  )
}

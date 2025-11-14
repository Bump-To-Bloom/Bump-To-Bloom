'use client'

// IMPORTS
import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

// CONST
const images = [
    '/smashcake-gallery/img1.jpg',
    '/smashcake-gallery/img2.jpg',
    '/smashcake-gallery/img3.jpg',
]

const positions = {
    0: "50% 50%",
    1: "50% 50%",
    2: "50% 20%",
    3: "50% 55%",
    4: "50% 30%",
    5: "50% 55%"
}

// FUNCTION
export default function FamilyCarousel() {
    const [page, setPage] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(3) // default desktop
    const [direction, setDirection] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)
    const [hasInteracted, setHasInteracted] = useState(false)

    // DETECT SCREEN SIZE
    useEffect(() => {
        const updateItems = () => {
            if (window.innerWidth < 640) {
                setItemsPerPage(1) // mobile
            } else {
                setItemsPerPage(3) // desktop
            }
        }
        updateItems()
        window.addEventListener("resize", updateItems)
        return () => window.removeEventListener("resize", updateItems)
    }, [])

    const totalPages = Math.ceil(images.length / itemsPerPage)

    const handlePrev = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setHasInteracted(true)
        setDirection(-1)
        setPage(prev => (prev === 0 ? totalPages - 1 : prev - 1))
        setTimeout(() => setIsAnimating(false), 950)
    }

    const handleNext = () => {
        if (isAnimating) return
        setIsAnimating(true)
        setHasInteracted(true)
        setDirection(1)
        setPage(prev => (prev === totalPages - 1 ? 0 : prev + 1))
        setTimeout(() => setIsAnimating(false), 950)
    }

    const startIndex = page * itemsPerPage
    const currentImages = images.slice(startIndex, startIndex + itemsPerPage)

    return (
        <div className="relative w-full max-w-6xl mx-auto mt-5 overflow-hidden">
            {/* IMAGE GRID */}
            <div className="relative w-full h-full min-h-[350px]">
                <AnimatePresence initial={false} custom={direction}>
                    <motion.div
                        key={page}
                        custom={direction}
                        initial={
                            hasInteracted
                                ? { x: direction > 0 ? '100%' : '-100%' }
                                : { x: 0 }
                        }
                        animate={{ x: 0 }}
                        exit={
                            hasInteracted
                                ? { x: direction > 0 ? '-100%' : '100%' }
                                : { x: 0 }
                        }
                        transition={{ duration: 0.9, ease: [0.22, 0.65, 0.35, 1] }}
                        className={`absolute top-0 left-0 w-full grid gap-4 ${itemsPerPage === 1 ? "grid-cols-1" : "grid-cols-3"}`}
                    >
                        {currentImages.map((src, idx) => {
                            const globalIndex = startIndex + idx
                            return (
                                <div key={globalIndex} className="aspect-[4/3] relative rounded overflow-hidden shadow">
                                    <Image
                                        src={src}
                                        alt={`Gallery ${globalIndex}`}
                                        fill
                                        style={{ objectPosition: positions[globalIndex] || "50% 50%" }}
                                        className="object-cover"
                                        priority={idx === 0}
                                    />
                                </div>
                            )
                        })}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* ARROWS — ONLY SHOW IF MORE THAN 1 PAGE */}
            {totalPages > 1 && (
                <>
                    <button
                        onClick={handlePrev}
                        disabled={isAnimating}
                        className={`absolute top-2/5 left-4 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 transition rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10 cursor-pointer ${isAnimating ? "opacity-50 pointer-events-none" : ""}`}
                        aria-label="Previous"
                    >
                        ←
                    </button>

                    <button
                        onClick={handleNext}
                        disabled={isAnimating}
                        className={`absolute top-2/5 right-4 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 transition rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10 cursor-pointer ${isAnimating ? "opacity-50 pointer-events-none" : ""}`}
                        aria-label="Next"
                    >
                        →
                    </button>
                </>
            )}
        </div>
    )
}
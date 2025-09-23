'use client'

// IMPORTS
import { useState, useEffect } from "react"
import Image from "next/image"

// CONST
const images = [
    '/proposal-gallery/img1.jpg',
    '/proposal-gallery/img2.jpg',
    '/proposal-gallery/img3.jpg',
    '/proposal-gallery/img4.jpg',
    '/proposal-gallery/img5.jpg',
    '/proposal-gallery/img6.jpg',
]

// FUNCTION
export default function ProposalCarousel() {
    const [page, setPage] = useState(0)
    const [itemsPerPage, setItemsPerPage] = useState(3) // default desktop

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
    const handlePrev = () => setPage(prev => (prev === 0 ? totalPages - 1 : prev - 1))
    const handleNext = () => setPage(prev => (prev === totalPages - 1 ? 0 : prev + 1))

    const startIndex = page * itemsPerPage
    const currentImages = images.slice(startIndex, startIndex + itemsPerPage)

    return (
        <div className="relative w-full max-w-6xl mx-auto mt-5">
            {/* IMAGE GRID */}
            <div className={`grid gap-4 ${itemsPerPage === 1 ? "grid-cols-1" : "grid-cols-3"}`}>
                {currentImages.map((src, idx) => {
                    // APPLY OBJECT POSITION BASED ON IMAGE
                    let objectPositionClass = "object-center"

                    if (src.includes("img1")) objectPositionClass = "object-[10%_50%]"
                    if (src.includes("img2")) objectPositionClass = "object-[50%_55%]"
                    if (src.includes("img4")) objectPositionClass = "object-[50%_60%]"
                    if (src.includes("img5")) objectPositionClass = "object-[50%_30%]"
                    if (src.includes("img6")) objectPositionClass = "object-[50%_40%]" 

                    return (
                        <div key={idx} className="aspect-[4/3] relative rounded overflow-hidden shadow">
                            <Image 
                                src={src}
                                alt={`Gallery ${idx}`}
                                fill
                                className={`object-cover ${objectPositionClass}`}
                                priority={idx === 0}
                            />
                        </div>
                    )
                })}
            </div>

            {/* ARROWS — ONLY SHOW IF MORE THAN 1 PAGE */}
            {totalPages > 1 && (
                <>
                    <button
                        onClick={handlePrev}
                        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 transition rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10 cursor-pointer"
                        aria-label="Previous"
                    >
                        ←
                    </button>

                    <button
                        onClick={handleNext}
                        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 transition rounded-full w-10 h-10 flex items-center justify-center shadow-lg z-10 cursor-pointer"
                        aria-label="Next"
                    >
                        →
                    </button>
                </>
            )}
        </div>
    )
}
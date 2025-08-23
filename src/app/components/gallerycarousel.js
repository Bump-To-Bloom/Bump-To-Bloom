'use client'

// IMPORTS
import { useState, useEffect } from "react";
import Image from "next/image";

// CONST: ALL IMAGES
const images = [
    '/gallery/img1.jpg',
    '/gallery/img2.jpg',
    '/gallery/img3.jpg',
    '/gallery/img4.jpg',
    '/gallery/img5.jpg',
    '/gallery/img6.jpg',
]

// GALLERY CAROUSEL
export default function GalleryCarousel() {
    const [page, setPage] = useState(0)
    const [imagesPerPage, setImagesPerPage] = useState(3)

    // DETECT SCREEN SIZE ON LOAD AND RESIZE
    useEffect(() => {
        const updateImagesPerPage = () => {
            if (window.innerWidth < 768) {
                setImagesPerPage(1);
            } else {
                setImagesPerPage(3);
            }
        }

        updateImagesPerPage();
        window.addEventListener('resize', updateImagesPerPage);
        return () => window.removeEventListener('resize', updateImagesPerPage);
    }, [])

    // CALCULATE IMAGE SLICE BASED ON CURRENT PAGE AND IMAGES PER PAGE
    const startIndex = page * imagesPerPage;
    const currentImages = images.slice(startIndex, startIndex + imagesPerPage);

    const totalPages = Math.ceil(images.length / imagesPerPage);

    const handlePrev = () => {
        setPage((prev) => (prev === 0 ? totalPages - 1 : prev - 1));
    }

    const handleNext = () => {
        setPage((prev) => (prev === totalPages - 1 ? 0 : prev + 1));
    }

    return (
        <div className="relative w-full max-w-6xl mx-auto mt-5">
            {/* IMAGE GRID */}
            <div className={`grid grid-cols-1 ${imagesPerPage > 1 ? 'md:grid-cols-3' : ''} gap-4`}>
                {currentImages.map((src, idx) => (
                    <div key={idx} className="aspect-[4/3] relative rounded overflow-hidden shadow">
                        <Image 
                            src={src}
                            alt={`Gallery ${idx}`}
                            fill
                            className="object-cover"
                            priority={idx === 0}
                        />
                    </div>
                ))}
            </div>

            {/* ARROWS */}
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
        </div>
    )
}

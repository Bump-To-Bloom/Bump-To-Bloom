"use client";

// IMPORTS
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ChristmasPopup() {
    const [loading, setLoading] = useState(false);

    // STATE TO CONTROL POPUP VISIBILITY
    const [showPopup, setShowPopup] = useState(false);

    // STATE TO CONTROL BANNER VISIBILITY
    const [showBanner, setShowBanner] = useState(false);

    // RUN ONCE WHEN PAGE LOADS
    useEffect(() => {
        const christmasPopupStatus = localStorage.getItem("christmasPopupStatus");

        if (christmasPopupStatus === "closed") {
            // USER CLOSED POPUP BEFORE → SHOW BANNER ONLY
            setShowPopup(false);
            setShowBanner(true);
        } else {
            // FIRST VISIT → SHOW POPUP
            setShowPopup(true);
            setShowBanner(false);
            document.body.style.overflow = "hidden"; // LOCK SCROLL
        }
    }, []);

    // FUNCTION TO CLOSE POPUP (SHOW BANNER FOREVER)
    const closePopup = () => {
        setShowPopup(false);
        setShowBanner(true);
        localStorage.setItem("christmasPopupStatus", "closed"); // TRACK THAT POPUP WAS CLOSED
        document.body.style.overflow = "auto";
    };

    return (
        <>
            {/* TOP BANNER */}
            {showBanner && (
                <a
                    className="fixed top-24 w-full bg-red-500 text-white text-center py-2 z-40 cursor-pointer"
                    href="https://book.usesession.com/s/7mKQOtw7XM"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    🎄 Book your rustic Christmas session now!
                </a>
            )}

            {/* POPUP */}
            <AnimatePresence>
                {showPopup && (
                    <motion.div
                        className="fixed inset-0 flex items-center justify-center z-50"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="rounded-lg p-6 w-[90%] max-w-md relative border-2"
                            style={{
                                backgroundColor: "#f0e7de",
                                borderColor: "#aa8f82",
                            }}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.8, opacity: 0 }}
                            transition={{ type: "spring", duration: 0.5 }}
                        >
                            {/* CLOSE BUTTON */}
                            <button
                                onClick={closePopup}
                                className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl cursor-pointer"
                            >
                                ✕
                            </button>

                            <div className="flex flex-col items-center text-center px-4">
                                <h1 className="text-xl font-bold mb-3">
                                    Book your rustic christmas mini sessions today 🎄
                                </h1>
                                <p className="mb-6 text-gray-800">
                                    These sessions are perfect for families, or couples.
                                </p>
                                <a
                                    href="https://book.usesession.com/s/7mKQOtw7XM"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-[#aa8f82] text-white font-medium py-3 px-6 rounded hover:opacity-90 transition"
                                >
                                    Book Now!
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
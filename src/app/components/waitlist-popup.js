"use client";

// IMPORTS
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { supabase } from "../lib/supabaseClient";

export default function WaitlistPopup() {
    // STATE FOR FORM
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");

    // STATE TO CONTROL POPUP VISIBILITY
    const [showPopup, setShowPopup] = useState(false);

    // STATE TO CONTROL BANNER VISIBILITY
    const [showBanner, setShowBanner] = useState(false);

    // STATE TO TRACK IF USER JOINED
    const [joined, setJoined] = useState(false);

    // RUN ONCE WHEN PAGE LOADS
    useEffect(() => {
        const waitlistStatus = localStorage.getItem("waitlistStatus");

        if (waitlistStatus === "joined") {
            // USER ALREADY JOINED → HIDE BOTH
            setShowPopup(false);
            setShowBanner(false);
        } else if (waitlistStatus === "closed") {
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
        localStorage.setItem("waitlistStatus", "closed"); // TRACK THAT POPUP WAS CLOSED
        document.body.style.overflow = "auto";
    };

    // FUNCTION TO SUBMIT FORM TO SUPABASE
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");

        // VALIDATE INPUT
        if (!firstName.trim() || !lastName.trim() || !email.trim()) {
            setMessage("Please fill out all fields.");
            return;
        }

        setLoading(true);

        // CHECK IF EMAIL ALREADY EXISTS
        const { data: existing, error: checkError } = await supabase
            .from("waitlist")
            .select("id")
            .eq("email", email)
            .single();

        if (checkError && checkError.code !== "PGRST116") {
            setMessage("Error checking email. Please try again.");
            setLoading(false);
            return;
        }

        if (existing) {
            setMessage("This email is already signed up.");
            setLoading(false);
            return;
        }

        // INSERT NEW USER
        const { error } = await supabase.from("waitlist").insert([
            {
                first_name: firstName,
                last_name: lastName,
                email: email,
            },
        ]);

        setLoading(false);

        if (error) {
            setMessage("Error joining waitlist. Please try again.");
        } else {
            setJoined(true);
            setMessage("🎉 Successfully joined the waitlist!");

            // MARK AS JOINED SO BANNER NEVER SHOWS AGAIN
            localStorage.setItem("waitlistStatus", "joined");

            // CLOSE POPUP AFTER SUCCESS
            setTimeout(() => {
                setShowPopup(false);
                setShowBanner(false);
                document.body.style.overflow = "auto";
            }, 1500);
        }
    };

    return (
        <>
            {/* TOP BANNER */}
            {showBanner && (
                <button
                    className="fixed top-24 w-full bg-red-500 text-white text-center py-2 z-40 cursor-pointer"
                    onClick={() => {
                        setShowPopup(true);
                        document.body.style.overflow = "hidden"; // LOCK SCROLLING
                    }}
                >
                    🎄 Join our special Christmas waitlist today!
                </button>
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
                            className="rounded-lg p-6 w-[90%] max-w-md relative"
                            style={{ backgroundColor: "#f0e7de" }}
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

                            {!joined ? (
                                <>
                                    <h1 className="text-xl font-bold mb-2 text-center">
                                        Join Our Christmas Waitlist 🎄
                                    </h1>
                                    <p className="font mb-4 text-center">
                                        Rustic Christmas Studio Minis
                                    </p>
                                    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                                        {/* FIRST + LAST NAME ROW */}
                                        <div className="flex gap-2">
                                            <input
                                                type="text"
                                                placeholder="First Name"
                                                value={firstName}
                                                onChange={(e) => setFirstName(e.target.value)}
                                                className="border p-2 rounded w-1/2"
                                                required
                                            />
                                            <input
                                                type="text"
                                                placeholder="Last Name"
                                                value={lastName}
                                                onChange={(e) => setLastName(e.target.value)}
                                                className="border p-2 rounded w-1/2"
                                                required
                                            />
                                        </div>

                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="border p-2 rounded"
                                            required
                                        />
                                        <button
                                            type="submit"
                                            disabled={loading}
                                            style={{ backgroundColor: "#aa8f82" }}
                                            className="text-white py-2 rounded hover:opacity-90 cursor-pointer"
                                        >
                                            {loading ? "Joining..." : "Join Waitlist"}
                                        </button>
                                        {message && <p className="text-red-600 text-sm">{message}</p>}
                                    </form>
                                </>
                            ) : (
                                <div className="text-center">
                                    <h1 className="text-xl font-bold mb-2">You&apos;re on the waitlist! 🎉</h1>
                                    <p>We&apos;ll keep you updated with the latest news.</p>
                                </div>
                            )}
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
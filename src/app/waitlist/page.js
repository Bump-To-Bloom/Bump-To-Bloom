"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabaseClient";

export default function WaitlistAdminPage() {
    // PASSWORD PROTECTION STATE
    const [authorized, setAuthorized] = useState(false);
    const [enteredPassword, setEnteredPassword] = useState("");

    // WAITLIST STATE
    const [waitlist, setWaitlist] = useState([]);
    const [loading, setLoading] = useState(true);
    const [totalCount, setTotalCount] = useState(0);
    const [page, setPage] = useState(1);

    const ITEMS_PER_PAGE = 1;
    const correctPassword = process.env.NEXT_PUBLIC_ADMIN_PASS;

    // CHECK LOCAL STORAGE FOR SAVED LOGIN
    useEffect(() => {
        const savedAuth = localStorage.getItem("waitlistAuth");
        if (savedAuth === "true") {
            setAuthorized(true);
        }
    }, []);

    // FETCH WAITLIST DATA
    const fetchWaitlist = async (pageNumber = 1) => {
        setLoading(true);
        const start = (pageNumber - 1) * ITEMS_PER_PAGE;
        const end = start + ITEMS_PER_PAGE - 1;

        const { data, error, count } = await supabase
            .from("waitlist")
            .select("id, first_name, last_name, email", { count: "exact" })
            .order("last_name", { ascending: true }) // SORT BY LAST NAME ALPHABETICALLY
            .range(start, end);

        if (error) {
            console.error("Error fetching waitlist:", error.message);
        } else {
            setWaitlist(data);
            setTotalCount(count);
        }
        setLoading(false);
    };

    useEffect(() => {
        if (authorized) {
            fetchWaitlist(page);
        }
    }, [authorized, page]);

    const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

    // HANDLE PASSWORD SUBMIT
    const handlePasswordSubmit = (e) => {
        e.preventDefault();
        if (enteredPassword === correctPassword) {
            setAuthorized(true);
            localStorage.setItem("waitlistAuth", "true");
        } else {
            alert("Incorrect password");
        }
    };

    // LOGOUT
    const handleLogout = () => {
        localStorage.removeItem("waitlistAuth");
        setAuthorized(false);
        setEnteredPassword("");
    };

    // SHOW PASSWORD GATE
    if (!authorized) {
        return (
            <div className="flex flex-col items-center py-15 min-h-screen px-4">
                <form
                    onSubmit={handlePasswordSubmit}
                    className="flex flex-col gap-4 w-full max-w-sm text-center"
                >
                    <h1 className="text-2xl sm:text-3xl font-bold">
                        Admin Login
                    </h1>
                    <input
                        type="password"
                        placeholder="Enter password"
                        value={enteredPassword}
                        onChange={(e) => setEnteredPassword(e.target.value)}
                        className="border border-gray-400 p-3 rounded text-lg w-full"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-blue-600 text-white py-3 rounded hover:bg-blue-700 cursor-pointer text-lg"
                    >
                        Login
                    </button>
                </form>
            </div>
        );
    }

    // MAIN ADMIN VIEW
    return (
        <div className="min-h-screen p-6">
            <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-6">
                {/* HEADER */}
                <div className="flex justify-between items-center mb-4">
                    <h1 className="text-2xl font-bold">Waitlist Users</h1>
                    <div className="flex items-center gap-6">
                        <p className="text-lg font-semibold">
                            Total Joined:{" "}
                            <span className="text-blue-600">{totalCount}</span>
                        </p>
                        <button
                            onClick={handleLogout}
                            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 cursor-pointer"
                        >
                            Logout
                        </button>
                    </div>
                </div>

                {/* WAITLIST TABLE */}
                {loading ? (
                    <p className="text-center py-10">Loading...</p>
                ) : waitlist.length === 0 ? (
                    <p className="text-center py-10">No waitlist entries yet.</p>
                ) : (
                    <div className="overflow-y-auto max-h-[400px] border rounded-lg">
                        <table className="w-full border-collapse">
                            <thead>
                                <tr className="bg-gray-200">
                                    <th className="p-3 text-left">First Name</th>
                                    <th className="p-3 text-left">Last Name</th>
                                    <th className="p-3 text-left">Email</th>
                                </tr>
                            </thead>
                            <tbody>
                                {waitlist.map((user) => (
                                    <tr key={user.id} className="border-b hover:bg-gray-50">
                                        <td className="p-3">{user.first_name}</td>
                                        <td className="p-3">{user.last_name}</td>
                                        <td className="p-3">{user.email}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

                {/* PAGINATION */}
                {totalPages > 1 && (
                    <div className="flex justify-between items-center mt-4">
                        <button
                            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
                            disabled={page === 1}
                            className={`px-4 py-2 rounded cursor-pointer ${
                                page === 1
                                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    : "bg-blue-600 text-white hover:bg-blue-700"
                            }`}
                        >
                            Previous
                        </button>

                        <p>
                            Page <span className="font-semibold">{page}</span> of{" "}
                            <span className="font-semibold">{totalPages || 1}</span>
                        </p>

                        <button
                            onClick={() => setPage((prev) => (page < totalPages ? prev + 1 : prev))}
                            disabled={page === totalPages}
                            className={`px-4 py-2 rounded cursor-pointer ${
                                page === totalPages
                                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                    : "bg-blue-600 text-white hover:bg-blue-700"
                            }`}
                        >
                            Next
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
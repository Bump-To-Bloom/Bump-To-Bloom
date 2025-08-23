'use client'
import Link from "next/link";

export default function TermsAndConditions() {
    return (
        <main className="max-w-4xl mx-auto px-6 py-16 text-gray-800 space-y-10 font-sans">
            <header className="text-center space-y-2">
                <h1 className="text-4xl font-bold tracking-tight font-sans">Terms & Conditions</h1>
                <p className="text-sm text-gray-500">Effective Date: 21 August 2025</p>
                <p className="text-sm text-gray-500">Business Name: Bump to Bloom Photography</p>
                <p className="text-sm text-gray-500">ABN: 265 655 159 78</p>
            </header>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">1. Booking & Retainer</h2>
                <p>A $50 non-refundable retainer is required at the time of booking to secure your session date and time. This amount will be credited toward the total cost of your session.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">2. Rescheduling & Cancellation</h2>
                <p>Clients may reschedule their session with at least 24 hours&apos; notice. Retainers are non-refundable in all cases, including cancellation.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">3. Payment</h2>
                <p>Full payment is due on the day of the session. Late payments may incur additional fees. Payment methods accepted will be provided upon confirmation of your booking.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">4. Image Delivery</h2>
                <p>Edited images will be delivered via a private online gallery within 1–2 weeks after your session. No printed products are included. You will receive high-resolution digital files.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">5. Client Image Usage</h2>
                <p>Clients may share the delivered images online for personal use. However, altering, editing, or applying filters to the images is strictly prohibited. Commercial use of the images is not permitted.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">6. Photographer Usage Rights</h2>
                <p>With your written consent, Bump to Bloom Photography may use your session images on our website, social media, or promotional materials. You may opt out of this at any time.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">7. Liability</h2>
                <p>We are not liable for circumstances beyond our control, including but not limited to equipment failure, illness, acts of nature, or unexpected disruptions. In such cases, sessions may be rescheduled.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">8. Session Locations</h2>
                <p>Sessions may be held at our private home studio in Lawnton or at an agreed upon outdoor location. Travel fees may apply for locations outside our standard coverage area.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">9. Image Backup</h2>
                <p>Final images will be stored securely for up to 1 month after delivery. We recommend that clients download and back up all files promptly, as we cannot guarantee availability beyond this period.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">10. Model Release</h2>
                <p>A model release is your written permission for Bump to Bloom Photography to use your photos publicly (e.g., website or social media). This is only granted if you explicitly agree. You may revoke your consent at any time.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">11. Agreement</h2>
                <p>By booking a session with Bump to Bloom Photography, you acknowledge that you have read, understood, and agreed to these Terms & Conditions.</p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold">12. Contact</h2>
                <p>
                    <strong>Ella - Bump to Bloom Photography</strong><br />
                    📧 <a href="mailto:bumptobloomphotography@gmail.com" className="text-blue-600 underline">bumptobloomphotography@gmail.com</a><br />
                    📍 6 Firefly Crescent, Lawnton, QLD 4501
                </p>
            </section>
        </main>
    );
}

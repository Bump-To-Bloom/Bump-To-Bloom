import { Great_Vibes, Playfair_Display, Lato, Allura } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import WaitlistPopup from "./components/waitlist-popup";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-greatvibes" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-playfair" });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato" });

export const metadata = {
  title: "Bump to Bloom Photography | Brisbane & Moreton Bay Maternity, Family & Couples Photographer",
  description: "Brisbane & Moreton Bay photographer | Maternity, Family, Couples & Smash Cake sessions. Natural light, timeless memories, creative storytelling.",
  keywords: ["Brisbane photographer", "Moreton Bay maternity photography", "Family photographer Brisbane", "Couples photoshoot Brisbane", "Smash Cake photography"],
  alternates: {
    canonical: "https://bumptobloomphotography.com.au",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Bump to Bloom Photography | Brisbane & Moreton Bay Photographer",
    description: "Maternity, Family, Couples & Smash Cake sessions across Brisbane & Moreton Bay.",
    url: "https://bumptobloomphotography.com.au",
    siteName: "Bump To Bloom Photography",
    images: [
      {
        url: "https://bumptobloomphotography.com.au/logo-notext.webp",
        width: 1200,
        height: 630,
        alt: "Bump To Bloom Photography",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bump to Bloom Photography",
    description: "Photography sessions in Brisbane & Moreton Bay | Maternity | Couples | Family | Smash Cake",
    images: ["https://bumptobloomphotography.com.au/logo-notext.webp"],
  },
  themeColor: "#f0e7de",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "@subtype": "Photographer",
              "name": "Bump To Bloom Photography",
              "image": "https://bumptobloomphotography.com.au/logo-notext.webp",
              "logo": "https://bumptobloomphotography.com.au/logo-notext.webp",
              "url": "https://bumptobloomphotography.com.au",
              "telephone": "+61415353198",
              "email": "bumptobloomphotography@gmail.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "6 Firefly Crescent",
                "addressLocality": "Lawnton",
                "addressRegion": "QLD",
                "postalCode": "4501",
                "addressCountry": "AU"
              },
              "priceRange": "$$",
              "areaServed": [
                { "@type": "Place", "name": "Brisbane" },
                { "@type": "Place", "name": "Moreton Bay" }
              ]
            }),
          }}
        />
      </head>
      <body className={`${lato.variable} ${playfair.variable} ${greatVibes.variable}`}>
        <WaitlistPopup />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
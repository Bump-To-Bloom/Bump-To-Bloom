import { Great_Vibes, Playfair_Display, Lato, Allura } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-greatvibes" });
const playfair = Playfair_Display({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-playfair" });
const lato = Lato({ subsets: ["latin"], weight: ["400", "700"], variable: "--font-lato" });

export const metadata = {
  title: "Bump to Bloom Photography",
  description: "Photography sessions in Brisbane & Moreton Bay | Maternity | Couples | Family | Smash Cake",
  icons: {
    icon: "/favicon.ico", 
    },
  openGraph: {
    title: "Bump To Bloom Photography",
    description: "Photography sessions in Brisbane & Moreton Bay | Maternity | Couples | Family | Smash Cake",
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
      title: "Bump To Bloom Photography",
      description: "Photography sessions in Brisbane & Moreton Bay | Maternity | Couples | Family | Smash Cake",
      images: ["https://bumptobloomphotography.com.au/logo-notext.webp"],
  },
  themeColor: "#f0e7de",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head></head>
      <body className={`${lato.variable} ${playfair.variable} ${greatVibes.variable}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

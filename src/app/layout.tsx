import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Vegan Travel China | Conscious Journeys & Plant-Based Discovery",
  description: "Experience the soul of China through slow, mindful, and plant-based travel. Conscious journeys for the modern discoverer.",
  keywords: ["Vegan travel China", "Plant-based tours China", "Mindful travel China", "Vegan tourism China", "China cultural tours"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${playfair.variable} ${inter.variable} font-sans bg-white text-gray-900 antialiased`}>
        {children}
      </body>
    </html>
  );
}

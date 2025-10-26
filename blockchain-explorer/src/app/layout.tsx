import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: "AMMOcoin Explorer - Blockchain Explorer for AMMOcoin v1.1.0",
  description: "Explore the AMMOcoin blockchain with our modern, fast explorer. Search blocks, transactions, addresses, and monitor network statistics in real-time.",
  keywords: ["AMMOcoin", "blockchain", "explorer", "cryptocurrency", "AMMO", "privacy", "Sapling", "masternode"],
  authors: [{ name: "AMMOcoin Development Team" }],
  openGraph: {
    title: "AMMOcoin Explorer",
    description: "Modern blockchain explorer for AMMOcoin v1.1.0",
    type: "website",
    locale: "en_US",
    siteName: "AMMOcoin Explorer",
  },
  twitter: {
    card: "summary_large_image",
    title: "AMMOcoin Explorer",
    description: "Modern blockchain explorer for AMMOcoin v1.1.0",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="selection-ammocoin">
      <head>
        {/* Google Fonts are loaded via CSS imports in globals.css */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#32cd32" />
      </head>
      <body className="min-h-screen flex flex-col bg-ammocoin-black text-ammocoin-white">
        {/* Fixed Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-1 pt-20">
          <div className="container mx-auto px-4 py-8">
            {children}
          </div>
        </main>

        {/* Footer */}
        <Footer />

        {/* Background elements for visual interest */}
        <div className="fixed inset-0 pointer-events-none -z-10">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-ammocoin-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-ammocoin-primary/3 rounded-full blur-3xl"></div>
        </div>
      </body>
    </html>
  );
}
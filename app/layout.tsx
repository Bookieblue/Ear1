import { AOSInit } from './aos'
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from '@/components/Footer';


export const metadata: Metadata = {
  title: "Ear1 App",
  description: "Chat with Influencers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <AOSInit />
      <body>
        <Navbar />
        <main className="relative 
        overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

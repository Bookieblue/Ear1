import { AOSInit } from './aos'
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";


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
        <div className="max-container padding-container">
          <Image 
             src='./hero-bg.svg'
             alt='david'
             width={700}
             height={800}
          className="absolute hidden lg:right-0 lg:top-0 lg:block w-[50%] 4xl:w-[30%] 4xl:mr-96 "
          />
        </div>
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

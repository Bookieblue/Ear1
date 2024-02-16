'use client'
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [header, setHeader] = useState(false);
  const showNav = () =>{
         setMenuOpen(!menuOpen);

  }
//   const scrollHeader = () =>{
//     if (window.scrollY >= 20 && window.innerWidth >= 768){
//       setHeader(true);
//     } else {
//       setHeader(false);
//     }

// }

// useEffect(()=>{
//    window.addEventListener('scroll', scrollHeader)
//    return () =>{
//     window.addEventListener('scroll', scrollHeader)
//    }
// },[])
  return (
    <nav className="flexBetween bg-white w-full z-30 py-3 fixed shadow-sm top-0">

    <div className="max-container padding-container flexBetween w-full">
    <Link href="/">
        <Image src="/logo.svg" alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="medium-18 text-black flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Ask for invite"
          variant="btn_black"
        />
      </div>
      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        onClick={showNav}
        className="inline-block cursor-pointer lg:hidden"
      ></Image>
      <div className={menuOpen ? "fixed left-0 top-0 w-[65%] h-screen bg-white border-2 p-5 ease-in duration-500"
      : "fixed left-[-100%] top-0 p-10 ease-in duration-500"}>
        <div className="flex w-full justify-end items-center">
             <div onClick={showNav} className="cursor-pointer">
                <h1 className="bold-32 mb-5">&times;</h1>
             </div>
        </div>
        <ul className="">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            onClick={() => setMenuOpen(false)}
            key={link.key}
            className="medium-16 text-black flexStart cursor-pointer py-3 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="mt-5">
        <Button
          type="button"
          title="Ask for invite"
          variant="btn_black"
        />
      </div>
      </div>
    </div>
     
    </nav>
  );
};

export default Navbar;

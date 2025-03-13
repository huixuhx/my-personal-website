"use client"
import React, { useState, useEffect } from "react";
import NavbarButton from "@/app/component/NavbarButton";
import Link from "next/link";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClass, setMenuClass] = useState("hidden");
  const toggleMenu = () => {
    if (menuOpen) {
      setMenuClass("animate-fadeSlideOut");

    } else {
      setMenuClass("animate-fadeSlideIn");
    }
    setMenuOpen(!menuOpen);
  };
  const routeMenu =()=>{
    setMenuClass("hidden");
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className="w-full flex items-center justify-between px-4 h-20 bg-white">
      {/* Left Side - Logo */}
      <div className="text-[22px] font-bold">Hui.Xu</div>

      <div className="flex items-center md:hidden">
        <NavbarButton toggleMenu={toggleMenu} menuOpen={menuOpen} />
      </div>
      {/* Center Menu - Only Visible on md+ */}
      <div className="hidden md:flex flex-1 justify-center">
        <ul className="flex gap-x-6">
        <li>
            <Link href="/">
              <p>Home</p>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <p>About Me</p>
            </Link>
          </li>
          <li>
            <Link href="/services">
              <p>Services</p>
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <p>Projects</p>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <p>Blog</p>
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Menu with Keyframe Animation */}
     <div
        className={`absolute w-full top-20 left-0 border-t border-gray-200 bg-white shadow-lg md:hidden z-50 
        ${menuClass}`}
      >
        <div className="space-y-1 px-4 pt-3 pb-4">
          <Link href="/" onClick={routeMenu}>
            <p className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-black">
            Home
            </p>
          </Link>
          <Link href="/about" onClick={routeMenu}>
            <p className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-black">
            About Me
            </p>
          </Link>
          <Link href="/services" onClick={routeMenu}>
            <p className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-black">
            Services
            </p>
          </Link>
          <Link href="/projects" onClick={routeMenu}>
            <p className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-black">
            Projects
            </p>
          </Link>
          <Link href="/blog" onClick={routeMenu}>
            <p className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-100 hover:text-black">
            Blog
            </p>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

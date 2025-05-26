"use client";
import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import Link from "next/link";

interface Props {}

const navItems = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Blog", href: "/blog" },
  { label: "Contact us", href: "/contact" },
];

const Navbar2: NextPage<Props> = ({}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        className={`z-50 transition-all text-sm duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 w-full bg-[#2E2E2E] px-[6vw] py-4 shadow-lg rounded-none"
            : "relative top-[30px] mt-6 bg-[#2E2E2E] w-[90%] rounded-l-4xl rounded-r-4xl px-[8vw] py-3 mx-auto"
        }`}
      >
        <div className="relative w-full flex items-center justify-center">
          {/* Left Logo */}
          <div className="absolute left-0 ">
            <img
              src="/nav-logo.png"
              alt="Logo"
              className="h-16 w-auto object-contain"
            />
          </div>

          {/* Center Nav Links */}
          <div className="flex gap-4">
            {navItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-medium transition duration-200 hover:text-orange-400 interactive cursor-none ${
                  index === 0 ? "text-orange-400" : "text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Button */}
          <div className="absolute right-0">
            <button className="bg-white text-black font-semibold py-2 px-5 rounded-4xl transition">
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar2;

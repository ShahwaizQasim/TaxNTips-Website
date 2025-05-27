"use client";
import React, { useState, useEffect } from "react";
import { NextPage } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface Props { }

const navItems = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Blog", href: "/blog" },
  { label: "Contact us", href: "/contact" },
];

const Navbar2: NextPage<Props> = ({ }) => {
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
        className={`z-50 transition-all text-sm duration-300 ${isScrolled
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
          <div className="flex items-center space-x-6 interactive">
            {navItems.map((item, index) => (
              <div
                key={item.href}
                className={`relative flex items-center group cursor-pointer ${item.label === 'Services' ? 'hoverable-dropdown' : ''
                  }`}
              >
                <Link
                  href={item.href}
                  className={`px-3 py-2 text-sm font-semibold transition-colors duration-200 whitespace-nowrap  ${index === 0 ? 'text-white' : 'text-white'
                    } group-hover:text-white`}
                >
                  {item.label}
                </Link>
                <span
                  className={`-translate-y-1 transform transition-opacity duration-200 ${item.label === 'About us' ? 'text-[#F65E47] opacity-100' : 'text-[#F65E47] opacity-0 group-hover:opacity-100'
                    }`}
                >
                  <div className="relative top-1 -left-2">
                    <ArrowUpRight size={18} />
                  </div>
                </span>
                {/* Dropdown for Services */}
                {item.label === 'Services' && (
                  <div className="absolute top-[100%] left-0 z-50 w-[260px] bg-[#2E2E2E] rounded-md shadow-lg
    opacity-0 translate-y-2 scale-95 pointer-events-none
    group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto
    transition-all duration-300 ease-out delay-150 py-4">
                    <ul className="flex flex-col text-white text-sm py-2">
                      <li>
                        <Link href="/service/business-tax" className="block px-4 py-2 hover:bg-[#3A3A3A] hover:translate-x-1 hover:underline hover:decoration-white decoration-2 underline-offset-[2px] transition-all duration-200">
                          Business Tax Preparation
                        </Link>
                      </li>
                      <li>
                        <Link href="/service/bookkeeping" className="block px-4 py-2 hover:bg-[#3A3A3A] hover:translate-x-1 hover:underline hover:decoration-white decoration-2 underline-offset-[2px] transition-all duration-200">
                          Bookkeeping Services
                        </Link>
                      </li>
                      <li>
                        <Link href="/service/tax-strategy" className="block px-4 py-2 hover:bg-[#3A3A3A] hover:translate-x-1 hover:underline hover:decoration-white decoration-2 underline-offset-[2px] transition-all duration-200">
                          Tax Strategy & Reduction Planning
                        </Link>
                      </li>
                      <li>
                        <Link href="/service/s-corp" className="block px-4 py-2 hover:bg-[#3A3A3A] hover:translate-x-1 hover:underline hover:decoration-white decoration-2 underline-offset-[2px] transition-all duration-200">
                          S-Corp Set-up
                        </Link>
                      </li>
                      <li>
                        <Link href="/service/llc" className="block px-4 py-2 hover:bg-[#3A3A3A] hover:translate-x-1 hover:underline hover:decoration-white decoration-2 underline-offset-[2px] transition-all duration-200">
                          Business & LLC Set-Up
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
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

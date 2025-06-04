"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, ChevronDown, Mail, Menu, X } from "lucide-react";

interface Props { }

const navItems = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about" },
  { label: "Services", href: "#" },
  { label: "Blog", href: "/blog" },
  { label: "Contact us", href: "/contact" },
];

const Navbar2: React.FC<Props> = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Scroll handler for sticky nav
  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
};
  return (
    <>
      <div
        className={`z-50 transition-all duration-300 text-sm ${isScrolled
          ? "fixed top-0 left-0 right-0 bg-[#2E2E2E] px-[6vw] py-4 shadow-lg"
          : "relative top-[30px] mt-6 bg-[#2E2E2E] w-[90%] rounded-l-4xl rounded-r-4xl px-[8vw] py-3 mx-auto"
          }`}
      >
        <div className="relative w-full flex items-center justify-between">
          {/* Left Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="/nav-logo.png"
                alt="Logo"
                className="h-16 w-auto object-contain cursor-pointer"
              />
            </Link>
          </div>

          {/* Hamburger Button for mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-white"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop Nav Links (centered) */}
          <nav className="hidden md:flex flex-1 justify-center space-x-6 interactive">
            {navItems.map((item) => (
              <div
                key={item.href}
                className={`relative flex items-center group cursor-pointer ${item.label === "Services" ? "hoverable-dropdown" : ""
                  }`}
              >
                <Link
                  href={item.href}
                  className="px-3 py-2 text-sm font-semibold transition-colors duration-200 whitespace-nowrap text-white group-hover:text-white"
                >
                  {item.label}
                </Link>

                <span
                  className={`-translate-y-1 transform transition-opacity duration-200 ${item.label === "About us"
                    ? "text-[#F65E47] opacity-100"
                    : "text-[#F65E47] opacity-0 group-hover:opacity-100"
                    }`}
                >
                  <div className="relative top-1 -left-2">
                    <ArrowUpRight size={18} />
                  </div>
                </span>

                {/* Dropdown for Services */}
                {item.label === "Services" && (
                  <div
                    className="absolute top-[100%] left-0 z-50 w-[260px] bg-[#2E2E2E] rounded-md shadow-lg
                    opacity-0 translate-y-2 scale-95 pointer-events-none
                    group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto
                    transition-all duration-300 ease-out delay-150 py-4"
                  >
                    <ul className="flex flex-col text-white text-sm py-2">
                      <li>
                        <Link
                          href="/service/business-tax"
                          className="block px-4 py-2 hover:bg-[#3A3A3A] hover:translate-x-1 hover:underline hover:decoration-white decoration-2 underline-offset-[2px] transition-all duration-200"
                        >
                          Business Tax Preparation
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/service/bookkeeping"
                          className="block px-4 py-2 hover:bg-[#3A3A3A] hover:translate-x-1 hover:underline hover:decoration-white decoration-2 underline-offset-[2px] transition-all duration-200"
                        >
                          Bookkeeping Services
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/service/tax-strategy"
                          className="block px-4 py-2 hover:bg-[#3A3A3A] hover:translate-x-1 hover:underline hover:decoration-white decoration-2 underline-offset-[2px] transition-all duration-200"
                        >
                          Tax Strategy & Reduction Planning
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/service/s-corp"
                          className="block px-4 py-2 hover:bg-[#3A3A3A] hover:translate-x-1 hover:underline hover:decoration-white decoration-2 underline-offset-[2px] transition-all duration-200"
                        >
                          S-Corp Set-up
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="/service/llc"
                          className="block px-4 py-2 hover:bg-[#3A3A3A] hover:translate-x-1 hover:underline hover:decoration-white decoration-2 underline-offset-[2px] transition-all duration-200"
                        >
                          Business & LLC Set-Up
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Button */}
          <div className="hidden md:block absolute right-0">
            <Link href={'/contact'}>  
            <button className="bg-white text-black font-semibold py-2 px-5 rounded-4xl transition hover:scale-105 cursor-pointer interactive">
              Get a Quote
            </button>
            </Link>
          </div>
        </div>

         {/* Mobile Navigation */}
         <div className={`md:hidden sticky top-0 inset-0 z-50 transition-all duration-300 ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                {/* Overlay for background dimming */}
                <div
                    className={`fixed inset-0 bg-[#2E2E2E] transition-opacity duration-300 ${
                        isMenuOpen ? 'opacity-50' : 'opacity-0'
                    }`}
                    onClick={toggleMenu}
                ></div>

                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-[#2E2E2E] shadow-lg transform transition-transform duration-300 ease-in-out ${
                        isMenuOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
                >
                    <div className="flex flex-col h-full">
                        {/* Mobile Logo and Close Button */}
                        <div className="flex items-center justify-between p-4 border-b border-gray-700">
                            <Link href="/" onClick={() => setIsMenuOpen(false)}>
                                <img
                                    src="/nav-logo.png"
                                    alt="logo"
                                    className="h-16 w-auto object-contain"
                                />
                            </Link>
                            <button
                                onClick={toggleMenu}
                                className="p-2 rounded-md text-white hover:text-orange-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Mobile Menu Items */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-2">
                            {navItems.map((item, index) => (
                                <div key={item.href} className="relative">
                                    {item.label === 'Services' ? (
                                        <div>
                                            <button
                                                onClick={toggleServices}
                                                className={`flex items-center justify-between w-full px-4 py-3 text-base font-medium transition-colors duration-200 hover:text-orange-400 hover:bg-purple-700 rounded-md ${
                                                    index === 0 ? 'text-orange-400' : 'text-white'
                                                }`}
                                            >
                                                {item.label}
                                                <ChevronDown
                                                    className={`h-5 w-5 transition-transform duration-200 ${
                                                        isServicesOpen ? 'rotate-180' : ''
                                                    }`}
                                                />
                                            </button>
                                            {isServicesOpen && (
                                                <div className="pl-4 mt-2 space-y-2">
                                                    <Link
                                                        href="/service/business-tax"
                                                        className="block px-4 py-2 text-sm text-white hover:text-orange-400 hover:bg-purple-700 rounded-md"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        Business Tax Preparation
                                                    </Link>
                                                    <Link
                                                        href="/service/bookkeeping"
                                                        className="block px-4 py-2 text-sm text-white hover:text-orange-400 hover:bg-purple-700 rounded-md"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        Bookkeeping Services
                                                    </Link>
                                                    <Link
                                                        href="/service/tax-strategy"
                                                        className="block px-4 py-2 text-sm text-white hover:text-orange-400 hover:bg-purple-700 rounded-md"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        Tax Strategy & Reduction Planning
                                                    </Link>
                                                    <Link
                                                        href="/service/s-corp"
                                                        className="block px-4 py-2 text-sm text-white hover:text-orange-400 hover:bg-purple-700 rounded-md"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        S-Corp Set-up
                                                    </Link>
                                                    <Link
                                                        href="/service/llc"
                                                        className="block px-4 py-2 text-sm text-white hover:text-orange-400 hover:bg-purple-700 rounded-md"
                                                        onClick={() => setIsMenuOpen(false)}
                                                    >
                                                        Business & LLC Set-Up
                                                    </Link>
                                                </div>
                                            )}
                                        </div>
                                    ) : (
                                        <Link
                                            href={item.href}
                                            className={`block px-4 py-3 text-base font-medium transition-colors duration-200 hover:text-orange-400 rounded-md ${
                                                index === 0 ? 'text-orange-400' : 'text-white'
                                            }`}
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.label}
                                        </Link>
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Email Contact in Mobile */}
                        <div className="p-4 border-t border-gray-700">
                            <div className="flex items-center space-x-3">
                                <Mail className="h-5 w-5 text-orange-400 flex-shrink-0" />
                                <div className="text-sm">
                                    <p className="text-gray-300 text-xs mb-1">Email Us:</p>
                                    <p className="text-white text-sm">info@taxntips.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </>
  );
};

export default Navbar2;

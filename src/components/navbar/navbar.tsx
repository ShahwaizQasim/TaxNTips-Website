'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail, Menu, X, ChevronDown } from 'lucide-react';
import './navbar.css';

interface NavItem {
    label: string;
    href: string;
}

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            setIsScrolled(scrollTop > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems: NavItem[] = [
        { label: 'Home', href: '/' },
        { label: 'About us', href: '/about' },
        { label: 'Services', href: '#' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact us', href: '/contact' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const toggleServices = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    return (
        <div className={`transition-all duration-300 ${isScrolled ? 'sticky top-0 left-0 right-0 z-50 w-full bg-[#220210]' : 'absolute w-full z-50'}`}>
            <div className={`flex justify-center w-full ${isScrolled ? 'px-0' : 'py-0 px-4'}`}>
                <div className={`transition-all duration-300 w-full ${isScrolled ? '' : 'max-w-7xl'}`}>
                    <nav className={`bg-[#220210] text-white shadow-lg transition-all duration-300 ${isScrolled ? 'rounded-none px-6' : 'rounded-l-2xl rounded-r-2xl px-6 py-4'}`}>
                        <div className="flex justify-between items-center min-h-[80px]">
                            {/* Logo */}
                            <div className="flex max-w-1/2 items-center flex-shrink-0 relative left-4">
                                <Link href="/" className="flex items-center">
                                    <img
                                        src="/nav-logo.png"
                                        alt="logo"
                                        className="h-20 w-auto object-contain opacity-100"
                                    />
                                </Link>
                            </div>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex items-center justify-center flex-grow">
                                <div className="flex items-center space-x-4">
                                    {navItems.map((item, index) => (
                                        <div key={item.href} className={`relative flex items-center group interactive ${item.label === 'Services' ? 'hoverable-dropdown' : ''}`}>
                                            <Link
                                                href={item.href}
                                                className={`px-3 py-2 text-sm cursor-none font-semibold interactive cursor-pointer transition-colors duration-200 group-hover:text-[#F65E47] whitespace-nowrap ${index === 0 ? 'text-[#F65E47]' : 'text-white'}`}
                                            >
                                                {item.label}
                                            </Link>
                                            {index <= navItems.length - 1 && (
                                                <span className={`group-hover:text-[#F65E47] interactive text-3xl pt-2 ${index === 0 ? 'text-[#F65E47]' : 'text-white'}`}>*</span>
                                            )}
                                            {/* Dropdown for Services */}
                                            {item.label === 'Services' && (
                                                <div className="absolute top-[100%] left-0 z-50 w-[260px] bg-[#220210] rounded-md shadow-lg opacity-0 translate-y-2 scale-95 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:scale-100 group-hover:pointer-events-auto transition-all duration-300 ease-out delay-150 py-4">
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
                            </div>

                            {/* Email Contact */}
                            <div className="hidden lg:flex gap-2 items-center space-x-3 flex-shrink-0 relative right-6">
                                <div className="flex justify-center items-center h-10 w-10 bg-white bg-opacity-10 rounded-full">
                                    <Mail className="h-5 w-5 text-black" />
                                </div>
                                <div className="text-sm">
                                    <p className="text-white text-lg font-bold leading-tight mb-1">Email Us:</p>
                                    <p className="text-white text-base leading-tight">info@taxntips.com</p>
                                </div>
                            </div>

                            {/* Mobile menu button */}
                            <div className="md:hidden flex-shrink-0">
                                <button
                                    onClick={toggleMenu}
                                    className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-orange-400 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-colors duration-200"
                                >
                                    {isMenuOpen ? (
                                        <X className="block h-6 w-6" />
                                    ) : (
                                        <Menu className="block h-6 w-6" />
                                    )}
                                </button>
                            </div>
                        </div>
                    </nav>
                    {/* Orange accent line - Hidden on mobile */}
                    <center>
                        <div className={`h-4 bg-gradient-to-r from-orange-300 to-orange-500 w-4/5 transition-all duration-300 ${isScrolled ? 'scroll-none' : 'rounded-b-2xl'} md:block hidden`}></div>
                    </center>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden sticky top-0 inset-0 z-50 transition-all duration-300 ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
                {/* Overlay for background dimming */}
                <div
                    className={`fixed inset-0 bg-black transition-opacity duration-300 ${
                        isMenuOpen ? 'opacity-50' : 'opacity-0'
                    }`}
                    onClick={toggleMenu}
                ></div>

                <div
                    className={`fixed top-0 left-0 h-full w-64 bg-black shadow-lg transform transition-transform duration-300 ease-in-out ${
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
    );
};

export default Navbar;
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail, Menu, X } from 'lucide-react';
import './navbar.css';

interface NavItem {
    label: string;
    href: string;
}

const Navbar: React.FC = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
        { label: 'Services', href: '/service' },
        { label: 'Blog', href: '/blog' },
        { label: 'Contact us', href: '/contact' },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className={`transition-all duration-300 ${isScrolled ? 'sticky top-0 left-0 right-0 z-50 w-full bg-[#220210]' : 'relative w-full z-50'}`}>
            <div className={`flex justify-center w-full ${isScrolled ? 'px-0' : 'py-0 px-4'}`}>
                <div className={`transition-all duration-300 w-full ${isScrolled ? '' : 'max-w-7xl'}`}>

                    <nav className={`${isScrolled ? 'bg-transparent' : 'bg-[#220210]'} text-white shadow-lg transition-all duration-300 ${isScrolled ? 'rounded-none px-6' : 'rounded-l-2xl rounded-r-2xl px-6 py-4'} overflow-hidden`}>
                        <div className="flex justify-between items-center min-h-[80px]">
                            {/* Logo */}
                            <div className="flex max-w-1/2 items-center flex-shrink-0 relative left-4 ">
                                <Link href="/" className="flex items-center">
                                    <img
                                        src="/nav-logo.png"
                                        alt="logo"
                                        className="h-20 w-auto object-contain"
                                    />
                                </Link>
                            </div>

                            {/* Desktop Navigation */}
                            <div className="hidden md:flex items-center justify-center flex-grow">
                                <div className="flex items-center space-x-4">
                                    {navItems.map((item, index) => (
                                        <div key={item.href} className="flex items-center group">
                                            <Link
                                                href={item.href}
                                                className={`px-3 py-2 text-sm font-semibold transition-colors  duration-200 group-hover:text-[#F65E47] whitespace-nowrap ${index === 0 ? 'text-[#F65E47]' : 'text-white'
                                                    } interactive`}
                                            >
                                                {item.label}
                                            </Link>
                                            {index <= navItems.length - 1 && (
                                                <span className={`group-hover:text-[#F65E47] text-3xl pt-2 ${index === 0 ? 'text-[#F65E47]' : 'text-white'
                                                    }`}>*</span>
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
                    {/* Orange accent line */}
                    <center>
                        <div className={`h-4 bg-gradient-to-r  from-orange-300 to-orange-500 w-4/5 transition-all duration-300  ${isScrolled ? 'scroll-none' : 'rounded-b-2xl'
                            }`}></div>
                    </center>

                    {/* Mobile Navigation */}
                    {isMenuOpen && (
                        <div className="md:hidden mt-2">
                            <div className={`px-4 pt-4 pb-4 space-y-2 bg-purple-800 transition-all duration-300 ${isScrolled ? 'rounded-none' : 'rounded-l-2xl rounded-r-2xl'
                                }`}>
                                {navItems.map((item, index) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className={`block px-4 py-3 text-base font-medium transition-colors duration-200 hover:text-orange-400 hover:bg-purple-700 rounded-md ${index === 0 ? 'text-orange-400' : 'text-white'
                                            }`}
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        {item.label}
                                    </Link>
                                ))}
                                <div className="px-4 py-3 border-t border-purple-600 mt-4">
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
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
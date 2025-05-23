'use client'
import React, { useState, useEffect } from 'react';
import { NextPage } from 'next'
import Link from 'next/link'

import { Facebook, Linkedin, Instagram } from 'lucide-react'


interface Props {}

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact us', href: '/contact' },
]

const About: NextPage<Props> = ({}) => {

   const [isMenuOpen, setIsMenuOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 100);
  };
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);


     const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


  return (
    <>
      {/* Banner Section */}
      <div className="relative">
        {/* Background Image */}
        <img
          src="/flip5.jpg"
          alt="Flip Phone"
          className="w-full h-[30vw] object-fill brightness-[0.5]"
        />

        {/* Overlay Content */}
        <div className="about-banner-content absolute inset-0 flex flex-col justify-start text-white p-6">
          {/* Top contact + icons */}
          <div className="flex justify-between py-[1vw] px-[10vw]">
            <div className="flex">
              <h1 className="mr-4">
                PO Box 11224 Spring, TX, United States, Texas 77379
              </h1>
              <h1>+786 688 7861</h1>
            </div>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={22} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={22} />
              </a>
            </div>
          </div>

          {/* Navbar inside banner */}
<div
  className={`z-50 transition-all duration-300 ${
    isScrolled
      ? 'fixed top-0 left-0 w-full bg-[#2E2E2E] px-[6vw] py-4 shadow-lg rounded-none'
      : 'relative mt-6 bg-[#2E2E2E] w-[90%] rounded-l-4xl rounded-r-4xl px-[8vw] py-5 mx-auto'
  }`}
>
  <div className="relative w-full flex items-center justify-center">
    {/* Left Logo */}
    <div className="absolute left-0">
      <img
        src="/nav-logo.png"
        alt="Logo"
        className="h-12 w-auto object-contain"
      />
    </div>

    {/* Center Nav Links */}
    <div className="flex gap-6">
      {navItems.map((item, index) => (
        <Link
          key={item.href}
          href={item.href}
          className={`px-4 py-2 text-base font-medium transition duration-200 hover:text-orange-400 ${
            index === 0 ? 'text-orange-400' : 'text-white'
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

          {/* Orange accent line */}
        
        </div>
        <div className="h-2 bg-gradient-to-r from-orange-300 to-orange-500 w-[100%] rounded-b-2xl mx-auto " />
      </div>
     <div>
      <div>
        <img src='/about-img1_360.jpg'/>
        <img src='/about-tag_720.png'/>
        <img src='/blog.jpg'/>
        <img src='/curve-icon_360.png'/>
        <img src='/about-img2_480.jpg'/>
      </div>

      <div>
        <h1>fgrthgt</h1>
      </div>


     </div>
     
      
        
    </>
  )
}

export default About
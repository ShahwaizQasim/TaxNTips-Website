'use client'

import Image from 'next/image'
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function ChooseTax() {

  const headingText = "Why Choose Tax N Tips as Your Trusted Partner?";
  const words = headingText.split(" ");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const wordVariants = {
    hidden: { opacity: 0, x: 40 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: 'easeOut' },
    },
  };

  return (
    <section
      className="w-full border-2 border-red-500 pb-220 px-4 sm:px-8 md:px-16 lg:px-24 lg:py-32 lg:pb-46 pb-40 flex flex-col-reverse md:flex-row items-center justify-between relative overflow-hidden py-20 md:py-32"
      style={{
        backgroundImage: 'url("/h2-bg-section4.jpg")',
        backgroundSize: 'contain',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Left Side - Image & Charts */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-start mb-10 md:mb-0" style={{ aspectRatio: '9 / 8' }}>
        <Image
          src="/h2-banner-8.png"
          alt="Thumbs up guy"
          fill
          style={{ objectFit: 'contain' }}
          className="relative z-10"
          priority
          sizes="(max-width: 768px) 100vw, 450px"
        />

        {/* Chart and Graph Mockups */}
        <div className="hidden md:block absolute left-24 top-[55%] z-20 bg-white shadow-md rounded-md p-2">
          <Image src="/h1-shape-3.png" alt="Bar chart" width={120} height={40} />
        </div>
        <div className="hidden md:block absolute right-0 bottom-[15%] z-20 shadow-md rounded-md p-2">
          <Image src="/line-chart.png" alt="Line chart" width={200} height={160} />
        </div>
        <div className="hidden md:block absolute right-6 top-[15%] z-20">
          <Image src="/h2-section-text1.png" alt="Text graphic" width={200} height={160} />
        </div>
      </div>


      {/* Right Side - Text Content */}
      <div className="w-full md:w-1/2 text-center md:text-left px-2 sm:px-6 md:px-0 relative left-10 bottom-14">
        <p className="text-orange-500 font-semibold text-sm mb-2 italic">
          ✨ Why you choose Us?
        </p>
        <motion.h1
          className="text-2xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 flex flex-wrap justify-center md:justify-start lg:pr-48 pr-12" 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              className="mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <p className="text-gray-500 mb-6 max-w-xl mx-auto md:mx-0 text-base sm:text-lg leading-relaxed lg:pr-36 pr-12">
          At TaxNTips, we are dedicated to helping individuals and businesses achieve financial success through expert tax strategies, business consulting, and financial planning solutions. Whether you're a startup looking for business formation guidance or an established company aiming to optimize tax savings and streamline operations, we provide tailored solutions, expert advice, and ongoing support to drive your success.
        </p>
        <ul className="text-left max-w-xl mx-auto md:mx-0 space-y-3 mb-6">
          {['Strategic Tax Planning', 'Reliable Expertise', 'Business Growth Support'].map((item, idx) => (
            <li key={idx} className="flex items-center gap-3 font-bold">
              <img src="/icon-check1.png" alt="Check icon" className="w-5 h-5 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <Link href={'/about'}>
          <button className="group cursor-none bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 cursor-pointer rounded-full font-semibold hover:scale-105 transition-transform duration-200 flex items-center gap-3 interactive">
          <div className='bg-white rounded-full p-1'>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-black duration-200" />
                </div>
                Learn More
              </button>
        </Link>
      </div>
    </section>
  );
}

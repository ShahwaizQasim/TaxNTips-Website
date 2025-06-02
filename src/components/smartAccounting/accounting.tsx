'use client'
import React, { useState } from "react";
import Image from "next/image";
import { motion } from 'framer-motion';

const features = [
    {
        id: 1,
        text: "Let Us Handle Your Accounting, So You Can Focus on Growth",
        icon: "/rotate1.jpg"
    }, {
        id: 2,
        text: "Slash Your Tax Bill with Proactive Strategies",
        icon: "/rotate2.jpg"
    }, {
        id: 3,
        text: "Stay Audit-Proof & Error-Free",
        icon: "/rotate3.jpg"
    }, {
        id: 4,
        text: "Comprehensive Tax Filing for You & Your Business",
        icon: "/rotate4.webp"
        }, {
            id: 5,
            text: "Always Stay on Top of Your Bookkeeping",
            icon: "/rotate5.jpg"
        },
        {
            id: 6,
            text: "Tax Compliance & Peace of Mind",
            icon: "/rotate6.jpg"
        }
];

const AccountingFeatures: React.FC = () => {
    const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

    const headingText = [
        "Smart Accounting, Lower Taxes and",
        "Financial Peace of Mind"
      ];
     
      const wordVariants = {
        hidden: { opacity: 0, x: 40 },
        visible: {
          opacity: 1,
          x: 0,
          transition: {
            duration: 0.4,
          },
        },
      };
    
      const containerVariants = {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: 0.1,
          },
        },
      };
    

    return (
        <section className="bg-[#111] min-h-screen flex flex-col items-center justify-center py-16 px-4">
            <div className="text-orange-400 font-semibold text-lg mb-4 text-center">✨ What We Do</div>
            <center>
            <motion.h1
                className="text-5xl lg:text-5xl font-bold text-white leading-tight mb-6 flex flex-col justify-center"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.6 }}
              >
                {headingText.map((line, lineIndex) => (
                  <div key={lineIndex} className="flex flex-wrap justify-center">
                    {line.split(" ").map((word, wordIndex) => (
                      <motion.span key={wordIndex} variants={wordVariants} className="mr-2">
                        {word}
                      </motion.span>
                    ))}
                  </div>
                ))}
              </motion.h1>
            </center>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-8 w-full max-w-5xl mt-3">
  {features.map((feature, idx) => (
    <div
      key={idx}
      className="flex items-center gap-6 py-6 relative group"
      onMouseEnter={() => setHoveredIdx(idx)}
      onMouseLeave={() => setHoveredIdx(null)}
    >
      {/* Number */}
      <span className="text-gray-500 font-bold text-2xl min-w-[2.5rem]">
        {String(idx + 1).padStart(2, "0")}
      </span>

      {/* Image for Mobile */}
      <div
        className={`
          md:hidden
          absolute bottom-0 left-1/2 -translate-x-1/2
          transition-all duration-500 ease-in-out
          ${hoveredIdx === idx ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"}
          w-[150px] h-auto z-10
        `}
      >
        <Image
          src={feature.icon}
          alt="feature"
          width={150}
          height={150}
          className="rounded-sm border-2 border-orange-500 shadow-lg"
        />
      </div>

      {/* Image for Desktop */}
      <div className="hidden md:block relative w-[0px] h-[0px]">
        <div
          className={`
            absolute -left-[140px] top-1/2 -translate-y-1/2
            transition-all duration-500
            ${hoveredIdx === idx
              ? "opacity-100 -rotate-6 scale-100"
              : "opacity-0 -translate-x-8 scale-75 pointer-events-none"}
            z-10
          `}
          style={{ width: 120, height: 120 }}
        >
          <Image
            src={feature.icon}
            alt="feature"
            width={120}
            height={120}
            className="rounded-sm border-2 border-orange-500 shadow-lg"
          />
        </div>
      </div>

      {/* Text and Border */}
      <div className="flex-1 flex flex-col justify-center">
        <span
          className={`
            text-white text-xl font-semibold text-left transition-all duration-500
            bg-gradient-to-l from-orange-500 to-orange-300 bg-[length:200%_100%] bg-left
            bg-clip-text text-transparent
            [background-position-x:100%]
            md:group-hover:[background-position-x:0%]
          `}
          style={{
            backgroundImage:
              hoveredIdx === idx
                ? "linear-gradient(to left, #f97316, #fdba74)"
                : "linear-gradient(to left, #fff, #fff)",
            backgroundSize: "200% 100%",
            backgroundPositionX: hoveredIdx === idx ? "0%" : "100%",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {feature.text}
        </span>

        {/* Animated Border Bottom */}
        <div className="mt-2 h-1 w-full relative overflow-hidden">
          <div
            className={`
              absolute right-0 top-0 h-full
              bg-gradient-to-r from-orange-500 to-orange-300
              transition-all duration-500
            `}
            style={{
              width: hoveredIdx === idx ? "100%" : "0%",
            }}
          />
          <div className="w-full h-full bg-orange-500 opacity-20" />
        </div>
      </div>
    </div>
  ))}
</div>

        </section>
    );
};

export default AccountingFeatures;
'use client'
import React, { useState } from "react";
import Image from "next/image";

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

    return (
        <section className="bg-[#111] min-h-screen flex flex-col items-center justify-center py-16 px-4 relative bottom-16">
            <div className="text-orange-400 font-semibold text-lg mb-4 text-center">✨ What We Do</div>
            <h1 className="text-white text-5xl md:text-5xl font-extrabold text-center mb-12">
                Smart Accounting, Lower Taxes, and <br />
                Financial Peace of Mind
            </h1>
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
                        {/* Animated Image */}
                        <div className="relative w-[0px] h-[0px]">
                            <div
                                className={`
                                    absolute -left-[140px] top-1/2 -translate-y-1/2
                                    transition-all duration-500
                                    ${hoveredIdx === idx
                                        ? "opacity-100 -rotate-6 scale-100"
                                        : "opacity-0 -translate-x-8 scale-75 pointer-events-none"
                                    }
                                    z-10
                                `}
                                style={{
                                    width: 120,
                                    height: 120,
                                }}
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
                                    group-hover:[background-position-x:0%]
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
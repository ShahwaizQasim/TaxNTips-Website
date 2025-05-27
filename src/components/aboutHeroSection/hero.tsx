'use client'
import { useState } from "react";

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState('mission');
  return (
    <div className="flex flex-col md:flex-row items-start justify-center px-6 py-10 gap-10">
      {/* LEFT COLUMN - Images */}
      <div className="relative w-full md:w-[45%] flex items-center justify-center min-h-[400px]">
        <img src="/about-img2_480.jpg" alt="Background Person" className="w-[60%] rounded-lg shadow-md z-10" />
        <img src="/about-img1_360.jpg" alt="Team" className="absolute right-0 top-65 w-[35%] rounded-lg shadow-lg z-20" />
        <div className="absolute right-[4%] top-[14%] bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold px-4 py-2 rounded-tr-2xl rounded-bl-2xl z-30">
          <div className="text-2xl">1</div>
          <div className="text-xs">Years of Experiences</div>
        </div>
        <div className="absolute -bottom-10 left-1/2 ml-14 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-md flex items-center gap-2 z-40">
          <img src="/blog.jpg" alt="Client" className="w-10 h-10 rounded-full object-cover" />
          <div className="ml-10 m-5">
            <div className="text-xl font-bold">1+</div>
            <div className="text-sm text-gray-500">Satisfied Clients</div>
          </div>
        </div>
      </div>
      {/* RIGHT COLUMN - Text */}
      <div className="w-full md:w-[38%] space-y-6">
        <p className="text-orange-500 font-medium">:small_orange_diamond: Welcome to Tax n Tips</p>
        <h2 className="text-4xl font-extrabold leading-snug">Your Trusted Partner in Tax & Business Solutions</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          At Tax N Tips, we believe that smart tax planning and strategic financial management are the cornerstones of financial success. Whether you’re an individual, a small business owner, or a corporation, our expert tax and business advisory services ensure that you maximize your savings, stay compliant with tax regulations, and build a strong financial future.
        </p>
        {/* Tabs */}
        <div className="flex gap-6 font-semibold text-lg border-b-2 border-gray-200">
          <button
            onClick={() => setActiveTab('mission')}
            className={`pb-2 ${activeTab === 'mission'
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-500'
              }`}
          >
            Our Mission
          </button>
          <button
            onClick={() => setActiveTab('vision')}
            className={`pb-2 ${activeTab === 'vision'
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-500'
              }`}
          >
            Our Vision
          </button>
        </div>
        {/* Tab Content */}
        <div className="flex gap-4 items-start">
          <img src="/about-tag_720.png" alt="icon" className="w-6 mt-1" />
          <p className="text-gray-700 text-sm leading-relaxed">
            {activeTab === 'mission'
              ? 'At Tax N Tips, our mission is to empower individuals and businesses with expert tax strategies, financial solutions, and business advisory services that maximize savings, ensure compliance, and foster long-term financial success.'
              : 'Our vision is to become the most trusted partner for businesses and individuals, delivering innovative tax and financial solutions that drive sustainable growth and financial security.'}
          </p>
          <img src="/curve-icon_360.png" alt="Curve" className="absolute right-[2vw] top-1/2 w-6" />
        </div>
      </div>
    </div>
  );
}

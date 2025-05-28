'use client'
import React, { useState, useEffect } from 'react';
import { NextPage } from 'next'
import { ShieldCheck, LifeBuoy, GaugeCircle, Briefcase, BarChart3, Target, Eye } from 'lucide-react'
import Navbar2 from '@/components/navbar2/navbar2';
import BannerSection from '@/components/bannerSection/banner';
import { motion } from 'framer-motion';
import Footer from '@/components/footer/footer';

interface Props { }


const About: NextPage<Props> = ({ }) => {
  const [activeTab, setActiveTab] = useState('mission');

  const heading = "Maximize Savings, Minimize Stress Smart Tax & Business Solutions with Tax N Tips!";
  const words = heading.split(" ");
  return (
    <>
      <Navbar2 />
      <BannerSection />
      <div className="flex flex-col md:flex-row items-start justify-center px-6 py-10 gap-10">
        {/* LEFT COLUMN - Images */}
        <div className="relative w-full md:w-[45%] flex items-center justify-center min-h-[400px]">
          <img src="/about-img2_480.jpg" alt="Background Person" className="w-[60%] rounded-lg shadow-md z-10" />
          <img src="/about-img1_360.jpg" alt="Team" className="absolute right-0 top-65 w-[35%] rounded-lg shadow-lg z-20" />
          <div
            className="absolute top-[9vw] right-[7vw] text-white font-semibold px-6 py-4 z-30 lg:block hidden"
            style={{
              background: 'linear-gradient(to right, #F97316, #FB923C)',
              clipPath: 'polygon(0 0, 70% 0, 100% 30%, 100% 100%, 0% 100%)',
              width: '160px', height: '15vh'
            }}
          >
            <div className="text-6xl font-extrabold">10</div>
            <div className="text-2xl leading-tight">Years of<br />Experiences</div>
          </div>
          <div className="absolute -bottom-10 left-1/2 ml-14 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-md flex items-center gap-2 z-40 lg:block hidden">
            <img src="/banner-3.jpg" alt="Client" className="w-24 h-24  object-cover" />
            <div className="ml-10 m-5">
              <div className="text-5xl font-bold">500+</div>
              <div className="text-l text-gray-500">Satisfied Clients</div>
            </div>
          </div>
        </div>
        {/* RIGHT COLUMN - Text */}
        <div className="w-full md:w-[28%] space-y-6 lg:mt-0 mt-40">
          <p className="text-orange-500 font-medium"> Welcome to Tax n Tips</p>
          <h2 className="text-3xl lg:text-5xl font-extrabold leading-snug">Your Trusted Partner in Tax & Business Solutions</h2>
          <p className="text-gray-600 text-l leading-loose">
            At Tax N Tips, we believe that smart tax planning and strategic financial management are the cornerstones of financial success. Whether you’re an individual, a small business owner, or a corporation, our expert tax and business advisory services ensure that you maximize your savings, stay compliant with tax regulations, and build a strong financial future.
          </p>
          {/* Tabs */}
          <div className="flex gap-6 font-semibold text-lg border-b-2 border-gray-200">
            <button
              onClick={() => setActiveTab('mission')}
              className={`pb-2 transition-all duration-300 ${activeTab === 'mission'
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-600 border-b-2 border-transparent'
                }`}
            >
              Our Mission
            </button>
            <button
              onClick={() => setActiveTab('vision')}
              className={`pb-2 transition-all duration-300 ${activeTab === 'vision'
                ? 'text-orange-500 border-b-2 border-orange-500'
                : 'text-gray-600 border-b-2 border-transparent'
                }`}
            >
              Our Vision
            </button>
          </div>
          <div className="relative min-h-[200px] mt-6 overflow-hidden">
            {/* Mission Tab */}
            <div
              className={`transition-all duration-500 transform ${activeTab === 'mission' ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 absolute'
                }`}
            >
              {activeTab === 'mission' && (
                <div className="flex gap-8 items-start relative z-20">
                  <Target className="w-70 h-6 mt-1 text-orange-500" />
                  <p className="text-gray-700 text-l leading-loose">
                    At Tax N Tips, our mission is to empower individuals and businesses with expert tax strategies,
                    financial solutions, and business advisory services that maximize savings, ensure compliance,
                    and foster long-term financial success.
                  </p>
                </div>
              )}
            </div>
            {/* Vision Tab */}
            <div
              className={`transition-all duration-500 transform ${activeTab === 'vision' ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 absolute'
                }`}
            >
              {activeTab === 'vision' && (
                <div className="flex gap-8 items-start relative z-20">
                  <Eye className="w-60 h-6 mt-1 text-orange-500" />
                  <p className="text-gray-700 text-l leading-loose">
                    Our vision is to become the most trusted partner for businesses and individuals, delivering
                    innovative tax and financial solutions that drive sustainable growth and financial security.
                  </p>
                </div>
              )}
            </div>
          </div>
          <img
            src="/curve-icon_360.png"
            alt="Curve"
            className="absolute right-[7vw] lg:block hidden top-170 w-10 z-10"
          />
        </div>
      </div>
      <section className="px-6 py-16 bg-white">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h4 className="text-lg font-bold text-black flex items-center justify-center gap-2">
            Expertise You Can Trust
          </h4>
          <h2 className="text-3xl lg:5xl font-black text-gray-900 mt-3 leading-snug flex flex-wrap">
            {words.map((word, index) => (
              <motion.span
                key={index}
                className="mr-2"
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: false, amount: 0.6 }}
              >
                {word}
              </motion.span>
            ))}
          </h2>
        </div>
        {/* Content Row */}
        <div className="flex flex-col md:flex-row items-start gap-12 max-w-7xl mx-auto">
          {/* Left Images + Icon Tag */}
          <div className="relative flex-1">
            <div className="relative  md:w-auto lg:ml-50 ml-20 h-[400px]">
              {/* Meeting Image (Background) */}
              <img
                src="/about-group-discussion-img.jpg"
                alt="Meeting"
                className="rounded-bl-[180px] rounded-tr-[30px] w-[350px] h-[450px] object-cover"
              />
              {/* Pencil Image (Overlapping Left) */}
              <img
                src="/about-pencil-img.jpg"
                alt="Chart"
                className="absolute -left-16 top-0 w-[180px] h-[360px] object-cover rounded-xl z-10"
              />
            </div>
            {/* Floating icon tag */}
            <div className="absolute -top-4 left-70 lg:block hidden bg-gradient-to-r from-orange-500 to-orange-600 text-white rounded-bl-[30px] rounded-br-[30px] rounded-tl-[30px] rounded-tr-[30px] px-4 py-2 flex items-center gap-2 shadow-lg z-10">
              <div className="bg-white text-orange-600 rounded-full p-1">
                <BarChart3 size={44} />
              </div>
            </div>
          </div>
          {/* Right Text */}
          <div className="flex-1 space-y-6">
            <p className="text-gray-600 text-l leading-loose">
              We’re a leading tax consulting and business services firm dedicated to helping individuals
              and businesses navigate the complexities of taxation, business formation, and financial planning.
              With years of expertise, our team of certified professionals delivers personalized tax strategies,
              entity formation guidance, and financial solutions designed to minimize liabilities and maximize profitability.
            </p>
            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Item */}
              <div className="flex items-start gap-7 p-4 rounded-xl ">
                <Briefcase className=" w-8 h-8 relative top-[15px]" />
                <div>
                  <h4 className="font-bold text-lg text-black">Personalized Solutions</h4>
                  <p className="text-lg text-black font-bold">90%</p>
                  <div className="h-1 bg-gray-200 mt-1 rounded-full overflow-hidden">
                    <div className="bg-orange-500 h-full w-[90%]"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-7 p-4 rounded-xl">
                <ShieldCheck className=" w-8 h-8 relative top-[15px]" />
                <div>
                  <h4 className="font-bold text-lg text-black">Hassle-Free Compliance</h4>
                  <p className="text-lg text-black font-bold">95%</p>
                  <div className="h-1 bg-gray-200 mt-1 rounded-full overflow-hidden">
                    <div className="bg-orange-500 h-full w-[95%]"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-7 p-4 rounded-xl">
                <LifeBuoy className=" w-8 h-8 relative top-[15px]" />
                <div>
                  <h4 className="font-bold text-lg text-black">Year-Round Support</h4>
                  <p className="text-black text-lg font-bold">95%</p>
                  <div className="h-1 bg-gray-200 mt-1 rounded-full overflow-hidden">
                    <div className="bg-orange-500 h-full w-[95%]"></div>
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-7 p-4 rounded-xl">
                <GaugeCircle className=" w-8 h-8 relative top-[15px]" />
                <div>
                  <h4 className="font-bold text-lg text-black">Financial Efficiency</h4>
                  <p className="text-lg text-black font-bold">90%</p>
                  <div className="h-1 bg-gray-200 mt-1 rounded-full overflow-hidden">
                    <div className="bg-orange-500 h-full w-[90%]"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="bg-cover mt-15 bg-center flex items-center lg:justify-center justify-start px-4 py-12 sm:px-6 md:px-8"
        style={{ backgroundImage: "url('/about-black-banner.jpg')" }}
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 text-white text-center">
          {/* Item 1 */}
          <div className="w-1/2 sm:w-auto">
            <div className="relative inline-block">
              <span className="absolute -top-3 -left-3 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full w-10 h-10 sm:w-14 sm:h-14 z-0"></span>
              <span className="text-4xl sm:text-7xl font-extrabold relative z-10">1000+</span>
            </div>
            <p className="text-xs sm:text-sm mt-1 relative z-10">PROJECT COMPLETE</p>
          </div>

          {/* Separator */}
          <span
            className="text-xl sm:text-2xl font-bold inline-block"
            style={{
              animation: 'spin 3s linear infinite',
              display: 'inline-block',
            }}
          >
            ✻
          </span>

          {/* Item 2 */}
          <div className="w-1/2 sm:w-auto">
            <div className="relative inline-block">
              <span className="absolute -top-3 -left-3 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full w-10 h-10 sm:w-14 sm:h-14 z-0"></span>
              <span className="text-4xl sm:text-7xl font-extrabold relative z-10">500+</span>
            </div>
            <p className="text-xs sm:text-sm mt-1 relative z-10">CLIENTS SATISFACTIONS</p>
          </div>

          {/* Separator */}
          <span
            className="text-xl sm:text-2xl font-bold inline-block"
            style={{
              animation: 'spin 3s linear infinite',
              display: 'inline-block',
            }}
          >
            ✻
          </span>

          {/* Item 3 */}
          <div className="w-1/2 sm:w-auto">
            <div className="relative inline-block">
              <span className="absolute -top-3 -left-3 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full w-10 h-10 sm:w-14 sm:h-14 z-0"></span>
              <span className="text-4xl sm:text-7xl font-extrabold relative z-10">10+</span>
            </div>
            <p className="text-xs sm:text-sm mt-1 relative z-10">AWARDS</p>
          </div>

          {/* Separator */}
          <span
            className="text-xl sm:text-2xl font-bold inline-block"
            style={{
              animation: 'spin 3s linear infinite',
              display: 'inline-block',
            }}
          >
            ✻
          </span>

          {/* Item 4 */}
          <div className="w-1/2 sm:w-auto">
            <div className="relative inline-block">
              <span className="absolute -top-3 -left-3 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full w-10 h-10 sm:w-14 sm:h-14 z-0"></span>
              <span className="text-4xl sm:text-7xl font-extrabold relative z-10">15+</span>
            </div>
            <p className="text-xs sm:text-sm mt-1 relative z-10">TEAM MEMBERS</p>
          </div>
          <span
            className="text-xl sm:text-2xl font-bold inline-block"
            style={{
              animation: 'spin 3s linear infinite',
              display: 'inline-block',
            }}
          >
            ✻
          </span>
        </div>

      </section>


      <section className='mt-12'>
        <Footer />
      </section>
    </>
  )
}

export default About
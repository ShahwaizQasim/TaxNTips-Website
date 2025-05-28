'use client'
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './awardCarousel.css'; 

interface Award {
  id: number;
  logo: string;
}

const AwardsCarousel: React.FC = () => {
  const awards: Award[] = [
    { id: 1, logo: '/IRS-Certified-Agent.jpg.png' },
    { id: 2, logo: '/irs-efile.png' },
    { id: 3, logo: '/NATP-logo-words-Large-PPT.png' },
    { id: 4, logo: '/irs-efile.png' },
    { id: 5, logo: '/NATP-logo-words-Large-PPT.png' },
  ];

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12 bg-[#FFFFFF] mt-8 md:mt-16 lg:mt-[130px] relative">
      {/* Header */}
      <div className="text-center mb-12">
        <p className="text-black font-bold text-sm uppercase tracking-wide mb-2">
          🏅 Our industry leading practices and capabilities.
        </p>
        <h2 className="text-5xl md:text-5xl font-bold mt-4 text-gray-900">Awards</h2>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={3}
        spaceBetween={24}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        loop={true}
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 16,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 24,
          },
        }}
        className="cursor-grab active:cursor-grabbing"
      >
        {awards.map((award) => (
          <SwiperSlide key={award.id}>
            <div className="
              rounded-3xl p-6 md:p-8 h-64 sm:h-72 md:h-80 flex flex-col bg-[#FFE0BA] items-center justify-center
              border-4 shadow-xl hover:shadow-2xl
              transition-all duration-300 border-orange-400
              relative overflow-hidden group
            ">
              <img
                src={award.logo}
                alt={`Award ${award.id} logo`}
                className="max-w-full max-h-full object-contain"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default AwardsCarousel;

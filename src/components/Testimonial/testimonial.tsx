'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const testimonials = [
  {
    name: 'Michael R.',
    role: 'Business Owner',
    image: '/h2-testimonial-thumb-1.png',
    feedback:
      'Tax N Tips has been a game-changer for my business! Their expert guidance helped me set up my LLC and create a tax strategy that saved me thousands. The team is professional, knowledgeable, and always available when I need them. I highly recommend their services!',
    mainImage: '/h2-testimonial-1.png',
  },
  {
    name: 'Sara K.',
    role: 'Startup Founder',
    image: '/h2-testimonial-thumb-2.png',
    feedback:
      'Very responsive and supportive. Helped us streamline all our filings. Will be working with them long-term!',
    mainImage: '/h2-testimonial-2.png',
  },
  {
    name: 'Anita P.',
    role: 'Real Estate Agent',
    image: '/h2-testimonial-thumb-3.png',
    feedback:
      'From S-Corp setup to tax planning, everything was handled smoothly. Amazing service!',
    mainImage: '/h2-testimonial-3.png',
  },
];

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleUp = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleDown = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
  };

  const active = testimonials[activeIndex];

  return (
    <section className="py-16 sm:py-24 bg-white px-4 sm:px-6 md:px-12 lg:px-24">

       <section
        className="bg-cover mt-15 mb-14 bg-center flex items-center lg:justify-center justify-start px-4 py-12 sm:px-6 md:px-8"
      >
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center items-center gap-6 sm:gap-8 md:gap-10 text-white text-center">
          {/* Item 1 */}
          <div className="w-1/2 sm:w-auto">
            <div className="relative inline-block">
            <div className="flex items-center gap-2">
              <img src="/hand.png" alt="" className='w-16 h-16' />
              <span className="text-3xl lg:text-[56px] sm:text-7xl font-extrabold relative z-10 text-black">10+</span>
            </div>
            </div>
            <p className="text-xs sm:text-sm mt-1 relative z-10 text-gray-500 pl-14">Client Satisfactions</p>
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
             <div className="flex items-center gap-2">
              <img src="/awards.png" alt="" className='w-16 h-16' />
              <span className="text-3xl lg:text-[56px] sm:text-7xl font-extrabold relative z-10 text-black">10+</span>
            </div>
            <p className="text-xs sm:text-sm mt-1 relative z-10 text-gray-500 pl-14">Awards</p>
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
            <div className="flex items-center gap-2">
              <img src="/bulb.png" alt="" className='w-16 h-16' />
              <span className="text-3xl lg:text-[56px] sm:text-7xl font-extrabold relative z-10 text-black">1000+</span>
            </div>
            <p className="text-xs sm:text-sm mt-1 relative z-10 text-gray-500 pl-14">Project Complete</p>
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
          <div className="flex items-center gap-2">
              <img src="/unKnown.png" alt="" className='w-16 h-16' />
              <span className="text-3xl lg:text-[56px] sm:text-7xl font-extrabold relative z-10 text-black">10+</span>
            </div>
            <p className="text-xs sm:text-sm mt-1 relative z-10 text-gray-500 pl-14">Team Members</p>
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

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 items-center">

        {/* Side avatars + buttons */}
        <div className="flex flex-col items-center gap-6 relative order-2 md:order-1">
          <button
            onClick={handleUp}
            aria-label="Previous testimonial"
            className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition"
          >
            <ChevronUp className="w-6 h-6 text-gray-700" />
          </button>

          <div className="flex flex-row md:flex-col gap-4">
            {testimonials.map((t, i) => (
              <div
                key={i}
                onClick={() => handleThumbnailClick(i)}
                className={`rounded-full w-20 h-20 md:w-24 md:h-24 overflow-hidden border-2 cursor-pointer transition-transform duration-300 ${
                  i === activeIndex
                    ? 'border-orange-500 scale-110'
                    : 'border-transparent hover:border-orange-300'
                }`}
              >
                <img
                  src={t.image}
                  alt={t.name}
                  className="object-cover w-full h-full"
                  loading="lazy"
                />
              </div>
            ))}
          </div>

          <button
            onClick={handleDown}
            aria-label="Next testimonial"
            className="p-2 rounded-full hover:bg-gray-100 active:bg-gray-200 transition"
          >
            <ChevronDown className="w-6 h-6 text-gray-700" />
          </button>
        </div>

        {/* Large avatar */}
        <div className="flex justify-center order-1 md:order-2 relative right-32">
          <div className="lg:w-98 lg:h-98 h-64 w-64 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full shadow-lg">
            <img
              src={active.mainImage}
              alt={active.name}
              className="object-cover w-full h-full transition-transform duration-300"
            />
          </div>
        </div>

        {/* Text content */}
        <div className="text-left space-y-4 px-4 sm:px-6 order-3 md:order-3 max-w-xl mx-auto md:mx-0 relative right-30">
          <div className="text-sm text-orange-500 italic">★ Our Feedback</div>
          <h2 className="text-3xl sm:text-4xl font-extrabold leading-tight">
            What People Say
            <br />
            About Us
          </h2>
          <p className="text-gray-600 lg:text-sm text-base sm:text-lg">{active.feedback}</p>
          <p className="mt-6 text-lg font-semibold text-gray-700">
            {active.role} <br />
            <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-[length:200%_100%] bg-left bg-clip-text text-transparent font-bold">
              {active.name}
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

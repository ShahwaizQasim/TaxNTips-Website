'use client'
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Award {
    id: number;
    logo: string;
}

const AwardsCarousel: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isDragging, setIsDragging] = useState(false);
    const [startX, setStartX] = useState(0);
    const [scrollLeft, setScrollLeft] = useState(0);

    const awards: Award[] = [
        {
            id: 1,
            logo: '/IRS-Certified-Agent.jpg.png',
        },
        {
            id: 2,
            logo: '/irs-efile.png',
        },
        {
            id: 3,
            logo: '/NATP-logo-words-Large-PPT.png',
        },
        {
            id: 4,
            logo: '/irs-efile.png',
        },
        {
            id: 5,
            logo: '/NATP-logo-words-Large-PPT.png',
        },
        
    ];

    const totalSlides = awards.length;
    const slidesToShow = 3;
    const maxSlideIndex = Math.max(0, totalSlides - slidesToShow);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentSlide(prev =>
                prev >= maxSlideIndex ? 0 : prev + 1
            );
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, maxSlideIndex]);

    const nextSlide = () => {
        setCurrentSlide(prev =>
            prev >= maxSlideIndex ? 0 : prev + 1
        );
    };

    const prevSlide = () => {
        setCurrentSlide(prev =>
            prev <= 0 ? maxSlideIndex : prev - 1
        );
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(Math.min(index, maxSlideIndex));
    };

    // Mouse drag handlers
    const handleMouseDown = (e: React.MouseEvent) => {
        setIsDragging(true);
        setIsAutoPlaying(false);
        setStartX(e.pageX);
        setScrollLeft(currentSlide);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDragging) return;
        e.preventDefault();
    };

    const handleMouseUp = (e: React.MouseEvent) => {
        if (!isDragging) return;
        setIsDragging(false);

        const x = e.pageX;
        const walk = x - startX;
        const threshold = 50; // Minimum drag distance to trigger slide change

        if (Math.abs(walk) > threshold) {
            if (walk > 0) {
                // Dragged right - go to previous slide
                prevSlide();
            } else {
                // Dragged left - go to next slide
                nextSlide();
            }
        }

        setTimeout(() => setIsAutoPlaying(true), 2000); // Resume auto-play after 2 seconds
    };

    const handleMouseLeave = () => {
        if (isDragging) {
            setIsDragging(false);
            setTimeout(() => setIsAutoPlaying(true), 2000);
        }
    };

    return (
        <div className="w-full max-w-6xl mx-auto px-4 py-12 bg-[#FFFFFF] relative bottom-[260px] left-0">
            {/* Header */}
            <div className="text-center mb-12">
                <p className="text-black font-bold text-sm uppercase tracking-wide mb-2">
                    🏅 Our industry leading practices and capabilities.
                </p>
                <h2 className="text-5xl md:text-5xl font-bold mt-4 text-gray-900">
                    Awards
                </h2>
            </div>

            {/* Carousel Container */}
            <div
                className="relative"
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
            >
                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    aria-label="Previous awards"
                >
                    <ChevronLeft className="w-6 h-6 text-gray-600" />
                </button>

                <button
                    onClick={nextSlide}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 shadow-lg rounded-full p-3 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    aria-label="Next awards"
                >
                    <ChevronRight className="w-6 h-6 text-gray-600" />
                </button>

                {/* Slides Container */}
                <div
                    className="overflow-hidden mx-12 cursor-grab active:cursor-grabbing select-none"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseLeave}
                >
                    <div
                        className="flex transition-transform duration-500 ease-in-out"
                        style={{
                            transform: `translateX(-${currentSlide * (100 / slidesToShow)}%)`,
                            width: `${(totalSlides / slidesToShow) * 100}%`
                        }}
                    >
                        {awards.map((award) => (
                            <div
                                key={award.id}
                                className="flex-shrink-0 px-4"
                                style={{ width: `${100 / totalSlides}%` }}
                            >
                                <div className={`
                  rounded-3xl p-8 h-80 flex flex-col bg-[#FFE0BA] items-center justify-center
                  border-4 shadow-xl hover:shadow-2xl
                  transition-all duration-300 border-orange-400
                  relative overflow-hidden group
                `}>
                                    {/* Background Pattern */}
                                   
                                    <img src={award.logo} alt="" />

                                    {/* Hover Effect Overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center mt-8 space-x-2">
                    {Array.from({ length: maxSlideIndex + 1 }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`
                w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-orange-500
                ${index === currentSlide
                                    ? 'bg-orange-500 w-8'
                                    : 'bg-gray-300 hover:bg-gray-400'
                                }
              `}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Auto-play Controls */}
            <div className="flex justify-center mt-6">
                <button
                    onClick={() => setIsAutoPlaying(!isAutoPlaying)}
                    className="text-sm text-gray-500 hover:text-gray-700 transition-colors duration-200 flex items-center space-x-2"
                >
                    <span>{isAutoPlaying ? '⏸️' : '▶️'}</span>
                    <span>{isAutoPlaying ? 'Pause' : 'Play'} Auto-scroll</span>
                </button>
            </div>
        </div>
    );
};

export default AwardsCarousel;


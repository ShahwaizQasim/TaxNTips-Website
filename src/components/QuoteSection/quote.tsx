'use client'
import React from 'react';
import { Star, TrendingUp } from 'lucide-react';

interface StatisticProps {
    value: string;
    label: string;
    percentage?: string;
}

const Statistic: React.FC<StatisticProps> = ({ value, label, percentage }) => (
    <div className="flex flex-col items-start border-b-2 border-gray-200  pb-8 ">
        <div className="flex items-center justify-between w-full gap-2 mb-2">
            <span className="text-[18px] font-bold text-gray-900">{value}</span>
            {percentage && (
                <span className="text-[18px] font-medium text-gray-600">{percentage}</span>
            )}
        </div>
        <span className="text-sm text-orange-500 font-medium">{label}</span>
        {percentage && (
            <div className="w-92 h-2 bg-gray-200 rounded-full mt-2">
                <div className="w-full h-full bg-gray-900 rounded-full"></div>
            </div>
        )}
    </div>
);

const QuoteSection: React.FC = () => {
    return (
        <div className="min-h-screen bg-[#FFFFFF]">
            {/* Main Content */}
            <div className="container mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-2 items-center">

                    {/* Right Content - Image Placeholder */}
                    <div className="relative">
                        <div className="relative w-full h-96 lg:h-[600px] rounded-3xl overflow-hidden">
                            {/* Placeholder for image */}
                            <div className="absolute inset-0 left-14 flex items-center justify-center">
                                <img src="/h2-banner2.jpg" alt="banner" className='w-full h-full object-contain' />
                            </div>
                        </div>
                    </div>
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <div className="flex gap-2 relative bottom-5">
                                <Star className="w-5 h-5 text-orange-500 fill-current" />
                                <span className="text-orange-500 font-medium text-sm">Who We Are</span>
                            </div>
                            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                                Welcome to Tax N Tips
                            </h1>
                            <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                                At Tax N Tips, we believe that smart tax planning and strategic financial
                                management are the cornerstones of financial success. Whether you're an
                                individual, a small business owner, or a corporation, our expert tax and
                                business advisory services ensure that you maximize your savings, stay
                                compliant with tax regulations, and build a strong financial future.
                            </p>
                        </div>

                        {/* Statistics */}
                        <div className="flex flex-col sm:flex-row gap-8">
                            <Statistic
                                value="500+"
                                label="Satisfied Clients"
                            />
                            <Statistic
                                value="Tax & Business Solutions"
                                label="98%"
                                percentage="98%"
                            />
                        </div>

                        {/* CTA Button */}
                        <div>
                            <button className="interactive  bg-gradient-to-r  from-orange-300 to-orange-500 cursor-none hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                                Get a quote
                            </button>
                        </div>
                    </div>


                </div>
            </div>

            {/* Scroll Indicator */}
            {/* <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
            </div> */}
        </div>
    );
};

export default QuoteSection;
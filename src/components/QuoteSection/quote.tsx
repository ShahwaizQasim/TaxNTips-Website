'use client'
import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';

interface StatisticProps {
    value: string;
    label: string;
    percentage?: string;
}

const Statistic: React.FC<StatisticProps> = ({ value, label, percentage }) => (
    <div className="flex flex-col items-start border-b-2 border-gray-200 pb-8 w-full max-w-xs">
        <div className="flex items-center justify-between w-full gap-2 mb-2">
            <span className="text-[18px] font-bold text-gray-900">{value}</span>
            {percentage && (
                <span className="text-[18px] font-medium text-gray-600">{percentage}</span>
            )}
        </div>
        <span className="text-sm text-orange-500 font-medium">{label}</span>
        {percentage && (
            <div className="w-[92px] h-2 bg-gray-200 rounded-full mt-2">
                <div className="w-full h-full bg-gray-900 rounded-full"></div>
            </div>
        )}
    </div>
);

const QuoteSection: React.FC = () => {
    const heading = "Welcome to Tax N Tips";
    const words = heading.split(" ");

    return (
        <div className="min-h-screen bg-[#FFFFFF] py-12 px-4 sm:px-6 lg:px-8">
            {/* Main Content */}
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                    {/* Right Content - Image */}
                    <div className="relative w-full">
                        <div className="relative w-full h-64 sm:h-96 lg:h-[600px] rounded-3xl overflow-hidden">
                            {/* Image wrapper */}
                            <motion.div
                                className="absolute inset-0 left-0 sm:left-14 flex items-center justify-center"
                                initial={{ x: -100, y: -100, opacity: 0 }}
                                whileInView={{ x: 0, y: 0, opacity: 1 }}
                                transition={{ duration: 1, ease: 'easeOut' }}
                                viewport={{ once: true }}
                            >
                                <img
                                    src="/h2-banner2.jpg"
                                    alt="banner"
                                    className="w-full h-full object-contain"
                                />
                            </motion.div>
                        </div>
                    </div>

                    {/* Left Content - Text */}
                    <div className="space-y-8 px-2 sm:px-0">
                        <div>
                            <div className="flex gap-2 relative bottom-5">
                                <Star className="w-5 h-5 text-orange-500 fill-current" />
                                <span className="text-orange-500 font-medium text-sm">Who We Are</span>
                            </div>
                            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
                                {words.map((word, index) => (
                                    <motion.span
                                        key={index}
                                        className="mr-2 inline-block"
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        viewport={{ once: false, amount: 0.6 }}
                                    >
                                        {word}
                                    </motion.span>
                                ))}
                            </h1>
                            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-full sm:max-w-xl">
                                At Tax N Tips, we believe that smart tax planning and strategic financial
                                management are the cornerstones of financial success. Whether you're an
                                individual, a small business owner, or a corporation, our expert tax and
                                business advisory services ensure that you maximize your savings, stay
                                compliant with tax regulations, and build a strong financial future.
                            </p>
                        </div>

                        {/* Statistics */}
                        <div className="flex flex-col sm:flex-row gap-8 max-w-xl">
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
                            <Link href={'/contact'}>
                            <button className="interactive bg-gradient-to-r from-orange-300 to-orange-500 cursor-pointer hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl">
                                Get a quote
                            </button>
                            </Link>
                          
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuoteSection;

'use client';

import React from 'react';
import { BookOpen, Target, CreditCard, Settings, Briefcase } from 'lucide-react';
import FlipCard from '../FlipCard/flipCard';
import './heroSection.css';
import { motion } from 'framer-motion';

interface ServiceCard {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
    backContent: string;
    backgroundImage: string;
}

const services: ServiceCard[] = [
    {
        id: 1,
        icon: <BookOpen className="w-12 h-12 text-white" />,
        title: "Bookkeeping Services",
        description:
            "We understand that maintaining accurate financial records is essential for the success of any business.",
        backContent:
            "Professional bookkeeping services including financial record management, expense tracking, accounts payable/receivable, and monthly financial reports to keep your business organized and compliant.",
        backgroundImage: '/flip1.jpg',
    },
    {
        id: 2,
        icon: <Target className="w-12 h-12 text-white" />,
        title: "Business Tax Preparation",
        description:
            "Our experienced tax professionals stay up to date with the latest tax laws to ensure accurate and compliant filings.",
        backContent:
            "Complete business tax preparation services covering corporate taxes, partnership returns, LLC filings, and quarterly tax planning to maximize deductions and minimize liabilities.",
        backgroundImage: '/flip2.jpg',
    },
    {
        id: 3,
        icon: <CreditCard className="w-12 h-12 text-white" />,
        title: "Tax Strategy & Reduction",
        description:
            "We conduct a thorough analysis of your income, expenses, and investments to identify all eligible deductions.",
        backContent:
            "Strategic tax planning services including retirement planning, investment strategies, tax-loss harvesting, and year-round consultation to optimize your tax position.",
        backgroundImage: '/flip3.jpg',
    },
    {
        id: 4,
        icon: <Settings className="w-12 h-12 text-white" />,
        title: "S-Corp Set-up",
        description:
            "At Tax N Tips, we provide expert guidance on the entire S-Corp formation process, ensuring a seamless transition to this tax-efficient structure.",
        backContent:
            "Complete S-Corporation setup including articles of incorporation, bylaws preparation, EIN application, tax election filing, and ongoing compliance support.",
        backgroundImage: '/flip4.webp',
    },
    {
        id: 5,
        icon: <Briefcase className="w-12 h-12 text-white" />,
        title: "Business & LLC Set-Up",
        description:
            "We specialize in Business and LLC (Limited Liability Company) Set-Up, ensuring that entrepreneurs and small business owners establish a solid legal foundation for long-term success.",
        backContent:
            "Full business entity formation services including LLC registration, operating agreements, business licenses, bank account setup, and initial compliance requirements.",
        backgroundImage: '/flip5.jpg',
    },
];

export default function HeroSection() {
    const headingText = "Comprehensive Tax & Business Solutions Tailored for Your Success!";
    const headingWords = headingText.split(" ")

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    }

    const wordVariants = {
        hidden: { opacity: 0, x: 40 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    };

    return (
        <section
            className="relative bottom-[160px] px-6 sm:px-10 lg:px-20 bg-cover bg-no-repeat min-h-screen flex flex-col items-center justify-center py-22"
            style={{
                backgroundImage:
                    'url("/path-to-your-background-image.jpg")',
                backgroundPosition: 'center',
                backgroundSize: 'cover',
            }}
        >
            {/* Overlay */}

            <div className="backImage"></div>

            <div className="relative max-w-7xl w-full z-10">
                {/* Header */}
                <div className="text-center mb-20">
                    <div className="flex items-center gap-1 justify-center mb-4">
                        <div className="w-8 h-8 bg-orange-600 rounded-full flex items-center justify-center mr-3 text-white font-bold">
                            G
                        </div>
                        <h3 className="text-white border-b-2 border-orange-600 text-[0.8rem] font-semibold uppercase tracking-wide">
                            Our Services
                        </h3>
                    </div>
                    <motion.h1
                        className="text-4xl md:text-5xl font-extrabold text-white leading-tight flex flex-wrap justify-center"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                    >
                        {headingWords.map((word, index) => (
                            <motion.span key={index} variants={wordVariants} className="mr-2">
                                {word}
                            </motion.span>
                        ))}
                    </motion.h1>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.slice(0, 3).map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <FlipCard service={service} />
                        </motion.div>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14 max-w-4xl mx-auto justify-center items-center">
                    {services.slice(3, 5).map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            viewport={{ once: true }}
                        >
                            <FlipCard service={service} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
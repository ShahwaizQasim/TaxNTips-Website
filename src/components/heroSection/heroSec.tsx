'use client';

import React from 'react';
import { BookOpen, Target, CreditCard, Settings, Briefcase } from 'lucide-react';
import FlipCard from '../FlipCard/flipCard';
import './heroSection.css';

interface ServiceCard {
    id: number;
    icon: React.ReactNode;
    title: string;
    description: string;
    backContent: string;
    backgroundImage: string;
}

export default function HeroSection() {
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

    return (
        <section
            className="relative bottom-[130px] px-6 sm:px-10 lg:px-20 bg-cover bg-no-repeat min-h-screen flex flex-col items-center justify-center py-22"
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
                    <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
                        Comprehensive Tax & Business Solutions Tailored for <br />
                        <span className="text-orange-400">Your Success!</span>
                    </h1>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.slice(0, 3).map((service) => (
                        <FlipCard key={service.id} service={service} />
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-14 max-w-4xl mx-auto justify-center items-center">
                    {services.slice(3, 5).map((service) => (
                        <FlipCard key={service.id} service={service} />
                    ))}
                </div>
            </div>
        </section>
    );
};
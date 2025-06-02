import BusinessTaxContent from '@/components/BusinessTaxContant/taxContent'
import Footer from '@/components/footer/footer'
import Navbar2 from '@/components/navbar2/navbar2'
import { NextPage } from 'next'
import { Facebook, Linkedin, Instagram, SettingsIcon, MapPin } from "lucide-react";
import Link from "next/link";
import { Search, Phone, Mail, CheckCircle, ArrowRight } from 'lucide-react';

interface ServiceItem {
    id: string;
    title: string;
}

interface RelatedService {
    name: string;
    href: string;
}

interface Props { }

const services: ServiceItem[] = [
    {
        id: '1',
        title: 'Customized Tax Solutions',
    },
    {
        id: '2',
        title: 'Year-Round Tax Support',
    },
    {
        id: '3',
        title: 'Hassle-Free Filing',
    },
    {
        id: '4',
        title: 'Audit Assistance & Compliance',
    },
    {
        id: '5',
        title: 'Sales Tax Reporting and Filing',
    },
    {
        id: '6',
        title: 'Financial Statement Preparation',
    }
];

const relatedServices: RelatedService[] = [
    { name: 'Bookkeeping Services', href: '#' },
    { name: 'Business & LLC Set-Up', href: '#' },
    { name: 'Business Tax Preparation', href: '#' },
    { name: 'S Corp Set-up', href: '#' },
    { name: 'Tax Strategy & Resolution', href: '#' }
];


const BusinessTax: NextPage<Props> = ({ }) => {
    return <div>
        <Navbar2 />
        <div>
            {/* Banner Section */}
            <div className="relative bottom-[136px] py-32 pb-[400px]" style={{
                backgroundImage: "url('/bg-page-title1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",

            }}>

                {/* Overlay Content */}
                <div className="about-banner-content absolute inset-0 flex flex-col justify-start text-white p-6 ">
                    {/* Top contact + icons */}
                    <div className="lg:flex justify-between py-[1vw] px-[10vw] relative lg:block hidden py-4 mb-4">
                        <div className="flex gap-10">
                            <h1 className="mr-4 flex gap-2">
                                <MapPin style={{ color: '#ED6F20' }} />
                                PO Box 11224 Spring, TX, United States, Texas 77379
                            </h1>
                            <h1 className="flex gap-2">
                                <Phone style={{ color: '#ED6F20' }} />
                                +786 688 7861
                            </h1>
                        </div>
                        <div className="flex space-x-4">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Facebook size={22} />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Linkedin size={22} />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Instagram size={22} />
                            </a>
                        </div>
                    </div>
                    <div className=" absolute top-64 lg:left-80 left-20  ">
                        <h1 className="text-5xl font-bold">S-Corp Set-up</h1>
                        <div className="py-4 mt-4 rounded-[30px] flex gap-3 justify-center items-center border-1 border-orange-400 bg-[#34393D]">
                            <Link href={'/'} className="cursor-none interactive">
                                <h1>Home</h1>
                            </Link>
                            <SettingsIcon className="text-orange-400" />
                            <Link href={'/service/s-corp'} className="cursor-none interactive">
                                <h1> S-Corp Set-up</h1>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-orange-300 to-orange-500 w-[100%] rounded-b-2xl mx-auto relative bottom-[136px] " />
        <div className="h-2 bg-gradient-to-r from-orange-300 to-orange-500 w-[100%] rounded-b-2xl mx-auto relative bottom-[136px] " ></div>
        <div className="min-h-screen relative bottom-[130px]">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Hero Section */}
                        <section className="bg-white rounded-lg p-8 mb-8 ">
                            <div className="flex flex-col gap-8 items-center ">
                                <div>
                                    <h1 className="lg:text-[44px] text-3xl font-[700] text-black mb-6">
                                        Simplify Your Business Formation with Tax N Tips
                                    </h1>
                                    <div className="space-y-4 text-gray-600">
                                        <img src="/flip4.webp" alt="" className='w-full h-full rounded-2xl' />
                                        <p className='text-gray-500'>
                                            TaxNTips provides professional business tax preparation services to ensure accurate filings, maximum deductions, and full compliance with tax regulations. Our expert team is dedicated to minimizing your tax liability while keeping your business finances in order.<br />
                                            Our experienced tax professionals stay up to date with the latest tax laws to ensure accurate and compliant filings. We identify all possible deductions and tax credits to help you save money and optimize your financial performance.
                                        </p>

                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Services Section */}
                        <section className="bg-white rounded-lg p-8 mb-8 relative bottom-[50px]">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">
                                Our Business Tax Preparation Services Include:
                            </h2>
                            <div className=" gap-8 items-center pr-2">
                                <div>
                                    <p className="text-gray-600 mb-6">
                                        Our services are tailored to your business structure, industry, and financial goals, providing
                                        customized tax strategies that meet your unique needs.
                                    </p>
                                </div>
                                <div className='flex gap-8'>

                                    <div className=" rounded-lg lg:w-1/2 lg:block hidden">
                                        <img src="/flip1.jpg" alt="" className='w-full h-full rounded-2xl hover:scale-105 transition-all duration-300' />
                                    </div>
                                    <div className="space-y-4">
                                        {services.map((service) => (
                                            <div key={service.id} className="flex items-center space-x-3">
                                                <CheckCircle className="w-5 h-5 text-green-600" />
                                                <span className="text-gray-700">{service.title}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>

                        {/* Compliance Section */}
                        <section className=" rounded-lg p-8 relative bottom-[80px]">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Stay Compliant and Save More with TaxNTips
                            </h2>
                            <p className="text-gray-600">
                                Avoid the stress and complexities of business tax preparation by letting TaxNTips handle your tax
                                filings accurately and efficiently. With our expert tax preparation services, you can focus on
                                growing your business while we take care of compliance and financial optimization.
                            </p>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 rounded-lg mt-[100px] sticky top-0">
                        {/* Search Section */}
                        <div className="p-6 mb-6 ">
                            <h3 className="text-2xl font-semibold text-black mb-4"><span className='relative bottom-[9px] right-2 text-orange-400'>__</span>Search</h3>
                            <div className="relative">
                                <div className='flex items-center'>
                                    <input
                                        type="text"
                                        placeholder="Search here..."
                                        className="w-full border-1 border-gray-400 text-sm rounded-l-2xl px-4 py-3 outline-none"
                                    />
                                    <button className='bg-gradient-to-r  from-orange-300 to-orange-500 text-white rounded-r-3xl p-[14px] relative -left-2'>
                                        <Search size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Related Services */}
                        <div className=" rounded-lg p-6 mb-6 relative bottom-[30px]">
                            <h3 className="text-2xl font-semibold text-black mb-4"><span className='relative bottom-[9px] right-2 text-orange-400'>__</span>Related Services</h3>
                            <div className="space-y-3">
                                {relatedServices.map((cat, i) => (
                                    <div
                                        key={i}
                                        className="flex justify-between items-center px-4 py-4 mt-4 rounded-3xl overflow-hidden
               bg-white hover:bg-gradient-to-l from-orange-400 to-orange-300
               transition-all duration-500 ease-in-out group interactive"
                                    >
                                        <span className="text-sm font-medium 
                   group-hover:text-white transition-colors duration-300">
                                            {cat.name}
                                        </span>

                                        <span className="bg-orange-100 text-orange-500 rounded-full p-2 
                     group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                                            <ArrowRight size={20} />
                                        </span>
                                    </div>
                                ))}

                            </div>
                        </div>

                        {/* Contact Card */}
                        <div className="h-[25%] bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg p-6 text-white opacity-100 px-4" style={{
                            backgroundImage: 'url(/bg-info-box.jpg)',
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            backgroundRepeat: 'no-repeat',
                            backgroundColor: '#000000'
                        }}>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 mt-9">
                                    <Phone className="w-8 h-8" />
                                </div>
                                <div className="text-4xl font-[700] mb-2">+708 688 7861</div>
                                <div className="text-white mb-2">Email Address</div>
                                <div className="text-sm text-white">support@taxntips.com</div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
        <Footer />
    </div>
}

export default BusinessTax
'use client'
import BlogCard from '@/components/blogPostCard/card'
import Footer from '@/components/footer/footer'
import Navbar2 from '@/components/navbar2/navbar2'
import axios from 'axios'
import { ArrowRight, CheckCircle, Facebook, Instagram, Linkedin, MapPin, Phone, Search, SettingsIcon, Shell, Twitter, } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface ServiceItem {
    id: string;
    title: string;
}

interface RelatedService {
    name: string;
    href: string;
}

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
    { name: 'Business Tax Preparation', href: '#' },
    { name: 'S Corp Set-up', href: '#' }
];

type BlogCardProps = {
    _id: string;
    title: string;
    post_by: string;
    image?: string;
    category?: string;
    slug?: string;
    date?: string;
    description?: string;
};

const BlogDetailPage = ({ }) => {

    const [blogsDetail, setBlogsDetail] = useState<BlogCardProps | null>(null);
    const [recentBlogs, setRecentBlogs] = useState<BlogCardProps[]>([]);
    const pathName = usePathname();
    const idFromUrl = pathName.split('/').pop();

    const fetchBlogDetails = async () => {
        try {
            const res = await axios.post(`https://taxban-2a33cb313426.herokuapp.com/blog/getOneBlogs`, {
                "_id": idFromUrl
            });
            setBlogsDetail(res.data.data);
        } catch (error) {
            console.error('Failed to fetch blog:', error);
        }
    };

    const fetchBlogs = async () => {
        try {
            try {
                const response = await axios.post('https://taxban-2a33cb313426.herokuapp.com/blog/getBlogs');
                setRecentBlogs(response.data.data.slice(0, 3));
            } catch (err) {
                console.error("Error fetching blogs:", err);
            }
        } catch (err) {
            console.error('Error fetching blogs:', err);
        }
    };

    useEffect(() => {
        if (idFromUrl) null;
        fetchBlogDetails();
        fetchBlogs();
    }, [idFromUrl])

    return <div>
        <Navbar2 />
        {/* blog banner section */}

        <div>
            {/* Banner Section */}
            <div className="relative bottom-[136px] py-32 pb-[400px]" style={{
                backgroundImage: "url('/bg-page-title1.jpg')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",

            }}>
                {/* Overlay Content */}
                <div className="about-banner-content absolute inset-0 flex flex-col justify-start text-white p-6 ">
                    {/* Top contact + icons */}
                    <div className="lg:flex justify-between py-[1vw] px-[10vw] relative lg:
             hidden mb-4">
                        <div className="flex gap-10">
                            <h1 className="mr-4 flex gap-2 text-sm">
                                <MapPin size={20} style={{ color: '#ED6F20' }} />
                                PO Box 11224 Spring, TX, United States, Texas 77379
                            </h1>
                            <h1 className="flex gap-2 text-sm">
                                <Phone size={20} style={{ color: '#ED6F20' }} />
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
                    <div className=" absolute top-64 lg:left-80 left-20">
                        {
                            blogsDetail && (
                                <h1 className="text-5xl font-bold pl-2">{blogsDetail.description}</h1>
                            )
                        }

                        <div className="py-4 mt-4 rounded-[30px] flex gap-3 justify-center items-center border-1 border-orange-400 bg-[#34393D] px-6">
                            <Link href={'/'} className="cursor-none interactive">
                                <h1>Home</h1>
                            </Link>
                            <SettingsIcon className="text-orange-400" />
                            <Link href={`/blog/`} className="cursor-none interactive">
                                <h1> Blog Detail</h1>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div className="h-2 bg-gradient-to-r from-orange-300 to-orange-500 w-[100%] rounded-b-2xl mx-auto relative bottom-[136px] " />


        {/* Blogs Detail seection  */}
        <div className="relative bottom-[130px]">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Hero Section */}
                        <section className="bg-white rounded-lg p-8 mb-8 ">
                            <div className="flex flex-col gap-8 items-center ">
                                <div>
                                    <div className="space-y-4 text-gray-600">
                                        <div className='h-104 w-full'>

                                        <img src={`${blogsDetail?.image}`} alt="" className="w-full h-full rounded-2xl" />
                                        </div>

                                        <h1 className="lg:text-5xl text-4xl font-bold">{blogsDetail?.description}</h1>
                                        <p className="text-gray-500 text-lg">
                                            Tax season can be a stressful time for small business owners. With numerous forms to fill out, deadlines to meet, and rules to follow, navigating the tax world can be daunting. However, business tax preparation is a critical aspect of running a successful business and avoiding costly mistakes. In this blog, we’ll explore why tax preparation is important for small businesses and how professional tax services can save you time, money, and stress.
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
                            <div className="gap-8 items-center pr-2">
                                <div>
                                    <p className="text-gray-600 mb-6">
                                        Our services are tailored to your business structure, industry, and financial goals, providing customized tax strategies that meet your unique needs.
                                    </p>
                                </div>
                                <div className="flex gap-8">
                                    <div className="rounded-lg lg:w-1/2 lg:block hidden">
                                        <img src="/flip1.jpg" alt="" className="w-full h-full rounded-2xl hover:scale-105 transition-all duration-300" />
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
                        <section className="rounded-lg p-8 relative bottom-[80px]">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">
                                Stay Compliant and Save More with TaxNTips
                            </h2>
                            <p className="text-gray-600">
                                Avoid the stress and complexities of business tax preparation by letting TaxNTips handle your tax filings accurately and efficiently. With our expert tax preparation services, you can focus on growing your business while we take care of compliance and financial optimization.
                            </p>
                            <div className="flex gap-4 items-center border-t-1 border-b-1 border-gray-400 py-8 px-2 my-8 rounded-lg">
                                <p className="text-black font-bold text-3xl">Share:</p>
                                <div className="flex gap-4 items-center">
                                    <img src="/AllIcons.png" alt="" className="w-60 h-20" />
                                </div>
                            </div>
                            <p className="text-black font-bold text-3xl">Leave a Comment</p>

                            <div className="mx-auto p-6 bg-white rounded-lg border-1 border-gray-300 mt-8">
                                <div className="grid grid-cols-2 gap-4 mb-4">
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        className="p-3 border-1 border-gray-300 text-gray-500 pl-4 rounded-full bg-[#F8F8F8]"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        className="p-3 border-1 border-gray-300 text-gray-500 pl-4 rounded-full bg-[#F8F8F8]"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="p-3 border-1 border-gray-300 text-gray-500 pl-4 rounded-full bg-[#F8F8F8]"
                                    />
                                    <input
                                        type="url"
                                        placeholder="Website"
                                        className="p-3 border-1 border-gray-300 text-gray-500 pl-4 rounded-full bg-[#F8F8F8]"
                                    />
                                </div>
                                <textarea
                                    placeholder="Your Comment..."
                                    className="p-3 border-1 border-gray-300 text-gray-500 pl-6 rounded-full bg-[#F8F8F8] w-full"
                                />
                                <div className="flex items-center justify-between">
                                    <button className="mx-auto mt-2 items-center bg-gradient-to-l gap-2 from-orange-300 to-orange-500 text-white px-6 py-3 rounded-full flex items-center cursor-pointer interactive">
                                        Post Comment
                                        <span className="ml-2 h-7 w-7 rounded-full bg-orange-500 p-5 flex items-center text-xl justify-center">➔</span>
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 rounded-lg mt-[100px] bg-[#F7F7F7]">
                        <div className='sticky top-20'>

                        {/* Search Section */}
                        <div className="p-6 mb-6 ">
                            <h3 className="text-2xl font-semibold text-black mb-4"><span className="relative bottom-[9px] right-2 text-orange-400">__</span>Search</h3>
                            <div className="relative">
                                <div className="flex items-center">
                                    <input
                                        type="text"
                                        placeholder="Search here..."
                                        className="w-full border-1 border-gray-400 text-sm rounded-l-2xl px-4 py-3 outline-none"
                                    />
                                    <button className="bg-gradient-to-r from-orange-300 to-orange-500 text-white rounded-r-3xl p-[14px] relative -left-2">
                                        <Search size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Related Services */}
                        <div className="rounded-lg p-6 mb-6 relative bottom-[30px]">
                            <h3 className="text-2xl font-semibold text-black mb-4"><span className="relative bottom-[9px] right-2 text-orange-400">__</span>Related Services</h3>
                            <div className="space-y-3">
                                {relatedServices.map((cat, i) => (
                                    <div
                                        key={i}
                                        className="flex justify-between items-center px-4 py-4 mt-4 rounded-3xl overflow-hidden bg-white hover:bg-gradient-to-l from-orange-400 to-orange-300 transition-all duration-500 ease-in-out group interactive cursor-pointer"
                                    >
                                        <span className="text-sm font-medium group-hover:text-white transition-colors duration-300">
                                            {cat.name}
                                        </span>

                                        <span className="bg-orange-100 text-orange-500 rounded-full p-2 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
                                            <ArrowRight size={20} />
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Posts */}
                        <div className="rounded-lg p-6 mb-6 relative bottom-[30px]">
                            <h3 className="text-2xl font-semibold text-black mb-4"><span className="relative bottom-[9px] right-2 text-orange-400">__</span>Recent Posts</h3>
                            <div className="space-y-3">
                                {recentBlogs.map((cat, i) => (
                                    <BlogCard key={i} description={cat.description}
                                        imageSrc={cat.image || '/default.jpg'}
                                        updated_at={cat.date || '2025-01-01'}
                                    />
                                ))}
                            </div>
                        </div>
                        </div>

                    </div>
                </div>
            </main>
        </div>
        <Footer />

    </div>
}

export default BlogDetailPage
'use client'
import { ArrowRight, CheckCircle, Phone, Search } from 'lucide-react';
import { NextPage } from 'next'
import BlogSection from '../blogsSection/blogs';
import Link from 'next/link';
import BlogCard from '../blogPostCard/card';
import { useEffect, useState } from 'react';
import axios from 'axios';

interface Props { }

interface RelatedService {
    name: string;
    link: string;
}

type BlogCardProps = {
    _id: string;
    title: string;
    post_by: string;
    image?: string;
    category?: string;
    slug?: string;
    date?: string;
};

const relatedServices: RelatedService[] = [
    { name: 'Bookkeeping Services', link: '/service/bookkeeping' },
    { name: 'Business & LLC Set-Up', link: '/service/llc' },
    { name: 'Business Tax Preparation', link: '/service/business-tax' },
];

const BlogContentPage: NextPage<Props> = ({ }) => {

    const [blogs, setBlogs] = useState<BlogCardProps[]>([]);

    console.log(blogs, "blogs");


    const fetchBlogs = async () => {
        try {
            try {
                const response = await axios.post('https://taxban-2a33cb313426.herokuapp.com/blog/getBlogs');
                console.log("data", response.data.data);
                setBlogs(response.data.data);
            } catch (err) {
                console.error("Error fetching blogs:", err);
            }
        } catch (err) {
            console.error('Error fetching blogs:', err);
        }
    };

    useEffect(() => {
        fetchBlogs();
    }, [])

    return <div>
        <div className="min-h-screen relative bottom-[130px]">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        {/* Hero Section */}
                        <BlogSection />
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1 rounded-lg mt-[100px] sticky top-0 bg-[#F7F7F7]">
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
                                            <Link href={`${cat.link}`}>
                                                <ArrowRight size={20} />
                                            </Link>
                                        </span>

                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Recent Posts  */}

                        <div className=" rounded-lg p-6 mb-6 relative bottom-[30px]">
                            <h3 className="text-2xl font-semibold text-black mb-4"><span className='relative bottom-[9px] right-2 text-orange-400'>__</span>Recent Posts</h3>
                            <div className="space-y-3">
                                {blogs.map((cat, i) => (
                                    <BlogCard key={i} title={cat.title}
    imageSrc={cat.image || '/default.jpg'}
    updated_at={cat.date || '2025-01-01'} />
                                ))}
                            </div>
                        </div>


                    </div>
                </div>
            </main>
        </div>
    </div>
}

export default BlogContentPage
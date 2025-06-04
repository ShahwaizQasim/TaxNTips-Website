'use client';
import { CalendarDays, MessageCircle, User } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios"; // make sure axios is imported

type BlogCardProps = {
    id: string;
    category: string;
    date: string;
    title: string;
    description: string;
    image: string;
    created_at: string;
    updated_at: string;
    slug: string;
};

const HomeBlog = () => {
    const [blogs, setBlogs] = useState<BlogCardProps[]>([]);

    const fetchBlogs = async () => {
        try {
            const response = await axios.post(
                'https://taxban-2a33cb313426.herokuapp.com/blog/getBlogs'
            );
            setBlogs(response.data.data.slice(0, 3));
        } catch (err) {
            console.error("Error fetching blogs:", err);
        }
    };

    console.log(blogs, "blogs");


    useEffect(() => {
        fetchBlogs();
    }, []);

    return (
        <section className="py-12 bg-white relative bottom-40">
            <div className="text-center mb-10">
                <p className="text-orange-500 font-bold">Our blog</p>
                <h2 className="text-3xl font-bold mt-2">Learn more from blog</h2>
                <p className="text-gray-500 mt-1">Follow our latest articles, thoughts and work updates.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
                {blogs.map((blog, index) => (
                    <Link
                        href={`/blog/${blog.slug}`}
                        key={index}
                        className="no-underline text-inherit"
                    >
                        <div className="bg-white py-4 rounded-2xl shadow-lg overflow-hidden group transition hover:shadow-xl relative interactive">
                            <img
                                src={blog.image}
                                alt={blog.title}
                                width={400}
                                height={250}
                                className="w-full h-58 object-cover group-hover:scale-105 transition-transform duration-300"
                            />

                            <div className="p-5">
                                <div className="flex items-center justify-start gap-16 text-xs mb-1">
                                    <span className="bg-gradient-to-l from-orange-500 to-orange-300 bg-clip-text text-transparent font-bold uppercase underline">
                                        {blog.title}
                                    </span>
                                    <span className="text-gray-400">{blog.created_at.slice(0, 10)}</span>
                                </div>

                                <h3 className="font-bold text-gray-900 text-[18px] leading-tight mb-3">
                                    {blog.description}
                                </h3>

                                <div className="relative inline-flex items-center gap-1 text-sm font-semibold group/link w-fit">
                                    {/* Read More text: gray initially, gradient on hover */}
                                    <span className="relative z-10 text-gray-400 font-[400] group-hover/link:text-transparent group-hover/link:bg-gradient-to-r from-orange-400 to-orange-600 bg-[length:200%_100%] bg-left bg-clip-text transition-all duration-300">
                                        Read More
                                    </span>

                                    {/* Arrow icon */}
                                    <svg
                                        className="w-4 h-4 text-gray-500 transition-transform duration-300 group-hover/link:translate-x-1"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                                    </svg>

                                    {/* Underline */}
                                    <span
                                        className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-orange-400 to-orange-600 transform scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-left"
                                    />
                                </div>


                            </div>

                            {/* Bottom gradient border on card hover */}
                            <div className="absolute bottom-0 w-full h-[7px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 rounded-b-2xl" />
                        </div>
                    </Link>

                ))}
            </div>
        </section>
    );
};

export default HomeBlog;

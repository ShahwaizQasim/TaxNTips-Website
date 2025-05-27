import React from 'react';
import Link from 'next/link';
import { CalendarDays, MessageCircleMore, Search, User } from 'lucide-react';

const posts = [
    {
        title: 'Why Bookkeeping is Essential for Small Business Success',
        image: '/flip1.jpg',
        date: '27 Feb/25',
        comments: 'No Comments',
        href: '/posts/bookkeeping-success'
    },
    {
        title: 'The Importance of Business Tax Preparation for Small Business Owners',
        image: '/flip2.jpg',
        date: '27 Feb/25',
        comments: 'No Comments',
        href: '/posts/tax-preparation'
    },
    {
        title: 'How Setting Up an S-Corp Can Benefit Your Business',
        image: '/blog.jpg',
        date: '27 Feb/25',
        comments: 'No Comments',
        href: '/posts/s-corp-benefits'
    },
];

const categories = [
    { name: 'Bookkeeping', count: 1 },
    { name: 'S-Corp', count: 1 },
    { name: 'Tax Preparation', count: 1 },
];

const BlogContentPage = () => {
    return (
        <div className="container mx-auto px-22">
            <div className="flex flex-col md:flex-row p-6 gap-8 px-44   ">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6 ">
                    {posts.map((post, idx) => (
                        <div key={idx} className=" rounded overflow-hidden group hover interactive">
                            <img src={post.image} alt={post.title} className="w-full h-48 relative -z-1 object-cover group-hover:scale-105 transition-all duration-300" />
                            <div className="p-4">
                                <Link href={post.href}>
                                    <h3 className="font-semibold text-lg hover:underline cursor-none">{post.title}</h3>
                                </Link>
                                <div className="text-[12px] bg-orange-100 text-black px-2 py-2 flex justify-around rounded-3xl items-center gap-4 mt-2">
                                    <span className='flex items-center gap-1'><span className='text-orange-500'><User size={14} /> </span> By</span>
                                    <span className='flex items-center gap-1'><span className='text-orange-500'><MessageCircleMore size={14} /> </span>{post.comments}</span>
                                    <span className='flex items-center gap-1'><span className='text-orange-500'><CalendarDays size={14} /> </span>{post.date}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <aside className="w-full md:w-[300px] space-y-8 bg-[#F7F7F7] px-6 py-6 rounded-lg">
                    <div className='flex items-center'>
                        <input
                            type="text"
                            placeholder="Search here..."
                            className="w-full border-1 border-gray-400 text-sm rounded-l-2xl px-4 py-3"
                        />
                        <button className='bg-gradient-to-r  from-orange-300 to-orange-500 text-white rounded-r-3xl p-[14px] relative -left-2'>
                            <Search size={20} />
                        </button>
                    </div>

                    <div>
                        <h4 className="font-semibold pb-1 mb-2"><span className='relative bottom-[6px] right-1 text-orange-400'>___</span>Categories</h4>
                        {categories.map((cat, i) => (
                            <div key={i} className="flex px-4 bg-white hover:scale-105 transition-all duration-300 justify-between py-4 rounded-3xl mt-4">
                                <span className='text-sm'>{cat.name}</span>
                                <span className="text-sm bg-orange-200 text-orange-500 rounded-full px-2">
                                    {cat.count.toString().padStart(2, '0')}
                                </span>
                            </div>
                        ))}
                    </div>

                    <div>
                        <h4 className="font-semibold pb-1 mb-2"><span className='relative bottom-[6px] right-1 text-orange-400'>___</span>Recent Posts</h4>
                        {posts.map((post, idx) => (
                            <div key={idx} className="flex px-2 py-4 bg-white  items-start gap-2 mb-4">
                                <img src={post.image} alt={post.title} className="w-16 h-16 object-cover rounded" />
                                <div>
                                    <Link href={post.href}>
                                        <p className="text-[14px] font-bold hover:underline leading-snug">
                                            {post.title}
                                        </p>
                                    </Link>
                                    <div className="text-[10px] text-gray-500 bg-orange-100 px-1 py-2 rounded-3xl flex justify-between items-center gap-2">
                                        <span className='flex items-center gap-1'><span className='text-orange-500'><User size={14} /></span>{post.date}</span>
                                        <span className='flex items-center gap-1'><span className='text-orange-500'><MessageCircleMore size={14} /></span>{post.comments}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </aside>
            </div>
        </div>

    );
};

export default BlogContentPage;

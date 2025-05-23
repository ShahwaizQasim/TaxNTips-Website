import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import BlogCard from '../BlogCard/card';

type BlogCardProps = {
    category: string;
    date: string;
    title: string;
    image: string;
    slug: string;
};

const blogPosts: BlogCardProps[] = [
    {
        category: 'BOOKKEEPING',
        date: '27 FEB, 2025',
        title: 'Why Bookkeeping is Essential for Small Business Success',
        image: '/rotate1.jpg',
        slug: '/blog/bookkeeping-basics'
    },
    {
        category: 'TAX PREPARATION',
        date: '27 FEB, 2025',
        title: 'The Importance of Business Tax Preparation for Small Business Owners',
        image: '/rotate2.jpg',
        slug: '/blog/tax-prep-importance'
    },
    {
        category: 'S-CORP',
        date: '27 FEB, 2025',
        title: 'How Setting Up an S-Corp Can Benefit Your Business',
        image: '/blog.jpg',
        slug: '/blog/s-corp-benefits'
    }
];

const BlogSection = () => {
    return (
        <section className="py-20 bg-white text-center">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex items-center gap-1 justify-center mb-4">
                    <h3 className="text-black border-b-2 border-orange-600 text-[0.8rem] font-semibold tracking-wide">
                        Our blog
                    </h3>
                </div>
                <h2 className="lg:text-5xl md:text-4xl lg:font-bold mb-2">Learn more from blog</h2>
                <p className="text-gray-600 mb-10">Follow our latest articles, thoughts and work updates.</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <BlogCard key={index} {...post} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;

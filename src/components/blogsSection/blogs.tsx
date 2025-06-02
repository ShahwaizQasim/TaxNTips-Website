'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import BlogPageCard from '../BlogPageCard/blockPageCard';

type BlogCardProps = {
    category: string;
    date: string;
    title: string;
    post_by: string;
    updated_at: string;
    image: string;
    slug: string;
};

const BlogSection = () => {

    const [blogs, setBlogs] = useState<BlogCardProps[]>([]);
    const [error, setError] = useState();

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

    return (
        <section className="py-20 bg-white text-center">
            <div className="max-w-6xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {blogs.map((post, index) => (
                        <BlogPageCard 
                        key={index}
    category={post.category || 'Blog'}
    date={post.date || 'N/A'}
    title={post.title}
    image={post.image || '/default.jpg'}
    post_by={post.post_by || 'Admin'}
    updated_at={post.updated_at || post.date || '2025-01-01'}
    slug={post.slug || '#'}
                         />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;

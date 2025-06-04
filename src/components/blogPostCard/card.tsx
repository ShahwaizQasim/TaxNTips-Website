'use client'
import { FC } from 'react';
import { User, MessageCircle } from 'lucide-react';

interface BlogCardProps {
    imageSrc: string;
    title: string;
    updated_at: string;
}

const BlogCard: FC<BlogCardProps> = ({ imageSrc, title, updated_at }: BlogCardProps) => {
    return (
        <div className="bg-white rounded-xl shadow p-4 pr-2 flex gap-4 items-start w-[100%]">
            <img
                src={imageSrc}
                alt={title}
                className="w-16 h-16 rounded-md object-cover"
            />
            <div className="flex-1">
                <h2 className="font-semibold text-sm text-wrap text-gray-900 leading-snug">
                    {title}
                </h2>
                <div className="mt-3 flex items-center gap-6 text-sm text-gray-600 bg-[#fff2ef] px-4 py-2 rounded-full w-max">
                    <span className="flex items-center gap-1 text-[10px]">
                        <User className="text-orange-500 text-[10px]" />
                        {updated_at.slice(0,10)}
                    </span>
                    <span className="flex items-center gap-1 text-[10px]">
                        <MessageCircle className="text-orange-500 text-[10px]" />
                        No Comments
                    </span>
                </div>
            </div>
        </div>
    );
};

export default BlogCard;

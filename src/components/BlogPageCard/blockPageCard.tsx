'use client'
import { CalendarDays, MessageCircle, User } from "lucide-react";
import Link from "next/link";

type BlogCardProps = {
  id: string,
  category: string;
  date: string;
  title: string;
  image: string;
  post_by: string;
  updated_at: string,
  slug: string;
  description?: string;
}

const BlogPageCard = ({ category, title, date, image, post_by, updated_at, id, slug, description }: BlogCardProps) => (
  <>
    <Link href={`/blog/${id}`} className="no-underline text-inherit">
      <div className="bg-white rounded-2xl overflow-hidden transition group relative">
        <img
          src={image}
          alt={title}
          width={400}
          height={250}
          className="w-full h-52 object-cover group-hover:scale-105 transition-all duration-300"
        />

        <div className="p-5">
          {/* Top row: category and date */}
          <div className="flex items-center justify-between">
            <div className="text-[14px] bg-gradient-to-l from-orange-500 to-orange-300 bg-[length:200%_100%] bg-left
                      bg-clip-text text-transparent font-bold uppercase underline">
              {title}
            </div>
            <div className="text-xs text-gray-500">{updated_at.slice(0, 10)}</div>
          </div>

          {/* Title - Left aligned */}
          <h3 className="font-bold text-gray-900 text-[18px] mt-2 mb-3 text-left">
            {description}
          </h3>
          <div className="mt-3 flex items-center gap-6 text-sm text-gray-600 bg-[#fff2ef] px-4 py-2 rounded-full w-full">
            <span className="flex items-center gap-1 text-[11px]">
              <User className="text-orange-500 text-[11px]" />
              {post_by}
            </span>
            <span className="flex items-center gap-1 text-[11px]">
              <MessageCircle className="text-orange-500 text-[11px]" />
              No Comments
            </span>
            <span className="flex items-center gap-1 text-[11px]">
              <CalendarDays className="text-orange-500 text-[11px]" />
              {updated_at.slice(0, 10)}
            </span>
          </div>
        </div>
      </div>
    </Link>

  </>
);

export default BlogPageCard
import { ArrowRight } from "lucide-react";
import Link from "next/link";

type BlogCardProps = {
  category: string;
  date: string;
  title: string;
  image: string;
  slug: string;
}

const BlogCard = ({ category, date, title, image, slug }: BlogCardProps) => (
  <>

    <div className="bg-white rounded-2xl shadow-md overflow-hidden transition hover:shadow-lg group relative">
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
            {category}
          </div>
          <div className="text-xs text-gray-500">{date}</div>
        </div>

        {/* Title - Left aligned */}
        <h3 className="font-bold text-gray-900 text-[18px] mt-2 mb-3 text-left">
          {title}
        </h3>

        {/* Read More link */}
        <Link href={slug} className="text-sm font-semibold text-gray-500 flex items-center gap-1 hover:text-orange-500 text-left">
          Read More <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      {/* Hidden by default, visible only on hover */}
      <div className="absolute bottom-0 left-0 w-full h-[10px] bg-gradient-to-r from-orange-300 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 rounded-b-2xl" />
    </div>

  </>
);

export default BlogCard
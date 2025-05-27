import { NextPage } from "next";
import { Facebook, Linkedin, Instagram, SettingsIcon } from "lucide-react";
import Link from "next/link";

interface Props {}

const BlogBannerSection: NextPage<Props> = ({}) => {
  return (
    <>
      <div>
        {/* Banner Section */}
        <div className="relative bottom-[136px]">
          {/* Background Image */}
          <img
            src="/about-banner.jfif"
            alt="Flip Phone"
            className="w-full h-[30vw] object-fill brightness-[0.5]"
          />

          {/* Overlay Content */}
          <div className="about-banner-content absolute inset-0 flex flex-col justify-start text-white p-6 ">
            {/* Top contact + icons */}
            <div className="flex justify-between py-[1vw] px-[10vw] relative bottom-[20px]">
              <div className="flex">
                <h1 className="mr-4 relative ">
                  PO Box 11224 Spring, TX, United States, Texas 77379
                </h1>
                <h1>+786 688 7861</h1>
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
          <div className=" absolute top-64 left-80">
            <h1 className="text-5xl font-bold">Blog</h1>
            <div className="py-4 px-6 mt-4 rounded-[30px] flex gap-3 justify-center items-center border-1 border-orange-400 bg-[#34393D]">
                <Link href={'/'} className="cursor-none interactive">
                <h1>Home</h1>
                </Link>
                <SettingsIcon className="text-orange-400" />
                <Link href={'/about'} className="cursor-none interactive">
                <h1> Blog</h1>
                </Link>
            </div>
          </div>
          </div>

        </div>
      </div>
      <div className="h-2 bg-gradient-to-r from-orange-300 to-orange-500 w-[100%] rounded-b-2xl mx-auto relative bottom-[136px] " />
    </>
  );
};

export default BlogBannerSection;

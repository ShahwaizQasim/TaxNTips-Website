import { NextPage } from "next";
import { Facebook, Linkedin, Instagram, SettingsIcon, MapPin, Phone } from "lucide-react";
import Link from "next/link";

interface Props { }

const BannerSection: NextPage<Props> = ({ }) => {
  return (
    <>
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
            <div className="lg:flex justify-between py-[1vw] px-[10vw] relative lg:block hidden py-4 mb-4">
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
            <div className=" absolute top-64 lg:left-80 left-20  ">
              <h1 className="text-5xl font-bold">Contact us</h1>
              <div className="py-4 mt-4 rounded-[30px] flex gap-3 justify-center items-center border-1 border-orange-400 bg-[#34393D]">
                <Link href={'/'} className="cursor-none interactive">
                  <h1>Home</h1>
                </Link>
                <SettingsIcon className="text-orange-400" />
                <Link href={'/contact'} className="cursor-none interactive">
                  <h1> Contact us</h1>
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

export default BannerSection;

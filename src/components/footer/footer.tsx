import Link from 'next/link';
import {
  Facebook,
  Instagram,
  Linkedin
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0D0D0D] text-white py-16 px-6 md:px-20 w-full">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 pt-10 border-b border-t border-gray-700 pb-10">
        {/* Logo and description */}
        <div>
          <img src="/nav-logo.png" alt="Tax N Tips Logo" className='w-[65%]' />
          <p className="text-[14px] mt-4 text-white">
            At Tax N Tips, we believe that smart tax planning and strategic financial management are the cornerstones of financial success.
          </p>
          <Link href={'/about'}>
            <button className="mt-4 bg-gradient-to-r from-orange-400 cursor-pointer to-orange-600 hover:opacity-90 text-white interactive font-semibold py-2 px-4 rounded-full text-sm">
              Read More
            </button>
          </Link>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-2xl font-bold mb-4">Resources</h3>
          <ul className="space-y-4 text-gray-300 text-[16px]">
            <li className="flex items-center gap-2"><img src="/arrow copy.png" alt="arrow" className='w-8 h-8' /> Bookkeeping Services</li>
            <li className="flex items-center gap-2"><img src="/arrow copy.png" alt="arrow" className='w-8 h-8' /> Business Tax Preparation</li>
            <li className="flex items-center gap-2"><img src="/arrow copy.png" alt="arrow" className='w-8 h-8' /> Tax Strategy & Reduction Planning</li>
            <li className="flex items-center gap-2"><img src="/arrow copy.png" alt="arrow" className='w-8 h-8' /> Business & LLC Set-Up</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-2xl  font-bold mb-4">Company</h3>
          <ul className="space-y-4 text-[16px] text-gray-300 interactive    ">
            <li className="flex items-center gap-2 ">
              <img src="/phone.png" alt="" className='w-10 h-10' /> +786 688 7861
            </li>
            <li className="flex items-center gap-2">
              <img src="/email.png" alt="" className='w-10 h-10' /> info@taxntips.com
            </li>
            <li className="flex items-center gap-2">
              <img src="/linkIcon.png" alt="" className='w-10 h-10' /> 7717 Louetta Rd, #11224, Spring, TX 77379
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-2xl font-bold">Join Newsletter</h3>
          <div className="flex gap-4 relative lg:left-12 left-0 text-white text-lg mt-12">
            <Link href="#"><Facebook className="hover:text-orange-400 w-5 h-5" /></Link>
            <Link href="#"><Linkedin className="hover:text-orange-400 w-5 h-5" /></Link>
            <Link href="#"><Instagram className="hover:text-orange-400 w-5 h-5" /></Link>
          </div>
        </div>
      </div>

      <div className="text-center text-sm mt-6 text-white">
        © Copyright 2025 | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

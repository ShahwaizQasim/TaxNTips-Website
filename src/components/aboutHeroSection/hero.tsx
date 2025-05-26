import Image from 'next/image';

export default function HeroSection() {
  return (
    <section className="flex relative z-50 flex-col lg:flex-row bg-black items-center justify-between px-6 lg:px-24 py-12 bg-white">
      {/* Left Side - Image Stack */}
      <div className="relative w-full lg:w-1/2 mb-10 lg:mb-0">
        <div className="relative -z-1 w-4/5 h-[450px]">
          <Image
            src="/team-1.jpg"
            alt="Team Working"
            fill
            className="object-cover rounded-xl shadow-lg"
          />
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-white shadow-xl p-4 rounded-xl flex items-center space-x-4">
          <Image
            src="/client-avatar.jpg"
            alt="Client"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div>
            <p className="text-xl font-bold">500+</p>
            <p className="text-gray-600 text-sm">Satisfied Clients</p>
          </div>
        </div>
        <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-tr-xl rounded-bl-xl">
          <p className="text-lg font-bold leading-tight">10</p>
          <p className="text-xs">Years of Experiences</p>
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="w-full lg:w-1/2">
        <p className="text-orange-500 font-semibold mb-2">Welcome to Tax n Tips</p>
        <h1 className="text-4xl font-extrabold mb-6 leading-tight text-gray-900">
          Your Trusted Partner in Tax & Business Solutions
        </h1>
        <p className="text-gray-700 mb-6">
          At Tax N Tips, we believe that smart tax planning and strategic financial management are the cornerstones of financial success. Whether you’re an individual, a small business owner, or a corporation, our expert tax and business advisory services ensure that you maximize your savings, stay compliant with tax regulations, and build a strong financial future.
        </p>

        <div>
          <div className="flex space-x-4 border-b border-gray-300 mb-4">
            <button className="text-orange-500 font-semibold pb-2 border-b-2 border-orange-500">Our Mission</button>
            <button className="text-gray-700 font-semibold pb-2">Our Vision</button>
          </div>
          <div className="flex items-start space-x-4">
            <svg className="w-6 h-6 text-orange-500 mt-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
            </svg>
            <p className="text-gray-700">
              At Tax N Tips, our mission is to empower individuals and businesses with expert tax strategies, financial solutions, and business advisory services that maximize savings, ensure compliance, and foster long-term financial success.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

import Image from 'next/image'

export default function ChooseTax() {
  return (
    <section className="w-full px-4 md:px-24 flex flex-col-reverse md:flex-row items-center justify-between relative overflow-hidden py-52"
        style={{
            backgroundImage: 'url("/h2-bg-section4.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
        }}  
    >
      {/* Left Side - Image & Text */}
      <div className="relative w-full md:w-1/2 flex justify-center md:justify-start">
        <Image
          src="/h2-banner-8.png"
          alt="Thumbs up guy"
          width={650}
          height={600}
          className="z-10 relative top-0 left-50"
        />

        {/* Chart and Graph Mockups */}
        <div className="absolute left-64 top-[60%] z-20 bg-white shadow-md rounded-md p-2">
          <Image src="/h1-shape-3.png" alt="Bar chart" width={120} height={40} />
        </div>
        <div className="absolute right-0 bottom-[17%] z-20  shadow-md rounded-md p-2">
          <Image src="/line-chart.png" alt="Line chart" width={200} height={160} />
        </div>
        <div className="absolute right-6 top-[20%] z-20 ">
          <Image src="/h2-section-text1.png" alt="Line chart" width={200} height={160} />
        </div>
      </div>

      {/* Right Side - Text */}
      <div className="w-full md:w-1/2 text-center md:text-left relative left-6 ">
        <p className="text-orange-500 font-semibold text-sm mb-2">
          ✨ Why you choose Us?
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
          Why Choose Tax N Tips as Your Trusted Partner?
        </h1>
        <p className="text-gray-600 mb-6">
          At TaxNTips, we are dedicated to helping individuals and businesses achieve financial success through expert tax strategies, business consulting, and financial planning solutions. Whether you're a startup looking for business formation guidance or an established company aiming to optimize tax savings and streamline operations, we provide tailored solutions, expert advice, and ongoing support to drive your success.
        </p>
        <ul className="text-left space-y-3 mb-6">
          <li className="flex items-center gap-2 font-bold">
            <img src="/icon-check1.png" alt="icon2" />
            Strategic Tax Planning
          </li>
          <li className="flex items-center gap-2 font-bold">
            <img src="/icon-check1.png" alt="icon2" />
            Reliable Expertise
          </li>
          <li className="flex items-center gap-2 font-bold">
            <img src="/icon-check1.png" alt="icon2" />
            Business Growth Support
          </li>
        </ul>
        <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full font-semibold interactive shadow-md hover:scale-105 transition">
          Learn More
        </button>
      </div>
    </section>
  );
}

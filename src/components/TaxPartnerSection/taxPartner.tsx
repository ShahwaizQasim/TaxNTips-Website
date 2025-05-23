import React from 'react';
import { Star, ArrowRight, Monitor, TrendingUp, Award } from 'lucide-react';
import ValueCard from '../ValueCard/value';

const TaxPartnerSection: React.FC = () => {
  const values = [
    {
      icon: <Monitor className="w-8 h-8 text-gray-700" />,
      title: "Our Mission",
      description: "We aim to provide proactive, reliable, & results-driven services for our clients to make informed decisions."
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-gray-700" />,
      title: "Our Vision",
      description: "We envision a future where every business & individual has access to professional & financial solutions."
    },
    {
      icon: <Award className="w-8 h-8 text-gray-700" />,
      title: "Our Values",
      description: "Our services are designed to meet the unique needs of client, ensuring tailored & personalized solutions."
    }
  ];

  const principles = [
    "Integrity & Trust",
    "Expertise & Innovation",
    "Commitment to Excellence"
  ];

  return (
    <div className="min-h-screen bg-[#FFFFFF] py-16 relative bottom-14">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <Star className="w-5 h-5 text-orange-500 fill-current" />
          <span className="text-orange-500 font-medium text-sm">Our Trusted Partner</span>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Left Content */}
          <div className="lg:col-span-2 space-y-4">
            <div>
              <h1 className="text-5xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
                Your Partner in Smart
                <br />
                <span className="text-gray-900">Tax & Business</span>
                <br />
                <span className="text-gray-900">Solutions</span>
              </h1>
            </div>

            {/* Principles List */}
            <div className="space-y-4">
              {principles.map((principle, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                    <ArrowRight className="w-3 h-3 text-white" />
                  </div>
                  <span className="text-lg font-semibold text-gray-900">{principle}</span>
                </div>
              ))}
            </div>

            {/* Learn More Button */}
            <div className="pt-4">
              <button className="group cursor-none interactive bg-black hover:bg-gray-800 text-white px-8 py-2 rounded-full font-semibold text-lg transition-all duration-200 shadow-lg hover:shadow-xl flex items-center gap-3">
                Learn More
                <div className='bg-white rounded-full p-1'>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform text-black duration-200" />
                </div>
              </button>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="lg:col-span-3 space-y-6 bg-[#F7F7F7] p-10 pb-40 rounded-[10%] relative">
            <p className="text-lg text-gray-600 mb-8">
              Simplify tax planning, enhance financial efficiency, and empower businesses with the
              right strategies for long-term success. Whether you're a small business owner, a startup
              entrepreneur, or an individual looking to optimize your tax savings, we are here to guide you every
              step of the way.
            </p>

            <div className="flex flex-col sm:flex-row gap-2 absolute ">
              {values.map((value, index) => (
                <ValueCard
                  key={index}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>
          </div>
        </div>

    
      </div>
    </div>
  );
};

export default TaxPartnerSection;
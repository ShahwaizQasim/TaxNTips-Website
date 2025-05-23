import { ChevronDown, ChevronUp } from 'lucide-react';

const testimonials = [
    {
        name: 'Michael R.',
        role: 'Business Owner',
        image: '/h2-testimonial-thumb-1.png',
        feedback: `Tax N Tips has been a game-changer for my business! Their expert guidance helped me set up my LLC and create a tax strategy that saved me thousands. The team is professional, knowledgeable, and always available when I need them. I highly recommend their services!`
    },
    {
        name: 'Sara K.',
        role: 'Startup Founder',
        image: '/h2-testimonial-thumb-2.png',
        feedback: `Very responsive and supportive. Helped us streamline all our filings. Will be working with them long-term!`
    },
    {
        name: 'Anita P.',
        role: 'Real Estate Agent',
        image: '/h2-testimonial-thumb-3.png',
        feedback: `From S-Corp setup to tax planning, everything was handled smoothly. Amazing service!`
    }
];

export default function TestimonialSection() {
    const active = testimonials[0];

    return (
        <section className="py-24 bg-white text-center px-4">
            {/* Main Testimonial */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 items-center">
                {/* Side avatars */}
                <div className="flex flex-col items-center gap-6 relative">
                    <ChevronUp className="w-4 h-4 text-black mb-1" />
                    {testimonials.map((t, i) => (
                        <div
                            key={i}
                            className={`rounded-full w-[100px] h-[100px] overflow-hidden border-2 ${t.name === active.name ? 'border-orange-500' : 'border-transparent'}`}
                        >
                            <img src={t.image} alt={t.name} width={56} height={56} className="object-cover w-full h-full" />
                        </div>
                    ))}
                    <ChevronDown className="w-4 h-4 text-black mt-1" />
                </div>

                {/* Large avatar */}
                <div className="flex justify-center relative -left-20">
                    <div className="w-[400px] h-[400px] rounded-full overflow-hidden shadow-md">
                        <img src={'/h2-testimonial-1.png'} alt={"image"} width={300} height={300} className="object-cover w-full h-full" />
                    </div>
                </div>
                
                {/* Text content */}
                <div className="text-left space-y-4 px-2 py-6 relative -left-10">
                    <div className="text-sm text-orange-500 italic">★ Our Feedback</div>
                    <h2 className="lg:text-4xl lg:font-[800]">What People Say<br />About Us</h2>
                    <p className="text-gray-500 text-sm">{active.feedback}</p>
                    <p className="mt-10 text-[16px] text-gray-700 ">
                        {active.role} <br />
                        <span className="bg-gradient-to-r from-orange-500 to-orange-300 bg-[length:200%_100%] bg-left
                      bg-clip-text text-transparent font-bold">{active.name}</span>
                    </p>
                </div>
            </div>
        </section>
    );
}

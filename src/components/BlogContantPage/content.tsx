import { Mail, MapPin, Phone } from "lucide-react";

const ContactContent = () => {
    return (
        <div className="p-4 sm:p-6 md:p-10 max-w-screen-xl h-fit mx-auto relative z-0 bottom-24">
            <h3 className="text-orange-500 font-bold text-sm text-center mb-2">Contact Us</h3>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-8 text-center">
                We are always available to help you
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                {/* Contact Info Boxes */}
                <div className="space-y-6 bg-orange-50 rounded-lg p-6 shadow">
                    {[
                        {
                            icon: <Mail size={32} className="text-orange-300" />,
                            title: "Email",
                            content: "support@taxntips.com",
                        },
                        {
                            icon: <Phone size={32} className="text-orange-300" />,
                            title: "Phone Number",
                            content: "+786 688 7861",
                        },
                        {
                            icon: <MapPin size={32} className="text-orange-300" />,
                            title: "Location",
                            content: "7717 Louetta Rd, #11224 Spring, TX 77379",
                        },
                    ].map(({ icon, title, content }, i) => (
                        <div key={i} className="bg-white rounded-lg p-6 shadow flex gap-4 items-center">
                            <div>{icon}</div>
                            <div>
                                <div className="font-bold text-lg mb-1">{title}</div>
                                <div className="text-gray-600">{content}</div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Form */}
                <form className="bg-[#F7F7F7] border border-gray-300 py-8 px-6 sm:px-8 rounded-lg shadow space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-4 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-4 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full p-4 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition"
                    />
                    <textarea
                        placeholder="Your Message Here..."
                        className="w-full h-32 px-4 py-3 bg-white rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-400 transition resize-none"
                    />
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-orange-300 to-orange-500 text-white font-semibold py-3 rounded-2xl hover:from-orange-400 hover:to-orange-600 transition"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactContent;

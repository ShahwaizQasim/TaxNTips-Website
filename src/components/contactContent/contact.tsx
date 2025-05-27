import { Mail, MapPin, Phone } from "lucide-react";

;

const ContactContent = () => {
    return (
        <div className="p-6 max-w-screen-xl mx-auto relative -z-10 bottom-24">
            <h3 className="text-orange-500 font-bold text-sm text-center mb-2">Contact Us</h3>
            <h1 className="text-3xl md:text-5xl font-bold mb-8 text-center">we are always available to help you</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Contact Info Boxes */}
                <div className="space-y-6 bg-orange-50 rounded-lg p-6 shadow">
                    <div className="bg-white rounded-lg p-6 shadow flex gap-2">
                        <div>
                            <span className="text-orange-300"><Mail size={32} /></span>
                        </div>
                        <div>

                            <div className=" flex gap-2 font-bold text-lg mb-1"> Address</div>
                            <div className="text-gray-600 ">support@taxntips.com</div>
                        </div>

                    </div>
                    <div className="bg-white rounded-lg p-6 shadow flex gap-2">

                        <div>
                            <span className="text-orange-300"><Phone size={32} /></span>
                        </div>
                        <div>

                            <div className=" flex gap-2 font-bold text-lg mb-1">Phone Number</div>
                            <div className="text-gray-600">+786 688 7861</div>
                        </div>

                    </div>
                    <div className="bg-white rounded-lg p-6 shadow flex gap-2">
                        <div>
                            <span className="text-orange-300"><MapPin size={32} /></span>
                        </div>
                        <div>
                            <div className=" flex gap-2 font-bold text-lg mb-1">Location</div>
                            <div className="text-gray-600">7717 Louetta Rd, #11224 Spring, TX 77379</div>
                        </div>

                    </div>
                </div>

                <form className="bg-[#F7F7F7] border-1 border-gray-300 py-8 px-8 rounded-lg shadow space-y-4">
                    <input
                        type="text"
                        placeholder="Name"
                        className="w-full p-4 py-3 bg-white rounded-2xl  focus:outline-none"
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-4 py-3 bg-white rounded-2xl focus:outline-none"
                    />
                    <input
                        type="tel"
                        placeholder="Phone Number"
                        className="w-full p-4 py-3 bg-white rounded-2xl focus:outline-none"
                    />
                    <textarea
                        placeholder="Your Message Here..."
                        className="w-full h-32 px-4 py-2 p-4  bg-white rounded-2xl  focus:outline-none"
                    />
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r  from-orange-300 to-orange-500 text-white font-semibold py-3 rounded-2xl hover:bg-orange-600 interactive"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
};

export default ContactContent;

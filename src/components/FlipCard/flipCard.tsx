import Link from "next/link";

interface FlipCardProps {
    service: any;
}

const FlipCard: React.FC<FlipCardProps> = ({ service }) => {
    return (
        <div className="group perspective w-full h-80 mt-4">
            <div className="relative preserve-3d w-full h-full transition-transform duration-700 group-hover:rotate-y-180 rounded-xl">
                {/* Front */}
                <div className="absolute inset-0 bg-transparent bg-opacity-80 border border-gray-700 rounded-xl p-8 flex flex-col justify-start backface-hidden">
                    <div className="mb-6">{service.icon}</div>
                    <h3 className="lg:text-2xl md:text-2xl sm:text-xl font-semibold text-white mb-4">{service.title}</h3>
                    <p className="text-gray-300 lg:text-lg md:text-sm leading-relaxed">{service.description}</p>
                </div>

                {/* Back */}
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600 to-orange-700 border rounded-xl p-8 flex flex-col justify-center backface-hidden rotate-y-180 Flip"
                    style={{ backgroundImage: `url(${service.backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
                >
                    <div className="flex justify-center items-center">
                        <Link href={service.link}>
                        <button className=" interactive cursor-pointer bg-gradient-to-r  from-orange-300 to-orange-500 cursor-none hover:bg-orange-600 text-white px-8 py-3 rounded-full font-semibold text-lg transition-colors duration-200 shadow-lg hover:shadow-xl  ">Read More</button>
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default FlipCard;
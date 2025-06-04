import { ArrowRight } from "lucide-react";
import Link from "next/link";

interface ValueCardProps {
    icon: React.ReactElement;
    title: string;
    description: string;
    link: string
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description, link }) => {
    return (
        <Link href={link}>
            <div className="group relative bg-white rounded-2xl p-6 shadow-lg pb-10 hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden interactive min-h-48">
                {/* Default State */}
                <div className="relative z-10 transition-all duration-300 group-hover:opacity-0">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl group-hover:text-orange-500 flex items-center justify-center mb-6">
                        {icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{title}</h3>
                    <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>

                {/* Hover State with Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-black opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-2xl">
                    <div className="relative h-full p-8 flex flex-col justify-between">
                        {/* Decorative Elements */}
                        <div className="absolute top-[-10px] right-[-10px]">
                            <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center">
                                <ArrowRight className="w-8 h-8 text-white" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="mt-4">
                            <div className="w-12 h-12 text-orange-500 rounded-lg flex items-center justify-center mb-4">
                                {icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{title}</h3>
                            <p className="text-gray-300 leading-relaxed">{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Link>

    );
};

export default ValueCard;
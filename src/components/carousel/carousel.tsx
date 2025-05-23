'use client'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './carousel.css'

function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: 15, zIndex: 2 }}
            onClick={onClick}
        />
    );
}

function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: 15, zIndex: 2 }}
            onClick={onClick}
        />
    );
}

export default function Carousel() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
    };

    return (
        <div className="w-[100%] h-[800px] relative bottom-[130px] left-0">
            <Slider {...settings}>
                <div className="w-full h-[800px] flex items-center relative z-10 justify-center bg-Image">
                </div>
                <div className="w-full h-[800px] bg-green-400 flex items-center justify-center bg-Image1">
                </div>
                <div className="w-full h-[800px] bg-blue-400 flex items-center justify-center bg-Image2">
                </div>
                <div className="w-full h-[800px] bg-blue-400 flex items-center justify-center bg-Image3">
                </div>
            </Slider>
        </div>
    );
}
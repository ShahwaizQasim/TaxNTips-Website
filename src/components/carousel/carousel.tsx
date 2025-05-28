'use client';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './carousel.css';

function NextArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', right: 15, zIndex: 2 }}
      onClick={onClick}
    />
  );
}

function PrevArrow(props: any) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: 'block', left: 15, zIndex: 2 }}
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
    responsive: [
      {
        breakpoint: 1024, // Tablet and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // Mobile landscape and below
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false, // Hide arrows on smaller screens
          dots: true,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 425, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: false,
          dots: true,
        },
      },
    ],
  };

  return (
    <div className="w-full max-w-full">
      <Slider {...settings}>
        <div
          className="w-full h-[800px] lg:h-[800px] md:h-[600px] sm:h-[400px] h-[300px] flex items-center justify-center relative z-10 bg-Image"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        >
          {/* Add content if needed */}
        </div>
        <div
          className="w-full h-[800px] lg:h-[800px] md:h-[600px] sm:h-[400px] h-[300px] flex items-center justify-center bg-green-400 bg-Image1"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        >
          {/* Add content if needed */}
        </div>
        <div
          className="w-full h-[800px] lg:h-[800px] md:h-[600px] sm:h-[400px] h-[300px] flex items-center justify-center bg-blue-400 bg-Image2"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        >
          {/* Add content if needed */}
        </div>
        <div
          className="w-full h-[800px] lg:h-[800px] md:h-[600px] sm:h-[400px] h-[300px] flex items-center justify-center bg-blue-400 bg-Image3"
          style={{ backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
        >
          {/* Add content if needed */}
        </div>
      </Slider>
    </div>
  );
}

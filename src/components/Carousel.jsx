import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
// Custom Next Button
const NextButton = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute right-1/4 -bottom-16 md:-top-20 md:right-6 h-12 hover:text-red-500 cursor-pointer"
    >
      <div className="shadow-xl bg-white w-12 h-12 rounded-full flex items-center justify-center  ">
        <FaAngleRight className=""/>
      </div>

    </div>
  );
};

// Custom Prev Button
const PrevButton = (props) => {
  const { onClick } = props;
  return (
    <div
      onClick={onClick}
      className="absolute -bottom-16 left-1/3  md:-top-20 md:left-[calc(100%-140px)] cursor-pointer hover:text-red-500"
    >
      <div className="shadow-xl bg-white w-12 h-12 rounded-full flex items-center justify-center  ">
        <FaAngleLeft />
      </div>

    </div>
  );
};

const Carousel = ({ foods }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextButton />,
    prevArrow: <PrevButton />,
    responsive: [
      {
        breakpoint:1920,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint:1440,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="">
      <Slider {...settings} className="">
        {foods.map((food, index) => (
          <div key={index} className=" text-center ">
            <div className="bg-white relative w-full  md:w-[220px] md:h-[240px] lg:w-[310px] lg:h-[310px] mx-auto p-2">
              <img
                src={food.image}
                alt={`Slide ${index + 1}`}
                className="w-full p-2"
              />
              <h1 className="bebas-neue text-2xl font-semibold">{food.foodName}</h1>
              <p className="roboto text-base">{food.title}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;



// absolute right-1/3 -bottom-16 md:-top-24 md:right-0 h-12
// absolute  -bottom-16 left-1/3   md:-top-24 md:left-[37rem] lg:left-[53rem] xl:left-[79rem] 2xl:left-[149rem] h-12
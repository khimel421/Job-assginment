import React from 'react'
import ReviewVideo from './ReviewVideo'
import { RiDoubleQuotesL } from "react-icons/ri";
import Slider from 'react-slick';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6';



export default function VideoCarousel() {
    // Custom Next Button
    const NextButton = (props) => {
        const { onClick } = props;
        return (
            <div
                onClick={onClick}
                className="right-btn absolute right-[calc(100%-210px)] -bottom-16 md:-top-20 md:right-6 h-12 hover:text-red-500 cursor-pointer"
            >
                <div className="shadow-xl bg-white w-12 h-12 rounded-full flex items-center justify-center  ">
                    <FaAngleRight className="" />
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
                className="left-btn absolute -bottom-16 left-[calc(100%-220px)]  md:-top-20 md:left-[calc(100%-140px)] cursor-pointer hover:text-red-500"
            >
                <div className="shadow-xl bg-white w-12 h-12 rounded-full flex items-center justify-center  ">
                    <FaAngleLeft />
                </div>

            </div>
        );
    };

    const elements = [];
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextButton />,
        prevArrow: <PrevButton />,
    };

    for (let i = 0; i < 4; i++) {
        elements.push(
            <div key={i}>
                <section className='bg-customYellow lg:flex lg:flex-row-reverse '>
                    <ReviewVideo />
                    <section className=''>
                        <div className=' p-4 relative'>
                            <RiDoubleQuotesL className='absolute top-3' />
                            <p className='roboto text-lg pl-4'>
                                You can't go wrong with Chicken Mandi, I had it twice. The chicken was cooked perfectly, juicy & soft (usually mandi chicken is a bit dry). I would defiantly recommend it.
                            </p>
                        </div>

                        <div className=''>
                            <div className='p-4 flex justify-between'>
                                <div>
                                    <h1 className='bebas-neue text-lg font-normal'>KHALID AL DAWSRY</h1>
                                    <p className='roboto text-sm'>Jeddah, Saudi</p>
                                </div>
                                <div>
                                    <img src="dp.svg" alt="" />
                                </div>
                            </div>

                            {/* straight line content */}
                            <div className='p-4 mx-auto'>
                                <hr className=' border  border-customRed w-[20%] float-right' />
                                <hr className=' border  border-black w-full mx-auto' />
                            </div>
                        </div>

                        <figure className='lg:mt-3'>
                            <img src="Group.svg" alt="" />
                        </figure>
                    </section>
                </section>
            </div>);
    }

    return (
        <Slider {...settings}>
            {elements}
        </Slider>
    );
}

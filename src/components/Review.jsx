import React from 'react'
import ReviewVideo from './ReviewVideo'
import { RiDoubleQuotesL } from "react-icons/ri";
import Slider from "react-slick";
import VideoCarousel from './VideoCarousel';

export default function () {
  return (
    <div className='relative w-full overflow-hidden my-14 '>
      <div className=' p-8  lg:max-w-7xl lg:mx-auto '>
        <img className='hidden xl:block w-64 absolute top-0 -left-[170px] rotate-12' src="tomato.png" alt="tomato" />
        <img className='hidden xl:block absolute bottom-0 rotate-[22deg] w-[350px]  -right-[120px] ' src="grass.png" alt="grass" />
        <section >
          <div className='flex items-center gap-4 font-semibold'>
            <img src="Rectangle.svg" alt="rectangle" />
            <h1 className='text-base text-customRed'>Crispy, Every Bite Taste</h1>
          </div>
          <div>
            <h1 className='text-6xl bebas-neue'>What Some of my Customers Say</h1>
          </div>
        </section>

        {/* Review video content */}
        <div className='h-[640px]'>
          <VideoCarousel/>
        </div>
        

      </div>
    </div>

  )
}

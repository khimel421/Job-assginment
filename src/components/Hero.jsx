import React from 'react'
import Navbar from './Navbar'

export default function Hero() {
  return (
    <div className=' bg-gradient-overlay bg-repeat md:h-auto lg:h-screen'>
      <div className='max-w-[1440px] mx-auto space-y-12 md:space-y-44 md:p-4'>
        <div className=' sticky'>
          <Navbar />
        </div>
        <div className=' px-2 py-3 flex flex-col md:flex-row relative gap-12 md:gap-[124px] '>
          <section className='flex flex-col'>
            <h1 className='z-10 text-5xl   md:text-[80px] lg:text-[120px] leading-none text-white bebas-neue md:absolute md:max-w-[600px] lg:max-w-[820px] top-16 overlay '>Taste the authentic
              Saudi cuisine</h1>
            <p className='roboto text-white md:mt-[230px] lg:mt-[350px] max-w-[500px]'>Among the best Saudi chefs in the world, serving you something beyond flavor. </p>
            <div>
              <button className='mt-5 md:block p-2 roboto font-bold bg-customYellow text-black hover:bg-white border border-customYellow transition-colors hover:border hover:border-customYellow ' >EXPLORE MENU</button>
            </div>

          </section>
          <figure className='hidden lg:block lg:absolute lg:-top-5 lg:-right-4 z-20'>
            <img src="Vector.svg" alt="flower" />
          </figure>
          <section className=''>
            <img className='md:h-[300px] lg:h-[549px] object-cover  z-0 flipped-image ' src="/hero-image.jpeg" alt="food" />
          </section>
          <figure className='absolute bg-customYellow w-20 h-20 md:w-24  md:h-24 lg:w-32 lg:h-32 flex justify-center items-center rounded-full right-4 bottom-6 md:-right-4 md:-bottom-0 lg:-right-12 lg:-bottom-10 md:text-lg lg:text-4xl text-center '>
              <p className='border-2 border-dashed border-customRed rounded-full bebas-neue leading-tight  p-3 w-16 h-16 md:w-16 md:h-16  lg:w-28 lg:h-28'>TODAY OFFER</p>
          </figure>
        </div>
      </div>
    </div>

  )
}

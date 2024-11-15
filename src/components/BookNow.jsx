import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import { RiExpandUpDownFill } from "react-icons/ri";

export default function BookNow() {
  return (
    <div className="bg-[url('/plate-spoon.jpeg')] bg-[length:150%_100%] lg:bg-cover  bg-no-repeat w-full p-8 relative ">
      {/* <figure className='z-0 top-0 left-0 right-0 bottom-0' >
        <img className='w-full h-[600px] object-cover' src="/plate-spoon.jpeg" alt="" />
      </figure> */}
      <div className= 'lg:max-w-[60%]  xl:max-w-[50%] z-10'>
        <section>
          <div className='flex items-center gap-4 font-semibold'>
            <img src="Rectangle.svg" alt="rectangle" />
            <h1 className='text-base text-customRed'>Book Now</h1>
          </div>
        </section>

        <section>
          <h1 className='bebas-neue text-4xl text-white'>BOOK YOUR TABLE</h1>
          <p className='roboto text-white text-base'>Enim tempor eget pharetra facilisis sed maecenas adipiscing. Eu leo molestie vel, ornare non id blandit netus.</p>
        </section>


        <section className='grid grid-cols-1  md:grid-cols-2 grid-rows-4 gap-6 pt-6'>
          <div>
            <input className='input-style ' type="text" placeholder=' Your name *' />
          </div>
          <div>
            <input className='input-style ' type="email" placeholder='Your email' />
          </div>
          <div className='relative'>
            <input className='input-style text-white' type="text" placeholder='Reservation Date' />
            <FaRegCalendarAlt className='text-white absolute right-4 top-3 text-xl' />
          </div>
          <div className='relative'>
            <input className='input-style ' type="number" min={1} max={15} placeholder='Total People' />
            {/* <RiExpandUpDownFill className='text-white absolute right-4 top-3 text-xl' /> */}
          </div>
          <div className=' md:col-span-2 row-span-7'>
            <input className='input-style h-full custom-placeholder' type="text" placeholder='Message' />
          </div>
        </section>
        <div>
          <button className='mt-5 md:block p-2 roboto font-bold bg-customYellow text-black hover:bg-white border border-customYellow transition-colors hover:border hover:border-customYellow ' >BOOK NOW</button>
        </div>
      </div>
    </div>
  )
}


import React from 'react'
import Carousel from './Carousel';




export default function PopularFood() {

    const images = [
        '/burger.svg',
        '/french-fries.svg',
        '/fried-shrimp.svg',
        '/pizza.svg',
        '/burger.svg',
        '/french-fries.svg',
        '/fried-shrimp.svg',

    ];

    const foods = [

        {
            image: '/burger.svg',
            foodName: 'vegetables burger',
            title: 'Barbecue Italian cuisine pizza'
        },
        {
            image: '/french-fries.svg',
            foodName: 'Spacial French fries ',
            title: 'Barbecue Italian cuisine'
        },
        {
            image: '/burger.svg',
            foodName: 'Cuisine Chicken',
            title: 'Barbecue Italian cuisine pizza'
        },
        {
            image: '/burger.svg',
            foodName: 'vegetables burger',
            title: 'Barbecue Italian cuisine pizza'
        },
        {
            image: '/burger.svg',
            foodName: 'vegetables burger',
            title: 'Barbecue Italian cuisine pizza'
        },
        {
            image: '/burger.svg',
            foodName: 'vegetables burger',
            title: 'Barbecue Italian cuisine pizza'
        },
        {
            image: '/burger.svg',
            foodName: 'vegetables burger',
            title: 'Barbecue Italian cuisine pizza'
        },
        {
            image: '/burger.svg',
            foodName: 'vegetables burger',
            title: 'Barbecue Italian cuisine pizza'
        },

    ]
    return (
        <div className=' bg-[#FBF7F2]  h-[532px] p-8 space-y-6 relative'>
            <img className='absolute w-[340px] -left-52 top-24 -rotate-45 hidden lg:block'  src="salad-pic.png" alt="" />
            <div className='w-[80%] mx-auto space-y-8'>
                <section className=' md:ml-8'>
                    <div className='flex items-center gap-4 font-semibold'>
                        <img src="Rectangle.svg" alt="rectangle" />
                        <h1 className='text-base text-customRed'>Crispy, Every Bite Taste</h1>

                    </div>
                    <h1 className='bebas-neue text-4xl text-black'>POPULAR FOOD ITEMS</h1>
                </section>
                <div className=''>
                    <Carousel foods={foods} />
                </div>
            </div>


        </div >
    )
}

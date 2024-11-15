import React, { useState } from 'react'
import { ConfigProvider, Tabs } from 'antd';


export default function About() {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabClick = (index) => {
        setActiveTab(index);
    };

    const tabs = [
        { label: "About", headline: "Exceptional culinary experience and delicious food One", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation." },
        { label: "Experiance", headline: "Exceptional culinary experience and delicious food Two", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation." },
        { label: "Contact", headline: "Exceptional culinary experience and delicious food Three", content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus. Lorem ipsum dolor sit amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore magna minim veniam nostrud exercitation." },
    ];


    return (
        <div className='relative overflow-hidden'>
            <figure className='absolute bottom-10 -right-[170px] -rotate-45 hidden  lg:block'>
                <img width={250} src="salad-pic.png" alt="salad" />
            </figure>
            <div className='max-w-[1440px] mx-auto my-20 overflow-hidden'>

                <section className='flex flex-col lg:flex-row gap-20 p-4'>
                    <div className='relative'>
                        <img className='absolute top-6 w-40 md:w-60 ' src="market-place.svg" alt="" />
                        <img className='w-full lg:w-[640px]' src="burger-img.jpeg" alt="burger" />
                    </div>
                    <div>
                        <article>
                            <div className="tabs-container lg:max-w-[640px]">
                                <div className="tabs">
                                    {tabs.map((tab, index) => (
                                        <button
                                            key={index}
                                            className={`tab ${activeTab === index ? 'active' : ''}`}
                                            onClick={() => handleTabClick(index)}
                                        >
                                            {tab.label}
                                        </button>
                                    ))}
                                </div>
                                <div className="tab-content">
                                    <h1 className=' text-4xl lg:text-6xl bebas-neue mt-4'>{tabs[activeTab].headline}</h1>
                                    <p className=' text-base roboto'>{tabs[activeTab].content}</p>
                                </div>
                            </div>

                        </article>
                        <div className='flex  items-center gap-8'>
                            <div>
                                <button className='mt-5  p-2 roboto font-bold bg-customYellow text-black hover:bg-white border border-customYellow transition-colors hover:border hover:border-customYellow ' >EXPLORE MENU</button>
                            </div>
                            <div>
                                <p className='flex items-center gap-3 pt-4 text-base'><span><img src="phone.svg" alt="phone" /></span>+88 3426 739 485</p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='flex flex-col sm:flex-row sm:justify-between sm:gap-24 sm:mt-8 gap-4 p-4'>

                    <div className='flex gap-4'>
                        <figure className='shadow rounded-full w-16 h-16 flex items-center justify-center'>
                            <img width={30} src="fast-delivery.svg" alt="svg" />
                        </figure>
                        <article className=''>
                            <h1 className='bebas-neue text-2xl '>FAST DELIVERY</h1>
                            <p className='roboto text-lg'>Grab your food order</p>
                        </article>
                    </div>
                    <div className='flex gap-4'>
                        <figure className='shadow rounded-full w-16 h-16 flex items-center justify-center'>
                            <img width={30} src="absolute-dining.svg" alt="svg" />
                        </figure>
                        <article className=''>
                            <h1 className='bebas-neue text-2xl '>ABSOLUTE DINING</h1>
                            <p className='roboto text-lg'>Grab your food order</p>
                        </article>
                    </div>
                    <div className='flex gap-4'>
                        <figure className='shadow rounded-full w-16 h-16 flex items-center justify-center'>
                            <img width={28} src="pickup-delivery.svg" alt="svg" />
                        </figure>
                        <article className=''>
                            <h1 className='bebas-neue text-2xl '>ABSOLUTE DINING</h1>
                            <p className='roboto text-lg'>Grab your food order</p>
                        </article>
                    </div>
                </section>
            </div>
        </div>

    )
}

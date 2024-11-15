import { Button } from 'antd'
import React, { useState } from 'react'
import { FiMenu } from "react-icons/fi";
import { Drawer } from "antd";

export default function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);
    const [open, setOpen] = useState(false);


    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    return (

        <div className='flex items-center justify-between lg:block px-2 py-3 '>
            <div className='flex items-center justify-between '>
                <section className='flex items-center gap-12 '>
                    <div className='flex items-center gap-1'>
                        <figure>
                            <img src="logo.svg" alt="logo" />
                        </figure>
                        <p className='poppins font-semibold text-3xl text-white'>Restaurant</p>
                    </div>

                    <ul className='hidden lg:flex gap-8 raleway font-medium cursor-pointer text-white'>
                        <li>Home</li>
                        <li>About</li>
                        <li>Portfolio</li>
                        <li>Clients</li>
                        <li>Blogs</li>
                        <li>Contact </li>
                    </ul>
                </section>

                <section>
                    <button className='hidden lg:block p-2 roboto font-bold bg-customYellow text-black hover:bg-white border border-customYellow hover:border hover:border-customYellow ' >BOOK A TABLE</button>
                </section>
            </div>


            {/* Hamburger menu */}
            <div className="lg:hidden block">
                {/* <MenuOutlined className="w-10 h-10" size={25}  /> */}
                <FiMenu color='white' size={25} onClick={showDrawer} />
                <Drawer width={240} onClose={onClose} open={open}>
                    <ul className="text-lg space-y-2 font-poppins font-medium">
                        <li
                            onClick={onClose}
                            className="hover:text-pink-600 cursor-pointer transition-colors"
                        >
                            <a href="/">Home</a>
                        </li>

                        <li
                            onClick={onClose}
                            className="hover:text-pink-600 cursor-pointer transition-colors"
                        >
                            <a href="/products">About</a>
                        </li>

                        <li
                            onClick={onClose}
                            className="hover:text-pink-600 cursor-pointer transition-colors"
                        >
                            <a href="/aboutUs">Portfolio</a>
                        </li>
                        <li
                            onClick={onClose}
                            className="hover:text-pink-600 cursor-pointer transition-colors"
                        >
                            <a href="/contactUs">Clients</a>
                        </li>
                        <li
                            onClick={onClose}
                            className="hover:text-pink-600 cursor-pointer transition-colors"
                        >
                            <a href="/contactUs">Blogs</a>
                        </li>
                        <li
                            onClick={onClose}
                            className="hover:text-pink-600 cursor-pointer transition-colors"
                        >
                            <a href="/contactUs">Contact</a>
                        </li>
                    </ul>
                </Drawer>
            </div>

        </div>
    )
}

import React from 'react'
import { MdOutlineWatchLater } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
    return (
        <div className="p-8 bg-[url('restaurent-interior.jpeg')] bg-cover  text-white relative ">
            <div class="absolute inset-0 bg-black bg-opacity-80"></div>
            <section className='z-10 relative flex flex-col gap-24'>
                <div>
                    <h1 className='text-4xl font-bold bebas-neue text-center p-4'>We ready to have you the best dining experiences</h1>
                </div>
                <div >
                    <ul className='flex flex-col lg:flex-row justify-around items-center gap-4 text-center'>
                        <li className='space-y-2'>
                            <figure className='flex justify-center'>
                                <MdOutlineWatchLater className='text-customYellow font-bold text-2xl' />
                            </figure>
                            <h1 className='bebas-neue text-2xl font-bold'>Opening hours</h1>
                            <p className='roboto text-base '>Monday - Sunday <br />
                                9:00 AM to 11:30 PM</p>

                        </li>
                        <li className='space-y-2'>
                            <figure className='flex justify-center'>
                                <FiPhoneCall className='text-customYellow text-2xl' />
                            </figure>
                            <h1 className='bebas-neue text-2xl font-bold'>LET'S TALK</h1>
                            <p className='roboto text-base '>Phone: 1-800-222-4545 <br /> Fax: 1-800-222-4545</p>

                        </li>
                        <li className='space-y-2'>
                            <figure className='flex justify-center'>
                                <CiMail className='text-customYellow text-2xl' />
                            </figure>
                            <h1 className='bebas-neue text-2xl font-bold'>BOOK A TABLE</h1>
                            <p className='roboto text-base '>Email: demo@website.com <br /> Support: support@website.com</p>
                        </li>
                        <li className='space-y-2'>
                            <figure className='flex justify-center'>
                                <CiLocationOn className='text-yellow-400 text-2xl' />
                            </figure>
                            <h1 className='bebas-neue text-2xl font-bold'>Our Address</h1>
                            <p className='roboto text-base '>123 Stree New York City , United <br /> States Of America.</p>

                        </li>
                    </ul>
                    {/* Social media content */}
                    <div className='mt-28 space-y-8'>
                        <ul className='flex justify-center gap-6'>
                            <li className='border border-white p-4 rounded-full'><FaFacebook /></li>
                            <li className='border border-white p-4 rounded-full'><FaSquareXTwitter /></li>
                            <li className='border border-white p-4 rounded-full'><FaInstagramSquare /></li>
                            <li className='border border-white p-4 rounded-full'><FaLinkedin /></li>
                        </ul>
                        <h1 className='text-center'> &copy; 2023 All Rights Reserved </h1>
                       
                    </div>

                </div>
            </section>

        </div>
    )
}

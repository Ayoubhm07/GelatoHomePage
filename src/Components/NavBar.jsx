import React, { useState } from 'react';
import { IoPersonSharp } from "react-icons/io5";
import { MdOutlineHeadsetMic } from "react-icons/md";
import { SlGlobe } from "react-icons/sl";
import { FaCartShopping,FaTimes } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    return (
        <>
            {isOpen && <div className="fixed inset-0 bg-black bg-opacity-10 z-0"></div>}
            <nav className="font-cocogoose bg-white border-b border-gray-300 p-4 flex justify-between items-center relative z-10">
                <div onClick={handleNav} className='block md:hidden'>
                    <IoMdMenu className='text-3xl' />
                </div>
                <div className="flex items-center">
                    <img src="assets/images/gelato_logo_black.svg" alt="Gelato Logo" className="h-7 mr-48 mx-20" />
                </div>
                <div className="flex text-sm mx-1 ml-96 flex-row items-center space-x-2 hidden md:flex">
                    <div className="p-1 w-28 bg-white hover:bg-gray-200 rounded-full transition duration-200 ease-in-out">
                        <a href="#" className="flex items-center space-x-2">
                            <MdOutlineHeadsetMic className="text-lg fill-black" />
                            <span className="font-gelatomedium">Contact us</span>
                        </a>
                    </div>
                    <div className="relative p-1 w-28 bg-white hover:bg-gray-200 rounded-full transition duration-200 ease-in-out">
                        <div className="flex items-center space-x-2 cursor-pointer" onClick={toggleDropdown}>
                            <SlGlobe className="text-lg" />
                            <span className="font-gelatomedium">IN/EUR</span>
                            <IoIosArrowDown className="text-lg" />
                        </div>
                        {isOpen && (
                            <ul className="absolute top-full mt-1 w-full bg-white shadow-lg rounded-md z-20">
                                <li className="p-2 hover:bg-gray-200 transition duration-150 ease-in-out cursor-pointer font-gelatomedium">Language - IN</li>
                                <li className="p-2 hover:bg-gray-200 transition duration-150 ease-in-out cursor-pointer font-gelatomedium">Currency - EUR</li>
                            </ul>
                        )}
                    </div>
                    <div className="p-1 w-24 bg-white hover:bg-gray-200 rounded-full transition duration-200 ease-in-out">
                        <a href="#" className="flex items-center space-x-2">
                            <FaCartShopping className="text-lg" />
                            <span className="font-gelatomedium">Cart</span>
                        </a>
                    </div>
                    <div className="p-1 w-28 bg-white hover:bg-gray-200 rounded-full transition duration-200 ease-in-out">
                        <a href="#" className="flex items-center space-x-2">
                            <IoPersonSharp className="text-lg" />
                            <span className="font-gelatomedium">Sign in</span>
                        </a>
                    </div>
                </div>
                <div className='md:flex xl:relative'>
                    <button
                        className="w-36 h-8 mr-40 bg-black hover:bg-gray-800 text-white py-0 px-4 rounded-full font-gelatomedium ">
                        Sign up for free
                    </button>
                </div>
            </nav>
        </>
    );
};

export default NavBar;

import React, { useState } from 'react';
import { IoPersonSharp } from "react-icons/io5";
import { SlGlobe } from "react-icons/sl";
import { FaCartShopping } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import { IoMdMenu } from "react-icons/io";
import { PiHeadsetFill } from "react-icons/pi";
import NavBarMobile from './NavBarMob';
import './NavBarMobile.css';


function NavBar() {


    const [isOpen, setIsOpen] = useState(false); 
    const [isLanguageListOpen, setIsLanguageListOpen] = useState(false); 
    const [isCurrencyListOpen, setIsCurrencyListOpen] = useState(false); 

    const [isNavVisible, setIsNavVisible] = useState(false); 

    const handleNavMob = () => {
        setIsNavVisible(!isNavVisible);
        if (isNavVisible) {
            setIsOpen(false);
            setIsLanguageListOpen(false);
            setIsCurrencyListOpen(false);
        }
    };


    return (
        <>
            {isOpen && <div className="fixed inset-0 bg-black bg-opacity-10 -z-50"></div>}
            {isNavVisible && <div className="overlay" onClick={handleNavMob}></div>}
            <nav className="font-cocogoose bg-white border-b border-gray-300 p-4 flex justify-between items-center relative z-50">
                <div onClick={handleNavMob} className='block md:hidden'>
                    <IoMdMenu className='text-3xl' />
                </div>
                <div className="flex items-center">
                    <img src="assets/images/gelato_logo_black.svg" alt="Gelato Logo" className="h-7 mr-48 mx-20" />
                </div>
                <div className="flex text-sm mx-1 ml-96 flex-row items-center space-x-2 hidden md:flex">
                    <div className="p-1 w-28 bg-white hover:bg-gray-200 rounded-full transition duration-200 ease-in-out">
                        <a href="https://www.gelato.com/in/contact" className="flex items-center space-x-2">
                            <PiHeadsetFill className="text-lg fill-black" />
                            <span className="font-gelatomedium">Contact us</span>
                        </a>
                    </div>
                    <div className="relative p-1 w-28 bg-white hover:bg-gray-200 rounded-full transition duration-200 ease-in-out">
                        <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                            <SlGlobe className="text-lg" />
                            <span className="font-gelatomedium">IN/EUR</span>
                            <IoIosArrowDown className="text-lg" />
                        </div>
                        {isOpen && (
                            <ul className="absolute top-full mt-1 w-full bg-white shadow-lg rounded-md z-20">
                                <li className="p-2 hover:bg-gray-200 transition duration-150 ease-in-out cursor-pointer font-gelatomedium"
                                    onClick={() => {
                                        setIsLanguageListOpen(true);
                                        setIsOpen(false); // Close the first dropdown
                                    }}>
                                    Language - IN
                                </li>
                                <li className="p-2 hover:bg-gray-200 transition duration-150 ease-in-out cursor-pointer font-gelatomedium"
                                    onClick={() => {
                                        setIsCurrencyListOpen(true);
                                        setIsOpen(false); 
                                    }}>            
                                     Currency - EUR
                                </li>
                            </ul>
                        )}
                        {isLanguageListOpen && (
                            <ul className="absolute top-full mt-1 w-full bg-white shadow-lg rounded-md z-20">
                                <li className="p-2 hover:bg-gray-200 transition duration-150 ease-in-out cursor-pointer font-gelatomedium">English - EN</li>
                                <li className="p-2 hover:bg-gray-200 transition duration-150 ease-in-out cursor-pointer font-gelatomedium">Français - FR</li>
                                <li className="p-2 hover:bg-gray-200 transition duration-150 ease-in-out cursor-pointer font-gelatomedium">Español - ES</li>
                                {/* Add other languages as needed */}
                                <li className="p-3 hover:bg-gray-200 transition duration-150 ease-in-out cursor-pointer font-gelatomedium text-center"
                                    onClick={() => setIsLanguageListOpen(false)}>  {/* Add back/close functionality */}
                                    Back
                                </li>
                            </ul>
                        )}
                         {isCurrencyListOpen && (
                            <ul className="absolute top-full mt-1 w-full bg-white shadow-lg rounded-md z-20">
                                <li className="p-2 hover:bg-gray-200 transition duration-150 ease-in-out cursor-pointer font-gelatomedium">United States dollar - USD</li>
                                <li className="p-2 hover:bg-gray-200 transition duration-150 ease-in-out cursor-pointer font-gelatomedium">Euro - EUR</li>
                                <li className="p-2 hover:bg-gray-200 transition duration-150 ease-in-out cursor-pointer font-gelatomedium">Pound Sterling - GBP</li>
                                <li className="p-3 hover:bg-gray-200 transition duration-150 ease-in-out cursor-pointer font-gelatomedium text-center"
                                    onClick={() => setIsCurrencyListOpen(false)}>  
                                    Back
                                </li>
                            </ul>
                        )}
                    </div>

                    <div className="p-1 w-24 bg-white hover:bg-gray-200 rounded-full transition duration-200 ease-in-out">
                        <a href="https://dashboard.gelato.com/checkout?from-landing=1&locale=en&currency=EUR&session_state=781df1d2-3d2d-40db-93ea-3c4497106671&iss=https%3A%2F%2Fauth.gelato.com%2Fauth%2Frealms%2Fgelato-api&code=c1001796-4793-4759-8c7f-f51fc18afe27.781df1d2-3d2d-40db-93ea-3c4497106671.636aa531-b239-4990-a38c-a06e89d09f93#iss=https%3A%2F%2Fauth.gelato.com%2Fauth%2Frealms%2Fgelato-api" className="flex items-center space-x-2">
                            <FaCartShopping className="text-lg" />
                            <span className="font-gelatomedium">Cart</span>
                        </a>
                    </div>
                    <div className="p-1 w-28 bg-white hover:bg-gray-200 rounded-full transition duration-200 ease-in-out">
                        <a href="https://dashboard.gelato.com/auth/sign-in?locale=en&currency=EUR" className="flex items-center space-x-2">
                            <IoPersonSharp className="text-lg" />
                            <span className="font-gelatomedium">Sign in</span>
                        </a>
                    </div>
                </div>
                <div className='md:flex xl:relative'>
                    <a href='https://dashboard.gelato.com/auth/sign-up?locale=en&currency=EUR'>
                        <button
                            className="w-36 h-8 mr-40 bg-black hover:bg-gray-800 text-white py-0 px-4 rounded-full font-gelatomedium ">
                            Sign up for free
                        </button>
                    </a>

                </div>
            </nav>
            <div className={`nav-mobile-container ${isNavVisible ? 'open' : ''}`}>
                <NavBarMobile closeMenu={handleNavMob} />
            </div>
        </>
    );
};

export default NavBar;
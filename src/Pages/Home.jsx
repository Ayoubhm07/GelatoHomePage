import React, { useState } from 'react';
import HelloBar from '../Components/HelloBar';
import NavBar from '../Components/NavBar';
import ToolBar from '../Components/ToolBar';
import Hero from '../Components/Hero';
import OffersBar from '../Components/OffersBar';
import Why from '../Components/Why';
import Solutions from '../Components/Solutions';
import GelatoConnect from '../Components/GelatoConnect';
import Meet from '../Components/Meet';
import { PiHeadsetFill } from "react-icons/pi";
import { RiMessage2Line } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import Footer from '../Components/Footer';
import FooterMob from '../Components/FooterMob';
import NavBarMobile from '../Components/NavBarMob';


const Home = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);

    return (
        <div>
            <HelloBar />
            <div className="sticky top-0 z-50">
                <NavBar />
                <ToolBar />
            </div>
            <Hero />
            <OffersBar />
            <Why />
            <Solutions />
            <GelatoConnect />
            <Meet />
            <div className='lg:hidden'>
                <FooterMob />
            </div>
            <div className='hidden lg:flex'>
                <Footer />
            </div>
            <div className="fixed bottom-4 right-4 z-50 font-gelato">
                <button onClick={toggleDropdown} className="flex items-center space-x-2 bg-[#212121] text-white hover:text-gray-400 font-gelato py-2 px-4 rounded-full">
                    <PiHeadsetFill className="text-white" />
                    <span>Contact us</span>
                </button>
                {isOpen && (
                    <div className="bg-gray-100 text-[#212121] text-1xl rounded-md shadow-lg w-80 h-36 absolute bottom-full mb-8 right-0">
                        <div className="bg-[#212121] text-white p-2 flex justify-between items-center">
                            <span className="font-gelato ml-5">How can we help you?</span>
                            <button onClick={toggleDropdown} className="text-white p-1 rounded-full hover:bg-gray-600">
                                <IoCloseOutline className="text-xl" />
                            </button>
                        </div>
                        <ul>
                            <li className="flex items-center hover:bg-white hover:text-gray-600 cursor-pointer p-5">
                                <RiMessage2Line className="mr-2" />
                                <span onClick={() => window.location.href = 'https://www.gelato.com/in/platinum#why-platinum'}>Contact sales</span>
                            </li>
                            <li className="flex items-center hover:bg-white hover:text-gray-600 cursor-pointer p-5">
                                <PiHeadsetFill className="mr-2" />
                                <span onClick={() => window.location.href = 'https://support.gelato.com/in?_gl=1*1ty39d4*_ga*NzM3NTk4NjkzLjE3MjYxNjU0MTc.*_ga_XBMT9WLLHR*MTcyNjQwMDcyNi43LjEuMTcyNjQwNjczNi40Ni4wLjQzODg4ODYw*_gcl_au*NDI3ODQ3OTYyLjE3MjYxNjU0MzQ.'}>Contact customer support</span>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
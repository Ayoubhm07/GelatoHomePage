import React from 'react';
import { RiStarSFill } from "react-icons/ri";


function GelatoConnect() {
    return (
        <div className="bg-white relative">
            <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row justify-between items-center">
                <div className="lg:w-1/2 mb-12 lg:ml-20 lg:mt-0 flex justify-center">
                    <img src="assets/images/connect.gif" alt="Ecommerce Solutions" className="mb-22" />
                </div>
                <div className="text-left lg:w-1/2 lg:ml-10 ">
                    <h1 className="text-2xl font-gelato lg:text-1xl text-[#212121] lg:font-gelatoregular leading-tight">
                      For print producers
                    </h1>
                    <h1 className="text-4xl font-gelatoregular lg:text-6xl mb-6 mt-3 text-[#212121] lg:font-gelatomedium leading-tight">
                        GelatoConnect
                    </h1>
                    <p className="hidden lg:flex lg:text-2xl lg:text-[#212121] lg:font-gelatoregular mb-6">
                        Elevate efficiency, cut costs, and seamlessly <br/>automate with our all-in-one software solution<br/> for the print industry                    
                    </p>
                    <p className="text-3xl text-[#212121] font-gelatoregular mb-6 lg:hidden">
                        Elevate efficiency, cut costs, and seamlessly automate with our all-in-one software solution for the print industry                    
                    </p>
                    <div className="hidden flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                    <a href='https://www.gelato.com/in/connect'>
                        <button className="bg-[#212121] text-white hover:text-gray-400 font-gelatomedium py-1 px-6 rounded-full">
                           Learn more
                        </button>
                        </a>
                    </div>
                    <div className="flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <a href='https://www.gelato.com/in/connect'>
                        <button className="bg-[#212121] text-white hover:text-gray-400 font-gelatomedium py-1 px-6 rounded-full">
                            Learn more
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default GelatoConnect;

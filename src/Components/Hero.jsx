import React from 'react';
import { RiStarSFill } from "react-icons/ri";


function Hero() {
    return (
        <div className="bg-white relative">
            <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row justify-between items-center">
                <div className="text-left lg:w-1/2 ml-32 ">
                    <h1 className="text-6xl mt-8 text-[#212121] font-gelatomedium leading-tight">
                        Print on demand for<br /> your ecommerce <br /> business
                    </h1>
                    <p className="text-2xl text-[#212121] font-gelatoregular mb-6">
                        Sign up for free and only pay for what you sell.
                    </p>
                    <p className="text-1xl text-[#212121] font-gelato">
                        Turn your passion into profit with the world's largest 
                        <a href="/your-link" className="ml-0.5 underline hover:text-gray-600">
                            print on demand
                        </a>
                    </p>
                    <p className="text-1xl text-[#212121] font-gelato mb-6">
                        network.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="bg-[#212121] text-white hover:text-gray-400 font-gelatomedium py-1 px-6 rounded-full">
                            Get started for free
                        </button>
                        <button className="bg-transparent border-2 hover:bg-gray-300 border-gray-400 text-black font-gelatomedium py-1 px-6 rounded-full">
                            See our products
                        </button>
                    </div>
                    <div className="flex flex-col items-baseline ">
                        <img src="assets/images/shopify.svg" alt="Shopify" className="h-12 mt-10" />
                        <div className="flex flex-col items-center py-2">
                            <div className="flex items-center text-[#52b8a7]">
                                {[...Array(5)].map((_, index) => (
                                    <RiStarSFill key={index} className="text-2xl" /> 
                                ))}
                                <a href="/linkk" className="ml-2 hover:text-gray-400"> 
                                    <span className="text-xl font-gelato text-gray-600 hover:text-gray-400">4.8 / 5</span>
                                </a>
                            </div>
                            <a href="/link" className="hover:text-gray-400"> 
                                <span className="text-xl font-gelato text-gray-600 hover:text-gray-400">based on 887 reviews</span>
                            </a>
                        </div>


                    </div>
                </div>
                <div className="lg:w-1/2 mb-16 mr-36 lg:mt-0 flex justify-center">
                    <img src="assets/images/download.webp" alt="Ecommerce Products" className="mb-22" />
                </div>
            </div>
        </div>
    );
}

export default Hero;

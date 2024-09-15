import React from 'react';
import { RiStarSFill } from "react-icons/ri";

function Hero() {
    return (
        <div className=" bg-[#faf6ef] lg:bg-white relative">
            <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row justify-between items-center text-[#212121]">
                <div className="mb-6 lg:hidden flex justify-center">
                    <img src="assets/images/download.webp" alt="Ecommerce Products" />
                </div>
                <div className="text-left lg:text-left lg:w-1/2 lg:ml-32">
                    <h1 className="text-4xl text-left lg:text-6xl mt-4 lg:mt-8 text-[#212121] font-gelatoregular lg:font-gelatomedium leading-tight">
                        Print on demand for<br />your ecommerce<br />business
                    </h1>
                    <p className="text-2xl lg:text-2xl text-[#212121] font-gelatoregular mt-4 lg:mb-6">
                        Sign up for free and only pay for what you sell.
                    </p>
                    <p className="text-lg text-[#212121] font-gelato mt-3">
                        Turn your passion into profit with the world's largest
                        <a href="/your-link" className="ml-0.5 underline hover:text-gray-600">
                            print on demand
                        </a> network.
                    </p>
                    <div className=" flex flex-row space-x-4 mt-6  ">
                        <button className="bg-[#212121] text-white hover:text-gray-400 font-gelatomedium py-1 px-6 rounded-full">
                            Get started for free
                        </button>
                        <button className="bg-transparent border-2 hover:bg-gray-300 border-gray-400 text-black font-gelatomedium py-1 px-6 rounded-full">
                            See our products
                        </button>
                    </div>

                    <div className="flex flex-col items-baseline lg:items-baseline mt-4">
                        <img src="assets/images/shopify.svg" alt="Shopify" className="h-12" />
                        <div className="flex items-center text-[#52b8a7] mt-2">
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
                <div className="hidden lg:flex lg:w-1/2 lg:mr-36 lg:mt-0 justify-center">
                    <img src="assets/images/download.webp" alt="Ecommerce Products" />
                </div>
            </div>
        </div>
    );
}

export default Hero;

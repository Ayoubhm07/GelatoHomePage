import React from 'react';
import { RiStarSFill } from "react-icons/ri";


function Solutions() {
    return (
        <div className="bg-white relative">
            <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row justify-between items-center">
                <div className="text-left lg:w-1/2 ml-32 ">
                    <h1 className="text-1xl text-[#212121] font-gelatoregular leading-tight">
                    For print on demand sellers
                    </h1>
                    <h1 className="text-6xl mb-6 text-[#212121] font-gelatomedium leading-tight">
                    Accelerate business<br /> growth with <br /> innovative design <br /> tools and apps
                    </h1>
                    <p className="text-2xl text-[#212121] font-gelatoregular mb-6">
                        See how our cutting-edge solutions can help you. <br/> reach new customers and maximize your profits.
                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="bg-[#212121] text-white hover:text-gray-400 font-gelatomedium py-1 px-6 rounded-full">
                            Get started
                        </button>
                    </div>
                    
                </div>
                <div className="lg:w-1/2 mb-12 mr-36 lg:mt-0 flex justify-center">
                    <img src="assets/images/solution.gif" alt="Ecommerce Solutions" className="mb-22" />
                </div>
            </div>
        </div>
    );
}

export default Solutions;

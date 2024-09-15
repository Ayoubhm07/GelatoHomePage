import React from 'react';
import { RiStarSFill } from "react-icons/ri";


function Solutions() {
    return (
        <div className="bg-[#faf6ef] relative">
            <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row justify-between items-center">
                <div className="lg:hidden justify-center">
                    <img src="assets/images/solution.gif" alt="Ecommerce Solutions" className="mb-22" />
                </div>
                <div className="text-left lg:w-1/2 lg:ml-32 ">
                    <h1 className=" text-2xl font-gelato lg:text-1xl text-[#212121] lg:font-gelatoregular leading-tight">
                    For print on demand sellers
                    </h1>
                    <h1 className=" hidden lg:block lg:text-6xl mb-6 text-[#212121] lg:font-gelatomedium leading-tight">
                    Accelerate business<br /> growth with <br /> innovative design <br /> tools and apps
                    </h1>
                    <h1 className=" text-4xl font-gelatoregular lg:hidden mb-6 text-[#212121] leading-tight">
                    Accelerate business <br/> growth with innovative design tools and apps
                    </h1>
                    <p className="hidden lg:flex text-2xl text-[#212121] font-gelatoregular mb-6">
                        See how our cutting-edge solutions can help you. <br/> reach new customers and maximize your profits.
                    </p>
                    <p className="text-3xl text-[#212121] font-gelatoregular mb-6 lg:hidden">
                        See how our cutting-edge solutions can help you.reach new customers and maximize your profits.
                    </p>
                    <a href='https://www.gelato.com/in/tools-and-apps'>
                    <div className="hidden flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="bg-[#212121] text-white hover:text-gray-400 font-gelatomedium py-1 px-6 rounded-full">
                            Get started
                        </button>
                    </div>
                    <div className="flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="bg-[#212121] text-white hover:text-gray-400 font-gelatomedium py-1 px-6 rounded-full">
                            Get started
                        </button>
                    </div>
                    </a>
                </div>
                <div className="hidden lg:w-1/2 lg:mb-12 mr-36 lg:mt-0 lg:flex lg:justify-center">
                    <img src="assets/images/solution.gif" alt="Ecommerce Solutions" className="mb-22" />
                </div>
            </div>
        </div>
    );
}

export default Solutions;

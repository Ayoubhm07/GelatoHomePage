import React from 'react';
import { RiStarSFill } from "react-icons/ri";


function Meet() {
    return (
        <div className="bg-[#faf6ef] relative">
            <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row justify-between items-center">
                <div className="text-left lg:w-1/2 ml-32 ">
                    <h1 className="text-6xl mb-6 text-[#212121] font-gelatomedium leading-tight">
                        Meet <br /> GelatoConnect at <br/> Printing United
                    </h1>
                    <p className="text-1xl text-[#212121] font-gelato mb-6">
                        Meet us at Printing United from September 10-12 in Las Vegas. Book your <br/> meeting slot to discover the innovative ways GelatoConnect is transforming<br/> the landscape and driving success for businesses like yours.                    </p>
                    <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="bg-[#212121] text-white hover:text-gray-400 font-gelatomedium py-1 px-6 rounded-full">
                            Book a meeting
                        </button>
                    </div>
                    
                </div>
                <div className="lg:w-1/2 mb-12 mr-36 lg:mt-0 flex justify-center">
                    <img src="assets/images/meet.webp" alt="Ecommerce Meet" className="mb-22" />
                </div>
            </div>
        </div>
    );
}

export default Meet;

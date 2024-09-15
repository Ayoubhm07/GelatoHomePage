import React from 'react';


function Meet() {
    return (
        <div className="bg-[#faf6ef] relative">
            <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row justify-between items-center">
            <div className=" mb-12 flex justify-center lg:hidden">
                    <img src="assets/images/meet.webp" alt="Ecommerce Meet" className="mb-22" />
                </div>
                <div className="text-left lg:w-1/2 lg:ml-32 ">
                     <h1 className="lg:hidden text-4xl mb-6 text-[#212121] font-gelatoregular leading-tight">
                        Meet GelatoConnect at <br/> Printing United
                    </h1>
                    <h1 className="hidden lg:flex lg:text-6xl lg:mb-6 text-[#212121] lg:font-gelatomedium leading-tight">
                        Meet <br /> GelatoConnect at <br/> Printing United
                    </h1>
                    <p className="hidden lg:flex text-1xl text-[#212121] font-gelato mb-6">
                        Meet us at Printing United from September 10-12 in Las Vegas. Book your <br/> meeting slot to discover the innovative ways GelatoConnect is transforming<br/> the landscape and driving success for businesses like yours.                   
                     </p>
                     <p className="lg:hidden text-1xl text-[#212121] font-gelato mb-6">
                        Meet us at Printing United from September 10-12 in Las Vegas. Book your  meeting slot to discover the innovative ways GelatoConnect is transforming the landscape and driving success for businesses like yours.                   
                     </p>
                    <a href='https://www.gelato.com/in/connect/printing-united-2024'>
                    <div className="hidden lg:flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="bg-[#212121] text-white hover:text-gray-400 font-gelatomedium py-1 px-6 rounded-full">
                            Book a meeting
                        </button>
                    </div>
                    <div className="lg:hidden flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                        <button className="bg-[#212121] text-white hover:text-gray-400 font-gelatomedium py-1 px-6 rounded-full">
                        Book a meeting
                        </button>
                    </div>
                    </a>
                </div>
                <div className="hidden lg:w-1/2 mb-12 mr-36 lg:mt-0 lg:flex justify-center">
                    <img src="assets/images/meet.webp" alt="Ecommerce Meet" className="mb-22" />
                </div>
            </div>
        </div>
    );
}

export default Meet;

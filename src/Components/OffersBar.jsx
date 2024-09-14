import React from 'react';

function OffersBar() {
    return (
        <div className="bg-[#faf6ef] py-4 flex justify-between items-center text-center font-gelatoregular text-[#212121]">
            <div className="w-1/3">
                <h2 className="text-2xl">90%</h2>
                <p className='text-2xl'>of all orders are produced <br /> locally</p>
                

            </div>
            <div className="w-1/3">
                <h2 className="text-2xl">90%</h2>
                <p className='text-2xl'>of orders arrive within 5 days <br />of ordering</p>
            </div>
            <div className="w-1/3">
                <h2 className="text-2xl">140+</h2>
                <p className='text-2xl'>print providers across 32 <br/>countries</p>
            </div>
        </div>
    );
}

export default OffersBar;

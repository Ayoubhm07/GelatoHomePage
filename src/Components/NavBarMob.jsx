import React, { useState } from 'react';
import { FaCartShopping } from "react-icons/fa6";
import { IoPersonSharp, IoCloseOutline } from "react-icons/io5";
import { SlGlobe } from "react-icons/sl";
import { MdKeyboardArrowRight, MdKeyboardArrowDown } from "react-icons/md";

const NavBarMobile = ({ closeMenu }) => {
    const [isLocaleOpen, setIsLocaleOpen] = useState(false);

    return (
        <div className="bg-white text-black font-gelatoregular h-full">
            <div className="flex justify-between items-center p-4 font-gelatomedium">
                <IoCloseOutline className="text-xl" onClick={closeMenu} />
                <div className="flex items-center">
                    <SlGlobe className="text-xl mr-1" onClick={() => setIsLocaleOpen(!isLocaleOpen)} />
                    <span>IN/EUR {isLocaleOpen ? <MdKeyboardArrowDown className="inline" /> : <MdKeyboardArrowRight className="inline" />}</span>
                    {isLocaleOpen && (
                        <ul className="absolute bg-black mt-8 shadow-lg">
                            <li className="p-2 hover:bg-gray-700">Language - EN</li>
                            <li className="p-2 hover:bg-gray-700">Currency - EUR</li>
                        </ul>
                    )}
                    <FaCartShopping className="text-xl ml-4" onClick={() => window.location.href = 'https://example.com/cart'} />
                    <span className='mr-2'>Cart</span>
                </div>
            </div>
            <div className="flex flex-row space-x-38 p-4 font-gelatomedium">
                <button className="bg-[#212121] py-2 px-4 rounded-full text-white">Sign up for free</button>
                <button className="py-2 px-4 flex items-center ml-10" onClick={() => window.location.href = 'https://example.com/signin'}>
                    <IoPersonSharp className="mr-2" />
                    Sign in
                </button>
            </div>
                <div className="flex flex-col space-y-2 p-4">
                

                <ul className="space-y-1">
                    <li className="flex justify-between items-center">
                        Products <MdKeyboardArrowRight />
                    </li>
                    <li className="flex justify-between items-center">
                        Start selling <MdKeyboardArrowRight />
                    </li>
                    <li className="flex justify-between items-center">
                        Tools and apps <MdKeyboardArrowRight />
                    </li>
                    <li className="flex justify-between items-center">
                        Pricing <MdKeyboardArrowRight />
                    </li>
                    <li className="flex justify-between items-center">
                        Resources <MdKeyboardArrowRight />
                    </li>
                    <li className="flex justify-between items-center">
                        Pro sellers 
                    </li>
                    <li className="flex justify-between items-center">
                        GelatoConnect <MdKeyboardArrowRight />
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBarMobile;

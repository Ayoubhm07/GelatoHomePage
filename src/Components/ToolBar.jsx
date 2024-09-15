import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

function ToolBar() {
    const [openDropdown, setOpenDropdown] = useState(null);

    const handleMouseOver = (id) => {
        setOpenDropdown(id);
    };

    const handleMouseOut = () => {
        setOpenDropdown(null);
    };

    const dropdownItems = {
        products: ['Product 1', 'Product 2', 'Product 3'],
        selling: ['Start Selling 1', 'Start Selling 2'],
        tools: ['Tool 1', 'Tool 2', 'Tool 3'],
        pricing: ['Pricing 1', 'Pricing 2'],
        resources: ['Resource 1', 'Resource 2'],
        gelato: ['Gelato Connect 1', 'Gelato Connect 2']
    };

    return (
        <>
            {openDropdown && (
                <div className="fixed inset-0 bg-black bg-opacity-5 z-10" onClick={() => setOpenDropdown(null)}></div>
            )}
            <div className="hidden lg:flex ml-28 space-x-6 bg-white py-2 relative z-20 ">
                {Object.entries(dropdownItems).map(([key, values]) => (
                    <div key={key} className="relative group" onMouseOver={() => handleMouseOver(key)} onMouseLeave={handleMouseOut}>
                        <div className="flex items-center space-x-2 cursor-pointer select-none">
                            <span className="font-gelatomedium text-[#212121] capitalize">
                                {key.replace('_', ' & ')}
                            </span>
                            <IoIosArrowDown className="text-lg transition-transform duration-300" style={{ transform: openDropdown === key ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                        </div>
                        {openDropdown === key && (
                            <ul className="absolute top-full mt-2 w-48 bg-white shadow-lg rounded-md z-30 py-2">
                                {values.map((item, index) => (
                                    <li key={index} className="p-2 hover:bg-gray-200 transition duration-150 ease-in-out cursor-pointer font-gelatomedium">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default ToolBar;

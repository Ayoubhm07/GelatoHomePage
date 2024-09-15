import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

function FooterC() {
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

    const toggleLanguageMenu = () => {
        setLanguageMenuOpen(!languageMenuOpen);
    };

    return (
        <div className="bg-black text-white text-xs">
            <div className="container mx-auto flex justify-between items-center py-4">
                <div className="flex space-x-1 ml-20">
                    <a href="https://www.gelato.com/in/contact" className="hover:text-gray-300">Contact us</a><span className="text-gray-500">|</span>
                    <a href="https://www.gelato.com/in/legal" className="hover:text-gray-300">Legal</a><span className="text-gray-500">|</span>
                    <a href="https://www.gelato.com/in/legal/privacy" className="hover:text-gray-300">Privacy policy</a><span className="text-gray-500">|</span>
                    <a href="https://www.gelato.com/in/legal/cookie" className="hover:text-gray-300">Cookie policy</a><span className="text-gray-500">|</span>
                    <a href="https://www.gelato.com/in/legal/api-terms" className="hover:text-gray-300">API terms</a><span className="text-gray-500">|</span>
                    <a href="#" className="hover:text-gray-300">Sitemap</a>
                </div>
                <div className="relative mr-20">
                <button onClick={toggleLanguageMenu} className="flex items-center h-10 space-x-2 border border-white rounded-lg px-8">
                <span className='ml-2 text-sm'>English (India)</span>
                        <IoIosArrowDown className="text-white text-right" />
                    </button>
                    {languageMenuOpen && (
                        <ul className="absolute right-0 top-0 mt-[-50%] w-44 bg-black border border-white rounded-lg z-10">
                            <li className="hover:bg-gray-700 py-1 px-4">English (US)</li>
                            <li className="hover:bg-gray-700 py-1 px-4">Français (France)</li>
                            <li className="hover:bg-gray-700 py-1 px-4">Español (España)</li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}
export default FooterC;

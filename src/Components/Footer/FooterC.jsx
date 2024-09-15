import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";

function FooterC() {
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English (India)');

    const toggleLanguageMenu = () => {
        setLanguageMenuOpen(!languageMenuOpen);
    };

    const selectLanguage = (language) => {
        setSelectedLanguage(language);
        setLanguageMenuOpen(false); // Close the menu after selection
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
                {languageMenuOpen && (
                <div className='relative right-0 w-44'>
                <ul className=" bg-black border border-white rounded-lg z-10">
                    {[
                        'English - EN', 'Français - FR', 'Español - ES', 'Italiano - IT',
                        'Deutsch - DE', 'Norsk - NO', 'Svenska - SE', 'Tiếng Việt - VI',
                        'Nederlands - NL', 'Dansk - DA', 'English (Canada) - CA', 
                        'English (United Kingdom) - UK', 'English (Australia) - AU', 
                        'English (India) - IN', '日本語 - JA'
                    ].map((language) => (
                        <li key={language} 
                            className="p-2 hover:bg-gray-200 transition duration-150 ease-in-out cursor-pointer font-gelatomedium"
                            onClick={() => selectLanguage(language)}>
                            {language}
                        </li>
                    ))}
                </ul>
                </div>
            )}
            <button onClick={toggleLanguageMenu} className="flex items-center h-10 space-x-2 border border-white rounded-lg px-8 bg-black text-white">
                <span className='ml-2 text-sm'>{selectedLanguage}</span>
                <IoIosArrowDown className="text-right" />
            </button>
            
        </div>
            </div>
        </div>
    );
}
export default FooterC;

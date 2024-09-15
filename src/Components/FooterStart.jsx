import React from 'react';
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTiktok, FaLinkedinIn, FaYoutube } from "react-icons/fa";

function FooterStart() {
    return (
        <div className="bg-black text-white text-base font-gelato flex justify-between items-center py-4 px-10 ml-20">
            <img src="assets/images/gelato_logo_white.svg" alt="Gelato" className="h-10 mt-10" />
            <div className="flex items-center space-x-4 mr-28 mt-10">
                <span>Find Gelato on: </span>    
                <a href="https://instagram.com" className="bg-black p-2 rounded-full hover:bg-gray-900">
                    <AiFillInstagram className="text-white" size="28px" />
                </a>
                <a href="https://facebook.com" className="bg-black p-2 rounded-full hover:bg-gray-900">
                    <FaFacebookF className="text-white" size="28px" />
                </a>
                <a href="https://tiktok.com" className="bg-black p-2 rounded-full hover:bg-gray-900">
                    <FaTiktok className="text-white" size="28px" />
                </a>
                <a href="https://linkedin.com" className="bg-black p-2 rounded-full hover:bg-gray-900">
                    <FaLinkedinIn className="text-white" size="28px" />
                </a>
                <a href="https://youtube.com" className="bg-black p-2 rounded-full hover:bg-gray-900">
                    <FaYoutube className="text-white" size="28px" />
                </a>
            </div>
        </div>
    );
}

export default FooterStart;
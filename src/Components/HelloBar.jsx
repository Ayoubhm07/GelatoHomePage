import React from 'react';
import { IoMdInformationCircleOutline } from "react-icons/io";

const HelloBar = () => {
  return (
    <div className="hidden md:flex justify-center items-center h-10 mt-0 bg-[#0c0c0c] p-4 text-white">
      <div className="flex items-center">
        <span className="text-[#ffffff] font-gelato underline">FREE SHIPPING for orders over $300. Order today.</span>
        <span className='mx-1 '><IoMdInformationCircleOutline size={24}/> 
        </span> 
      </div>
    </div>
  ); 
};

export default HelloBar;


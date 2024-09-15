import React from 'react';
import { IoMdInformationCircleOutline } from "react-icons/io";

const HelloBar = () => {
    return (
        <div className="flex justify-center items-center w-full h-10 mt-0 bg-[#0c0c0c] p-4 text-white md:w-full">
            <div className="flex items-center">
                <a href="https://auth.gelato.com/auth/realms/gelato-api/protocol/openid-connect/auth?client_id=api-dashboard&redirect_uri=https%3A%2F%2Fdashboard.gelato.com%2Fcatalogue%2Fcategories%3F_gl%3D1*8njn58*_ga*NzM3NTk4NjkzLjE3MjYxNjU0MTc.*_ga_XBMT9WLLHR*MTcyNjMyODc3Ni41LjEuMTcyNjMyODgyOC44LjAuMTY5NjEwNDM2MA..*_gcl_au*NDI3ODQ3OTYyLjE3MjYxNjU0MzQ.&state=2a33cfd6-fd0b-4eb6-b4b3-d810eacaf22e&response_mode=fragment&response_type=code&scope=openid&nonce=c7f4bc6d-9c18-48af-81cc-295608df4833&prompt=login&ui_locales=enhttps://auth.gelato.com/auth/realms/gelato-api/protocol/openid-connect/auth?client_id=api-dashboard&redirect_uri=https%3A%2F%2Fdashboard.gelato.com%2Fcatalogue%2Fcategories%3F_gl%3D1*8njn58*_ga*NzM3NTk4NjkzLjE3MjYxNjU0MTc.*_ga_XBMT9WLLHR*MTcyNjMyODc3Ni41LjEuMTcyNjMyODgyOC44LjAuMTY5NjEwNDM2MA..*_gcl_au*NDI3ODQ3OTYyLjE3MjYxNjU0MzQ.&state=2a33cfd6-fd0b-4eb6-b4b3-d810eacaf22e&response_mode=fragment&response_type=code&scope=openid&nonce=c7f4bc6d-9c18-48af-81cc-295608df4833&prompt=login&ui_locales=en" className="text-white font-gelato underline">
                    <span>FREE SHIPPING for orders over $300. Order today.</span>
                </a>        <span className='mx-1 '><IoMdInformationCircleOutline size={24} />
                </span>
            </div>
        </div>
    );
};

export default HelloBar;


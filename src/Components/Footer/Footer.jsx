import React from 'react';
import FooterStart from './FooterStart';
import FooterA from './FooterA';
import FooterB from './FooterB';
import FooterC from './FooterC';

function Footer() {
    return (
        <div className="bg-black w-full text-white">
            <div>
            <FooterStart />
            </div>
            <div className="flex justify-between items-start py-1 px-10 ml-14">
                <div className="flex-1 min-w-0">
                    <FooterA />
                </div>
                <div className="flex-1 min-w-0 mr-80 ">
                    <FooterB />
                </div>
            </div>
            <FooterC />
        </div>
    );
}

export default Footer;

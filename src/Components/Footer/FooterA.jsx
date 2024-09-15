import React from 'react';

function FooterA() {
    return (
        <div className="flex flex-col items-baseline bg-black text-white text-sm py-4">
            <div className="ml-10 ">
                <p className="text-xs my-4">
                    Gelato has created the world's largest network for local production<br />
                    and distribution of customized products. Together we bring<br />
                    creativity to life - and into business.
                </p>
                <button className="bg-white text-sm text-black font-gelatomedium hover:text-gray-700 hover:bg-slate-300 rounded-full px-4 py-1">
                    Get started
                </button>
                <div className='mt-12'>
                    <p className="font-gelato text-lg">Get the app</p>
                    <div className="flex space-x-4 mt-2">
                        <a href="https://apps.apple.com/no/app/gelato/id1583536931">
                            <img src="assets/images/app_store.svg" alt="App Store" />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.gelato.api&pli=1">
                            <img src="assets/images/google_play.svg" alt="Google Play" />
                        </a>
                    </div>
                </div>
            </div>
            
        </div>

        
    );
}

export default FooterA;

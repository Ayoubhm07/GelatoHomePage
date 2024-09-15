import React, { useState } from 'react';
import { IoIosArrowDown } from "react-icons/io";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTiktok, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { RiArrowRightSLine, RiArrowDownSLine } from 'react-icons/ri';

function DropdownSection({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleDropdown = () => setIsOpen(!isOpen);


    return (
        <div className="space-y-1 mt-5">
            <button onClick={toggleDropdown} className="flex items-center space-x-2 mb-4 text-base hover:text-gray-300">
                {isOpen ? <RiArrowDownSLine size={24} /> : <RiArrowRightSLine />}
                <span className='font-gelatoregular font-bold text-2xl'>{title}</span>
            </button>
            {isOpen && <ul className="space-y-2 ml-8">
                {children}
            </ul>}
        </div>
    );
}

function handleNavigation() {
    window.location.href = "https://dashboard.gelato.com/auth/sign-in?locale=en&currency=EUR";
}


function FooterMob() {
    const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English (India)');

    const toggleLanguageMenu = () => {
        setLanguageMenuOpen(!languageMenuOpen);
    };

    const selectLanguage = (language) => {
        setSelectedLanguage(language);
        setLanguageMenuOpen(false);
    };

    return (
        <div className="lg:hidden flex flex-col items-baseline bg-black text-white text-sm py-4">
            <img src="assets/images/gelato_logo_white.svg" alt="Gelato" className="h-10 mt-10" />
            <div className="ml-10 ">
                <p className="text-xs my-4">
                    Gelato has created the world's largest network for local production<br />
                    and distribution of customized products. Together we bring<br />
                    creativity to life - and into business.
                </p>
                <button onClick={handleNavigation}
                    className="bg-white text-sm text-black font-gelatomedium hover:text-gray-700 hover:bg-slate-300 rounded-full px-4 py-1">
                    Get started
                </button>

                <div className="container text-left mx-auto  flex flex-col items-start mt-10">
                    <DropdownSection title="Print on demand">
                        <li><a href="https://www.gelato.com/in/print-on-demand" className="hover:text-gray-300">What is print on demand?</a></li>
                        <li><a href="https://www.gelato.com/in/custom" className="hover:text-gray-300">Product catalog</a></li>
                        <li><a href="https://www.gelato.com/in/shipping-and-delivery" className="hover:text-gray-300">Shipping and delivery</a></li>
                        <li><a href="https://www.gelato.com/in/dropshipping-products" className="hover:text-gray-300">Dropshipping products</a></li>
                        <li><a href="https://www.gelato.com/in/platinum" className="hover:text-gray-300">Pro sellers</a></li>
                        <li><a href="https://www.gelato.com/in/white-label-products" className="hover:text-gray-300">White label products</a></li>
                        <li><a href="https://support.gelato.com/en/articles/8996072-what-is-your-return-policy-and-quality-guarantee?_gl=1*j6zyo0*_ga*NzM3NTk4NjkzLjE3MjYxNjU0MTc.*_ga_XBMT9WLLHR*MTcyNjQxMjU4Ni44LjEuMTcyNjQxMjY1OC42MC4wLjIwNTk5MDc4NjE.*_gcl_au*NDI3ODQ3OTYyLjE3MjYxNjU0MzQ." className="hover:text-gray-300">Returns policy</a></li>
                        <li><a href="https://www.gelato.com/in/the-power-of-local" className="hover:text-gray-300">Global, yet local</a></li>
                        <li><a href="https://www.gelato.com/in/sustainability" className="hover:text-gray-300">Sustainability</a></li>
                        <li><a href="https://support.gelato.com/en/?_gl=1*mm1zdn*_ga*NzM3NTk4NjkzLjE3MjYxNjU0MTc.*_ga_XBMT9WLLHR*MTcyNjQxMjU4Ni44LjEuMTcyNjQxMjcwOC4xMC4wLjIwNTk5MDc4NjE.*_gcl_au*NDI3ODQ3OTYyLjE3MjYxNjU0MzQ." className="hover:text-gray-300">Support</a></li>
                    </DropdownSection>
                    <DropdownSection title="Integrations">
                        <li><a href="https://www.gelato.com/in/print-on-demand/shopify" className="hover:text-gray-300">Shopify</a></li>
                        <li><a href="https://www.gelato.com/in/print-on-demand/etsy" className="hover:text-gray-300">Etsy</a></li>
                        <li><a href="https://www.gelato.com/in/print-on-demand/woocommerce" className="hover:text-gray-300">WooCommerce</a></li>
                        <li><a href="https://www.gelato.com/in/print-on-demand/wix" className="hover:text-gray-300">Wix</a></li>
                        <li><a href="https://www.gelato.com/in/print-on-demand/squarespace" className="hover:text-gray-300">Squarespace</a></li>
                        <li><a href="https://www.gelato.com/in/print-on-demand/bigcommerce" className="hover:text-gray-300">BigCommerce</a></li>
                        <li><a href="https://dashboard.gelato.com/docs/?_gl=1*swq2gr*_ga*NzM3NTk4NjkzLjE3MjYxNjU0MTc.*_ga_XBMT9WLLHR*MTcyNjQxMjU4Ni44LjEuMTcyNjQxMjczNy42MC4wLjIwNTk5MDc4NjE.*_gcl_au*NDI3ODQ3OTYyLjE3MjYxNjU0MzQ." className="hover:text-gray-300">API</a></li>
                    </DropdownSection>
                    <DropdownSection title="Start selling">
                        <li><a href="https://www.gelato.com/in/embroidered-clothing" className="hover:text-gray-300">Embroidery</a></li>
                        <li><a href="https://www.gelato.com/in/embroidered-clothing" className="hover:text-gray-300">Print on demand t-shirts</a></li>
                        <li><a href="https://www.gelato.com/in/products/hoodies" className="hover:text-gray-300">Print on demand hoodies</a></li>
                        <li><a href="https://www.gelato.com/in/products/posters-frames" className="hover:text-gray-300">Print on demand posters</a></li>
                        <li><a href="https://www.gelato.com/in/products/canvas" className="hover:text-gray-300">Print on demand canvas</a></li>
                        <li><a href="https://www.gelato.com/in/products/calendars" className="hover:text-gray-300">Print on demand calendars</a></li>
                        <li><a href="https://www.gelato.com/in/products/mugs" className="hover:text-gray-300">Print on demand mugs</a></li>
                        <li><a href="https://www.gelato.com/in/custom-products" className="hover:text-gray-300">Custom products</a></li>
                        <li><a href="https://www.gelato.com/in/custom-products" className="hover:text-gray-300">Custom clothing</a></li>
                        <li><a href="https://www.gelato.com/in/custom-merchandise" className="hover:text-gray-300">Custom merchandise</a></li>
                        <li><a href="https://www.gelato.com/in/products/custom-phone-cases" className="hover:text-gray-300">Custom phone cases</a></li>
                        <li><a href="https://www.gelato.com/in/print-on-demand/europe" className="hover:text-gray-300">Print on demand Europe</a></li>
                        <li><a href="https://www.gelato.com/in/print-on-demand/united-kingdom" className="hover:text-gray-300">Print on demand UK</a></li>
                        <li><a href="https://www.gelato.com/in/print-on-demand/france" className="hover:text-gray-300">Print on demand France</a></li>
                        <li><a href="https://www.gelato.com/in/print-on-demand/canada" className="hover:text-gray-300">Print on demand Canada</a></li>
                        <li><a href="https://www.gelato.com/in/merch-maker" className="hover:text-gray-300">Merch maker</a></li>
                    </DropdownSection>
                    <DropdownSection title="Company">
                        <li><a href="https://www.gelato.com/in/merch-maker" className="hover:text-gray-300">GelatoConnect</a></li>
                        <li><a href="https://www.gelato.com/in/about-gelato" className="hover:text-gray-300">About Gelato</a></li>
                        <li><a href="https://www.gelato.com/in/leadership" className="hover:text-gray-300">Leadership team</a></li>
                        <li><a href="https://www.gelato.com/in/board-and-investors" className="hover:text-gray-300">Board & investors</a></li>
                        <li><a href="https://www.gelato.com/in/news" className="hover:text-gray-300">Newsroom</a></li>
                        <li><a href="https://www.gelato.com/in/blog" className="hover:text-gray-300">Blog</a></li>
                        <li><a href="https://www.gelato.com/in/customer-stories" className="hover:text-gray-300">Customer Stories</a></li>
                        <li><a href="https://www.gelato.com/in/partners" className="hover:text-gray-300">Partners</a></li>
                        <li><a href="https://www.gelato.com/in/careers/careers-home" className="hover:text-gray-300">Careers</a></li>
                        <li><a href="https://www.gelato.com/in/affiliates" className="hover:text-gray-300">Affiliates program</a></li>
                    </DropdownSection>
                </div>

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
                <p className='font-gelato text-lg mt-10'>Find Gelato on: </p>

                <div className="flex space-x-10 mt-2">
                    <a href="https://www.instagram.com/gelato/" className="bg-black p-2 rounded-full hover:bg-gray-900">
                        <AiFillInstagram className="text-white" size="28px" />
                    </a>
                    <a href="https://www.facebook.com/gelatoconnects" className="bg-black p-2 rounded-full hover:bg-gray-900">
                        <FaFacebookF className="text-white" size="28px" />
                    </a>
                    <a href="https://www.tiktok.com/@gelatocreate" className="bg-black p-2 rounded-full hover:bg-gray-900">
                        <FaTiktok className="text-white" size="28px" />
                    </a>
                    <a href="https://www.linkedin.com/company/gelato/" className="bg-black p-2 rounded-full hover:bg-gray-900">
                        <FaLinkedinIn className="text-white" size="28px" />
                    </a>
                    <a href="https://m.youtube.com/c/GelatoConnects" className="bg-black p-2 rounded-full hover:bg-gray-900">
                        <FaYoutube className="text-white" size="28px" />
                    </a>
                </div>

                <div className="relative mr-10 mt-10">
                    <button onClick={toggleLanguageMenu} className="flex items-center h-10 space-x-2 border border-white rounded-lg px-8 bg-black text-white">
                        <span className='ml-2 text-sm'>{selectedLanguage}</span>
                        <IoIosArrowDown className="text-right" />
                    </button>
                    {languageMenuOpen && (
                        <ul className="absolute left-0 top-0 mt-[-170%] w-44 bg-black border border-white rounded-lg z-10">
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
                    )}
                </div>

                <div className="flex flex-col text-left space-y-4 mt-4">
                    <a href="https://www.gelato.com/in/contact" className="hover:text-gray-300">Contact us</a>
                    <a href="https://www.gelato.com/in/legal" className="hover:text-gray-300">Legal</a>
                    <a href="https://www.gelato.com/in/legal/privacy" className="hover:text-gray-300">Privacy policy</a>
                    <a href="https://www.gelato.com/in/legal/cookie" className="hover:text-gray-300">Cookie policy</a>
                    <a href="https://www.gelato.com/in/legal/api-terms" className="hover:text-gray-300">API terms</a>
                    <a href="https://www.gelato.com/in/sitemap" className="hover:text-gray-300">Sitemap</a>
                </div>
            </div>

        </div>

    );
}

export default FooterMob;

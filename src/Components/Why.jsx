import React from 'react';

function Why() {
    return (
        <div className="text-center text-[#212121] mt-14">
            <h1 className="text-4xl font-gelatoregular lg:text-6xl lg:font-gelatomedium mb-6">Why choose Gelato</h1>
            <div className="lg:hidden">
                <img src="assets/images/why.webp" alt="Why Choose Gelato" />
            </div>
            <div className="flex items-center justify-center text-[#212121]">
                <div className="hidden lg:flex lg:w-5/12">
                    <img src="assets/images/why.webp" alt="Why Choose Gelato" />
                </div>
                <div className=" lg:w-1/2 p-10 text-left text-1xl">
                    <div className="space-y-2">
                        <div>
                            <h2 className="text-3xl lg:text-2xl font-gelatoregular py-2">▻World's largest print-on-demand network</h2>
                            <p className="font-gelato">140+ print partners in 32 countries. Gelato is a truly global service.</p>
                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-2xl py-2 font-gelatoregular">▻Sell globally, produce locally</h2>
                            <p className="font-gelato">Your products are produced close to your customers, wherever they are.</p>
                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-2xl py-2 font-gelatoregular">▻100% free editing tools</h2>
                            <p className="font-gelato">
                                Create your custom products using our suite of <a href="/your-desired-link" className="underline hover:text-gray-500">free tools</a>.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-2xl py-2 font-gelatoregular">▻60+ logistics partners</h2>
                            <p className="font-gelato lg:hidden">
                                Our global network of logistics partners ensures your products are delivered fast.
                            </p>
                            <p className="hidden lg:block font-gelato">
                                Our global network of logistics partners ensures your products are delivered <br /> fast.
                            </p>
                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-2xl py-2 font-gelatoregular">▻High-quality products</h2>
                            <p className="hidden lg:block lg:font-gelato">We partner with the world's leading brands to ensure the best quality <br /> products.</p>
                            <p className="font-gelato lg:hidden">We partner with the world's leading brands to ensure the best quality products.</p>

                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-2xl py-2 font-gelatoregular">▻ Endless creativity with Shutterstock Images</h2>
                            <p className="font-gelato lg:hidden">Access millions of images and graphics to create unique products you can sell in your store.</p>
                            <p className="hidden lg:block font-gelato">Access millions of images and graphics to create unique products you can <br />sell in your store.</p>
                        </div>
                        <div>
                            <h2 className="text-3xl lg:text-2xl py-2 font-gelatoregular">▻1-click integration to the leading ecommerce platforms</h2>
                            <p className="font-gelato lg:hidden">Connect your store to Gelato using <a href="/your-desired-link" className="underline hover:text-gray-500">our integrations</a> with <a href="/your-desired-link" className="underline hover:text-gray-500">Shopify</a>, <a href="/your-desired-link" className="underline hover:text-gray-500">Etsy</a> and more.</p>
                            <p className="hidden lg:block font-gelato">Connect your store to Gelato using <a href="/your-desired-link" className="underline hover:text-gray-500">our integrations</a> with <a href="/your-desired-link" className="underline hover:text-gray-500">Shopify</a>, <a href="/your-desired-link" className="underline hover:text-gray-500">Etsy</a> and <br /> more.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Why;

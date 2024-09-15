import React from 'react'
import HelloBar from '../Components/HelloBar'; 
import NavBar from '../Components/NavBar';
import ToolBar from '../Components/ToolBar';
import Hero from '../Components/Hero';
import OffersBar from '../Components/OffersBar';
import Why from '../Components/Why';
import Solutions from '../Components/Solutions';
import GelatoConnect from '../Components/GelatoConnect';
import Meet from '../Components/Meet';
import FooterC from '../Components/FooterC';
import FooterStart from '../Components/FooterStart';
import Footer from '../Components/Footer';


const Home = () => {
    return (
        <div>
            <HelloBar/>
             <NavBar />
             <ToolBar />
             <Hero />
             <OffersBar />
             <Why />
             <Solutions />
             <GelatoConnect />
             <Meet />
             <Footer />

        </div>
    );
};

export default Home;
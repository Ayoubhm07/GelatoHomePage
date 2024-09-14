import React from 'react'
import HelloBar from '../Components/HelloBar'; 
import NavBar from '../Components/NavBar';
import ToolBar from '../Components/ToolBar';
import Hero from '../Components/Hero';
import OffersBar from '../Components/OffersBar';
import Why from '../Components/Why';
import Solutions from '../Components/Solutions';
// import Hero from '../Components/Hero';
// import Reasons from '../Components/Reasons';
// import How from '../Components/How';
// import Stories from '../Components/Stories';
// import Discover from '../Components/Discover';
// import Footer from '../Components/Footer';

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

        </div>
    );
};

export default Home;
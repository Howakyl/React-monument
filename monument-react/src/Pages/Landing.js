import React from 'react';
import Header from '../components/LandingHeader';
import Archive from '../components/Archive';
import About from '../components/About';
import Gallery from '../components/Gallery';
import './Landing.css';
import Contact from '../components/Contact';

const Landing  = (props) => {
    return (
        <div>
            <Header />
            <Archive />
            <About />
            <Gallery />
            <Contact />
        </div>
    )
};

export default Landing;
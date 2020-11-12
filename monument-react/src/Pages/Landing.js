import React from 'react';
import Header from '../components/LandingHeader';
import Archive from '../components/Archive';
import About from '../components/About';
import Gallery from '../components/Gallery';
import './Landing.css';
import Contact from '../components/Contact';
// import articleImageOne from '../images/article_1.jpg';

const Landing  = (props) => {
    return (
        <div>
            <Header />
            {/* <img src={articleImageOne} alt="cactus"/> */}
            <Archive />
            <About />
            <Gallery />
            <Contact />
        </div>
    )
};

export default Landing;
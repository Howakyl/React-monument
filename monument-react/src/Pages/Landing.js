import React from 'react';
import Header from '../components/LandingHeader';
import Archive from '../components/Archive';
import About from '../components/About';
import Gallery from '../components/Gallery';
import './Landing.css';
// import articleImageOne from '../images/article_1.jpg';

const Landing  = (props) => {
    return (
        <div>
            <Header />
            {/* <img src={articleImageOne} alt="cactus"/> */}
            <Archive />
            <About />
            <Gallery />
        </div>
    )
};

export default Landing;
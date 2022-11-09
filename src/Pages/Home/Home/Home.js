import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Slider from '../Slider/Slider';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Slider></Slider>
        <AboutUs></AboutUs>
      </div>
    );
};

export default Home;
import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import Slider from '../Slider/Slider';
import MenuCards from './MenuCards/MenuCards';

const Home = () => {
    return (
      <div>
        <Banner></Banner>
        <Slider></Slider>
        <AboutUs></AboutUs>
        <MenuCards></MenuCards>
      </div>
    );
};

export default Home;
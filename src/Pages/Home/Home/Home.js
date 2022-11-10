import React from 'react';
import useTitle from '../../../hooks/useTitle';
import AboutUs from '../AboutUs/AboutUs';
import Banner from '../Banner/Banner';
import MenuCards from '../MenuCards/MenuCards';
import Slider from '../Slider/Slider';

const Home = () => {
  useTitle('Home')
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
import React from 'react';
import bannerImg from '../../../Assets/banner-img/banner-img.jpg';
const Banner = () => {
    return (
      <div className="hero  w-full bg-red-300 lg:mx-auto lg:w-1/2 ">
        <div className="hero-content text-center mt-12">
          <div className="max-w-md text-white">
            <div className="mx-auto">
              <img src={bannerImg} className="w-full" alt="" />
            </div>
            <h1 className="text-3xl text-center mt-12">
              Welcome to{" "}
              <span className="text-7xl font-extrabold ">PetChukti</span>
            </h1>
            <p className="py-6">
              Tihs kitchen is cloud based. Here the food will be made after the
              order and will be delivered to customer doorstep.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Banner;
import React from 'react';
import img from '../../../Assets/kitchen/kitchen.jpeg';
const AboutUs = () => {
    return (
    <div className="hero p-8 w-full bg-red-200 mx-auto my-24 lg:w-1/2 ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src={img} className="max-w-sm rounded-lg shadow-2xl" />
            <div>
              <h1 className="text-5xl font-bold">About Us</h1>
              <p className="py-6">
              This Kitchen is made on purpose to maintain the hygene
               of rich food along with good amount of protein to balance healthy 
               meal. We do not use any old item to prepare food. We try to make food
                ready after the order so that customer can get the best taste. We alwa
                ys prefer customer's choice.
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
    );
};

export default AboutUs;
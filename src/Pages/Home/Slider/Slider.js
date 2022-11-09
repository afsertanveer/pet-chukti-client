import React from 'react';
import img1 from '../../../Assets/services/1.jpg';
import img2 from '../../../Assets/services/2.jpg';
import img3 from '../../../Assets/services/3.jpg';
import img4 from '../../../Assets/services/4.jpg';
import img5 from '../../../Assets/services/5.jpg';
import img6 from '../../../Assets/services/6.jpg';
const Slider = () => {
    return (
      <div className="text-center mt-20">
        <h2 className="text-5xl font-bold text-orange-600">
          Captures of the current available platters is in slider.
        </h2>
        <div className="carousel w-full mt-3 mx-auto bg-slate-700 lg:w-1/2">
          <div id="slide1" className="carousel-item relative w-full">
            <img src={img1} className="w-5/6 mx-auto my-6" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide6" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img src={img2} className="w-5/6 mx-auto my-6" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img src={img3} className="w-5/6 mx-auto my-6" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide4" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide4" className="carousel-item relative w-full">
            <img src={img4} className="w-5/6 mx-auto my-6" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide5" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide5" className="carousel-item relative w-full">
            <img src={img5} className="w-5/6 mx-auto my-6" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide4" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide6" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide6" className="carousel-item relative w-full">
            <img src={img6} className="w-5/6 mx-auto my-6" />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide5" className="btn btn-circle">
                ❮
              </a>
              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Slider;
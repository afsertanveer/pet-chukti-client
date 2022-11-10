import React from 'react';
import { FaStar } from "react-icons/fa";
const Review = ({review}) => {
    const {details,photoURL,email,rating}= review;
    return (
      <div className="text-center my-10 border border-black p-4 flex justify-between items-center">
        {photoURL ? (
          <img src={photoURL} style={{ height: "45px" }} alt="" />
        ) : (
          <h3 className="font-bold">{email}</h3>
        )}
        <p className="font-medium ml-2 ">{details}</p>
          <span className="flex items-center">
            {rating} <FaStar className="text-yellow-600 ml-2"></FaStar>
          </span>
      </div>
    );
};

export default Review;
import React from 'react';

const Review = ({review}) => {
    const {details,email}= review;
    return (
      <div className="text-center my-10 border border-black p-16">
        <h3 className="font-bold">{email}</h3>
        <p className='text-2xl'>{details}</p>
      </div>
    );
};

export default Review;
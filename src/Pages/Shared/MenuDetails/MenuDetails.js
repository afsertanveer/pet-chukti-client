import React, { useContext, useEffect, useState } from 'react';
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import Review from '../../Review/Review';
const MenuDetails = () => {
    const {user} = useContext(AuthContext);
    const [reviews,setReviews] = useState([]);
    const menu =useLoaderData();
    const {_id,photoURL,name,price,rating,reviewed,description} = menu;
    const email=user?.email;
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const newReview = form.review.value;
        const timeReviewed = new Date();
        console.log(timeReviewed);
        const review={
            menu:_id,
            menuName:name,
            email,
            details:newReview,
            timeReviewed
        }
        fetch("http://localhost:5000/review", {
          method: "POST",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify(review),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.acknowledged) {
              alert("Review placed successfully");
              form.reset();
              const allReviews = [review,...reviews];
              setReviews(allReviews);
            }
          })
          .catch((err) => console.log(err));
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/review/${_id}`)
        .then(res=>res.json())
        .then(data=>setReviews(data));
    },[])
    return (
      <div>
        <div className="bg-green-200">
          <div className="my-6 text-center">
            <div className="p-12">
              <h1 className="text-5xl text-orange-500 font-extrabold">
                {name}
              </h1>
            </div>
            <img src={photoURL} className="inline lg:w-3/4" alt="" />
          </div>
          <div className="p-4 lg:px-32 text-center text-gray-500 font-bold">
            <p className="text-sm lg:text-3xl ">{description}</p>
          </div>
          <div className="mt-20 p-4 flex justify-between flex-wrap text-2xl font-medium lg:p-16">
            <p>Price: {price} Tk.</p>
            <p className="flex justify-center items-center">
              Rating: {rating}{" "}
              <span>
                <FaStar className="text-yellow-500 ml-2"></FaStar>
              </span>
            </p>
          </div>
        </div>

        {user?.email ? (
          <>
            <div className="my-20 p-4 lg:p-36">
              <div className="mb-10">
                <h1 className="text-center text-3xl lg:text-5xl mb-6">
                  Add Your Review
                </h1>
                <form onSubmit={handleSubmit}>
                  <label>
                    Review:
                    <br />
                    <textarea
                      name="review"
                      className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                      rows="4"
                    ></textarea>
                  </label>
                  <div className="text-center mt-12">
                    <button
                      type="submit"
                      className="btn btn-outline btn-success"
                    >
                      Add Review
                    </button>
                  </div>
                </form>
              </div>

              {reviews.length === 0 ? (
                <h2 className="text-4xl text-center font-bold">
                  No Reviews Yet
                </h2>
              ) : (
                <h2 className="text-5xl text-center">All Reviews</h2>
              )}
              {reviews.map((review) => (
                <Review key={review._id} review={review}></Review>
              ))}
            </div>
          </>
        ) : (
          <p className="text-4xl text-center font-bold mt-14">
            Please <Link to='/login'  className='text-red-600'>Login</Link> To add Review
          </p>
        )}
      </div>
    );
};

export default MenuDetails;
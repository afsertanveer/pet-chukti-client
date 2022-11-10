import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider';
import useTitle from '../../../hooks/useTitle';
import Review from '../../Review/Review';
const MenuDetails = () => {
    const {user} = useContext(AuthContext);
    const [reviews,setReviews] = useState([]);
    const [rating,setRating] = useState(0);
    const [userSetRating,setUserSetRating] = useState(5);
    const menu =useLoaderData();
    const {_id,photoURL,name,price,description} = menu;
    useTitle(name);
    const email=user?.email;
    const userPhoto = user?.photoURL;
    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const newReview = form.review.value;
        const timeReviewed = new Date();
        const review = {
          menu: _id,
          menuName: name,
          email,
          photoURL: userPhoto,
          details: newReview,
          timeReviewed,
          rating: userSetRating,
        };
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
              toast.success('Successfully Placed the review');
              form.reset();
              let putRating= 0;
              let count=0;
              const allReviews = [review,...reviews];
              

              allReviews.map(review=>{
                putRating = putRating + parseFloat(review.rating);
                count++;
                return putRating;
              })
              if(count!==0){
                putRating = (putRating/count).toFixed(1);
                
              }
              setRating(putRating)
              setReviews(allReviews);
            }
          })
          .catch((err) => console.log(err));
    }

    useEffect(()=>{
        fetch(`http://localhost:5000/review/${_id}`)
        .then(res=>res.json())
        .then(data=>{
          setReviews(data);
          let getRating=0;
          let c=0;
          data.map(review=>{
            getRating= getRating+parseFloat(review.rating);
            c++;
            return getRating;
          })
          let newRating=0;
          if(c!==0){
           newRating = (getRating/c).toFixed(1);
          }
          setRating(newRating);
        });
    },[_id])
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

        <div className="my-20 p-4 lg:p-36">
          <div className="mb-10">
            <h1 className="text-center text-3xl lg:text-5xl mb-6">
              Add Your Review
            </h1>
            {user ? (
              <form onSubmit={handleSubmit}>
                <label className="text-2xl">
                  Your Review
                  <br />
                  <textarea
                    name="review"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none"
                    rows="4"
                    placeholder="Add Your Review Here"
                  ></textarea>
                </label>
                <br />
                <label className="flex mr-5 items-center text-2xl">
                  Ratings
                  <select
                    className="px-3 py-2 text-gray-700 border rounded-lg focus:outline-none ml-5"
                    name="option"
                    onChange={(event) => setUserSetRating(event.target.value)}
                  >
                    ><option value="5">5</option>
                    <option value="4.5">4.5</option>
                    <option value="4">4</option>
                    <option value="3.5">3.5</option>
                    <option value="3">3</option>
                    <option value="2.5">2.5</option>
                    <option value="2">2</option>
                    <option value="1.5">1.5</option>
                    <option value="1">1</option>
                    <option value="0.5">0.5</option>
                  </select>
                  <FaStar className="text-yellow-500 ml-5"></FaStar>
                </label>
                <div className="text-center mt-4">
                  <button type="submit" className="btn btn-outline btn-success">
                    Add Review
                  </button>
                </div>
              </form>
            ) : (
              <p className="text-4xl text-center font-bold mt-14">
                Please
                <Link to="/login" className="text-red-600">
                  Login
                </Link>
                To add Review
              </p>
            )}
          </div>

          {reviews.length === 0 ? (
            <h2 className="text-4xl text-center font-bold">No Reviews Yet</h2>
          ) : (
            <h2 className="text-5xl text-center mt-12">All Reviews</h2>
          )}
          {reviews.map((review, _idx) => (
            <Review key={_idx} review={review}></Review>
          ))}
        </div>
      </div>
    );
};

export default MenuDetails;
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { useLoaderData, useNavigate } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const EditReview = () => {
    useTitle('Edit Review');
    const review = useLoaderData();
    const navigate = useNavigate();
     const { details, _id } = review;
    const [myReview,setMyReview] = useState(details);
     const handleOnSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const details= form.review.value;
        console.log(details);
       fetch(
         `https://pet-chukti-server.vercel.app/review/${_id}`,
         {
           method: "PATCH",
           headers: {
             "content-type": "application/json",
           },
           body: JSON.stringify({details:details}),
         }
       )
         .then((res) => res.json())
         .then((data) => {
           console.log("hi data");
           if (data.modifiedCount > 0) {
             form.reset();
             toast.success("Edited Succesfully");
             navigate("/my-reviews");
           }
         });
     };
    return (
      <div>
        <h2 className="text-center text-3xl my-24 font-semibold"></h2>
        <form onSubmit={handleOnSubmit}>
          <label className="text-2xl">
            Edit Your Review
            <br />
            <textarea
              type="text"
              name="review"
              className="w-full px-3 py-2 text-gray-700 border rounded-lg "
              rows="4"
              placeholder="Add Your Review Here"
              onChange={(event) => setMyReview(event.target.value)}
              defaultValue={details}
            
            ></textarea>
          </label>
          <div className="text-center mt-5">
            <button className="btn btn-outline btn-info" type="submit">
              Update
            </button>
          </div>
        </form>
      </div>
    );
};

export default EditReview;
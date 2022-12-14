import React, { useContext, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Context/AuthProvider';
import useTitle from './../../hooks/useTitle';
import ReviewRow from './ReviewRow';

const MyReview = () => {
    useTitle('My Reviews');
    const { user, logOut } = useContext(AuthContext);
    const [myReviews,setMyReviews] = useState([]);
    const email=user?.email;
    useEffect(() => {
      fetch(`https://pet-chukti-server.vercel.app/review/userReview/${email}`, {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
        .then((res) => {
          if (res.status === 401 || res.status === 403) {
            logOut()
              .then(() => {})
              .catch((err) => console.log(err));
          }
          return res.json();
        })
        .then((data) => {
          setMyReviews(data);
        });
    }, [email]);

    
    const handleDelete = (id) => {
      const proceed = window.confirm(
        "Are you sure? You want to cancel this order"
      );
      if (proceed) {
        fetch(`https://pet-chukti-server.vercel.app/review/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              toast.success("Removed Successfully");
              const remaining = myReviews.filter((review) => review._id !== id);
              setMyReviews(remaining);
            }
          });
      }
    };
    return (
      <div>
        {myReviews.length > 0 && (
          <h2 className="text-3xl font-semibold text-center my-20">
            All your reviews is shown here
          </h2>
        )}
        {myReviews.length > 0 ? (
          <div className="overflow-x-auto w-full">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>

                  <th>Menu Item</th>
                  <th>Review</th>
                  <th>Edit</th>
                </tr>
              </thead>
              <tbody>
                {myReviews.map((review) => (
                  <ReviewRow
                    key={review._id}
                    review={review}
                    handleDelete={handleDelete}
                  ></ReviewRow>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <h2 className="text-center text-5xl text-red-700 font-extrabold">
            Nothing To show
          </h2>
        )}
      </div>
    );
};

export default MyReview;

